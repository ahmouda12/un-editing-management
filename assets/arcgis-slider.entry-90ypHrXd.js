import{aw as a,ax as t,ay as n,az as d}from"./index-DPJiPkbh.js";import{W as h,i as l}from"./index-f6afcedb-0aRnChr4.js";import{c as r,a as s}from"./component-utils-858627d8-DRqmNtSu.js";import{o as c}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const m="arcgis-slider{min-width:200px;min-height:25px}",g=class{constructor(e){a(this,e),this.sliderMaxChange=t(this,"sliderMaxChange",7),this.sliderMaxClick=t(this,"sliderMaxClick",7),this.sliderMinChange=t(this,"sliderMinChange",7),this.sliderMinClick=t(this,"sliderMinClick",7),this.sliderSegmentClick=t(this,"sliderSegmentClick",7),this.sliderSegmentDrag=t(this,"sliderSegmentDrag",7),this.sliderThumbChange=t(this,"sliderThumbChange",7),this.sliderThumbClick=t(this,"sliderThumbClick",7),this.sliderThumbDrag=t(this,"sliderThumbDrag",7),this.sliderTickClick=t(this,"sliderTickClick",7),this.sliderTrackClick=t(this,"sliderTrackClick",7),this.widgetReady=t(this,"widgetReady",7),this._watchHandles=[],this.referenceElement=void 0,this.draggableSegmentsEnabled=void 0,this.effectiveMax=void 0,this.effectiveMin=void 0,this.effectiveSegmentElements=void 0,this.labelElements=void 0,this.labelInputsEnabled=void 0,this.labels=void 0,this.layout="horizontal",this.min=void 0,this.max=void 0,this.maxLabelElement=void 0,this.minLabelElement=void 0,this.precision=void 0,this.rangeLabelInputsEnabled=void 0,this.segmentElements=void 0,this.snapOnClickEnabled=void 0,this.syncedSegmentsEnabled=void 0,this.thumbElements=void 0,this.thumbsConstrained=void 0,this.tickConfigs=void 0,this.tickElements=void 0,this.trackElement=void 0,this.steps=void 0,this.values=void 0,this.position="bottom-left",this.expandable=!1,this.widget=void 0}draggableSegmentsEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.draggableSegmentsEnabled=e)}effectiveMaxWatcher(e){e!==void 0&&this.widget&&(this.widget.effectiveMax=e)}effectiveMinWatcher(e){e!==void 0&&this.widget&&(this.widget.effectiveMin=e)}layoutWatcher(e){this.widget&&(this.widget.layout=e)}minWatcher(e){e!==void 0&&this.widget&&(this.widget.min=e)}maxWatcher(e){e!==void 0&&this.widget&&(this.widget.max=e)}precisionWatcher(e){e!==void 0&&this.widget&&(this.widget.precision=e)}rangeLabelInputsEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.rangeLabelInputsEnabled=e)}snapOnClickEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.snapOnClickEnabled=e)}syncedSegmentsEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.syncedSegmentsEnabled=e)}thumbsConstrainedWatcher(e){e!==void 0&&this.widget&&(this.widget.thumbsConstrained=e)}tickConfigsWatcher(e){this.widget&&(this.widget.tickConfigs=e)}stepsWatcher(e){this.widget&&(this.widget.steps=e)}valuesWatcher(e){typeof e=="string"&&(this.values=e.split(",").map(i=>Number(i))),this.widget&&(this.widget.values=this.values)}async componentDidLoad(){const e=this._createParams(),i=await h(e);this.widget=i,await this._addWatchers(),this.widgetReady.emit({widget:this.widget}),r(this)}disconnectedCallback(){c(this)}render(){return this.expandable?n("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},n("div",{ref:e=>this.childElem=e})):n("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await l();s(this,e(()=>this.widget.effectiveSegmentElements,i=>this.effectiveSegmentElements=i,{initial:!0})),s(this,e(()=>this.widget.labelElements,i=>this.labelElements=i,{initial:!0})),s(this,e(()=>this.widget.maxLabelElement,i=>this.maxLabelElement=i,{initial:!0})),s(this,e(()=>this.widget.minLabelElement,i=>this.minLabelElement=i,{initial:!0})),s(this,e(()=>this.widget.segmentElements,i=>this.segmentElements=i,{initial:!0})),s(this,e(()=>this.widget.thumbElements,i=>this.thumbElements=i,{initial:!0})),s(this,e(()=>this.widget.tickElements,i=>this.tickElements=i,{initial:!0})),s(this,e(()=>this.widget.trackElement,i=>this.trackElement=i,{initial:!0}))}_createParams(){const e={container:this.childElem,layout:this.layout};return this.min!==void 0&&(e.min=this.min),this.max!==void 0&&(e.max=this.max),this.steps&&(typeof this.steps=="string"&&(this.steps=this.steps.split(",").map(i=>Number(i))),e.steps=this.steps),this.values&&(typeof this.values=="string"&&(this.values=this.values.split(",").map(i=>Number(i))),e.values=this.values),e}get el(){return d(this)}static get watchers(){return{draggableSegmentsEnabled:["draggableSegmentsEnabledWatcher"],effectiveMax:["effectiveMaxWatcher"],effectiveMin:["effectiveMinWatcher"],layout:["layoutWatcher"],min:["minWatcher"],max:["maxWatcher"],precision:["precisionWatcher"],rangeLabelInputsEnabled:["rangeLabelInputsEnabledWatcher"],snapOnClickEnabled:["snapOnClickEnabledWatcher"],syncedSegmentsEnabled:["syncedSegmentsEnabledWatcher"],thumbsConstrained:["thumbsConstrainedWatcher"],tickConfigs:["tickConfigsWatcher"],steps:["stepsWatcher"],values:["valuesWatcher"]}}};g.style=m;export{g as arcgis_slider};