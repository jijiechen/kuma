// Generated by tools/policy-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"errors"
	"fmt"

	"k8s.io/apiextensions-apiserver/pkg/apis/apiextensions"
	apiextensionsv1 "k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1"
	"k8s.io/apiextensions-apiserver/pkg/apiserver/schema"
	"k8s.io/kube-openapi/pkg/validation/strfmt"
	"k8s.io/kube-openapi/pkg/validation/validate"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte

func init() {
	var structuralSchema *schema.Structural
	var v1JsonSchemaProps *apiextensionsv1.JSONSchemaProps
	var validator *validate.SchemaValidator
	if rawSchema != nil {
		if err := yaml.Unmarshal(rawSchema, &v1JsonSchemaProps); err != nil {
			panic(err)
		}
		var jsonSchemaProps apiextensions.JSONSchemaProps
		err := apiextensionsv1.Convert_v1_JSONSchemaProps_To_apiextensions_JSONSchemaProps(v1JsonSchemaProps, &jsonSchemaProps, nil)
		if err != nil {
			panic(err)
		}
		structuralSchema, err = schema.NewStructural(&jsonSchemaProps)
		if err != nil {
			panic(err)
		}
		schemaObject := structuralSchema.ToKubeOpenAPI()
		validator = validate.NewSchemaValidator(schemaObject, nil, "", strfmt.Default)
	}
	rawSchema = nil
	MeshTLSResourceTypeDescriptor.Validator = validator
	MeshTLSResourceTypeDescriptor.StructuralSchema = structuralSchema
}

const (
	MeshTLSType model.ResourceType = "MeshTLS"
)

var _ model.Resource = &MeshTLSResource{}

type MeshTLSResource struct {
	Meta model.ResourceMeta
	Spec *MeshTLS
}

func NewMeshTLSResource() *MeshTLSResource {
	return &MeshTLSResource{
		Spec: &MeshTLS{},
	}
}

func (t *MeshTLSResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshTLSResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshTLSResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshTLSResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshTLS)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshTLS{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshTLSResource) GetStatus() model.ResourceStatus {
	return nil
}

func (t *MeshTLSResource) SetStatus(_ model.ResourceStatus) error {
	return errors.New("status not supported")
}

func (t *MeshTLSResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshTLSResourceTypeDescriptor
}

func (t *MeshTLSResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshTLSResourceList{}

type MeshTLSResourceList struct {
	Items      []*MeshTLSResource
	Pagination model.Pagination
}

func (l *MeshTLSResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshTLSResourceList) GetItemType() model.ResourceType {
	return MeshTLSType
}

func (l *MeshTLSResourceList) NewItem() model.Resource {
	return NewMeshTLSResource()
}

func (l *MeshTLSResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshTLSResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshTLSResource)(nil), r)
	}
}

func (l *MeshTLSResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

func (l *MeshTLSResourceList) SetPagination(p model.Pagination) {
	l.Pagination = p
}

var MeshTLSResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                         MeshTLSType,
	Resource:                     NewMeshTLSResource(),
	ResourceList:                 &MeshTLSResourceList{},
	Scope:                        model.ScopeMesh,
	KDSFlags:                     model.GlobalToZonesFlag | model.ZoneToGlobalFlag | model.SyncedAcrossZonesFlag,
	WsPath:                       "meshtlses",
	KumactlArg:                   "meshtls",
	KumactlListArg:               "meshtlses",
	AllowToInspect:               true,
	IsPolicy:                     true,
	IsExperimental:               false,
	SingularDisplayName:          "Mesh TLS",
	PluralDisplayName:            "Mesh TLSes",
	IsPluginOriginated:           true,
	IsTargetRefBased:             true,
	HasToTargetRef:               false,
	HasFromTargetRef:             true,
	HasRulesTargetRef:            true,
	HasStatus:                    false,
	AllowedOnSystemNamespaceOnly: false,
	IsReferenceableInTo:          false,
	ShortName:                    "mtls",
	IsFromAsRules:                true,
}
