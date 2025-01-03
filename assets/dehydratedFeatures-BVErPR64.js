import{eY as d,eZ as h,e_ as x,e$ as c,f0 as Z,f1 as k,f as M,f2 as N,f3 as I,f4 as F,f5 as j,f6 as v,f7 as A,f8 as z}from"./index-DPJiPkbh.js";class J{constructor(e,s,n){this.uid=e,this.geometry=s,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}function O(t){return t.geometry!=null}class ${constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function q(t,e){var p;const s=k.fromJSON(t.geometryType),n=M.fromJSON(t.spatialReference),r=t.transform,o=t.objectIdFieldName,m=e==null?void 0:e.maxStringAttributeLength,g=e==null?void 0:e.maxStringAttributeFields;let l;const y=t.features.map(u=>{const i=w(u,s,n,t.objectIdFieldName),a=i.geometry;if(L(i.attributes,g,m,b=>{l??(l=[]);const f=S(i,o);f!=null&&l.push({objectId:f,attribute:b})}),a!=null&&r)switch(a.type){case"point":i.geometry=j(r,a,a,a.hasZ,a.hasM);break;case"multipoint":i.geometry=F(r,a,a,!!a.hasZ,!!a.hasM);break;case"polygon":i.geometry=I(r,a,a,!!a.hasZ,!!a.hasM);break;case"polyline":i.geometry=N(r,a,a,!!a.hasZ,!!a.hasM);break;case"extent":case"mesh":i.geometry=a}return i});return{geometryType:s,features:y,spatialReference:n,fields:((p=t.fields)==null?void 0:p.map(u=>v.fromJSON(u)))??[],objectIdFieldName:t.objectIdFieldName,globalIdFieldName:t.globalIdFieldName,geohashFieldName:t.geohashFieldName,geometryProperties:t.geometryProperties,hasZ:t.hasZ,hasM:t.hasM,exceededTransferLimit:t.exceededTransferLimit,transform:null,missingAttributes:l}}function w(t,e,s,n){return{uid:A(),objectId:n&&t.attributes?t.attributes[n]:null,attributes:t.attributes,geometry:R(t.geometry,e,s),visible:!0}}function R(t,e,s){if(t==null)return null;switch(e){case"point":{const n=t;return{x:n.x,y:n.y,z:n.z,m:n.m,hasZ:n.z!=null,hasM:n.m!=null,type:"point",spatialReference:s}}case"polyline":{const n=t;return{paths:n.paths,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"polyline",spatialReference:s}}case"polygon":{const n=t;return{rings:n.rings,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const n=t;return{points:n.points,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"multipoint",spatialReference:s}}}}function T(t){if(t==null)return 0;let e=32;switch(t.type){case"point":e+=42;break;case"polyline":case"polygon":{let s=0;const n=2+(t.hasZ?1:0)+(t.hasM?1:0),r=t.type==="polyline"?t.paths:t.rings;for(const o of r)s+=o.length;e+=8*s*n+64,e+=128*s,e+=34,e+=32*(r.length+1);break}case"multipoint":{const s=2+(t.hasZ?1:0)+(t.hasM?1:0),n=t.points.length;e+=8*n*s+64,e+=128*n,e+=34,e+=32;break}case"extent":e+=98,t.hasM&&(e+=32),t.hasZ&&(e+=32);break;case"mesh":e+=z(t.vertexAttributes.position,t.vertexAttributes.normal,t.vertexAttributes.uv,t.vertexAttributes.tangent)}return e}function D(t){let e=32;return e+=Z(t.attributes),e+=3,e+=8+T(t.geometry),e}function U(t){if(t==null)return 0;switch(t.type){case"point":return 1;case"polyline":{let e=0;for(const s of t.paths)e+=s.length;return e}case"polygon":{let e=0;for(const s of t.rings)e+=s.length;return e}case"multipoint":return t.points.length;case"extent":return 2;case"mesh":{const e=t.vertexAttributes&&t.vertexAttributes.position;return e?e.length/3:0}default:return}}function Y(t){if(t==null)return!1;switch(t.type){case"extent":case"point":return!0;case"polyline":for(const e of t.paths)if(e.length>0)return!0;return!1;case"polygon":for(const e of t.rings)if(e.length>0)return!0;return!1;case"multipoint":return t.points.length>0;case"mesh":return!t.loaded||t.vertexAttributes.position.length>0}}function _(t,e){switch(d(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[3]=t.x,e[1]=e[4]=t.y,t.hasZ&&(e[2]=e[5]=t.z);break;case"polyline":for(let s=0;s<t.paths.length;s++)h(e,t.paths[s],!!t.hasZ);break;case"polygon":for(let s=0;s<t.rings.length;s++)h(e,t.rings[s],!!t.hasZ);break;case"multipoint":h(e,t.points,!!t.hasZ);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[3]=t.xmax,e[4]=t.ymax,t.zmin!=null&&(e[2]=t.zmin),t.zmax!=null&&(e[5]=t.zmax)}}function B(t,e){switch(x(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[2]=t.x,e[1]=e[3]=t.y;break;case"polyline":for(let s=0;s<t.paths.length;s++)c(e,t.paths[s]);break;case"polygon":for(let s=0;s<t.rings.length;s++)c(e,t.rings[s]);break;case"multipoint":c(e,t.points);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax}}function S(t,e){return t.objectId!=null?t.objectId:t.attributes&&e?t.attributes[e]:null}function L(t,e,s,n){if(e!=null&&e.size&&s!=null&&t)for(const r in t){if(!e.has(r))continue;const o=t[r];typeof o=="string"&&o.length>s&&(n(r),t[r]="")}}export{B as F,S as I,U as M,_ as N,D as Z,q as b,J as f,$ as g,Y as k,O as y,L as z};
