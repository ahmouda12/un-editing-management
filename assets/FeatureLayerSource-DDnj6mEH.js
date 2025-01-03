const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/uploadAssets-DPmwNTmD.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/External-B04G2qXv.js","assets/progressUtils-BvsolsA_.js"])))=>i.map(i=>d[i]);
import{C as L,x as F,y as I,aH as P,aI as Q,aJ as J,aK as x,v as p,aE as v,aL as D,aM as j,aN as V,aO as G,s as _,aP as H,a6 as B,aQ as K,aR as W,V as k,_ as z,aS as X,aT as Y,a9 as Z,aU as U,aV as tt,f as et,aW as at,aX as st,B as rt,aa as it}from"./index-DPJiPkbh.js";import{g as nt,a as ot}from"./meshVertexSpaceUtils-BjFcMx2J.js";import{v as ut}from"./External-B04G2qXv.js";import{R as T,p as C,g as lt,m as ct,h as dt,b as pt,I as ht}from"./applyEditsUtils-DMd_MlJ6.js";import{o as yt}from"./clientSideDefaults-0nTOCPeM.js";import{x as mt}from"./QueryTask-CvH0ENug.js";import{s as ft}from"./executeQueryJSON-BsORPFGP.js";import"./MeshLocalVertexSpace-BiaaX75A.js";import"./vec3-CkCkHRdL.js";import"./editingSupport-C_PJngvD.js";import"./normalizeUtils-CVZirBXT.js";import"./normalizeUtilsCommon-DTYpWx_K.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./executeForIds-BLyE-yg7.js";import"./query-DwX36F8e.js";import"./pbfQueryUtils-DlRCjCDR.js";import"./pbf-BAzJBNw5.js";import"./OptimizedGeometry-DLPswkPy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryPBF-JS3Z4FyF.js";import"./featureConversionUtils-DQOpYys3.js";const gt=new L({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),wt=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),qt=new L({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let O=class extends P{constructor(){super(...arguments),this.type="feature-layer",this.refresh=Q(async()=>{var a,s;await this.load();const e=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,a=this._fetchService(t,{...e}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e)).then(()=>this._ensureLatestMetadata(e));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var d;const{capabilities:e,parsedUrl:t,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=J("featurelayer-pbf")&&(e==null?void 0:e.query.supportsFormatPBF)&&s==null,u=((d=e==null?void 0:e.operations)==null?void 0:d.supportsQueryAttachments)??!1;return new mt({url:t.path,pbfSupported:o,fieldsIndex:i,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:a}=this;await x(a,"editing");const s=e.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,n.query);try{const o=await p(r,{body:i});return T(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,a){await this.load();const{layer:s}=this;await x(s,"editing");const r=e.attributes[s.objectIdField],n=s.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(a,i.query);try{const u=await p(n,{body:o});return T(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(e,t){var y,S,A,N,$,M;await this.load();const{layer:a}=this;await x(a,"editing");const s=a.infoFor3D,r=s!=null,n=r||((t==null?void 0:t.globalIdUsed)??!1),i=r?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,o=((y=e.addFeatures)==null?void 0:y.map(m=>C(this.layer,m,s)))??[],u=(await Promise.all(o)).filter(v),d=((S=e.updateFeatures)==null?void 0:S.map(m=>C(this.layer,m,s)))??[],c=(await Promise.all(d)).filter(v),g=lt(this.layer,e.deleteFeatures,n);D(u,c,a.spatialReference);const f=await ct(this.layer,e),R=a.capabilities.editing.supportsAsyncApplyEdits&&r,w=(t==null?void 0:t.gdbVersion)||a.gdbVersion,l={gdbVersion:w,rollbackOnFailure:t==null?void 0:t.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:t==null?void 0:t.returnEditMoment,usePreviousEditMoment:t==null?void 0:t.usePreviousEditMoment,async:R};await j(this.layer.url,w,!0);const b=V(this.layer.url,w||null);if(await G(a.url,w,a.historicMoment))throw new _("feature-layer-source:historic-version","Editing a historic version is not allowed");t!=null&&t.returnServiceEditsOption?(l.edits=JSON.stringify([{id:a.layerId,adds:u,updates:c,deletes:g,attachments:f,assetMaps:i}]),l.returnServiceEditsOption=gt.toJSON(t==null?void 0:t.returnServiceEditsOption),l.returnServiceEditsInSourceSR=t==null?void 0:t.returnServiceEditsInSourceSR):(l.adds=u.length?JSON.stringify(u):null,l.updates=c.length?JSON.stringify(c):null,l.deletes=g.length?n?JSON.stringify(g):g.join(","):null,l.attachments=f&&JSON.stringify(f),l.assetMaps=i!=null?JSON.stringify(i):void 0);const h=this._getLayerRequestOptions({method:"post",query:l});b&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=H);const q=t!=null&&t.returnServiceEditsOption?a.url:a.parsedUrl.path;let E;try{E=R?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}catch(m){if(!dt(m))throw m;h.authMode="immediate",E=R?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}if(!((A=a.capabilities.operations)!=null&&A.supportsEditing)&&(($=(N=a.effectiveCapabilities)==null?void 0:N.operations)!=null&&$.supportsEditing)){const m=(M=it)==null?void 0:M.findCredential(a.url);await(m==null?void 0:m.refreshToken())}return this._createEditsResult(E)}async deleteAttachments(e,t){await this.load();const{layer:a}=this;await x(a,"editing");const s=e.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await p(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(T)}catch(n){throw this._createAttachmentErrorResult(s,n)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const a=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:n}=await p(`${r}/${s}`,a),{id:i,extent:o,fullExtent:u,timeExtent:d}=n,c=o||u;return{id:i,fullExtent:c&&B.fromJSON(c),timeExtent:d&&K.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){await this.load();const a=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){var s;await this.load();const a=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return(s=e.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var i;const n=r.attributes;(i=e.outStatistics)==null||i.forEach(({outStatisticFieldName:o})=>{if(o){const u=o.toLowerCase();u&&u in n&&o!==u&&(n[o]=n[u],delete n[u])}})}),a}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!W(this.layer.url))return"unavailable";const e=k(this.layer.url,"status"),t=await p(e,{query:{f:"json"}});return qt.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:a}=await z(()=>import("./uploadAssets-DPmwNTmD.js"),__vite__mapDeps([0,1,2,3,4]));return a(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const a=(await p(e,t)).data.statusUrl;for(;;){const s=(await p(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return p(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new _("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new _("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await X(St)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const s={};J("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),t!=null&&t.cacheBust&&(s._ts=Date.now());const{data:r}=await p(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:t==null?void 0:t.signal}));e=r}this.sourceJSON=await this._patchServiceJSON(e,t==null?void 0:t.signal);const a=e.type;if(!wt.has(a))throw new _("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(e,t){var a;if(e.type!=="Table"&&e.geometryType&&!((a=e==null?void 0:e.drawingInfo)!=null&&a.renderer)&&!e.defaultSymbol){const s=yt(e.geometryType).renderer;Y("drawingInfo.renderer",s,e)}if(e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e.extent==null)try{const{data:s}=await p(this.layer.url,this._getLayerRequestOptions({signal:t}));s.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){Z(s)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!(t!=null&&t.length))return null;const a=await this._filterRedundantAssetMaps(t);if(!(t!=null&&t.length))return null;const s=new Array,r=new Map;for(const n of a){const{geometry:i}=n,{vertexSpace:o}=i;if(nt(o))s.push(i);else{const u=ot(i);r.set(u,i),n.geometry=u,s.push(u)}}await this.uploadAssets(s);for(const[n,i]of r)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of e){const n=r.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(s),u=r.getAttribute(a);if(o.length===0){U.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(ut)??o[0];for(const c of d)c.parts.length===1?t.push({globalId:tt(),parentGlobalId:u,assetName:c.assetName,assetHash:c.parts[0].partHash,flags:[]}):U.getLogger(this).error(`Skipping asset ${c.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(t))for(const i of t)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===a&&(r={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else r=t;const n=pt(r);if(s.length>0){n.editedFeatureResults=[];for(const i of s){const{editedFeatures:o}=i,u=o!=null&&o.spatialReference?new et(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:ht(o,u)})}}return n}_createAttachmentErrorResult(e,t){var r;const a=((r=t.details.messages)==null?void 0:r[0])||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new _("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const s in t){const r=t[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=t;if(s==null||a==null)return e;const n=at(s);if(n==null)return e;const i=k(r.path,`../${n.id}`),o=new Array,u=new Array;for(const l of e)l.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(l):o.push(l);const d=u.map(l=>l.getAttribute(a)).filter(v);if(d.length===0)return e;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:g}}=s,f=new st;f.where=`${c} IN (${d.map(l=>`'${l}'`)})`,f.outFields=[g,c],f.returnGeometry=!1;const R=await ft(i,f),{features:w}=R;return w.length===0?e:[...o,...u.filter(l=>{const b=l.getAttribute(a);if(!b)return!0;const{metadata:h}=l.geometry,q=w.filter(y=>y.getAttribute(c)===b);if(q.length===0)return!0;const E=q.map(y=>y.getAttribute(g));return h.getExternalSourcesOnService(r).flatMap(({source:y})=>y.flatMap(S=>S.parts.map(A=>A.partHash))).some(y=>E.every(S=>y!==S))})]}};F([I()],O.prototype,"type",void 0),F([I({constructOnly:!0})],O.prototype,"layer",void 0),F([I({readOnly:!0})],O.prototype,"queryTask",null),O=F([rt("esri.layers.graphics.sources.FeatureLayerSource")],O);const St=1e3,jt=O;export{jt as default};