// Generated by tools/policy-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte

func init() {
	var schema spec.Schema
	if rawSchema != nil {
		if err := yaml.Unmarshal(rawSchema, &schema); err != nil {
			panic(err)
		}
	}
	rawSchema = nil
	MeshExternalServiceResourceTypeDescriptor.Schema = &schema
}

const (
	MeshExternalServiceType model.ResourceType = "MeshExternalService"
)

var _ model.Resource = &MeshExternalServiceResource{}

type MeshExternalServiceResource struct {
	Meta   model.ResourceMeta
	Spec   *MeshExternalService
	Status *MeshExternalServiceStatus
}

func NewMeshExternalServiceResource() *MeshExternalServiceResource {
	return &MeshExternalServiceResource{
		Spec:   &MeshExternalService{},
		Status: &MeshExternalServiceStatus{},
	}
}

func (t *MeshExternalServiceResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshExternalServiceResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshExternalServiceResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshExternalServiceResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshExternalService)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshExternalService{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshExternalServiceResource) GetStatus() model.ResourceStatus {
	return t.Status
}

func (t *MeshExternalServiceResource) SetStatus(status model.ResourceStatus) error {
	protoType, ok := status.(*MeshExternalServiceStatus)
	if !ok {
		return fmt.Errorf("invalid type %T for Status", status)
	} else {
		if protoType == nil {
			t.Status = &MeshExternalServiceStatus{}
		} else {
			t.Status = protoType
		}
		return nil
	}
}

func (t *MeshExternalServiceResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshExternalServiceResourceTypeDescriptor
}

func (t *MeshExternalServiceResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshExternalServiceResourceList{}

type MeshExternalServiceResourceList struct {
	Items      []*MeshExternalServiceResource
	Pagination model.Pagination
}

func (l *MeshExternalServiceResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshExternalServiceResourceList) GetItemType() model.ResourceType {
	return MeshExternalServiceType
}

func (l *MeshExternalServiceResourceList) NewItem() model.Resource {
	return NewMeshExternalServiceResource()
}

func (l *MeshExternalServiceResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshExternalServiceResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshExternalServiceResource)(nil), r)
	}
}

func (l *MeshExternalServiceResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

func (l *MeshExternalServiceResourceList) SetPagination(p model.Pagination) {
	l.Pagination = p
}

var MeshExternalServiceResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                         MeshExternalServiceType,
	Resource:                     NewMeshExternalServiceResource(),
	ResourceList:                 &MeshExternalServiceResourceList{},
	Scope:                        model.ScopeMesh,
	KDSFlags:                     model.GlobalToAllZonesFlag | model.ZoneToGlobalFlag,
	WsPath:                       "meshexternalservices",
	KumactlArg:                   "meshexternalservice",
	KumactlListArg:               "meshexternalservices",
	AllowToInspect:               false,
	IsPolicy:                     false,
	IsExperimental:               false,
	SingularDisplayName:          "Mesh External Service",
	PluralDisplayName:            "Mesh External Services",
	IsPluginOriginated:           true,
	IsTargetRefBased:             false,
	HasToTargetRef:               false,
	HasFromTargetRef:             false,
	HasStatus:                    true,
	AllowedOnSystemNamespaceOnly: true,
	IsReferenceableInTo:          true,
	ShortName:                    "extsvc",
}
