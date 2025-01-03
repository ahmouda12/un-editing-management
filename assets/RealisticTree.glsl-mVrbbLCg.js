import{kz as St,cp as Ot,dU as Et,wT as $t,oa as oe,cd as So,_ as Pe,b$ as _t,jM as Ce,aJ as At,x as d,y as ut,B as Oo,cR as Eo,eT as $o,eN as _o,iN as Ao,cY as Ro,bL as Se,d5 as q,bO as j,ee as Po,n_ as zo,nT as Je,c1 as Te,dT as Lo,en as Ze,c5 as jo,cx as Rt,cn as we,ce as Pt,c8 as ht,ci as No,ff as Go,kj as Fe,di as zt,wU as Bo,jt as Lt,v as Fo,a9 as jt,s as Do,mF as Nt,eY as Gt,hW as Oe,aU as Io,wV as Vo,cq as Uo,cz as qo,cs as mt,u8 as pt,cM as Wo}from"./index-DPJiPkbh.js";import{i as ft,j as vt}from"./mat3-CakTilsz.js";import{ak as Bt,y as He,Q as ze,b as E,c as g,d as ce,at as de,_ as ue,s as z,P as H,au as Xe,av as Ft,aw as R,a2 as Yo,a3 as ko,aq as Jo,q as J,ax as Zo,ay as Dt,F as he,az as ae,o as Le,H as It,aA as Vt,r as Ke,i as Qe,h as je,E as Ho,p as Xo,A as Me,X as De,aB as Ko,aC as Qo,R as Ie,W as ea,x as ee,v as B,Y as x,aD as ta,aE as et,a1 as oa,T as Ut,U as tt,aF as gt,S as aa,aG as ra,f as ia,aH as qt,aI as Wt,u as Ee,aJ as Yt,a as $e,aK as kt,aj as na,O as sa,e as la,j as ca,k as da,l as ua,g as ha,aL as Ve,aM as Ue,N as Jt,t as xe}from"./IntegerPassUniform-Cz4js9jy.js";import{c as ma,x as Zt,L as pa,i as Ht,O as fa,E as va}from"./BufferView-D7hl-e1J.js";import{r as ga,n as xa,u as xt}from"./vec3-CkCkHRdL.js";import{l as ba,n as ya,i as K,o as Ta,j as wa,k as Ma,u as bt,t as Ca,m as Sa}from"./DefaultMaterial_COLOR_GAMMA-KFGBhAW-.js";import{r as qe}from"./resourceUtils-BOaxdhtD.js";import{i as Oa,f as Ea}from"./vec2f32-BbH2jxlN.js";import{t as Xt}from"./NestedMap-DgiGbX8E.js";import{l as $a}from"./Indices-ijvqWnhD.js";import{t as _a}from"./requestImageUtils-QtRT18sL.js";import{t as Q}from"./Attribute-B-NAci_J.js";import{s as M,e as Z,n as pe}from"./basicInterfaces-DngWxyLO.js";import{I as Kt}from"./Geometry-BiufU1jP.js";import{e as C}from"./VertexAttribute-BnAa5VW0.js";import{H as Aa}from"./InterleavedLayout-nriK6Yun.js";import{o as me,a as Ra,i as Qt,h as eo,r as Pa,u as za}from"./VertexColor.glsl-COPd45YS.js";import{E as La,O as ot,h as ja,c as Na,L as Ga,a as Ba}from"./Material-CcaRhBp-.js";import{S as at,_ as rt,o as te,d as Fa,A as Da,h as Ia,l as Va,a as Ua,b as qa,c as Wa}from"./OrderIndependentTransparency-Dar7ikM6.js";import{d as Ya}from"./verticalOffsetUtils-5CRVG66a.js";import{D as _e,G as ka,t as Ja,_ as Za,O as yt}from"./enums-DSseSvdG.js";import{r as h}from"./ShaderTechniqueConfiguration-Ba2Oo7i0.js";import{o as i,n as it}from"./interfaces-CGza0uBR.js";import{a as fe}from"./BindType-BmZEZMMh.js";import{n as k}from"./symbolColorUtils-PbK7g70N.js";import{I as V}from"./RenderState-DaVlEYWY.js";import{e as Ha,m as Xa}from"./Texture-BRxaK8g9.js";function Ka(e,t){const o=e.fragment;switch(o.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case P.None:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case P.View:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case P.WindingOrder:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:St(t.doubleSidedMode);case P.COUNT:}}var P;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(P||(P={}));function Qa({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:n,emissiveFactor:r,occlusionTexture:l}){return e==null&&t==null&&n==null&&(r==null||Ot(r,Et))&&l==null&&(a==null||a===1)&&(o==null||o===1)}function _i({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:n,emissiveFactor:r,occlusionTexture:l}){return e==null&&t==null&&n==null&&(r==null||Ot(r,Et))&&l==null&&(a==null||a===1)&&(o==null||o===1||o===0)}const to=[1,1,.5],er=[0,.6,.2],tr=[0,1,.2];function oo(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function or(e){e.vertex.code.add(i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.int(k.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.int(k.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.int(k.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.int(k.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function ao(e,t){t.hasSymbolColors?(e.include(or),e.attributes.add(C.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Bt("colorMixMode",o=>La[o.colorMixMode])),e.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ar(e){e.fragment.code.add(i`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.float(He)}) { discard; } }
  `)}let rr=class extends ze{constructor(t,o){super(t,"float",fe.Draw,(a,n,r)=>a.setUniform1f(t,o(n,r)))}};function X(e,t){ro(e,t,new E("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function Ri(e,t){ro(e,t,new rr("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function ro(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==M.Mask&&t.alphaDiscardMode!==M.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case M.Blend:return e.include(ar);case M.Opaque:a.code.add(i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case M.Mask:a.code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case M.MaskBlend:e.fragment.code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function io(e,t){const{vertex:o,fragment:a}=e,n=t.hasColorTexture&&t.alphaDiscardMode!==M.Opaque;switch(t.output){case g.LinearDepth:case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ObjectAndLayerIdColor:ce(o,t),e.include(me,t),e.include(de,t),e.include(ue,t),e.include(Yo,t),e.include(H,t),e.include(ko,t),Jo(e),e.varyings.add("depth","float"),n&&a.uniforms.add(new z("tex",r=>r.texture)),o.code.add(i`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(X,t),a.code.add(i`
          void main(void) {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===g.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}
          }
        `);break;case g.Normal:{ce(o,t),e.include(me,t),e.include(Xe,t),e.include(Ft,t),e.include(de,t),e.include(ue,t),n&&a.uniforms.add(new z("tex",l=>l.texture)),t.normalType===R.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=t.normalType===R.Attribute||t.normalType===R.Compressed;o.code.add(i`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${r?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(H,t),e.include(X,t),a.code.add(i`
          void main() {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===R.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case g.Highlight:ce(o,t),e.include(me,t),e.include(de,t),e.include(ue,t),n&&a.uniforms.add(new z("tex",r=>r.texture)),o.code.add(i`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(H,t),e.include(X,t),e.include(Ra,t),a.code.add(i`
          void main() {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function ir(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(C.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===P.WindingOrder?o.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==J.None&&(e.include(Zo,t),o.uniforms.add(t.pbrTextureBindType===fe.Pass?new z("normalTexture",a=>a.textureNormal):new Dt("normalTexture",a=>a.textureNormal)),t.hasNormalTextureTransform&&(o.uniforms.add(new he("scale",a=>a.scale??$t)),o.uniforms.add(new ae("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??oe))),o.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(i`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(i`return tangentSpace * rawNormal;
}`))}let nr=class extends ze{constructor(t,o){super(t,"vec2",fe.Draw,(a,n,r,l)=>a.setUniform2fv(t,o(n,r,l)))}};const We=4;function no(){const e=new Le,t=e.fragment;e.include(It);const o=(We+1)/2,a=1/(2*o*o);return t.include(Vt),t.uniforms.add(new z("depthMap",n=>n.depthTexture),new Dt("tex",n=>n.colorTexture),new nr("blurSize",n=>n.blurSize),new E("projScale",(n,r)=>{const l=So(r.camera.eye,r.camera.center);return l>5e4?Math.max(0,n.projScale-(l-5e4)):n.projScale}),new he("nearFar",(n,r)=>r.camera.nearFar)),t.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(i`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${i.int(We)}; r <= ${i.int(We)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const sr=Object.freeze(Object.defineProperty({__proto__:null,build:no},Symbol.toStringTag,{value:"Module"}));let so=class lo extends Ke{initializeProgram(t){return new Qe(t.rctx,lo.shader.get().build(),ot)}initializePipeline(){return at({colorWrite:rt})}};so.shader=new je(sr,()=>Pe(()=>Promise.resolve().then(()=>Kr),void 0));const lr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let cr=class extends it{constructor(){super(...arguments),this.projScale=1}},dr=class extends cr{constructor(){super(...arguments),this.intensity=1}},ur=class extends it{},hr=class extends ur{constructor(){super(...arguments),this.blurSize=_t()}};const Tt=16;function co(){const e=new Le,t=e.fragment;return e.include(It),e.include(Ho),t.include(Vt),t.uniforms.add(new E("radius",(o,a)=>Ne(a.camera))),t.code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new he("nearFar",(o,a)=>a.camera.nearFar),new z("normalMap",o=>o.normalTexture),new z("depthMap",o=>o.depthTexture),new E("projScale",o=>o.projScale),new z("rnm",o=>o.noiseTexture),new he("rnmScale",(o,a)=>Ce(wt,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new E("intensity",o=>o.intensity),new he("screenSize",(o,a)=>Ce(wt,a.camera.fullWidth,a.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.code.add(i`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${i.int(Tt)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${i.int(Tt)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function Ne(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const wt=_t(),mr=Object.freeze(Object.defineProperty({__proto__:null,build:co,getRadius:Ne},Symbol.toStringTag,{value:"Module"}));class Ge extends Ke{initializeProgram(t){return new Qe(t.rctx,Ge.shader.get().build(),ot)}initializePipeline(){return at({colorWrite:rt})}}Ge.shader=new je(mr,()=>Pe(()=>Promise.resolve().then(()=>Qr),void 0));var L;function Gi(e=!At("disable-feature:high-quality-idle"),t=null){const o=new Xt;return e?(o.set(V.IDLE,L.Antialiasing,t!=="low"),o.set(V.IDLE,L.HighResolutionAtmosphere,t!=="low"),o.set(V.IDLE,L.HighQualityTransparency,!0),o.set(V.IDLE,L.SSAO,!0),o.set(V.IDLE,L.WaterReflection,!0),o.set(V.IDLE,L.PhysicalPixelRendering,!0)):(o.set(V.ANIMATING,L.HighResolutionShadows,!0),o.set(V.INTERACTING,L.HighResolutionShadows,!0)),o.set(V.IDLE,L.HighResolutionShadows,!0),o.set(V.IDLE,L.HighResolutionVoxel,!0),o}(function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(L||(L={}));const le=2;let be=class extends Xo{constructor(e){super(e),this._context=null,this._passParameters=new dr,this._drawParameters=new hr,this.produces=new Map([[Me.SSAO,()=>this._produces()]])}_getCameraElevation(){var e;return((e=this._context)==null?void 0:e.renderContext.bindParameters.camera.relativeElevation)??1/0}_produces(){return this._enableTime!=null&&this._context!=null&&this._getCameraElevation()<De}consumes(){return this._produces()?Ko:Qo}initializeRenderContext(e){this._context=e,this.addHandles([Eo(()=>{var t;return this.view.qualitySettings.ambientOcclusion||((t=this._context)==null?void 0:t.isFeatureEnabled(L.SSAO))},t=>t?this._enable():this._disable(),$o)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=_o(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var o;if(this._enableTime!=null||!this._context)return;const e=Uint8Array.from(atob(lr),a=>a.charCodeAt(0)),t=new Ha;t.wrapMode=_e.CLAMP_TO_EDGE,t.pixelFormat=ka.RGB,t.wrapMode=_e.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Xa(this._context.renderContext.rctx,t,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ge)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(so)),this._enableTime=Ao(0),(o=this._context)==null||o.requestRender()}renderNode(e,t,o){const a=e.bindParameters,n=o==null?void 0:o.get("normals"),r=n==null?void 0:n.getTexture(),l=n==null?void 0:n.getTexture(Ja);if(this._enableTime==null||this._context==null||!r||!l)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);const c=e.rctx,s=a.camera,p=this.view.qualitySettings.fadeDuration,m=s.relativeElevation,f=Ro((De-m)/(De-ea),0,1),b=p>0?Math.min(p,e.time-this._enableTime)/p:1,y=b*f;this._passParameters.normalTexture=r,this._passParameters.depthTexture=l,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*pr/Ne(s)**6*y;const w=s.fullViewport[2],v=s.fullViewport[3],T=Math.round(w/le),S=Math.round(v/le),$=this._context.fbos,_=$.acquire(w,v,"ssao input",Ie.RG);c.unbindTexture(_.fbo.colorTexture),c.bindFramebuffer(_.fbo),c.setViewport(0,0,w,v),c.bindTechnique(this._ssaoTechnique,a,this._passParameters,this._drawParameters),c.screen.draw();const F=$.acquire(T,S,"ssao blur",Ie.RED);c.unbindTexture(F.fbo.colorTexture),c.bindFramebuffer(F.fbo),this._drawParameters.colorTexture=_.getTexture(),Ce(this._drawParameters.blurSize,0,le/v),c.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),c.setViewport(0,0,T,S),c.screen.draw(),_.release();const D=$.acquire(T,S,"ssao",Ie.RED);return c.unbindTexture(D.fbo.colorTexture),c.bindFramebuffer(D.fbo),c.setViewport(0,0,w,v),c.setClearColor(1,1,1,0),c.clear(Za.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=F.getTexture(),Ce(this._drawParameters.blurSize,le/w,0),c.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),c.setViewport(0,0,T,S),c.screen.draw(),c.setViewport4fv(s.fullViewport),F.release(),b<1&&this._context.requestRender(),D}};d([ut({constructOnly:!0})],be.prototype,"view",void 0),d([ut()],be.prototype,"_context",void 0),be=d([Oo("esri.views.3d.webgl-engine.effects.ssao.SSAO")],be);const pr=.5;function nt(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new z("ssaoTex",(a,n)=>{var r;return(r=n.ssao)==null?void 0:r.getTexture()})),o.constants.add("blurSizePixelsInverse","float",1/le),o.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function fr(e,t){const o=e.fragment,a=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;a===0?(o.uniforms.add(new ee("lightingAmbientSH0",(n,r)=>Se(Mt,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(o.uniforms.add(new B("lightingAmbientSH_R",(n,r)=>q(W,r.lighting.sh.r[0],r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3])),new B("lightingAmbientSH_G",(n,r)=>q(W,r.lighting.sh.g[0],r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3])),new B("lightingAmbientSH_B",(n,r)=>q(W,r.lighting.sh.b[0],r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(o.uniforms.add(new ee("lightingAmbientSH0",(n,r)=>Se(Mt,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0])),new B("lightingAmbientSH_R1",(n,r)=>q(W,r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3],r.lighting.sh.r[4])),new B("lightingAmbientSH_G1",(n,r)=>q(W,r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3],r.lighting.sh.g[4])),new B("lightingAmbientSH_B1",(n,r)=>q(W,r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3],r.lighting.sh.b[4])),new B("lightingAmbientSH_R2",(n,r)=>q(W,r.lighting.sh.r[5],r.lighting.sh.r[6],r.lighting.sh.r[7],r.lighting.sh.r[8])),new B("lightingAmbientSH_G2",(n,r)=>q(W,r.lighting.sh.g[5],r.lighting.sh.g[6],r.lighting.sh.g[7],r.lighting.sh.g[8])),new B("lightingAmbientSH_B2",(n,r)=>q(W,r.lighting.sh.b[5],r.lighting.sh.b[6],r.lighting.sh.b[7],r.lighting.sh.b[8]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==x.Normal&&t.pbrMode!==x.Schematic||o.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Mt=j(),W=Po();function st(e){e.constants.add("ambientBoostFactor","float",ta)}function lt(e){e.uniforms.add(new E("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function uo(e,t){const o=e.fragment;switch(e.include(nt,t),t.pbrMode!==x.Disabled&&e.include(et,t),e.include(fr,t),e.include(oa),o.code.add(i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===x.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),st(o),lt(o),Ut(o),o.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),tt(o),o.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case x.Disabled:case x.WaterOnIntegratedMesh:case x.Water:e.include(gt),o.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case x.Normal:case x.Schematic:o.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new aa("hasFillLights",(a,n)=>n.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new E("lightingSpecularStrength",(a,n)=>n.lighting.mainLight.specularStrength),new E("lightingEnvironmentStrength",(a,n)=>n.lighting.mainLight.environmentStrength)),o.code.add(i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==x.Schematic||t.hasColorTexture?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case x.Simplified:case x.TerrainWithWater:e.include(gt),o.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:St(t.pbrMode);case x.COUNT:}}class vr extends ze{constructor(t,o,a){super(t,"mat4",fe.Draw,(n,r,l,c)=>n.setUniformMatrix4fv(t,o(r,l,c)),a)}}class gr extends ze{constructor(t,o,a){super(t,"mat4",fe.Pass,(n,r,l)=>n.setUniformMatrix4fv(t,o(r,l)),a)}}let xr=class extends it{constructor(){super(...arguments),this.modelTransformation=zo}};class Fi extends xr{constructor(){super(...arguments),this.origin=j()}}function ho(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new gr("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),po(e))}function mo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new vr("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),po(e))}function po(e){const t=e.fragment;t.include(ra),t.uniforms.add(new z("shadowMap",(o,a)=>a.shadowMap.depthTexture),new Bt("numCascades",(o,a)=>a.shadowMap.numCascades),new B("cascadeDistances",(o,a)=>a.shadowMap.cascadeDistances)),t.code.add(i`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function br(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new ae("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??oe)),e.varyings.add("colorUV","vec2"),e.vertex.code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function yr(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==J.None?(e.vertex.uniforms.add(new ae("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??oe)),e.varyings.add("normalUV","vec2"),e.vertex.code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function Tr(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==J.None?(e.vertex.uniforms.add(new ae("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??oe)),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function wr(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==J.None?(e.vertex.uniforms.add(new ae("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??oe)),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Mr(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==J.None?(e.vertex.uniforms.add(new ae("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??oe)),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Ae(e){e.include(ia),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(k.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(k.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(k.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(k.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(k.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function fo(e){const t=new Le,{vertex:o,fragment:a,varyings:n}=t;if(ce(o,e),t.include(qt),n.add("vpos","vec3"),t.include(ue,e),t.include(Wt,e),t.include(Qt,e),t.include(br,e),e.output===g.Color||e.output===g.Alpha){t.include(yr,e),t.include(Tr,e),t.include(wr,e),t.include(Mr,e),Ee(o,e),t.include(Xe,e),t.include(me,e);const r=e.normalType===R.Attribute||e.normalType===R.Compressed;r&&e.offsetBackfaces&&t.include(oo),t.include(ir,e),t.include(Ft,e),e.instancedColor&&t.attributes.add(C.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),t.include(de,e),t.include(Yt,e),t.include(ao,e),t.include(eo,e),o.uniforms.add(new B("externalColor",l=>l.externalColor)),n.add("vcolorExt","vec4"),e.multipassEnabled&&n.add("depth","float"),o.code.add(i`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.float(He)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${r?i`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${r&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case g.Alpha:t.include(H,e),t.include(X,e),t.include($e,e),a.uniforms.add(new E("opacity",r=>r.opacity),new E("layerOpacity",r=>r.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",r=>r.texture)),a.include(Ae),a.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?i`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?i`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case g.Color:t.include(H,e),t.include(uo,e),t.include(nt,e),t.include(X,e),t.include(e.instancedDoublePrecision?ho:mo,e),t.include($e,e),Ee(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new ee("ambient",r=>r.ambient),new ee("diffuse",r=>r.diffuse),new E("opacity",r=>r.opacity),new E("layerOpacity",r=>r.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",r=>r.texture)),t.include(kt,e),t.include(et,e),a.include(Ae),t.include(Ka,e),st(a),lt(a),tt(a),a.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?i`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===R.ScreenDerivative?i`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===x.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?i`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?i`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?i`normalUV`:"vuv0"});`:i`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?i`normalize(posWorld);`:i`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?i`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===x.Normal||e.pbrMode===x.Schematic?i`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?i`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===te.Color?i`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(io,e),t}const Cr=Object.freeze(Object.defineProperty({__proto__:null,build:fo},Symbol.toStringTag,{value:"Module"}));let Sr=class extends sa{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Je(to),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Z.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Te(0,0,0),this.instancedDoublePrecision=!1,this.normalType=R.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Te(.2,.2,.2),this.diffuse=Te(.8,.8,.8),this.externalColor=Lo(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=j(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=pe.Less,this.textureAlphaMode=M.Blend,this.textureAlphaCutoff=la,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ja.Occlude,this.isDecoration=!1}},Ii=class extends na{constructor(){super(...arguments),this.origin=j(),this.slicePlaneLocalOrigin=this.origin}},ct=class vo extends Ke{initializeConfiguration(t,o){o.spherical=t.viewingMode===Ze.Global,o.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?J.Default:J.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,vo.shader)}_initializeProgram(t,o){return new Qe(t.rctx,o.get().build(this.configuration),ot)}_convertDepthTestFunction(t){return t===pe.Lequal?yt.LEQUAL:yt.LESS}_makePipeline(t,o){const a=this.configuration,n=t===te.NONE,r=t===te.FrontFace;return at({blending:a.output!==g.Color&&a.output!==g.Alpha||!a.transparent?null:n?Fa:Da(t),culling:Or(a)?Ia(a.cullFace):null,depthTest:{func:Va(t,this._convertDepthTestFunction(a.customDepthTest))},depthWrite:(n||r)&&a.writeDepth?Ua:null,colorWrite:rt,stencilWrite:a.hasOccludees?ca:null,stencilTest:a.hasOccludees?o?da:ua:null,polygonOffset:n||r?null:qa(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function Or(e){return e.cullFace!==Z.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ct.shader=new je(Cr,()=>Pe(()=>Promise.resolve().then(()=>ei),void 0));class u extends ha{constructor(){super(...arguments),this.output=g.Color,this.alphaDiscardMode=M.Opaque,this.doubleSidedMode=P.None,this.pbrMode=x.Disabled,this.cullFace=Z.None,this.transparencyPassType=te.NONE,this.normalType=R.Attribute,this.textureCoordinateType=J.None,this.customDepthTest=pe.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}d([h({count:g.COUNT})],u.prototype,"output",void 0),d([h({count:M.COUNT})],u.prototype,"alphaDiscardMode",void 0),d([h({count:P.COUNT})],u.prototype,"doubleSidedMode",void 0),d([h({count:x.COUNT})],u.prototype,"pbrMode",void 0),d([h({count:Z.COUNT})],u.prototype,"cullFace",void 0),d([h({count:te.COUNT})],u.prototype,"transparencyPassType",void 0),d([h({count:R.COUNT})],u.prototype,"normalType",void 0),d([h({count:J.COUNT})],u.prototype,"textureCoordinateType",void 0),d([h({count:pe.COUNT})],u.prototype,"customDepthTest",void 0),d([h()],u.prototype,"spherical",void 0),d([h()],u.prototype,"hasVertexColors",void 0),d([h()],u.prototype,"hasSymbolColors",void 0),d([h()],u.prototype,"hasVerticalOffset",void 0),d([h()],u.prototype,"hasSlicePlane",void 0),d([h()],u.prototype,"hasSliceHighlight",void 0),d([h()],u.prototype,"hasColorTexture",void 0),d([h()],u.prototype,"hasMetallicRoughnessTexture",void 0),d([h()],u.prototype,"hasEmissionTexture",void 0),d([h()],u.prototype,"hasOcclusionTexture",void 0),d([h()],u.prototype,"hasNormalTexture",void 0),d([h()],u.prototype,"hasScreenSizePerspective",void 0),d([h()],u.prototype,"hasVertexTangents",void 0),d([h()],u.prototype,"hasOccludees",void 0),d([h()],u.prototype,"multipassEnabled",void 0),d([h()],u.prototype,"hasModelTransformation",void 0),d([h()],u.prototype,"offsetBackfaces",void 0),d([h()],u.prototype,"vvSize",void 0),d([h()],u.prototype,"vvColor",void 0),d([h()],u.prototype,"receiveShadows",void 0),d([h()],u.prototype,"receiveAmbientOcclusion",void 0),d([h()],u.prototype,"textureAlphaPremultiplied",void 0),d([h()],u.prototype,"instanced",void 0),d([h()],u.prototype,"instancedColor",void 0),d([h()],u.prototype,"objectAndLayerIdColorInstanced",void 0),d([h()],u.prototype,"instancedDoublePrecision",void 0),d([h()],u.prototype,"doublePrecisionRequiresObfuscation",void 0),d([h()],u.prototype,"writeDepth",void 0),d([h()],u.prototype,"transparent",void 0),d([h()],u.prototype,"enableOffset",void 0),d([h()],u.prototype,"cullAboveGround",void 0),d([h()],u.prototype,"snowCover",void 0),d([h()],u.prototype,"hasColorTextureTransform",void 0),d([h()],u.prototype,"hasEmissionTextureTransform",void 0),d([h()],u.prototype,"hasNormalTextureTransform",void 0),d([h()],u.prototype,"hasOcclusionTextureTransform",void 0),d([h()],u.prototype,"hasMetallicRoughnessTextureTransform",void 0),d([h({constValue:!1})],u.prototype,"occlusionPass",void 0),d([h({constValue:!0})],u.prototype,"hasVvInstancing",void 0),d([h({constValue:!1})],u.prototype,"useCustomDTRExponentForWater",void 0),d([h({constValue:!1})],u.prototype,"supportsTextureAtlas",void 0),d([h({constValue:!0})],u.prototype,"useFillLights",void 0);function go(e){const t=new Le,{vertex:o,fragment:a,varyings:n}=t;return ce(o,e),t.include(qt),n.add("vpos","vec3"),t.include(ue,e),t.include(Wt,e),t.include(Qt,e),e.output!==g.Color&&e.output!==g.Alpha||(Ee(t.vertex,e),t.include(Xe,e),t.include(me,e),e.offsetBackfaces&&t.include(oo),e.instancedColor&&t.attributes.add(C.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.multipassEnabled&&n.add("depth","float"),t.include(de,e),t.include(Yt,e),t.include(ao,e),t.include(eo,e),o.uniforms.add(new B("externalColor",r=>r.externalColor)),n.add("vcolorExt","vec4"),o.code.add(i`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.float(He)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?i`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===g.Alpha&&(t.include(H,e),t.include(X,e),t.include($e,e),a.uniforms.add(new E("opacity",r=>r.opacity),new E("layerOpacity",r=>r.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",r=>r.texture)),a.include(Ae),a.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?i`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?i`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?i`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===g.Color&&(t.include(H,e),t.include(uo,e),t.include(nt,e),t.include(X,e),t.include(e.instancedDoublePrecision?ho:mo,e),t.include($e,e),Ee(t.fragment,e),Ut(a),st(a),lt(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new ee("ambient",r=>r.ambient),new ee("diffuse",r=>r.diffuse),new E("opacity",r=>r.opacity),new E("layerOpacity",r=>r.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",r=>r.texture)),t.include(kt,e),t.include(et,e),a.include(Ae),tt(a),a.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?i`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?i`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===x.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?i`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?i`albedo = mix(albedo, vec3(1), 0.9);`:i``}
        ${i`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===x.Normal||e.pbrMode===x.Schematic?e.spherical?i`vec3 normalGround = normalize(vpos + localOrigin);`:i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i``}
        ${e.pbrMode===x.Normal||e.pbrMode===x.Schematic?i`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?i`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===te.Color?i`fragColor = premultiplyAlpha(fragColor);`:i``}
      }
    `)),t.include(io,e),t}const Er=Object.freeze(Object.defineProperty({__proto__:null,build:go},Symbol.toStringTag,{value:"Module"}));let xo=class bo extends ct{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=R.Attribute,o.doubleSidedMode=P.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,bo.shader)}};xo.shader=new je(Er,()=>Pe(()=>Promise.resolve().then(()=>ti),void 0));let Re=class extends Na{constructor(t){super(t,Ar),this.supportsEdges=!0,this.produces=new Map([[Me.OPAQUE_MATERIAL,o=>(Ve(o)||Ue(o))&&!this.parameters.transparent],[Me.TRANSPARENT_MATERIAL,o=>(Ve(o)||Ue(o))&&this.parameters.transparent&&this.parameters.writeDepth],[Me.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(Ve(o)||Ue(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new u,this._vertexBufferLayout=Rr(this.parameters)}isVisibleForOutput(t){return t!==g.Shadow&&t!==g.ShadowExcludeHighlight&&t!==g.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:n,vvColor:r}=t,l=t.colorMixMode==="replace",c=t.opacity>0,s=t.externalColor&&t.externalColor[3]>0,p=o||r||n;return a&&p?l||c:a?l?s:c:p?l||c:l?s:c}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Z.None:this.parameters.cullFace,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,t!==g.Color&&t!==g.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=P.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?P.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?P.WindingOrder:P.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&o.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?x.Schematic:x.Normal:x.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Wa,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,a,n,r,l){if(this.parameters.verticalOffset!=null){const c=a.camera;Se(ke,o[12],o[13],o[14]);let s=null;switch(a.viewingMode){case Ze.Global:s=Rt(Ct,ke);break;case Ze.Local:s=jo(Ct,Lr)}let p=0;const m=we(jr,ke,c.eye),f=Pt(m),b=ht(m,m,1/f);let y=null;this.parameters.screenSizePerspective&&(y=No(s,b)),p+=Ga(c,f,this.parameters.verticalOffset,y??0,this.parameters.screenSizePerspective),ht(s,s,p),Go(Ye,s,a.transform.inverseRotation),n=we(Pr,n,Ye),r=we(zr,r,Ye)}Ba(t,a,n,r,Ya(a.verticalOffset),l)}createGLMaterial(t){return new $r(t)}createBufferWriter(){return new Pa(this._vertexBufferLayout)}},$r=class extends za{constructor(t){super({...t,...t.material.parameters})}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){this._output!==g.Color&&this._output!==g.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const o=this._material.parameters;this.updateTexture(o.textureId);const a=t.camera.viewInverseTransposeMatrix;return Se(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?xo:ct,t)}};class _r extends Sr{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Ar=new _r;function Rr(e){const t=Aa().vec3f(C.POSITION);return e.normalType===R.Compressed?t.vec2i16(C.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(C.NORMAL),e.hasVertexTangents&&t.vec4f(C.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(C.UV0),e.hasVertexColors&&t.vec4u8(C.COLOR),e.hasSymbolColors&&t.vec4u8(C.SYMBOLCOLOR),At("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(C.OBJECTANDLAYERIDCOLOR),t}const Pr=j(),zr=j(),Lr=Te(0,0,1),Ct=j(),Ye=j(),ke=j(),jr=j();function se(e){if(e==null)return null;const t=e.offset!=null?e.offset:Oa,o=e.rotation!=null?e.rotation:0,a=e.scale!=null?e.scale:Ea,n=Fe(1,0,0,0,1,0,t[0],t[1],1),r=Fe(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=Fe(a[0],0,0,0,a[1],0,0,0,1),c=zt();return ft(c,r,l),ft(c,n,c),c}class Nr{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Gr{constructor(t,o,a){this.name=t,this.lodThreshold=o,this.pivotOffset=a,this.stageResources=new Nr,this.numberOfVertices=0}}const Y=()=>Io.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Br(e,t){const o=await Fr(e,t),a=await qr(o.textureDefinitions??{},t);let n=0;for(const r in a)if(a.hasOwnProperty(r)){const l=a[r];n+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:a,size:n+Bo(o)}}async function Fr(e,t){const o=t==null?void 0:t.streamDataRequester;if(o)return Dr(e,o,t);const a=await Lt(Fo(e,t));if(a.ok===!0)return a.value.data;jt(a.error),yo(a.error)}async function Dr(e,t,o){const a=await Lt(t.request(e,"json",o));if(a.ok===!0)return a.value;jt(a.error),yo(a.error.details.url)}function yo(e){throw new Do("",`Request for object resource failed: ${e}`)}function Ir(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(Y().warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const r=t.faces;if(r){if(t.vertexAttributes)for(const l in t.vertexAttributes){const c=r[l];c!=null&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(Y().warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),a=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(Y().warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),a=!1)):(Y().warn(`Indexed geometry does not specify face indices for '${l}' attribute`),a=!1)}}else Y().warn("Indexed geometries must specify faces"),a=!1;break}default:Y().warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(Y().warn("Geometry requires material"),a=!1);const n=e.params.vertexAttributes;for(const r in n)n[r].values||(Y().warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Vr(e,t){var w,v;const o=new Array,a=new Array,n=new Array,r=new Xt,l=e.resource,c=Nt.parse(l.version||"1.0","wosr");Yr.validate(c);const s=l.model.name,p=l.model.geometries,m=l.materialDefinitions??{},f=e.textures;let b=0;const y=new Map;for(let T=0;T<p.length;T++){const S=p[T];if(!Ir(S))continue;const $=Wr(S),_=S.params.vertexAttributes,F=[],D=O=>{if(S.params.topology==="PerAttributeArray")return null;const I=S.params.faces;for(const U in I)if(U===O)return I[U].values;return null},re=_[C.POSITION],ve=re.values.length/re.valuesPerElement;for(const O in _){const I=_[O],U=I.values,Be=D(O)??$a(ve);F.push([O,new Q(U,Be,I.valuesPerElement,!0)])}const N=$.texture,A=f&&f[N];if(A&&!y.has(N)){const{image:O,parameters:I}=A,U=new Jt(O,I);a.push(U),y.set(N,U)}const ge=y.get(N),ie=ge?ge.id:void 0,G=$.material;let ne=r.get(G,N);if(ne==null){const O=m[G.substring(G.lastIndexOf("/")+1)].params;O.transparency===1&&(O.transparency=0);const I=A&&A.alphaChannelUsage,U=O.transparency>0||I==="transparency"||I==="maskAndTransparency",Be=A?To(A.alphaChannelUsage):void 0,dt={ambient:Je(O.diffuse),diffuse:Je(O.diffuse),opacity:1-(O.transparency||0),transparent:U,textureAlphaMode:Be,textureAlphaCutoff:.33,textureId:ie,initTextureTransparent:!0,doubleSided:!0,cullFace:Z.None,colorMixMode:O.externalColorMixMode||"tint",textureAlphaPremultiplied:(A==null?void 0:A.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(dt,t.materialParameters),ne=new Re(dt),r.set(G,N,ne)}n.push(ne);const Co=new Kt(ne,F);b+=((v=(w=F.find(O=>O[0]===C.POSITION))==null?void 0:w[1])==null?void 0:v.indices.length)??0,o.push(Co)}return{engineResources:[{name:s,stageResources:{textures:a,materials:n,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:b,lodThreshold:null}],referenceBoundingBox:Ur(o)}}function Ur(e){const t=Gt();return e.forEach(o=>{const a=o.boundingInfo;a!=null&&(Oe(t,a.bbMin),Oe(t,a.bbMax))}),t}async function qr(e,t){const o=new Array;for(const r in e){const l=e[r],c=l.images[0].data;if(!c){Y().warn("Externally referenced texture data is not yet supported");continue}const s=l.encoding+";base64,"+c,p="/textureDefinitions/"+r,m=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:_e.REPEAT,t:_e.REPEAT},preMultiplyAlpha:To(m)!==M.Opaque},b=t!=null&&t.disableTextures?Promise.resolve(null):_a(s,t);o.push(b.then(y=>({refId:p,image:y,parameters:f,alphaChannelUsage:m})))}const a=await Promise.all(o),n={};for(const r of a)n[r.refId]=r;return n}function To(e){switch(e){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function Wr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Yr=new Nt(1,2,"wosr");async function kr(e,t){var f;const o=wo(Vo(e));if(o.fileType==="wosr"){const b=await(t.cache?t.cache.loadWOSR(o.url,t):Br(o.url,t)),{engineResources:y,referenceBoundingBox:w}=Vr(b,t);return{lods:y,referenceBoundingBox:w,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):ba(new ya(t.streamDataRequester),o.url,t,t.usePBR)),n=(f=a.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,r=a.meta.isEsriSymbolResource&&n!=null&&a.meta.ESRI_webstyle==="EsriRealisticTreesStyle";r&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,Xr(a,n));const l=!!t.usePBR,c=a.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:r,mrrFactors:[...tr]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...to]},s={...t.materialParameters,treeRendering:r},{engineResources:p,referenceBoundingBox:m}=Mo(a,c,s,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:p,referenceBoundingBox:m,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function wo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Mo(e,t,o,a){const n=e.model,r=new Array,l=new Map,c=new Map,s=n.lods.length,p=Gt();return n.lods.forEach((m,f)=>{const b=a.skipHighLods===!0&&(s>1&&f===0||s>3&&f===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&f!==a.singleLodIndex;if(b&&f!==0)return;const y=new Gr(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(w=>{const v=b?new Re({}):Jr(n,w,y,t,o,l,c),{geometry:T,vertexCount:S}=Zr(w,v??new Re({})),$=T.boundingInfo;$!=null&&f===0&&(Oe(p,$.bbMin),Oe(p,$.bbMax)),v!=null&&(y.stageResources.geometries.push(T),y.numberOfVertices+=S)}),b||r.push(y)}),{engineResources:r,referenceBoundingBox:p}}function Jr(e,t,o,a,n,r,l){var y,w;const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),s=e.materials.get(t.material),p=t.attributes.texCoord0!=null,m=t.attributes.normal!=null;if(s==null)return null;const f=Hr(s.alphaMode);if(!r.has(c)){if(p){const N=(A,ge=!1)=>{if(A!=null&&!l.has(A)){const ie=e.textures.get(A);if(ie!=null){const G=ie.data;l.set(A,new Jt(qe(G)?G.data:G,{...ie.parameters,preMultiplyAlpha:!qe(G)&&ge,encoding:qe(G)&&G.encoding!=null?G.encoding:void 0}))}}};N(s.textureColor,f!==M.Opaque),N(s.textureNormal),N(s.textureOcclusion),N(s.textureEmissive),N(s.textureMetallicRoughness)}const v=s.color[0]**(1/K),T=s.color[1]**(1/K),S=s.color[2]**(1/K),$=s.emissiveFactor[0]**(1/K),_=s.emissiveFactor[1]**(1/K),F=s.emissiveFactor[2]**(1/K),D=s.textureColor!=null&&p?l.get(s.textureColor):null,re=Qa({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),ve=((y=s.normalTextureTransform)==null?void 0:y.scale)!=null?(w=s.normalTextureTransform)==null?void 0:w.scale:$t;r.set(c,new Re({...a,transparent:f===M.Blend,customDepthTest:pe.Lequal,textureAlphaMode:f,textureAlphaCutoff:s.alphaCutoff,diffuse:[v,T,S],ambient:[v,T,S],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?Z.None:Z.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?R.Attribute:R.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:D!=null?D.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&p?l.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:D!=null&&!!D.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&p?l.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&p?l.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&p?l.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[$,_,F],mrrFactors:re?[...er]:[s.metallicFactor,s.roughnessFactor,a.mrrFactors[2]],isSchematic:re,colorTextureTransformMatrix:se(s.colorTextureTransform),normalTextureTransformMatrix:se(s.normalTextureTransform),scale:[ve[0],ve[1]],occlusionTextureTransformMatrix:se(s.occlusionTextureTransform),emissiveTextureTransformMatrix:se(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:se(s.metallicRoughnessTextureTransform),...n}))}const b=r.get(c);if(o.stageResources.materials.push(b),p){const v=T=>{T!=null&&o.stageResources.textures.push(l.get(T))};v(s.textureColor),v(s.textureNormal),v(s.textureOcclusion),v(s.textureEmissive),v(s.textureMetallicRoughness)}return b}function Zr(e,t){const o=e.attributes.position.count,a=Ta(e.indices||o,e.primitiveType),n=xe(3*o),{typedBuffer:r,typedBufferStride:l}=e.attributes.position;ga(n,r,e.transform,3,l);const c=[[C.POSITION,new Q(n,a,3,!0)]];if(e.attributes.normal!=null){const s=xe(3*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.normal;vt(ye,e.transform),xa(s,p,ye,3,m),c.push([C.NORMAL,new Q(s,a,3,!0)])}if(e.attributes.tangent!=null){const s=xe(4*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.tangent;vt(ye,e.transform),wa(s,p,ye,4,m),c.push([C.TANGENT,new Q(s,a,4,!0)])}if(e.attributes.texCoord0!=null){const s=xe(2*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.texCoord0;Ma(s,p,2,m),c.push([C.UV0,new Q(s,a,2,!0)])}if(e.attributes.color!=null){const s=new Uint8Array(4*o);e.attributes.color.elementCount===4?e.attributes.color instanceof ma?bt(s,e.attributes.color,255):e.attributes.color instanceof Zt?Ca(s,e.attributes.color):e.attributes.color instanceof pa&&bt(s,e.attributes.color,1/256):(s.fill(255),e.attributes.color instanceof Ht?xt(s,e.attributes.color,255,4):e.attributes.color instanceof fa?Sa(s,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof va&&xt(s,e.attributes.color,1/256,4)),c.push([C.COLOR,new Q(s,a,4,!0)])}return{geometry:new Kt(t,c),vertexCount:o}}const ye=zt();function Hr(e){switch(e){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function Xr(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];for(const n of a.parts){const r=n.attributes.normal;if(r==null)return;const l=n.attributes.position,c=l.count,s=j(),p=j(),m=j(),f=new Uint8Array(4*c),b=new Float64Array(3*c),y=Uo(qo(),n.transform);let w=0,v=0;for(let T=0;T<c;T++){l.getVec(T,p),r.getVec(T,s),mt(p,p,n.transform),we(m,p,t.center),pt(m,m,t.radius);const S=m[2],$=Pt(m),_=Math.min(.45+.55*$*$,1);pt(m,m,t.radius),y!==null&&mt(m,m,y),Rt(m,m),o+1!==e.model.lods.length&&e.model.lods.length>1&&Wo(m,m,s,S>-1?.2:Math.min(-4*S-3.8,1)),b[w]=m[0],b[w+1]=m[1],b[w+2]=m[2],w+=3,f[v]=255*_,f[v+1]=255*_,f[v+2]=255*_,f[v+3]=255,v+=4}n.attributes.normal=new Ht(b),n.attributes.color=new Zt(f)}}}const Wi=Object.freeze(Object.defineProperty({__proto__:null,fetch:kr,gltfToEngineResources:Mo,parseUrl:wo},Symbol.toStringTag,{value:"Module"})),Kr=Object.freeze(Object.defineProperty({__proto__:null,build:no},Symbol.toStringTag,{value:"Module"})),Qr=Object.freeze(Object.defineProperty({__proto__:null,build:co,getRadius:Ne},Symbol.toStringTag,{value:"Module"})),ei=Object.freeze(Object.defineProperty({__proto__:null,build:fo},Symbol.toStringTag,{value:"Module"})),ti=Object.freeze(Object.defineProperty({__proto__:null,build:go},Symbol.toStringTag,{value:"Module"}));export{Br as A,be as C,Re as E,ir as T,kr as Y,nr as a,nt as b,st as c,ar as d,Ka as e,fr as f,Fi as g,lt as h,P as i,or as j,Ii as k,Ae as l,rr as m,_i as n,L as o,uo as p,Ri as q,to as r,se as s,er as t,Qa as u,ho as v,Gi as w,mo as x,Wi as y};
