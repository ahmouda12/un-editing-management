import{aw as a,ax as t,ay as n,az as h}from"./index-DPJiPkbh.js";import{a2 as c,i as r}from"./index-f6afcedb-0aRnChr4.js";import{c as o,a as s}from"./component-utils-858627d8-DRqmNtSu.js";import{o as l}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const d="arcgis-value-picker{}",u=class{constructor(i){a(this,i),this.arcgisValuePickerReady=t(this,"arcgisValuePickerReady",7),this.arcgisValuePickerValuesChange=t(this,"arcgisValuePickerValuesChange",7),this.valuePickerAnimate=t(this,"valuePickerAnimate",7),this.valuePickerNext=t(this,"valuePickerNext",7),this.valuePickerPause=t(this,"valuePickerPause",7),this.valuePickerPlay=t(this,"valuePickerPlay",7),this.valuePickerPrevious=t(this,"valuePickerPrevious",7),this._watchHandles=[],this.referenceElement=void 0,this.view=void 0,this.position="bottom-left",this.widget=void 0,this.canNext=void 0,this.canPlay=void 0,this.canPrevious=void 0,this.caption=void 0,this.component=void 0,this.layout=void 0,this.loop=void 0,this.playRate=void 0,this.visibleElements=void 0,this.values=void 0}positionWatcher(i){i!==void 0&&this.widget&&this.view.ui.move(this.childElem,i)}captionWatcher(i){this.widget.caption=i}componentWatcher(i){this.widget&&(this.widget.component=i)}layoutWatcher(i){this.widget&&(this.widget.layout=i)}loopWatcher(i){i!==void 0&&this.widget&&(this.widget.loop=i)}playRateWatcher(i){i!==void 0&&this.widget&&(this.widget.playRate=i)}visibleElementsWatcher(i){this.widget&&(this.widget.visibleElements=i)}async next(){var i;(i=this.widget)==null||i.next()}async pause(){var i;(i=this.widget)==null||i.pause()}async play(){var i;(i=this.widget)==null||i.play()}async previous(){var i;(i=this.widget)==null||i.previous()}async componentDidLoad(){const i=this._createParams(),e=await c(i);this.widget=e,await this._addWatchers(),this._proxyEvents(),this.arcgisValuePickerReady.emit(),o(this)}disconnectedCallback(){l(this)}render(){return n("div",{ref:i=>this.childElem=i})}async _addWatchers(){const{watch:i}=await r();s(this,i(()=>this.widget.canNext,e=>this.canNext=e,{initial:!0})),s(this,i(()=>this.widget.canPlay,e=>this.canPlay=e,{initial:!0})),s(this,i(()=>this.widget.canPrevious,e=>this.canPrevious=e,{initial:!0})),s(this,i(()=>this.widget.values,e=>{this.values=e,this.arcgisValuePickerValuesChange.emit()},{initial:!0}))}_createParams(){const i={container:this.childElem};return this.caption&&(i.caption=this.caption),this.component&&(i.component=this.component),this.layout&&(i.layout=this.layout),this.loop!==void 0&&(i.loop=this.loop),this.playRate!==void 0&&(i.playRate=this.playRate),this.visibleElements&&(i.visibleElements=this.visibleElements),i}_proxyEvents(){this.widget.on("animate",i=>this.valuePickerAnimate.emit(i)),this.widget.on("next",i=>this.valuePickerNext.emit(i)),this.widget.on("pause",i=>this.valuePickerPause.emit(i)),this.widget.on("play",i=>this.valuePickerPlay.emit(i)),this.widget.on("previous",i=>this.valuePickerPrevious.emit(i))}get el(){return h(this)}static get watchers(){return{position:["positionWatcher"],caption:["captionWatcher"],component:["componentWatcher"],layout:["layoutWatcher"],loop:["loopWatcher"],playRate:["playRateWatcher"],visibleElements:["visibleElementsWatcher"]}}};u.style=d;export{u as arcgis_value_picker};
