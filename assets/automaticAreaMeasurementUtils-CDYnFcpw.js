import{U as i,j as h}from"./euclideanAreaMeasurementUtils-CSR8zuWh.js";import{mq as q,bL as $,bO as b,mr as g,dq as o,ms as m,iw as y,f as M}from"./index-DPJiPkbh.js";function R({hasZ:r,spatialReference:t,rings:e},s,u=0){const a=q(t);if(a==null)return!1;const l=r?n=>n:n=>$(d,n[0],n[1],u);for(const n of e){const c=[];for(const p of n){const f=[0,0,u];a(l(p),0,f,0),c.push(f)}s.push(c)}return!0}const d=b();function G(r){const{spatialReference:t}=r;return g(t,j,k,w,r)}function j(r){return o(Math.abs(m([r],"square-meters")[0]),"square-meters")}function k(r){try{return o(Math.abs(y(r,"square-meters")),"square-meters")}catch{return null}}function w(r){const t=[];return R(r,t)?o(Math.abs(m([{type:"polygon",rings:t,spatialReference:M.WGS84}],"square-meters")[0]),"square-meters"):null}function x(r,t,e=i()){{const s=G(r);return s??h(r,e)}}function S(r,t=i()){return x(r,"on-the-ground",t)}export{S as u};
