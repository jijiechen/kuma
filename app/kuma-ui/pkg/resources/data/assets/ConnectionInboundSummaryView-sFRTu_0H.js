import{d as b,e as t,o as r,m as p,w as e,a as o,k as y,t as d,b as s,R as h,J as R,E as g}from"./index-bM6gVJZj.js";const D=b({__name:"ConnectionInboundSummaryView",props:{data:{},dataplaneOverview:{}},setup(m){const i=m;return(k,x)=>{const _=t("XAction"),u=t("XTabs"),v=t("RouterView"),w=t("AppView"),f=t("DataCollection"),V=t("RouteView");return r(),p(V,{name:"connection-inbound-summary-view",params:{connection:"",inactive:!1}},{default:e(({route:a,t:C})=>[o(f,{items:i.data,predicate:i.dataplaneOverview.dataplane.networking.type==="gateway"?c=>!0:c=>c.name===a.params.connection,find:!0},{default:e(({items:c})=>[o(w,null,{title:e(()=>[y("h2",null,`
            Inbound `+d(a.params.connection.replace("localhost","").replace("_",":")),1)]),default:e(()=>{var l;return[s(),o(u,{selected:(l=a.child())==null?void 0:l.name},h({_:2},[R(a.children,({name:n})=>({name:`${n}-tab`,fn:e(()=>[o(_,{to:{name:n,query:{inactive:a.params.inactive}}},{default:e(()=>[s(d(C(`connections.routes.item.navigation.${n.split("-")[3]}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),s(),o(v,null,{default:e(n=>[(r(),p(g(n.Component),{data:c[0],"dataplane-overview":i.dataplaneOverview},null,8,["data","dataplane-overview"]))]),_:2},1024)]}),_:2},1024)]),_:2},1032,["items","predicate"])]),_:1})}}});export{D as default};
