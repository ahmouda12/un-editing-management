import{p as qt,f as Kt}from"./mat3-CakTilsz.js";import{c8 as et,ki as Rt,ca as lt,bO as d,b$ as Lt,kj as Ut,c1 as Pt,dh as xt,dU as ta,bL as B,c9 as Vt,kk as aa,g_ as N,kl as mt,km as At,kn as sa,ct as It,ff as ia,ek as ea,ko as Ct,gZ as St,kp as Gt,ee as na,en as oa,i9 as ha,ib as Xt,ce as Ft,dm as bt,kq as ra,kr as ca,eb as kt,ia as ua,ij as da,di as fa,cz as la}from"./index-DPJiPkbh.js";import{X as ma,O as U,x as _a}from"./quat-B_RTSvGc.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-MJ9Uj9G-.js";import{R as ba}from"./computeTranslationToOriginAndRotation-DJULrcwj.js";import{s as Ot}from"./Attribute-B-NAci_J.js";const nt=1e-6,ot=d(),gt=d();function ga(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const o=new wa(i);yt(ot,o.minProj,o.maxProj),dt(ot,ot,.5),p(gt,o.maxProj,o.minProj);const h=wt(gt),c=new ya;c.quality=h,n<14&&(i=new Ot(new Float64Array(o.buffer,112,42),3));const e=d(),r=d(),g=d(),m=d(),z=d(),A=d(),M=d();switch(Ma(o,i,M,e,r,g,m,z,A,c)){case 1:return void vt(ot,gt,t);case 2:return void Ia(i,m,t)}$a(i,M,e,r,g,m,z,A,c),Wt(i,c.b0,c.b1,c.b2,at,st);const E=d();p(E,st,at),c.quality=wt(E),c.quality<h?Zt(c.b0,c.b1,c.b2,at,st,E,t):vt(ot,gt,t)}function Ma(i,t,a,s,n,o,h,c,e,r){return Pa(i,s,n),Nt(s,n)<nt?1:(p(h,s,n),b(h,h),ja(t,s,h,o)<nt?2:(p(c,n,o),b(c,c),p(e,o,s),b(e,e),V(a,c,h),b(a,a),Z(t,a,h,c,e,r),0))}const ht=d(),rt=d(),I=d(),q=d(),w=d(),R=d(),G=d(),X=d();function $a(i,t,a,s,n,o,h,c,e){xa(i,t,a,ht,rt),ht[0]!==void 0&&(p(I,ht,a),b(I,I),p(q,ht,s),b(q,q),p(w,ht,n),b(w,w),V(R,q,o),b(R,R),V(G,w,h),b(G,G),V(X,I,c),b(X,X),Z(i,R,o,q,I,e),Z(i,G,h,w,q,e),Z(i,X,c,I,w,e)),rt[0]!==void 0&&(p(I,rt,a),b(I,I),p(q,rt,s),b(q,q),p(w,rt,n),b(w,w),V(R,q,o),b(R,R),V(G,w,h),b(G,G),V(X,I,c),b(X,X),Z(i,R,o,q,I,e),Z(i,G,h,w,q,e),Z(i,X,c,I,w,e))}function Pa(i,t,a){let s=Nt(i.maxVert[0],i.minVert[0]),n=0;for(let o=1;o<7;++o){const h=Nt(i.maxVert[o],i.minVert[o]);h>s&&(s=h,n=o)}S(t,i.minVert[n]),S(a,i.maxVert[n])}const y=[0,0,0];function ja(i,t,a,s){const{data:n,size:o}=i;let h=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=o){y[0]=n[e]-t[0],y[1]=n[e+1]-t[1],y[2]=n[e+2]-t[2];const r=a[0]*y[0]+a[1]*y[1]+a[2]*y[2],g=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=y[0]*y[0]+y[1]*y[1]+y[2]*y[2]-r*r/g;m>h&&(h=m,c=e)}return S(s,n,c),h}const _=Lt();function xa(i,t,a,s,n){za(i,t,_,n,s);const o=Dt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Qt=d(),Tt=d(),Et=d(),D=d(),J=d(),Mt=d();function Z(i,t,a,s,n,o){if(Bt(t)<nt)return;V(Qt,a,t),V(Tt,s,t),V(Et,n,t),tt(i,t,_),J[1]=_[0],D[1]=_[1],Mt[1]=D[1]-J[1];const h=[a,s,n],c=[Qt,Tt,Et];for(let e=0;e<3;++e){tt(i,h[e],_),J[0]=_[0],D[0]=_[1],tt(i,c[e],_),J[2]=_[0],D[2]=_[1],Mt[0]=D[0]-J[0],Mt[2]=D[2]-J[2];const r=wt(Mt);r<o.quality&&(S(o.b0,h[e]),S(o.b1,t),S(o.b2,c[e]),o.quality=r)}}const Sa=d();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const h=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],h),a[1]=Math.max(a[1],h)}}function za(i,t,a,s,n){const{data:o,size:h}=i;S(s,o),S(n,s),a[0]=Dt(Sa,t),a[1]=a[0];for(let c=h;c<o.length;c+=h){const e=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];e<a[0]&&(a[0]=e,S(s,o,c)),e>a[1]&&(a[1]=e,S(n,o,c))}}function vt(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Rt}const v=d(),K=d(),ct=d(),at=d(),st=d(),Yt=d();function Ia(i,t,a){S(v,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?v[0]=0:Math.abs(t[1])>Math.abs(t[2])?v[1]=0:v[2]=0,Bt(v)<nt&&(v[0]=v[1]=v[2]=1),V(K,t,v),b(K,K),V(ct,t,K),b(ct,ct),Wt(i,t,K,ct,at,st),p(Yt,st,at),Zt(t,K,ct,at,st,Yt,a)}function Wt(i,t,a,s,n,o){tt(i,t,_),n[0]=_[0],o[0]=_[1],tt(i,a,_),n[1]=_[0],o[1]=_[1],tt(i,s,_),n[2]=_[0],o[2]=_[1]}const O=d(),ut=d(),$t=d(),Q=Ut(1,0,0,0,1,0,0,0,1),qa=xt();function Zt(i,t,a,s,n,o,h){Q[0]=i[0],Q[1]=i[1],Q[2]=i[2],Q[3]=t[0],Q[4]=t[1],Q[5]=t[2],Q[6]=a[0],Q[7]=a[1],Q[8]=a[2],h.quaternion=Na(qa,Q),yt(O,s,n),dt(O,O,.5),dt(ut,i,O[0]),dt($t,t,O[1]),yt(ut,ut,$t),dt($t,a,O[2]),h.center=lt(ut,ut,$t),h.halfSize=et(O,o,.5)}const P=7;let wa=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let e=0;e<P;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(P),o=new Array(P),{data:h,size:c}=t;for(let e=0;e<h.length;e+=c){let r=h[e];r<this.minProj[0]&&(this.minProj[0]=r,n[0]=e),r>this.maxProj[0]&&(this.maxProj[0]=r,o[0]=e),r=h[e+1],r<this.minProj[1]&&(this.minProj[1]=r,n[1]=e),r>this.maxProj[1]&&(this.maxProj[1]=r,o[1]=e),r=h[e+2],r<this.minProj[2]&&(this.minProj[2]=r,n[2]=e),r>this.maxProj[2]&&(this.maxProj[2]=r,o[2]=e),r=h[e]+h[e+1]+h[e+2],r<this.minProj[3]&&(this.minProj[3]=r,n[3]=e),r>this.maxProj[3]&&(this.maxProj[3]=r,o[3]=e),r=h[e]+h[e+1]-h[e+2],r<this.minProj[4]&&(this.minProj[4]=r,n[4]=e),r>this.maxProj[4]&&(this.maxProj[4]=r,o[4]=e),r=h[e]-h[e+1]+h[e+2],r<this.minProj[5]&&(this.minProj[5]=r,n[5]=e),r>this.maxProj[5]&&(this.maxProj[5]=r,o[5]=e),r=h[e]-h[e+1]-h[e+2],r<this.minProj[6]&&(this.minProj[6]=r,n[6]=e),r>this.maxProj[6]&&(this.maxProj[6]=r,o[6]=e)}for(let e=0;e<P;++e){let r=n[e];S(this.minVert[e],h,r),r=o[e],S(this.maxVert[e],h,r)}}},ya=class{constructor(){this.b0=Pt(1,0,0),this.b1=Pt(0,1,0),this.b2=Pt(0,0,1),this.quality=0}};function wt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function yt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function p(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function dt(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function S(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],o=t[2],h=a[0],c=a[1],e=a[2];i[0]=n*e-o*c,i[1]=o*h-s*e,i[2]=s*c-n*h}function b(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Bt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function Nt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function Dt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Na(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let h=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);i[s]=.5*h,h=.5/h,i[3]=(t[3*n+o]-t[3*o+n])*h,i[n]=(t[3*n+s]+t[3*s+n])*h,i[o]=(t[3*o+s]+t[3*s+o])*h}return i}class ft{constructor(t=ta,a=va,s=Rt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return B(Vt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return B(Vt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return ma(aa.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],N(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(H);return U(l,a),N(u,u,l),mt(u,u),Y[0]=Math.min(u[0],this._data[3]),Y[1]=Math.min(u[1],this._data[4]),Y[2]=Math.min(u[2],this._data[5]),At(Y,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(sa(u)>o*o)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],N(u,u,l),mt(u,u),Y[0]=Math.min(u[0],s[3]),Y[1]=Math.min(u[1],s[4]),Y[2]=Math.min(u[2],s[5]),At(Y,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(It(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=l;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const h=N(u,u,l),c=N(Y,a,l);let e=-1/0,r=1/0;const g=this.getHalfSize(it);for(let m=0;m<3;m++){const z=h[m],A=c[m],M=g[m]+s;if(Math.abs(A)>1e-6){const E=(M-z)/A,$=(-M-z)/A;e=Math.max(e,Math.min(E,$)),r=Math.min(r,Math.max(E,$))}else if(z>M||z<-M)return!1}return e<=r}projectedArea(t,a,s,n){const o=this.getQuaternion(H);U(l,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],N(u,u,l);const h=this.getHalfSize(it),c=u[0]<-h[0]?-1:u[0]>h[0]?1:0,e=u[1]<-h[1]?-1:u[1]>h[1]?1:0,r=u[2]<-h[2]?-1:u[2]>h[2]?1:0,g=Math.abs(c)+Math.abs(e)+Math.abs(r);if(g===0)return 1/0;const m=g===1?4:6,z=6*(c+3*e+9*r+13);qt(L,o),Kt(L,L,h);const A=this.getCenter(k);for(let $=0;$<m;$++){const zt=Aa[z+$];B(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),ia(u,u,L),lt(W,A,u),W[3]=1,ea(W,W,a);const pt=1/Math.max(1e-6,W[3]);C[2*$]=W[0]*pt,C[2*$+1]=W[1]*pt}const M=2*m-2;let E=C[0]*(C[3]-C[M+1])+C[M]*(C[1]-C[M-1]);for(let $=2;$<M;$+=2)E+=C[$]*(C[$+3]-C[$-1]);return Math.abs(E)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(H);return U(l,a),N(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(It(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(It(t))}toAaBoundingBox(t){const a=this.getQuaternion(H),s=qt(L,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),h=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-h,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+h}transform(t,a,s,n=0,o=_t(s),h=_t(a),c=Gt(a,h)){if(s===o)a.isGeographic?Qa(this,t,a,n,h):ka(this,t,a,n,h,c);else if(a.isWGS84&&(s.isWebMercator||Ct(s)))Ca(a,this,s,t,n);else if(a.isWebMercator&&Ct(s))Fa(a,this,s,t,n);else{const e=this.getCenter(k);e[2]+=n,St(e,a,0,e,s,0,1),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(H),t.halfSize=this.getHalfSize(it))}}}const l=xt(),H=xt(),pa=xt(),u=d(),Y=d(),W=na();function Va(i,t=new ft){return ga(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function Ba(i,t,a,s,n){const o=i.getQuaternion(H);n.quaternion=o,U(l,o);const h=i.getCenter(k),c=i.getHalfSize(it);if(s===oa.Global){N(f,h,l),mt(F,f),ha(x,F,c),Xt(x,F,x);const e=Ft(x);lt(x,F,c);const r=Ft(x);if(e<a)n.center=h,B(f,a,a,a),n.halfSize=lt(f,c,f);else{const g=r>0?1+t/r:1,m=e>0?1+a/e:1,z=(m+g)/2,A=(m-g)/2;et(x,F,A),n.halfSize=bt(x,x,c,z),et(x,F,z),bt(x,x,c,A),ra(f,f),ca(f,x,f);const M=i.getQuaternion(pa);n.center=N(f,f,M)}}else{n.center=bt(f,h,kt,(a+t)/2);const e=N(f,kt,l);mt(e,e),n.halfSize=bt(F,c,e,(a-t)/2)}return n}function Ca(i,t,a,s,n){t.getCenter(k),k[2]+=n;const o=_t(a);St(k,i,0,k,o,0,1),Jt(o,t,k,a,s)}function Fa(i,t,a,s,n){t.getCenter(k),k[2]+=n,Jt(i,t,k,a,s)}function Jt(i,t,a,s,n){const o=t.getQuaternion(H),h=qt(L,o),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let r=0;r<3;++r)T[r]=c[r]*(e&1<<r?-1:1);for(let r=0;r<3;++r){let g=a[r];for(let m=0;m<3;++m)g+=T[m]*h[3*m+r];jt[3*e+r]=g}}St(jt,i,0,jt,s,0,8),Va(Ta,n)}function ka(i,t,a,s,n=_t(a),o=Gt(a,n)){i.getCorners(Ht),i.getCenter(T),T[2]+=s,ba(a,T,j,n),t.setCenter(j[12],j[13],j[14]);const h=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/h,l[1]=(j[8]-j[2])/h,l[2]=(j[1]-j[4])/h,l[3]=.25*h;const c=i.getQuaternion(H);t.quaternion=_a(l,l,c),U(l,l),B(F,0,0,0);const e=t.getCenter(Ea);for(const r of Ht)r[2]+=s,o(r,0,r,0),Xt(f,r,e),N(f,f,l),mt(f,f),ua(F,F,f);t.halfSize=F}function Qa(i,t,a,s,n=_t(a)){const o=da(a),h=1+Math.max(0,s)/(o.radius+i.centerZ);i.getCenter(T),T[2]+=s,St(T,a,0,T,n,0,1),t.center=T;const c=i.getQuaternion(H);t.quaternion=c,U(l,c),B(f,0,0,1),N(f,f,l);const e=i.getHalfSize(it);B(f,e[0]*Math.abs(f[0]),e[1]*Math.abs(f[1]),e[2]*Math.abs(f[2])),et(f,f,o.inverseFlattening),lt(f,e,f),t.halfSize=et(f,f,h)}const jt=new Array(24),Ta=new Ot(jt,3),T=d(),k=d(),Ea=d(),it=d(),L=fa(),j=la(),Ht=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),F=d(),x=d(),va=Pt(-1,-1,-1);export{Va as J,Ba as L,ft as O};