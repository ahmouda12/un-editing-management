import{k as p,H as m,l as f,m as o}from"./index-DPJiPkbh.js";import{i as u,C as l}from"./dom-BlTj4jtE.js";import{u as C,I as g}from"./interactive-CUuALpv0.js";import{a as b,s as I,c as S}from"./loadable-CXsmssm6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const y=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",E=y,n=p(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipGroupSelect=f(this,"calciteChipGroupSelect",6),this.items=[],this.updateItems=e=>{var s,i,a;const t=(s=this.slotRefEl)==null?void 0:s.assignedElements({flatten:!0}).filter(c=>c==null?void 0:c.matches("calcite-chip"));this.items=e?u(e):t,!(((i=this.items)==null?void 0:i.length)<1)&&((a=this.items)==null||a.forEach(c=>{c.interactive=!0,c.scale=this.scale,c.selectionMode=this.selectionMode,c.parentChipGroup=this.el}),this.setSelectedItems(!1))},this.updateSelectedItems=()=>{var e;this.selectedItems=(e=this.items)==null?void 0:e.filter(t=>t.selected)},this.setSelectedItems=(e,t)=>{var s;t&&((s=this.items)==null||s.forEach(i=>{const a=t===i;switch(this.selectionMode){case"multiple":a&&(i.selected=!i.selected);break;case"single":i.selected=a?!i.selected:!1;break;case"single-persist":i.selected=!!a;break}})),this.updateSelectedItems(),e&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}componentDidRender(){C(this)}componentDidLoad(){b(this)}async componentWillLoad(){I(this)}calciteInternalChipKeyEventListener(e){var t;if(e.composedPath().includes(this.el)){const s=(t=this.items)==null?void 0:t.filter(i=>!i.disabled);switch(e.detail.key){case"ArrowRight":l(s,e.detail.target,"next");break;case"ArrowLeft":l(s,e.detail.target,"previous");break;case"Home":l(s,e.detail.target,"first");break;case"End":l(s,e.detail.target,"last");break}}e.stopPropagation()}calciteChipCloseListener(e){var s,i,a,c;const t=e.target;(s=this.items)!=null&&s.includes(t)&&(((i=this.items)==null?void 0:i.indexOf(t))>0?l(this.items,t,"previous"):((a=this.items)==null?void 0:a.indexOf(t))===0?l(this.items,t,"next"):l(this.items,t,"first")),this.items=(c=this.items)==null?void 0:c.filter(h=>h!==t),e.stopPropagation()}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target),e.stopPropagation()}calciteInternalChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!1,e.target),e.stopPropagation()}calciteInternalSyncSelectedChips(e){e.composedPath().includes(this.el)&&(this.updateSelectedItems(),this.selectionMode==="single"&&this.selectedItems.length>1&&this.setSelectedItems(!1,e.target)),e.stopPropagation()}async setFocus(){var e;if(await S(this),!this.disabled)return(e=this.selectedItems[0]||this.items[0])==null?void 0:e.setFocus()}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup",{disabled:t}=this;return o(g,{key:"0db5548f1c2854898191b4d6eb8140cae2faf3d8",disabled:t},o("div",{key:"60fc92fea20478ee6fde23d807f17f7f472c1f5a","aria-label":this.label,class:"container",role:e},o("slot",{key:"d43fcf04af0063cd4d00f46e6dd61347eafccb3b",onSlotchange:this.updateItems,ref:s=>this.slotRefEl=s})))}get el(){return this}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}static get style(){return E}},[1,"calcite-chip-group",{disabled:[516],label:[1],scale:[513],selectionMode:[513,"selection-mode"],selectedItems:[1040],setFocus:[64]},[[0,"calciteInternalChipKeyEvent","calciteInternalChipKeyEventListener"],[0,"calciteChipClose","calciteChipCloseListener"],[0,"calciteChipSelect","calciteChipSelectListener"],[0,"calciteInternalChipSelect","calciteInternalChipSelectListener"],[0,"calciteInternalSyncSelectedChips","calciteInternalSyncSelectedChips"]],{selectionMode:["onSelectionModeChange"]}]);function d(){if(typeof customElements>"u")return;["calcite-chip-group"].forEach(e=>{switch(e){case"calcite-chip-group":customElements.get(e)||customElements.define(e,n);break}})}d();const G=n,P=d;export{G as CalciteChipGroup,P as defineCustomElement};
