import{aw as s,ax as n,ay as a,az as r}from"./index-DPJiPkbh.js";import{d as h,i as c}from"./index-f6afcedb-0aRnChr4.js";import{r as d,c as o,a as w}from"./component-utils-858627d8-DRqmNtSu.js";import{o as m}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const u="",l=class{constructor(e){s(this,e),this.arcgisAreaMeasurement3dReady=n(this,"arcgisAreaMeasurement3dReady",7),this._watchHandles=[],this.referenceElement=void 0,this.analysis=void 0,this.icon=void 0,this.unit=void 0,this.unitOptions=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){d(this,e)}iconWatcher(e){this.widget&&(this.widget.icon=e,this.widget.iconClass=e)}unitWatcher(e){this.widget&&(this.widget.unit=e)}positionWatcher(e){e!==void 0&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async clear(){var e;(e=this.widget)==null||e.viewModel.clear()}async start(){var e;(e=this.widget)==null||e.viewModel.start()}async componentDidLoad(){const e=this._createParams(),t=await h(e);this.widget=t,await this._addWatchers(),this.arcgisAreaMeasurement3dReady.emit(),o(this)}disconnectedCallback(){m(this)}render(){return a("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e,whenOnce:t}=await c();w(this,[e(()=>this.widget.analysis,i=>this.analysis=i)]),await t(()=>this.widget.unitOptions),this.unitOptions=this.widget.unitOptions}_createParams(){const e={container:this.childElem};return this.view&&(e.view=this.view),this.unit&&(e.unit=this.unit),this.unitOptions&&(e.unitOptions=this.unitOptions),e}get el(){return r(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],icon:["iconWatcher"],unit:["unitWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};l.style=u;export{l as arcgis_area_measurement_3d};
