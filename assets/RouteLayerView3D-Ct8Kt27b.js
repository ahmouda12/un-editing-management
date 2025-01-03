import{fs as c,eO as d,eP as u,hF as y,bh as l,cR as h,x as o,y as s,B as g}from"./index-DPJiPkbh.js";import{m as f,c as b,O as I,f as O,j as _,g as w}from"./RouteInfo-C7sMDDOb.js";import{O as v}from"./Stop-BAZm37fq.js";import{n as V}from"./LayerView3D-DQ1MECMx.js";import{O as S}from"./GraphicsProcessor-BzPtV4sB.js";import{t as G}from"./WaterSurface.glsl-CP2trn1z.js";import{l as C}from"./projectExtentUtils-B-47QWDH.js";import{h as $}from"./EventedSet-Bdx_ulGH.js";import{C as P}from"./ElevationContext-DtSabp_5.js";import{u as R}from"./LayerView-DYVP3cuG.js";import"./heightModelInfoUtils-irmNrBgu.js";import"./hydratedFeatures-DhDSkMoS.js";import"./Graphics3DScaleVisibility-CuBNd7V0.js";import"./dehydratedFeatures-BVErPR64.js";import"./Scheduler-B7taRppB.js";import"./debugFlags-BTuu0IjQ.js";import"./RenderState-DaVlEYWY.js";import"./rendererConversion-B4ViyOJh.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedGeometry-DLPswkPy.js";import"./optimizedFeatureQueryEngineAdapter-DY8fepQr.js";import"./centroid-DdLmOD72.js";import"./ColorMaterial.glsl-yoRZJYnh.js";import"./mat3-CakTilsz.js";import"./BufferView-D7hl-e1J.js";import"./IntegerPassUniform-Cz4js9jy.js";import"./enums-DSseSvdG.js";import"./Texture-BRxaK8g9.js";import"./BindType-BmZEZMMh.js";import"./interfaces-CGza0uBR.js";import"./Util-C76gCxal.js";import"./VertexAttribute-BnAa5VW0.js";import"./basicInterfaces-DngWxyLO.js";import"./ShaderTechniqueConfiguration-Ba2Oo7i0.js";import"./doublePrecisionUtils-B0owpBza.js";import"./Material-CcaRhBp-.js";import"./ContentObject-tLjB2Ud3.js";import"./requestImageUtils-QtRT18sL.js";import"./InterleavedLayout-nriK6Yun.js";import"./types-D0PSWh4d.js";import"./VertexColor.glsl-COPd45YS.js";import"./OrderIndependentTransparency-Dar7ikM6.js";import"./floatRGBA-CHZINRxm.js";import"./PooledRBush-_7CFgxlo.js";import"./quickselect-deeG3Iol.js";import"./ElevationProvider-DuAnZ1w5.js";import"./boundedPlane-C7AEtm0i.js";import"./lineSegment-BXFQuctu.js";import"./verticalOffsetUtils-5CRVG66a.js";import"./orientedBoundingBox-BABDZfWD.js";import"./quat-B_RTSvGc.js";import"./spatialReferenceEllipsoidUtils-MJ9Uj9G-.js";import"./computeTranslationToOriginAndRotation-DJULrcwj.js";import"./Attribute-B-NAci_J.js";import"./popupUtils-DP5YqEgW.js";import"./Geometry-BiufU1jP.js";import"./Indices-ijvqWnhD.js";import"./triangle-aMXw_G3u.js";import"./vec2f32-BbH2jxlN.js";import"./featureConversionUtils-DQOpYys3.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./edgeUtils-BrtbNrdR.js";import"./earcut-nZVQjWaZ.js";import"./DoubleArray-MGZZXTmk.js";import"./vec3-CkCkHRdL.js";import"./SnappingCandidate-O5eRSE6e.js";import"./triangulationUtils-19KnAipc.js";import"./deduplicate-BSZzOE1N.js";import"./Normals-D9FGVH8S.js";import"./RealisticTree.glsl-mVrbbLCg.js";import"./DefaultMaterial_COLOR_GAMMA-KFGBhAW-.js";import"./resourceUtils-BOaxdhtD.js";import"./NestedMap-DgiGbX8E.js";import"./symbolColorUtils-PbK7g70N.js";import"./CIMSymbolHelper-Do5YMnYc.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CPCkP0Vo.js";import"./GeometryUtils-CYtATAOa.js";import"./enums-BRqP_wXA.js";import"./definitions-B54owTRu.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BhuXqU4L.js";import"./line-BSkXm7S3.js";import"./projectVectorToPoint-iRqWB51r.js";import"./MeshComponent-h79hEkUa.js";import"./imageUtils-CbDOqHX3.js";import"./meshVertexSpaceUtils-BjFcMx2J.js";import"./MeshLocalVertexSpace-BiaaX75A.js";import"./georeference-18LDVEFC.js";import"./axisAngleDegrees-B1MWDIoz.js";import"./interfaces-DkjgzG8v.js";import"./frustum-0hRlYIm-.js";import"./DefaultLayouts-Drvj0JwT.js";import"./glUtil-DS73TAjp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Octree-CGixHoMx.js";import"./BufferObject-wa67LmxE.js";import"./Intersector-ovsF6jeJ.js";import"./weather-Ce7bakF4.js";import"./geometryServiceUtils-B1dYTJN2.js";import"./Intersector-G-a_ey6X.js";import"./VertexArrayObject-BGsrrzff.js";import"./vec3f32-Cw9Q6TO_.js";function E(t){return t instanceof f||t instanceof b||t instanceof I||t instanceof O||t instanceof _||t instanceof w||t instanceof v}let e=class extends V(R){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new $,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new S({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),c),this.addResolvingPromise(C(this).then(t=>this.fullExtentInLocalViewSpatialReference=t)),this.addHandles(d(()=>{var t,r;return(r=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:r.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var t;this._updatingHandles.removeAll(),this._set("processor",u(this.processor)),(t=this._get("_routeItems"))==null||t.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null]})}_routeItemsChanged(t){if(t.removed.length){this.loadedGraphics.removeMany(t.removed.map(r=>{const i=this._byObjectID.get(r);return this._byObjectID.delete(r),i}));for(const r of t.removed)this.removeHandles(r)}if(t.added.length){this.loadedGraphics.addMany(t.added.map(r=>{const i=r.toGraphic();return this._byObjectID.set(r,i),i}));for(const r of t.added)this.addHandles([h(()=>r.geometry,(i,p)=>{this._updateGraphic(r,"geometry",i,p)}),h(()=>r.symbol,(i,p)=>{this._updateGraphic(r,"symbol",i,p)})],r)}}get legendEnabled(){var t;return this.canResume()&&!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}getSuspendInfo(){var r,i;const t=super.getSuspendInfo();return t.outsideScaleRange=((r=this.processor)==null?void 0:r.scaleVisibilitySuspended)??!1,t.outsideOfView=((i=this.processor)==null?void 0:i.frustumVisibilitySuspended)??!1,t}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,r){return this.processor.whenGraphicBounds(t,r)}computeAttachmentOrigin(t,r){var i;return(i=this.processor)==null?void 0:i.computeAttachmentOrigin(t,r)}getSymbolLayerSize(t,r){return this.processor.getSymbolLayerSize(t,r)}async queryGraphics(){return new l(this.loadedGraphics.toArray())}maskOccludee(t){return this.processor.maskOccludee(t)}highlight(t){return E(t)&&(t=this._byObjectID.get(t)),this.processor.highlight(t)}get updatePolicy(){var t;return((t=this.processor)==null?void 0:t.graphicsCore.effectiveUpdatePolicy)||P.SYNC}canResume(){var t;return super.canResume()&&!((t=this.processor)!=null&&t.scaleVisibilitySuspended)}isUpdating(){var t,r,i;return!(!((t=this.processor)!=null&&t.updating)&&((i=(r=this.view)==null?void 0:r.basemapTerrain)!=null&&i.ready))}get performanceInfo(){var t,r;return new G(((t=this.processor)==null?void 0:t.graphicsCore.usedMemory)??0,this.loadedGraphics.length,-1,-1,0,((r=this.processor)==null?void 0:r.graphicsCore.performanceInfo)??null)}_updateGraphic(t,r,i,p){var a;const n=this._byObjectID.get(t);n[r]=i,m.graphic=n,m.property=r,m.oldValue=p,m.newValue=i,(a=this.processor)==null||a.graphicsCore.graphicUpdateHandler(m)}};o([s()],e.prototype,"_routeItems",null),o([s()],e.prototype,"loadedGraphics",void 0),o([s({readOnly:!0})],e.prototype,"legendEnabled",null),o([s()],e.prototype,"layer",void 0),o([s({readOnly:!0})],e.prototype,"processor",void 0),o([s({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0),e=o([g("esri.views.3d.layers.RouteLayerView3D")],e);const m={graphic:null,property:null,oldValue:null,newValue:null},Cr=e;export{Cr as default};