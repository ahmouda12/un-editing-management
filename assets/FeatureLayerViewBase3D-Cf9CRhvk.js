import{f as C,f6 as $,b5 as P,dX as O,x as o,y as n,B as f,ab as w,oG as D,E as N,gI as Q,eP as v,cR as x,eT as q,fs as R,eO as E,s as I}from"./index-DPJiPkbh.js";import{b as V,I as Z}from"./dehydratedFeatures-BVErPR64.js";import{u as j}from"./hydratedFeatures-DhDSkMoS.js";import{a as A,b as H,T as L}from"./HeatmapDensity.glsl-DC8u9_64.js";import{t as k}from"./WaterSurface.glsl-CP2trn1z.js";import{n as B}from"./LayerView3D-DQ1MECMx.js";import{E as J,c as U}from"./query-DwX36F8e.js";import{h as Y}from"./WorkerHandle-Vum6FPcM.js";import{h as G}from"./EventedSet-Bdx_ulGH.js";import{t as z}from"./EdgeShader.glsl-CSDpUb7H.js";import{C as F}from"./ElevationContext-DtSabp_5.js";import{j as K}from"./FeatureLayerView-rpO-T8eu.js";import{u as W}from"./LayerView-DYVP3cuG.js";import{i as X}from"./RefreshableLayerView-TgkXS-ig.js";class ee extends k{constructor(t,r,s,a,i,l){super(t.usedMemory,t.displayedFeatures,t.totalFeatures,t.maximumFeatures,t.nodes,t.core),this.storedFeatures=r,this.totalVertices=s,this.partial=a,this.mode=i,this.symbolComplexity=l}}class te{constructor(t){this._controller=t,this._handle=new se(r=>t.schedule(r))}destroy(){this._handle.destroy()}invoke(t,r){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof C&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,r).then(s=>{let a=0,i=0;const l=C.fromJSON(s.spatialReference);s.spatialReference=l;const u=async h=>{const d=s.fields;if(d){for(;a<d.length;)if(d[a]=$.fromJSON(d[a]),a++,h.madeProgress())return this._controller.reschedule(g=>u(g))}const M=s.features;for(;i<M.length;){const g=M[i];++i,g.uid=P.generateUID();const b=g.geometry;if(b!=null&&(b.spatialReference=l,re(b),h.madeProgress()))return this._controller.reschedule(T=>u(T))}return s};return this._controller.schedule(h=>u(h))})):Promise.resolve(null)}}function re(e){switch(e.type){case"polyline":e.paths.reduce((t,r)=>t+r.length,0)<O&&(e.paths=e.hasZ||e.hasM?e.paths.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.paths.map(t=>t.map(r=>[r[0],r[1]])));break;case"polygon":e.rings.reduce((t,r)=>t+r.length,0)<O&&(e.rings=e.hasZ||e.hasM?e.rings.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.rings.map(t=>t.map(r=>[r[0],r[1]])))}}class se extends Y{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:r=>[r.buffer]},t)}}let p=class extends w{constructor(e){super(e)}get implicitFields(){var s;if(!((s=this.layer.outFields)==null?void 0:s.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),r=new Set(this.layerView.availableFields);return D(r,t)}get queryFeaturesDehydrated(){var i;const{layer:e}=this,t=e.capabilities,r=t&&t.query,s=r&&r.supportsFormatPBF,a=e.parsedUrl;if(s){this._decoder==null&&(this._decoder=new te(this.controller));const l={sourceSpatialReference:((i=e.spatialReference)==null?void 0:i.toJSON())??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:S};return(u,h)=>J(a,u,"pbf",this._createRequestOptions(h)).then(d=>(N(h),this._decoder!=null?this._decoder.invoke({buffer:d.data,options:l},h.signal):Promise.reject(Q())))}return(l,u)=>U(a,l,e.spatialReference,this._createRequestOptions(u)).then(h=>V(h.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:S}))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=v(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query}}}};o([n({constructOnly:!0})],p.prototype,"layer",void 0),o([n({constructOnly:!0})],p.prototype,"layerView",void 0),o([n({constructOnly:!0})],p.prototype,"controller",void 0),o([n({readOnly:!0})],p.prototype,"implicitFields",null),o([n({readOnly:!0})],p.prototype,"queryFeaturesDehydrated",null),p=o([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],p);let y=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};o([n({constructOnly:!0})],y.prototype,"layer",void 0),o([n({readOnly:!0})],y.prototype,"queryFeaturesDehydrated",null),y=o([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],y);let _=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};o([n({constructOnly:!0})],_.prototype,"layer",void 0),_=o([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],_);let m=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(V,r=>{if(r&&r.name==="query-features-json:unsupported")return this.layer.queryFeatures(e,t);throw r})}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};function ie(e,t){const{layer:r}=e;return r.type==="feature"&&r.source.type==="feature-layer"?r.infoFor3D!=null?new y({layer:r}):new p({layer:r,layerView:e,controller:t}):r.type==="feature"&&r.source.type==="memory"||r.type==="csv"||r.type==="geojson"||r.type==="oriented-imagery"||r.type==="wfs"?new m({layer:r,source:r.source}):r.type==="ogc-feature"?new _({layer:r}):null}o([n({constructOnly:!0})],m.prototype,"layer",void 0),o([n({constructOnly:!0})],m.prototype,"source",void 0),m=o([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],m);const S=1024;class oe{constructor(t){this._memoryCache=null,this._capabilities=null;const r=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const s=this._layerView.view.resourceController;this.query=ie(this._layerView,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(`fl-${r.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=v(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this._layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=A(this._layerView.layer)),this._capabilities}logFetchError(t,r){t.error("#fetchTile()",this._layerView.layer,(r==null?void 0:r.message)??r)}}let c=class extends X(H(K(B(W)))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles([x(()=>this._updatingRequiredFieldsPromise,e=>this._updatingHandles.addPromise(e),q),x(()=>({controller:this.controller,suspended:this.suspended}),({controller:e,suspended:t})=>{e&&!t&&this._needsRefresh&&(e.refetch(),this._needsRefresh=!1)})])}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=v(this._fetcherContext)}get maximumNumberOfFeatures(){var e;return((e=this.controller)==null?void 0:e.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var r,s;let e=0;if((r=this.controller)!=null&&r.updating){const a=this.controller.updatingRemaining,i=Math.max(this.controller.updatingTotal,this._controllerTotal);i>0&&(e=(i-a)/i,this._controllerTotal=i)}let t=0;if((s=this.processor)!=null&&s.updating){const a=this.processor.updatingRemaining,i=Math.max(a,this._processorTotal);i>0&&(t=(i-a)/i,this._processorTotal=i)}return .5*(e+t)}get updatePolicy(){if(!this.controller)return F.ASYNC;switch(this.controller.mode){case"snapshot":{const e=ae.get(this.layer.geometryType);return e==null||this.controller.serviceDataCount>e?F.ASYNC:F.SYNC}case"tiles":return F.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&e.returnZ!=null?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&e.returnM!=null&&e.returnM}setVisibility(e,t){var r;(r=this.processor)==null||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new oe({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new L({layerView:this,context:this._fetcherContext,graphics:new G,extent:this.clippingExtent});return this._updatingHandles.add(()=>e.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},R),this.addHandles(x(()=>this.suspended,t=>{t?e.suspend():e.resume()},q)),this._updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>e.displayFeatureLimit=t,R),this.addHandles(E(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),e}async doRefresh(e){const{controller:t,processor:r,suspended:s}=this;e&&t&&(s?this._needsRefresh=!0:(t.refetch(),this._needsRefresh=!1)),r.refreshFilter()}_popupFeatureHasRequiredFields(e,t){if(!super._popupFeatureHasRequiredFields(e,t))return!1;const r=Z(e,this.layer.objectIdField);if(r==null)return!0;const s=this.controller.getMissingAttributesForFeature(r);if(s==null)return!0;for(const a of t)if(s.has(a))return!1;return!0}get usedMemory(){var e,t;return(((e=this.processor)==null?void 0:e.usedMemory)??0)+(((t=this.controller)==null?void 0:t.memoryForUnusedFeatures)??0)}get unloadedMemory(){var a,i,l,u;const e=((a=this.processor)==null?void 0:a.unprocessedMemoryEstimate)??0,t=((i=this.controller)==null?void 0:i.expectedFeatureDiff)??0,r=((l=this.processor)==null?void 0:l.loadedFeatures)??0,s=r+t>0?r/(r+t):1;return e+t*(((u=this.processor)==null?void 0:u.usedMemoryPerFeature)??0)*s}get ignoresMemoryFactor(){var e;return(e=this.controller)==null?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e!=null&&e.outStatistics||this.graphics3DProcessor==null)return r;const s=this.layer.objectIdField,a=this.graphics3DProcessor.graphics3DGraphicsByObjectID,i=[];for(const l of r.features)if(l.geometry){const u=a.get(l.attributes[s]);u&&(l.geometry=j(u.graphic.geometry),i.push(l))}else i.push(l);return r.features=i,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=s=>{throw new I("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of r)e[s]!=null&&t(s);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),e.outSpatialReference==null||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get performanceInfo(){var s,a,i,l,u,h;const e=(s=this.controller)==null?void 0:s.displayFeatureLimit,t=e!=null?e.averageSymbolComplexity:void 0,r=t!=null?`f:${t.verticesPerFeature},v:${t.verticesPerCoordinate}`:"n/a";return new ee(super.performanceInfo,((i=(a=this.controller)==null?void 0:a.performanceInfo)==null?void 0:i.storedFeatures)??0,((u=(l=this.controller)==null?void 0:l.performanceInfo)==null?void 0:u.totalVertices)??0,this.maximumNumberOfFeaturesExceeded,((h=this.controller)==null?void 0:h.mode)??"n/a",r)}get test(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:(e=this.controller)==null?void 0:e.graphics,...this.getTest()}}};o([n()],c.prototype,"layer",void 0),o([n()],c.prototype,"controller",void 0),o([n()],c.prototype,"_controllerTotal",void 0),o([n()],c.prototype,"_processorTotal",void 0),o([n()],c.prototype,"_needsRefresh",void 0),o([n()],c.prototype,"maximumNumberOfFeatures",null),o([n()],c.prototype,"maximumNumberOfFeaturesExceeded",null),o([n(z)],c.prototype,"updatingProgress",void 0),o([n({readOnly:!0})],c.prototype,"updatingProgressValue",null),o([n({readOnly:!0})],c.prototype,"updatePolicy",null),o([n({readOnly:!0})],c.prototype,"hasZ",null),o([n({readOnly:!0})],c.prototype,"hasM",null),o([n()],c.prototype,"suspendResumeExtentMode",void 0),c=o([f("esri.views.3d.layers.FeatureLayerViewBase3D")],c);const ae=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),be=c;export{be as w};