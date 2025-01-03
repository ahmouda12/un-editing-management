import{iH as h,iI as d,iJ as f,v as i}from"./index-DPJiPkbh.js";import{t as I}from"./query-DwX36F8e.js";import"./normalizeUtils-CVZirBXT.js";import"./normalizeUtilsCommon-DTYpWx_K.js";import"./pbfQueryUtils-DlRCjCDR.js";import"./pbf-BAzJBNw5.js";import"./OptimizedGeometry-DLPswkPy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";function l(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function w(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:p}=r,u=h(d(`${n.path}/${o}/attachments/${p}`)),m=f.fromJSON(r);m.set({url:u,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function z(n,t,e){let a={query:I({...n.query,f:"json",...l(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),i(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function G(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(i(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{z as executeAttachmentQuery,G as fetchAttachments,w as processAttachmentQueryResult};
