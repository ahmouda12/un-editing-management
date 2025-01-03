import{ab as v,eQ as S,fs as y,g0 as w,cR as b,g1 as k,g5 as E,E as c,g6 as F,g3 as C,ac as I,eH as $,cI as P,g7 as g,dr as A,g8 as G,f1 as H,g9 as R,x as a,y as l,B as x,g4 as O,ga as z}from"./index-B252NKV0.js";import{t as Z}from"./memoize-DsJmrG76.js";import{a as M}from"./normalizeUtilsSync-DOwl-Fyb.js";import{o as L}from"./featureConversionUtils-BVsMNPzF.js";import{t as W}from"./OptimizedFeature-CXeSoBCN.js";import{m as j}from"./FeatureStore-DGgGcpyF.js";import{$ as q}from"./QueryEngine-BJrJiLD2.js";import{o as J,a as N}from"./queryEngineUtils-Dy692nS8.js";import{i as m,r as T,n as _}from"./symbologySnappingCandidates-BwcdZgtr.js";import{I as U}from"./Scheduler-D2EdV-K_.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./BoundsStore-BVeO8mTT.js";import"./PooledRBush-BMw2Tug7.js";import"./quickselect-CDrMhodd.js";import"./timeSupport-C0A6H9UZ.js";import"./normalizeUtils-PvjooRb6.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DY8fepQr.js";import"./centroid-DdLmOD72.js";import"./WhereClause-BU9DyVxJ.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DTu9e8kw.js";import"./utils-BAXu7jWt.js";import"./ClassBreaksDefinition-CDnaW8Xp.js";import"./SnappingCandidate-O5eRSE6e.js";import"./VertexSnappingCandidate-h3WrW2Xz.js";import"./PointSnappingHint-8hfTACiZ.js";import"./debugFlags-BYwEz_hP.js";import"./RenderState-DaVlEYWY.js";const f="graphics-collections";let r=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return m();const s=async(o,n)=>(await O(e.whenLayerView(t),n)).elevationAlignPointsInFeatures(o,n);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:s})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",s=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&s?_(s,async(o,n)=>{const p=await e.whenLayerView(t);return c(n),p.queryForSymbologySnapping({candidates:o,spatialReference:e.spatialReference},n)}):_()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new S,this._memoizedMakeGetGroundElevation=Z(J)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const s of i)this._addMany(s.graphics.toArray()),this.addHandles([s.on("graphic-update",o=>this._onGraphicUpdate(o)),this._updatingHandles.addOnCollectionChange(()=>s.graphics,o=>this._onGraphicsChanged(o))],f)},y);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{w(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),b(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),y),k(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:s}}=e,o=await E(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const n=this._memoizedMakeGetGroundElevation(this.view,s),p=o.flat().map(d=>N(d,n));return F(i,p),p}async _fetchCandidatesForSource(e,t,i){var u;const s=C(t,((u=this.view)==null?void 0:u.type)??"2d"),o=await e.queryEngine.executeQueryForSnapping(s,i);c(i);const n=await this._snappingElevationAligner.alignCandidates(o.candidates,t.coordinateHelper.spatialReference,i);c(i);const p=await this._symbologySnappingFetcher.fetch(n,i);c(i);const d=p.length===0?n:[...n,...p];return this._snappingElevationFilter.filter(s,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const s of e)s.geometry!=null&&(this._needsInitializeProjection(s.geometry.spatialReference)?(t.push(s.geometry.spatialReference),i.set(s.uid,s)):this._add(s));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=I(async n=>{await $(e.map(p=>({source:p,dest:this.spatialReference})),{signal:n}),this._markLoadedSpatialReferences(e);for(const[,p]of t)this._add(p)});this._updatingHandles.addPromise(i.promise);const s={task:i,graphics:t},o=()=>z(this._pendingAdds,s);i.promise.then(o,o),this._pendingAdds.push(s)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=P.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const s=this._createOptimizedFeature(e.uid,t);s!=null&&(i.featureStore.add(s),g(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!A(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=G(M(t),this.spatialReference);if(!i)return null;const s=this._ensureGeometryHasZ(i),o=L(s,this._hasZ,!1);return new W(o,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=s=>{for(;s.length<3;)s.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(s=>s.forEach(t));break;case"polygon":i.rings.forEach(s=>s.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=H.toJSON(e),i=this._hasZ,s=new j({geometryType:t,hasZ:i,hasM:!1});return{featureStore:s,queryEngine:new q({featureStore:s,fieldsIndex:R.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:U.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),g(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:s,multipoint:o}=this._sources,n=[];return t!=null&&n.push(e(t)),i!=null&&n.push(e(i)),s!=null&&n.push(e(s)),o!=null&&n.push(e(o)),n}};a([l()],r.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],r.prototype,"layerSource",void 0),a([l({constructOnly:!0})],r.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],r.prototype,"view",void 0),a([l({readOnly:!0})],r.prototype,"updating",null),a([l({readOnly:!0})],r.prototype,"availability",void 0),a([l()],r.prototype,"_hasZ",null),a([l()],r.prototype,"_snappingElevationAligner",null),a([l()],r.prototype,"_snappingElevationFilter",null),a([l()],r.prototype,"_symbologySnappingFetcher",null),a([l()],r.prototype,"_extrudedPolygonSymbolsCount",void 0),r=a([x("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],r);const h="OBJECTID";export{r as GraphicsSnappingSource};