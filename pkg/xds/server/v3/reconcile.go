package v3

import (
	"context"
	"fmt"
	"go.uber.org/multierr"
	"strconv"
	"strings"

	envoy_core "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_types "github.com/envoyproxy/go-control-plane/pkg/cache/types"
	envoy_cache "github.com/envoyproxy/go-control-plane/pkg/cache/v3"
	envoy_resource "github.com/envoyproxy/go-control-plane/pkg/resource/v3"
	"github.com/pkg/errors"
	"google.golang.org/protobuf/proto"

	"github.com/kumahq/kuma/pkg/core"
	model "github.com/kumahq/kuma/pkg/core/xds"
	util_xds "github.com/kumahq/kuma/pkg/util/xds"
	xds_context "github.com/kumahq/kuma/pkg/xds/context"
	"github.com/kumahq/kuma/pkg/xds/generator"
	"github.com/kumahq/kuma/pkg/xds/generator/modifications"
	xds_hooks "github.com/kumahq/kuma/pkg/xds/hooks"
	xds_sync "github.com/kumahq/kuma/pkg/xds/sync"
	xds_template "github.com/kumahq/kuma/pkg/xds/template"
)

var reconcileLog = core.Log.WithName("xds").WithName("reconcile")

var _ xds_sync.SnapshotReconciler = &reconciler{}

type reconciler struct {
	generator      snapshotGenerator
	cacher         snapshotCacher
	statsCallbacks util_xds.StatsCallbacks
}

func (r *reconciler) Clear(proxyId *model.ProxyId, streamID model.StreamID) error {
	nodeId := &envoy_core.Node{Id: proxyId.String()}
	r.clearUndeliveredConfigStats(nodeId)
	r.cacher.Clear(nodeId, streamID)
	return nil
}

func (r *reconciler) clearUndeliveredConfigStats(nodeId *envoy_core.Node) {
	snapshots := r.cacher.Get(nodeId)
	for _, snapshot := range snapshots {
		for _, res := range snapshot.Resources {
			if res.Version != "" {
				r.statsCallbacks.DiscardConfig(res.Version)
			}
		}
	}
}

func (r *reconciler) Reconcile(ctx context.Context, xdsCtx xds_context.Context, proxy *model.Proxy) (bool, error) {
	node := &envoy_core.Node{Id: proxy.Id.String()}
	snapshot, err := r.generator.GenerateSnapshot(ctx, xdsCtx, proxy)
	if err != nil {
		return false, errors.Wrapf(err, "failed to generate a snapshot")
	}

	previousSnapshots := r.cacher.Get(node)

	changed := false
	var errs []error
	for streamID, previousSnapshot := range previousSnapshots {
		// To avoid assigning a new version every time, compare with
		// the previous snapshot and reuse its version whenever possible,
		// fallback to UUID otherwise
		changedOnStream, err := r.reconcileOnStream(ctx, proxy, streamID, previousSnapshot, snapshot)
		if err != nil {
			errs = append(errs, err)
		}
		changed = changed || changedOnStream
	}

	return changed, multierr.Combine(errs...)
}

func (r *reconciler) reconcileOnStream(ctx context.Context, proxy *model.Proxy, streamID model.StreamID,
	previousSnapshot *envoy_cache.Snapshot, newSnapshot *envoy_cache.Snapshot) (bool, error) {
	snapshot, changed := autoVersion(previousSnapshot, newSnapshot)
	// We need to force new version of EDS, otherwise clusters will be stuck in warming state.
	if previousSnapshot.GetVersion(envoy_resource.ClusterType) != snapshot.GetVersion(envoy_resource.ClusterType) {
		snapshot.Resources[envoy_types.Endpoint].Version = core.NewUUID()
	}

	resKey := proxy.Id.ToResourceKey()
	log := reconcileLog.WithValues("proxyName", resKey.Name, "mesh", resKey.Mesh)

	// Validate the resources we reconciled before sending them
	// to Envoy. This ensures that we have as much in-band error
	// information as possible, which is especially useful for tests
	// that don't actually program an Envoy instance.
	if len(changed) == 0 {
		log.V(1).Info("config is the same", "streamID", streamID)
		return false, nil
	}

	for _, resources := range snapshot.Resources {
		for name, resource := range resources.Items {
			if err := validateResource(resource.Resource); err != nil {
				return false, errors.Wrapf(err, "invalid resource %q", name)
			}
		}
	}

	if err := snapshot.Consistent(); err != nil {
		return false, errors.Wrap(err, "inconsistent snapshot")
	}
	log.Info("config has changed", "versions", changed, "streamID", streamID)

	node := &envoy_core.Node{Id: proxy.Id.String()}
	if err := r.cacher.Cache(ctx, node, streamID, snapshot); err != nil {
		return false, errors.Wrap(err, "failed to store snapshot")
	}

	for _, version := range changed {
		r.statsCallbacks.ConfigReadyForDelivery(version)
	}
	return true, nil
}

func validateResource(r envoy_types.Resource) error {
	switch v := r.(type) {
	// Newer go-control-plane versions have `ValidateAll()` method, that accumulates as many validation errors as possible.
	case interface{ ValidateAll() error }:
		return v.ValidateAll()
	// Older go-control-plane stops validation at the first error.
	case interface{ Validate() error }:
		return v.Validate()
	default:
		return nil
	}
}

func autoVersion(old *envoy_cache.Snapshot, new *envoy_cache.Snapshot) (*envoy_cache.Snapshot, []string) {
	for resourceType, resources := range old.Resources {
		new.Resources[resourceType] = reuseVersion(resources, new.Resources[resourceType])
	}

	var changed []string
	for resourceType, resource := range new.Resources {
		if old.Resources[resourceType].Version != resource.Version {
			changed = append(changed, resource.Version)
		}
	}

	return new, changed
}

func reuseVersion(old, new envoy_cache.Resources) envoy_cache.Resources {
	new.Version = old.Version
	if !equalSnapshots(old.Items, new.Items) {
		new.Version = core.NewUUID()
	}
	return new
}

func equalSnapshots(old, new map[string]envoy_types.ResourceWithTTL) bool {
	if len(new) != len(old) {
		return false
	}
	for key, newValue := range new {
		if oldValue, hasOldValue := old[key]; !hasOldValue || !proto.Equal(newValue.Resource, oldValue.Resource) {
			return false
		}
	}
	return true
}

type snapshotGenerator interface {
	GenerateSnapshot(context.Context, xds_context.Context, *model.Proxy) (*envoy_cache.Snapshot, error)
}

type TemplateSnapshotGenerator struct {
	ProxyTemplateResolver xds_template.ProxyTemplateResolver
	ResourceSetHooks      []xds_hooks.ResourceSetHook
}

func (s *TemplateSnapshotGenerator) GenerateSnapshot(ctx context.Context, xdsCtx xds_context.Context, proxy *model.Proxy) (*envoy_cache.Snapshot, error) {
	template := s.ProxyTemplateResolver.GetTemplate(proxy)

	gen := generator.ProxyTemplateGenerator{ProxyTemplate: template}

	rs, err := gen.Generate(ctx, xdsCtx, proxy)
	if err != nil {
		return nil, err
	}
	for _, hook := range s.ResourceSetHooks {
		if err := hook.Modify(rs, xdsCtx, proxy); err != nil {
			return nil, errors.Wrapf(err, "could not apply hook %T", hook)
		}
	}
	if err := modifications.Apply(rs, template.GetConf().GetModifications(), proxy.APIVersion); err != nil {
		return nil, errors.Wrap(err, "could not apply modifications")
	}

	version := "" // empty value is a sign to other components to generate the version automatically
	resources := map[envoy_resource.Type][]envoy_types.Resource{}

	for _, resourceType := range rs.ResourceTypes() {
		resources[resourceType] = append(resources[resourceType], rs.ListOf(resourceType).Payloads()...)
	}

	return envoy_cache.NewSnapshot(version, resources)
}

type snapshotCacher interface {
	Get(*envoy_core.Node) map[model.StreamID]*envoy_cache.Snapshot
	Cache(context.Context, *envoy_core.Node, model.StreamID, *envoy_cache.Snapshot) error
	Clear(*envoy_core.Node, model.StreamID)
}

type simpleSnapshotCacher struct {
	hasher envoy_cache.NodeHash
	store  envoy_cache.SnapshotCache
}

const nodeHashSeparator = ":"

func (s *simpleSnapshotCacher) Get(node *envoy_core.Node) map[model.StreamID]*envoy_cache.Snapshot {
	nodeHashPrefix := s.nodeHashPrefix(node)
	var nodeKeys []string
	for _, key := range s.store.GetStatusKeys() {
		if strings.HasPrefix(key, nodeHashPrefix) {
			nodeKeys = append(nodeKeys, key)
		}
	}

	snapshots := make(map[model.StreamID]*envoy_cache.Snapshot)
	for _, key := range nodeKeys {
		// error here means no snapshot is available for the key, we can safely ignore it here
		snap, _ := s.store.GetSnapshot(key)
		if snap != nil {
			snapshot, ok := snap.(*envoy_cache.Snapshot)
			if !ok {
				reconcileLog.Error(errors.Errorf("couldn't convert snapshot of type '%T' from cache to envoy Snapshot on key '%s'", snapshot, key), "failed to retrieve snapshot")
				continue
			}

			streamID, _ := strconv.ParseInt(key[len(nodeHashPrefix):], 10, 64) // base 10, bit size 64
			snapshots[streamID] = snapshot
		}
	}

	return snapshots
}

func (s *simpleSnapshotCacher) Cache(ctx context.Context, node *envoy_core.Node, streamID model.StreamID, snapshot *envoy_cache.Snapshot) error {
	return s.store.SetSnapshot(ctx, s.nodeHashWithStreamID(node, streamID), snapshot)
}

func (s *simpleSnapshotCacher) Clear(node *envoy_core.Node, streamID model.StreamID) {
	s.store.ClearSnapshot(s.nodeHashWithStreamID(node, streamID))
}

func (s *simpleSnapshotCacher) nodeHashPrefix(node *envoy_core.Node) string {
	return fmt.Sprintf("%s%s%d", s.hasher.ID(node), nodeHashSeparator)
}

func (s *simpleSnapshotCacher) nodeHashWithStreamID(node *envoy_core.Node, streamID model.StreamID) string {
	// node id is in format of <name>.<mesh>
	return fmt.Sprintf("%s%d", s.nodeHashPrefix(node), nodeHashSeparator, streamID)
}
