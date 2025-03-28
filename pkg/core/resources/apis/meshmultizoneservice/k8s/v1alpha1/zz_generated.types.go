// Generated by tools/policy-gen
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	"fmt"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	policy "github.com/kumahq/kuma/pkg/core/resources/apis/meshmultizoneservice/api/v1alpha1"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/registry"
	"github.com/kumahq/kuma/pkg/plugins/runtime/k8s/metadata"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:categories=kuma,scope=Namespaced,shortName=mzsvc
// +kubebuilder:printcolumn:JSONPath=".status.addresses[0].hostname",name=Hostname,type=string
type MeshMultiZoneService struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	// Spec is the specification of the Kuma MeshMultiZoneService resource.
	// +kubebuilder:validation:Optional
	Spec *policy.MeshMultiZoneService `json:"spec,omitempty"`
	// Status is the current status of the Kuma MeshMultiZoneService resource.
	// +kubebuilder:validation:Optional
	Status *policy.MeshMultiZoneServiceStatus `json:"status,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:scope=Namespaced
type MeshMultiZoneServiceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []MeshMultiZoneService `json:"items"`
}

func (cb *MeshMultiZoneService) GetObjectMeta() *metav1.ObjectMeta {
	return &cb.ObjectMeta
}

func (cb *MeshMultiZoneService) SetObjectMeta(m *metav1.ObjectMeta) {
	cb.ObjectMeta = *m
}

func (cb *MeshMultiZoneService) GetMesh() string {
	if mesh, ok := cb.Labels[metadata.KumaMeshLabel]; ok {
		return mesh
	} else {
		return core_model.DefaultMesh
	}
}

func (cb *MeshMultiZoneService) SetMesh(mesh string) {
	if cb.Labels == nil {
		cb.Labels = map[string]string{}
	}
	cb.Labels[metadata.KumaMeshLabel] = mesh
}

func (cb *MeshMultiZoneService) GetSpec() (core_model.ResourceSpec, error) {
	return cb.Spec, nil
}

func (cb *MeshMultiZoneService) SetSpec(spec core_model.ResourceSpec) {
	if spec == nil {
		cb.Spec = nil
		return
	}

	if _, ok := spec.(*policy.MeshMultiZoneService); !ok {
		panic(fmt.Sprintf("unexpected protobuf message type %T", spec))
	}

	cb.Spec = spec.(*policy.MeshMultiZoneService)
}

func (cb *MeshMultiZoneService) GetStatus() (core_model.ResourceStatus, error) {
	return cb.Status, nil
}

func (cb *MeshMultiZoneService) SetStatus(status core_model.ResourceStatus) error {
	if status == nil {
		cb.Status = nil
		return nil
	}

	if _, ok := status.(*policy.MeshMultiZoneServiceStatus); !ok {
		panic(fmt.Sprintf("unexpected message type %T", status))
	}

	cb.Status = status.(*policy.MeshMultiZoneServiceStatus)
	return nil
}

func (cb *MeshMultiZoneService) Scope() model.Scope {
	return model.ScopeNamespace
}

func (l *MeshMultiZoneServiceList) GetItems() []model.KubernetesObject {
	result := make([]model.KubernetesObject, len(l.Items))
	for i := range l.Items {
		result[i] = &l.Items[i]
	}
	return result
}

func init() {
	SchemeBuilder.Register(&MeshMultiZoneService{}, &MeshMultiZoneServiceList{})
	registry.RegisterObjectType(&policy.MeshMultiZoneService{}, &MeshMultiZoneService{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "MeshMultiZoneService",
		},
	})
	registry.RegisterListType(&policy.MeshMultiZoneService{}, &MeshMultiZoneServiceList{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "MeshMultiZoneServiceList",
		},
	})
}
