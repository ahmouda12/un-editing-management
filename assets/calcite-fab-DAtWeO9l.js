import{k as f,H as w,m as a}from"./index-DPJiPkbh.js";import{b as x}from"./dom-BlTj4jtE.js";import{u as v,I as E}from"./interactive-CUuALpv0.js";import{s as g,a as y,c as C}from"./loadable-CXsmssm6.js";import{d as k}from"./button-DXjKuKtV.js";import{d as F}from"./icon-DwdUDmXD.js";import{d as S}from"./loader-DPaOyEdE.js";import"./form-B4OwUu51.js";import"./label-C1Y8426B.js";import"./component-6CIDVndn.js";import"./locale-CS3btv4w.js";import"./key-D63ExP77.js";import"./observers-DXQDxHJZ.js";import"./t9n-CeKm3gqL.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R={button:"button"},I={plus:"plus"},L=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:var(--calcite-shadow-md);--tw-shadow-colored:var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}",_=L,s=f(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.appearance="solid",this.kind="brand",this.disabled=!1,this.icon=I.plus,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1}componentWillLoad(){g(this)}componentDidLoad(){y(this)}componentDidRender(){v(this)}async setFocus(){await C(this),x(this.buttonEl)}render(){const{appearance:t,kind:l,disabled:e,loading:d,scale:c,textEnabled:r,icon:p,label:o,text:b,iconFlipRtl:h}=this,u=r?null:o||b||null;return a(E,{key:"7953bd06defeddfed5530500901609524f7b58fd",disabled:e},a("calcite-button",{key:"c2bbe2be5e2ac375abab75024005f1eb5afed51c",appearance:t==="solid"?"solid":"outline-fill",class:R.button,disabled:e,iconFlipRtl:h?"start":null,iconStart:p,kind:l,label:o,loading:d,ref:m=>{this.buttonEl=m},round:!0,scale:c,title:u,type:"button",width:"auto"},this.textEnabled?this.text:null))}get el(){return this}static get style(){return _}},[1,"calcite-fab",{appearance:[513],kind:[513],disabled:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],setFocus:[64]}]);function i(){if(typeof customElements>"u")return;["calcite-fab","calcite-button","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-fab":customElements.get(t)||customElements.define(t,s);break;case"calcite-button":customElements.get(t)||k();break;case"calcite-icon":customElements.get(t)||F();break;case"calcite-loader":customElements.get(t)||S();break}})}i();const P=s,Q=i;export{P as CalciteFab,Q as defineCustomElement};
