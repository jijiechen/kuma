import{d as W,v as T,e as i,o as l,m as f,w as e,a as s,k as C,b as t,l as I,B as j,t as m,p as v,A as O,c as z,H as h,J as b,$ as Q,S as U,E as Y,q as ee}from"./index-DpAqRYT5.js";import{S as ne}from"./SummaryView-SwkktHH1.js";const oe=["innerHTML"],te=["data-testid"],se=["innerHTML"],ae=W({__name:"ZoneListView",setup(le){const S=T({}),D=T({}),A=k=>{const y="zoneIngress";S.value=k.items.reduce((u,d)=>{var g;const r=(g=d[y])==null?void 0:g.zone;if(typeof r<"u"){typeof u[r]>"u"&&(u[r]={online:[],offline:[]});const w=typeof d[`${y}Insight`].connectedSubscription<"u"?"online":"offline";u[r][w].push(d)}return u},{})},R=k=>{const y="zoneEgress";D.value=k.items.reduce((u,d)=>{var g;const r=(g=d[y])==null?void 0:g.zone;if(typeof r<"u"){typeof u[r]>"u"&&(u[r]={online:[],offline:[]});const w=typeof d[`${y}Insight`].connectedSubscription<"u"?"online":"offline";u[r][w].push(d)}return u},{})};return(k,y)=>{const u=i("RouteTitle"),d=i("DataSource"),r=i("XAction"),g=i("XTeleportTemplate"),w=i("XIcon"),L=i("DataLoader"),$=i("XPrompt"),B=i("DataSink"),x=i("XDisclosure"),E=i("XActionGroup"),H=i("DataCollection"),M=i("KCard"),N=i("RouterView"),Z=i("AppView"),q=i("RouteView");return l(),f(q,{name:"zone-cp-list-view",params:{page:1,size:50,zone:""}},{default:e(({route:c,t:p,can:X,uri:P,me:_})=>[s(Z,{docs:p("zones.href.docs.cta")},{title:e(()=>[C("h1",null,[s(u,{title:p("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[t(),s(d,{src:P(I(j),"/zone-cps",{},{page:c.params.page,size:c.params.size})},{default:e(({data:a,error:G,refresh:K})=>[s(d,{src:"/zone-ingress-overviews?page=1&size=100",onChange:A}),t(),s(d,{src:"/zone-egress-overviews?page=1&size=100",onChange:R}),t(),C("div",{innerHTML:p("zone-cps.routes.items.intro",{},{defaultMessage:""})},null,8,oe),t(),s(M,null,{default:e(()=>[X("create zones")&&((a==null?void 0:a.items)??[]).length>0?(l(),f(g,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[s(r,{action:"create",appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[t(m(p("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(),s(L,{data:[a],errors:[G]},{loadable:e(()=>[s(H,{type:"zones",items:(a==null?void 0:a.items)??[void 0],page:c.params.page,"page-size":c.params.size,total:a==null?void 0:a.total,onChange:c.update},{default:e(()=>[s(O,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{..._.get("headers.type"),label:" ",key:"type"},{..._.get("headers.name"),label:"Name",key:"name"},{..._.get("headers.zoneCpVersion"),label:"Zone Leader CP Version",key:"zoneCpVersion"},{..._.get("headers.ingress"),label:"Ingresses (online / total)",key:"ingress"},{..._.get("headers.egress"),label:"Egresses (online / total)",key:"egress"},{..._.get("headers.state"),label:"Status",key:"state"},{..._.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{..._.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:a==null?void 0:a.items,"is-selected-row":n=>n.name===c.params.zone,onResize:_.set},{type:e(({row:n})=>[(l(!0),z(h,null,b([["kubernetes","universal"].find(o=>o===n.zoneInsight.environment)??"kubernetes"],o=>(l(),f(w,{key:o,name:o},{default:e(()=>[t(m(p(`common.product.environment.${o}`)),1)]),_:2},1032,["name"]))),128))]),name:e(({row:n})=>[s(r,{"data-action":"",to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:c.params.page,size:c.params.size}}},{default:e(()=>[t(m(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[t(m(I(Q)(n.zoneInsight,"version.kumaCp.version",p("common.collection.none"))),1)]),ingress:e(({row:n})=>[(l(!0),z(h,null,b([S.value[n.name]||{online:[],offline:[]}],o=>(l(),z(h,null,[t(m(o.online.length)+" / "+m(o.online.length+o.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(l(!0),z(h,null,b([D.value[n.name]||{online:[],offline:[]}],o=>(l(),z(h,null,[t(m(o.online.length)+" / "+m(o.online.length+o.offline.length),1)],64))),256))]),state:e(({row:n})=>[s(U,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[n.warnings.length>0?(l(),f(w,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[C("ul",null,[(l(!0),z(h,null,b(n.warnings,o=>(l(),z("li",{key:o.kind,"data-testid":`warning-${o.kind}`},m(p(`zone-cps.list.${o.kind}`)),9,te))),128))])]),_:2},1024)):(l(),z(h,{key:1},[t(m(p("common.collection.none")),1)],64))]),actions:e(({row:n})=>[s(E,null,{default:e(()=>[s(x,null,{default:e(({expanded:o,toggle:V})=>[s(r,{to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[t(m(p("common.collection.actions.view")),1)]),_:2},1032,["to"]),t(),X("create zones")?(l(),f(r,{key:0,appearance:"danger",onClick:V},{default:e(()=>[t(m(p("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):v("",!0),t(),s(g,{to:{name:"modal-layer"}},{default:e(()=>[o?(l(),f(B,{key:0,src:`/zone-cps/${n.name}/delete`,onChange:()=>{V(),K()}},{default:e(({submit:F,error:J})=>[s($,{action:p("common.delete_modal.proceed_button"),expected:n.name,"data-testid":"delete-zone-modal",onCancel:V,onSubmit:()=>F({})},{title:e(()=>[t(m(p("common.delete_modal.title",{type:"Zone"})),1)]),default:e(()=>[t(),C("div",{innerHTML:p("common.delete_modal.text",{type:"Zone",name:n.name})},null,8,se),t(),s(L,{class:"mt-4",errors:[J],loader:!1},null,8,["errors"])]),_:2},1032,["action","expected","onCancel","onSubmit"])]),_:2},1032,["src","onChange"])):v("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["data","errors"])]),_:2},1024),t(),c.params.zone?(l(),f(N,{key:0},{default:e(n=>[s(ne,{onClose:o=>c.replace({name:"zone-cp-list-view",query:{page:c.params.page,size:c.params.size}})},{default:e(()=>[(l(),f(Y(n.Component),{name:c.params.zone,"zone-overview":a==null?void 0:a.items.find(o=>o.name===c.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):v("",!0)]),_:2},1032,["src"])]),_:2},1032,["docs"])]),_:1})}}}),ce=ee(ae,[["__scopeId","data-v-61f2ba39"]]);export{ce as default};
