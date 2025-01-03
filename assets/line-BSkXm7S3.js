import{mv as b,en as I,ij as R,mw as A,jM as E,mx as w,b$ as T,gZ as O}from"./index-DPJiPkbh.js";import{t as m,a as y}from"./DoubleArray-MGZZXTmk.js";import{t as F}from"./IntegerPassUniform-Cz4js9jy.js";import{A as S}from"./Indices-ijvqWnhD.js";import{t as d}from"./Attribute-B-NAci_J.js";import{e as v}from"./ContentObject-tLjB2Ud3.js";import{I as C}from"./Geometry-BiufU1jP.js";import{e as f}from"./VertexAttribute-BnAa5VW0.js";import{u as g,g as $}from"./triangulationUtils-19KnAipc.js";import{u as N,t as j}from"./ElevationContext-DtSabp_5.js";const l={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},L={dash:l.dash,"dash-dot":[...l.dash,...l.dot],dot:l.dot,"long-dash":l["long-dash"],"long-dash-dot":[...l["long-dash"],...l.dot],"long-dash-dot-dot":[...l["long-dash"],...l.dot,...l.dot],none:null,"short-dash":l["short-dash"],"short-dash-dot":[...l["short-dash"],...l["short-dot"]],"short-dash-dot-dot":[...l["short-dash"],...l["short-dot"],...l["short-dot"]],"short-dot":l["short-dot"],solid:null},U=8;function x(t,n){return t==null?t:{pattern:t.slice(),pixelRatio:n}}function rt(t){return{pattern:[t,t],pixelRatio:2}}function st(t){return t!=null&&t.type==="style"?z(t.style):null}function z(t){return t!=null?x(L[t],U):null}function it(t,n,o=null){const e=[],s=n.mapPositions;P(n,e);const i=e[0][1].data,r=e[0][1].indices.length,a=S(r);return Z(n,e,a),G(n,e,a),_(n,e,a),B(n,e,a),H(n,e,a),M(n,e,a),W(n,e,i),new C(t,e,s,v.Line,o)}function P(t,n){const{attributeData:{position:o},removeDuplicateStartEnd:e}=t,s=Y(o)&&e,i=o.length/3-(s?1:0),r=new Array(2*(i-1)),a=s?o.slice(0,-3):o;let u=0;for(let h=0;h<i-1;h++)r[u++]=h,r[u++]=h+1;n.push([f.POSITION,new d(a,r,3,s)])}function Z(t,n,o){if(t.attributeData.colorFeature!=null)return;const e=t.attributeData.color;n.push([f.COLOR,new d(e??b,o,4)])}function _(t,n,o){t.attributeData.normal&&n.push([f.NORMAL,new d(t.attributeData.normal,o,3)])}function B(t,n,o){t.attributeData.colorFeature!=null&&n.push([f.COLORFEATUREATTRIBUTE,new d([t.attributeData.colorFeature],o,1,!0)])}function G(t,n,o){t.attributeData.sizeFeature==null&&n.push([f.SIZE,new d([t.attributeData.size??1],o,1,!0)])}function H(t,n,o){t.attributeData.sizeFeature!=null&&n.push([f.SIZEFEATUREATTRIBUTE,new d([t.attributeData.sizeFeature],o,1,!0)])}function M(t,n,o){t.attributeData.opacityFeature!=null&&n.push([f.OPACITYFEATUREATTRIBUTE,new d([t.attributeData.opacityFeature],o,1,!0)])}function W(t,n,o){if(t.overlayInfo==null||t.overlayInfo.renderCoordsHelper.viewingMode!==I.Global||!t.overlayInfo.spatialReference.isGeographic)return;const e=m(o.length),s=R(t.overlayInfo.spatialReference);for(let p=0;p<e.length;p+=3)A(o,p,e,p,s);const i=o.length/3,r=F(i+1);let a=k,u=q,h=0,c=0;E(a,e[c++],e[c++]),c++,r[0]=0;for(let p=1;p<i+1;++p)p===i&&(c=0),E(u,e[c++],e[c++]),c++,h+=w(a,u),r[p]=h,[a,u]=[u,a];n.push([f.DISTANCETOSTART,new d(r,n[0][1].indices,1,!0)])}function Y(t){const n=t.length;return t[0]===t[n-3]&&t[1]===t[n-2]&&t[2]===t[n-1]}const k=T(),q=T();function lt(t,n){if(t==null||t.length===0)return[];const o=[];return t.forEach(e=>{const s=e.length,i=m(3*s);e.forEach((a,u)=>{i[3*u]=a[0],i[3*u+1]=a[1],i[3*u+2]=a[2]});const r={attributeData:{position:i,normal:n},removeDuplicateStartEnd:!1};o.push(r)}),o}function ut(t,n,o,e){const s=t.type==="polygon"?g.CCW_IS_HOLE:g.NONE,i=t.type==="polygon"?t.rings:t.paths,{position:r,outlines:a}=$(i,!!t.hasZ,s,t.spatialReference),u=m(r.length),h=N(r,t.spatialReference,0,u,0,r,0,r.length/3,n,o,e),c=h!=null;return{lines:c?D(a,r,u):[],projectionSuccess:c,sampledElevation:h}}function ht(t,n){const o=t.type==="polygon"?g.CCW_IS_HOLE:g.NONE,e=t.type==="polygon"?t.rings:t.paths,{position:s,outlines:i}=$(e,!1,o),r=O(s,t.spatialReference,0,s,n,0,s.length/3);for(let a=2;a<s.length;a+=3)s[a]=j;return{lines:r?D(i,s):[],projectionSuccess:r}}function D(t,n,o=null){const e=new Array;for(const{index:s,count:i}of t){if(i<=1)continue;const r=3*s,a=3*i;e.push({position:y(n,3*s,3*i),mapPositions:o!=null?y(o,r,a):void 0})}return e}export{lt as R,it as b,rt as h,ht as l,st as n,ut as p};
