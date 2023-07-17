import{u as x}from"./kongponents.es-3d043985.js";import{O as V,a as S,b as L}from"./OnboardingPage-5ddf7a62.js";import{d as _,q as $,v as C,o as v,e as u,g as a,x as W,y as g,p as f,m as M,k as t,c as p,a as h,w as d,h as s,b as i,t as r,j as H,f as I,F as A}from"./index-41121ee3.js";import{g as y,e as N,j as O,f as j,_ as B}from"./RouteView.vue_vue_type_script_setup_true_lang-112c8af9.js";import{_ as G}from"./RouteTitle.vue_vue_type_script_setup_true_lang-8b8b4841.js";const z=e=>(f("data-v-4b67edd8"),e=e(),M(),e),F=z(()=>t("defs",null,null,-1)),E=g('<defs data-v-4b67edd8><linearGradient id="a" x1="64.8%" x2="34.4%" y1="-12.6%" y2="153.1%" data-v-4b67edd8><stop offset="0%" stop-color="var(--onboarding-accent-dark)" data-v-4b67edd8></stop> <stop offset="100%" stop-color="var(--onboarding-accent)" data-v-4b67edd8></stop></linearGradient> <linearGradient id="b" x1="0%" x2="107.4%" y1="41.5%" y2="41.5%" data-v-4b67edd8><stop offset="0%" stop-color="var(--onboarding-accent-dark)" data-v-4b67edd8></stop> <stop offset="100%" stop-color="var(--onboarding-accent)" data-v-4b67edd8></stop></linearGradient></defs>',1),T=g('<g fill="none" fill-rule="evenodd" mask="url(#ccard)" transform="translate(-63 -285)" data-v-4b67edd8><g stroke="var(--onboarding-accent)" stroke-width="6" data-v-4b67edd8><path d="M1444 893h252" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M1529 705h232M1452 603h237" data-v-4b67edd8></path> <path d="M1754 563l-332 332h-76M1444 935l121 121M263 859l156 156" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M742 781H556" data-v-4b67edd8></path> <path d="M697 736H513" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M695 783V577" data-v-4b67edd8></path> <path d="M261 1026V751M509 573V438M1502 415l291 290" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M698 912L26 240M1368 411v540l61 61 95-95M1434 3h267l193 192v354" data-v-4b67edd8></path> <path d="M517 411h342l138 138M1416 573v242l371 323" data-v-4b67edd8></path> <path d="M1486 817V612l-146-146M839 243h-97l-83 84v348M1698 1063V817l58-57h122M1069 299L558 810M696 1058H585L468 941V570L322 424" data-v-4b67edd8></path> <path d="M277 528l160 160 236-236 121 121M632 979h-45l-67-67v-86H0M106 669h275M70 707h331M207 745h210M85 784h356M1417 558h228M1609 634h203M528 946h76M619 604v131M1359 567l125 125M1332 594l156 156M1594 1070V959M381 632L260 753" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M605 817V497M1851 959h-518M944 570H390" data-v-4b67edd8></path> <path d="M638 912H342M635 1139V912" data-v-4b67edd8></path></g> <foreignObject x="0" y="0" width="100%" height="100%" data-v-4b67edd8><div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div></foreignObject></g>',1),q=_({__name:"WelcomeAnimationSvg",setup(e){const n=$(!1);return C(function(){window.setTimeout(()=>{n.value=!0},30)}),(o,b)=>(v(),u("svg",{class:W(["background svg",{active:n.value}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1080"},[F,a(),E,a(),T],2))}});const D=y(q,[["__scopeId","data-v-4b67edd8"]]),w=e=>(f("data-v-9bb5c146"),e=e(),M(),e),P=w(()=>t("strong",null,"few minutes",-1)),R=w(()=>t("h2",{class:"text-center"},`
              Let’s get started:
            `,-1)),U={class:"item-status-list-wrapper"},Y={class:"item-status-list"},J={class:"circle mr-2"},K=_({__name:"WelcomeView",setup(e){const n=N(),{t:o}=O(),b=p(()=>{const c=n.getters["config/getEnvironment"];return c.charAt(0).toUpperCase()+c.slice(1)}),m=p(()=>n.getters["config/getMulticlusterStatus"]),k=p(()=>[{name:`Run ${o("common.product.name")} control plane`,status:!0},{name:"Learn about deployments",status:!1},{name:"Learn about configuration storage",status:!1},...m.value?[{name:"Add zones",status:!1}]:[],{name:"Create the mesh",status:!1},{name:"Add services",status:!1},{name:"Go to the dashboard",status:!1}]);return(c,Q)=>(v(),h(B,null,{default:d(()=>[s(G,{title:i(o)("onboarding.routes.welcome.title",{name:i(o)("common.product.name")})},null,8,["title"]),a(),s(j,null,{default:d(()=>[t("div",null,[s(V,null,{header:d(()=>[s(S,null,{title:d(()=>[a(`
                Welcome to `+r(i(o)("common.product.name")),1)]),description:d(()=>[t("p",null,[a(`
                  Congratulations on downloading `+r(i(o)("common.product.name"))+"! You are just a ",1),P,a(` away from getting your service mesh fully online.
                `)]),a(),t("p",null,[a(`
                  We have automatically detected that you are running on `),t("strong",null,r(b.value),1),a(`.
                `)])]),_:1})]),content:d(()=>[R,a(),t("div",U,[t("ul",Y,[(v(!0),u(A,null,H(k.value,l=>(v(),u("li",{key:l.name},[t("span",J,[l.status?(v(),h(i(x),{key:0,icon:"check",size:"14",color:"currentColor"})):I("",!0)]),a(" "+r(l.name),1)]))),128))])])]),navigation:d(()=>[s(L,{"next-step":"onboarding-deployment-types"})]),_:1}),a(),s(D,{longer:m.value},null,8,["longer"])])]),_:1})]),_:1}))}});const da=y(K,[["__scopeId","data-v-9bb5c146"]]);export{da as default};