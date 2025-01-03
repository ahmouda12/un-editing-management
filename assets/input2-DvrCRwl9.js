import{k as S,H as D,l as g,O,m as i,a0 as N,q as L}from"./index-DPJiPkbh.js";import{u as B,v as k,a as A,g as T,t as I}from"./dom-BlTj4jtE.js";import{s as F,c as M,i as w,d as P,H as U}from"./form-B4OwUu51.js";import{u as K,I as W}from"./interactive-CUuALpv0.js";import{n as j}from"./key-D63ExP77.js";import{c as R,d as q,g as z}from"./label-C1Y8426B.js";import{s as $,a as G,c as _}from"./loadable-CXsmssm6.js";import{n as l,i as p,p as Y,s as Z,a as J,c as Q,d as X,B as ee}from"./locale-CS3btv4w.js";import{c as te}from"./observers-DXQDxHJZ.js";import{u as ie,c as ne,d as ae,s as se}from"./t9n-CeKm3gqL.js";import{g as f}from"./component-6CIDVndn.js";import{V as oe}from"./Validation-nOlLLBIC.js";import{s as re}from"./input-j1u1wOBY.js";import{d as le}from"./icon-DwdUDmXD.js";import{d as ce}from"./input-message-C-NSbwGv.js";import{d as ue}from"./progress-BrWM7Ubw.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const s={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},v={validationMessage:"inputValidationMessage"},E={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},de={action:"action"},he=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,pe=he,be=S(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputFocus=g(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=g(this,"calciteInternalInputBlur",6),this.calciteInputInput=g(this,"calciteInputInput",7),this.calciteInputChange=g(this,"calciteInputChange",6),this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=te("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&F(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=e.composedPath();!t.includes(this.inputWrapperEl)||t.includes(this.actionWrapperEl)||this.setFocus()},this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()},this.inputChangeHandler=()=>{this.type==="file"&&(this.files=this.childEl.files)},this.inputInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const t=e.target.value;l.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const n=l.delocalize(t);e.inputType==="insertFromPaste"?(p(n)||e.preventDefault(),this.setValue({nativeEvent:e,origin:"user",value:Y(n)}),this.childNumberEl.value=this.displayedValue):this.setValue({nativeEvent:e,origin:"user",value:n})},this.inputNumberKeyDownHandler=e=>{if(this.type!=="number"||this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const t=[...j,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const n=e.shiftKey&&e.key==="Tab";if(t.includes(e.key)||n){e.key==="Enter"&&this.emitChangeIfUserModified();return}l.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===l.decimal&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(l.decimal)===-1))&&(/[eE]/.test(e.key)&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat||this.type!=="number")return;const n=this.maxString?parseFloat(this.maxString):null,d=this.minString?parseFloat(this.minString):null,a=150;this.incrementOrDecrementNumberValue(e,n,d,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let o=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(o){o=!1;return}this.incrementOrDecrementNumberValue(e,n,d,t)},a)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=e=>{if(!B(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputValue=e=>{this.type==="text"&&!this.childEl||this.type==="number"&&!this.childNumberEl||(this[`child${this.type==="number"?"Number":""}El`].value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=this.normalizeValue(e)},this.setPreviousValue=e=>{this.previousValue=this.normalizeValue(e)},this.setValue=({committing:e=!1,nativeEvent:t,origin:n,previousValue:d,value:a})=>{var o,h;if(this.setPreviousValue(d??this.value),this.previousValueOrigin=n,this.type==="number"){l.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const b=((o=this.previousValue)==null?void 0:o.length)>a.length||((h=this.value)==null?void 0:h.length)>a.length,c=a.charAt(a.length-1)===".",m=c&&b?a:Z(a),r=a&&!m?p(this.previousValue)?this.previousValue:"":m;let u=l.localize(r);n!=="connected"&&!c&&(u=J(u,r,l)),this.displayedValue=c&&b?`${u}${l.decimal}`:u,this.userChangedValue=n==="user"&&this.value!==r,this.value=["-","."].includes(r)?"":r}else this.userChangedValue=n==="user"&&this.value!==a,this.value=a;n==="direct"&&(this.setInputValue(a),this.previousEmittedValue=a),t&&(this.calciteInputInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=this.type==="number"?l.localize(this.previousValue):this.previousValue):e&&this.emitChangeIfUserModified())},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.pattern=void 0,this.accept=void 0,this.multiple=!1,this.suffixText=void 0,this.editingEnabled=!1,this.type="text",this.value="",this.files=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){O(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var e;this.maxString=((e=this.max)==null?void 0:e.toString())||null}minWatcher(){var e;this.minString=((e=this.min)==null?void 0:e.toString())||null}onMessagesChange(){}valueWatcher(e,t){if(!this.userChangedValue){if(this.type==="number"&&(e==="Infinity"||e==="-Infinity")){this.displayedValue=e,this.previousEmittedValue=e;return}this.setValue({origin:"direct",previousValue:t,value:e==null||e==""?"":this.type==="number"?p(e)?e:this.previousValue||"":e}),this.warnAboutInvalidNumberValue(e)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=k(E,this.icon,this.type)}get isClearable(){var e;return!this.isTextarea&&(this.clearable||this.type==="search")&&((e=this.value)==null?void 0:e.length)>0}get isTextarea(){return this.childElType==="textarea"}effectiveLocaleChange(){ie(this,this.effectiveLocale)}connectedCallback(){var e;Q(this),ne(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),R(this),M(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(w,this.onHiddenFormInputInput)}disconnectedCallback(){var e;q(this),P(this),X(this),ae(this),(e=this.mutationObserver)==null||e.disconnect(),this.el.removeEventListener(w,this.onHiddenFormInputInput)}async componentWillLoad(){var e,t;$(this),this.childElType=this.type==="textarea"?"textarea":"input",this.maxString=(e=this.max)==null?void 0:e.toString(),this.minString=(t=this.min)==null?void 0:t.toString(),this.requestedIcon=k(E,this.icon,this.type),await se(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),this.type==="number"&&(this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedValue=this.value):(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:p(this.value)?this.value:""})))}componentDidLoad(){G(this)}componentShouldUpdate(e,t,n){return this.type==="number"&&n==="value"&&e&&!p(e)?(this.setValue({origin:"reset",value:t}),!1):!0}componentDidRender(){K(this)}async setFocus(){var e,t;await _(this),this.type==="number"?(e=this.childNumberEl)==null||e.focus():(t=this.childEl)==null||t.focus()}async selectText(){var e,t;this.type==="number"?(e=this.childNumberEl)==null||e.select():(t=this.childEl)==null||t.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,n,d){const{value:a}=this;if(a==="Infinity"||a==="-Infinity")return;const o=e==="up"?1:-1,h=this.step==="any"?1:Math.abs(this.step||1),c=new ee(a!==""?a:"0").add(`${h*o}`),m=()=>typeof n=="number"&&!isNaN(n)&&c.subtract(`${n}`).isNegative,r=()=>typeof t=="number"&&!isNaN(t)&&!c.subtract(`${t}`).isNegative,u=m()?`${n}`:r()?`${t}`:c.toString();this.setValue({committing:!0,nativeEvent:d,origin:"user",value:u})}syncHiddenFormInput(e){re(this.type,this,e)}setDisabledAction(){const e=A(this.el,"action");e&&(this.disabled?(e.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return this.type==="number"?p(e)?e:"":e}warnAboutInvalidNumberValue(e){this.type==="number"&&e&&!p(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=T(this.el),t=i("div",{key:"ed9acea9dbc18f4cfc5e7095c1e2de0b1adfdf35",class:s.loader},i("calcite-progress",{key:"58321a27c25dd848a648d2e3d5ca6dfc3f5fd649",label:this.messages.loading,type:"indeterminate"})),n=i("button",{key:"348d8dee0c032afe986b1e253c9d667256f3d9f0","aria-label":this.messages.clear,class:s.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},i("calcite-icon",{key:"334b68a283b767c0e9bea09ccfd83d09c8c17711",icon:"x",scale:f(this.scale)})),d=i("calcite-icon",{key:"4ab83aa9268277a38449ebe4a6e3db4dc9badcae",class:s.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:f(this.scale)}),a=this.numberButtonType==="horizontal",o=i("button",{key:"2dd700034d38581aaea39c019e626ffa1a2c1c16","aria-hidden":"true",class:{[s.numberButtonItem]:!0,[s.buttonItemHorizontal]:a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},i("calcite-icon",{key:"6ca9a7c93aa14520292ad8c800c4e099bd46f30d",icon:"chevron-up",scale:f(this.scale)})),h=i("button",{key:"cdbd88ddd308bd82b6d239a83f365a2c5e226cfc","aria-hidden":"true",class:{[s.numberButtonItem]:!0,[s.buttonItemHorizontal]:a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},i("calcite-icon",{key:"f1b9cf329da9add564d690c517ddcc414c4fbfa3",icon:"chevron-down",scale:f(this.scale)})),b=i("div",{key:"247efdce33568f219b1bf3bf252b8b19a74d03ea",class:s.numberButtonWrapper},o,h),c=i("div",{key:"01819a850399fb20a29471861e011695bf80af97",class:s.prefix},this.prefixText),m=i("div",{key:"dcc073305f3824a0eb72ef230bd217dabdb72104",class:s.suffix},this.suffixText),r=this.el.autofocus||this.el.hasAttribute("autofocus")?!0:null,u=this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),x=this.el.inputMode||this.el.getAttribute("inputmode"),C=this.type==="number"?i("input",{accept:this.accept,"aria-errormessage":v.validationMessage,"aria-invalid":I(this.status==="invalid"),"aria-label":z(this),autocomplete:this.autocomplete,autofocus:r,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:u,inputMode:x,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue}):null,H=this.type!=="number"?[i(this.childElType,{accept:this.accept,"aria-errormessage":v.validationMessage,"aria-invalid":I(this.status==="invalid"),"aria-label":z(this),autocomplete:this.autocomplete,autofocus:r,class:{[s.editingEnabled]:this.editingEnabled,[s.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:u,inputMode:x,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onChange:this.inputChangeHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?i("div",{class:s.resizeIconWrapper},i("calcite-icon",{icon:"chevron-down",scale:f(this.scale)})):null]:null;return i(L,{key:"23d6092960315f172a56105b9af75ddc6497874c",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},i(W,{key:"1bb063f39c14a829a376465fa8c2bbc288046ac7",disabled:this.disabled},i("div",{key:"7f3644f002b7cb75d93d9c0218508b502ddcfd0b",class:{[s.inputWrapper]:!0,[N.rtl]:e==="rtl"},ref:y=>this.inputWrapperEl=y},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?h:null,this.prefixText?c:null,i("div",{key:"0d01898e4949a60e0853c1a72669f5c9d6c91ba5",class:s.wrapper},C,H,this.isClearable?n:null,this.requestedIcon?d:null,this.loading?t:null),i("div",{key:"42e7adec440e417128feb9845c36d0444e6c1ae4",class:s.actionWrapper,ref:y=>this.actionWrapperEl=y},i("slot",{key:"f391b035ad9fc108d1f99c4cedf539425c20a36d",name:de.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?b:null,this.suffixText?m:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?o:null,i(U,{key:"df415df551b4a9a16565c8f554454d01aa89327e",component:this})),this.validationMessage&&this.status==="invalid"?i(oe,{icon:this.validationIcon,id:v.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return pe}},[1,"calcite-input",{alignment:[513],autofocus:[4],clearable:[516],disabled:[516],enterKeyHint:[1,"enter-key-hint"],form:[513],groupSeparator:[516,"group-separator"],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],inputMode:[1,"input-mode"],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],pattern:[1],accept:[1],multiple:[4],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],type:[513],value:[1025],files:[16],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],displayedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function me(){if(typeof customElements>"u")return;["calcite-input","calcite-icon","calcite-input-message","calcite-progress"].forEach(e=>{switch(e){case"calcite-input":customElements.get(e)||customElements.define(e,be);break;case"calcite-icon":customElements.get(e)||le();break;case"calcite-input-message":customElements.get(e)||ce();break;case"calcite-progress":customElements.get(e)||ue();break}})}me();export{be as I,me as d};
