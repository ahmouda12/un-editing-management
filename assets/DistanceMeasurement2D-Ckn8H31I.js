import{x as s,y as r,B as T,fm as x,lQ as A,lP as V,cR as y,fs as D,eP as f,ad as R,b5 as S,bW as q,jV as U,f_ as N,jR as j,mY as F,mX as Z,bZ as k,a5 as J,mZ as z,n1 as b,m_ as M,g8 as w,f as I,n2 as K,m$ as Q,n0 as X,dB as Y,mg as ee,dJ as te,dE as se,jn as ie,aU as re,lS as L,w as oe,h1 as ne,im as B,io as ae,iq as E,cU as le,lK as G,iE as he}from"./index-DPJiPkbh.js";import{e as ce}from"./defaultUnit-DHDAnn2J.js";import{l as me}from"./Draw-BXbPBj82.js";import{l as ue,x as de,j as pe,S as ve}from"./dragEventPipeline-C143Img8.js";import{S as ye}from"./GraphicManipulator-D9IuJzYA.js";import{p as we,u as ge}from"./MeasurementWidgetContent-DiBZTZaR.js";import"./getDefaultUnitForView-Bcf6FxpR.js";import"./SnappingVisualizer2D-D-VHiciv.js";import"./enums-BRqP_wXA.js";import"./SnappingVisualizer-g2_BPvPy.js";import"./PointSnappingHint-DDE-Yg7Q.js";import"./EditGeometryOperations-CyMr5vX7.js";import"./SnappingContext-Cpn1WUY8.js";import"./SnappingOperation-BMTDGQRq.js";import"./Scheduler-B7taRppB.js";import"./debugFlags-BTuu0IjQ.js";import"./RenderState-DaVlEYWY.js";import"./drawSurfaces-CwETUo7e.js";import"./mat2df64-CBKYtunK.js";import"./quat-B_RTSvGc.js";import"./memoize-DsJmrG76.js";import"./dehydratedFeatureComparison-DtGCE82y.js";import"./SnappingDragPipelineStep-C3-bVnPF.js";import"./hydratedFeatures-DhDSkMoS.js";import"./interfaces-D6pIddIh.js";import"./meshVertexSpaceUtils-BjFcMx2J.js";import"./MeshLocalVertexSpace-BiaaX75A.js";import"./vec3-CkCkHRdL.js";import"./interfaces-DkjgzG8v.js";import"./drawUtils-D2HuKKkV.js";import"./UnitSelect-CjoN6u1F.js";const g=1e5;let u=class extends ue{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new x({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new x({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){A("esri/core/t9n/Units").then(t=>{this.messages=t}),this.addHandles(V(async()=>{this.messages=await A("esri/core/t9n/Units")}));const e=this.view;this._draw=new me({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles([y(()=>[this.unit,this.geodesicDistanceThreshold,this.messages],()=>{this._updatePolylines()},D),y(()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor],()=>{if(!this._vertices.length)return;const t=this._vertices.map(({coord:i})=>i);for(const{handle:i}of this._vertices)i.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(t)})])}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=f(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=f(this._measurementLayer),this._manipulatorLayer=f(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}onActivate(){this._drawActive||this._vertices.length!==0||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],t=>this._updateSketch(t.vertices)),e.on("draw-complete",()=>{this._stopSketch()})}_stopSketch(){this.manipulators.forEach(({manipulator:e})=>{e.interactive=!0}),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{handle:o,manipulator:m}=this._vertices.pop();o.remove(),this.manipulators.remove(m)}for(let o=this._vertices.length;o<e.length;o++){const[m,p]=e[o],v=_e(new R({x:m,y:p,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(v);const _=de(v,(C,H)=>{H.next(pe(this.view)).next(ve(C.graphic)).next(()=>{const O=C.graphic.geometry;this._vertices[o].coord=[O.x,O.y],this._updatePolylines()})});this._vertices.push({manipulator:v,coord:[m,p],handle:_})}const i=this._vertices.length-1,n=this._vertices[i],[l,a]=e[i];n.coord[0]===l&&n.coord[1]===a||(n.coord=[l,a],n.manipulator.graphic.geometry=new R({x:l,y:a,spatialReference:t}));const h=this._drawActive?this._vertices[i].manipulator:null;this.manipulators.forEach(({manipulator:o})=>{o.interactive=h==null||o!==h}),this._updatePolylines()}_updatePolylines(){var v;if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=this._vertices.map(({coord:_})=>_),{measurement:t,drawing:i,original:n}=fe(e,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",t);const l=Le(this.messages,t,this.unit);let a,h;this._set("measurementLabel",l);const{graphics:o}=this._measurementLayer,m=o.length===2,{effectiveTheme:p}=this.view;m?(a=o.at(0),h=o.at(1)):(a=new S({symbol:new q({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:U(p.accentColor).toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:p.accentColor.toArray()}]}}})}),h=new S({symbol:new N({color:p.textColor,haloColor:j(U(p.textColor,F.Low),.5),haloSize:2,font:new Z({size:14,family:"sans-serif"})})}),o.removeAll(),o.addMany([a,h])),a.geometry=i,h.geometry=(v=n.extent)==null?void 0:v.center,h.symbol.text=l}};function _e(e,t,i){const n=j(t.effectiveTheme.accentColor,.5),l={type:"simple-line",width:0},a=8,h=new k({style:"circle",color:n,size:a,outline:l}),o=new k({style:"circle",color:n,size:1.5*a,outline:l}),m=new S({geometry:e,symbol:h});return new ye({view:t,layer:i,graphic:m,focusedSymbol:o})}function fe(e,t,i){const n=new J({paths:[e],spatialReference:t});let l,a;if(t.isGeographic)if(z(t))l=b([n],"meters")[0],a=M(n,g);else{const h=w(n,I.WGS84),o=M(h,g);l=b([h],"meters")[0],a=w(o,t)}else if(t.isWebMercator)l=K(n,"meters"),a=Q(n,g,"meters");else{const h=X(n,"meters");if(i!=null&&h>=i){const o=w(n,I.WGS84),m=M(o,g);l=b([o],"meters")[0],a=w(m,t)}else l=h,a=n}return{measurement:{geometry:a,length:l},original:n,drawing:a}}function be(e){return e!=null}function Me(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:n}=e;return t&&!n&&!z(e)||!t&&!i}function Le(e,t,i){if(!t||!e)return"";switch(i){case"metric":return se(e,t.length,"meters");case"imperial":return te(e,t.length,"meters");default:return Y(e,ee(t.length,"meters",i),i)}}s([r()],u.prototype,"_drawActive",void 0),s([r({readOnly:!0})],u.prototype,"cursor",null),s([r({value:!0})],u.prototype,"editable",null),s([r({type:Number})],u.prototype,"geodesicDistanceThreshold",void 0),s([r({readOnly:!0})],u.prototype,"measurement",void 0),s([r({readOnly:!0})],u.prototype,"measurementLabel",void 0),s([r()],u.prototype,"messages",void 0),s([r()],u.prototype,"unit",void 0),s([r({constructOnly:!0})],u.prototype,"view",void 0),u=s([T("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],u);let d=class extends we{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([y(()=>{var e;return(e=this.view)==null?void 0:e.spatialReference},()=>this.clear()),y(()=>this.unit,e=>{this.tool!=null&&(this.tool.unit=e)},D),y(()=>this.geodesicDistanceThreshold,e=>{this.tool!=null&&(this.tool.geodesicDistanceThreshold=e)},D)])}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(e){ie(re.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",e)}get measurement(){return this.tool!=null?this.tool.measurement:null}get measurementLabel(){return this.tool!=null?this.tool.measurementLabel:null}get state(){var e;return this.disabled||this.view==null||!be((e=this.view)==null?void 0:e.spatialReference)?"disabled":this.tool!=null&&this.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return L}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;e!=null&&(await oe(()=>e.ready),Me(e.spatialReference)&&await ne()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new u({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:i}=this;return e!=null&&t.includes(e)?e:t.includes(i)?i:t.length>0?t[0]:i}_validateUnits(e){if(e==null)return[];const t=e.filter(i=>L.includes(i));return t.length===0?L.slice():t}};s([r(ce)],d.prototype,"defaultUnit",void 0),s([r()],d.prototype,"geodesicDistanceThreshold",null),s([r({readOnly:!0})],d.prototype,"measurement",null),s([r({readOnly:!0})],d.prototype,"measurementLabel",null),s([r({readOnly:!0})],d.prototype,"state",null),s([r({type:String})],d.prototype,"unit",null),s([r({type:[String]})],d.prototype,"unitOptions",null),d=s([T("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],d);const W=d,P="esri-distance-measurement-2d",$={base:P,newMeasurementButton:`${P}__clear-button`,widgetIcon:he.measureLine};let c=class extends ae{constructor(e,t){super(e,t),this.iconClass=$.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new W}get active(){return this.viewModel.active}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,unit:i,unitOptions:n,viewModel:l}=this,{active:a,measurementLabel:h,state:o,supported:m}=l;return E("div",{"aria-label":this.messages.widgetLabel,class:this.classes($.base,G.widget,G.panel),key:this,role:"presentation"},this.visible?E(ge,{active:a,measurementItems:[{key:"distance",title:e.distance,value:h}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:$.newMeasurementButton,state:o,supported:m,unit:i,unitOptions:n,onNewMeasurementClick:()=>{le(this.viewModel.start())},onUnitChange:p=>{this.unit=p}}):null)}};s([r({readOnly:!0})],c.prototype,"active",null),s([r()],c.prototype,"iconClass",void 0),s([r()],c.prototype,"icon",void 0),s([r()],c.prototype,"label",null),s([r()],c.prototype,"uiStrings",void 0),s([r(),B("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],c.prototype,"messages",void 0),s([r(),B("esri/t9n/common")],c.prototype,"messagesCommon",void 0),s([r()],c.prototype,"unit",null),s([r()],c.prototype,"unitOptions",null),s([r()],c.prototype,"view",null),s([r({type:W})],c.prototype,"viewModel",void 0),s([r({type:Boolean})],c.prototype,"visible",null),c=s([T("esri.widgets.DistanceMeasurement2D")],c);const tt=c;export{tt as default};
