import{a as V,g as b,b as S}from"./index-8b8b41d0.js";import{d as B,h as p,r as u,o as i,i as T,w as t,j as n,a5 as x,n as e,p as c,a7 as m,H as l,l as r,F as _,I as y,m as z}from"./index-af109ace.js";import{S as D}from"./StatusBadge-ac5a18e6.js";import{_ as N}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-6cd6dbdc.js";import"./AccordionList-d10083a3.js";const $=["data-testid","innerHTML"],A={"data-testid":"detail-view-details",class:"stack"},H={class:"columns"},L={key:0},R=B({__name:"DetailView",props:{data:{},notifications:{default:()=>[]}},setup(h){const s=h,v=p(()=>V(s.data)),k=p(()=>b(s.data)),g=p(()=>S(s.data));return(Z,E)=>{const f=u("KCard"),w=u("AppView"),C=u("RouteView");return i(),T(C,{name:"zone-cp-detail-view"},{default:t(({t:o})=>[n(w,null,x({default:t(()=>{var a;return[e(),c("div",A,[n(f,null,{body:t(()=>[c("div",H,[n(m,null,{title:t(()=>[e(l(o("http.api.property.status")),1)]),body:t(()=>[n(D,{status:k.value},null,8,["status"])]),_:2},1024),e(),n(m,null,{title:t(()=>[e(l(o("http.api.property.type")),1)]),body:t(()=>[e(l(o(`common.product.environment.${v.value||"unknown"}`)),1)]),_:2},1024),e(),n(m,null,{title:t(()=>[e(l(o("zone-cps.routes.item.authentication_type")),1)]),body:t(()=>[e(l(g.value||o("common.not_applicable")),1)]),_:2},1024)])]),_:2},1024),e(),(i(!0),r(_,null,y([((a=s.data.zoneInsight)==null?void 0:a.subscriptions)??[]],d=>(i(),r(_,{key:d},[d.length>0?(i(),r("div",L,[c("h2",null,l(o("zone-cps.detail.subscriptions")),1),e(),n(f,{class:"mt-4"},{body:t(()=>[n(N,{subscriptions:d},null,8,["subscriptions"])]),_:2},1024)])):z("",!0)],64))),128))])]}),_:2},[s.notifications.length>0?{name:"notifications",fn:t(()=>[c("ul",null,[(i(!0),r(_,null,y(s.notifications,a=>(i(),r("li",{key:a.kind,"data-testid":`warning-${a.kind}`,innerHTML:o(`common.warnings.${a.kind}`,a.payload)},null,8,$))),128)),e()])]),key:"0"}:void 0]),1024)]),_:1})}}});export{R as default};