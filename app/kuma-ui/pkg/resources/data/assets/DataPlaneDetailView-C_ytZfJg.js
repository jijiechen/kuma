import{d as rt,Q as lt,r as y,m as b,o as d,w as t,b as n,s as B,T as ut,c as u,e as a,F as c,v as k,q as w,p as C,L as _,S as mt,t as r,M as U,K as yt,C as ct,_ as ft}from"./index-BeIeMoGm.js";import{S as bt}from"./SummaryView-DYJRYI9A.js";import{T as gt}from"./TagList-Dw2VgN17.js";import{C as W,a as A,b as R}from"./ConnectionTraffic-BpNoPIgq.js";const vt={"data-testid":"dataplane-mtls"},kt={class:"columns"},_t={key:0,"data-testid":"dataplane-subscriptions"},wt=rt({__name:"DataPlaneDetailView",props:{data:{},mesh:{}},setup(Y){const N=lt(),s=Y;return(Ct,e)=>{const q=y("XI18n"),E=y("XNotification"),z=y("XIcon"),$=y("DataCollection"),h=y("XLayout"),X=y("XAction"),T=y("XBadge"),Z=y("XCopyButton"),tt=y("XAboutCard"),O=y("XEmptyState"),et=y("XInputSwitch"),at=y("XProgress"),S=y("XCard"),nt=y("RouterView"),ot=y("AppView"),st=y("DataSource"),it=y("RouteView");return d(),b(it,{params:{inactive:Boolean,mesh:"",proxy:"",proxyType:"",subscription:""},name:"data-plane-detail-view"},{default:t(({route:f,t:l,can:V,me:I,uri:dt})=>[n(st,{src:dt(B(ut),"/connections/stats/for/:proxyType/:name/:mesh/:socketAddress",{proxyType:{ingresses:"zone-ingress",egresses:"zone-egress"}[f.params.proxyType]??"dataplane",name:f.params.proxy,mesh:f.params.mesh||"*",socketAddress:s.data.dataplane.networking.inboundAddress})},{default:t(({data:g,error:x,refresh:pt})=>[n(ot,{notifications:!0},{default:t(()=>{var P,j,L,F,M,G,K,Q,H,J;return[(d(!0),u(c,null,k([{bool:((j=(P=s.data.dataplaneInsight.version)==null?void 0:P.kumaDp)==null?void 0:j.kumaCpCompatible)===!1,key:"dp-cp-incompatible",params:{kumaDp:((L=s.data.dataplaneInsight.version)==null?void 0:L.kumaDp.version)??""}},{bool:((M=(F=s.data.dataplaneInsight.version)==null?void 0:F.envoy)==null?void 0:M.kumaDpCompatible)===!1,key:"envoy-dp-incompatible",params:{envoy:((G=s.data.dataplaneInsight.version)==null?void 0:G.envoy.version)??"",kumaDp:((K=s.data.dataplaneInsight.version)==null?void 0:K.kumaDp.version)??""}},{bool:!!(V("use zones")&&s.data.zone&&((H=(Q=s.data.dataplaneInsight.version)==null?void 0:Q.kumaDp)==null?void 0:H.kumaCpCompatible)===!1),key:"dp-zone-cp-incompatible",params:{kumaDp:((J=s.data.dataplaneInsight.version)==null?void 0:J.kumaDp.version)??""}},{bool:s.data.isCertExpired,key:"certificate-expired"},{bool:!s.data.dataplaneInsight.mTLS,key:"no-mtls"},{bool:!!x,key:"stats-not-enhanced",params:{error:(x==null?void 0:x.toString())??""}}],({bool:o,key:i,params:p})=>(d(),b(E,{key:i,notify:o,"data-testid":`warning-${i}`,uri:`data-planes.notifications.${i}.${s.data.id}`},{default:t(()=>[n(q,{path:`data-planes.notifications.${i}`,params:Object.fromEntries(Object.entries(p??{}))},null,8,["path","params"])]),_:2},1032,["notify","data-testid","uri"]))),128)),e[46]||(e[46]=a()),n(h,{type:"stack","data-testid":"dataplane-details"},{default:t(()=>[n(tt,{title:l("data-planes.routes.item.about.title"),created:s.data.creationTime,modified:s.data.modificationTime},{default:t(()=>[n(_,{layout:"horizontal"},{title:t(()=>[a(r(l("http.api.property.status")),1)]),body:t(()=>[n(h,{type:"separated"},{default:t(()=>[n(mt,{status:s.data.status},null,8,["status"]),e[0]||(e[0]=a()),s.data.dataplaneType==="standard"?(d(),b($,{key:0,items:s.data.dataplane.networking.inbounds,predicate:o=>o.state!=="Ready",empty:!1},{default:t(({items:o})=>[n(z,{name:"info"},{default:t(()=>[w("ul",null,[(d(!0),u(c,null,k(o,i=>(d(),u("li",{key:`${i.service}:${i.port}`},r(l("data-planes.routes.item.unhealthy_inbound",{service:i.service,port:i.port})),1))),128))])]),_:2},1024)]),_:2},1032,["items","predicate"])):C("",!0)]),_:2},1024)]),_:2},1024),e[7]||(e[7]=a()),V("use zones")&&s.data.zone?(d(),b(_,{key:0,layout:"horizontal"},{title:t(()=>[a(r(l("http.api.property.zone")),1)]),body:t(()=>[n(T,{appearance:"decorative"},{default:t(()=>[n(X,{to:{name:"zone-cp-detail-view",params:{zone:s.data.zone}}},{default:t(()=>[a(r(s.data.zone),1)]),_:1},8,["to"])]),_:1})]),_:2},1024)):C("",!0),e[8]||(e[8]=a()),n(_,{layout:"horizontal"},{title:t(()=>[a(r(l("http.api.proptery.type")),1)]),body:t(()=>[n(T,{appearance:"decorative"},{default:t(()=>[a(r(l(`data-planes.type.${s.data.dataplaneType}`)),1)]),_:2},1024)]),_:2},1024),e[9]||(e[9]=a()),s.data.namespace.length>0?(d(),b(_,{key:1,layout:"horizontal"},{title:t(()=>[a(r(l("http.api.property.namespace")),1)]),body:t(()=>[n(T,{appearance:"decorative"},{default:t(()=>[a(r(s.data.namespace),1)]),_:1})]),_:2},1024)):C("",!0),e[10]||(e[10]=a()),n(_,{layout:"horizontal"},{title:t(()=>[a(r(l("http.api.property.address")),1)]),body:t(()=>[n(Z,{variant:"badge",format:"default",text:`${s.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024),e[11]||(e[11]=a()),s.data.dataplane.networking.gateway?(d(),b(_,{key:2,layout:"horizontal"},{title:t(()=>[a(r(l("http.api.property.tags")),1)]),body:t(()=>[n(gt,{tags:s.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]),_:2},1032,["title","created","modified"]),e[42]||(e[42]=a()),n(S,{class:"traffic","data-testid":"dataplane-traffic"},{default:t(()=>[n(h,{type:"columns"},{default:t(()=>[n(W,null,{title:t(()=>[n(h,{type:"separated"},{default:t(()=>[n(z,{name:"inbound"}),e[12]||(e[12]=a()),e[13]||(e[13]=w("span",null,"Inbounds",-1))]),_:1})]),default:t(()=>[e[15]||(e[15]=a()),(d(!0),u(c,null,k([s.data.dataplane.networking.type==="gateway"?Object.entries((g==null?void 0:g.inbounds)??{}).reduce((o,[i,p])=>{var v;const m=i.split("_").at(-1);return m===(((v=s.data.dataplane.networking.admin)==null?void 0:v.port)??"9901")?o:o.concat([{...s.data.dataplane.networking.inbounds[0],name:i,port:Number(m),protocol:["http","tcp"].find(D=>typeof p[D]<"u")??"tcp",addressPort:`${s.data.dataplane.networking.inbounds[0].address}:${m}`}])},[]):s.data.dataplane.networking.inbounds],o=>(d(),b(A,{key:o,type:"inbound","data-testid":"dataplane-inbounds"},{default:t(()=>[n($,{type:"inbounds",items:o,predicate:i=>i.port!==49151},U({default:t(({items:i})=>[n(h,{type:"stack",size:"small"},{default:t(()=>[(d(!0),u(c,null,k(i,p=>(d(),u(c,{key:`${p.name}`},[(d(!0),u(c,null,k([g==null?void 0:g.inbounds[p.name]],m=>(d(),b(R,{key:m,"data-testid":"dataplane-inbound",protocol:p.protocol,service:V("use service-insights",s.mesh)?p.tags["kuma.io/service"]:"","port-name":p.portName,traffic:typeof x>"u"?m:{name:"",protocol:p.protocol,port:`${p.port}`}},{default:t(()=>[n(X,{"data-action":"",to:{name:(v=>v.includes("bound")?v.replace("-outbound-","-inbound-"):"data-plane-connection-inbound-summary-overview-view")(String(B(N).name)),params:{connection:p.name},query:{inactive:f.params.inactive}}},{default:t(()=>[a(r(p.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","port-name","traffic"]))),128))],64))),128))]),_:2},1024)]),_:2},[s.data.dataplaneType==="delegated"?{name:"empty",fn:t(()=>[n(O,null,{default:t(()=>[w("p",null,`
                            This proxy is a delegated gateway therefore `+r(l("common.product.name"))+` does not have any
                            visibility into inbounds for this gateway.
                          `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"])]),_:2},1024))),128))]),_:2},1024),e[26]||(e[26]=a()),n(W,null,U({title:t(()=>[n(h,{type:"separated"},{default:t(()=>[n(z,{name:"outbound"}),e[19]||(e[19]=a()),e[20]||(e[20]=w("span",null,"Outbounds",-1))]),_:1})]),default:t(()=>[e[24]||(e[24]=a()),e[25]||(e[25]=a()),typeof x>"u"?(d(),u(c,{key:0},[typeof g>"u"?(d(),b(at,{key:0})):(d(),u(c,{key:1},[n(A,{type:"passthrough"},{default:t(()=>[n(R,{protocol:"passthrough",traffic:g.passthrough},{default:t(()=>e[21]||(e[21]=[a(`
                        Non mesh traffic
                      `)])),_:2},1032,["traffic"])]),_:2},1024),e[23]||(e[23]=a()),(d(),u(c,null,k(["upstream"],o=>(d(),u(c,{key:o},[n(E,{notify:!!Object.values(g.outbounds).find(i=>{var p,m;return(typeof i.tcp<"u"?(p=i.tcp)==null?void 0:p[`${o}_cx_rx_bytes_total`]:(m=i.http)==null?void 0:m[`${o}_rq_total`])??!1}),variant:"info",uri:`data-planes.notifications.recommend-reachable-services:${s.data.id}`},{default:t(()=>[n(q,{path:"data-planes.notifications.recommend-reachable",params:{mode:s.mesh.meshServices.mode}},null,8,["params"])]),_:2},1032,["notify","uri"]),e[22]||(e[22]=a()),n($,{type:"outbounds",predicate:f.params.inactive?void 0:([i,p])=>{var m,v;return((typeof p.tcp<"u"?(m=p.tcp)==null?void 0:m[`${o}_cx_rx_bytes_total`]:(v=p.http)==null?void 0:v[`${o}_rq_total`])??0)>0},items:Object.entries(g.outbounds)},{default:t(({items:i})=>[i.length>0?(d(),b(A,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:t(()=>[(d(),u(c,null,k([/-([a-f0-9]){16}$/],p=>n(h,{key:p,type:"stack",size:"small"},{default:t(()=>[(d(!0),u(c,null,k(i,([m,v])=>(d(),b(R,{key:`${m}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(D=>typeof v[D]<"u")??"tcp",traffic:v,service:v.$resourceMeta.type===""?m.replace(p,""):void 0,direction:o},{default:t(()=>[n(X,{"data-action":"",to:{name:(D=>D.includes("bound")?D.replace("-inbound-","-outbound-"):"data-plane-connection-outbound-summary-overview-view")(String(B(N).name)),params:{connection:m},query:{inactive:f.params.inactive}}},{default:t(()=>[a(r(m),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))]),_:2},1024)),64))]),_:2},1024)):C("",!0)]),_:2},1032,["predicate","items"])],64))),64))],64))],64)):(d(),b(O,{key:1}))]),_:2},[g?{name:"actions",fn:t(()=>[n(et,{checked:f.params.inactive,"data-testid":"dataplane-outbounds-inactive-toggle",onChange:o=>f.update({inactive:o})},{label:t(()=>e[16]||(e[16]=[a(`
                      Show inactive
                    `)])),_:2},1032,["checked","onChange"]),e[18]||(e[18]=a()),n(X,{action:"refresh",appearance:"primary",onClick:pt},{default:t(()=>e[17]||(e[17]=[a(`
                    Refresh
                  `)])),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024),e[43]||(e[43]=a()),n(nt,null,{default:t(o=>[o.route.name!==f.name?(d(),b(bt,{key:0,width:"670px",onClose:function(){f.replace({name:"data-plane-detail-view",params:{mesh:f.params.mesh,proxy:f.params.proxy},query:{inactive:f.params.inactive?null:void 0}})}},{default:t(()=>[(d(),b(yt(o.Component),{data:f.params.subscription.length>0?s.data.dataplaneInsight.subscriptions:o.route.name.includes("-inbound-")?s.data.dataplane.networking.inbounds:(g==null?void 0:g.outbounds)||{},networking:s.data.dataplane.networking},null,8,["data","networking"]))]),_:2},1032,["onClose"])):C("",!0)]),_:2},1024),e[44]||(e[44]=a()),w("div",vt,[s.data.dataplaneInsight.mTLS?(d(!0),u(c,{key:0},k([s.data.dataplaneInsight.mTLS],o=>(d(),b(S,{key:o},{title:t(()=>[w("h2",null,r(l("data-planes.routes.item.mtls.title")),1)]),default:t(()=>[e[36]||(e[36]=a()),w("div",kt,[n(_,null,{title:t(()=>[a(r(l("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:t(()=>[a(r(l("common.formats.datetime",{value:Date.parse(o.certificateExpirationTime)})),1)]),_:2},1024),e[32]||(e[32]=a()),n(_,null,{title:t(()=>[a(r(l("data-planes.routes.item.mtls.generation_time.title")),1)]),body:t(()=>[a(r(l("common.formats.datetime",{value:Date.parse(o.lastCertificateRegeneration)})),1)]),_:2},1024),e[33]||(e[33]=a()),n(_,null,{title:t(()=>[a(r(l("data-planes.routes.item.mtls.regenerations.title")),1)]),body:t(()=>[a(r(l("common.formats.integer",{value:o.certificateRegenerations})),1)]),_:2},1024),e[34]||(e[34]=a()),n(_,null,{title:t(()=>[a(r(l("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:t(()=>[a(r(o.issuedBackend),1)]),_:2},1024),e[35]||(e[35]=a()),n(_,null,{title:t(()=>[a(r(l("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:t(()=>[w("ul",null,[(d(!0),u(c,null,k(o.supportedBackends,i=>(d(),u("li",{key:i},r(i),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):C("",!0)]),e[45]||(e[45]=a()),s.data.dataplaneInsight.subscriptions.length>0?(d(),u("div",_t,[n(S,null,{title:t(()=>[w("h2",null,r(l("data-planes.routes.item.subscriptions.title")),1)]),default:t(()=>[e[41]||(e[41]=a()),n(ct,{headers:[{...I.get("headers.instanceId"),label:l("http.api.property.instanceId"),key:"instanceId"},{...I.get("headers.version"),label:l("http.api.property.version"),key:"version"},{...I.get("headers.connected"),label:l("http.api.property.connected"),key:"connected"},{...I.get("headers.disconnected"),label:l("http.api.property.disconnected"),key:"disconnected"},{...I.get("headers.responses"),label:l("http.api.property.responses"),key:"responses"}],"is-selected-row":o=>o.id===f.params.subscription,items:s.data.dataplaneInsight.subscriptions.map((o,i,p)=>p[p.length-(i+1)]),onResize:I.set},{instanceId:t(({row:o})=>[n(X,{"data-action":"",to:{name:"data-plane-subscription-summary-view",params:{subscription:o.id}}},{default:t(()=>[a(r(o.controlPlaneInstanceId),1)]),_:2},1032,["to"])]),version:t(({row:o})=>{var i,p;return[a(r(((p=(i=o.version)==null?void 0:i.kumaDp)==null?void 0:p.version)??"-"),1)]}),connected:t(({row:o})=>[a(r(l("common.formats.datetime",{value:Date.parse(o.connectTime??"")})),1)]),disconnected:t(({row:o})=>[o.disconnectTime?(d(),u(c,{key:0},[a(r(l("common.formats.datetime",{value:Date.parse(o.disconnectTime)})),1)],64)):C("",!0)]),responses:t(({row:o})=>{var i;return[(d(!0),u(c,null,k([((i=o.status)==null?void 0:i.total)??{}],p=>(d(),u(c,null,[a(r(p.responsesSent)+"/"+r(p.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"])]),_:2},1024)])):C("",!0)]),_:2},1024)]}),_:2},1024)]),_:2},1032,["src"])]),_:1})}}}),Xt=ft(wt,[["__scopeId","data-v-f147275d"]]);export{Xt as default};
