// Generated by tools/policy-gen
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	"errors"
	"fmt"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	policy "github.com/kumahq/kuma/pkg/plugins/policies/meshratelimit/api/v1alpha1"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/registry"
	"github.com/kumahq/kuma/pkg/plugins/runtime/k8s/metadata"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:categories=kuma,scope=Namespaced,shortName=mrl
// +kubebuilder:printcolumn:name="TargetRef Kind",type="string",JSONPath=".spec.targetRef.kind"
// +kubebuilder:printcolumn:name="TargetRef Name",type="string",JSONPath=".spec.targetRef.name"
type MeshRateLimit struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	// Spec is the specification of the Kuma MeshRateLimit resource.
	// +kubebuilder:validation:Optional
	Spec *policy.MeshRateLimit `json:"spec,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:scope=Namespaced
type MeshRateLimitList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []MeshRateLimit `json:"items"`
}

func (cb *MeshRateLimit) GetObjectMeta() *metav1.ObjectMeta {
	return &cb.ObjectMeta
}

func (cb *MeshRateLimit) SetObjectMeta(m *metav1.ObjectMeta) {
	cb.ObjectMeta = *m
}

func (cb *MeshRateLimit) GetMesh() string {
	if mesh, ok := cb.Labels[metadata.KumaMeshLabel]; ok {
		return mesh
	} else {
		return core_model.DefaultMesh
	}
}

func (cb *MeshRateLimit) SetMesh(mesh string) {
	if cb.Labels == nil {
		cb.Labels = map[string]string{}
	}
	cb.Labels[metadata.KumaMeshLabel] = mesh
}

func (cb *MeshRateLimit) GetSpec() (core_model.ResourceSpec, error) {
	return cb.Spec, nil
}

func (cb *MeshRateLimit) SetSpec(spec core_model.ResourceSpec) {
	if spec == nil {
		cb.Spec = nil
		return
	}

	if _, ok := spec.(*policy.MeshRateLimit); !ok {
		panic(fmt.Sprintf("unexpected protobuf message type %T", spec))
	}

	cb.Spec = spec.(*policy.MeshRateLimit)
}

func (cb *MeshRateLimit) GetStatus() (core_model.ResourceStatus, error) {
	return nil, nil
}

func (cb *MeshRateLimit) SetStatus(status core_model.ResourceStatus) error {
	return errors.New("status not supported")
}

func (cb *MeshRateLimit) Scope() model.Scope {
	return model.ScopeNamespace
}

func (l *MeshRateLimitList) GetItems() []model.KubernetesObject {
	result := make([]model.KubernetesObject, len(l.Items))
	for i := range l.Items {
		result[i] = &l.Items[i]
	}
	return result
}

func init() {
	SchemeBuilder.Register(&MeshRateLimit{}, &MeshRateLimitList{})
	registry.RegisterObjectType(&policy.MeshRateLimit{}, &MeshRateLimit{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "MeshRateLimit",
		},
	})
	registry.RegisterListType(&policy.MeshRateLimit{}, &MeshRateLimitList{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "MeshRateLimitList",
		},
	})
}
