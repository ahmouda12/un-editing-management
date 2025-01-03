import{bh as m,hF as u,fs as _,aE as p,bH as c,cR as g,x as n,y as d,B as w}from"./index-B252NKV0.js";import{m as y,c as f,O as k,f as M,j as V,g as v}from"./RouteInfo-BfovNY3J.js";import{O as I}from"./Stop-BJRew4xX.js";import{t as F}from"./highlightReasons-DkCnfpXT.js";import{m as G}from"./LayerView2D-B2XPas4a.js";import{t as H}from"./GraphicContainer-BYq8MfHQ.js";import{$}from"./GraphicsView2D-1nlIBwo4.js";import{u as C}from"./LayerView-D2pvr0Q6.js";import"./Tile-DcDRio1X.js";import"./quickselect-CDrMhodd.js";import"./TileKey-Dt_FQSdw.js";import"./scaleUtils-BKVOuLFd.js";import"./Container-D0mzr_VC.js";import"./DefaultUI-4DBz9mkp.js";import"./ReactiveMap-DcQhQdHv.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-CYfboRg2.js";import"./mat2df64-CBKYtunK.js";import"./mat3-DPPMYMhB.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-PvjooRb6.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-yeijlTke.js";import"./Compass-BqUvL1gL.js";import"./utils-DsJqvptN.js";import"./GoTo-B08Csiw_.js";import"./NavigationToggle-DNdSP6VQ.js";import"./Zoom-BQUhauBk.js";import"./EffectView-CzpqZJb_.js";import"./DisplayObject-B2mbaom_.js";import"./definitions-B54owTRu.js";import"./enums-DSseSvdG.js";import"./Texture-BT-WYJiR.js";import"./ClipRect-CGrUtOuF.js";import"./AGraphicContainer-BShFLEDT.js";import"./TechniqueInstance-CZlcBeKW.js";import"./UpdateTracking2D-DZm4ygQJ.js";import"./TurboLine-DvArdm2j.js";import"./enums-BRqP_wXA.js";import"./earcut-gCDAS0gj.js";import"./GeometryUtils-BvoQHMVi.js";import"./OptimizedGeometry-DLPswkPy.js";import"./CIMSymbolHelper-ZEeHC0zq.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-oEBemou-.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BhuXqU4L.js";import"./LabelMetric-DyGbq7CL.js";import"./Program-wFflZSL5.js";import"./BufferObject-DdM-Y0w0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DsJryf9x.js";import"./constants-D5zmR9t2.js";import"./TileContainer-gaWyHmtV.js";import"./WGLContainer-GIR_kCuW.js";import"./VertexArrayObject-adc8SYn-.js";import"./WGLBrushVTLSymbol---yR8o1P.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-D_F9StYA.js";import"./DefaultVertexAttributeLayouts-o8Fw2Bif.js";import"./featureConversionUtils-BVsMNPzF.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-D85xG_gV.js";import"./heatmapTextureUtils-BX_wQ43L.js";import"./QueueProcessor-CvAp86Lk.js";import"./vec3f32-Cw9Q6TO_.js";import"./AttributeStore-C-fB6HAG.js";import"./labelFormatUtils-H994QWFK.js";import"./centroid-DdLmOD72.js";import"./timeSupport-C0A6H9UZ.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DOwl-Fyb.js";const b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],s={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof I}function U(t){return m.isCollection(t)&&t.length&&l(t.at(0))}function O(t){return Array.isArray(t)&&t.length>0&&l(t[0])}let a=class extends G(C){constructor(){super(...arguments),this._graphics=new m,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new m([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter(({popupTemplate:e})=>!!e)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:O(t)?t.map(r=>this._getNetworkFeatureUid(r)):U(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const e=i.filter(p);return e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}async hitTest(t,i){if(this.suspended)return null;const e=this._graphicsView.hitTest(t).filter(p).map(o=>this._networkGraphicMap.get(o));if(!e.length)return null;const{layer:r}=this;return e.reverse().map(o=>({type:"route",layer:r,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),e=new H(t.featuresTilingScheme);this._graphicsView=new $({container:e,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(e),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return b.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;e===0?this._highlightIds.delete(i):this._highlightIds.set(i,e)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const e=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(e),e}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const e=this._createGraphic(i);return e.symbol==null?null:(this._networkFeatureMap.set(i,e),this._networkGraphicMap.set(e,i),e)}).filter(p));for(const i of t.added)this.addHandles([g(()=>i.geometry,(e,r)=>{this._updateGraphic(i,"geometry",e,r)}),g(()=>i.symbol,(e,r)=>{this._updateGraphic(i,"symbol",e,r)})],i);this._graphics.sort((i,e)=>this._getDrawOrder(i)-this._getDrawOrder(e))}}_updateGraphic(t,i,e,r){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const o=this._networkFeatureMap.get(t);o[i]=e,s.graphic=o,s.property=i,s.oldValue=r,s.newValue=e,this._graphicsView.graphicUpdateHandler(s)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=F("highlight");this._graphicsView.setHighlight(t.map(e=>({objectId:e,highlightFlags:i})))}};n([d()],a.prototype,"_graphics",void 0),n([d()],a.prototype,"_routeItems",null),a=n([w("esri.views.2d.layers.RouteLayerView2D")],a);const si=a;export{si as default};