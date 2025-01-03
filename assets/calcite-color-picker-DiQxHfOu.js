import{k as Q,H as ee,l as K,m as c}from"./index-DPJiPkbh.js";import{a as g,i as H,b as B,c as w,r as we,n as f,o as E,h as m,O as y,e as I,f as Ie,g as U,j as A,R as D,H as C,k as r,D as L,l as v,m as N,p as ke,q as W,s as Ae,t as _,u as De,v as X,w as G,x as Ee,S as q,d as Fe}from"./color-picker-swatch-BkB_fL5b.js";import{b as Te,u as Y,g as Oe,f as Pe}from"./dom-BlTj4jtE.js";import{u as He,I as Le}from"./interactive-CUuALpv0.js";import{i as Re}from"./key-D63ExP77.js";import{s as te,a as ne,c as ie}from"./loadable-CXsmssm6.js";import{c as Ke,d as Me}from"./locale-CS3btv4w.js";import{r as J,c as $e,a as ze}from"./math-CPc4dlb6.js";import{u as Ve,s as je,c as Be,d as Ue}from"./t9n-CeKm3gqL.js";import{d as Ne}from"./button-DXjKuKtV.js";import{d as ae}from"./icon-DwdUDmXD.js";import{d as oe}from"./input-message-C-NSbwGv.js";import{d as se}from"./input-number-zZZ77A1g.js";import{d as le}from"./input-text-1c2jBPEG.js";import{d as re}from"./progress-BrWM7Ubw.js";import{d as We}from"./loader-DPaOyEdE.js";import{d as _e}from"./tab-DHna9YI4.js";import{d as Xe}from"./tab-nav-Kf6UKSG0.js";import{d as Ge}from"./tab-title-CCodsMRG.js";import{d as qe}from"./tabs-DH5FHhBT.js";import{t as Ye}from"./throttle-MmodMsuz.js";import"./observers-DXQDxHJZ.js";import"./form-B4OwUu51.js";import"./label-C1Y8426B.js";import"./component-6CIDVndn.js";import"./Validation-nOlLLBIC.js";import"./input-j1u1wOBY.js";import"./core-Cpfj44ZG.js";import"./debounce-BOqmhDXu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R={container:"container",hexInput:"hex-input",opacityInput:"opacity-input"},Je=":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}",Ze=Je,Z=g(),Qe=Q(class extends ee{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=K(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,n=`#${t}`,{allowEmpty:i,internalColor:a}=this,o=i&&!t,s=H(n);B(n,this.alphaChannel)&&this.onHexInputChange(),!(o||w(n)&&s)&&(e.value=i&&!a?"":this.formatHexForInternalInput(we(a.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:n,internalColor:i}=this;n&&!t||(e.value=n&&!i?"":this.formatOpacityForInternalInput(i))},this.onOpacityInputInput=()=>{this.onOpacityInputChange()},this.onHexInputChange=()=>{let t=this.hexInputNode.value;if(t){const n=f(t,!1);if(w(n)&&this.alphaChannel&&this.internalColor){const a=f(this.internalColor.hexa(),!0).slice(-2);t=`${n+a}`}}this.internalSetValue(t,this.value)},this.onOpacityInputChange=()=>{var n;const e=this.opacityInputNode;let t;if(!e.value)t=e.value;else{const i=E(Number(e.value));t=(n=this.internalColor)==null?void 0:n.alpha(i).hexa()}this.internalSetValue(t,this.value)},this.onInputFocus=e=>{e.type==="calciteInternalInputTextFocus"?this.hexInputNode.selectText():this.opacityInputNode.selectText()},this.onHexInputInput=()=>{const e=`#${this.hexInputNode.value}`,t=this.value;w(e,this.alphaChannel)&&H(e,this.alphaChannel)&&this.internalSetValue(e,t)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:n,metaKey:i,shiftKey:a}=e,{alphaChannel:o,hexInputNode:s,internalColor:l,value:h}=this,{key:d}=e,u=e.composedPath();if(d==="Tab"&&B(h,this.alphaChannel)||d==="Enter"){u.includes(s)?this.onHexInputChange():this.onOpacityInputChange(),d==="Enter"&&e.preventDefault();return}const p=d==="ArrowDown"||d==="ArrowUp",b=this.value;if(p){if(!h){this.internalSetValue(this.previousNonNullValue,b),e.preventDefault();return}const O=d==="ArrowUp"?1:-1,k=a?10:1;this.internalSetValue(m(this.nudgeRGBChannels(l,k*O,u.includes(s)?"rgb":"a"),o),b),e.preventDefault();return}const S=t||n||i,T=d.length===1,x=Ie.test(d);T&&!S&&!x&&e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");w(t,this.alphaChannel)&&H(t,this.alphaChannel)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1),this.internalSetValue(t,this.value))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=f(m(Z,this.alphaChannel),this.alphaChannel,!0),this.internalColor=Z}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:n}=this;if(n){const i=f(n,t);w(i,t)&&this.internalSetValue(i,i,!1);return}e&&this.internalSetValue(null,null,!1)}componentWillLoad(){te(this)}componentDidLoad(){ne(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:n,messages:i,scale:a,value:o}=this,s=this.formatHexForInternalInput(o),l=this.formatOpacityForInternalInput(n),h=a==="l"?"m":"s";return c("div",{key:"70f804fdbc3c29fdf49616f56c39593fdc3717da",class:R.container},c("calcite-input-text",{key:"777d1f8ffa673a0d74f049d4a6bdacbf3510006a",class:R.hexInput,label:(i==null?void 0:i.hex)||t,maxLength:this.alphaChannel?8:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInputTextInput:this.onHexInputInput,onCalciteInternalInputTextBlur:this.onHexInputBlur,onCalciteInternalInputTextFocus:this.onInputFocus,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",ref:this.storeHexInputRef,scale:h,value:s}),e?c("calcite-input-number",{class:R.opacityInput,key:"opacity-input",label:i==null?void 0:i.opacity,max:y.max,maxLength:3,min:y.min,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberInput:this.onOpacityInputInput,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onCalciteInternalInputNumberFocus:this.onInputFocus,onKeyDown:this.onInputKeyDown,ref:this.storeOpacityInputRef,scale:h,suffixText:"%",value:l}):null)}async setFocus(){return await ie(this),Te(this.hexInputNode)}internalSetValue(e,t,n=!0){if(e){const{alphaChannel:i}=this,a=f(e,i,i);if(w(a,i)){const{internalColor:o}=this,s=g(a),l=f(m(s,i),i),h=!o||l!==f(m(o,i),i);this.internalColor=s,this.previousNonNullValue=l,this.value=l,h&&n&&this.calciteColorPickerHexInputChange.emit();return}}else if(this.allowEmpty){this.internalColor=null,this.value=null,n&&this.calciteColorPickerHexInputChange.emit();return}this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?`${I(e.alpha())}`:""}nudgeRGBChannels(e,t,n){let i;const a=e.array(),o=a.slice(0,3);if(n==="rgb")i=[...o.map(l=>l+t),this.alphaChannel?a[3]:void 0];else{const s=E(I(e.alpha())+t);i=[...o,s]}return g(i)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return Ze}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},void 0,{value:["handleValueChange"]}]);function ce(){if(typeof customElements>"u")return;["calcite-color-picker-hex-input","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-progress"].forEach(e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,Qe);break;case"calcite-icon":customElements.get(e)||ae();break;case"calcite-input-message":customElements.get(e)||oe();break;case"calcite-input-number":customElements.get(e)||se();break;case"calcite-input-text":customElements.get(e)||le();break;case"calcite-progress":customElements.get(e)||re();break}})}ce();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const et=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.color-field,.control-and-scope{-webkit-user-select:none;user-select:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:6px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`,tt=et,nt=16,he=Q(class extends ee{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerChange=K(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=K(this,"calciteColorPickerInput",6),this.internalColorUpdateContext=null,this.isActiveChannelInputEmpty=!1,this.mode=U.HEX,this.shiftKeyChannelAdjustment=0,this.upOrDownArrowKeyTracker=null,this.handleTabActivate=e=>{this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=e=>{const{key:t}=e,n={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};n[t]&&(e.preventDefault(),this.scopeOrientation=t==="ArrowDown"||t==="ArrowUp"?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+n[t].x||0,this.colorFieldScopeTop+n[t].y||0,!1))},this.handleHueScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:n}=e,i={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(i[n]){e.preventDefault();const a=i[n]*t,o=this.baseColorFieldColor.hue(),s=this.baseColorFieldColor.hue(o+a);this.internalColorSet(s,!1)}},this.handleHexInputChange=e=>{e.stopPropagation();const{isClearable:t,color:n}=this,a=e.target.value;if(t&&!a){this.internalColorSet(null);return}const o=n&&f(m(n,A(this.mode)));a!==o&&this.internalColorSet(g(a))},this.handleSavedColorSelect=e=>{const t=e.currentTarget;this.internalColorSet(g(t.color))},this.handleChannelInput=e=>{const t=e.currentTarget,n=Number(t.getAttribute("data-channel-index")),a=n===3?y.max:this.channelMode==="rgb"?D[Object.keys(D)[n]]:C[Object.keys(C)[n]];let o;if(!t.value)o="",this.isActiveChannelInputEmpty=!0,this.upOrDownArrowKeyTracker=null;else{const l=Number(t.value)+this.shiftKeyChannelAdjustment;o=$e(l,0,a).toString()}t.value=o,o!==""&&this.shiftKeyChannelAdjustment!==0?this.handleChannelChange(e):o!==""&&this.handleChannelChange(e)},this.handleChannelBlur=e=>{var o;const t=e.currentTarget,n=Number(t.getAttribute("data-channel-index")),i=[...this.channels];!t.value&&!this.isClearable&&(t.value=(o=i[n])==null?void 0:o.toString())},this.handleChannelFocus=e=>{e.currentTarget.selectText()},this.handleChannelChange=e=>{const t=e.currentTarget,n=Number(t.getAttribute("data-channel-index")),i=[...this.channels];if(this.isClearable&&!t.value){this.channels=[null,null,null,null],this.internalColorSet(null);return}const o=n===3;this.isActiveChannelInputEmpty&&this.upOrDownArrowKeyTracker&&(t.value=this.upOrDownArrowKeyTracker==="up"?(i[n]+1<=this.getChannelInputLimit(n)?i[n]+1:this.getChannelInputLimit(n)).toString():(i[n]-1>=0?i[n]-1:0).toString(),this.isActiveChannelInputEmpty=!1,this.upOrDownArrowKeyTracker=null);const s=t.value?Number(t.value):i[n];i[n]=o?E(s):s,this.updateColorFromChannels(i)},this.handleSavedColorKeyDown=e=>{Re(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))},this.handleColorFieldPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.colorFieldRenderingContext,this.captureColorFieldColor,this.colorFieldScopeNode)},this.handleHueSliderPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.hueSliderRenderingContext,this.captureHueSliderColor,this.hueScopeNode)},this.handleOpacitySliderPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.opacitySliderRenderingContext,this.captureOpacitySliderValue,this.opacityScopeNode)},this.globalPointerUpHandler=e=>{if(!Y(e))return;const t=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),t&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:t,el:n}=this;if(!n.isConnected||!t)return;const{context:i,bounds:a}=t;let o,s;const{clientX:l,clientY:h}=e;i.canvas.matches(":hover")?(o=l-a.x,s=h-a.y):(l<a.x+a.width&&l>a.x?o=l-a.x:l<a.x?o=0:o=a.width,h<a.y+a.height&&h>a.y?s=h-a.y:h<a.y?s=0:s=a.height),i===this.colorFieldRenderingContext?this.captureColorFieldColor(o,s,!1):i===this.hueSliderRenderingContext?this.captureHueSliderColor(o):i===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(o)},this.storeColorFieldScope=e=>{this.colorFieldScopeNode=e},this.storeHueScope=e=>{this.hueScopeNode=e},this.renderChannelsTabTitle=e=>{const{channelMode:t,messages:n}=this,i=e===t,a=e==="rgb"?n.rgb:n.hsv;return c("calcite-tab-title",{class:r.colorMode,"data-color-mode":e,key:e,onCalciteTabsActivate:this.handleTabActivate,selected:i},a)},this.renderChannelsTab=e=>{const{isClearable:t,channelMode:n,channels:i,messages:a,alphaChannel:o}=this,s=e===n,h=e==="rgb"?[a.red,a.green,a.blue]:[a.hue,a.saturation,a.value],d=Oe(this.el),u=o?i:i.slice(0,3);return c("calcite-tab",{class:r.control,key:e,selected:s},c("div",{class:r.channels,dir:"ltr"},u.map((p,b)=>{const S=b===3;return S&&(p=t&&!p?p:I(p)),this.renderChannel(p,b,h[b],d,S?"%":"")})))},this.renderChannel=(e,t,n,i,a)=>c("calcite-input-number",{class:r.channel,"data-channel-index":t,dir:i,key:t,label:n,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onCalciteInternalInputNumberBlur:this.handleChannelBlur,onCalciteInternalInputNumberFocus:this.handleChannelFocus,onKeyDown:this.handleKeyDown,scale:this.scale==="l"?"m":"s",style:{marginLeft:t>0&&!(this.scale==="s"&&this.alphaChannel&&t===3)?"-1px":""},suffixText:a,value:e==null?void 0:e.toString()}),this.deleteColor=()=>{const e=m(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const n=this.savedColors.filter(a=>a!==e);this.savedColors=n;const i=`${L}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(n))},this.saveColor=()=>{const e=m(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const n=[...this.savedColors,e];this.savedColors=n;const i=`${L}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(n))},this.drawColorControls=Ye((e="all")=>{(e==="all"||e==="color-field")&&this.colorFieldRenderingContext&&this.drawColorField(),(e==="all"||e==="hue-slider")&&this.hueSliderRenderingContext&&this.drawHueSlider(),this.alphaChannel&&(e==="all"||e==="opacity-slider")&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()},nt),this.captureColorFieldColor=(e,t,n=!0)=>{const{dimensions:{colorField:{height:i,width:a}}}=this,o=Math.round(C.s/a*e),s=Math.round(C.v/i*(i-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(o).value(s),n)},this.initColorField=e=>{this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls()},this.initHueSlider=e=>{this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider()},this.initOpacitySlider=e=>{e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())},this.storeOpacityScope=e=>{this.opacityScopeNode=e},this.handleOpacityScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:n}=e,i={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(i[n]){e.preventDefault();const a=i[n]*t,o=this.baseColorFieldColor.alpha(),s=this.baseColorFieldColor.alpha(o+a);this.internalColorSet(s,!1)}},this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.clearable=!1,this.color=v,this.disabled=!1,this.format="auto",this.hideChannels=!1,this.hexDisabled=!1,this.hideHex=!1,this.hideSaved=!1,this.savedDisabled=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=f(m(v,this.alphaChannel)),this.channelMode="rgb",this.channels=this.toChannels(v),this.defaultMessages=void 0,this.dimensions=N.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.hueScopeLeft=void 0,this.opacityScopeLeft=void 0,this.scopeOrientation=void 0}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(e){const{format:t}=this;e&&t!=="auto"&&!A(t)&&(console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`),this.alphaChannel=!1)}handleAlphaChannelDimensionsChange(){this.effectiveSliderWidth=ke(this.dimensions,this.alphaChannel),this.drawColorControls()}handleColorChange(e,t){this.drawColorControls(),this.updateChannelsFromColor(e),this.previousColor=t}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(e="m"){this.updateDimensions(e),this.updateCanvasSize("all"),this.drawColorControls()}onMessagesChange(){}handleValueChange(e,t){const{isClearable:n,format:i}=this,a=!n||e;let o=!1;if(a){const d=W(e);if(!d||i!=="auto"&&d!==i){this.showIncompatibleColorWarning(e,i),this.value=t;return}o=this.mode!==d,this.setMode(d,this.internalColorUpdateContext===null)}const s=this.activeCanvasInfo;if(this.internalColorUpdateContext==="initial")return;if(this.internalColorUpdateContext==="user-interaction"){this.calciteColorPickerInput.emit(),s||this.calciteColorPickerChange.emit();return}const l=n&&!e?null:g(e!=null&&typeof e=="object"&&A(this.mode)?Ae(e):e),h=!_(l,this.color);(o||h)&&this.internalColorSet(l,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}get baseColorFieldColor(){return this.color||this.previousColor||v}effectiveLocaleChange(){Ve(this,this.effectiveLocale)}handleChannelKeyUpOrDown(e){this.shiftKeyChannelAdjustment=0;const{key:t}=e;if(t!=="ArrowUp"&&t!=="ArrowDown"||!e.composedPath().some(a=>{var o;return(o=a.classList)==null?void 0:o.contains(r.channel)}))return;const{shiftKey:n}=e;if(e.preventDefault(),!this.color){this.internalColorSet(this.previousColor),e.stopPropagation();return}const i=9;this.shiftKeyChannelAdjustment=t==="ArrowUp"&&n?i:t==="ArrowDown"&&n?-i:0,t==="ArrowUp"&&(this.upOrDownArrowKeyTracker="up"),t==="ArrowDown"&&(this.upOrDownArrowKeyTracker="down")}getChannelInputLimit(e){return this.channelMode==="rgb"?D[Object.keys(D)[e]]:C[Object.keys(C)[e]]}focusScope(e){requestAnimationFrame(()=>{e.focus()})}handleCanvasControlPointerDown(e,t,n,i){Y(e)&&(window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:t,bounds:t.canvas.getBoundingClientRect()},n.call(this,e.offsetX,e.offsetY),this.focusScope(i))}async setFocus(){await ie(this),Pe(this.el)}async componentWillLoad(){te(this),this.handleAllowEmptyOrClearableChange(),this.handleAlphaChannelDimensionsChange();const{isClearable:e,color:t,format:n,value:i}=this,a=e&&!i,o=W(i),s=a||n==="auto"&&o||n===o,l=a?null:s?g(i):t;s||this.showIncompatibleColorWarning(i,n),this.setMode(n,!1),this.internalColorSet(l,!1,"initial"),this.updateDimensions(this.scale);const h=`${L}${this.storageId}`;this.storageId&&localStorage.getItem(h)&&(this.savedColors=JSON.parse(localStorage.getItem(h))),await je(this)}connectedCallback(){Ke(this),Be(this)}componentDidLoad(){ne(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),Me(this),Ue(this)}componentDidRender(){He(this)}render(){const{channelsDisabled:e,color:t,colorFieldScopeLeft:n,colorFieldScopeTop:i,dimensions:{thumb:{radius:a}},hexDisabled:o,hideChannels:s,hideHex:l,hideSaved:h,hueScopeLeft:d,messages:u,alphaChannel:p,opacityScopeLeft:b,savedColors:S,savedDisabled:T,scale:x,scopeOrientation:O}=this,k=this.effectiveSliderWidth,M=t?m(t,p):null,ue=a,pe=d??k*v.hue()/C.h,Ce=a,fe=b??k*I(v.alpha())/y.max,$=t===null,P=O==="vertical",z=o||l,V=e||s,me=T||h,[ge,be]=this.getAdjustedScopePosition(n,i),[ve,ye]=this.getAdjustedScopePosition(pe,ue),[Se,xe]=this.getAdjustedScopePosition(fe,Ce);return c(Le,{key:"c4837ef7cbe25b5fc3f0c72fe82d0090c6e0cdb5",disabled:this.disabled},c("div",{key:"28230570482ee9d33df9518e3cca534e3fac44ac",class:r.container},c("div",{key:"83172bc55f13955f5b69b59300e68642d59999af",class:r.controlAndScope},c("canvas",{key:"c20db7054ab5ebdb1e13ba295ac463609c44de47",class:r.colorField,onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),c("div",{key:"1e44beb121ed5a2247a6d69bf42c49a7f1ce5829","aria-label":P?u.value:u.saturation,"aria-valuemax":P?C.v:C.s,"aria-valuemin":"0","aria-valuenow":(P?t==null?void 0:t.saturationv():t==null?void 0:t.value())||"0",class:{[r.scope]:!0,[r.colorFieldScope]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${be||0}px`,left:`${ge||0}px`},tabindex:"0"})),c("div",{key:"5b873f4e7266cc654086f59c8483d3b4a65c8e8f",class:r.previewAndSliders},c("calcite-color-picker-swatch",{key:"db7c903a933ed061cc2edcd766fde70a8b670f00",class:r.preview,color:M,scale:this.alphaChannel?"l":this.scale}),c("div",{key:"33ea2354cbcfaa6677e82713bd8f02d1b83a9c26",class:r.sliders},c("div",{key:"28493b4bd177b8c97583cabeb5716a7cb7202e76",class:r.controlAndScope},c("canvas",{key:"d0a9ce7fb098b7434cd62f68b6b6092efcef3dc4",class:{[r.slider]:!0,[r.hueSlider]:!0},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),c("div",{key:"2356120385aabf09384f0077dffb7881c55c5ea9","aria-label":u.hue,"aria-valuemax":C.h,"aria-valuemin":"0","aria-valuenow":(t==null?void 0:t.round().hue())||v.round().hue(),class:{[r.scope]:!0,[r.hueScope]:!0},onKeyDown:this.handleHueScopeKeyDown,ref:this.storeHueScope,role:"slider",style:{top:`${ye}px`,left:`${ve}px`},tabindex:"0"})),p?c("div",{class:r.controlAndScope},c("canvas",{class:{[r.slider]:!0,[r.opacitySlider]:!0},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),c("div",{"aria-label":u.opacity,"aria-valuemax":y.max,"aria-valuemin":y.min,"aria-valuenow":(t||v).round().alpha(),class:{[r.scope]:!0,[r.opacityScope]:!0},onKeyDown:this.handleOpacityScopeKeyDown,ref:this.storeOpacityScope,role:"slider",style:{top:`${xe}px`,left:`${Se}px`},tabindex:"0"})):null)),z&&V?null:c("div",{class:{[r.controlSection]:!0,[r.section]:!0}},c("div",{class:r.hexAndChannelsGroup},z?null:c("div",{class:r.hexOptions},c("calcite-color-picker-hex-input",{allowEmpty:this.isClearable,alphaChannel:p,class:r.control,messages:u,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:x,value:M})),V?null:c("calcite-tabs",{class:{[r.colorModeContainer]:!0,[r.splitSection]:!0},scale:x==="l"?"m":"s"},c("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),me?null:c("div",{class:{[r.savedColorsSection]:!0,[r.section]:!0}},c("div",{class:r.header},c("label",null,u.saved),c("div",{class:r.savedColorsButtons},c("calcite-button",{appearance:"transparent",class:r.deleteColor,disabled:$,iconStart:"minus",kind:"neutral",label:u.deleteColor,onClick:this.deleteColor,scale:x,type:"button"}),c("calcite-button",{appearance:"transparent",class:r.saveColor,disabled:$,iconStart:"plus",kind:"neutral",label:u.saveColor,onClick:this.saveColor,scale:x,type:"button"}))),S.length>0?c("div",{class:r.savedColors},[...S.map(j=>c("calcite-color-picker-swatch",{class:r.savedColor,color:j,key:j,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:x,tabIndex:0}))]):null)))}handleKeyDown(e){e.key==="Enter"&&e.preventDefault()}showIncompatibleColorWarning(e,t){console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`)}setMode(e,t=!0){const n=e==="auto"?this.mode:e;this.mode=this.ensureCompatibleMode(n,t)}ensureCompatibleMode(e,t){const{alphaChannel:n}=this,i=A(e);if(n&&!i){const a=De(e);return t&&console.warn(`setting format to (${a}) as the provided one (${e}) does not support alpha`),a}if(!n&&i){const a=X(e);return t&&console.warn(`setting format to (${a}) as the provided one (${e}) does not support alpha`),a}return e}captureHueSliderColor(e){const t=G/this.effectiveSliderWidth*e;this.internalColorSet(this.baseColorFieldColor.hue(t),!1)}captureOpacitySliderValue(e){const t=E(y.max/this.effectiveSliderWidth*e);this.internalColorSet(this.baseColorFieldColor.alpha(t),!1)}internalColorSet(e,t=!0,n="user-interaction"){t&&_(e,this.color)||(this.internalColorUpdateContext=n,this.color=e,this.value=this.toValue(e),this.internalColorUpdateContext=null)}toValue(e,t=this.mode){if(!e)return null;if(t.includes("hex")){const a=t===U.HEXA;return f(m(e.round(),a),a)}if(t.includes("-css")){const a=e[t.replace("-css","").replace("a","")]().round().string();if((t.endsWith("a")||t.endsWith("a-css"))&&e.alpha()===1){const s=a.slice(0,3),l=a.slice(4,-1);return`${s}a(${l}, ${e.alpha()})`}return a}const i=e[X(t)]().round().object();return t.endsWith("a")?Ee(i):i}getSliderCapSpacing(){const{dimensions:{slider:{height:e},thumb:{radius:t}}}=this;return t*2-e}updateDimensions(e="m"){this.dimensions=N[e]}drawColorField(){const e=this.colorFieldRenderingContext,{dimensions:{colorField:{height:t,width:n}}}=this;e.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),e.fillRect(0,0,n,t);const i=e.createLinearGradient(0,0,n,0);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,n,t);const a=e.createLinearGradient(0,0,0,t);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=a,e.fillRect(0,0,n,t),this.drawActiveColorFieldColor()}setCanvasContextSize(e,{height:t,width:n}){if(!e)return;const i=window.devicePixelRatio||1;e.width=n*i,e.height=t*i,e.style.height=`${t}px`,e.style.width=`${n}px`,e.getContext("2d").scale(i,i)}updateCanvasSize(e="all"){var i,a,o;const{dimensions:t}=this;(e==="all"||e==="color-field")&&this.setCanvasContextSize((i=this.colorFieldRenderingContext)==null?void 0:i.canvas,t.colorField);const n={width:this.effectiveSliderWidth,height:t.slider.height+(t.thumb.radius-t.slider.height/2)*2};(e==="all"||e==="hue-slider")&&this.setCanvasContextSize((a=this.hueSliderRenderingContext)==null?void 0:a.canvas,n),(e==="all"||e==="opacity-slider")&&this.setCanvasContextSize((o=this.opacitySliderRenderingContext)==null?void 0:o.canvas,n)}drawActiveColorFieldColor(){const{color:e}=this;if(!e)return;const t=e.hsv(),{dimensions:{colorField:{height:n,width:i},thumb:{radius:a}}}=this,o=t.saturationv()/(C.s/i),s=n-t.value()/(C.v/n);requestAnimationFrame(()=>{this.colorFieldScopeLeft=o,this.colorFieldScopeTop=s}),this.drawThumb(this.colorFieldRenderingContext,a,o,s,t,!1)}drawThumb(e,t,n,i,a,o){const l=2*Math.PI,h=1;if(e.beginPath(),e.arc(n,i,t,0,l),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=h,e.stroke(),o&&a.alpha()<1){const u=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.beginPath(),e.arc(n,i,t-3,0,l),e.fillStyle=u,e.fill()}e.globalCompositeOperation="source-atop",e.beginPath(),e.arc(n,i,t-3,0,l);const d=o?a.alpha():1;e.fillStyle=a.rgb().alpha(d).string(),e.fill(),e.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:e}=this;if(!e)return;const t=e.hsv().saturationv(100).value(100),{dimensions:{thumb:{radius:n}}}=this,i=this.effectiveSliderWidth,a=t.hue()/(G/i),o=n,s=this.getSliderBoundX(a,i,n);requestAnimationFrame(()=>{this.hueScopeLeft=s}),this.drawThumb(this.hueSliderRenderingContext,n,s,o,t,!1)}drawHueSlider(){const e=this.hueSliderRenderingContext,{dimensions:{slider:{height:t},thumb:{radius:n}}}=this,i=0,a=n-t/2,o=this.effectiveSliderWidth,s=e.createLinearGradient(0,0,o,0),l=["red","yellow","lime","cyan","blue","magenta","#ff0004"],h=1/(l.length-1);let d=0;l.forEach(u=>{s.addColorStop(d,g(u).string()),d+=h}),e.clearRect(0,0,o,t+this.getSliderCapSpacing()*2),this.drawSliderPath(e,t,o,i,a),e.fillStyle=s,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const e=this.opacitySliderRenderingContext,{baseColorFieldColor:t,dimensions:{slider:{height:n},thumb:{radius:i}}}=this,a=0,o=i-n/2,s=this.effectiveSliderWidth;e.clearRect(0,0,s,n+this.getSliderCapSpacing()*2);const l=e.createLinearGradient(0,o,s,0),h=t.rgb().alpha(0),d=t.rgb().alpha(.5),u=t.rgb().alpha(1);l.addColorStop(0,h.string()),l.addColorStop(.5,d.string()),l.addColorStop(1,u.string()),this.drawSliderPath(e,n,s,a,o);const p=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.fillStyle=p,e.fill(),e.fillStyle=l,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(e,t,n,i,a){const o=t/2+1;e.beginPath(),e.moveTo(i+o,a),e.lineTo(i+n-o,a),e.quadraticCurveTo(i+n,a,i+n,a+o),e.lineTo(i+n,a+t-o),e.quadraticCurveTo(i+n,a+t,i+n-o,a+t),e.lineTo(i+o,a+t),e.quadraticCurveTo(i,a+t,i,a+t-o),e.lineTo(i,a+o),e.quadraticCurveTo(i,a,i+o,a),e.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const e=document.createElement("canvas");e.width=10,e.height=10;const t=e.getContext("2d");return t.fillStyle="#ccc",t.fillRect(0,0,10,10),t.fillStyle="#fff",t.fillRect(0,0,5,5),t.fillRect(5,5,5,5),this.checkerPattern=e,e}drawActiveOpacitySliderColor(){const{color:e}=this;if(!e)return;const t=e,{dimensions:{thumb:{radius:n}}}=this,i=this.effectiveSliderWidth,a=I(t.alpha())/(y.max/i),o=n,s=this.getSliderBoundX(a,i,n);requestAnimationFrame(()=>{this.opacityScopeLeft=s}),this.drawThumb(this.opacitySliderRenderingContext,n,s,o,t,!0)}getSliderBoundX(e,t,n){const i=ze(e,t,n);return i===0?e:i===-1?J(e,0,t,n,n*2):J(e,0,t,t-n*2,t-n)}updateColorFromChannels(e){this.internalColorSet(g(e,this.channelMode))}updateChannelsFromColor(e){this.channels=e?this.toChannels(e):[null,null,null,null]}toChannels(e){const{channelMode:t}=this,n=e[t]().array().map((i,a)=>a===3?i:Math.floor(i));return n.length===3&&n.push(1),n}getAdjustedScopePosition(e,t){return[e-q/2,t-q/2]}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleAlphaChannelDimensionsChange","handleFormatOrAlphaChannelChange"],dimensions:["handleAlphaChannelDimensionsChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return tt}},[1,"calcite-color-picker",{allowEmpty:[516,"allow-empty"],alphaChannel:[4,"alpha-channel"],channelsDisabled:[4,"channels-disabled"],clearable:[516],color:[1040],disabled:[516],format:[513],hideChannels:[516,"hide-channels"],hexDisabled:[4,"hex-disabled"],hideHex:[516,"hide-hex"],hideSaved:[516,"hide-saved"],savedDisabled:[516,"saved-disabled"],scale:[513],storageId:[513,"storage-id"],messageOverrides:[1040],numberingSystem:[513,"numbering-system"],value:[1025],messages:[1040],channelMode:[32],channels:[32],defaultMessages:[32],dimensions:[32],effectiveLocale:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],hueScopeLeft:[32],opacityScopeLeft:[32],scopeOrientation:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]],{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleAlphaChannelDimensionsChange","handleFormatOrAlphaChannelChange"],dimensions:["handleAlphaChannelDimensionsChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}]);function de(){if(typeof customElements>"u")return;["calcite-color-picker","calcite-button","calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-loader","calcite-progress","calcite-tab","calcite-tab-nav","calcite-tab-title","calcite-tabs"].forEach(e=>{switch(e){case"calcite-color-picker":customElements.get(e)||customElements.define(e,he);break;case"calcite-button":customElements.get(e)||Ne();break;case"calcite-color-picker-hex-input":customElements.get(e)||ce();break;case"calcite-color-picker-swatch":customElements.get(e)||Fe();break;case"calcite-icon":customElements.get(e)||ae();break;case"calcite-input-message":customElements.get(e)||oe();break;case"calcite-input-number":customElements.get(e)||se();break;case"calcite-input-text":customElements.get(e)||le();break;case"calcite-loader":customElements.get(e)||We();break;case"calcite-progress":customElements.get(e)||re();break;case"calcite-tab":customElements.get(e)||_e();break;case"calcite-tab-nav":customElements.get(e)||Xe();break;case"calcite-tab-title":customElements.get(e)||Ge();break;case"calcite-tabs":customElements.get(e)||qe();break}})}de();const Lt=he,Rt=de;export{Lt as CalciteColorPicker,Rt as defineCustomElement};