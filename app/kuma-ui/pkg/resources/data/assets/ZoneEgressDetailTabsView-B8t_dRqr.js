import{d as w,a,o as n,b as i,w as e,e as t,m as b,W as V,f as c,E as k,A as x,c as E,F as R,X as y,G as B,t as C,D}from"./index-Bezvh5_m.js";import{_ as $}from"./NavTabs.vue_vue_type_script_setup_true_lang-CgglR3qV.js";const N=w({__name:"ZoneEgressDetailTabsView",setup(h){return(T,S)=>{const _=a("RouteTitle"),p=a("RouterLink"),d=a("RouterView"),z=a("DataSource"),f=a("AppView"),g=a("RouteView");return n(),i(g,{name:"zone-egress-detail-tabs-view",params:{zone:"",zoneEgress:""}},{default:e(({route:s,can:v,t:r})=>[t(f,{breadcrumbs:[...v("use zones")?[{to:{name:"zone-cp-list-view"},text:r("zone-cps.routes.item.breadcrumbs")}]:[],{to:{name:"zone-egress-list-view",params:{zone:s.params.zone}},text:r("zone-egresses.routes.item.breadcrumbs")}]},{title:e(()=>[b("h1",null,[t(V,{text:s.params.zoneEgress},{default:e(()=>[t(_,{title:r("zone-egresses.routes.item.title",{name:s.params.zoneEgress})},null,8,["title"])]),_:2},1032,["text"])])]),default:e(()=>[c(),t(z,{src:`/zone-egress-overviews/${s.params.zoneEgress}`},{default:e(({data:m,error:l})=>{var u;return[l!==void 0?(n(),i(k,{key:0,error:l},null,8,["error"])):m===void 0?(n(),i(x,{key:1})):(n(),E(R,{key:2},[t($,{"active-route-name":(u=s.active)==null?void 0:u.name},y({_:2},[B(s.children,({name:o})=>({name:`${o}`,fn:e(()=>[t(p,{to:{name:o},"data-testid":`${o}-tab`},{default:e(()=>[c(C(r(`zone-egresses.routes.item.navigation.${o}`)),1)]),_:2},1032,["to","data-testid"])])}))]),1032,["active-route-name"]),c(),t(d,null,{default:e(o=>[(n(),i(D(o.Component),{data:m},null,8,["data"]))]),_:2},1024)],64))]}),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{N as default};
