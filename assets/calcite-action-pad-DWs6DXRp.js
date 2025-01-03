import{k as b,H as y,l as v,m as a,q as C}from"./index-DPJiPkbh.js";import{c as E,d as w}from"./conditionalSlot-CaMpRMew.js";import{i as s}from"./dom-BlTj4jtE.js";import{s as L,a as k,c as A}from"./loadable-CXsmssm6.js";import{c as S,d as T}from"./locale-CS3btv4w.js";import{u as G,c as O,d as P,s as M}from"./t9n-CeKm3gqL.js";import{t as c,E as H}from"./ExpandToggle-CelG3GDO.js";import{c as z}from"./observers-DXQDxHJZ.js";import{d as D}from"./action-ED8yfrZZ.js";import{d as $}from"./action-group-BH9aWKDL.js";import{d as q}from"./action-menu-9mv6r4cU.js";import{d as F}from"./icon-DwdUDmXD.js";import{d as _}from"./loader-DPaOyEdE.js";import{d as B}from"./popover-hxIdq1Do.js";import"./key-D63ExP77.js";import"./interactive-CUuALpv0.js";import"./component-6CIDVndn.js";import"./array-BMcQdnYi.js";import"./floating-ui-BH2WIGVi.js";import"./debounce-BOqmhDXu.js";import"./focusTrapComponent-DEcdEJmJ.js";import"./openCloseComponent-C5H0O9Vb.js";import"./Heading-DKEJi13z.js";import"./FloatingArrow-BZmTlXcv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const l={actionGroupEnd:"action-group--end",container:"container"},U={expandTooltip:"expand-tooltip"},j=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, 0.125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, 0.125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}",W=j,r=b(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=v(this,"calciteActionPadToggle",6),this.mutationObserver=z("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const o=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(t=>{o.includes(t)||(t.menuOpen=!1)})}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.handleDefaultSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-action-group"));this.setGroupLayout(o)},this.handleTooltipSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-tooltip"));this.expandTooltip=o[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){c({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){G(this,this.effectiveLocale)}connectedCallback(){var e;E(this),S(this),O(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){var e;T(this),P(this),w(this),(e=this.mutationObserver)==null||e.disconnect()}async componentWillLoad(){L(this);const{el:e,expanded:o}=this;c({el:e,expanded:o}),await M(this)}componentDidLoad(){k(this)}async setFocus(){var e;await A(this),(e=this.el)==null||e.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(o=>o.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:o,messages:t,el:u,position:h,toggleExpand:m,scale:i,layout:f,actionsEndGroupLabel:g,overlayPositioning:x}=this,n=o?null:a(H,{collapseLabel:t.collapseLabel,collapseText:t.collapse,el:u,expandLabel:t.expandLabel,expandText:t.expand,expanded:e,position:h,scale:i,toggle:m,tooltip:this.expandTooltip});return n?a("calcite-action-group",{class:l.actionGroupEnd,label:g,layout:f,overlayPositioning:x,scale:i},a("slot",{name:U.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),n):null}render(){return a(C,{key:"ca50c5f475d78b92b5347ab912727587420ceea5",onCalciteActionMenuOpen:this.actionMenuOpenHandler},a("div",{key:"81b26e9b6bd0a04357fe00ef55111c6bb609f4e7",class:l.container},a("slot",{key:"e346dc6cfab0e26cfc694b43063715d7b845ae32",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return W}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){if(typeof customElements>"u")return;["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,r);break;case"calcite-action":customElements.get(e)||D();break;case"calcite-action-group":customElements.get(e)||$();break;case"calcite-action-menu":customElements.get(e)||q();break;case"calcite-icon":customElements.get(e)||F();break;case"calcite-loader":customElements.get(e)||_();break;case"calcite-popover":customElements.get(e)||B();break}})}d();const fe=r,ge=d;export{fe as CalciteActionPad,ge as defineCustomElement};
