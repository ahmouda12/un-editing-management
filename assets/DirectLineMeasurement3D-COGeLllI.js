import{x as i,y as n,ad as T,lS as V,B as L,ab as it,cR as M,eP as A,fh as G,jV as nt,oy as st,oz as at,oA as rt,fs as $,bO as C,eQ as ot,eT as N,oB as lt,kv as I,im as R,io as ut,iq as k,cU as pt,lK as F,iE as dt}from"./index-DPJiPkbh.js";import{c as ht}from"./Analysis-COtX-kWi.js";import{e as ct}from"./defaultUnit-DHDAnn2J.js";import{t as mt}from"./memoize-DsJmrG76.js";import{x as gt}from"./hydratedFeatures-DhDSkMoS.js";import{q as yt}from"./measurementUtils-BFoPxc9G.js";import{O as vt}from"./SnappingVisualizer3D-C0db0k4o.js";import{F as wt,z as _t,q as Pt}from"./dragEventPipeline3D-CXQzG4Ap.js";import{b as bt}from"./lineSegment-BXFQuctu.js";import{e as ft}from"./interfaces-js1RL7O8.js";import{e as q}from"./interfaces-CjSZqm0S.js";import{e as B,d as Mt,a as Dt}from"./RenderObject-B0ii-u5E.js";import{c as Lt}from"./LaserlineVisualElement-L3h-Gi2l.js";import{s as St}from"./ElevationContext-DtSabp_5.js";import{b as Vt}from"./ElevationProvider-DuAnZ1w5.js";import{o as Ot}from"./AnalysisToolBase-CrwGXI2x.js";import{V as $t,p as Ct,P as xt}from"./EditGeometryOperations-CyMr5vX7.js";import{x as Ut,M as Ht}from"./dragEventPipeline-C143Img8.js";import{a as Tt}from"./SceneSnappingManagerPool-qGJuBhBv.js";import{e as At}from"./SnappingContext-Cpn1WUY8.js";import{f as Et}from"./SnappingDragPipelineStep-C3-bVnPF.js";import{_ as zt}from"./InteractiveAnalysisViewModel-BQso2cXn.js";import{u as Gt}from"./MeasurementWidgetContent-DiBZTZaR.js";import"./getDefaultUnitForView-Bcf6FxpR.js";import"./projectPointToWGS84ComparableLonLat-DpmzTiqz.js";import"./ExtendedLineVisualElement-CzSNKm2m.js";import"./vec4f32-CjrfB-0a.js";import"./frustum-0hRlYIm-.js";import"./EngineVisualElement-CQxIwceN.js";import"./VisualElement-By0aUKlt.js";import"./ContentObject-tLjB2Ud3.js";import"./Material-CcaRhBp-.js";import"./interfaces-CGza0uBR.js";import"./basicInterfaces-DngWxyLO.js";import"./VertexAttribute-BnAa5VW0.js";import"./Util-C76gCxal.js";import"./ShadedColorMaterial.glsl-Ej-ucYas.js";import"./Object3DVisualElement-Dqi1mRTf.js";import"./ColorMaterial.glsl-yoRZJYnh.js";import"./mat3-CakTilsz.js";import"./BufferView-D7hl-e1J.js";import"./IntegerPassUniform-Cz4js9jy.js";import"./enums-DSseSvdG.js";import"./Texture-BRxaK8g9.js";import"./BindType-BmZEZMMh.js";import"./ShaderTechniqueConfiguration-Ba2Oo7i0.js";import"./doublePrecisionUtils-B0owpBza.js";import"./requestImageUtils-QtRT18sL.js";import"./InterleavedLayout-nriK6Yun.js";import"./types-D0PSWh4d.js";import"./VertexColor.glsl-COPd45YS.js";import"./OrderIndependentTransparency-Dar7ikM6.js";import"./floatRGBA-CHZINRxm.js";import"./RightAngleQuadVisualElement-C83KoRJO.js";import"./Attribute-B-NAci_J.js";import"./Geometry-BiufU1jP.js";import"./Indices-ijvqWnhD.js";import"./triangle-aMXw_G3u.js";import"./SnappingVisualizer-g2_BPvPy.js";import"./PointSnappingHint-DDE-Yg7Q.js";import"./ray-cdkbAool.js";import"./verticalOffsetUtils-5CRVG66a.js";import"./orientedBoundingBox-BABDZfWD.js";import"./quat-B_RTSvGc.js";import"./spatialReferenceEllipsoidUtils-MJ9Uj9G-.js";import"./computeTranslationToOriginAndRotation-DJULrcwj.js";import"./interfaces-D6pIddIh.js";import"./DoubleArray-MGZZXTmk.js";import"./glUtil-DS73TAjp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BufferObject-wa67LmxE.js";import"./axisAngleDegrees-B1MWDIoz.js";import"./weather-Ce7bakF4.js";import"./RenderState-DaVlEYWY.js";import"./NestedMap-DgiGbX8E.js";import"./Octree-CGixHoMx.js";import"./Intersector-G-a_ey6X.js";import"./VertexArrayObject-BGsrrzff.js";import"./Scheduler-B7taRppB.js";import"./debugFlags-BTuu0IjQ.js";import"./vec3f32-Cw9Q6TO_.js";import"./boundedPlane-C7AEtm0i.js";import"./meshVertexSpaceUtils-BjFcMx2J.js";import"./MeshLocalVertexSpace-BiaaX75A.js";import"./vec3-CkCkHRdL.js";import"./interfaces-DkjgzG8v.js";import"./drawUtils-D2HuKKkV.js";import"./dehydratedFeatureComparison-DtGCE82y.js";import"./UnitSelect-CjoN6u1F.js";let f=class extends ht{constructor(t){super(t),this.type="direct-line-measurement",this.startPoint=null,this.endPoint=null,this.unit=null}get requiredPropertiesForEditing(){return[this.startPoint,this.endPoint]}clear(){this.startPoint=null,this.endPoint=null}};i([n({type:["direct-line-measurement"]})],f.prototype,"type",void 0),i([n({type:T})],f.prototype,"startPoint",void 0),i([n({type:T})],f.prototype,"endPoint",void 0),i([n({type:V,value:null})],f.prototype,"unit",void 0),i([n({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=i([L("esri.analysis.DirectLineMeasurementAnalysis")],f);const j=f;var D;(function(t){t.Manipulators="manipulators",t.AnalysisViewDestroyed="analysis-view-destroyed",t.AnalysisView="analysis-view"})(D||(D={}));let p=class extends it{constructor(t){super(t),this.cursorPoint=null,this._visible=!1,this._laserLine=null,this.laserLineEnabled=!0,this._lastDraggedHandle=null}initialize(){this._laserLine=new Lt({view:this.view,attached:!0,isDecoration:!0}),this._updateVisibility(this._visible),this._connectToAnalysisView(),this.addHandles(M(()=>this._params,({laserLineGlowColor:t,laserLineInnerColor:e,laserLineGlobalAlpha:a})=>{const s=this._laserLine,l=s.style;s.style={...l,innerColor:e,glowColor:t,globalAlpha:a}}))}destroy(){this._laserLine=A(this._laserLine)}get _params(){const{accentColor:t}=this.view.effectiveTheme;return{laserLineGlowColor:G.toUnitRGB(t),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:G.toUnitRGB(nt(t)),laserLineInnerWidth:.75,laserLineGlobalAlpha:.75*t.a,handleColor:st(t,.5),handleRadius:5}}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData,e=this.analysisViewData.testData;return{labels:e==null?void 0:e.labels,stripeLength:e==null?void 0:e.stripeLength,laserLineRenderer:{heightManifoldEnabled:t!=null&&t.heightManifoldEnabled,heightManifoldTarget:t!=null?t.heightManifoldTarget:null,pointDistanceEnabled:t!=null&&t.pointDistanceEnabled,pointDistanceOrigin:t!=null?t.pointDistanceOrigin:null,pointDistanceTarget:t!=null?t.pointDistanceTarget:null,lineVerticalPlaneEnabled:t!=null&&t.lineVerticalPlaneEnabled}}}get _cursorPosition(){const t=C(),e=this.cursorPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _startPosition(){const t=C(),e=this.analysis.startPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _endPosition(){const t=C(),e=this.analysis.endPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _laserLineParams(){const t=this._focusPosition,{active:e,lineState:a}=this.toolState,s=this.analysisViewData,l=this.laserLineEnabled&&!!t&&a!=="measured"&&e;if(!l||!this.visible||s==null||s.destroyed)return{heightManifoldTarget:null,pointDistanceLine:null,lineVerticalPlaneSegment:null};const o=s.actualVisualizedMeasurement,r=this.view.viewingMode!=="local"&&l&&!!this.analysis.startPoint&&o==="geodesic",d=l&&s.viewMode===q.Triangle;return{heightManifoldTarget:o==="euclidean"?t:null,pointDistanceLine:r?this._pointDistanceLine:null,lineVerticalPlaneSegment:d?bt(this._startPosition,this._endPosition):null}}get _focusPosition(){const{lineState:t}=this.toolState,e=this.analysisViewData,a=e!=null&&!e.destroyed&&e.measurementMode===ft.Euclidean&&e.viewMode===q.Direct;switch(t){case"drawing":return a?this._startPosition:this.analysis.endPoint?this._endPosition:this._startPosition;case"editing":return a?this._lastDraggedHandle==="start"?this._endPosition:this._startPosition:this._lastDraggedHandle==="start"?this._startPosition:this._endPosition;default:return this.cursorPoint!=null?this._cursorPosition:null}}get _pointDistanceLine(){return{origin:this.toolState.lineState==="drawing"||this._lastDraggedHandle==="end"?this._startPosition:this._endPosition,target:this._focusPosition}}createManipulators(){const t=this._params,{view:e}=this,a=()=>{const u=Mt(t.handleColor),b=[new Dt(St(u,1,32,32))],_=new B({view:e,renderObjects:b});return _.available=!1,_.radius=t.handleRadius,[_,u]},[s,l]=a(),[o,r]=a(),d=new B({view:this.view});d.available=!1,d.interactive=!1,this.analysis.startPoint!=null&&(s.location=this.analysis.startPoint,s.available=!0),this.analysis.endPoint!=null&&(o.location=this.analysis.endPoint,o.available=!0);const m=()=>{let u=this._lastDraggedHandle;s.grabbing&&!o.grabbing&&(u="start"),o.grabbing&&!s.grabbing&&(u="end"),s.grabbing||o.grabbing||(u=null),this._lastDraggedHandle=u},P=s.events.on("grab-changed",m),w=o.events.on("grab-changed",m);return this.addHandles([P,w,M(()=>rt(this._params.handleColor),u=>{l.setParameters({color:u}),r.setParameters({color:u})},{equals:at})],D.Manipulators),{start:s,end:o,cursor:d}}show(){this.destroyed||this._visible||this._updateVisibility(!0)}hide(){!this.destroyed&&this._visible&&this._updateVisibility(!1)}_connectToAnalysisView(){this.removeHandles(D.AnalysisView),this.addHandles([M(()=>{var t;return(t=this.analysisViewData)==null?void 0:t.destroyed},t=>{t&&this.removeHandles(D.AnalysisView)},$),M(()=>[this.toolState.lineState==="measured",this.analysisViewData],([t,e])=>{e==null||e.destroyed||(e.allowVisualElementsOrientationChange=!t)},$),M(()=>this._laserLineParams,t=>{const e=this._laserLine;e.heightManifoldTarget=t.heightManifoldTarget,e.pointDistanceLine=t.pointDistanceLine,e.lineVerticalPlaneSegment=t.lineVerticalPlaneSegment},$)],D.AnalysisView)}_updateVisibility(t){this.initialized&&(this._visible=t,t?this._laserLine.style={innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,glowFalloff:this._params.laserLineGlowFalloff,globalAlpha:this._params.laserLineGlobalAlpha}:this.view.cursor=null,this._laserLine.visible=t)}};i([n({constructOnly:!0})],p.prototype,"view",void 0),i([n()],p.prototype,"_params",null),i([n({constructOnly:!0})],p.prototype,"analysis",void 0),i([n({constructOnly:!0})],p.prototype,"analysisViewData",void 0),i([n()],p.prototype,"cursorPoint",void 0),i([n()],p.prototype,"toolState",void 0),i([n()],p.prototype,"visible",null),i([n()],p.prototype,"testData",null),i([n()],p.prototype,"_visible",void 0),i([n()],p.prototype,"_laserLine",void 0),i([n({constructOnly:!0})],p.prototype,"laserLineEnabled",void 0),i([n()],p.prototype,"_cursorPosition",null),i([n()],p.prototype,"_startPosition",null),i([n()],p.prototype,"_endPosition",null),i([n()],p.prototype,"_lastDraggedHandle",void 0),i([n()],p.prototype,"_laserLineParams",null),i([n()],p.prototype,"_focusPosition",null),i([n()],p.prototype,"_pointDistanceLine",null),p=i([L("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],p);let h=class extends Ot{constructor(t){super(t),this._updatingHandles=new ot,this._emulatedDrag=null,this.lineState="initial",this.startPointSurfaceLocation=null,this.endPointSurfaceLocation=null,this.cursorPointSurfaceLocation=null,this.startManipulator=null,this.endManipulator=null,this.cursorManipulator=null,this._getSnappingContext=mt(e=>new At({elevationInfo:{mode:"absolute-height",offset:0},pointer:e,editGeometryOperations:new $t(new Ct("point",xt(!0,!1,this.view.spatialReference))),visualizer:new vt}))}initialize(){const{view:t,analysis:e,analysisViewData:a,visible:s}=this;this.measurementView=new p({toolState:this,view:t,analysis:e,analysisViewData:a,visible:s});const l=Tt(t);this._snappingManagerResult=l,this.addHandles(l);const{start:o,end:r,cursor:d}=this.measurementView.createManipulators(),m=(w,u,b)=>Ut(w,(_,Q,S,E)=>{const z=Pt(_),J=this._snappingManager,X=this._getSnappingContext(E),Y=this._updatingHandles,{lineState:Z}=this;S=S.next(z).next(Ht(this,[b,u])).next(g=>{if(u!=="cursorPoint"){const y=this.analysis[u];y!=null&&(_.location=y)}return g});const tt=_t(this.view),et=g=>{const y=tt(g);return y||this.lineState!=="drawing"&&this.lineState!=="initial"||(this[u]=null,this[b]=null),y};let O=Q.next(z).next(et);if(E!=="touch"||Z==="editing"){const{snappingStep:g,cancelSnapping:y}=Et({snappingManager:J,snappingContext:X,updatingHandles:Y});S=S.next(y),O=O.next(...g)}O.next(g=>g.action!=="start"?g:null).next(g=>{const y=gt(g.mapEnd,new T);this[u]=y,_.location=y,this[b]=this._surfaceLocation(y,g.surfaceType)})}),P=w=>w.events.on("grab-changed",()=>{const u=o.grabbing||r.grabbing;this.lineState=u?"editing":"measured"});this.addHandles([m(o,"startPoint","startPointSurfaceLocation"),m(r,"endPoint","endPointSurfaceLocation"),m(d,"cursorPoint","cursorPointSurfaceLocation"),P(o),P(r)]),this.manipulators.add(o),this.manipulators.add(r),this.manipulators.add(d),this.startManipulator=o,this.endManipulator=r,this.cursorManipulator=d,this.addHandles(M(()=>this.state,w=>{w==="measured"&&this.finishToolCreation()},N)),lt(this)}destroy(){this._updatingHandles=A(this._updatingHandles),this.measurementView=A(this.measurementView)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){const{analysis:t}=this;if(t.startPoint==null&&t.endPoint==null)return"ready";const{lineState:e}=this;return this.validMeasurement&&e!=="editing"&&e!=="drawing"?"measured":"measuring"}get cursor(){return this.state==="ready"||this.lineState==="drawing"?"crosshair":null}get startPoint(){return this.analysis.startPoint}set startPoint(t){this.analysis.startPoint=t}get endPoint(){return this.analysis.endPoint}set endPoint(t){this.analysis.endPoint=t}get cursorPoint(){return this.measurementView.cursorPoint}set cursorPoint(t){this.measurementView.cursorPoint=t}get snappingOptions(){return this._snappingManager.options}get validMeasurement(){return this.analysis.startPoint!=null&&this.analysis.endPoint!=null}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}onShow(){this.measurementView.show(),this._updateManipulatorAvailability()}onHide(){this.measurementView.hide()}onDeactivate(){var t;(t=this._emulatedDrag)==null||t.cancel(),this._emulatedDrag=null}onInputEvent(t){switch(t.type){case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t)}this._updateManipulatorAvailability()}_handlePointerMove(t){var d,m;if(!this.active||this.view.navigating)return;const{pointerType:e}=t;if(e!=="mouse")return;const a=I(t),{lineState:s,cursorManipulator:l,endManipulator:o}=this;let r=!1;this.cursorPoint==null&&((d=this._emulatedDrag)==null||d.cancel(),this._emulatedDrag=x(l,e,a),r=!0),s==="initial"&&((m=this._emulatedDrag)==null||m.update(a),r=!0),s==="drawing"&&(o.events.emit("drag",{action:"update",start:a,screenPoint:a}),r=!0),r&&t.stopPropagation()}_handleImmediateClick(t){var m,P,w,u,b;if(!this.active||!yt(t))return;const e=I(t),{pointerType:a}=t,{cursorManipulator:s,startManipulator:l,endManipulator:o,lineState:r}=this;let d=!1;switch(this.cursorPoint==null&&((m=this._emulatedDrag)==null||m.cancel(),this._emulatedDrag=x(s,a,e)),r){case"initial":if((P=this._emulatedDrag)==null||P.update(e),this.cursorPoint!=null){(w=this._emulatedDrag)==null||w.end(e),this._emulatedDrag=null;const{cursorPoint:_}=this;this.startPoint=_,this.startPointSurfaceLocation=this.cursorPointSurfaceLocation,l.location=_,l.interactive=!1,o.interactive=!1,this.lineState="drawing",this._emulatedDrag=x(o,a,e),d=!0}break;case"drawing":(u=this._emulatedDrag)==null||u.update(e),this.endPoint!=null&&((b=this._emulatedDrag)==null||b.end(e),this._emulatedDrag=null,l.interactive=!0,o.interactive=!0,this.lineState="measured",d=!0)}d&&t.stopPropagation()}_surfaceLocation(t,e){return e===wt.GROUND?"on-the-surface":(t.z??0)>=this._getElevation(t)?"above-the-surface":"below-the-surface"}_updateManipulatorAvailability(){this.startManipulator.available=this.analysis.startPoint!=null,this.endManipulator.available=this.analysis.endPoint!=null}_getElevation(t){return this.view.basemapTerrain.ready?Vt(this.view.elevationProvider,t)??0:0}get test(){return{snappingManager:this._snappingManager}}};function x(t,e,a){return t.events.emit("drag",{action:"start",pointerType:e,start:a,screenPoint:a}),{update:s=>t.events.emit("drag",{action:"update",start:s,screenPoint:s}),end:s=>t.events.emit("drag",{action:"end",start:s,screenPoint:s}),cancel:()=>t.events.emit("drag",{action:"cancel"})}}i([n({readOnly:!0})],h.prototype,"state",null),i([n()],h.prototype,"lineState",void 0),i([n({readOnly:!0})],h.prototype,"cursor",null),i([n()],h.prototype,"startPoint",null),i([n()],h.prototype,"endPoint",null),i([n()],h.prototype,"cursorPoint",null),i([n({constructOnly:!0})],h.prototype,"analysis",void 0),i([n({constructOnly:!0})],h.prototype,"analysisViewData",void 0),i([n()],h.prototype,"measurementView",void 0),i([n({constructOnly:!0})],h.prototype,"view",void 0),i([n({readOnly:!0})],h.prototype,"validMeasurement",null),i([n({value:null})],h.prototype,"startPointSurfaceLocation",void 0),i([n({value:null})],h.prototype,"endPointSurfaceLocation",void 0),i([n({value:null})],h.prototype,"cursorPointSurfaceLocation",void 0),i([n()],h.prototype,"updating",null),h=i([L("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],h);const It=h;let v=class extends zt{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="DirectLineMeasurement3DViewModel is only supported in 3D views.",this._userUnit=null,this._userUnitOptions=null}initialize(){this.addHandles(M(()=>({analysis:this.analysis,unit:this.unit}),({analysis:t,unit:e})=>{t!=null&&(t.unit=e)},N))}get state(){return this.disabled||!this.ready?"disabled":this.tool==null?"ready":this.tool.state}get measurement(){var o;const{tool:t}=this;if(t==null)return null;const e=()=>({text:null,state:"unavailable"}),a=r=>({text:r,state:"available"}),{analysisViewData:s}=t,l=s.result!=null;return{mode:((o=s.result)==null?void 0:o.mode)??"euclidean",directDistance:l&&s.actualVisualizedMeasurement==="euclidean"?a(s.directLabelText):e(),horizontalDistance:l?a(s.horizontalLabelText):e(),verticalDistance:l?a(s.verticalLabelText):e()}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new j}constructTool(){return new It({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(t,e){const a=this.unitOptions;return a.includes(t)?t:e?this._findSelectableUnit(e):a[0]}_filteredOrAllUnits(t){if(!t)return V.slice();const e=t.filter(a=>V.includes(a));return e.length===0?V.slice():e}};i([n({type:j})],v.prototype,"analysis",void 0),i([n({readOnly:!0})],v.prototype,"state",null),i([n({readOnly:!0})],v.prototype,"measurement",null),i([n()],v.prototype,"unitOptions",null),i([n()],v.prototype,"unit",null),i([n(ct)],v.prototype,"defaultUnit",void 0),i([n()],v.prototype,"_userUnit",void 0),i([n()],v.prototype,"_userUnitOptions",void 0),v=i([L("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],v);const K=v,W="esri-direct-line-measurement-3d",U={base:W,newMeasurementButton:`${W}__clear-button`,widgetIcon:dt.measureLine};let c=class extends ut{constructor(t,e){super(t,e),this.iconClass=U.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new K}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(t){this.viewModel.analysis=t}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}render(){const{messages:t,messagesCommon:e,unit:a,unitOptions:s,viewModel:l}=this,{active:o,measurement:r,state:d,supported:m}=l;return k("div",{"aria-label":this.messages.widgetLabel,class:this.classes(U.base,F.widget,F.panel),key:this,role:"presentation"},this.visible?k(Gt,{active:o,measurementItems:[{key:"direct",title:t.direct,value:H(r==null?void 0:r.directDistance)},{key:"horizontal",title:t.horizontal,value:H(r==null?void 0:r.horizontalDistance)},{key:"vertical",title:t.vertical,value:H(r==null?void 0:r.verticalDistance)}],messages:{...t,notApplicable:e==null?void 0:e.notApplicable},newMeasurementButtonClass:U.newMeasurementButton,state:d,supported:m,unit:a,unitOptions:s,onNewMeasurementClick:()=>{pt(this.viewModel.start())},onUnitChange:P=>{this.unit=P}}):null)}};function H(t){return(t==null?void 0:t.state)==="available"?t.text:null}i([n()],c.prototype,"view",null),i([n()],c.prototype,"visible",null),i([n()],c.prototype,"active",null),i([n({constructOnly:!0,nonNullable:!0})],c.prototype,"analysis",null),i([n()],c.prototype,"iconClass",void 0),i([n()],c.prototype,"icon",void 0),i([n()],c.prototype,"label",null),i([n(),R("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],c.prototype,"messages",void 0),i([n(),R("esri/t9n/common")],c.prototype,"messagesCommon",void 0),i([n()],c.prototype,"uiStrings",void 0),i([n({type:K})],c.prototype,"viewModel",void 0),i([n()],c.prototype,"unitOptions",null),i([n()],c.prototype,"unit",null),c=i([L("esri.widgets.DirectLineMeasurement3D")],c);const bi=c;export{bi as default};
