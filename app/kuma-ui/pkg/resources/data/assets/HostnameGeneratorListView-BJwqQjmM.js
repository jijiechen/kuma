import{d as k,e as t,o as c,k as l,w as o,a as s,i as p,b as i,j as A,O as R,A as b,X as x,t as g,C as D,l as L}from"./index-CUmbT3FY.js";import{S as X}from"./SummaryView-mq1hk7FF.js";const T={class:"stack"},B=["innerHTML"],K=k({__name:"HostnameGeneratorListView",setup(N){return(G,H)=>{const u=t("RouteTitle"),_=t("XAction"),h=t("XActionGroup"),d=t("RouterView"),w=t("DataCollection"),f=t("DataLoader"),C=t("KCard"),z=t("AppView"),y=t("RouteView");return c(),l(y,{name:"hostname-generator-list-view",params:{name:"",page:1,size:15}},{default:o(({route:n,t:m,can:V,uri:v,me:r})=>[s(z,{docs:m("hostname-generators.href.docs")},{title:o(()=>[p("h1",null,[s(u,{title:m("hostname-generators.routes.items.title")},null,8,["title"])])]),default:o(()=>[i(),p("div",T,[p("div",{innerHTML:m("hostname-generators.routes.items.intro",{},{defaultMessage:""})},null,8,B),i(),s(C,null,{default:o(()=>[s(f,{src:v(A(R),"/hostname-generators",{},{page:n.params.page,size:n.params.size})},{loadable:o(({data:e})=>[s(w,{type:"hostname-generators",items:(e==null?void 0:e.items)??[void 0],page:n.params.page,"page-size":n.params.size,total:e==null?void 0:e.total,onChange:n.update},{default:o(()=>[s(b,{"data-testid":"hostname-generator-collection",headers:[{...r.get("headers.name"),label:m("hostname-generators.common.name"),key:"name"},{...r.get("headers.namespace"),label:m("hostname-generators.common.namespace"),key:"namespace"},...V("use zones")?[{...r.get("headers.zone"),label:m("hostname-generators.common.zone"),key:"zone"}]:[],{...r.get("headers.actions"),label:m("hostname-generators.common.actions"),key:"actions",hideLabel:!0}],items:e==null?void 0:e.items,"is-selected-row":a=>a.name===n.params.name,onResize:r.set},{name:o(({row:a})=>[s(x,{text:a.name},{default:o(()=>[s(_,{"data-action":"",to:{name:"hostname-generator-summary-view",params:{name:a.id},query:{page:n.params.page,size:n.params.size}}},{default:o(()=>[i(g(a.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),actions:o(({row:a})=>[s(h,null,{default:o(()=>[s(_,{to:{name:"hostname-generator-detail-view",params:{name:a.id}}},{default:o(()=>[i(g(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),i(),e!=null&&e.items&&n.params.name?(c(),l(d,{key:0},{default:o(a=>[s(X,{onClose:M=>n.replace({name:"hostname-generator-list-view",params:{name:""},query:{page:n.params.page,size:n.params.size}})},{default:o(()=>[(c(),l(D(a.Component),{items:e==null?void 0:e.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):L("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1032,["docs"])]),_:1})}}});export{K as default};