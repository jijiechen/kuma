import{d as O,e as n,o,k as p,w as t,a,i as l,P as d,b as e,t as i,$ as A,l as f,c as s,j as P,a4 as j,F as m,G as g,a2 as F}from"./index-CUmbT3FY.js";import{a as T,A as I}from"./AccordionList-Ci_gdcrt.js";import{P as K}from"./PolicyTypeTag-dwVk1ufe.js";import{T as M}from"./TagList-CCpG-Q35.js";import{R as E}from"./RuleMatchers-V24SATrM.js";const G={class:"stack-with-borders"},Y={key:0,class:"mt-6"},q=l("h3",null,"Rules",-1),H={class:"mt-4"},J={class:"stack-with-borders"},Q=l("dt",null,`
                                Config
                              `,-1),U={class:"mt-2"},st=O({__name:"ConnectionInboundSummaryOverviewView",props:{data:{}},setup(B){const r=B;return(W,Z)=>{const C=n("XBadge"),V=n("XAction"),x=n("DataSource"),D=n("XCodeBlock"),$=n("KCard"),z=n("DataCollection"),L=n("DataLoader"),N=n("AppView"),R=n("RouteView");return o(),p(R,{params:{mesh:"",dataPlane:"",connection:""},name:"connection-inbound-summary-overview-view"},{default:t(({t:b,route:v,uri:X})=>[a(N,null,{default:t(()=>[l("div",G,[a(d,{layout:"horizontal"},{title:t(()=>[e(`
            Tags
          `)]),body:t(()=>[a(M,{tags:r.data.tags,alignment:"right"},null,8,["tags"])]),_:1}),e(),a(d,{layout:"horizontal"},{title:t(()=>[e(i(b("http.api.property.state")),1)]),body:t(()=>[a(C,{appearance:r.data.state==="Ready"?"success":"danger"},{default:t(()=>[e(i(b(`http.api.value.${r.data.state}`)),1)]),_:2},1032,["appearance"])]),_:2},1024),e(),a(d,{layout:"horizontal"},{title:t(()=>[e(`
            Protocol
          `)]),body:t(()=>[a(C,{appearance:"info"},{default:t(()=>[e(i(b(`http.api.value.${r.data.protocol}`)),1)]),_:2},1024)]),_:2},1024),e(),a(d,{layout:"horizontal"},{title:t(()=>[e(`
            Address
          `)]),body:t(()=>[a(A,{text:`${r.data.addressPort}`},null,8,["text"])]),_:1}),e(),r.data.serviceAddressPort.length>0?(o(),p(d,{key:0,layout:"horizontal"},{title:t(()=>[e(`
            Service Address
          `)]),body:t(()=>[a(A,{text:`${r.data.serviceAddressPort}`},null,8,["text"])]),_:1})):f("",!0)]),e(),r.data?(o(),s("div",Y,[q,e(),a(L,{src:X(P(j),"/meshes/:mesh/rules/for/:dataplane",{mesh:v.params.mesh,dataplane:v.params.dataPlane})},{default:t(({data:S})=>[a(z,{predicate:h=>h.ruleType==="from"&&Number(h.inbound.port)===Number(v.params.connection.split("_")[1]),items:S.rules},{default:t(({items:h})=>[l("div",H,[a(T,{"initially-open":0,"multiple-open":"",class:"stack"},{default:t(()=>[(o(!0),s(m,null,g(Object.groupBy(h,y=>y.type),(y,k)=>(o(),p($,{key:k},{default:t(()=>[a(I,null,{"accordion-header":t(()=>[a(K,{"policy-type":k},{default:t(()=>[e(i(k)+" ("+i(y.length)+`)
                        `,1)]),_:2},1032,["policy-type"])]),"accordion-content":t(()=>[l("div",J,[(o(!0),s(m,null,g(y,u=>(o(),s(m,{key:u},[u.matchers.length>0?(o(),p(d,{key:0,layout:"horizontal"},{title:t(()=>[e(`
                                From
                              `)]),body:t(()=>[l("p",null,[a(E,{items:u.matchers},null,8,["items"])])]),_:2},1024)):f("",!0),e(),u.origins.length>0?(o(),p(d,{key:1,layout:"horizontal"},{title:t(()=>[e(`
                                Origin Policies
                              `)]),body:t(()=>[a(x,{src:"/policy-types"},{default:t(({data:w})=>[(o(!0),s(m,null,g([Object.groupBy((w==null?void 0:w.policies)??[],_=>_.name)],_=>(o(),s("ul",{key:_},[(o(!0),s(m,null,g(u.origins,c=>(o(),s("li",{key:`${c.mesh}-${c.name}`},[_[c.type]?(o(),p(V,{key:0,to:{name:"policy-detail-view",params:{mesh:c.mesh,policyPath:_[c.type][0].path,policy:c.name}}},{default:t(()=>[e(i(c.name),1)]),_:2},1032,["to"])):(o(),s(m,{key:1},[e(i(c.name),1)],64))]))),128))]))),128))]),_:2},1024)]),_:2},1024)):f("",!0),e(),l("div",null,[Q,e(),l("dd",U,[l("div",null,[a(D,{code:P(F).stringify(u.raw),language:"yaml","show-copy-button":!1},null,8,["code"])])])])],64))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["predicate","items"])]),_:2},1032,["src"])])):f("",!0)]),_:2},1024)]),_:1})}}});export{st as default};