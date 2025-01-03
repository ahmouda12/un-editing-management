import{m5 as S,m6 as v,kG as j,aI as F,bF as M,aU as y,bH as q,i6 as W,c$ as L,a6 as H,m7 as k,cS as N,gG as B,is as Y,gI as Z,fR as b,E as $,jt as J,m8 as K,m9 as Q,w as X,x as w,y as x,B as ee}from"./index-DPJiPkbh.js";import{i as te,e as ie,C as ae,E as D,j as R,m as re}from"./ElevationContext-DtSabp_5.js";import{n as se}from"./LayerView3D-DQ1MECMx.js";import{t as ne}from"./DoubleArray-MGZZXTmk.js";import{t as oe,N as le}from"./IntegerPassUniform-Cz4js9jy.js";import{t as C}from"./Attribute-B-NAci_J.js";import{I as he}from"./Geometry-BiufU1jP.js";import{e as G}from"./VertexAttribute-BnAa5VW0.js";import{l as de}from"./projectExtentUtils-B-47QWDH.js";import{t as ce}from"./Material-CcaRhBp-.js";import{T as me}from"./ImageMaterial-Cau70dOS.js";import{u as ue}from"./LayerView-DYVP3cuG.js";import{i as ge}from"./RefreshableLayerView-TgkXS-ig.js";import{D as z}from"./enums-DSseSvdG.js";function fe(i,e,t){const a=S(i)/v(i),r={width:t,height:t};return a>1.0001?r.height=t/a:a<.9999&&(r.width=t*a),r.width=Math.round(r.width/(S(i)/S(e))),r.height=Math.round(r.height/(v(i)/v(e))),r}function U(i,e){return te(i,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function pe(i,e,t){if(!j(e,t))return U(i,t);const a=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],l=t[2]-t[0],n=t[3]-t[1],s=r[0]>0&&r[2]>0?3:2,h=a[0]>0&&a[2]>0?3:2,o=(h+1)*(s+1),c=ne(3*o),m=oe(2*o),d=new Array(6*(h*s-1));let E=0,I=0,O=0,u=0,f=0;for(let p=0;p<4;p++){const P=a[p];if(P<=0)continue;let A=0;for(let _=0;_<4;_++){const T=r[_];T<=0||(c[I++]=t[0]+A,c[I++]=t[1]+E,c[I++]=-1,m[O++]=A/l,m[O++]=E/n,_<3&&p<3&&(_!==1||p!==1)&&(d[f++]=u,d[f++]=u+1,d[f++]=u+s+1,d[f++]=u+1,d[f++]=u+s+2,d[f++]=u+s+1),u++,A+=T)}E+=P}const V=new Array(d.length);return new he(i,[[G.POSITION,new C(c,d,3,!0)],[G.NORMAL,new C(_e,V,3,!0)],[G.UV0,new C(m,d,2,!0)]])}const _e=[0,0,1];let g=class extends ge(se(ue)){constructor(){super(...arguments),this.drapeSourceType=ie.RasterImage,this.updatePolicy=ae.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=F(async i=>{this.destroyed||await this._doRefresh(i).catch(e=>{M(e)||y.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(q(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(de(this).then(i=>this._set("fullExtentInLocalViewSpatialReference",i))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(i,e){this._spatialReference=e,i.forEach((t,a)=>{this._overlays[a]=t,this._updateImageExtent(t,a)})}_updateImageExtent(i,e){const t=this._clippedExtent(i.extent,we);if(t==null)return;const a=fe(i.extent,t,i.resolution);let r=i.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(a.width>s){const o=s/a.width;a.height=Math.floor(a.height*o),a.width=s,r*=o}if(a.height>h){const o=h/a.height;a.width=Math.floor(a.width*o),a.height=h,r*=o}}const n=this._extents[e];n&&W(n.extent,t)&&this._imageSizeEquals(t,n.imageSize,a)||(this._extents[e]={extent:L(t),imageSize:a,pixelRatio:r},this.suspended||this._fetch(e).catch(s=>{M(s)||y.getLogger(this).error(s)}))}clear(){for(let i=0;i<this._images.length;i++)this._clearImage(i)}async doRefresh(){return this._doRefresh()}async _doRefresh(i){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,i));await Promise.allSettled(e)}canResume(){if(!super.canResume())return!1;const i=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=i.effectiveScaleRange,a=this.view.scale;if(a<t||e>0&&a>e)return!1}return!0}async processResult(i,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(i.image=e)}findExtentInfoAt(i){for(const e of this._extents){const t=e.extent;if(new H(t[0],t[1],t[2],t[3],this._spatialReference).contains(i))return e}return null}getFetchOptions(){}async redraw(i,e){await k(this._images,async(t,a)=>{t&&(await i(t,e),await this._createStageObjects(a,t.image,e))})}_imageSizeEquals(i,e,t){if(!this.maximumDataResolution)return!1;const a=S(i)/this.maximumDataResolution.x,r=v(i)/this.maximumDataResolution.y,l=a/e.width,n=r/e.height,s=a/t.width,h=r/t.height,o=Math.abs(l-s),c=Math.abs(n-h),m=ce.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=m&&c<=m}async _fetch(i,e){if(this.suspended)return;const t=this._extents[i],a=t.extent;this._images[i]||(this._images[i]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:L(a)});const r=this._images[i];r.loadingAbortController=N(r.loadingAbortController);const l=new H(a[0],a[1],a[2],a[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(i);const n=new AbortController;r.loadingAbortController=n,B(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[i].pixelRatio,...this.getFetchOptions(),signal:s},{height:c,width:m}=t.imageSize;return this.layer.fetchImage(l,m,c,o)}).then(o=>{if(Y(s))throw y.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Z();return this.processResult(r,o)}).then(()=>{b(r.renderExtent,a)});r.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{$(s),await this._createStageObjects(i,r.image,s)}).catch(o=>{throw o&&!M(o)&&y.getLogger(this).error(o),o}).finally(()=>{h===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}))}_clearImage(i){const e=this._images[i];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],D.UPDATE),e.renderGeometry=null);const t=this.view._stage,a=e.texture;a==null||a.unload(),t.remove(a),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(i,e,t){const a=this.view._stage,r=this._images[i],l=()=>{var n;(n=r.texture)==null||n.unload(),a.remove(r.texture),r.texture=null,r.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([r.renderGeometry],D.UPDATE),r.renderGeometry=null)};if(e){const n=new le(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let s;if(await J(this._images[i===R.INNER?R.OUTER:R.INNER].loadingPromise),$(t),l(),await a.schedule(()=>n.load(a.renderView.renderingContext),t),a.add(n),r.texture=n,r.material==null?(r.material=new me({transparent:!0,textureId:n.id}),a.add(r.material)):r.material.setParameters({textureId:n.id}),i===R.INNER)s=U(r.material,r.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=pe(r.material,h,r.renderExtent)}r.renderGeometry=new re(s),r.renderGeometry.localOrigin=this._overlays[i].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([r.renderGeometry],D.UPDATE)}else l(),a.remove(r.material),r.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const i=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=i.effectiveScaleRange;return K(e,t)}_clippedExtent(i,e){if(this.view.viewingMode!=="local")return b(e,i);const t=this.view.basemapTerrain;return t.ready?Q(i,t.extent,e):b(e,i)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(i){await X(()=>this.view.stationary,i),$(i)}};w([x()],g.prototype,"layer",void 0),w([x()],g.prototype,"suspended",void 0),w([x({readOnly:!0})],g.prototype,"fullExtentInLocalViewSpatialReference",void 0),w([x()],g.prototype,"updating",void 0),g=w([ee("esri.views.3d.layers.DynamicLayerView3D")],g);const Le=g,we=L();export{Le as N};
