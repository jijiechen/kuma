import{d as C,e as o,o as f,m as g,w as t,a as n,b as c,l as x,a3 as R}from"./index-DpAqRYT5.js";const B=C({__name:"ConnectionOutboundSummaryClustersView",setup(w){return(y,V)=>{const r=o("RouteTitle"),p=o("KButton"),d=o("XCodeBlock"),i=o("DataCollection"),l=o("DataLoader"),m=o("AppView"),_=o("RouteView");return f(),g(_,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",connection:""},name:"connection-outbound-summary-clusters-view"},{default:t(({route:e})=>[n(r,{render:!1,title:"Clusters"}),c(),n(m,null,{default:t(()=>[n(l,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`},{default:t(({data:u,refresh:h})=>[n(i,{items:u.split(`
`),predicate:s=>s.startsWith(`${e.params.connection}::`)},{default:t(({items:s})=>[n(d,{language:"json",code:s.map(a=>a.replace(`${e.params.connection}::`,"")).join(`
`),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":t(()=>[n(p,{appearance:"primary",onClick:h},{default:t(()=>[n(x(R)),c(`

                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["items","predicate"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{B as default};
