import{hw as w,bh as _,I as T,v as I,x as o,y as r,B as f,bv as $,bw as O,bx as x,hz as L,by as b,h$ as M,h_ as N,g1 as A,eS as j,l1 as P,a9 as D,s as l,ic as c,id as U,aU as m,ie as V,a3 as J,ig as E,bD as K}from"./index-B252NKV0.js";import{j as z}from"./persistable-B0Qw3aes.js";import{L as R,P as u}from"./SceneService-zIldHxGp.js";import{s as C,l as B,u as F,m as H}from"./I3SLayerDefinitions-BwcMGM1-.js";import{f as d}from"./SceneModification-CRfgO_qy.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-Vp_HFlZe.js";import"./originUtils-D69mHv66.js";import"./I3SIndexInfo-CSS6MU43.js";import"./resourceUtils-Fm9-BaIE.js";import"./resourceUtils-Dmt6pHqI.js";import"./saveAPIKeyUtils-Cqg1dAPN.js";import"./saveUtils-BUU9RtL_.js";var a;let n=a=class extends w(_.ofType(d)){constructor(e){super(e),this.url=null}clone(){return new a({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const s=new a;for(const p of e)s.add(d.fromJSON(p,t));return s}static async fromUrl(e,t,s){const p={url:T(e),origin:"service"},g=await I(e,{responseType:"json",signal:s==null?void 0:s.signal}),S=t.toJSON(),y=[];for(const h of g.data)y.push(d.fromJSON({...h,geometry:{...h.geometry,spatialReference:S}},p));return new a({url:e,items:y})}};o([r({type:String})],n.prototype,"url",void 0),n=a=o([f("esri.layers.support.SceneModifications")],n);const v=n;let i=class extends R($(O(x(L(b(M(N(K)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(A(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,j))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,s){this._modificationsSource={url:P(e,s),context:s}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){D(s)}if(await this._fetchService(t),this._modificationsSource!=null){const s=await v.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(u.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(u.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new l("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";c(m.getLogger(this),U(t,"absolute-height",e)),c(m.getLogger(this),V(t,e))}};o([r({type:String,readOnly:!0})],i.prototype,"geometryType",void 0),o([r({type:["show","hide"]})],i.prototype,"listMode",void 0),o([r({type:["IntegratedMeshLayer"]})],i.prototype,"operationalLayerType",void 0),o([r({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),o([r({type:C,readOnly:!0})],i.prototype,"nodePages",void 0),o([r({type:[B],readOnly:!0})],i.prototype,"materialDefinitions",void 0),o([r({type:[F],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),o([r({type:[H],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),o([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),o([r({type:v}),z({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],i.prototype,"modifications",void 0),o([J(["web-scene","portal-item"],"modifications")],i.prototype,"readModifications",null),o([r(E)],i.prototype,"elevationInfo",null),o([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),i=o([f("esri.layers.IntegratedMeshLayer")],i);const re=i;export{re as default};