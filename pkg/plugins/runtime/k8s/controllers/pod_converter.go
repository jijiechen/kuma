package controllers

import (
	"context"
	"fmt"
	"maps"
	"reflect"
	"regexp"

	"github.com/pkg/errors"
	kube_core "k8s.io/api/core/v1"
	kube_client "sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/yaml"

	mesh_proto "github.com/kumahq/kuma/api/mesh/v1alpha1"
	config_core "github.com/kumahq/kuma/pkg/config/core"
	"github.com/kumahq/kuma/pkg/core"
	core_mesh "github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	k8s_common "github.com/kumahq/kuma/pkg/plugins/common/k8s"
	mesh_k8s "github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/api/v1alpha1"
	"github.com/kumahq/kuma/pkg/plugins/runtime/k8s/metadata"
	"github.com/kumahq/kuma/pkg/util/pointer"
	util_proto "github.com/kumahq/kuma/pkg/util/proto"
)

var (
	converterLog          = core.Log.WithName("discovery").WithName("k8s").WithName("pod-to-dataplane-converter")
	metricsAggregateRegex = regexp.MustCompile(metadata.KumaMetricsPrometheusAggregatePattern)
)

type PodConverter struct {
	ServiceGetter       kube_client.Reader
	NodeGetter          kube_client.Reader
	ResourceConverter   k8s_common.Converter
	InboundConverter    InboundConverter
	Zone                string
	SystemNamespace     string
	Mode                config_core.CpMode
	KubeOutboundsAsVIPs bool
}

func (p *PodConverter) PodToDataplane(
	ctx context.Context,
	dataplane *mesh_k8s.Dataplane,
	pod *kube_core.Pod,
	services []*kube_core.Service,
	others []*mesh_k8s.Dataplane,
	mesh *core_mesh.MeshResource,
) error {
	logger := converterLog.WithValues("Dataplane.name", dataplane.Name, "Pod.name", pod.Name)
	previousMesh := dataplane.Mesh
	dataplane.Mesh = mesh.Meta.GetName()
	dataplaneProto, err := p.dataplaneFor(ctx, pod, services, others, mesh.Spec.MeshServicesMode())
	if err != nil {
		return err
	}
	currentSpec, err := dataplane.GetSpec()
	if err != nil {
		return err
	}
	// we need to validate if the labels have changed
	labels, err := model.ComputeLabels(
		core_mesh.DataplaneResourceTypeDescriptor,
		currentSpec,
		mergeLabels(dataplane.GetLabels(), pod.Labels),
		model.NewNamespace(pod.Namespace, pod.Namespace == p.SystemNamespace),
		dataplane.Mesh,
		p.Mode,
		true,
		p.Zone,
	)
	if err != nil {
		return err
	}
	if model.Equal(currentSpec, dataplaneProto) && previousMesh == dataplane.Mesh && reflect.DeepEqual(labels, dataplane.GetLabels()) {
		logger.V(1).Info("resource hasn't changed, skip")
		return nil
	}
	dataplane.SetSpec(dataplaneProto)
	dataplane.SetLabels(labels)
	return nil
}

func (p *PodConverter) PodToIngress(ctx context.Context, zoneIngress *mesh_k8s.ZoneIngress, pod *kube_core.Pod, services []*kube_core.Service) error {
	logger := converterLog.WithValues("ZoneIngress.name", zoneIngress.Name, "Pod.name", pod.Name)
	// Start with the existing ZoneIngress spec so we won't override available services in Ingress section
	zoneIngressRes := core_mesh.NewZoneIngressResource()
	if err := p.ResourceConverter.ToCoreResource(zoneIngress, zoneIngressRes); err != nil {
		logger.Error(err, "unable to convert ZoneIngress k8s object into core resource")
		return err
	}

	if err := p.IngressFor(ctx, zoneIngressRes.Spec, pod, services); err != nil {
		return err
	}

	currentSpec, err := zoneIngress.GetSpec()
	if err != nil {
		return err
	}
	// we need to validate if the labels have changed
	labels, err := model.ComputeLabels(
		core_mesh.ZoneIngressResourceTypeDescriptor,
		currentSpec,
		mergeLabels(zoneIngress.GetLabels(), pod.Labels),
		model.NewNamespace(pod.Namespace, pod.Namespace == p.SystemNamespace),
		model.NoMesh,
		p.Mode,
		true,
		p.Zone,
	)
	if err != nil {
		return err
	}

	if model.Equal(currentSpec, zoneIngressRes.Spec) && reflect.DeepEqual(labels, zoneIngress.GetLabels()) {
		logger.V(1).Info("resource hasn't changed, skip")
		return nil
	}
	zoneIngress.SetSpec(zoneIngressRes.Spec)
	zoneIngress.SetLabels(labels)
	return nil
}

func (p *PodConverter) PodToEgress(ctx context.Context, zoneEgress *mesh_k8s.ZoneEgress, pod *kube_core.Pod, services []*kube_core.Service) error {
	logger := converterLog.WithValues("ZoneEgress.name", zoneEgress.Name, "Pod.name", pod.Name)
	// Start with the existing ZoneEgress spec
	zoneEgressRes := core_mesh.NewZoneEgressResource()
	if err := p.ResourceConverter.ToCoreResource(zoneEgress, zoneEgressRes); err != nil {
		logger.Error(err, "unable to convert ZoneEgress k8s object into core resource")
		return err
	}

	if err := p.EgressFor(ctx, zoneEgressRes.Spec, pod, services); err != nil {
		return err
	}
	currentSpec, err := zoneEgress.GetSpec()
	if err != nil {
		return err
	}
	// we need to validate if the labels have changed
	labels, err := model.ComputeLabels(
		core_mesh.ZoneEgressResourceTypeDescriptor,
		currentSpec,
		mergeLabels(zoneEgress.GetLabels(), pod.Labels),
		model.NewNamespace(pod.Namespace, pod.Namespace == p.SystemNamespace),
		model.NoMesh,
		p.Mode,
		true,
		p.Zone,
	)
	if err != nil {
		return err
	}
	if model.Equal(currentSpec, zoneEgressRes.Spec) && reflect.DeepEqual(labels, zoneEgress.GetLabels()) {
		logger.V(1).Info("resource hasn't changed, skip")
		return nil
	}

	zoneEgress.SetSpec(zoneEgressRes.Spec)
	zoneEgress.SetLabels(labels)
	return nil
}

func processReachableBackendRefs(refs ReachableBackendRefs) []*mesh_proto.Dataplane_Networking_TransparentProxying_ReachableBackendRef {
	var result []*mesh_proto.Dataplane_Networking_TransparentProxying_ReachableBackendRef

	for _, ref := range refs.Refs {
		backendRef := &mesh_proto.Dataplane_Networking_TransparentProxying_ReachableBackendRef{
			Kind:      ref.Kind,
			Name:      pointer.Deref(ref.Name),
			Namespace: pointer.Deref(ref.Namespace),
			Labels:    ref.Labels,
		}

		if ref.Port != nil {
			backendRef.Port = util_proto.UInt32(pointer.Deref(ref.Port))
		}

		result = append(result, backendRef)
	}

	return result
}

func (p *PodConverter) dataplaneFor(
	ctx context.Context,
	pod *kube_core.Pod,
	services []*kube_core.Service,
	others []*mesh_k8s.Dataplane,
	msMode mesh_proto.Mesh_MeshServices_Mode,
) (*mesh_proto.Dataplane, error) {
	dataplane := &mesh_proto.Dataplane{Networking: &mesh_proto.Dataplane_Networking{}}
	annotations := metadata.Annotations(pod.Annotations)

	var tp mesh_proto.Dataplane_Networking_TransparentProxying
	var tpConfigInAnnotation bool
	var tpEnabledInAnnotation bool

	if v, ok := annotations.GetString(metadata.KumaTrafficTransparentProxyConfig); ok && v != "" {
		tpConfigInAnnotation = true
	}

	if v, ok, err := annotations.GetEnabled(metadata.KumaTransparentProxyingAnnotation); err != nil {
		return nil, err
	} else {
		tpEnabledInAnnotation = ok && v
	}

	if tpConfigInAnnotation || tpEnabledInAnnotation {
		if v, exist := annotations.GetList(metadata.KumaDirectAccess); exist {
			tp.DirectAccessServices = v
		}

		if v, exist := annotations.GetList(metadata.KumaTransparentProxyingReachableServicesAnnotation); exist {
			tp.ReachableServices = v
		}

		if v, exist := annotations.GetString(metadata.KumaReachableBackends); exist {
			var refs ReachableBackendRefs
			if err := yaml.Unmarshal([]byte(v), &refs); err != nil {
				return nil, errors.Errorf("cannot parse, %s has invalid format", metadata.KumaReachableBackends)
			}

			tp.ReachableBackends = &mesh_proto.Dataplane_Networking_TransparentProxying_ReachableBackends{
				Refs: processReachableBackendRefs(refs),
			}
		}
	}

	if tpEnabledInAnnotation {
		if v, ok, err := annotations.GetUint32(metadata.KumaTransparentProxyingInboundPortAnnotation); err != nil {
			return nil, err
		} else if !ok {
			return nil, errors.New("transparent proxying inbound port has to be set in transparent mode")
		} else {
			tp.RedirectPortInbound = v
		}

		if v, ok, err := annotations.GetUint32(metadata.KumaTransparentProxyingOutboundPortAnnotation); err != nil {
			return nil, err
		} else if !ok {
			return nil, errors.New("transparent proxying outbound port has to be set in transparent mode")
		} else {
			tp.RedirectPortOutbound = v
		}

		if v, _ := annotations.GetStringWithDefault(
			metadata.IpFamilyModeDualStack,
			metadata.KumaTransparentProxyingIPFamilyMode,
		); v != "" {
			switch v {
			case metadata.IpFamilyModeDualStack:
				tp.IpFamilyMode = mesh_proto.Dataplane_Networking_TransparentProxying_DualStack
			case metadata.IpFamilyModeIPv4:
				tp.IpFamilyMode = mesh_proto.Dataplane_Networking_TransparentProxying_IPv4
			default:
				return nil, errors.Errorf("invalid ip family mode '%s'", v)
			}
		}
	}

	// Avoid setting an empty TransparentProxying object by checking if any fields are set.
	// Only assign it if at least one relevant field has a non-zero or non-nil value.
	if tp.DirectAccessServices != nil ||
		tp.ReachableServices != nil ||
		tp.ReachableBackends != nil ||
		tp.RedirectPortInbound != 0 ||
		tp.RedirectPortOutbound != 0 ||
		tp.IpFamilyMode != 0 {
		dataplane.Networking.TransparentProxying = &tp
	}

	dataplane.Networking.Address = pod.Status.PodIP

	gwType, exist := annotations.GetString(metadata.KumaGatewayAnnotation)
	if exist {
		switch gwType {
		case "enabled":
			gateway, err := p.GatewayByServiceFor(ctx, p.Zone, pod, services)
			if err != nil {
				return nil, err
			}
			dataplane.Networking.Gateway = gateway
		case "provided":
			gateway, err := p.GatewayByDeploymentFor(ctx, p.Zone, pod, services)
			if err != nil {
				return nil, err
			}
			dataplane.Networking.Gateway = gateway
		default:
			return nil, errors.Errorf("invalid delegated gateway type '%s'", gwType)
		}
	} else {
		var ifaces []*mesh_proto.Dataplane_Networking_Inbound
		var err error
		if msMode == mesh_proto.Mesh_MeshServices_Exclusive {
			ifaces, err = p.InboundConverter.InboundInterfacesFor(ctx, p.Zone, pod, services)
			if err != nil {
				return nil, err
			}
		} else {
			ifaces, err = p.InboundConverter.LegacyInboundInterfacesFor(ctx, p.Zone, pod, services)
			if err != nil {
				return nil, err
			}
		}
		dataplane.Networking.Inbound = ifaces
	}

	if !p.KubeOutboundsAsVIPs {
		ofaces, err := p.OutboundInterfacesFor(ctx, pod, others, tp.ReachableServices)
		if err != nil {
			return nil, err
		}
		dataplane.Networking.Outbound = ofaces
	}

	metrics, err := MetricsFor(pod)
	if err != nil {
		return nil, err
	}
	dataplane.Metrics = metrics

	probes, err := ProbesFor(pod)
	if err != nil {
		return nil, err
	}
	dataplane.Probes = probes

	adminPort, exist, err := annotations.GetUint32(metadata.KumaEnvoyAdminPort)
	if err != nil {
		return nil, err
	}
	if exist {
		dataplane.Networking.Admin = &mesh_proto.EnvoyAdmin{Port: adminPort}
	}

	return dataplane, nil
}

func (p *PodConverter) GatewayByServiceFor(ctx context.Context, clusterName string, pod *kube_core.Pod, services []*kube_core.Service) (*mesh_proto.Dataplane_Networking_Gateway, error) {
	interfaces, err := p.InboundConverter.LegacyInboundInterfacesFor(ctx, clusterName, pod, services)
	if err != nil {
		return nil, err
	}
	return &mesh_proto.Dataplane_Networking_Gateway{
		Type: mesh_proto.Dataplane_Networking_Gateway_DELEGATED,
		Tags: interfaces[0].Tags,
	}, nil
}

func (p *PodConverter) GatewayByDeploymentFor(ctx context.Context, clusterName string, pod *kube_core.Pod, services []*kube_core.Service) (*mesh_proto.Dataplane_Networking_Gateway, error) {
	namespace := pod.GetObjectMeta().GetNamespace()
	deployment, kind, err := p.InboundConverter.NameExtractor.Name(ctx, pod)
	if err != nil {
		return nil, err
	}
	if kind != "Deployment" {
		return p.GatewayByServiceFor(ctx, clusterName, pod, services)
	}
	return &mesh_proto.Dataplane_Networking_Gateway{
		Type: mesh_proto.Dataplane_Networking_Gateway_DELEGATED,
		Tags: map[string]string{"kuma.io/service-name": fmt.Sprintf("%s_%s_svc", deployment, namespace)},
	}, nil
}

func MetricsFor(pod *kube_core.Pod) (*mesh_proto.MetricsBackend, error) {
	path, _ := metadata.Annotations(pod.Annotations).GetString(metadata.KumaMetricsPrometheusPath)
	port, exist, err := metadata.Annotations(pod.Annotations).GetUint32(metadata.KumaMetricsPrometheusPort)
	if err != nil {
		return nil, err
	}

	aggregate, err := MetricsAggregateFor(pod)
	if err != nil {
		return nil, err
	}
	if path == "" && !exist && aggregate == nil {
		return nil, nil
	}
	cfg := &mesh_proto.PrometheusMetricsBackendConfig{
		Path:      path,
		Port:      port,
		Aggregate: aggregate,
	}

	str, err := util_proto.ToStruct(cfg)
	if err != nil {
		return nil, err
	}
	return &mesh_proto.MetricsBackend{
		Type: mesh_proto.MetricsPrometheusType,
		Conf: str,
	}, nil
}

func MetricsAggregateFor(pod *kube_core.Pod) ([]*mesh_proto.PrometheusAggregateMetricsConfig, error) {
	aggregateConfigNames := make(map[string]bool)
	for key := range pod.Annotations {
		matchedGroups := metricsAggregateRegex.FindStringSubmatch(key)
		if len(matchedGroups) == 3 {
			// first group is service name and second one of (port|path|enabled)
			aggregateConfigNames[matchedGroups[1]] = true
		}
	}
	if len(aggregateConfigNames) == 0 {
		return nil, nil
	}

	var aggregateConfig []*mesh_proto.PrometheusAggregateMetricsConfig
	for app := range aggregateConfigNames {
		enabled, exist, err := metadata.Annotations(pod.Annotations).GetEnabled(fmt.Sprintf(metadata.KumaMetricsPrometheusAggregateEnabled, app))
		if err != nil {
			return nil, err
		}
		if exist && !enabled {
			enabled = false
		} else {
			enabled = true
		}
		path, _ := metadata.Annotations(pod.Annotations).GetStringWithDefault("/metrics", fmt.Sprintf(metadata.KumaMetricsPrometheusAggregatePath, app))

		address, addressExists := metadata.Annotations(pod.Annotations).GetString(fmt.Sprintf(metadata.KumaMetricsPrometheusAggregateAddress, app))

		port, portExist, err := metadata.Annotations(pod.Annotations).GetUint32(fmt.Sprintf(metadata.KumaMetricsPrometheusAggregatePort, app))
		if err != nil {
			return nil, err
		}
		if !portExist && enabled {
			return nil, errors.New("port needs to be specified for metrics scraping")
		}

		config := &mesh_proto.PrometheusAggregateMetricsConfig{
			Name:    app,
			Path:    path,
			Port:    port,
			Enabled: util_proto.Bool(enabled),
		}
		if addressExists {
			config.Address = address
		}
		aggregateConfig = append(aggregateConfig, config)
	}
	return aggregateConfig, nil
}

func mergeLabels(existingLabels map[string]string, podLabels map[string]string) map[string]string {
	mergedLabels := map[string]string{}
	if existingLabels != nil {
		mergedLabels = maps.Clone(existingLabels)
	}
	for k, v := range podLabels {
		mergedLabels[k] = v
	}
	return mergedLabels
}

type ReachableBackendRefs struct {
	Refs []*ReachableBackendRef `json:"refs,omitempty"`
}

type ReachableBackendRef struct {
	Kind      string            `json:"kind,omitempty"`
	Name      *string           `json:"name,omitempty"`
	Namespace *string           `json:"namespace,omitempty"`
	Port      *uint32           `json:"port,omitempty"`
	Labels    map[string]string `json:"labels,omitempty"`
}
