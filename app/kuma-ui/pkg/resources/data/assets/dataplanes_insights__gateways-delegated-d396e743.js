const n=1,e=[{type:"DataplaneOverview",mesh:"default",name:"alarm-gateway-0",creationTime:"2021-02-17T08:33:36.442044+01:00",modificationTime:"2021-02-17T08:33:36.442044+01:00",dataplane:{networking:{address:"229.220.224.147",gateway:{tags:{"kuma.io/service":"alarm-gateway-0"},type:"DELEGATED"},inbound:[{port:11178,servicePort:20537,serviceAddress:"120.233.146.171",tags:{"kuma.io/protocol":"tcp","kuma.io/service":"alarm-service-0"}}],outbound:[{port:31080,tags:{"kuma.io/service":"bus-0"}}]}},dataplaneInsight:{subscriptions:[{id:"118b4d6f-7a98-4172-96d9-85ffb8b20b16",controlPlaneInstanceId:"foo",connectTime:"2021-02-17T07:33:36.412683Z",disconnectTime:"2021-02-17T07:33:36.412683Z",status:{lastUpdateTime:"2021-02-17T10:48:03.638434Z",total:{responsesSent:"5",responsesAcknowledged:"5"},cds:{responsesSent:"1",responsesAcknowledged:"1"},eds:{responsesSent:"2",responsesAcknowledged:"2"},lds:{responsesSent:"2",responsesAcknowledged:"2"},rds:{}},version:{kumaDp:{version:"1.0.7",gitTag:"unknown",gitCommit:"unknown",buildDate:"unknown"},envoy:{version:"1.16.2",build:"e98e41a8e168af7acae8079fc0cd68155f699aa3/1.16.2/Modified/DEBUG/BoringSSL"},dependencies:{coredns:"1.8.3"}}},{id:"118b4d6f-7a98-4172-96d9-85ffb8b20b16",controlPlaneInstanceId:"foo",connectTime:"2021-02-17T07:33:36.412683Z",status:{lastUpdateTime:"2021-02-17T10:48:03.638434Z",total:{responsesSent:"5",responsesAcknowledged:"5"},cds:{responsesSent:"1",responsesAcknowledged:"1"},eds:{responsesSent:"2",responsesAcknowledged:"2"},lds:{responsesSent:"2",responsesAcknowledged:"2"},rds:{}},version:{kumaDp:{version:"1.0.7",gitTag:"unknown",gitCommit:"unknown",buildDate:"unknown",kumaCpCompatible:!0},envoy:{version:"1.16.2",build:"e98e41a8e168af7acae8079fc0cd68155f699aa3/1.16.2/Modified/DEBUG/BoringSSL",kumaDpCompatible:!0},dependencies:{coredns:"1.8.3"}}}]}}],s="http://localhost:5681/meshes/default/dataplanes+insights?offset=24&size=24",o={total:1,items:e,next:s};export{o as default,e as items,s as next,n as total};