import{d as g,r as n,o as m,p,w as e,b as a,l as k,t as d,e as r,R as N,K as R,F as x}from"./index-Ch1waQC_.js";const X=g({__name:"ConnectionOutboundSummaryView",props:{data:{},networking:{},routeName:{}},setup(u){const i=u;return(y,s)=>{const _=n("XAction"),w=n("XTabs"),f=n("DataCollection"),V=n("RouterView"),b=n("AppView"),v=n("RouteView");return m(),p(v,{name:i.routeName,params:{connection:"",inactive:!1}},{default:e(({route:t,t:C})=>[a(b,null,{title:e(()=>[k("h2",null,`
          Outbound `+d(t.params.connection),1)]),default:e(()=>{var l;return[s[0]||(s[0]=r()),a(w,{selected:(l=t.child())==null?void 0:l.name},N({_:2},[R(t.children,o=>({name:`${o.name}-tab`,fn:e(()=>[a(_,{to:{name:o.name,query:{inactive:t.params.inactive}}},{default:e(()=>[r(d(C(`connections.routes.item.navigation.${o.name.split("-")[5]}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),s[1]||(s[1]=r()),a(V,null,{default:e(({Component:o})=>[a(f,{items:Object.entries(i.data),predicate:([c,A])=>c===t.params.connection,find:!0},{default:e(({items:c})=>[(m(),p(x(o),{data:c[0][1],networking:i.networking},null,8,["data","networking"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]}),_:2},1024)]),_:1},8,["name"])}}});export{X as default};
