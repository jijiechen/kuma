import{d as O,y as N,m as y,w as e,b as l,r,e as a,p as v,t as p,C as Q,c as z,v as V,F as w,S as U,s as T,K as Y,q as $,o as i,H as ee,N as ne,_ as oe}from"./index-q-proItx.js";import{S as te}from"./SummaryView-DQLVqYO3.js";const se=["data-testid"],le=O({__name:"ZoneListView",setup(ae){const S=N({}),D=N({}),x=X=>{const n="zoneIngress";S.value=X.items.reduce((u,d)=>{var f;const c=(f=d[n])==null?void 0:f.zone;if(typeof c<"u"){typeof u[c]>"u"&&(u[c]={online:[],offline:[]});const k=typeof d[`${n}Insight`].connectedSubscription<"u"?"online":"offline";u[c][k].push(d)}return u},{})},B=X=>{const n="zoneEgress";D.value=X.items.reduce((u,d)=>{var f;const c=(f=d[n])==null?void 0:f.zone;if(typeof c<"u"){typeof u[c]>"u"&&(u[c]={online:[],offline:[]});const k=typeof d[`${n}Insight`].connectedSubscription<"u"?"online":"offline";u[c][k].push(d)}return u},{})};return(X,n)=>{const u=r("RouteTitle"),d=r("DataSource"),c=r("XI18n"),f=r("XAction"),k=r("XTeleportTemplate"),A=r("XIcon"),L=r("DataLoader"),Z=r("XPrompt"),E=r("DataSink"),q=r("XDisclosure"),G=r("XActionGroup"),P=r("DataCollection"),F=r("XCard"),H=r("RouterView"),K=r("AppView"),W=r("RouteView");return i(),y(W,{name:"zone-cp-list-view",params:{page:1,size:Number,zone:""}},{default:e(({route:m,t:g,can:I,uri:j,me:_})=>[l(d,{src:j(T(ee),"/zone-cps",{},{page:m.params.page,size:m.params.size})},{default:e(({data:t,error:J,refresh:M})=>{var R;return[l(K,{docs:t&&((R=t==null?void 0:t.items)!=null&&R.length)?g("zones.href.docs.cta"):""},{title:e(()=>[$("h1",null,[l(u,{title:g("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[n[12]||(n[12]=a()),l(d,{src:"/zone-ingress-overviews?page=1&size=100",onChange:x}),n[13]||(n[13]=a()),l(d,{src:"/zone-egress-overviews?page=1&size=100",onChange:B}),n[14]||(n[14]=a()),!I("view growth-new-empty-states")||t!=null&&t.items.length?(i(),y(c,{key:0,path:"zone-cps.routes.items.intro","default-path":"common.i18n.ignore-error"})):v("",!0),n[15]||(n[15]=a()),l(F,null,{default:e(()=>[I("create zones")&&((t==null?void 0:t.items)??[]).length>0?(i(),y(k,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[l(f,{action:"create",appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[a(p(g("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):v("",!0),n[11]||(n[11]=a()),l(L,{data:[t],errors:[J]},{loadable:e(()=>[l(P,{type:"zone-cps",items:(t==null?void 0:t.items)??[void 0],page:m.params.page,"page-size":m.params.size,total:t==null?void 0:t.total,onChange:m.update},{default:e(()=>[l(Q,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{..._.get("headers.type"),label:" ",key:"type"},{..._.get("headers.name"),label:"Name",key:"name"},{..._.get("headers.zoneCpVersion"),label:"Zone Leader CP Version",key:"zoneCpVersion"},{..._.get("headers.ingress"),label:"Ingresses (online / total)",key:"ingress"},{..._.get("headers.egress"),label:"Egresses (online / total)",key:"egress"},{..._.get("headers.state"),label:"Status",key:"state"},{..._.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{..._.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":o=>o.name===m.params.zone,onResize:_.set},{type:e(({row:o})=>[(i(!0),z(w,null,V([["kubernetes","universal"].find(s=>s===o.zoneInsight.environment)??"kubernetes"],s=>(i(),y(A,{key:s,name:s},{default:e(()=>[a(p(g(`common.product.environment.${s}`)),1)]),_:2},1032,["name"]))),128))]),name:e(({row:o})=>[l(f,{"data-action":"",to:{name:"zone-cp-detail-view",params:{zone:o.name},query:{page:m.params.page,size:m.params.size}}},{default:e(()=>[a(p(o.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:o})=>[a(p(T(ne)(o.zoneInsight,"version.kumaCp.version",g("common.collection.none"))),1)]),ingress:e(({row:o})=>[(i(!0),z(w,null,V([S.value[o.name]||{online:[],offline:[]}],s=>(i(),z(w,null,[a(p(s.online.length)+" / "+p(s.online.length+s.offline.length),1)],64))),256))]),egress:e(({row:o})=>[(i(!0),z(w,null,V([D.value[o.name]||{online:[],offline:[]}],s=>(i(),z(w,null,[a(p(s.online.length)+" / "+p(s.online.length+s.offline.length),1)],64))),256))]),state:e(({row:o})=>[l(U,{status:o.state},null,8,["status"])]),warnings:e(({row:o})=>{var s,b;return[(i(!0),z(w,null,V([[{bool:o.zoneInsight.store==="memory",key:"store-memory"},{bool:!((b=(s=o.zoneInsight.version)==null?void 0:s.kumaCp)!=null&&b.kumaCpGlobalCompatible),key:"global-cp-incompatible"}].filter(({bool:C})=>C)],C=>(i(),z(w,{key:typeof C},[C.length>0?(i(),y(A,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[$("ul",null,[(i(!0),z(w,null,V(C,({key:h})=>(i(),z("li",{key:h,"data-testid":`warning-${h}`},p(g(`zone-cps.list.warnings.${h}`)),9,se))),128))])]),_:2},1024)):(i(),z(w,{key:1},[a(p(g("common.collection.none")),1)],64))],64))),128))]}),actions:e(({row:o})=>[l(G,null,{default:e(()=>[l(q,null,{default:e(({expanded:s,toggle:b})=>[l(f,{to:{name:"zone-cp-detail-view",params:{zone:o.name}}},{default:e(()=>[a(p(g("common.collection.actions.view")),1)]),_:2},1032,["to"]),n[2]||(n[2]=a()),I("create zones")?(i(),y(f,{key:0,appearance:"danger",onClick:b},{default:e(()=>[a(p(g("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):v("",!0),n[3]||(n[3]=a()),l(k,{to:{name:"modal-layer"}},{default:e(()=>[s?(i(),y(E,{key:0,src:`/zone-cps/${o.name}/delete`,onChange:()=>{b(),M()}},{default:e(({submit:C,error:h})=>[l(Z,{action:g("common.delete_modal.proceed_button"),expected:o.name,"data-testid":"delete-zone-modal",onCancel:b,onSubmit:()=>C({})},{title:e(()=>[a(p(g("common.delete_modal.title",{type:"Zone"})),1)]),default:e(()=>[n[0]||(n[0]=a()),l(c,{path:"common.delete_modal.text",params:{type:"Zone",name:o.name}},null,8,["params"]),n[1]||(n[1]=a()),l(L,{class:"mt-4",errors:[h],loader:!1},null,8,["errors"])]),_:2},1032,["action","expected","onCancel","onSubmit"])]),_:2},1032,["src","onChange"])):v("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["data","errors"])]),_:2},1024),n[16]||(n[16]=a()),m.params.zone?(i(),y(H,{key:1},{default:e(o=>[l(te,{onClose:s=>m.replace({name:"zone-cp-list-view",query:{page:m.params.page,size:m.params.size}})},{default:e(()=>[(i(),y(Y(o.Component),{name:m.params.zone,"zone-overview":t==null?void 0:t.items.find(s=>s.name===m.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):v("",!0)]),_:2},1032,["docs"])]}),_:2},1032,["src"])]),_:1})}}}),me=oe(le,[["__scopeId","data-v-1d67dd24"]]);export{me as default};
