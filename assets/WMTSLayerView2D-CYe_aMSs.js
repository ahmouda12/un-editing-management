import{G as m,bF as c,aU as _,x as u,y as w,B as g}from"./index-DPJiPkbh.js";import{r as I,n as f}from"./imageUtils-DF6RQXob.js";import{m as S}from"./LayerView2D-PBUj6K28.js";import{h as T,m as V,r as v}from"./TileStrategy-Bs8uTjKa.js";import{e as d}from"./TileKey-BicQgvrV.js";import{u as x}from"./LayerView-DYVP3cuG.js";import{i as M}from"./RefreshableLayerView-TgkXS-ig.js";import"./DefaultUI-y65bhLzJ.js";import"./ReactiveMap-sicXFvKD.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-irmNrBgu.js";import"./mat2df64-CBKYtunK.js";import"./mat3-CakTilsz.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-CVZirBXT.js";import"./normalizeUtilsCommon-DTYpWx_K.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-XhnTPGUg.js";import"./Compass-DbISr2nW.js";import"./utils-DsJqvptN.js";import"./GoTo-28s5bp4H.js";import"./NavigationToggle-DiUrJhDe.js";import"./Zoom-D-LKGxB_.js";import"./Bitmap-8kVunml_.js";import"./DisplayObject-jRWssau_.js";import"./enums-DSseSvdG.js";import"./Texture-BRxaK8g9.js";import"./DefaultVertexAttributeLayouts-BBe0WA5l.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./WGLContainer-Dv5NxOAK.js";import"./definitions-B54owTRu.js";import"./LabelMetric-BJcGSDIa.js";import"./enums-BRqP_wXA.js";import"./Program-DCRJBPTx.js";import"./BufferObject-wa67LmxE.js";import"./BoundingBox-BhuXqU4L.js";import"./VertexArrayObject-BGsrrzff.js";import"./WGLBrushVTLSymbol-BM1EGGpB.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-Idpt-hsH.js";import"./Container-D-UnjuYH.js";import"./EffectView-DBKHGQIz.js";import"./highlightReasons-C6XJZYBL.js";import"./Tile-C2x0ojRV.js";import"./quickselect-deeG3Iol.js";import"./earcut-nZVQjWaZ.js";import"./featureConversionUtils-DQOpYys3.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./TileContainer-CwVZt8Bm.js";import"./scaleUtils-C37jhR61.js";import"./ClipRect-Hx0McZSN.js";import"./QueueProcessor-DdpNWD80.js";const q=new Set([102113,102100,3857,3785,900913]),b=[0,0];let a=class extends M(I(S(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(t.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=t.id),t):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new T(t),this._fetchQueue=new V({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return m((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:s=0}=e;if(!i)return this._fetchImage(t,r);const o=new d(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),h=await this._fetchImage(o,r)}catch(l){if(c(l))throw l;if(s<3){const p=this._tileInfoView.getTileParentId(t.id);if(p){const n=new d(p),y=await this.fetchTile(n,{...e,resamplingLevel:s+1});return f(this._tileInfoView,y,n,t)}}throw l}return f(this._tileInfoView,h,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||_.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){const e=this.view.spatialReference;if(!t.tileMatrixSets)return null;let i=t.tileMatrixSets.find(r=>{var s;return m((s=r.tileInfo)==null?void 0:s.spatialReference,e)});return!i&&e.isWebMercator&&(i=t.tileMatrixSets.find(r=>{var s;return q.has(((s=r.tileInfo)==null?void 0:s.spatialReference.wkid)??-1)})),i}};u([w({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=u([g("esri.views.2d.layers.WMTSLayerView2D")],a);const Ct=a;export{Ct as default};
