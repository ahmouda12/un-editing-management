import{bO as d,dT as h,d4 as _,cd as m,cx as p,cn as O,c5 as c,cp as f,dU as R,cR as x,ca as b,c9 as u,dV as M,dW as g,cz as w,cX as v}from"./index-DPJiPkbh.js";import{t as j}from"./EngineVisualElement-CQxIwceN.js";import{H as z,m as q,g as G,t as T}from"./ElevationContext-DtSabp_5.js";import{t as $}from"./Attribute-B-NAci_J.js";import{I as C}from"./Geometry-BiufU1jP.js";import{h as D}from"./Material-CcaRhBp-.js";import{e as I}from"./VertexAttribute-BnAa5VW0.js";import{_ as P}from"./ColorMaterial.glsl-yoRZJYnh.js";class k extends j{constructor(e){super(e),this._maxSize=0,this._position=d(),this._up=d(),this._right=d(),this._renderOccluded=D.OccludeAndTransparent,this._color=h(1,0,0,1),this._outlineColor=h(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=D.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){_(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){_(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=this._outlineSize===0!=(e===0);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:t,next:r}){this._maxSize=Math.min(m(t,e),m(t,r))/3,p(this._up,O(this._up,e,t)),p(this._right,O(this._right,r,t)),c(this._position,t),this.recreateGeometry()}_createObject3DResources(e){const t=new P(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new z(this._outlineMaterialParameters);return this._createObject3DGeometries(e,t,r),{quadMaterial:t,outlineMaterial:r,forEach:i=>{i(t),r&&i(r)}}}_createObject3DGeometries(e,t,r){if(f(this._up,R)&&f(this._right,R))return;const i=this._createGeometries(t,r);for(const o of i)e.addGeometry(o);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new P(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new z(this._outlineMaterialParameters),r=this._createGeometries(e,t).map(i=>new q(i));return this._setTransformDraped(r),{quadMaterial:e,outlineMaterial:t,geometries:r,pixelRatioHandle:x(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_createGeometries(e,t){const{up:r,right:i,corner:o}=this._getVertices(),a=this._quadGeometryData(r,i,o,e);return t?[a,G(t,[r,o,i])]:[a]}_getVertices(){let e=this._up,t=this._right;const r=b(u.get(),e,t);return this.isDraped&&(e=c(u.get(),e),t=c(u.get(),t),e[2]=0,t[2]=0,r[2]=0),{up:e,right:t,corner:r}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const t=this.view.state.camera,r=this._size*t.computeScreenPixelSizeAt(this._position),i=Math.min(this._maxSize,r);M(s,this._position),g(s,s,[i,i,i]),e.transformation=s}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{_position:i,_size:o}=this,a=c(u.get(),i);a[2]=T;const n=H;n.spatialReference=t.renderer.spatialReference,n.x=a[0],n.y=a[1];const y=o*(this.view.overlayPixelSizeInMapUnits(n)*r),l=Math.min(this._maxSize,y);M(s,a),g(s,s,[l,l,1]);for(const S of e)S.transformation=s}_quadGeometryData(e,t,r,i){return new C(i,[[I.POSITION,new $([0,0,0,...t,...e,...r],[0,1,2,1,2,3],3,!0)]])}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,t;(e=this.object3dResources.resources)==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(t=this.drapedResources.resources)==null||t.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,t,r,i;(t=(e=this.object3dResources.resources)==null?void 0:e.outlineMaterial)==null||t.setParameters(this._outlineMaterialParameters),(i=(r=this.drapedResources.resources)==null?void 0:r.outlineMaterial)==null||i.setParameters(this._outlineMaterialParameters)}}const s=w(),H=v(0,0,void 0,null);export{k as z};
