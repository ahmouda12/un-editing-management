import{bh as s,hS as a,x as i,y as o,hT as p,B as m}from"./index-B252NKV0.js";import{m as n}from"./LayerView2D-B2XPas4a.js";import{u as l}from"./LayerView-D2pvr0Q6.js";import"./scaleUtils-BKVOuLFd.js";import"./Container-D0mzr_VC.js";import"./DefaultUI-4DBz9mkp.js";import"./ReactiveMap-DcQhQdHv.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-CYfboRg2.js";import"./mat2df64-CBKYtunK.js";import"./mat3-DPPMYMhB.js";import"./vec2f32-BbH2jxlN.js";import"./normalizeUtils-PvjooRb6.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-yeijlTke.js";import"./Compass-BqUvL1gL.js";import"./utils-DsJqvptN.js";import"./GoTo-B08Csiw_.js";import"./NavigationToggle-DNdSP6VQ.js";import"./Zoom-BQUhauBk.js";import"./EffectView-CzpqZJb_.js";import"./DisplayObject-B2mbaom_.js";import"./highlightReasons-DkCnfpXT.js";import"./Tile-DcDRio1X.js";import"./quickselect-CDrMhodd.js";import"./TileKey-Dt_FQSdw.js";import"./definitions-B54owTRu.js";import"./enums-DSseSvdG.js";import"./Texture-BT-WYJiR.js";import"./ClipRect-CGrUtOuF.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new s}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,e)=>t+e.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,e)=>this.container.addChildAt(t.container,e))}};i([o({cast:p})],r.prototype,"layerViews",null),i([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=i([m("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const J=r;export{J as default};
