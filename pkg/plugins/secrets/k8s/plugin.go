package k8s

import (
	"github.com/pkg/errors"

	core_plugins "github.com/kumahq/kuma/pkg/core/plugins"
	core_store "github.com/kumahq/kuma/pkg/core/resources/store"
	secret_store "github.com/kumahq/kuma/pkg/core/secrets/store"
	k8s_extensions "github.com/kumahq/kuma/pkg/plugins/extensions/k8s"
)

var _ core_plugins.SecretStorePlugin = &plugin{}

type plugin struct{}

func init() {
	core_plugins.Register(core_plugins.Kubernetes, &plugin{})
}

func (p *plugin) NewSecretStore(pc core_plugins.PluginContext, _ core_plugins.PluginConfig) (secret_store.SecretStore, error) {
	mgr, ok := k8s_extensions.FromManagerContext(pc.Extensions())
	if !ok {
		return nil, errors.Errorf("k8s controller runtime Manager hasn't been configured")
	}
	client, ok := k8s_extensions.FromSecretClientContext(pc.Extensions())
	if !ok {
		return nil, errors.Errorf("secret client hasn't been configured")
	}
	coreStore, err := NewStore(client, client, mgr.GetScheme(), pc.Config().Store.Kubernetes.SystemNamespace)
	if err != nil {
		return nil, errors.Wrap(err, "couldn't create k8s secret store")
	}
	return core_store.NewPaginationStore(coreStore), nil
}
