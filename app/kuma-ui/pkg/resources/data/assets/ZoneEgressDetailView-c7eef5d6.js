import{g,A as f,D as c,S as h,T as w,_ as y}from"./RouteView.vue_vue_type_script_setup_true_lang-9ff59c45.js";import{_ as k}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-80e01518.js";import{g as b}from"./dataplane-30467516.js";import{d as z,r as E,o as i,a as u,w as t,h as e,i as m,g as o,t as d,b as n,e as x,F as C}from"./index-6c44d272.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7307ec83.js";import"./AccordionList-0dcf64ab.js";const v={class:"stack","data-testid":"detail-view-details"},B={class:"columns",style:{"--columns":"2"}},A=z({__name:"ZoneEgressDetailView",props:{data:{}},setup(_){const s=_,{t:r}=g();return(I,V)=>{const l=E("KCard");return i(),u(y,{name:"zone-egress-detail-view","data-testid":"zone-egress-detail-view"},{default:t(()=>[e(f,null,{default:t(()=>[m("div",v,[e(l,null,{body:t(()=>[m("div",B,[e(c,null,{title:t(()=>[o(d(n(r)("http.api.property.status")),1)]),body:t(()=>[e(h,{status:n(b)(s.data.zoneEgressInsight)},null,8,["status"])]),_:1}),o(),e(c,null,{title:t(()=>[o(d(n(r)("http.api.property.address")),1)]),body:t(()=>{var a,p;return[(a=s.data.zoneEgress.networking)!=null&&a.address&&((p=s.data.zoneEgress.networking)!=null&&p.port)?(i(),u(w,{key:0,text:`${s.data.zoneEgress.networking.address}:${s.data.zoneEgress.networking.port}`},null,8,["text"])):(i(),x(C,{key:1},[o(d(n(r)("common.detail.none")),1)],64))]}),_:1})])]),_:1}),o(),e(l,null,{body:t(()=>{var a;return[e(k,{subscriptions:((a=s.data.zoneEgressInsight)==null?void 0:a.subscriptions)??[]},null,8,["subscriptions"])]}),_:1})])]),_:1})]),_:1})}}});export{A as default};