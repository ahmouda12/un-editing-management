import{s as d,r as u,t as c,u as f,v as g}from"./index-DPJiPkbh.js";async function h(a,s,r,e){if(!s)throw new d("start-reading:missing-guid","guid for version is missing");const t=u(a),o=c(t.query,{query:f({sessionId:r,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${t.path}/versions/${s}/startReading`,{data:i}=await g(n,o);return!!i&&i.success}export{h as startReading};