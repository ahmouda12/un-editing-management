import{A as c}from"./dom-BlTj4jtE.js";import{N as r}from"./index-DPJiPkbh.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const a="CALCITE-COMBOBOX-ITEM",u="CALCITE-COMBOBOX-ITEM-GROUP",s=`${a}, ${u}`,b={input:"input",inputHidden:"input--hidden",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon",placeholderIcon:"placeholder-icon",selectedIcon:"selected-icon"},p={validationMessage:"comboboxValidationMessage"};function C(e){var o,i;const t=(o=e.parentElement)==null?void 0:o.closest(s),n=(i=t==null?void 0:t.parentElement)==null?void 0:i.closest(s);return[t,n].filter(l=>l)}function g(e){var t;return((t=e.ancestors)==null?void 0:t.filter(n=>n.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function h(e){return c(e.querySelectorAll("calcite-combobox-item"))}function f(e){return c(e.querySelectorAll("calcite-combobox-item")).filter(n=>n.selected).length>0}function I(e){return r()?document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}function O(e){return e.includes("single")}function E(e){return e.shortHeading||e.textLabel}export{b as C,p as I,s as a,g as b,h as c,a as d,u as e,C as f,E as g,f as h,O as i,I as j};
