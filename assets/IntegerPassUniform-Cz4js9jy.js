const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/basis_transcoder-BCreYDlB.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css"])))=>i.map(i=>d[i]);
import{dX as de,dY as vt,eN as ye,ep as qt,d5 as qe,ee as pt,jM as Ke,b$ as Kt,s as Oe,aU as gt,ab as Qt,kz as pe,di as W,bO as h,cz as k,bL as O,cY as ze,ka as Yt,mU as Zt,mS as Jt,mT as er,dZ as tr,ke as rr,eo as ar,dW as nr,ob as me,uE as Qe,dU as He,x as Y,n_ as Ye,cs as we,ca as _t,cn as Tt,_ as or,hg as ir,eX as sr,eC as Ze,rB as lr,gY as K,sR as Q,E as Je,sr as cr,gG as ur,gI as dr,cT as mr,c1 as Ue,c5 as D,dR as fr,c8 as et,cM as hr,f$ as M}from"./index-DPJiPkbh.js";import{E as vr,c as $,G as U,L as V,D as Ce,O as P,I as f}from"./enums-DSseSvdG.js";import{c as pr,m as Z,a as gr,e as _r}from"./Texture-BRxaK8g9.js";import{a as d}from"./BindType-BmZEZMMh.js";import{o as s,n as ge}from"./interfaces-CGza0uBR.js";import{s as Ge}from"./Util-C76gCxal.js";import{e as g}from"./VertexAttribute-BnAa5VW0.js";import{a as Tr,u as J,N as L}from"./basicInterfaces-DngWxyLO.js";import{n as Sr,j as xr}from"./mat3-CakTilsz.js";import{r as ee,t as Ar}from"./ShaderTechniqueConfiguration-Ba2Oo7i0.js";import{o as Er,r as br}from"./doublePrecisionUtils-B0owpBza.js";import{t as $r,h as Rr}from"./Material-CcaRhBp-.js";import{t as yr}from"./requestImageUtils-QtRT18sL.js";import{r as wr,e as Cr}from"./ContentObject-tLjB2Ud3.js";function bn(e,t=!1){return e<=de?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function $n(e){return vt(e)?e.length<de?e:new Float32Array(e):e.length<de?Array.from(e):e}function Rn(e){return(vt(e)?e.length:e.byteLength/8)<=de?Array.from(e):new Float32Array(e)}function yn(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}let wn=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Ln=class{constructor(t,r,a){this.release=a,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=ye(this._program),this._pipeline=this._configuration=null}reload(t){ye(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return vr.TRIANGLES}getPipeline(t,r,a){return this._pipeline}initializeConfiguration(t,r){}},In=class{constructor(t,r,a){this._context=t,this._locations=a,this._textures=new Map,this._freeTextureUnits=new qt({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=pr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((r==null?void 0:r.glName)==null){const n=this._textures.get(t);return n&&(this._context.bindTexture(null,n.unit),this._freeTextureUnit(n),this._textures.delete(t)),null}let a=this._textures.get(t);return a==null?(a=this._allocTextureUnit(r),this._textures.set(t,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(t,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){var t;this._context.useProgram(this),this._textures.forEach((r,a)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(a,r.unit)}),(t=this._fragmentUniforms)==null||t.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};function St(e){e.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Lr(e){e.include(St),e.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function Mn(e){e.code.add(s`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}let _=class{constructor(t,r,a,n,o=null){if(this.name=t,this.type=r,this.arraySize=o,this.bind={[d.Pass]:null,[d.Draw]:null},n)switch(a){case d.Pass:this.bind[d.Pass]=n;break;case d.Draw:this.bind[d.Draw]=n}}equals(t){return this.type===t.type&&this.name===t.name&&this.arraySize===t.arraySize}},Be=class extends _{constructor(t,r){super(t,"vec2",d.Pass,(a,n,o)=>a.setUniform2fv(t,r(n,o)))}},Pr=class extends _{constructor(t,r){super(t,"vec4",d.Pass,(a,n,o)=>a.setUniform4fv(t,r(n,o)))}};function zn(e){e.fragment.uniforms.add(new Pr("projInfo",(t,r)=>Ir(r.camera))),e.fragment.uniforms.add(new Be("zScale",(t,r)=>Fr(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Ir(e){const t=e.projectionMatrix;return t[11]===0?qe(tt,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):qe(tt,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const tt=pt();function Fr(e){return e.projectionMatrix[11]===0?Ke(rt,0,1):Ke(rt,1,0)}const rt=Kt();let p=class extends _{constructor(t,r){super(t,"vec3",d.Pass,(a,n,o)=>a.setUniform3fv(t,r(n,o)))}},Mr=class extends _{constructor(t,r){super(t,"float",d.Pass,(a,n,o)=>a.setUniform1f(t,r(n,o)))}},ce=class extends _{constructor(t,r){super(t,"sampler2D",d.Pass,(a,n,o)=>a.bindTexture(t,r(n,o)))}},G=class extends _{constructor(t,r){super(t,"mat4",d.Pass,(a,n,o)=>a.setUniformMatrix4fv(t,r(n,o)))}};const xt=()=>gt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let At=class{constructor(){this._includedModules=new Map}include(t,r){if(this._includedModules.has(t)){const a=this._includedModules.get(t);if(a!==r){xt().error("Shader module included multiple times with different configuration.");const n=new Set;for(const o of Object.keys(a))a[o]!==t[o]&&n.add(o);for(const o of Object.keys(t))a[o]!==t[o]&&n.add(o);n.forEach(o=>console.error(`  ${o}: current ${a[o]} new ${t[o]}`))}}else this._includedModules.set(t,r),t(this.builder,r)}},Wn=class extends At{constructor(){super(...arguments),this.vertex=new at,this.fragment=new at,this.attributes=new Or,this.varyings=new zr,this.extensions=new Le,this.constants=new Et,this.outputs=new Ie}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(t){const r=this.extensions.generateSource(t),a=this.attributes.generateSource(t),n=this.varyings.generateSource(t),o=t==="vertex"?this.vertex:this.fragment,i=o.uniforms.generateSource(),l=o.code.generateSource(),c=t==="vertex"?Ur:Hr,I=this.constants.generateSource().concat(o.constants.generateSource()),R=this.outputs.generateSource(t);return`#version 300 es
${r.join(`
`)}

${c}

${I.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${n.join(`
`)}

${R.join(`
`)}

${l.join(`
`)}`}generateBindPass(t){const r=new Map;this.vertex.uniforms.entries.forEach(o=>{const i=o.bind[d.Pass];i&&r.set(o.name,i)}),this.fragment.uniforms.entries.forEach(o=>{const i=o.bind[d.Pass];i&&r.set(o.name,i)});const a=Array.from(r.values()),n=a.length;return(o,i)=>{for(let l=0;l<n;++l)a[l](t,o,i)}}generateBindDraw(t){const r=new Map;this.vertex.uniforms.entries.forEach(o=>{const i=o.bind[d.Draw];i&&r.set(o.name,i)}),this.fragment.uniforms.entries.forEach(o=>{const i=o.bind[d.Draw];i&&r.set(o.name,i)});const a=Array.from(r.values()),n=a.length;return(o,i,l)=>{for(let c=0;c<n;++c)a[c](t,o,i,l)}}},Dr=class{constructor(){this._entries=new Map}add(...t){for(const r of t)this._add(r)}get(t){return this._entries.get(t)}_add(t){if(t!=null){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new Oe(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else xt().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(t=>t.arraySize!=null?`uniform ${t.type} ${t.name}[${t.arraySize}];`:`uniform ${t.type} ${t.name};`)}get entries(){return Array.from(this._entries.values())}},Nr=class{constructor(){this._entries=new Array}add(t){this._entries.push(t)}generateSource(){return this._entries}},at=class extends At{constructor(){super(...arguments),this.uniforms=new Dr,this.code=new Nr,this.constants=new Et}get builder(){return this}},Or=class{constructor(){this._entries=new Array}add(t,r){this._entries.push([t,r])}generateSource(t){return t==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},zr=class{constructor(){this._entries=new Map}add(t,r){this._entries.has(t)&&Ge(this._entries.get(t)===r),this._entries.set(t,r)}generateSource(t){const r=new Array;return this._entries.forEach((a,n)=>r.push(t==="vertex"?`out ${a} ${n};`:`in ${a} ${n};`)),r}},Le=class Pe{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Pe.ALLOWLIST_VERTEX:Pe.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(a=>r.includes(a)).map(a=>`#extension ${a} : enable`)}};Le.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Le.ALLOWLIST_VERTEX=[];let Ie=class Fe{constructor(){this._entries=new Map}add(t,r,a=0){const n=this._entries.get(a);n?Ge(n.name===t&&n.type===r,`Fragment shader output location ${a} occupied`):this._entries.set(a,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Fe.DEFAULT_NAME,type:Fe.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((a,n)=>r.push(`layout(location = ${n}) out ${a.type} ${a.name};`)),r}};Ie.DEFAULT_TYPE="vec4",Ie.DEFAULT_NAME="fragColor";let Et=class m{constructor(){this._entries=new Set}add(t,r,a){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=m._numberToFloatStr(a);break;case"int":n=m._numberToIntStr(a);break;case"bool":n=a.toString();break;case"vec2":n=`vec2(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])})`;break;case"vec3":n=`vec3(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])},                            ${m._numberToFloatStr(a[2])})`;break;case"vec4":n=`vec4(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])},                            ${m._numberToFloatStr(a[2])},                            ${m._numberToFloatStr(a[3])})`;break;case"ivec2":n=`ivec2(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])})`;break;case"ivec3":n=`ivec3(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])},                             ${m._numberToIntStr(a[2])})`;break;case"ivec4":n=`ivec4(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])},                             ${m._numberToIntStr(a[2])},                             ${m._numberToIntStr(a[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(a,o=>m._numberToFloatStr(o)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${n};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Hr=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ur=`precision highp float;
precision highp sampler2D;`;var u;function Yn(e){return Gr(e)||e===u.Depth||e===u.LinearDepth||e===u.Normal||e===u.ObjectAndLayerIdColor}function Gr(e){return e===u.Shadow||e===u.ShadowHighlight||e===u.ShadowExcludeHighlight}function Zn(e){return Wr(e)||e===u.Normal}function bt(e){return e===u.Highlight||e===u.ObjectAndLayerIdColor}function Jn(e){return e===u.Color||bt(e)}function Ve(e){return e===u.Color||e===u.Alpha}function eo(e){return Ve(e)||e===u.ObjectAndLayerIdColor}function Br(e){return Ve(e)||e===u.Highlight}function to(e){return Br(e)||e===u.LinearDepth}function Vr(e){return Ve(e)||bt(e)}function Wr(e){return Vr(e)||e===u.LinearDepth}(function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"})(u||(u={}));const kr={required:[]},ro={required:[u.LinearDepth]},ao={required:[u.CompositeColor]},no={required:[u.Highlight]},oo={required:[u.Depth,u.Normal]};let _e=class extends Qt{consumes(){return kr}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(t){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(t){return!1}},so=class extends _e{},co=class extends _e{constructor(){super(...arguments),this.drapedPriority=0}},mo=class extends _e{},ho=class extends _e{};function po(e){return"prepareTechnique"in e}function go(e){return"prepareTechniques"in e}var nt;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"})(nt||(nt={}));function _o(e,t=!0){e.attributes.add(g.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var ot,it;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(ot||(ot={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(it||(it={}));function jr(e,t){switch(t.normalType){case S.Compressed:e.attributes.add(g.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case S.Attribute:e.attributes.add(g.NORMAL,"vec3"),e.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case S.ScreenDerivative:e.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:pe(t.normalType);case S.COUNT:case S.Ground:}}var S;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(S||(S={}));function Xr(e){e.attributes.add(g.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function $t({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let A=class extends _{constructor(t,r){super(t,"vec3",d.Draw,(a,n,o,i)=>a.setUniform3fv(t,r(n,o,i)))}},Rt=class extends _{constructor(t,r){super(t,"mat3",d.Draw,(a,n,o)=>a.setUniformMatrix3fv(t,r(n,o)))}},Te=class extends _{constructor(t,r){super(t,"mat3",d.Pass,(a,n,o)=>a.setUniformMatrix3fv(t,r(n,o)))}};function yt(e,t){e.include(Xr);const r=e.vertex;r.include($t,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new p("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new p("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new Te("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new G("transformProjFromView",a=>a.transformProjFromView),new Rt("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new A("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new A("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new p("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let qr=class extends ge{constructor(){super(...arguments),this.transformWorldFromViewTH=h(),this.transformWorldFromViewTL=h(),this.transformViewFromCameraRelativeRS=W(),this.transformProjFromView=k()}},Kr=class extends ge{constructor(){super(...arguments),this.transformWorldFromModelRS=W(),this.transformWorldFromModelTH=h(),this.transformWorldFromModelTL=h()}};function bo(e,t){switch(t.normalType){case S.Attribute:case S.Compressed:e.include(jr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Rt("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Te("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case S.Ground:e.include(yt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case S.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:pe(t.normalType);case S.COUNT:}}let $o=class extends qr{constructor(){super(...arguments),this.transformNormalViewFromGlobal=W()}},yo=class extends Kr{constructor(){super(...arguments),this.transformNormalGlobalFromModel=W(),this.toMapSpace=pt()}};function Qr(e){e.uniforms.add(new p("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function Yr(e){e.uniforms.add(new p("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Co(e){Qr(e.fragment),Yr(e.fragment),e.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}var x;function Zr(e,t){switch(t.textureCoordinateType){case x.Default:return e.attributes.add(g.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case x.Compressed:return e.attributes.add(g.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case x.Atlas:return e.attributes.add(g.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(g.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:pe(t.textureCoordinateType);case x.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case x.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(x||(x={}));function Jr(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ea(e,t){switch(e.include(Zr,t),t.textureCoordinateType){case x.Default:case x.Compressed:return void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case x.Atlas:return e.include(Jr),void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:pe(t.textureCoordinateType);case x.None:case x.COUNT:return}}let xe=class extends _{constructor(t,r){super(t,"sampler2D",d.Draw,(a,n,o)=>a.bindTexture(t,r(n,o)))}},Po=class{constructor(t){this._material=t.material,this._techniqueRepository=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(t,r){return this._technique=this._techniqueRepository.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return Tr.LOADED}};var T;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(T||(T={}));function Fo(e,t){const r=e.fragment,a=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===T.Normal&&a&&e.include(ea,t),t.pbrMode!==T.Schematic)if(t.pbrMode!==T.Disabled){if(t.pbrMode===T.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const n=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(n===d.Pass?new ce("texMetallicRoughness",o=>o.textureMetallicRoughness):new xe("texMetallicRoughness",o=>o.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(n===d.Pass?new ce("texEmission",o=>o.textureEmissive):new xe("texEmission",o=>o.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(n===d.Pass?new ce("texOcclusion",o=>o.textureOcclusion):new xe("texOcclusion",o=>o.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),n===d.Pass?r.uniforms.add(new p("emissionFactor",o=>o.emissiveFactor),new p("mrrFactors",o=>o.mrrFactors)):r.uniforms.add(new A("emissionFactor",o=>o.emissiveFactor),new A("mrrFactors",o=>o.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s`applyEmission(${t.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s`applyOcclusion(${t.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function ta(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function wt(e){e.vertex.code.add(s`const float PI = 3.141592653589793;`),e.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Mo(e,t){const r=e.fragment.code;e.include(wt),t.pbrMode!==T.Normal&&t.pbrMode!==T.Schematic&&t.pbrMode!==T.Simplified&&t.pbrMode!==T.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==T.Normal&&t.pbrMode!==T.Schematic||(e.include(ta),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Do(e,t){const r=e.fragment.code;e.include(wt),r.add(s`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}const No=3e5,Oo=5e5;let zo=class extends _{constructor(t,r){super(t,"bool",d.Pass,(a,n,o)=>a.setUniform1b(t,r(n,o)))}};var v,st;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(v||(v={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(st||(st={}));class We{constructor(t){this.field=t}}let ra=class extends We{constructor(t){super(t),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[v.Undefined,v.Undefined,v.Undefined]}},aa=class extends We{constructor(t){super(t),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},na=class extends We{constructor(t){super(t),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}};class oa{}function X(e){return e!=null}function z(e){return typeof e=="number"}function Se(e){return typeof e=="string"}function ia(e){return e==null||Se(e)}function sa(e,t,r,a=k()){const n=e||0,o=t||0,i=r||0;return n!==0&&Zt(a,a,-n/180*Math.PI),o!==0&&Jt(a,a,o/180*Math.PI),i!==0&&er(a,a,i/180*Math.PI),a}function w(e,t,r,a,n){var l;const o=e.minSize,i=e.maxSize;if(e.expression)return!1;if(e.useSymbolValue){const c=a.symbolSize[r];return t.minSize[r]=c,t.maxSize[r]=c,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=v.DefinedSize,!0}if(X(e.field))return X(e.stops)?e.stops.length===2&&z(e.stops[0].size)&&z(e.stops[1].size)?(lt(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=v.DefinedSize,!0):!1:z(o)&&z(i)&&X(e.minDataValue)&&X(e.maxDataValue)?(lt(o,i,e.minDataValue,e.maxDataValue,t,r),t.type[r]=v.DefinedSize,!0):e.valueUnit==="unknown"?!1:Qe[e.valueUnit]!=null?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/Qe[e.valueUnit],t.type[r]=v.DefinedSize,!0):!1;if(!X(e.field)){if((l=e.stops)!=null&&l[0]&&z(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=v.DefinedSize,!0;if(z(o))return t.minSize[r]=o,t.maxSize[r]=o,t.offset[r]=o,t.factor[r]=0,t.type[r]=v.DefinedSize,!0}return!1}function lt(e,t,r,a,n,o){const i=Math.abs(a-r)>0?(t-e)/(a-r):0;n.minSize[o]=i>0?e:t,n.maxSize[o]=i>0?t:e,n.offset[o]=e-r*i,n.factor[o]=i}function la(e,t,r,a){if(e.normalizationField||e.valueRepresentation||!ia(e.field))return null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return null}else t.size.field=e.field}else t.size=new ra(e.field);let n;switch(e.axis){case"width":return n=w(e,t.size,0,r),n?t:null;case"height":return n=w(e,t.size,2,r),n?t:null;case"depth":return n=w(e,t.size,1,r),n?t:null;case"width-and-depth":return n=w(e,t.size,0,r),n&&w(e,t.size,1,r),n?t:null;case null:case void 0:case"all":return n=w(e,t.size,0,r),n=n&&w(e,t.size,1,r),n=n&&w(e,t.size,2,r),n?t:null;default:return`${e.axis}`,null}}function ca(e,t,r){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===v.DefinedSize&&(o*=t.modelSize[n],e.type[n]=v.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let a;if(e.type[0]!==v.Undefined)a=0;else if(e.type[1]!==v.Undefined)a=1;else{if(e.type[2]===v.Undefined)return!1;a=2}for(let n=0;n<3;++n)e.type[n]===v.Undefined&&(e.minSize[n]=e.minSize[a],e.maxSize[n]=e.maxSize[a],e.offset[n]=e.offset[a],e.factor[n]=e.factor[a],e.type[n]=e.type[a]);return!0}function ct(e,t,r){e[4*t]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function ua(e,t,r){if(e.normalizationField)return null;if(Se(e.field)){if(!e.stops)return null;{if(e.stops.length>8)return null;t.color=new aa(e.field);const a=e.stops;for(let n=0;n<8;++n){const o=a[Math.min(n,a.length-1)];t.color.values[n]=o.value,ct(t.color.colors,n,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const a=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)t.color.values[n]=1/0,ct(t.color.colors,n,a)}}return t}function da(e,t,r){if(e.normalizationField)return null;if(Se(e.field)){if(!e.stops)return null;{if(e.stops.length>8)return null;t.opacity=new na(e.field);const a=e.stops;for(let n=0;n<8;++n){const o=a[Math.min(n,a.length-1)];t.opacity.values[n]=o.value,t.opacity.opacityValues[n]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const a=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)t.opacity.values[n]=1/0,t.opacity.opacityValues[n]=a}}return t}function Ae(e,t,r){const a=r===2&&e.rotationType==="arithmetic";t.offset[r]=a?90:0,t.factor[r]=a?-1:1,t.type[r]=1}function ma(e,t,r){if(!Se(e.field))return null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return Ae(e,t.rotation,0),t;case"roll":return Ae(e,t.rotation,1),t;case null:case void 0:case"heading":return Ae(e,t.rotation,2),t;default:return`${e.axis}`,null}}let Vo=class{constructor(t,r=[1,1,1],a=[1,1,1],n=1,o=[0,0,0],i=[1,1,1],l=[0,0,0]){this.supports=t,this.modelSize=r,this.symbolSize=a,this.unitInMeters=n,this.anchor=o,this.scale=i,this.rotation=l}};function Ct(e,t,r){if(!e)return null;const a=e.reduce((n,o)=>{if(!n)return n;if(o.valueExpression)return null;switch(o.type){case"size":return t.supports.size?la(o,n,t,r):n;case"color":return t.supports.color?ua(o,n):n;case"opacity":return t.supports.opacity?da(o,n):null;case"rotation":return t.supports.rotation?ma(o,n,r):n;default:return null}},new oa);return!(e.length>0&&a)||a.size||a.color||a.opacity||a.rotation?a!=null&&a.size&&!ca(a.size,t)?null:a:null}let fa=class{constructor(t,r,a){this.visualVariables=t,this.materialParameters=r,this.requiresShaderTransformation=a}};function jo(e,t){if(!e||$r.TESTS_DISABLE_FAST_UPDATES)return null;const r=Ct(e.visualVariables,t);return r?new fa(r,Pt(r,t),!!r.size):null}function Xo(e,t,r){if(!t||!e)return!1;const a=e.visualVariables,n=Ct(t.visualVariables,r);return!!n&&!!(ne(a.size,n.size,"size")&&ne(a.color,n.color,"color")&&ne(a.rotation,n.rotation,"rotation")&&ne(a.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=Pt(n,r),e.requiresShaderTransformation=!!n.size,!0)}function ne(e,t,r){if(!!e!=!!t||e&&e.field!==(t==null?void 0:t.field))return!1;if(e&&r==="rotation"){const a=e,n=t;for(let o=0;o<3;o++)if(a.type[o]!==n.type[o]||a.offset[o]!==n.offset[o]||a.factor[o]!==n.factor[o])return!1}return!0}class Lt extends ge{constructor(t){super(),this.vvSize=(t==null?void 0:t.size)??null,this.vvColor=(t==null?void 0:t.color)??null,this.vvOpacity=(t==null?void 0:t.opacity)??null}}function Pt(e,t){const r=new Lt(e);return r.vvSize&&(r.vvSymbolAnchor=t.anchor,Yt(te),sa(t.rotation[2],t.rotation[0],t.rotation[1],te),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||W(),Sr(r.vvSymbolRotationMatrix,te)),r}function qo(e,t,r){if(!e.vvSize)return r;tr(C,r);const a=e.vvSymbolRotationMatrix;rr(te,a[0],a[1],a[2],0,a[3],a[4],a[5],0,a[6],a[7],a[8],0,0,0,0,1),ar(C,C,te);for(let n=0;n<3;++n){const o=e.vvSize.offset[n]+t[0]*e.vvSize.factor[n];ut[n]=ze(o,e.vvSize.minSize[n],e.vvSize.maxSize[n])}return nr(C,C,ut),me(C,C,e.vvSymbolAnchor),C}function Ko(e,t,r){if(!t.vvSize)return O(e,1,1,1),e;for(let a=0;a<3;++a){const n=t.vvSize.offset[a]+r[0]*t.vvSize.factor[a];e[a]=ze(n,t.vvSize.minSize[a],t.vvSize.maxSize[a])}return e}function Qo(e,t){const r=e==null?0:t.attributes[e];return typeof r=="number"&&isFinite(r)?r:0}const C=k(),ut=h(),te=k();let Yo=class extends Lt{constructor(){super(...arguments),this.renderOccluded=Rr.Occlude,this.isDecoration=!1}};const Ee=8;let ha=class extends _{constructor(t,r){super(t,"mat4",d.Draw,(a,n,o)=>a.setUniformMatrix4fv(t,r(n,o)))}};function ei(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",He):e.uniforms.add(new A("cameraPosition",(r,a)=>O(It,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function ti(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new G("proj",(a,n)=>n.camera.projectionMatrix),new ha("view",(a,n)=>me(dt,n.camera.viewMatrix,a.origin)),new A("localOrigin",a=>a.origin));const r=a=>O(It,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new G("proj",(a,n)=>n.camera.projectionMatrix),new G("view",(a,n)=>me(dt,n.camera.viewMatrix,r(n))),new p("localOrigin",(a,n)=>r(n)))}const dt=k(),It=h();function va(e){e.uniforms.add(new G("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function ri(e){e.uniforms.add(new Mr("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}class Me extends Ar{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}Y([ee()],Me.prototype,"instancedDoublePrecision",void 0),Y([ee()],Me.prototype,"hasModelTransformation",void 0);const mt=W();function ai(e,t){const r=t.hasModelTransformation,a=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new G("model",o=>o.modelTransformation??Ye)),e.vertex.uniforms.add(new Te("normalLocalOriginFromModel",o=>(xr(mt,o.modelTransformation??Ye),mt)))),t.instanced&&a&&(e.attributes.add(g.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.INSTANCEMODEL,"mat3"),e.attributes.add(g.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;a&&(n.include($t,t),n.uniforms.add(new A("viewOriginHi",(o,i)=>Er(O(oe,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),oe)),new A("viewOriginLo",(o,i)=>br(O(oe,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),oe)))),n.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===u.Normal&&(va(n),n.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const oe=h();let be=class extends Me{};Y([ee({constValue:!0})],be.prototype,"hasSliceHighlight",void 0),Y([ee({constValue:!1})],be.prototype,"hasSliceInVertexProgram",void 0),Y([ee({constValue:d.Pass})],be.prototype,"pbrTextureBindType",void 0);function ft(e){e.varyings.add("linearDepth","float")}function pa(e){e.vertex.uniforms.add(new Be("nearFar",(t,r)=>r.camera.nearFar))}function ga(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function oi(e,t){const{vertex:r}=e;switch(t.output){case u.Color:if(t.receiveShadows)return ft(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case u.LinearDepth:case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:return e.include(yt,t),ft(e),pa(e),ga(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}let ii=class extends ge{constructor(t){super(),this.slicePlaneLocalOrigin=t}};function li(e,t){Ft(e,t,new p("slicePlaneOrigin",(r,a)=>Ot(t,r,a)),new p("slicePlaneBasis1",(r,a)=>{var n;return fe(t,r,a,(n=a.slicePlane)==null?void 0:n.basis1)}),new p("slicePlaneBasis2",(r,a)=>{var n;return fe(t,r,a,(n=a.slicePlane)==null?void 0:n.basis2)}))}function ci(e,t){Ft(e,t,new A("slicePlaneOrigin",(r,a)=>Ot(t,r,a)),new A("slicePlaneBasis1",(r,a)=>{var n;return fe(t,r,a,(n=a.slicePlane)==null?void 0:n.basis1)}),new A("slicePlaneBasis2",(r,a)=>{var n;return fe(t,r,a,(n=a.slicePlane)==null?void 0:n.basis2)}))}function Ft(e,t,...r){if(!t.hasSlicePlane){const i=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const a=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?s`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(o)}function Mt(e,t,r){return e.instancedDoublePrecision?O(_a,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Dt(e,t){return e!=null?Tt(he,t.origin,e):t.origin}function Nt(e,t,r){return e.hasSliceTranslatedView?t!=null?me(Ta,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Ot(e,t,r){if(r.slicePlane==null)return He;const a=Mt(e,t,r),n=Dt(a,r.slicePlane),o=Nt(e,a,r);return o!=null?we(he,n,o):n}function fe(e,t,r,a){if(a==null||r.slicePlane==null)return He;const n=Mt(e,t,r),o=Dt(n,r.slicePlane),i=Nt(e,n,r);return i!=null?(_t(q,a,o),we(he,o,i),we(q,q,i),Tt(q,q,he)):a}const _a=h(),he=h(),q=h(),Ta=k();function ui(e,t){const r=t.output===u.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a?e.attributes.add(g.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(g.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?a?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),e.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}let Sa=class extends _{constructor(t,r,a){super(t,"vec4",d.Pass,(n,o,i)=>n.setUniform4fv(t,r(o,i)),a)}},xa=class extends _{constructor(t,r,a){super(t,"float",d.Pass,(n,o,i)=>n.setUniform1fv(t,r(o,i)),a)}};function fi(e,t){const{vertex:r,attributes:a}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&a.add(g.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new p("vvSizeMinSize",n=>n.vvSize.minSize)),r.uniforms.add(new p("vvSizeMaxSize",n=>n.vvSize.maxSize)),r.uniforms.add(new p("vvSizeOffset",n=>n.vvSize.offset)),r.uniforms.add(new p("vvSizeFactor",n=>n.vvSize.factor)),r.uniforms.add(new Te("vvSymbolRotationMatrix",n=>n.vvSymbolRotationMatrix)),r.uniforms.add(new p("vvSymbolAnchor",n=>n.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Ee),r.uniforms.add(new xa("vvColorValues",n=>n.vvColor.values,Ee),new Sa("vvColorColors",n=>n.vvColor.colors,Ee)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Aa(e){e.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function hi(e,t){switch(t.output){case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:e.fragment.include(Aa),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case u.LinearDepth:e.fragment.include(St),e.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}function Ea(){if($e==null){const e=t=>ir(`esri/libs/basisu/${t}`);$e=or(()=>import("./basis_transcoder-BCreYDlB.js"),__vite__mapDeps([0,1,2])).then(t=>t.b).then(({default:t})=>t({locateFile:e}).then(r=>(r.initializeBasis(),delete r.then,r)))}return $e}let $e;var N;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(N||(N={}));let E=null,ie=null;async function zt(){return ie==null&&(ie=Ea(),E=await ie),ie}function ba(e,t){if(E==null)return e.byteLength;const r=new E.BasisFile(new Uint8Array(e)),a=Ut(r)?Ht(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),a}function $a(e,t){if(E==null)return e.byteLength;const r=new E.KTX2File(new Uint8Array(e)),a=Gt(r)?Ht(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),a}function Ht(e,t,r,a,n){const o=gr(t?$.COMPRESSED_RGBA8_ETC2_EAC:$.COMPRESSED_RGB8_ETC2),i=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*a*o*i)}function Ut(e){return e.getNumImages()>=1&&!e.isUASTC()}function Gt(e){return e.getFaces()>=1&&e.isETC1S()}async function Ra(e,t,r){E==null&&(E=await zt());const a=new E.BasisFile(new Uint8Array(r));if(!Ut(a))return null;a.startTranscoding();const n=Bt(e,t,a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),(o,i)=>a.getImageTranscodedSizeInBytes(0,o,i),(o,i,l)=>a.transcodeImage(l,0,o,i,0,0));return a.close(),a.delete(),n}async function ya(e,t,r){E==null&&(E=await zt());const a=new E.KTX2File(new Uint8Array(r));if(!Gt(a))return null;a.startTranscoding();const n=Bt(e,t,a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),(o,i)=>a.getImageTranscodedSizeInBytes(o,0,0,i),(o,i,l)=>a.transcodeImage(l,o,0,0,i,0,-1,-1));return a.close(),a.delete(),n}function Bt(e,t,r,a,n,o,i,l){const{compressedTextureETC:c,compressedTextureS3TC:I}=e.capabilities,[R,ae]=c?a?[N.ETC2_RGBA,$.COMPRESSED_RGBA8_ETC2_EAC]:[N.ETC1_RGB,$.COMPRESSED_RGB8_ETC2]:I?a?[N.BC3_RGBA,$.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[N.BC1_RGB,$.COMPRESSED_RGB_S3TC_DXT1_EXT]:[N.RGBA32,U.RGBA],j=t.hasMipmap?r:Math.min(1,r),F=[];for(let y=0;y<j;y++)F.push(new Uint8Array(i(y,R))),l(y,R,F[y]);return t.internalFormat=ae,t.hasMipmap=F.length>1,t.samplingMode=t.hasMipmap?V.LINEAR_MIPMAP_LINEAR:V.LINEAR,t.width=n,t.height=o,new Z(e,t,{type:"compressed",levels:F})}const se=()=>gt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),wa=542327876,Ca=131072,La=4;function ke(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Pa(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Ia=ke("DXT1"),Fa=ke("DXT3"),Ma=ke("DXT5"),Da=31,Na=0,Oa=1,za=2,Ha=3,Ua=4,Ga=7,Ba=20,Va=21;function Wa(e,t,r){const a=ka(r,t.hasMipmap??!1);if(a==null)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:i,height:l}=a;return t.samplingMode=n.levels.length>1?V.LINEAR_MIPMAP_LINEAR:V.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=i,t.height=l,new Z(e,t,n)}function ka(e,t){const r=new Int32Array(e,0,Da);if(r[Na]!==wa)return se().error("Invalid magic number in DDS header"),null;if(!(r[Ba]&La))return se().error("Unsupported format, must contain a FourCC code"),null;const a=r[Va];let n,o;switch(a){case Ia:n=8,o=$.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Fa:n=16,o=$.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ma:n=16,o=$.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se().error("Unsupported FourCC code:",Pa(a)),null}let i=1,l=r[Ua],c=r[Ha];!(3&l)&&!(3&c)||(se().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const I=l,R=c;let ae,j;r[za]&Ca&&t!==!1&&(i=Math.max(1,r[Ga]));let F=r[Oa]+4;const y=[];for(let Xe=0;Xe<i;++Xe)j=(l+3>>2)*(c+3>>2)*n,ae=new Uint8Array(e,F,j),y.push(ae),F+=j,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:y},internalFormat:o,width:I,height:R}}const ve=16;function vi(e){return Math.ceil(e/ve)*ve}function pi(e){return Math.floor(e/ve)*ve}function ja(e,t){let o=e.width*e.height;if(o<4096)return e instanceof ImageData?Vt(e):e;let i=e.width,l=e.height;do i=Math.ceil(i/2),l=Math.ceil(l/2),o=i*l;while(o>1048576||t!=null&&(i>t||l>t));return je(e,i,l)}function Xa(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const a=t/r;return je(e,Math.round(e.width*a),Math.round(e.height*a))}function je(e,t,r){if(e instanceof ImageData)return je(Vt(e),t,r);const a=document.createElement("canvas");return a.width=t,a.height=r,a.getContext("2d").drawImage(e,0,0,a.width,a.height),a}function Vt(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new Oe("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}class gi extends wr{get parameters(){return this._parameters}constructor(t,r){super(),this._data=t,this.type=Cr.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new sr,this._parameters={...Ka,...r},this._startPreload(t)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(t){t!=null&&(t instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(t,r),this._startPreloadVideoElement(t)):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(Ze(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const a=()=>{t.removeEventListener("canplay",a),t.play()};t.addEventListener("canplay",a)}}}_startPreloadImageElement(t){lr(t.src)||Ze(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}_createDescriptor(t){const r=new _r;return r.wrapMode=this._parameters.wrap??Ce.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?V.LINEAR_MIPMAP_LINEAR:V.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?t.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var t;return((t=this._glTexture)==null?void 0:t.usedMemory)||qa(this._data,this._parameters)}load(t){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Z(t,this._createDescriptor(t),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(t,r):r instanceof Image?this._loadFromImageElement(t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r):(K(r)||Q(r))&&this._parameters.encoding===J.DDS_ENCODING?this._loadFromDDSData(t,r):(K(r)||Q(r))&&this._parameters.encoding===J.KTX2_ENCODING?this._loadFromKTX2(t,r):(K(r)||Q(r))&&this._parameters.encoding===J.BASIS_ENCODING?this._loadFromBasis(t,r):Q(r)?this._loadFromPixelData(t,r):K(r)?this._loadFromPixelData(t,new Uint8Array(r)):null)}_frameUpdate(t,r){return this._glTexture==null||t.readyState<re.HAVE_CURRENT_DATA||r===t.currentTime?r:(this._glTexture.setData(t),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),t.currentTime)}_loadFromDDSData(t,r){return this._glTexture=Wa(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>ya(t,this._createDescriptor(t),r).then(a=>(this._glTexture=a,a)))}_loadFromBasis(t,r){return this._loadAsync(()=>Ra(t,this._createDescriptor(t),r).then(a=>(this._glTexture=a,a)))}_loadFromPixelData(t,r){Ge(this._parameters.width>0&&this._parameters.height>0);const a=this._createDescriptor(t);return a.pixelFormat=this._parameters.components===1?U.LUMINANCE:this._parameters.components===3?U.RGB:U.RGBA,a.width=this._parameters.width??0,a.height=this._parameters.height??0,this._glTexture=new Z(t,a,r),this._glTexture}_loadFromURL(t,r){return this._loadAsync(async a=>{const n=await yr(r,{signal:a});return Je(a),this._loadFromImage(t,n)})}_loadFromImageElement(t,r){return r.complete?this._loadFromImage(t,r):this._loadAsync(async a=>{const n=await cr(r,r.src,!1,a);return Je(a),this._loadFromImage(t,n)})}_loadFromVideoElement(t,r){return r.readyState>=re.HAVE_CURRENT_DATA?this._loadFromImage(t,r):this._loadFromVideoElementAsync(t,r)}_loadFromVideoElementAsync(t,r){return this._loadAsync(a=>new Promise((n,o)=>{const i=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),mr(I)},l=()=>{r.readyState>=re.HAVE_CURRENT_DATA&&(i(),n(this._loadFromImage(t,r)))},c=R=>{i(),o(R||new Oe("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const I=ur(a,()=>c(dr()))}))}_loadFromImage(t,r){let a=r;if(!(a instanceof HTMLVideoElement)){const{maxTextureSize:i}=t.parameters;a=this._parameters.downsampleUncompressed?ja(a,i):Xa(a,i)}const n=Wt(a);this._parameters.width=n.width,this._parameters.height=n.height;const o=this._createDescriptor(t);return o.pixelFormat=this._parameters.components===3?U.RGB:U.RGBA,o.width=n.width,o.height=n.height,this._glTexture=new Z(t,o,a),this._glTexture}_loadAsync(t){const r=new AbortController;this._loadingController=r;const a=t(r.signal);this._loadingPromise=a;const n=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===a&&(this._loadingPromise=null)};return a.then(n,n),a}unload(){if(this._glTexture=ye(this._glTexture),this._loadingController!=null){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}function qa(e,t){if(e==null)return 0;if(K(e)||Q(e))return t.encoding===J.KTX2_ENCODING?$a(e,!!t.mipmap):t.encoding===J.BASIS_ENCODING?ba(e,!!t.mipmap):e.byteLength;const{width:r,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Wt(e):t;return(t.mipmap?4/3:1)*r*a*(t.components||4)||0}function Wt(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var re;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(re||(re={}));const Ka={wrap:{s:Ce.REPEAT,t:Ce.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function _i(e,t){if(!t.multipassEnabled)return;e.fragment.include(Lr),e.fragment.uniforms.add(new ce("terrainDepthTexture",(a,n)=>{var o;return(o=n.multipassTerrain.linearDepth)==null?void 0:o.getTexture()}),new Be("nearFar",(a,n)=>n.camera.nearFar));const r=t.occlusionPass;e.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?s`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:s`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}let Ti=class{constructor(){this.cullAboveGround=!1}};const xi=.1,Ai=.001;function Ei(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const bi={func:P.LESS},$i={func:P.ALWAYS},Ri={mask:255},yi={mask:0},wi=e=>({function:{func:P.NOTEQUAL,ref:e,mask:e},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.KEEP}}),Ci=e=>({function:{func:P.ALWAYS,ref:e,mask:e},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.REPLACE}}),Li={function:{func:P.ALWAYS,ref:L.OutlineVisualElementMask,mask:L.OutlineVisualElementMask},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.ZERO}},Pi={function:{func:P.ALWAYS,ref:L.OutlineVisualElementMask,mask:L.OutlineVisualElementMask},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.REPLACE}},Ii={function:{func:P.EQUAL,ref:L.OutlineVisualElementMask,mask:L.OutlineVisualElementMask},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.KEEP}},Fi={function:{func:P.NOTEQUAL,ref:L.OutlineVisualElementMask,mask:L.OutlineVisualElementMask},operation:{fail:f.KEEP,zFail:f.KEEP,zPass:f.KEEP}};class Qa{constructor(t=h()){this.intensity=t}}class Ya{constructor(t=h(),r=Ue(.57735,.57735,.57735)){this.intensity=t,this.direction=r}}class De{constructor(t=h(),r=Ue(.57735,.57735,.57735),a=!0,n=1,o=1){this.intensity=t,this.direction=r,this.castShadows=a,this.specularStrength=n,this.environmentStrength=o}}let kt=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Za(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t[a];return r}function Re(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t;return r}function B(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]+t[a];return r}function jt(e){return(e+1)*(e+1)}function Ja(e){return ze(Math.floor(Math.sqrt(e)-1),0,2)}function Xt(e,t,r){const a=e[0],n=e[1],o=e[2],i=r;return i.length=jt(t),t>=0&&(i[0]=.28209479177),t>=1&&(i[1]=.4886025119*a,i[2]=.4886025119*o,i[3]=.4886025119*n),t>=2&&(i[4]=1.09254843059*a*n,i[5]=1.09254843059*n*o,i[6]=.31539156525*(3*o*o-1),i[7]=1.09254843059*a*o,i[8]=.54627421529*(a*a-n*n)),i}function en(e,t){const r=jt(e),a=t||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=r;for(let n=0;n<r;n++)a.r[n]=a.g[n]=a.b[n]=0;return a}function tn(e,t){const r=Ja(t.r.length);for(const a of e)fr(Ne,a.direction),Xt(Ne,r,b),Za(b,ue),Re(b,a.intensity[0],H),B(t.r,H),Re(b,a.intensity[1],H),B(t.g,H),Re(b,a.intensity[2],H),B(t.b,H);return t}function rn(e,t){Xt(Ne,0,b);for(const r of e)t.r[0]+=b[0]*ue[0]*r.intensity[0]*4*Math.PI,t.g[0]+=b[0]*ue[0]*r.intensity[1]*4*Math.PI,t.b[0]+=b[0]*ue[0]*r.intensity[2]*4*Math.PI;return t}function an(e,t,r,a){en(t,a),O(r.intensity,0,0,0);let n=!1;const o=nn,i=on,l=sn;o.length=0,i.length=0,l.length=0;for(const c of e)c instanceof De&&!n?(D(r.direction,c.direction),D(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,n=!0):c instanceof De||c instanceof Ya?o.push(c):c instanceof Qa?i.push(c):c instanceof kt&&l.push(c);tn(o,a),rn(i,a);for(const c of l)B(a.r,c.r),B(a.g,c.g),B(a.b,c.b)}const nn=[],on=[],sn=[],b=[0],H=[0],Ne=h(),ue=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class ht{constructor(){this.color=h(),this.intensity=1}}class ln{constructor(){this.direction=h(),this.ambient=new ht,this.diffuse=new ht}}const cn=.4;class Di{constructor(){this._shOrder=2,this._legacy=new ln,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new kt,this._mainLight=new De(h(),Ue(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(t){an(t,this._shOrder,this._mainLight,this._sphericalHarmonics),D(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,et(this._legacy.diffuse.color,this._mainLight.intensity,r),D(le,this._legacy.diffuse.color),et(le,le,cn*this.globalFactor),_t(this._legacy.ambient.color,this._legacy.ambient.color,le)}copyFrom(t){this._sphericalHarmonics.r=Array.from(t.sh.r),this._sphericalHarmonics.g=Array.from(t.sh.g),this._sphericalHarmonics.b=Array.from(t.sh.b),D(this._mainLight.direction,t.mainLight.direction),D(this._mainLight.intensity,t.mainLight.intensity),this._mainLight.castShadows=t.mainLight.castShadows,this._mainLight.specularStrength=t.mainLight.specularStrength,this._mainLight.environmentStrength=t.mainLight.environmentStrength,this.globalFactor=t.globalFactor,this.noonFactor=t.noonFactor}lerpLighting(t,r,a){if(hr(this._mainLight.intensity,t.mainLight.intensity,r.mainLight.intensity,a),this._mainLight.environmentStrength=M(t.mainLight.environmentStrength,r.mainLight.environmentStrength,a),this._mainLight.specularStrength=M(t.mainLight.specularStrength,r.mainLight.specularStrength,a),D(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=M(t.globalFactor,r.globalFactor,a),this.noonFactor=M(t.noonFactor,r.noonFactor,a),t.sh.r.length===r.sh.r.length)for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=M(t.sh.r[n],r.sh.r[n],a),this._sphericalHarmonics.g[n]=M(t.sh.g[n],r.sh.g[n],a),this._sphericalHarmonics.b[n]=M(t.sh.b[n],r.sh.b[n],a);else for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=r.sh.r[n],this._sphericalHarmonics.g[n]=r.sh.g[n],this._sphericalHarmonics.b[n]=r.sh.b[n]}}const le=h();class Ni extends _{constructor(t,r){super(t,"int",d.Pass,(a,n,o)=>a.setUniform1i(t,r(n,o)))}}export{St as $,nt as A,Po as B,ga as C,Lr as D,zn as E,Be as F,G,_o as H,co as I,ro as J,ja as K,zt as L,$n as M,gi as N,$o as O,ci as P,_ as Q,ot as R,zo as S,Qr as T,Yr as U,Do as V,No as W,Oo as X,T as Y,xa as Z,fi as _,_i as a,yt as a$,ri as a0,wt as a1,hi as a2,ui as a3,ft as a4,Yn as a5,$i as a6,Fi as a7,yi as a8,Ii as a9,Mn as aA,oo as aB,kr as aC,cn as aD,Mo as aE,Co as aF,Aa as aG,Xr as aH,ai as aI,oi as aJ,Fo as aK,Zn as aL,Gr as aM,Qo as aN,jo as aO,Xo as aP,Vo as aQ,to as aR,ho as aS,qo as aT,yn as aU,Ee as aV,Sa as aW,bt as aX,De as aY,Ya as aZ,wi as a_,bi as aa,Wr as ab,Jn as ac,Yo as ad,Di as ae,Ti as af,vi as ag,pi as ah,it as ai,yo as aj,Ni as ak,Qa as al,Rn as am,ii as an,ha as ao,A as ap,pa as aq,Vr as ar,Ko as as,Zr as at,jr as au,bo as av,S as aw,ea as ax,xe as ay,Te as az,Mr as b,Jr as b0,li as b1,Ci as b2,mo as b3,po as b4,go as b5,ao as b6,no as b7,qr as b8,Kr as b9,Rt as ba,$t as bb,u as c,ti as d,xi as e,Ei as f,be as g,wn as h,In as i,Ri as j,Pi as k,Li as l,Ve as m,Br as n,Wn as o,so as p,x as q,Ln as r,ce as s,bn as t,ei as u,Pr as v,va as w,p as x,Ai as y,eo as z};
