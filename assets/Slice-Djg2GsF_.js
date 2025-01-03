const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-action-BHaqNzsV.js","assets/action-ED8yfrZZ.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/component-6CIDVndn.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-button-B6QLSJpN.js","assets/button-DXjKuKtV.js","assets/form-B4OwUu51.js","assets/label-C1Y8426B.js","assets/calcite-list-item-BfYt6AQV.js","assets/utils3-exWydRL4.js","assets/resources4-DXHY1U7R.js","assets/handle-jADsp4A6.js","assets/calcite-list-E2bqcYXp.js","assets/filter-yN6-jZOU.js","assets/debounce-BOqmhDXu.js","assets/input2-DvrCRwl9.js","assets/Validation-nOlLLBIC.js","assets/input-j1u1wOBY.js","assets/input-message-C-NSbwGv.js","assets/progress-BrWM7Ubw.js","assets/scrim-C6--6irQ.js"])))=>i.map(i=>d[i]);
import{x as t,y as s,hT as E,B as b,bh as g,hS as f,im as $,io as k,cU as V,ip as G,_ as x,iq as i,lK as m,nb as I,iE as A}from"./index-DPJiPkbh.js";import{c as T}from"./Analysis-COtX-kWi.js";import{h as C}from"./SlicePlane-D-UzsKax.js";import{v as B}from"./AnalysisViewModel-DxXO4_L7.js";import"./persistable-DMdbJ5yQ.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BlAvASkD.js";let c=class extends T{constructor(l){super(l),this.type="slice",this.tiltEnabled=!1,this.shape=null,this.excludeGroundSurface=!1}get excludedLayers(){return this._get("excludedLayers")||new g}set excludedLayers(l){this._set("excludedLayers",f(l,this._get("excludedLayers")))}get requiredPropertiesForEditing(){var l;return[(l=this.shape)==null?void 0:l.position]}clear(){this.shape=null}};t([s({type:["slice"]})],c.prototype,"type",void 0),t([s()],c.prototype,"tiltEnabled",void 0),t([s({types:{key:"type",base:null,typeMap:{plane:C},defaultKeyValue:"plane"}})],c.prototype,"shape",void 0),t([s({cast:E,clonable:e=>e.slice()})],c.prototype,"excludedLayers",null),t([s({type:Boolean,nonNullable:!0})],c.prototype,"excludeGroundSurface",void 0),t([s({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=t([b("esri.analysis.SliceAnalysis")],c);const M=c,L=new Set;let d=class extends B{constructor(e){super(e),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.",L.add(this)}destroy(){L.delete(this)}get state(){return this.disabled||!this.ready?"disabled":this.tool==null?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(e){this.analysis.shape=e}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(e){this.analysis.tiltEnabled=e}get layersMode(){var e;return((e=this.tool)==null?void 0:e.layersMode)??"none"}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(e){this.analysis.excludedLayers=g.isCollection(e)?e:new g(e)}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(e){this.analysis.excludeGroundSurface=e}async start(){await super.start(),L.forEach(e=>{e.view===this.view&&e!==this&&e.clear()}),this.analysisView!=null&&(this.analysisView.active=!0)}enterExcludeLayerMode(){this.tool!=null&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){this.tool!=null&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(e){e.active=!0}constructAnalysis(){return new M}};t([s({type:M})],d.prototype,"analysis",void 0),t([s({readOnly:!0})],d.prototype,"state",null),t([s()],d.prototype,"shape",null),t([s()],d.prototype,"tiltEnabled",null),t([s()],d.prototype,"layersMode",null),t([s()],d.prototype,"excludedLayers",null),t([s({nonNullable:!0})],d.prototype,"excludeGroundSurface",null),d=t([b("esri.widgets.Slice.SliceViewModel")],d);const S=d,n="esri-slice",a={base:n,widgetIcon:A.slice,actions:`${n}__actions`,cancelButton:`${n}__cancel-button`,container:`${n}__container`,error:`${n}__error`,excludeButton:`${n}__exclude-button`,hint:`${n}__hint`,hintText:`${n}__hint-text`,layerItem:`${n}__layer-item`,layerList:`${n}__layer-list`,layerListHeading:`${n}__layer-list-title`,newSliceButton:`${n}__clear-button`};let r=class extends k{constructor(e,l){super(e,l),this.headingLevel=3,this.iconClass=a.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new S,this._onNewSliceClick=()=>{V(this.viewModel.start())}}loadDependencies(){return G({action:()=>x(()=>import("./calcite-action-BHaqNzsV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])),button:()=>x(()=>import("./calcite-button-B6QLSJpN.js"),__vite__mapDeps([14,15,2,3,16,4,5,17,10,6,7,8,9,11,12,13])),"list-item":()=>x(()=>import("./calcite-list-item-BfYt6AQV.js"),__vite__mapDeps([18,2,3,4,5,7,8,9,11,6,19,20,1,10,12,13,21])),list:()=>x(()=>import("./calcite-list-E2bqcYXp.js"),__vite__mapDeps([22,2,3,4,5,9,20,19,6,11,7,8,23,24,12,25,16,17,10,26,27,28,29,13,30]))})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(e){this.viewModel.analysis=e}get excludedLayers(){return this.viewModel.excludedLayers}set excludedLayers(e){this.viewModel.excludedLayers=e}get excludeGroundSurface(){return this.viewModel.excludeGroundSurface}set excludeGroundSurface(e){this.viewModel.excludeGroundSurface=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}get hasVoxelLayers(){var l;const e=(l=this.viewModel)==null?void 0:l.view;return e!=null&&e.allLayerViews.some(u=>u.type==="voxel-3d")}render(){return i("div",{class:this.classes(a.base,m.widget,m.panel),role:"presentation"},this.visible?i("div",{class:a.container},this.viewModel.supported?[this._renderHint(),this._renderLayerList(),this._renderActions()]:this._renderUnsupported()):null)}_renderUnsupported(){return i("div",{class:a.error,key:"unsupported"},i("p",null,this.messages.unsupported))}_renderHint(){const{hasVoxelLayers:e,messages:l,viewModel:u}=this,{active:y,layersMode:p,state:v}=u;let o=null;return y&&(p==="exclude"?o=l.excludeHint:v==="ready"&&(o=e?l.voxelHint:l.hint)),o?i("div",{class:a.hint,key:"hint"},i("p",{class:a.hintText},o),i("p",{class:a.hintText},l.verticalHint)):null}_renderLayerList(){const{excludedLayers:e,excludeGroundSurface:l,headingLevel:u,messages:y,viewModel:p}=this,{layersMode:v,state:o}=p,h=o==="slicing"||o==="sliced",_=e?e.toArray().map(w=>this._renderLayerItem({uid:w.uid,title:w.title,onClick:()=>(this.excludedLayers.remove(w),!1)})):[];return l&&_.push(this._renderLayerItem({uid:"ground",title:y.ground,onClick:()=>(this.excludeGroundSurface=!1,!1)})),v!=="exclude"&&h&&_.length!==0?i("div",{class:a.layerList,key:"settings"},i(I,{class:a.layerListHeading,level:u},y.excludedLayers),i("calcite-list",{selectionMode:"none"},_)):null}_renderActions(){const{messages:e,viewModel:l}=this,{active:u,state:y}=l,p=y==="disabled",v=y==="slicing"||y==="sliced",o=l.layersMode==="exclude",h=[];return u&&!v||o||h.push(i("calcite-button",{class:a.newSliceButton,disabled:p,key:"new-slice",onclick:this._onNewSliceClick},e.newSlice)),v&&!o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.excludeButton,disabled:p,key:"exclude",onclick:()=>l.enterExcludeLayerMode()},e.excludeLayer)),u&&o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.cancelButton,disabled:p,key:"cancel-exclude",onclick:()=>l.exitExcludeLayerMode()},e.cancel)),h.length===0?null:i("div",{class:a.actions},h)}_renderLayerItem(e){return i("calcite-list-item",{class:a.layerItem,key:e.uid,label:e.title??""},i("calcite-action",{icon:"x",onclick:e.onClick,scale:"s",slot:"actions-end",text:this.messages.includeLayer}))}};t([s()],r.prototype,"active",null),t([s({constructOnly:!0,nonNullable:!0})],r.prototype,"analysis",null),t([s()],r.prototype,"excludedLayers",null),t([s()],r.prototype,"excludeGroundSurface",null),t([s()],r.prototype,"headingLevel",void 0),t([s()],r.prototype,"iconClass",void 0),t([s()],r.prototype,"icon",void 0),t([s()],r.prototype,"label",null),t([s(),$("esri/widgets/Slice/t9n/Slice")],r.prototype,"messages",void 0),t([s()],r.prototype,"view",null),t([s({type:S})],r.prototype,"viewModel",void 0),t([s()],r.prototype,"visible",null),t([s()],r.prototype,"hasVoxelLayers",null),r=t([b("esri.widgets.Slice")],r);const F=r;export{F as default};
