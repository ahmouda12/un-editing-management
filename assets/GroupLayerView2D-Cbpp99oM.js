import{x as o,B as e}from"./index-DPJiPkbh.js";import{m}from"./LayerView2D-PBUj6K28.js";import p from"./GroupLayerView-kKDRhjjt.js";import"./scaleUtils-C37jhR61.js";import"./Container-D-UnjuYH.js";import"./DefaultUI-y65bhLzJ.js";import"./ReactiveMap-sicXFvKD.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-irmNrBgu.js";import"./mat2df64-CBKYtunK.js";import"./mat3-CakTilsz.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-CVZirBXT.js";import"./normalizeUtilsCommon-DTYpWx_K.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-XhnTPGUg.js";import"./Compass-DbISr2nW.js";import"./utils-DsJqvptN.js";import"./GoTo-28s5bp4H.js";import"./NavigationToggle-DiUrJhDe.js";import"./Zoom-D-LKGxB_.js";import"./EffectView-DBKHGQIz.js";import"./DisplayObject-jRWssau_.js";import"./highlightReasons-C6XJZYBL.js";import"./Tile-C2x0ojRV.js";import"./quickselect-deeG3Iol.js";import"./TileKey-BicQgvrV.js";import"./definitions-B54owTRu.js";import"./enums-DSseSvdG.js";import"./Texture-BRxaK8g9.js";import"./ClipRect-Hx0McZSN.js";import"./LayerView-DYVP3cuG.js";let t=class extends m(p){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,r)=>this.container.addChildAt(i.container,r))}};t=o([e("esri.views.2d.layers.GroupLayerView2D")],t);const K=t;export{K as default};