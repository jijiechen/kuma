import{u as w,T as $,J as P,j as V,y as S,D as A,a as D}from"./kongponents.es-f12d3d78.js";import{_ as h,A as I}from"./DataSource.vue_vue_type_script_setup_true_lang-122fb823.js";import{g as N,h as T,A as B,_ as E,f as q}from"./RouteView.vue_vue_type_script_setup_true_lang-bb7b7c66.js";import{_ as j}from"./RouteTitle.vue_vue_type_script_setup_true_lang-1ae97a7f.js";import{d as x,o as n,a as c,w as e,h as a,b as o,g as i,r as F,e as J,s as R,q as m,f as M,n as g,t as f,F as W,p as G,m as H}from"./index-79776270.js";import{_ as K}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-fc9a754e.js";import{E as O}from"./ErrorBlock-6d49a57f.js";const Q=x({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(r){const _=r;return(d,z)=>(n(),c(o($),{class:"docs-link",appearance:"outline",target:"_blank",to:_.href},{default:e(()=>[a(o(w),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),i(`

    Documentation
  `)]),_:1},8,["to"]))}}),U=r=>(G("data-v-948cb913"),r=r(),H(),r),X={class:"stack"},Y=U(()=>m("p",null,[m("strong",null,"Warning"),i(` This policy is experimental. If you encountered any problem please open an
                            `),m("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),Z=x({__name:"PolicyListView",props:{page:{},size:{}},setup(r){const _=r,{t:d}=N();return(z,ee)=>{const C=F("RouterLink");return n(),c(E,{name:"policies-list-view"},{default:e(({route:p})=>[a(h,{src:"/*/policy-types"},{default:e(({data:y,error:b})=>[b?(n(),c(O,{key:0,error:b},null,8,["error"])):y===void 0?(n(),c(T,{key:1})):y.policies.length===0?(n(),c(K,{key:2})):(n(!0),J(W,{key:3},R([y.policies.find(s=>s.path===p.params.policyPath)??y.policies[0]],s=>(n(),c(h,{key:s.path,src:`/${p.params.mesh}/policy-type/${s.path}?page=${_.page}&size=${_.size}`},{default:e(({data:u,error:L})=>[a(B,null,{title:e(()=>[m("h2",null,[i(`
                  Policies: `),a(j,{title:o(d)("policies.routes.items.title",{name:s.name}),render:!0},null,8,["title"])])]),default:e(()=>[i(),m("div",{class:g(["relative",s.path])},[a(o(P),null,{body:e(()=>[m("div",X,[s.isExperimental?(n(),c(o(V),{key:0,appearance:"warning"},{alertMessage:e(()=>[Y]),_:1})):M("",!0),i(),a(I,{class:"policy-collection","data-testid":"policy-collection","empty-state-title":"No Data","empty-state-message":`There are no ${s.name} policies present.`,headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":_.page,"page-size":_.size,total:u==null?void 0:u.total,items:u==null?void 0:u.items,error:L,onChange:p.update},{toolbar:e(()=>[a(h,{src:`/${p.params.mesh}/insights`},{default:e(({data:t})=>[a(o(S),{label:"Policies",items:y.policies.map(l=>({label:l.name,value:l.path,selected:l.path===p.params.policyPath})),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:l=>p.replace({name:"policies-list-view",params:{...p.params,policyPath:l.value}})},{"item-template":e(({item:l})=>{var k,v;return[m("span",{class:g({"policy-type-empty":!((k=t==null?void 0:t.policies[l.label])!=null&&k.total)})},f(l.label)+" ("+f(((v=t==null?void 0:t.policies[l.label])==null?void 0:v.total)||"0")+`)
                                `,3)]}),_:2},1032,["items","onSelected"])]),_:2},1032,["src"]),i(),a(Q,{href:o(d)("policies.href.docs",{name:s.name}),"data-testid":"policy-documentation-link"},null,8,["href"])]),name:e(({row:t})=>[a(C,{to:{name:"policy-detail-view",params:{policy:t.name}}},{default:e(()=>[i(f(t.name),1)]),_:2},1032,["to"])]),type:e(({row:t})=>[i(f(t.type),1)]),actions:e(({row:t})=>[a(o(A),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[a(o($),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[a(o(w),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[a(o(D),{item:{to:{name:"policy-detail-view",params:{policy:t.name}},label:o(d)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-message","page-number","page-size","total","items","error","onChange"])])]),_:2},1024)],2)]),_:2},1024)]),_:2},1032,["src"]))),128))]),_:2},1024)]),_:1})}}});const re=q(Z,[["__scopeId","data-v-948cb913"]]);export{re as default};
