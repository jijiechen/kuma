import{L as z}from"./LoadingBox-d56dce8e.js";import{O as T,a as V,b as I}from"./OnboardingPage-f6a09138.js";import{d as k,u as A,m as r,S as O,a as p,o as a,b as N,w as i,e as c,f as e,p as n,c as l,v as B,A as C,B as L,_ as R}from"./index-203d56a2.js";const S=u=>(C("data-v-e9780766"),u=u(),L(),u),M=S(()=>n("p",{class:"mb-4 text-center"},`
            A zone requires both the zone control plane and zone ingress. On Kubernetes, you run a single command to create both resources. On Universal, you must create them separately.
          `,-1)),D={class:"mb-4 text-center"},E=["href"],G={class:"status-box mt-4"},K={key:0,class:"status--is-connected","data-testid":"zone-connected"},P={key:1,class:"status--is-disconnected","data-testid":"zone-disconnected"},U={class:"status-box mt-4"},q={key:0,class:"status--is-connected","data-testid":"zone-ingress-connected"},H={key:1,class:"status--is-disconnected","data-testid":"zone-ingress-disconnected"},j={key:0,class:"status-loading-box mt-4"},b=1e3,F=k({__name:"MultiZoneView",setup(u){const m=A(),o=r(!1),s=r(!1),d=r(null),_=r(null);O(function(){g(),h()}),f(),v();async function f(){try{const{total:t}=await m.getZones();o.value=t>0}catch(t){o.value=!1,console.error(t)}finally{o.value||(g(),d.value=window.setTimeout(f,b))}}async function v(){try{const{total:t}=await m.getAllZoneIngressOverviews();s.value=t>0}catch(t){s.value=!1,console.error(t)}finally{s.value||(h(),_.value=window.setTimeout(v,b))}}function g(){d.value!==null&&window.clearTimeout(d.value)}function h(){_.value!==null&&window.clearTimeout(_.value)}return(t,J)=>{const y=p("RouteTitle"),x=p("AppView"),Z=p("RouteView");return a(),N(Z,{name:"onboarding-multi-zone"},{default:i(({t:w})=>[c(y,{title:w("onboarding.routes.multizone.title"),render:!1},null,8,["title"]),e(),c(x,null,{default:i(()=>[c(T,null,{header:i(()=>[c(V,null,{title:i(()=>[e(`
              Add zones
            `)]),_:1})]),content:i(()=>[M,e(),n("p",D,[n("b",null,[e("See "),n("a",{href:w("onboarding.href.docs.install"),target:"_blank"},"the documentation for options to install",8,E),e(".")])]),e(),n("div",null,[n("p",G,[e(`
              Zone status:

              `),o.value?(a(),l("span",K,"Connected")):(a(),l("span",P,"Disconnected"))]),e(),n("p",U,[e(`
              Zone ingress status:

              `),s.value?(a(),l("span",q,"Connected")):(a(),l("span",H,"Disconnected"))]),e(),!s.value||!o.value?(a(),l("div",j,[c(z)])):B("",!0)])]),navigation:i(()=>[c(I,{"next-step":"onboarding-create-mesh","previous-step":"onboarding-configuration-types","should-allow-next":o.value&&s.value},null,8,["should-allow-next"])]),_:2},1024)]),_:2},1024)]),_:1})}}});const Y=R(F,[["__scopeId","data-v-e9780766"]]);export{Y as default};