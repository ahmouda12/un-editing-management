import{g8 as T,ad as $,v as G,iY as D,bh as z,cR as O,cS as F,eP as S,a6 as k,h1 as N,f as U,iT as W,m2 as A,r as H,bA as K,x as v,y as C,B as Y}from"./index-B252NKV0.js";import{b as P,g as J,d as Q}from"./kmlUtils-Cy5UskgA.js";import{g as X,f as Z,b as tt}from"./Bitmap-Dqb6g2xF.js";import{a as et}from"./BitmapContainer-DQRRk8Aj.js";import{m as it}from"./LayerView2D-B2XPas4a.js";import{t as M}from"./GraphicContainer-BYq8MfHQ.js";import{$ as R}from"./GraphicsView2D-1nlIBwo4.js";import{u as at}from"./LayerView-D2pvr0Q6.js";import{C as st,e as rt}from"./rasterProjectionHelper-DpMYnynW.js";import{b as ot}from"./WGLContainer-GIR_kCuW.js";import{o as nt}from"./MaterialPrograms-DOGsTrmf.js";import{t as lt}from"./capabilities-C84AMSCg.js";import{D as E,G as pt,U as mt,X as L}from"./enums-DSseSvdG.js";import{x as ht}from"./Program-wFflZSL5.js";import{c as ct}from"./rasterUtils-Cy3YcRxv.js";import{w as dt}from"./RenderingContext-WP9tAZpV.js";import{e as q,m as ut}from"./Texture-BT-WYJiR.js";import"./mat3-DPPMYMhB.js";import"./DefaultUI-4DBz9mkp.js";import"./ReactiveMap-DcQhQdHv.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-CYfboRg2.js";import"./mat2df64-CBKYtunK.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-PvjooRb6.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-yeijlTke.js";import"./Compass-BqUvL1gL.js";import"./utils-DsJqvptN.js";import"./GoTo-B08Csiw_.js";import"./NavigationToggle-DNdSP6VQ.js";import"./Zoom-BQUhauBk.js";import"./DisplayObject-B2mbaom_.js";import"./Container-D0mzr_VC.js";import"./EffectView-CzpqZJb_.js";import"./highlightReasons-DkCnfpXT.js";import"./Tile-DcDRio1X.js";import"./quickselect-CDrMhodd.js";import"./TileKey-Dt_FQSdw.js";import"./definitions-B54owTRu.js";import"./scaleUtils-BKVOuLFd.js";import"./ClipRect-CGrUtOuF.js";import"./AGraphicContainer-BShFLEDT.js";import"./TechniqueInstance-CZlcBeKW.js";import"./UpdateTracking2D-DZm4ygQJ.js";import"./TurboLine-DvArdm2j.js";import"./enums-BRqP_wXA.js";import"./earcut-gCDAS0gj.js";import"./GeometryUtils-BvoQHMVi.js";import"./OptimizedGeometry-DLPswkPy.js";import"./CIMSymbolHelper-ZEeHC0zq.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-oEBemou-.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BhuXqU4L.js";import"./LabelMetric-DyGbq7CL.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DsJryf9x.js";import"./constants-D5zmR9t2.js";import"./TileContainer-gaWyHmtV.js";import"./FeatureCommandQueue-D85xG_gV.js";import"./BufferObject-DdM-Y0w0.js";import"./VertexArrayObject-adc8SYn-.js";import"./heatmapTextureUtils-BX_wQ43L.js";import"./QueueProcessor-CvAp86Lk.js";import"./vec3f32-Cw9Q6TO_.js";import"./AttributeStore-C-fB6HAG.js";import"./labelFormatUtils-H994QWFK.js";import"./centroid-DdLmOD72.js";import"./featureConversionUtils-BVsMNPzF.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-C0A6H9UZ.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DOwl-Fyb.js";import"./WGLBrushVTLSymbol---yR8o1P.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-D_F9StYA.js";import"./DefaultVertexAttributeLayouts-o8Fw2Bif.js";import"./programUtils-CwiKxPbA.js";import"./ProgramCache-pF_7Wga5.js";import"./NestedMap-DgiGbX8E.js";import"./OrderIndependentTransparency-Dar7ikM6.js";import"./basicInterfaces-DngWxyLO.js";import"./interfaces-CGza0uBR.js";import"./testSVGPremultipliedAlpha-BWu01myj.js";import"./floatRGBA-0vmpOgzj.js";import"./doublePrecisionUtils-B0owpBza.js";class m{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(m._instance)return m._instanceRefCount++,m._instance;m._instanceRefCount=1,m._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),a=lt(i);a.getExtension("OES_texture_float"),this._rctx=new dt(a,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=nt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const i=T(t.extent,s),a=new $({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:p}=st(a,s,t.extent);let n=(o+p)/2;const l=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/l+i.height/u)/2;const I=new $({x:n,y:n,spatialReference:i.spatialReference}),_=rt({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,_),x=new q(l,u);x.wrapMode=E.CLAMP_TO_EDGE;const h=new ht(this._rctx,x);this._rctx.bindFramebuffer(h),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:y=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,f),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=h,g=new ImageData(c??0,V??0);h.readPixels(0,0,c??0,V??0,pt.RGBA,mt.UNSIGNED_BYTE,g.data);const B=h.detachColorTexture(L.COLOR_ATTACHMENT0);return h.dispose(),{texture:B,extent:i,imageData:g}}const b=h.detachColorTexture(L.COLOR_ATTACHMENT0);return h.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,s){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,i=new q;i.wrapMode=E.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new ut(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const p=document.createElement("canvas"),n=o.imageData;return p.width=n.width,p.height=n.height,p.getContext("2d").putImageData(n,0,0),{bitmapData:p,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const i=(await G(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=a.getContext("2d");o.drawImage(i,0,0);const p=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:p,extent:s};const n=this.reprojectBitmapData({bitmapData:p,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(m._instanceRefCount--,m._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),m._instance=null)):(this._quad.dispose(),this._program.dispose())}}m._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new z}async hitTest(e,t){var r,i,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(i=this._polylinesView)==null?void 0:i.hitTest(e),(a=this._polygonsView)==null?void 0:a.hitTest(e)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),O(()=>this.layer.visibleSublayers,e=>{for(const[t,s]of this._kmlVisualData.allSublayers)s.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new m}detach(){this._fetchController=F(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,k.fromJSON(e.extent),this.view.spatialReference).then(r=>{const i=new tt(r.bitmapData);i.x=r.extent.xmin,i.y=r.extent.ymax,i.resolution=r.extent.width/r.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:i}=e;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await N(),r!=null&&r!==1){const c=new k(t.extent);c.expand(r),a=c}else a=t.extent;a=T(a,U.WGS84);const o=T(a,U.WebMercator),p=a.xmin,n=a.xmax,l=a.ymin,u=a.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),x={"[bboxWest]":p.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},h=c=>{for(const V in c){let g;for(g in x)c[V]=c[V].replace(g,x[g])}},y=A(s);h(y);let f={};i!=null&&(f=A(i),h(f));const b=H(e.href);return b.query={...b.query,...y,...f},`${b.path}?${K(y)}`}return e.href}async _fetchService(e){const t=new j;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const a=i.points?await P(i.points):[],o=i.polylines?await P(i.polylines):[],p=i.polygons?await P(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:i.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:i.id}))),t.allPolygons.push(...p.map(l=>({item:l,sublayerId:i.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:i.id}))),i.networkLink){const l=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(e,t){return J(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>Q(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([Y("esri.views.2d.layers.KMLLayerView2D")],d);const ei=d;export{ei as default};