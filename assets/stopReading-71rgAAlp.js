import{s as d,r as u,t as c,u as p,v as g}from"./index-B252NKV0.js";async function m(o,s,a,e){if(!s)throw new d("stop-reading:missing-guid","guid for version is missing");const i=u(o),r=c(i.query,{query:p({sessionId:a,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${i.path}/versions/${s}/stopReading`,{data:t}=await g(n,r);return!!t&&t.success}export{m as stopReading};