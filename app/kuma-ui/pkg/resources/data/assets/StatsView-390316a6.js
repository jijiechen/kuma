import{E as l}from"./EnvoyData-4c52d667.js";import{g as d}from"./dataplane-dcd0858b.js";import{d as _,a as e,o as g,b as h,w as t,e as o,p as f,f as w,q as V}from"./index-203d56a2.js";import"./index-9dd3e7d3.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-f7a0d7a8.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-01997eab.js";import"./ErrorBlock-085322b0.js";import"./TextWithCopyButton-45b0690a.js";import"./CopyButton-4a565fd0.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-297a38e2.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-096f0e9b.js";const k=_({__name:"StatsView",props:{data:{}},setup(a){const n=a;return(z,C)=>{const r=e("RouteTitle"),i=e("KCard"),p=e("AppView"),c=e("RouteView");return g(),h(c,{name:"zone-ingress-stats-view",params:{zoneIngress:"",codeSearch:""}},{default:t(({route:s,t:m})=>[o(p,null,{title:t(()=>[f("h2",null,[o(r,{title:m("zone-ingresses.routes.item.navigation.zone-ingress-stats-view")},null,8,["title"])])]),default:t(()=>[w(),o(i,null,{body:t(()=>[o(l,{status:V(d)(n.data.zoneIngressInsight),resource:"Zone",src:`/zone-ingresses/${s.params.zoneIngress}/data-path/stats`,query:s.params.codeSearch,onQueryChange:u=>s.update({codeSearch:u})},null,8,["status","src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{k as default};