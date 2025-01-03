import{jM as ie,oL as Te,e7 as ct,b$ as dt,_ as $e,en as pt,x as u,bL as X,cs as G,cx as de,cn as ut,c8 as L,cq as ft,c5 as N,ce as W,cd as ht,ff as vt,ci as gt,cY as mt,ca as Z,c$ as we,jZ as Ot,bO as j,ee as _e,di as Ee,cz as ze,c1 as bt,dT as pe,mW as yt,aJ as De,wR as St,wS as xt,cX as ae,qR as Pt,e3 as Ct,d5 as At,kc as Tt,mv as $t,nT as wt,rI as _t,mU as Et,mS as zt,mT as Dt,bJ as Rt,pQ as jt,pS as It,pR as Ft}from"./index-DPJiPkbh.js";import{n as ue}from"./mat3-CakTilsz.js";import{x as Vt}from"./BufferView-D7hl-e1J.js";import{d as Re,u as Lt,v as R,b as B,w as Nt,a0 as je,S as Mt,a as Ie,s as Fe,o as Ve,P as Le,$ as Ut,f as Ne,_ as Me,a3 as Ue,F as fe,c as g,y as q,e as he,h as Be,r as He,i as Ge,g as We,A as $,ar as Q,as as Bt,a2 as Ht,aq as Gt,a4 as Wt,j as qt,k as kt,l as Yt,z as K,ac as Jt,B as Xt,ad as Zt}from"./IntegerPassUniform-Cz4js9jy.js";import{O as qe,c as ke,t as Qt,s as Kt,f as eo,d as ve,L as to,h as oo,a as io}from"./Material-CcaRhBp-.js";import{H as Ye}from"./InterleavedLayout-nriK6Yun.js";import{s as Je,f as ao,c as Xe,t as ro,e as so,g as no,u as lo,l as co,b as po,O as uo,S as fo,p as ge,y as me,R as ho,o as vo,h as go,a as mo,r as Oo}from"./VertexColor.glsl-COPd45YS.js";import{s as bo}from"./Util-C76gCxal.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";import{o as _,s as yo,a as Ze,S as Qe,A as Ke,_ as et,d as So,h as xo,l as Po,b as Co,c as Ao}from"./OrderIndependentTransparency-Dar7ikM6.js";import{R as Oe,O as To,E as be}from"./enums-DSseSvdG.js";import{r as f}from"./ShaderTechniqueConfiguration-Ba2Oo7i0.js";import{e as re}from"./basicInterfaces-DngWxyLO.js";import{o as $o,x as wo}from"./hydratedFeatures-DhDSkMoS.js";import{o as c}from"./interfaces-CGza0uBR.js";import"./BindType-BmZEZMMh.js";import{J as _o,K as ye,P as Eo,L as zo,M as Do,N as Ro,Q as jo,S as Io}from"./ElevationContext-DtSabp_5.js";import"./floatRGBA-CHZINRxm.js";import"./Texture-BRxaK8g9.js";function Fo(t){return t instanceof Float32Array&&t.length>=16}function Vo(t){return Array.isArray(t)&&t.length>=16}function Lo(t){return Fo(t)||Vo(t)}const tt=.5;function No(t,e){t.include(Je),t.attributes.add(h.POSITION,"vec3"),t.attributes.add(h.NORMAL,"vec3"),t.attributes.add(h.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;Re(o,e),Lt(o,e),o.uniforms.add(new R("viewport",(i,a)=>a.camera.fullViewport),new B("polygonOffset",i=>i.shaderPolygonOffset),new B("cameraGroundRelative",(i,a)=>a.camera.aboveGround?1:-1)),e.hasVerticalOffset&&ao(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(c`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(c`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?c.float(0):c`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Nt(o),e.draped||(o.uniforms.add(new B("perDistancePixelRatio",(i,a)=>Math.tan(a.camera.fovY/2)/(a.camera.fullViewport[2]/2))),o.code.add(c`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.float(tt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&je(o),e.hasScreenSizePerspective&&Xe(o),o.code.add(c`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?c`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":c`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let Mo=class{constructor(){this.factor=new Se,this.factorAlignment=new Se}};class Se{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function se(t){t.uniforms.add(new Mt("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(c`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(c`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Uo(t,e){const{vertex:o,fragment:i}=t;o.include(se),e.multipassEnabled&&(o.include(_o),t.varyings.add("depth","float")),o.code.add(c`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?c`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Ie,e),i.code.add(c`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?c`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function Bo(t){t.vertex.uniforms.add(new B("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ye.Occluded?1:o.hudRenderStyle===ye.NotOccluded?0:.75),new R("viewport",(e,o)=>o.camera.fullViewport),new Fe("hudVisibilityTexture",(e,o)=>{var i;return(i=o.hudVisibility)==null?void 0:i.getTexture()})),t.vertex.include(se),t.vertex.code.add(c`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ot(t){const e=new Ve,o=t.signedDistanceFieldEnabled;if(e.include(No,t),e.include(Le,t),t.occlusionPass)return e.include(Uo,t),e;const{vertex:i,fragment:a}=e;e.include(Je),a.include(Ut),a.include(Ne),e.include(Me,t),e.include(Ue,t),e.include(Bo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),i.uniforms.add(new R("viewport",(s,v)=>v.camera.fullViewport),new fe("screenOffset",(s,v)=>ie(it,2*s.screenOffset[0]*v.camera.pixelRatio,2*s.screenOffset[1]*v.camera.pixelRatio)),new fe("anchorPosition",s=>H(s)),new R("materialColor",s=>s.color)),je(i),o&&(i.uniforms.add(new R("outlineColor",s=>s.outlineColor)),a.uniforms.add(new R("outlineColor",s=>xe(s)?s.outlineColor:Te),new B("outlineSize",s=>xe(s)?s.outlineSize:0))),t.pixelSnappingEnabled&&i.include(se),t.hasScreenSizePerspective&&(ro(i),Xe(i)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.COLOR,"vec4"),e.attributes.add(h.SIZE,"vec2"),e.attributes.add(h.FEATUREATTRIBUTE,"vec4"),i.code.add(c`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?c`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=c`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,l=t.pixelSnappingEnabled?o?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;i.code.add(c`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===g.ObjectAndLayerIdColor?c`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${c.float(q)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.float(q)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${l}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?c`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new Fe("tex",s=>s.texture));const n=t.debugDrawLabelBorder?c`(isBorder > 0.0 ? 0.0 : ${c.float(he)})`:c.float(he),p=c`
    ${t.debugDrawLabelBorder?c`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?c`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:c`
      vec2 samplePos = vtc;
      `}

    ${o?c`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?c`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case g.Color:a.code.add(c`
        void main() {
          ${p}
          ${t.transparencyPassType===_.FrontFace?"fragColor.rgb /= fragColor.a;":""}
        }`);break;case g.Alpha:a.code.add(c`
        void main() {
          ${p}
          fragColor = vec4(fragColor.a);
        }`);break;case g.ObjectAndLayerIdColor:a.code.add(c`
        void main() {
          ${p}
          outputObjectAndLayerIdColor();
        }`);break;case g.Highlight:a.constants.add("occludedHighlightFlag","vec4",so),a.constants.add("unoccludedHighlightFlag","vec4",no),a.code.add(c`
        void main() {
          ${p}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function xe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function H(t,e=it){return t.textureIsSignedDistanceField?Ho(t.anchorPosition,t.distanceFieldBoundingBox,e):ct(e,t.anchorPosition),e}function Ho(t,e,o){e!=null?ie(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):ie(o,0,0)}const it=dt(),Go=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"}));class k extends He{initializeConfiguration(e,o){o.spherical=e.viewingMode===pt.Global}initializeProgram(e){return new Ge(e.rctx,k.shader.get().build(this.configuration),qe)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,i=e===_.NONE,a=e===_.FrontFace,r=this.configuration.hasPolygonOffset?Wo:null,l=o.draped?null:(i||a)&&o.output!==g.Highlight&&(o.depthEnabled||o.occlusionPass)?Ze:null;return Qe({blending:o.output===g.Color||o.output===g.Alpha||o.output===g.Highlight?i?qo:Ke(e):null,depthTest:o.draped?null:{func:To.LEQUAL},depthWrite:l,colorWrite:et,polygonOffset:r})}get primitiveType(){return this.configuration.occlusionPass?be.POINTS:be.TRIANGLES}}k.shader=new Be(Go,()=>$e(()=>Promise.resolve().then(()=>vi),void 0));const Wo={factor:0,units:-4},qo=yo(Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);class m extends We{constructor(){super(...arguments),this.output=g.Color,this.transparencyPassType=_.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}u([f({count:g.COUNT})],m.prototype,"output",void 0),u([f({count:_.COUNT})],m.prototype,"transparencyPassType",void 0),u([f()],m.prototype,"screenCenterOffsetUnitsEnabled",void 0),u([f()],m.prototype,"spherical",void 0),u([f()],m.prototype,"occlusionTestEnabled",void 0),u([f()],m.prototype,"signedDistanceFieldEnabled",void 0),u([f()],m.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),u([f()],m.prototype,"vvSize",void 0),u([f()],m.prototype,"vvColor",void 0),u([f()],m.prototype,"hasVerticalOffset",void 0),u([f()],m.prototype,"hasScreenSizePerspective",void 0),u([f()],m.prototype,"debugDrawLabelBorder",void 0),u([f()],m.prototype,"hasSlicePlane",void 0),u([f()],m.prototype,"hasPolygonOffset",void 0),u([f()],m.prototype,"depthEnabled",void 0),u([f()],m.prototype,"pixelSnappingEnabled",void 0),u([f()],m.prototype,"draped",void 0),u([f()],m.prototype,"multipassEnabled",void 0),u([f()],m.prototype,"cullAboveGround",void 0),u([f()],m.prototype,"occlusionPass",void 0),u([f()],m.prototype,"objectAndLayerIdColorInstanced",void 0),u([f({constValue:!0})],m.prototype,"hasSliceInVertexProgram",void 0),u([f({constValue:!1})],m.prototype,"hasVvInstancing",void 0);class Vi extends ke{constructor(e){super(e,new ii),this._configuration=new m,this.produces=new Map([[$.HUD_MATERIAL,o=>Q(o)&&!this.parameters.drawInSecondSlot],[$.LABEL_MATERIAL,o=>Q(o)&&this.parameters.drawInSecondSlot],[$.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[$.DRAPED_MATERIAL,o=>Q(o)]])}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===$.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===g.Color&&(this._configuration.debugDrawLabelBorder=!!Qt.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,i,a,r,l){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const n=this.parameters,p=i.point,s=i.camera;let{scaleX:v,scaleY:b}=this._getScreenScale(e);v*=s.pixelRatio,b*=s.pixelRatio,ue(te,o),e.attributes.has(h.FEATUREATTRIBUTE)&&Jo(te);const d=e.attributes.get(h.POSITION),S=e.attributes.get(h.SIZE),A=e.attributes.get(h.NORMAL),T=e.attributes.get(h.CENTEROFFSETANDDISTANCE);bo(d.size>=3);const I=H(n),D=this.parameters.centerOffsetUnits==="screen";for(let O=0;O<d.data.length/d.size;O++){const w=O*d.size;X(x,d.data[w],d.data[w+1],d.data[w+2]),G(x,x,o);const F=O*S.size;E[0]=S.data[F]*v,E[1]=S.data[F+1]*b,G(x,x,s.viewMatrix);const V=O*T.size;if(X(C,T.data[V],T.data[V+1],T.data[V+2]),!D&&(x[0]+=C[0],x[1]+=C[1],C[2]!==0)){const J=C[2];de(C,x),ut(x,x,L(C,C,J))}const Y=O*A.size;if(X(U,A.data[Y],A.data[Y+1],A.data[Y+2]),this._normalAndViewAngle(U,te,s,oe),this._applyVerticalOffsetTransformationView(x,oe,s,ee),s.applyProjection(x,P),P[0]>-1){D&&(C[0]||C[1])&&(P[0]+=C[0]*s.pixelRatio,C[1]!==0&&(P[1]+=Kt(C[1],ee.factorAlignment)*s.pixelRatio),s.unapplyProjection(P,x)),P[0]+=this.parameters.screenOffset[0]*s.pixelRatio,P[1]+=this.parameters.screenOffset[1]*s.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),eo(E,ee.factor,E);const J=ei*s.pixelRatio;let ne=0;if(n.textureIsSignedDistanceField&&(ne=n.outlineSize*s.pixelRatio/2),Pe(p,P[0],P[1],E,J,ne,n,I)){const le=i.ray;if(G(Ce,x,ft(Zo,s.viewMatrix)),P[0]=p[0],P[1]=p[1],s.unprojectFromRenderScreen(P,x)){const M=j();N(M,le.direction);const ce=1/W(M);L(M,M,ce),l(ht(le.origin,x)*ce,M,-1,!0,1,Ce)}}}}}intersectDraped(e,o,i,a,r,l){const n=e.attributes.get(h.POSITION),p=e.attributes.get(h.SIZE),s=this.parameters,v=H(s);let{scaleX:b,scaleY:d}=this._getScreenScale(e);b*=e.screenToWorldRatio,d*=e.screenToWorldRatio;const S=ti*e.screenToWorldRatio;for(let A=0;A<n.data.length/n.size;A++){const T=A*n.size,I=n.data[T],D=n.data[T+1],O=A*p.size;E[0]=p.data[O]*b,E[1]=p.data[O+1]*d;let w=0;s.textureIsSignedDistanceField&&(w=s.outlineSize*e.screenToWorldRatio/2),Pe(a,I,D,E,S,w,s,v)&&r(l.dist,l.normal,-1,!1)}}createBufferWriter(){return new ri(this)}_normalAndViewAngle(e,o,i,a){return Lo(o)&&(o=ue(Xo,o)),vt(a.normal,e,o),G(a.normal,a.normal,i.viewInverseTransposeMatrix),a.cosAngle=gt(at,oi),a}_updateScaleInfo(e,o,i){const a=this.parameters;a.screenSizePerspective!=null?ve(i,o,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?ve(i,o,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,i,a,r,l,n){const p=this._normalAndViewAngle(o,i,r,oe);return this._applyVerticalGroundOffsetView(e,p,r,n),this._applyVerticalOffsetTransformationView(n,p,r,l),this._applyPolygonOffsetView(n,p,a[3],r,n),this._applyCenterOffsetView(n,a,n),n}applyShaderOffsetsNDC(e,o,i,a,r){return this._applyCenterOffsetNDC(e,o,i,a),r!=null&&N(r,a),this._applyPolygonOffsetNDC(a,o,i,a),a}_applyPolygonOffsetView(e,o,i,a,r){const l=a.aboveGround?1:-1;let n=Math.sign(i);n===0&&(n=l);const p=l*n;if(this.parameters.shaderPolygonOffset<=0)return N(r,e);const s=mt(Math.abs(o.cosAngle),.01,1),v=1-Math.sqrt(1-s*s)/s/a.viewport[2];return L(r,e,p>0?v:1/v),r}_applyVerticalGroundOffsetView(e,o,i,a){const r=W(e),l=i.aboveGround?1:-1,n=i.computeRenderPixelSizeAtDist(r)*tt,p=L(x,o.normal,l*n);return Z(a,e,p),a}_applyVerticalOffsetTransformationView(e,o,i,a){var s;const r=this.parameters;if(!((s=r.verticalOffset)!=null&&s.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const v=W(e);this._updateScaleInfo(a,v,o.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const l=W(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,p=to(i,l,r.verticalOffset,o.cosAngle,n);return this._updateScaleInfo(a,l,o.cosAngle),L(o.normal,o.normal,p),Z(e,e,o.normal)}_applyCenterOffsetView(e,o,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&N(i,e),a&&(i[0]+=o[0],i[1]+=o[1],o[2]&&(de(U,i),Z(i,i,L(U,U,o[2])))),i}_applyCenterOffsetNDC(e,o,i,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&N(a,e),r||(a[0]+=o[0]/i.fullWidth*2,a[1]+=o[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,o,i,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&N(a,e),r){const l=i.aboveGround?1:-1,n=l*Math.sign(o[3]);a[2]-=(n||l)*r}return a}createGLMaterial(e){return new ko(e)}calculateRelativeScreenBounds(e,o,i=we()){return Yo(this.parameters,e,o,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}_getScreenScale(e){const o=e.attributes.get(h.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const i=Ot(o.data,Ko),[a,r]=Bt(Qo,this.parameters,i);return{scaleX:a,scaleY:r}}}class ko extends lo{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(k,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function Yo(t,e,o,i){i[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*o,i[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*o}function Jo(t){const e=t[0],o=t[1],i=t[2],a=t[3],r=t[4],l=t[5],n=t[6],p=t[7],s=t[8],v=1/Math.sqrt(e*e+o*o+i*i),b=1/Math.sqrt(a*a+r*r+l*l),d=1/Math.sqrt(n*n+p*p+s*s);return t[0]=e*v,t[1]=o*v,t[2]=i*v,t[3]=a*b,t[4]=r*b,t[5]=l*b,t[6]=n*d,t[7]=p*d,t[8]=s*d,t}function Pe(t,e,o,i,a,r,l,n){let p=e-a-(n[0]>0?i[0]*n[0]:0),s=p+i[0]+2*a,v=o-a-(n[1]>0?i[1]*n[1]:0),b=v+i[1]+2*a;const d=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&d!=null&&(p+=i[0]*d[0],v+=i[1]*d[1],s-=i[0]*(1-d[2]),b-=i[1]*(1-d[3]),p-=r,s+=r,v-=r,b+=r),t[0]>p&&t[0]<s&&t[1]>v&&t[1]<b}const ee=new Mo,x=j(),U=j(),P=_e(),at=j(),Ce=j(),te=Ee(),Xo=Ee(),Zo=ze(),C=j(),Qo=j(),Ko=_e(),oe={normal:at,cosAngle:0},ei=1,ti=2,E=[0,0],oi=bt(0,0,1);class ii extends co{constructor(){super(...arguments),this.renderOccluded=oo.Occlude,this.isDecoration=!1,this.color=pe(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=yt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=pe(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const rt=Ye().vec3f(h.POSITION).vec3f(h.NORMAL).vec2f(h.UV0).vec4u8(h.COLOR).vec2f(h.SIZE).vec4f(h.CENTEROFFSETANDDISTANCE).vec4f(h.FEATUREATTRIBUTE),ai=rt.clone().vec4u8(h.OBJECTANDLAYERIDCOLOR);class ri{constructor(e){this._material=e,this.vertexBufferLayout=De("enable-feature:objectAndLayerId-rendering")?ai:rt}elementCount(e){return 6*e.attributes.get(h.POSITION).indices.length}write(e,o,i,a,r){var D;po(i.attributes.get(h.POSITION),e,a.position,r,6),uo(i.attributes.get(h.NORMAL),o,a.normal,r,6);const l=i.attributes.get(h.UV0).data;let n,p,s,v;if(l==null||l.length<4){const O=this._material.parameters;n=0,p=0,s=O.texCoordScale[0],v=O.texCoordScale[1]}else n=l[0],p=l[1],s=l[2],v=l[3];s=Math.min(1.99999,s+1),v=Math.min(1.99999,v+1);let b=i.attributes.get(h.POSITION).indices.length,d=r;const S=a.uv0;for(let O=0;O<b;++O)S.set(d,0,n),S.set(d,1,p),d++,S.set(d,0,s),S.set(d,1,p),d++,S.set(d,0,s),S.set(d,1,v),d++,S.set(d,0,s),S.set(d,1,v),d++,S.set(d,0,n),S.set(d,1,v),d++,S.set(d,0,n),S.set(d,1,p),d++;fo(i.attributes.get(h.COLOR),4,a.color,r,6);const{data:A,indices:T}=i.attributes.get(h.SIZE);b=T.length;const I=a.size;d=r;for(let O=0;O<b;++O){const w=A[2*T[O]],F=A[2*T[O]+1];for(let V=0;V<6;++V)I.set(d,0,w),I.set(d,1,F),d++}if(i.attributes.get(h.CENTEROFFSETANDDISTANCE)?ge(i.attributes.get(h.CENTEROFFSETANDDISTANCE),a.centerOffsetAndDistance,r,6):me(a.centerOffsetAndDistance,r,6*b),i.attributes.get(h.FEATUREATTRIBUTE)?ge(i.attributes.get(h.FEATUREATTRIBUTE),a.featureAttribute,r,6):me(a.featureAttribute,r,6*b),i.objectAndLayerIdColor!=null){const O=(D=i.attributes.get(h.POSITION))==null?void 0:D.indices;if(O){const w=O.length,F=a.getField(h.OBJECTANDLAYERIDCOLOR,Vt);ho(i.objectAndLayerIdColor,F,w,r,6)}}}}class si extends ke{intersect(e,o,i,a,r,l){return io(e,i,a,r,void 0,l)}}function st(t){const e=new Ve,{vertex:o,fragment:i,attributes:a,varyings:r}=e;Re(o,t),e.include(vo,t),e.include(go,t),e.include(Me,t),e.include(Ue,t),a.add(h.POSITION,"vec3"),t.vvColor&&a.add(h.COLORFEATUREATTRIBUTE,"float"),r.add("vColor","vec4"),r.add("vpos","vec3");const l=t.multipassEnabled&&(t.output===g.Color||t.output===g.Alpha);l&&r.add("depth","float"),o.uniforms.add(new R("eColor",s=>s.color));const n=t.output===g.LinearDepth;n&&(e.include(Ht,t),Gt(e),Wt(e)),o.code.add(c`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${n?c`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c`transformPosition(proj, view, vpos);`}
    }
  `),e.include(Le,t),l&&e.include(Ie,t),i.include(Ne);const p=t.output===g.Highlight;return p&&e.include(mo,t),i.code.add(c`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===g.ObjectAndLayerIdColor?c`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.float(q)}) {
      discard;
    }

    ${t.output===g.Alpha?c`fragColor = vec4(fColor.a);`:""}

    ${t.output===g.Color?c`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===_.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${p?c`outputHighlight();`:""};
    ${t.output===g.LinearDepth?c`outputDepth(linearDepth);`:""};
    ${t.output===g.ObjectAndLayerIdColor?c`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const ni=Object.freeze(Object.defineProperty({__proto__:null,build:st},Symbol.toStringTag,{value:"Module"}));let nt=class lt extends He{initializeProgram(e){return new Ge(e.rctx,lt.shader.get().build(this.configuration),qe)}_createPipeline(e,o){const i=this.configuration,a=e===_.NONE,r=e===_.FrontFace;return Qe({blending:i.output!==g.Color&&i.output!==g.Alpha||!i.transparent?null:a?So:Ke(e),culling:xo(i.cullFace),depthTest:i.draped?null:{func:Po(e)},depthWrite:i.draped?null:(a||r)&&i.writeDepth?Ze:null,colorWrite:et,stencilWrite:i.hasOccludees?qt:null,stencilTest:i.hasOccludees?o?kt:Yt:null,polygonOffset:a||r?i.polygonOffset?li:null:Co(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};nt.shader=new Be(ni,()=>$e(()=>Promise.resolve().then(()=>gi),void 0));const li={factor:1,units:1};class y extends We{constructor(){super(...arguments),this.output=g.Color,this.cullFace=re.None,this.transparencyPassType=_.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}u([f({count:g.COUNT})],y.prototype,"output",void 0),u([f({count:re.COUNT})],y.prototype,"cullFace",void 0),u([f({count:_.COUNT})],y.prototype,"transparencyPassType",void 0),u([f()],y.prototype,"hasSlicePlane",void 0),u([f()],y.prototype,"hasVertexColors",void 0),u([f()],y.prototype,"transparent",void 0),u([f()],y.prototype,"polygonOffset",void 0),u([f()],y.prototype,"enableOffset",void 0),u([f()],y.prototype,"writeDepth",void 0),u([f()],y.prototype,"hasOccludees",void 0),u([f()],y.prototype,"multipassEnabled",void 0),u([f()],y.prototype,"cullAboveGround",void 0),u([f()],y.prototype,"objectAndLayerIdColorInstanced",void 0),u([f()],y.prototype,"vvColor",void 0),u([f()],y.prototype,"draped",void 0),u([f({constValue:!1})],y.prototype,"occlusionPass",void 0),u([f({constValue:!0})],y.prototype,"hasVvInstancing",void 0),u([f({constValue:!1})],y.prototype,"vvSize",void 0),u([f({constValue:!1})],y.prototype,"vvOpacity",void 0);class Li extends si{constructor(e){super(e,new di),this.supportsEdges=!0,this.produces=new Map([[$.OPAQUE_MATERIAL,o=>o===g.Highlight||K(o)&&!this._isTransparent],[$.OPAQUE_NO_SSAO_DEPTH,o=>o===g.LinearDepth&&this.parameters.writeLinearDepth&&!this._isTransparent],[$.TRANSPARENT_MATERIAL,o=>K(o)&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_NO_SSAO_DEPTH,o=>o===g.LinearDepth&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(K(o)||o===g.LinearDepth&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[$.DRAPED_MATERIAL,o=>Jt(o)]]),this._configuration=new y}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Ao,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new ci(e)}createBufferWriter(){const e=Ye().vec3f(h.POSITION);return De("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4u8(h.COLOR),new Oo(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class ci extends Xt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==g.Color&&this._output!==g.Alpha||this._updateOccludeeState(e),this.ensureTechnique(nt,e)}}class di extends Zt{constructor(){super(...arguments),this.color=Te,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=re.None,this.hasOccludees=!1,this.draped=!1}}function Ni(t,e){if(t.type==="point")return z(t,e,!1);if($o(t))switch(t.type){case"extent":return z(t.center,e,!1);case"polygon":return z(t.centroid,e,!1);case"polyline":return z(Ae(t),e,!0);case"mesh":return z(t.origin,e,!1)}else switch(t.type){case"extent":return z(pi(t),e,!0);case"polygon":return z(ui(t),e,!0);case"polyline":return z(Ae(t),e,!0)}}function Ae(t){const e=t.paths[0];if(!e||e.length===0)return null;const o=St(e,xt(e)/2);return ae(o[0],o[1],o[2],t.spatialReference)}function pi(t){return ae(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function ui(t){const e=t.rings[0];if(!e||e.length===0)return null;const o=Pt(t.rings,!!t.hasZ);return ae(o[0],o[1],o[2],t.spatialReference)}function z(t,e,o){const i=o?t:wo(t);return e&&t?Ct(t,i,e)?i:null:i}function Mi(t,e,o,i=0){if(t){e||(e=we());const a=t;let r=.5*a.width*(o-1),l=.5*a.height*(o-1);return a.width<1e-7*a.height?r+=l/20:a.height<1e-7*a.width&&(l+=r/20),At(e,a.xmin-r-i,a.ymin-l-i,a.xmax+r+i,a.ymax+l+i),e}return null}function Ui(t,e,o=null){const i=Tt($t);return t!=null&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),e!=null?i[3]=e:t!=null&&t.length>3&&(i[3]=t[3]),o&&(i[0]*=o,i[1]*=o,i[2]*=o,i[3]*=o),i}function Bi(t,e,o,i,a,r=[0,0,0,0]){for(let l=0;l<3;++l)r[l]=(t==null?void 0:t[l])!=null?t[l]:(o==null?void 0:o[l])!=null?o[l]:a[l];return r[3]=e??i??a[3],r}function Hi(t=_t,e,o,i=1){const a=new Array(3);if(e==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let r,l=0;for(let n=2;n>=0;n--){const p=t[n];let s;const v=p!=null,b=n===0&&!r&&!v,d=o[n];p==="symbol-value"||b?s=d!==0?e[n]/d:1:v&&p!=="proportional"&&isFinite(p)&&(s=d!==0?p/d:1),s!=null&&(a[n]=s,r=s,l=Math.max(l,Math.abs(s)))}for(let n=2;n>=0;n--)a[n]==null?a[n]=r:a[n]===0&&(a[n]=.001*l)}for(let r=2;r>=0;r--)a[r]/=i;return wt(a)}function fi(t){return t.isPrimitive!=null}function Gi(t){return hi(fi(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function hi(t){const e=o=>o==null||o>=0;return Array.isArray(t)?t.every(e):e(t)}function Wi(t,e,o,i=ze()){return t&&Et(i,i,-t/180*Math.PI),e&&zt(i,i,e/180*Math.PI),o&&Dt(i,i,o/180*Math.PI),i}function qi(t,e,o){if(o.minDemResolution!=null)return o.minDemResolution;const i=Rt(e),a=jt(t)*i,r=It(t)*i,l=Ft(t)*(e.isGeographic?1:i);return a===0&&r===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(a,r,l)}const ki=Object.freeze(Object.defineProperty({__proto__:null,build:Eo,ribbonlineNumRoundJoinSubdivisions:zo},Symbol.toStringTag,{value:"Module"})),Yi=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Do,build:Ro},Symbol.toStringTag,{value:"Module"})),Ji=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:jo,build:Io},Symbol.toStringTag,{value:"Module"})),vi=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"})),gi=Object.freeze(Object.defineProperty({__proto__:null,build:st},Symbol.toStringTag,{value:"Module"}));export{Bi as A,Hi as B,Ui as F,Gi as I,Ji as O,Mi as P,Vi as Q,ki as R,hi as S,Yi as T,Wi as U,Li as _,Mo as a,Ni as b,No as d,si as e,qi as k,se as o,Bo as t};
