import{d as v,a5 as m,l as i,c as y,o as c,e as l,i as A,C as s,g as h,h as b,w as x,f as O,T as g,n as I,a6 as L}from"./index-9a3d231d.js";import{f as p}from"./RouteView.vue_vue_type_script_setup_true_lang-da83f5a8.js";const C=["aria-expanded"],$={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},B=v({__name:"AccordionItem",setup(r){const e=m("parentAccordion"),t=i(null),n=y(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.includes(t.value):t.value===e.active.value);e!==void 0&&(t.value=e.count.value++);function o(){n.value?u():_()}function u(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.splice(e.active.value.indexOf(t.value),1):e.active.value=null)}function _(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.push(t.value):e.active.value=t.value)}function d(a){a instanceof HTMLElement&&(a.style.height=`${a.scrollHeight}px`)}function f(a){a instanceof HTMLElement&&(a.style.height="auto")}return(a,T)=>(c(),l("li",{class:I(["accordion-item",{active:n.value}])},[A("button",{class:"accordion-item-header",type:"button","aria-expanded":n.value?"true":"false","data-testid":"accordion-item-button",onClick:o},[s(a.$slots,"accordion-header",{},void 0,!0)],8,C),h(),b(g,{name:"accordion",onEnter:d,onAfterEnter:f,onBeforeLeave:d},{default:x(()=>[n.value?(c(),l("div",$,[s(a.$slots,"accordion-content",{},void 0,!0)])):O("",!0)]),_:3})],2))}});const w=p(B,[["__scopeId","data-v-53a0b6ce"]]),E={class:"accordion-list"},N=v({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(r){const e=r,t=i(0),n=i(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return L("parentAccordion",{multipleOpen:e.multipleOpen,active:n,count:t}),(o,u)=>(c(),l("ul",E,[s(o.$slots,"default",{},void 0,!0)]))}});const H=p(N,[["__scopeId","data-v-bdbadd5e"]]);export{w as A,H as a};