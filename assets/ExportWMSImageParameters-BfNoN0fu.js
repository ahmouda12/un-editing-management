import{x as a,y as l,B as m,ab as h}from"./index-DPJiPkbh.js";const b={visible:"visibleSublayers"};let s=class extends h{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(b[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,t=e==null?void 0:e.sublayers,i=[],o=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:c}=n;c&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(u?u.forEach(o):i.push(n))};return t==null||t.forEach(o),i}toJSON(){const{layer:e,layers:r}=this,{imageFormat:t,imageTransparency:i,version:o}=e;return{format:t,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:o,layers:r}}};a([l()],s.prototype,"layer",null),a([l({readOnly:!0})],s.prototype,"layers",null),a([l({type:Number})],s.prototype,"scale",void 0),a([l({readOnly:!0})],s.prototype,"version",null),a([l({readOnly:!0})],s.prototype,"visibleSublayers",null),s=a([m("esri.layers.support.ExportWMSImageParameters")],s);export{s as a};
