const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-uc5EIt6r.js","assets/index-B252NKV0.js","assets/index-HngaTkmj.css","assets/json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{gy as d,gz as g,gx as h,gA as m,gB as p,gC as y,cK as a,_ as w}from"./index-B252NKV0.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function v(n){return new q(n)}const u=new Set;function x(n,r,e,f=!1){u.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(u.add(t.name),t&&(f||t.editable)){const l=d(t,o);if(l)return c(g(l,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return h(n)&&typeof r=="string"?e=parseFloat(r):m(n)&&r!=null&&typeof r!="string"?e=String(r):p(n)&&typeof r=="string"&&(e=_(r)),y(e)}let s;function F(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-uc5EIt6r.js").then(n=>n.g),__vite__mapDeps([0,1,2,3]))),s}async function G(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{v as d,c as f,G as j,x as p,F as y};