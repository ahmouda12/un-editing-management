import{s as c,r as u,t as f,u as p,v as m}from"./index-B252NKV0.js";async function g(e,s,i,o){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=u(e),r=i.toJSON(),a=f(t.query,{query:p({...r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n.success}export{g as deleteForwardEdits};