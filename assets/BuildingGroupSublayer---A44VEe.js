import{x as u,y as l,B as c,bh as p,h9 as b,hq as h}from"./index-DPJiPkbh.js";import{a as g,_ as f}from"./BuildingComponentSublayer-B_gbnB0t.js";var i;const y={type:p,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}};function d(e,n,s){if(e&&Array.isArray(e))return new p(e.map(r=>{const a=m(r);if(a){const t=new a;return t.read(r,s),t}return s!=null&&s.messages&&r&&s.messages.push(new b("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:s})),null}))}let o=i=class extends g{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return h(this,e=>i.forEachSublayer(this.sublayers,n=>{n.type!=="building-group"&&e(n)}))}};function m(e){return e.layerType==="group"?o:f}u([l({type:["hide","show","hide-children"],json:{write:!0}})],o.prototype,"listMode",void 0),u([l(y)],o.prototype,"sublayers",void 0),o=i=u([c("esri.layers.buildingSublayers.BuildingGroupSublayer")],o),function(e){function n(s,r){s.forEach(a=>{r(a),a.type==="building-group"&&n(a.sublayers,r)})}e.sublayersProperty=y,e.readSublayers=d,e.forEachSublayer=n}(o||(o={}));const v=o;export{v as d};
