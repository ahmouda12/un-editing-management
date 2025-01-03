import{ah as b,ap as o,am as m,aj as i,an as g,ak as x,al as v}from"./index-DPJiPkbh.js";import{e as u,h as y,g as k,t as I}from"./dom-b6dedd88-C48zjkiq.js";import{s as w,c as E,i as h,d as z,H as T}from"./form-8ec29459-C3tNFZhI.js";import{u as C,I as V}from"./interactive-1a42577a-0Y4Kjss8.js";import{c as L,d as H,g as M}from"./label-043ae25a-C0Qz_2lB.js";import{s as F,a as D,c as A}from"./loadable-13e9ffb2-DYoR06Hq.js";import{c as O,d as W}from"./locale-60f8ca58-Bt-8aMvj.js";import{c as P}from"./observers-9c166451-D75amXSF.js";import{u as S,c as q,d as B,s as R}from"./t9n-75defee3-C_Y1iVpi.js";import{g as p}from"./component-5f0a8be8-6CIDVndn.js";import{V as U}from"./Validation-c59cb4eb-B1BW533o.js";import{s as K}from"./input-871f5b21-j1u1wOBY.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const n={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"},f={validationMessage:"inputTextValidationMessage"},G={action:"action"},_=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,j=_,Y=class{constructor(t){b(this,t),this.calciteInternalInputTextFocus=o(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=o(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=o(this,"calciteInputTextInput",7),this.calciteInputTextChange=o(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=P("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputTextValue(e),e.preventDefault()),e.key==="Enter"&&w(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const s=e.composedPath();!s.includes(this.inputWrapperEl)||s.includes(this.actionWrapperEl)||this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=({committing:e=!1,nativeEvent:s,origin:l,previousValue:r,value:a})=>{this.setPreviousValue(r??this.value),this.previousValueOrigin=l,this.userChangedValue=l==="user"&&a!==this.value,this.value=a,l==="direct"&&(this.setInputValue(a),this.setPreviousEmittedValue(a)),s&&(this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:e&&this.emitChangeIfUserModified())},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){m(this)}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(t,e){this.userChangedValue||this.setValue({origin:"direct",previousValue:e,value:t||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=u({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){S(this,this.effectiveLocale)}connectedCallback(){var t;O(this),q(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),L(this),E(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(h,this.onHiddenFormInputInput)}disconnectedCallback(){var t;H(this),z(this),W(this),B(this),(t=this.mutationObserver)==null||t.disconnect(),this.el.removeEventListener(h,this.onHiddenFormInputInput)}async componentWillLoad(){F(this),this.requestedIcon=u({},this.icon,"text"),await R(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value)}componentDidLoad(){D(this)}componentDidRender(){C(this)}async setFocus(){var t;await A(this),(t=this.childEl)==null||t.focus()}async selectText(){var t;(t=this.childEl)==null||t.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(t){K("text",this,t)}setDisabledAction(){const t=y(this.el,"action");t&&(this.disabled?(t.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),t.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(t.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const t=k(this.el),e=i("div",{key:"2ca041a581304297694d2219c52e3567ee39c4d9",class:n.loader},i("calcite-progress",{key:"dfc05d226e43048d229f32e830ce2d1295d5691f",label:this.messages.loading,type:"indeterminate"})),s=i("button",{key:"39f2afe7d3280b4de0b4e8970266886a7119e5ba","aria-label":this.messages.clear,class:n.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},i("calcite-icon",{key:"c16107371113f3015fb8d259d7a0b227c4256f8f",icon:"x",scale:p(this.scale)})),l=i("calcite-icon",{key:"f5dc6921fbe712ebda049e863bc8b2372083a4d1",class:n.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:p(this.scale)}),r=i("div",{key:"b295b7306b9d121c47f1129f743429de65166bc3",class:n.prefix},this.prefixText),a=i("div",{key:"85c5d7ba85182aecc7bf5471c96ce96507953948",class:n.suffix},this.suffixText),d=i("input",{key:"b542aedd945ae0c3ec2a8e6bc2f2f22f5040636c","aria-errormessage":f.validationMessage,"aria-invalid":I(this.status==="invalid"),"aria-label":M(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?!0:null,class:{[n.editingEnabled]:this.editingEnabled,[n.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode"),maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return i(x,{key:"5a32059d58fc667ccef836b97c7dbf9c7d0456ba",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},i(V,{key:"06f4302d0b97901f9f962f6b96460c517a0e415d",disabled:this.disabled},i("div",{key:"f160e1bebeee50b752d6f38fbc2517952fb92c94",class:{[n.inputWrapper]:!0,[g.rtl]:t==="rtl"},ref:c=>this.inputWrapperEl=c},this.prefixText?r:null,i("div",{key:"72b7e6c7ffdd700779f0ab266050bf263a5912c5",class:n.wrapper},d,this.isClearable?s:null,this.requestedIcon?l:null,this.loading?e:null),i("div",{key:"b359ff4cad35756cf2b4fd97087071cfb8cb6363",class:n.actionWrapper,ref:c=>this.actionWrapperEl=c},i("slot",{key:"123667cff5ed426e732c9b5ef716147431d10ac5",name:G.action})),this.suffixText?a:null,i(T,{key:"fb9c298c3ad9b1b67f6e9e8cc2fb9e7b96f010dd",component:this})),this.validationMessage&&this.status==="invalid"?i(U,{icon:this.validationIcon,id:f.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return v(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};Y.style=j;export{Y as calcite_input_text};
