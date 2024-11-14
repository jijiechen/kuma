import{d as p,N as h,o as s,c as d,i as a,r as i,b as t,j as b,l,m as _,e as v,k as g,w as c,a as m,t as f,n as S,H as y,J as k}from"./index-CUmbT3FY.js";const $={class:"onboarding-heading"},w={class:"onboarding-title","data-testid":"onboarding-header"},x={key:0,class:"onboarding-description"},N=p({__name:"OnboardingHeading",setup(o){const e=h();return(n,u)=>(s(),d("div",$,[a("h1",w,[i(n.$slots,"title",{},void 0,!0)]),t(),b(e).description?(s(),d("div",x,[i(n.$slots,"description",{},void 0,!0)])):l("",!0)]))}}),j=_(N,[["__scopeId","data-v-505a1a6e"]]),B={class:"onboarding-actions"},I={class:"button-list"},q=p({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(o){const e=o;return(n,u)=>{const r=v("XAction");return s(),d("div",B,[e.previousStep?(s(),g(r,{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button"},{default:c(()=>[t(`
      Back
    `)]),_:1},8,["to"])):l("",!0),t(),a("div",I,[e.showSkip?(s(),g(r,{key:0,appearance:"tertiary","data-testid":"onboarding-skip-button",to:{name:"home"}},{default:c(()=>[t(`
        Skip setup
      `)]),_:1})):l("",!0),t(),m(r,{disabled:!e.shouldAllowNext,appearance:"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button"},{default:c(()=>[t(f(e.nextStepTitle),1)]),_:1},8,["disabled","to"])])])}}}),z=_(q,[["__scopeId","data-v-91497fd4"]]),O=o=>(y("data-v-cd1eae59"),o=o(),k(),o),C={class:"onboarding-container"},A={class:"onboarding-container__header"},V={class:"onboarding-container__inner-content"},H={class:"mt-4"},T=O(()=>a("div",{class:"background-image"},null,-1)),P=p({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(o){const e=o;return(n,u)=>(s(),d("div",null,[a("div",C,[a("div",A,[i(n.$slots,"header",{},void 0,!0)]),t(),a("div",{class:S(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[a("div",V,[i(n.$slots,"content",{},void 0,!0)])],2),t(),a("div",H,[i(n.$slots,"navigation",{},void 0,!0)])]),t(),T]))}}),D=_(P,[["__scopeId","data-v-cd1eae59"]]);export{D as O,j as a,z as b};