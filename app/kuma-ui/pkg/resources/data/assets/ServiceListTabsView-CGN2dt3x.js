import{d as k,p as x,f as A,U as R,e as t,o as a,k as c,w as s,i as v,a as r,c as _,F as h,G as y,j as B,n as L,b as l,t as N,l as T,C as X}from"./index-CUmbT3FY.js";const G={class:"stack"},M=["innerHTML"],F=k({__name:"ServiceListTabsView",props:{mesh:{}},setup(w){const o=w,u=x(),m=A();return R(()=>u.currentRoute.value.name,d=>{d==="service-list-tabs-view"&&u.replace(m("use service-insights",o.mesh)?{name:"service-list-view"}:{name:"mesh-service-list-view"})},{immediate:!0}),(d,$)=>{const f=t("XAction"),V=t("XActionGroup"),C=t("RouterView"),b=t("AppView"),g=t("RouteView");return a(),c(g,{name:"service-list-tabs-view",params:{mesh:""}},{default:s(({route:i,t:p})=>[v("div",G,[r(b,null,{actions:s(()=>[r(V,{expanded:!0},{default:s(()=>[(a(!0),_(h,null,y(i.children,({name:e})=>{var n;return a(),_(h,{key:e},[!B(m)("use service-insights",o.mesh)&&["service-list-view","external-service-list-view"].includes(e)?T("",!0):(a(),c(f,{key:0,class:L({active:((n=i.child())==null?void 0:n.name)===e}),to:{name:e,params:{mesh:i.params.mesh}},"data-testid":`${e}-sub-tab`},{default:s(()=>[l(N(p(`services.routes.items.navigation.${e}.label`)),1)]),_:2},1032,["class","to","data-testid"]))],64)}),128))]),_:2},1024)]),default:s(()=>{var e;return[l(),v("div",{innerHTML:p(`services.routes.items.navigation.${(e=i.child())==null?void 0:e.name}.description`,{},{defaultMessage:""})},null,8,M),l(),r(C,null,{default:s(({Component:n})=>[(a(),c(X(n),{mesh:o.mesh},null,8,["mesh"]))]),_:1})]}),_:2},1024)])]),_:1})}}});export{F as default};