import{f$ as rt,en as vt,ec as K,cY as _t,bR as Lt,pk as Nt,pl as Dt,bL as at,df as Ct,cx as Ft,pm as gt,bO as tt,x as E,ab as Mt,y as _,B as yt,iN as ot,c1 as ct}from"./index-DPJiPkbh.js";import{n as bt}from"./interfaces-CGza0uBR.js";import{i as xt}from"./basicInterfaces-DngWxyLO.js";import{e as pt,r as Ht}from"./ContentObject-tLjB2Ud3.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";import{s as Pt}from"./Util-C76gCxal.js";function re(e,t){return new Ot(e,ft,t)}function ae(e,t){const{curvatureDependent:i,scaleStart:r,scaleFallOffRange:a}=ft;return new Ot(e,{curvatureDependent:{min:{curvature:i.min.curvature,tiltAngle:i.min.tiltAngle,scaleFallOffFactor:et.curvatureDependent.min.scaleFallOffFactor},max:{curvature:i.max.curvature,tiltAngle:i.max.tiltAngle,scaleFallOffFactor:et.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:a,minPixelSize:et.minPixelSize},t)}function Wt(e){return Math.abs(e*e*e)}function ht(e,t,i){const r=i.parameters;return it.scale=Math.min(r.divisor/(t-r.offset),1),it.factor=Wt(e),it}function dt(e,t){return rt(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function $t(e,t,i){const r=ht(e,t,i);return r.minScaleFactor=0,dt(1,r)}function se(e,t,i,r){r.scale=$t(e,t,i),r.factor=0,r.minScaleFactor=i.minScaleFactor}function ne(e,t,i=[0,0]){const r=Math.min(Math.max(t.scale,t.minScaleFactor),1);return i[0]=e[0]*r,i[1]=e[1]*r,i}function Bt(e,t,i,r){return dt(e,ht(t,i,r))}let Ot=class Tt{get minScaleFactor(){return this._fontHeight!=null?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(t,i,r,a=Vt(),o){this._viewingMode=t,this._description=i,this._ellipsoidRadius=r,this.parameters=a,this._fontHeight=o,this._viewingMode===vt.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(t){return(!this.parameters||this.parameters.camera.fovY!==t.fovY||this.parameters.camera.distance!==t.distance)&&(this._calculateParameters(t,this._ellipsoidRadius,this.parameters),!0)}overrideFontHeight(t){return t!==this._fontHeight?new Tt(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,t):this}_calculateParameters(t,i,r){const{scaleStart:a,scaleFallOffRange:o}=this._description,{fovY:c,distance:s}=t,l=this._calculateCurvatureDependentParameters(t,i),n=this._coverageCompensation(t,i,l),{tiltAngle:p,scaleFallOffFactor:O}=l,m=Math.sin(p)*s,H=.5*Math.PI-p-c*(.5-a*n),v=m/Math.cos(H),D=H+c*o*n,L=(v-O*(m/Math.cos(D)))/(1-O);return r.camera.fovY=t.fovY,r.camera.distance=t.distance,r.offset=L,r.divisor=v-L,r}_calculateCurvatureDependentParametersLocal(t,i,r=lt){return r.tiltAngle=this._description.curvatureDependent.min.tiltAngle,r.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,r}_calculateCurvatureDependentParametersGlobal(t,i,r=lt){const a=this._description.curvatureDependent,o=1+t.distance/i,c=Math.sqrt(o*o-1),[s,l]=[a.min.curvature,a.max.curvature],n=_t((c-s)/(l-s),0,1),[p,O]=[a.min,a.max];return r.tiltAngle=rt(p.tiltAngle,O.tiltAngle,n),r.scaleFallOffFactor=rt(p.scaleFallOffFactor,O.scaleFallOffFactor,n),r}_surfaceCoverageCompensationLocal(t,i,r){return(t.fovY-r.tiltAngle)/t.fovY}_surfaceCoverageCompensationGlobal(t,i,r){const a=i*i,o=r.tiltAngle+.5*Math.PI,{fovY:c,distance:s}=t,l=s*s+a-2*Math.cos(o)*s*i,n=Math.sqrt(l),p=Math.sqrt(l-a);return(Math.acos(p/n)-Math.asin(i/(n/Math.sin(o)))+.5*c)/c}};const ft={curvatureDependent:{min:{curvature:K(10),tiltAngle:K(12),scaleFallOffFactor:.5},max:{curvature:K(70),tiltAngle:K(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},et={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function Vt(){return{camera:{distance:0,fovY:0},divisor:0,offset:0}}const it={scale:0,factor:0,minScaleFactor:0},lt={tiltAngle:0,scaleFallOffFactor:0},Q=Lt();function oe(e,t,i,r,a,o){if(e.visible)if(e.boundingInfo){Pt(e.type===pt.Mesh);const c=t.tolerance;St(e.boundingInfo,i,r,c,a,o)}else{const c=e.attributes.get(h.POSITION),s=c.indices;It(i,r,0,s.length/3,s,c,void 0,a,o)}}const Yt=tt();function St(e,t,i,r,a,o){if(e==null)return;const c=Gt(t,i,Yt);if(Nt(Q,e.bbMin),Dt(Q,e.bbMax),a!=null&&a.applyToAabb(Q),wt(Q,t,c,r)){const{primitiveIndices:s,position:l}=e,n=s?s.length:l.indices.length/3;if(n>Zt){const p=e.getChildren();if(p!==void 0){for(const O of p)St(O,t,i,r,a,o);return}}It(t,i,0,n,l.indices,l,s,a,o)}}const mt=tt();function It(e,t,i,r,a,o,c,s,l){if(c)return Ut(e,t,i,r,a,o,c,s,l);const{data:n,stride:p}=o,O=e[0],m=e[1],H=e[2],v=t[0]-O,D=t[1]-m,L=t[2]-H;for(let f=i,X=3*i;f<r;++f){let T=p*a[X++],d=n[T++],I=n[T++],R=n[T];T=p*a[X++];let C=n[T++],W=n[T++],$=n[T];T=p*a[X++];let B=n[T++],V=n[T++],Y=n[T];s!=null&&([d,I,R]=s.applyToVertex(d,I,R,f),[C,W,$]=s.applyToVertex(C,W,$,f),[B,V,Y]=s.applyToVertex(B,V,Y,f));const P=C-d,F=W-I,g=$-R,M=B-d,y=V-I,b=Y-R,U=D*b-y*L,Z=L*M-b*v,j=v*y-M*D,A=P*U+F*Z+g*j;if(Math.abs(A)<=Number.EPSILON)continue;const S=O-d,G=m-I,w=H-R,N=S*U+G*Z+w*j;if(A>0){if(N<0||N>A)continue}else if(N>0||N<A)continue;const x=G*g-F*w,k=w*P-g*S,J=S*F-P*G,q=v*x+D*k+L*J;if(A>0){if(q<0||N+q>A)continue}else if(q>0||N+q<A)continue;const z=(M*x+y*k+b*J)/A;z>=0&&l(z,Rt(P,F,g,M,y,b,mt),f,!1)}}function Ut(e,t,i,r,a,o,c,s,l){const{data:n,stride:p}=o,O=e[0],m=e[1],H=e[2],v=t[0]-O,D=t[1]-m,L=t[2]-H;for(let f=i;f<r;++f){const X=c[f];let T=3*X,d=p*a[T++],I=n[d++],R=n[d++],C=n[d];d=p*a[T++];let W=n[d++],$=n[d++],B=n[d];d=p*a[T];let V=n[d++],Y=n[d++],P=n[d];s!=null&&([I,R,C]=s.applyToVertex(I,R,C,f),[W,$,B]=s.applyToVertex(W,$,B,f),[V,Y,P]=s.applyToVertex(V,Y,P,f));const F=W-I,g=$-R,M=B-C,y=V-I,b=Y-R,U=P-C,Z=D*U-b*L,j=L*y-U*v,A=v*b-y*D,S=F*Z+g*j+M*A;if(Math.abs(S)<=Number.EPSILON)continue;const G=O-I,w=m-R,N=H-C,x=G*Z+w*j+N*A;if(S>0){if(x<0||x>S)continue}else if(x>0||x<S)continue;const k=w*M-g*N,J=N*F-M*G,q=G*g-F*w,z=v*k+D*J+L*q;if(S>0){if(z<0||x+z>S)continue}else if(z>0||x+z<S)continue;const nt=(y*k+b*J+U*q)/S;nt>=0&&l(nt,Rt(F,g,M,y,b,U,mt),X,!1)}}const ut=tt(),Et=tt();function Rt(e,t,i,r,a,o,c){return at(ut,e,t,i),at(Et,r,a,o),Ct(c,ut,Et),Ft(c,c),c}function Gt(e,t,i){return at(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function wt(e,t,i,r){return qt(e,t,i,r,1/0)}function qt(e,t,i,r,a){const o=(e[0]-r-t[0])*i[0],c=(e[3]+r-t[0])*i[0];let s=Math.min(o,c),l=Math.max(o,c);const n=(e[1]-r-t[1])*i[1],p=(e[4]+r-t[1])*i[1];if(l=Math.min(l,Math.max(n,p)),l<0||(s=Math.max(s,Math.min(n,p)),s>l))return!1;const O=(e[2]-r-t[2])*i[2],m=(e[5]+r-t[2])*i[2];return l=Math.min(l,Math.max(O,m)),!(l<0)&&(s=Math.max(s,Math.min(O,m)),!(s>l)&&s<a)}function ce(e,t,i,r,a){let o=(i.screenLength||0)*e.pixelRatio;a!=null&&(o=Bt(o,r,t,a));const c=o*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return _t(c*t,i.minWorldLength||0,i.maxWorldLength!=null?i.maxWorldLength:1/0)}function At(e,t){const i=t?At(t):{};for(const r in e){let a=e[r];a!=null&&a.forEach&&(a=Xt(a)),a==null&&r in i||(i[r]=a)}return i}function zt(e,t){let i=!1;for(const r in t){const a=t[r];a!==void 0&&(Array.isArray(a)?e[r]===null?(e[r]=a.slice(),i=!0):gt(e[r],a)&&(i=!0):e[r]!==a&&(i=!0,e[r]=a))}return i}function Xt(e){const t=[];return e.forEach(i=>t.push(i)),t}const le={multiply:1,ignore:2,replace:3,tint:4},Zt=1e3,jt=new Map([[h.POSITION,0],[h.NORMAL,1],[h.NORMALCOMPRESSED,1],[h.UV0,2],[h.COLOR,3],[h.COLORFEATUREATTRIBUTE,3],[h.SIZE,4],[h.TANGENT,4],[h.CENTEROFFSETANDDISTANCE,5],[h.SYMBOLCOLOR,5],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.INSTANCEOBJECTANDLAYERIDCOLOR,7],[h.INSTANCEMODEL,8],[h.INSTANCEMODELNORMAL,12],[h.INSTANCEMODELORIGINHI,11],[h.INSTANCEMODELORIGINLO,15]]);let u=class extends Mt{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};E([_()],u.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),E([_()],u.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),E([_()],u.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),E([_()],u.prototype,"DECONFLICTOR_SHOW_GRID",void 0),E([_()],u.prototype,"LABELS_SHOW_BORDER",void 0),E([_()],u.prototype,"TEXT_SHOW_BASELINE",void 0),E([_()],u.prototype,"TEXT_SHOW_BORDER",void 0),E([_()],u.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),E([_()],u.prototype,"OVERLAY_SHOW_CENTER",void 0),E([_()],u.prototype,"SHOW_POI",void 0),E([_()],u.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),E([_()],u.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),E([_()],u.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),E([_()],u.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),E([_()],u.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),E([_()],u.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),E([_()],u.prototype,"I3S_TREE_SHOW_TILES",void 0),E([_()],u.prototype,"I3S_SHOW_MODIFICATIONS",void 0),E([_()],u.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),E([_()],u.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),E([_()],u.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),E([_()],u.prototype,"LINE_WIREFRAMES",void 0),u=E([yt("esri.views.3d.support.DebugFlags")],u);const ue=new u;class Ee{constructor(){this.enabled=!0,this._time=ot(0)}get time(){return this._time}advance({deltaTime:t,fixedTime:i}){return i!=null?this._time!==i&&(this._time=i,!0):(this._time=ot(this._time+t),t!==0)}}class kt{constructor(t,i){this.deltaTime=t,this.fixedTime=i}}class _e extends Ht{constructor(t,i){super(),this.type=pt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=jt,this._pp0=ct(0,0,1),this._pp1=ct(0,0,0),this._parameters=At(t,i),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t,i=!0){zt(this._parameters,t)&&(this.validateParameters(this._parameters),i&&this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bindParameters.decorations===xt.ON)&&(this.parameters.renderOccluded&t.renderOccludedMask)!=0}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var t;(t=this.repository)==null||t.materialChanged(this)}queryRenderOccludedState(t){return this.isVisible()&&this.parameters.renderOccluded===t}intersectDraped(t,i,r,a,o,c){return this._pp0[0]=this._pp1[0]=a[0],this._pp0[1]=this._pp1[1]=a[1],this.intersect(t,i,r,this._pp0,this._pp1,o)}}class pe extends kt{constructor(t,i,r){super(i,r),this.camera=t}}var st;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(st||(st={}));class he extends bt{constructor(){super(...arguments),this.renderOccluded=st.Occlude,this.isDecoration=!1}}export{le as E,wt as I,ce as L,jt as O,Gt as T,qt as V,oe as a,zt as b,_e as c,se as d,Ee as e,ne as f,It as g,st as h,ae as i,pe as j,re as n,dt as s,ue as t,he as u,Rt as v};