import{_ as C}from"./NavTabs.vue_vue_type_script_setup_true_lang-v7iryR0S.js";import{d as D,a as n,o as c,b as l,w as e,t as m,m as R,f as s,e as o,H as y,W as b,D as h}from"./index-m_fdP3H9.js";const L=D({__name:"DataPlaneOutboundSummaryView",props:{data:{}},setup(p){const d=p;return(k,x)=>{const u=n("RouterLink"),_=n("DataCollection"),f=n("RouterView"),v=n("AppView"),w=n("RouteView");return c(),l(w,{name:"data-plane-outbound-summary-view",params:{service:"",inactive:!1}},{default:e(({route:a,t:V})=>[o(v,null,{title:e(()=>[R("h2",null,m(a.params.service),1)]),default:e(()=>{var r;return[s(),o(C,{"active-route-name":(r=a.active)==null?void 0:r.name},b({_:2},[y(a.children,({name:t})=>({name:`${t}`,fn:e(()=>[o(u,{to:{name:t,query:{inactive:a.params.inactive?null:void 0}},"data-testid":`${t}-tab`},{default:e(()=>[s(m(V(`data-planes.routes.item.navigation.${t}`)),1)]),_:2},1032,["to","data-testid"])])}))]),1032,["active-route-name"]),s(),o(f,null,{default:e(t=>[o(_,{items:d.data,predicate:i=>i.name===a.params.service,find:!0},{default:e(({items:i})=>[(c(),l(h(t.Component),{data:i[0]},null,8,["data"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]}),_:2},1024)]),_:1})}}});export{L as default};
