import{L as x}from"./LoadingBox-BeusH8BQ.js";import{O as y,a as V,b as D}from"./OnboardingPage-CeHrRs1z.js";import{d as N,e as o,o as a,m as u,w as t,a as s,b as l,c as d,H as _,J as m,t as p,k as i,S as O,p as S,q as B}from"./index-bM6gVJZj.js";const L={class:"status-loading-box mb-4"},T={key:0},C=N({__name:"OnboardingDataplanesView",setup(R){return(P,$)=>{const g=o("RouteTitle"),b=o("KTable"),h=o("DataLoader"),w=o("DataSource"),v=o("AppView"),f=o("RouteView");return a(),u(f,{name:"onboarding-dataplanes-view"},{default:t(({t:c})=>[s(g,{title:c("onboarding.routes.dataplanes-overview.title"),render:!1},null,8,["title"]),l(),s(v,null,{default:t(()=>[s(w,{src:"/dataplanes/poll?page=1&size=10"},{default:t(({data:e,error:k})=>[(a(!0),d(_,null,m([(e==null?void 0:e.items.length)===0||(e==null?void 0:e.items.some(r=>r.status!=="online"))],r=>(a(),u(y,{key:r},{header:t(()=>[(a(!0),d(_,null,m([r?"waiting":"success"],n=>(a(),u(V,{key:n,"data-testid":`state-${n}`},{title:t(()=>[l(p(c(`onboarding.routes.dataplanes-overview.header.${n}.title`)),1)]),description:t(()=>[i("p",null,p(c(`onboarding.routes.dataplanes-overview.header.${n}.description`)),1)]),_:2},1032,["data-testid"]))),128))]),content:t(()=>[s(h,{data:[e],errors:[k]},{connecting:t(()=>[i("div",L,[s(x)])]),default:t(()=>[l(),e?(a(),d("div",T,[i("p",null,[i("strong",null,`
                      Found `+p(e.items.length)+` DPPs:
                    `,1)]),l(),s(b,{class:"mb-4","data-testid":"dataplanes-table","fetcher-cache-key":JSON.stringify(e),fetcher:(n=>()=>({data:n.items,total:n.items.length}))(e),headers:[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],"disable-pagination":""},{status:t(({row:n})=>[s(O,{status:n.status},null,8,["status"])]),_:2},1032,["fetcher-cache-key","fetcher"])])):S("",!0)]),_:2},1032,["data","errors"])]),navigation:t(()=>[s(D,{"next-step":"onboarding-completed-view","previous-step":"onboarding-add-new-services-code-view","should-allow-next":((e==null?void 0:e.items)??[]).length>0},null,8,["should-allow-next"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:1})}}}),J=B(C,[["__scopeId","data-v-0fcb3c79"]]);export{J as default};
