const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/knowledgeGraphService-jjWtL9j-.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/GraphQueryStreaming-DS5ySgAX.js"])))=>i.map(i=>d[i]);
import{Q as I,_ as G,J as N,h0 as Q,h1 as V,g8 as j,f as T,p as K,n as M,S as O,iO as P,R as U,iz as B}from"./index-DPJiPkbh.js";import{a as b,b as f,r as p,a0 as C,d as E,G as y,aj as L,q as z,N as W,U as _,T as X,E as q,X as k,l as Y,t as H,ak as Z,al as A,am as $}from"./arcadeUtils-Cr9weE92.js";import{l as nn}from"./portalUtils-D7puu54m.js";import{a as tn,m as en,t as rn,p as an,c as on}from"./GraphQueryStreaming-DS5ySgAX.js";import"./number-AqpKdPbh.js";import"./featureConversionUtils-DQOpYys3.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./hash-CcEbRgUF.js";let c=null;async function sn(n){const t=N.geometryServiceUrl??"";if(!t){Q()||await V();for(const e of n)e.container[e.indexer]=j(e.container[e.indexer],T.WGS84);return}const r=n.map(e=>e.container[e.indexer]),i=new K({geometries:r,outSpatialReference:T.WGS84}),s=await M(t,i);for(let e=0;e<s.length;e++){const a=n[e];a.container[a.indexer]=s[e]}}async function D(n,t){const r=new O({portal:n,id:t});return await r.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-jjWtL9j-.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await c.fetchKnowledgeGraph(r.url)}function v(n,t,r,i,s){if(n===null)return null;if(y(n)||q(n))return n;if(k(n)||k(n))return n.toJSDate();if(Y(n))return n.toStorageFormat();if(H(n))return n.toStorageString();if(Z(n)){const e={};for(const a of n.keys())e[a]=v(n.field(a),t,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(_(n)){const e=n.map(a=>v(a,t,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(A(n))return n.spatialReference.isWGS84?n:n.spatialReference.isWebMercator&&t?U(n):n}function ln(n,t){if(!n)return n;if(n.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return B(n);if(n.spatialReference.equals(t.spatialReference))return n;throw new f(t,p.WrongSpatialReference,null)}function S(n,t){if(!n)return null;const r={};for(const i in n)r[i]=g(n[i],t);return r}function g(n,t){return n===null?null:_(n)?n.map(r=>g(r,t)):n instanceof en?{graphTypeName:n.typeName,id:n.id,graphType:"entity",properties:S(n.properties,t)}:n instanceof rn?{graphType:"object",properties:S(n.properties,t)}:n instanceof an?{graphTypeName:n.typeName,id:n.id,graphType:"relationship",originId:n.originId??null,destinationId:n.destinationId??null,properties:S(n.properties,t)}:n instanceof on?{graphType:"path",path:n.path?n.path.map(r=>g(r,t)):null}:A(n)?ln(n,t):y(n)||q(n)||$(n)?n:null}function Rn(n){n.mode==="async"&&(n.functions.knowledgegraphbyportalitem=function(t,r){return n.standardFunctionAsync(t,r,(i,s,e)=>{var d,m;if(b(e,2,2,t,r),e[0]===null)throw new f(t,p.PortalRequired,r);if(e[0]instanceof C){const u=E(e[1]);let h=null;return h=(d=t.services)!=null&&d.portal?t.services.portal:I.getDefault(),D(nn(e[0],h),u)}if(y(e[0])===!1)throw new f(t,p.InvalidParameter,r);const a=E(e[0]);return D(((m=t.services)==null?void 0:m.portal)??I.getDefault(),a)})},n.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),n.functions.querygraph=function(t,r){return n.standardFunctionAsync(t,r,async(i,s,e)=>{var x;b(e,2,4,t,r);const a=e[0];if(!L(a))throw new f(t,p.InvalidParameter,r);const d=e[1];if(!y(d))throw new f(t,p.InvalidParameter,r);c===null&&(c=await G(()=>import("./knowledgeGraphService-jjWtL9j-.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let m=null;const u=z(e[2],null);if(!(u instanceof W||u===null))throw new f(t,p.InvalidParameter,r);if(u){let o=[];m=v(u,!0,!1,t,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await sn(o)}const h=new tn({openCypherQuery:d,bindParameters:m});(((x=a==null?void 0:a.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=t.spatialReference);const F=(await c.executeQueryStreaming(a,h)).resultRowsStream.getReader(),R=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(_(l))for(const w of l)R.push(g(w,t));else{const w=[];for(const J of l)w.push(g(l[J],t));R.push(w)}}}catch(o){throw o}return W.convertJsonToArcade(R,X(t),!1,!0)})},n.signatures.push({name:"querygraph",min:2,max:4}))}export{Rn as registerFunctions};
