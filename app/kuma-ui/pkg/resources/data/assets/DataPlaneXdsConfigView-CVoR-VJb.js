import{d as C,e as a,o as x,m as V,w as s,a as o,b as t,l as E,a6 as R}from"./index-DpAqRYT5.js";const b=C({__name:"DataPlaneXdsConfigView",setup(w){return(k,y)=>{const d=a("RouteTitle"),l=a("XCheckbox"),c=a("XAction"),p=a("XCodeBlock"),i=a("DataLoader"),r=a("KCard"),m=a("AppView"),_=a("RouteView");return x(),V(_,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,includeEds:!1}},{default:s(({route:e,t:u,uri:f})=>[o(d,{render:!1,title:u("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"]),t(),o(m,null,{default:s(()=>[o(r,null,{default:s(()=>[o(i,{src:f(E(R),"/meshes/:mesh/dataplanes/:name/xds/:endpoints",{mesh:e.params.mesh,name:e.params.dataPlane,endpoints:String(e.params.includeEds)})},{default:s(({data:g,refresh:h})=>[o(p,{language:"json",code:JSON.stringify(g,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":s(()=>[o(l,{modelValue:e.params.includeEds,"onUpdate:modelValue":n=>e.params.includeEds=n,label:"Include Endpoints"},null,8,["modelValue","onUpdate:modelValue"]),t(),o(c,{action:"refresh",appearance:"primary",onClick:h},{default:s(()=>[t(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{b as default};
