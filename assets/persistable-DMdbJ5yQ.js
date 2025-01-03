import{eu as j,ev as x,ew as N,ex as v,ey as P,ez as b,eA as A,eB as S,eC as w,eD as R,s as O,eE as F,D as z,V as C,eF as D,M as J,eG as K}from"./index-DPJiPkbh.js";import{i as V}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-BlAvASkD.js";function L(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=B(e,t,n);for(const a of o){const i=j(t,a,n);for(const r in s)i[r]=s[r]}}}function B(e,o,t){if((e==null?void 0:e.type)==="resource")return E(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=K;return{read:n,write:s}}}}function E(e,o,t){const n=x(o,t);return{type:String,read:(s,a,i)=>{const r=N(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=M(s),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),d=n.type!==String&&(!V(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>b(r.origin)),l={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!A(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?G(l):H(l):r!=null&&r.portalItem&&(p==null||S(p)!=null||w(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=R(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?F(c.jsonString):(r==null?void 0:r.filename)??z(),d=C((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),l=`${d}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===l)??s.resources.toAdd.find(({resource:f})=>f.path===l);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(l);w(o)&&s.resources&&s.resources.pendingOperations.push(D(o).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const $=(t==null?void 0:t.compress)??!1;s.resources&&U({...e,resource:u,content:c,compress:$,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function G(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),p=y(c),d=J(r.path),l=(n==null?void 0:n.compress)??!1;p===d?(o.resources&&U({...e,resource:r,content:c,compress:l,updates:o.resources.toUpdate}),a[i]=t):g(e)}function H({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function U({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{Y(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function M(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{L as j};
