import{bh as a,x as e,y as o,B as p}from"./index-B252NKV0.js";import{m}from"./LayerView2D-B2XPas4a.js";import{u as n}from"./LayerView-D2pvr0Q6.js";import"./scaleUtils-BKVOuLFd.js";import"./Container-D0mzr_VC.js";import"./DefaultUI-4DBz9mkp.js";import"./ReactiveMap-DcQhQdHv.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-CYfboRg2.js";import"./mat2df64-CBKYtunK.js";import"./mat3-DPPMYMhB.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-PvjooRb6.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-yeijlTke.js";import"./Compass-BqUvL1gL.js";import"./utils-DsJqvptN.js";import"./GoTo-B08Csiw_.js";import"./NavigationToggle-DNdSP6VQ.js";import"./Zoom-BQUhauBk.js";import"./EffectView-CzpqZJb_.js";import"./DisplayObject-B2mbaom_.js";import"./highlightReasons-DkCnfpXT.js";import"./Tile-DcDRio1X.js";import"./quickselect-CDrMhodd.js";import"./TileKey-Dt_FQSdw.js";import"./definitions-B54owTRu.js";import"./enums-DSseSvdG.js";import"./Texture-BT-WYJiR.js";import"./ClipRect-CGrUtOuF.js";let r=class extends m(n){constructor(){super(...arguments),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(t=>{var i;return t.layer===((i=this.layer)==null?void 0:i.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(t=>{var i;return t.layer===((i=this.layer)==null?void 0:i.footprintLayer)})}update(t){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(t=>t.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o()],r.prototype,"dynamicGroupLayerView",null),e([o()],r.prototype,"footprintLayerView",null),e([o()],r.prototype,"layerViews",void 0),r=e([p("esri.views.2d.layers.CatalogLayerView2D")],r);const J=r;export{J as default};