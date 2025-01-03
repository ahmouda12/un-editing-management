import{bb as y,f as E,b5 as S,a6 as w,ad as D,iF as M,iG as h,aU as N}from"./index-DPJiPkbh.js";import{$ as d}from"./Mesh-BGR1nbUR.js";import{d as F}from"./georeference-18LDVEFC.js";import{o as T,i as b}from"./External-B04G2qXv.js";import"./axisAngleDegrees-B1MWDIoz.js";import"./quat-B_RTSvGc.js";import"./MeshComponent-h79hEkUa.js";import"./imageUtils-CbDOqHX3.js";import"./MeshLocalVertexSpace-BiaaX75A.js";import"./meshVertexSpaceUtils-BjFcMx2J.js";import"./vec3-CkCkHRdL.js";import"./triangulationUtils-19KnAipc.js";import"./earcut-nZVQjWaZ.js";import"./DoubleArray-MGZZXTmk.js";import"./Indices-ijvqWnhD.js";import"./deduplicate-BSZzOE1N.js";import"./Attribute-B-NAci_J.js";import"./ContentObject-tLjB2Ud3.js";import"./Geometry-BiufU1jP.js";import"./basicInterfaces-DngWxyLO.js";import"./Util-C76gCxal.js";import"./triangle-aMXw_G3u.js";import"./lineSegment-BXFQuctu.js";import"./VertexAttribute-BnAa5VW0.js";import"./doublePrecisionUtils-B0owpBza.js";import"./mat3-CakTilsz.js";import"./spatialReferenceEllipsoidUtils-MJ9Uj9G-.js";import"./computeTranslationToOriginAndRotation-DJULrcwj.js";import"./BufferView-D7hl-e1J.js";const l=()=>N.getLogger("esri.rest.support.meshFeatureSet");function mt(t,e,r){const o=r.features;r.features=[],delete r.geometryType;const n=y.fromJSON(r);if(n.geometryType="mesh",!r.assetMaps)return n;const s=$(e,r.assetMaps),i=t.sourceSpatialReference??E.WGS84,p=r.globalIdFieldName,{outFields:a}=t,f=a!=null&&a.length>0?I(a.includes("*")?null:new Set(a)):()=>({});for(const m of o){const u=x(m,p,i,e,s);u!=null&&n.features.push(new S({geometry:u,attributes:f(m)}))}return n}function I(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function x(t,e,r,o,n){const s=t.attributes[e],i=n.get(s);if(i==null)return l().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",t),null;if(!t.geometry)return l().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",t),null;const p=L(t,r,o),a=w.fromJSON(t.geometry);a.spatialReference=r;const f=O(t.attributes,o),m=r.isGeographic?"local":"georeferenced",u=A(i);return u?d.createWithExternalSource(p,u,{extent:a,transform:f,vertexSpace:m}):d.createIncomplete(p,{extent:a,transform:f,vertexSpace:m})}function L({attributes:t},e,{transformFieldRoles:r}){const o=t[r.originX],n=t[r.originY],s=t[r.originZ];return new D({x:o,y:n,z:s,spatialReference:e})}function O(t,{transformFieldRoles:e}){return new F({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}var c;function $(t,e){const r=new Map;for(const o of e){const n=o.parentGlobalId;if(n==null)continue;const s=o.assetName,i=o.assetType,p=o.assetHash,a=o.assetURL,f=o.conversionStatus,m=o.seqNo,u=M(i,t.supportedFormats);if(!u){l().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const g=h(r,n,()=>({files:new Map}));h(g.files,s,()=>({name:s,type:i,mimeType:u,status:P(f),parts:[]})).parts[m]={hash:p,url:a}}return r}function A(t){const e=Array.from(t.files.values()),r=new Array;for(const o of e){if(o.status!==c.COMPLETED)return null;const n=new Array;for(const s of o.parts){if(!s)return null;n.push(new T(s.url,s.hash))}r.push(new b(o.name,o.mimeType,n))}return r}function P(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{$ as assetMapFromAssetMapsJSON,x as extractMesh,mt as meshFeatureSetFromJSON};
