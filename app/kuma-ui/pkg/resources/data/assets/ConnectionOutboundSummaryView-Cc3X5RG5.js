import{d as C,i as n,o as l,a as p,w as e,j as o,g as h,t as d,k as i,P as y,J as O,r as x}from"./index-B1qFrf1M.js";const g=C({__name:"ConnectionOutboundSummaryView",props:{data:{},dataplaneOverview:{}},setup(m){const s=m;return(A,D)=>{const u=n("XAction"),_=n("XTabs"),v=n("DataCollection"),w=n("RouterView"),f=n("AppView"),V=n("RouteView");return l(),p(V,{name:"connection-outbound-summary-view",params:{connection:"",inactive:!1}},{default:e(({route:t,t:b})=>[o(f,null,{title:e(()=>[h("h2",null,`
          Outbound `+d(t.params.connection),1)]),default:e(()=>{var r;return[i(),o(_,{selected:(r=t.child())==null?void 0:r.name},y({_:2},[O(t.children,a=>({name:`${a.name}-tab`,fn:e(()=>[o(u,{to:{name:a.name,query:{inactive:t.params.inactive}}},{default:e(()=>[i(d(b(`connections.routes.item.navigation.${a.name.split("-")[3]}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),i(),o(w,null,{default:e(({Component:a})=>[o(v,{items:Object.entries(s.data),predicate:([c,R])=>c===t.params.connection,find:!0},{default:e(({items:c})=>[(l(),p(x(a),{data:c[0][1],"dataplane-overview":s.dataplaneOverview},null,8,["data","dataplane-overview"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]}),_:2},1024)]),_:1})}}});export{g as default};