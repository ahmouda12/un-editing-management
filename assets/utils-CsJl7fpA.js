import{gh as G,gb as j,ad as z,gi as L,gj as O,gk as E,gl as V,gm as Z,gn as A,f as B,fB as D,go as P}from"./index-DPJiPkbh.js";import{c as T,B as R}from"./utils-BPDqzHGa.js";let m=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function W(t,e,o,r){const s=G(o)?j(o):null,u=s?Math.round((s.valid[1]-s.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new z(i.geometry);return L(e,a,a,a.hasZ,a.hasM),i.geometry=s?Y(a,u??0,r[0]):a,i})}function q(t,e=18,o,r,s){const u=new Float64Array(r*s);e=Math.round(D(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const w=P(o);for(const{geometry:h,attributes:M}of t){const{x:p,y:c}=h,$=Math.max(0,p-e),N=Math.max(0,c-e),F=Math.min(s,c+e),I=Math.min(r,p+e),g=+w(M);for(let f=N;f<F;f++)for(let d=$;d<I;d++){const b=f*r+d,y=O(d-p,f-c,e)*g,l=u[b]+=y;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function _(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:s,ms:u}=e.groups;return Number(o)*E.hours+Number(r)*E.minutes+Number(s)*E.seconds+Number(u||0)}async function H(t,e,o=!0){if(!e)return[];const{field:r,field2:s,field3:u,fieldDelimiter:i,fieldInfos:a,timeZone:w}=t,h=r&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===r.toLowerCase())),M=!!h&&V(h),p=!!h&&Z(h),c=t.valueExpression,$=t.normalizationType,N=t.normalizationField,F=t.normalizationTotal,I=[],g=t.viewInfoParams;let f=null,d=null;if(c){if(!m){const{arcadeUtils:l}=await A();m=l}m.hasGeometryOperations(c)&&await m.enableGeometryOperations(),f=m.createFunction(c),d=g?m.getViewInfo({viewingMode:g.viewingMode,scale:g.scale,spatialReference:new B(g.spatialReference)}):null}const b=t.fieldInfos,y=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&b?{fields:b}:null;return e.forEach(l=>{const x=l.attributes;let n;if(c){const v=y?{...l,layer:y}:l,C=m.createExecContext(v,d,w);n=m.executeFunction(f,C)}else x&&(n=x[r],s?(n=`${T(n)}${i}${T(x[s])}`,u&&(n=`${n}${i}${T(x[u])}`)):typeof n=="string"&&o&&(p?n=n?new Date(n).getTime():null:M&&(n=n?_(n):null)));if($&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[N]);n=R(n,$,v,F)}I.push(n)}),I}export{H as b,W as j,_ as w,q as x};