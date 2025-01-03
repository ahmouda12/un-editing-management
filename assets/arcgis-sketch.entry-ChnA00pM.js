import{aw as n,ax as i,ay as o,az as a}from"./index-DPJiPkbh.js";import{T as h,i as r,U as d}from"./index-f6afcedb-0aRnChr4.js";import{r as g,c,a as l}from"./component-utils-858627d8-DRqmNtSu.js";import{o as p}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const m="arcgis-sketch{}",b=class{constructor(e){n(this,e),this.arcgisSketchReady=i(this,"arcgisSketchReady",7),this.sketchCreate=i(this,"sketchCreate",7),this.sketchDelete=i(this,"sketchDelete",7),this.sketchRedo=i(this,"sketchRedo",7),this.sketchUndo=i(this,"sketchUndo",7),this.sketchUpdate=i(this,"sketchUpdate",7),this._watchHandles=[],this.referenceElement=void 0,this.activeTool=void 0,this.availableCreateTools=void 0,this.createGraphic=void 0,this.creationMode="continuous",this.defaultCreateOptions=void 0,this.defaultUpdateOptions=void 0,this.icon=void 0,this.labelOptions=void 0,this.layer=void 0,this.layout="horizontal",this.pointSymbol=void 0,this.polylineSymbol=void 0,this.polygonSymbol=void 0,this.snappingOptions=void 0,this.tooltipOptions=void 0,this.updateGraphics=void 0,this.visibleElementsCreateToolsPoint=!0,this.visibleElementsCreateToolsPolyline=!0,this.visibleElementsCreateToolsPolygon=!0,this.visibleElementsCreateToolsRectangle=!0,this.visibleElementsCreateToolsCircle=!0,this.visibleElementsDuplicateButton=!0,this.visibleElementsSelectionToolsRectangle=!0,this.visibleElementsSelectionToolsLasso=!0,this.visibleElementsSettingsMenu=!0,this.visibleElementsLabelsToggle=!0,this.visibleElementsTooltipsToggle=!0,this.visibleElementsSnappingControls=!0,this.visibleElementsSnappingControlsElementsHeader=!0,this.visibleElementsSnappingControlsElementsEnabledToggle=!0,this.visibleElementsSnappingControlsElementsSelfEnabledToggle=!0,this.visibleElementsSnappingControlsElementsFeatureEnabledToggle=!0,this.visibleElementsSnappingControlsElementsLayerList=!0,this.visibleElementsUndoRedoMenu=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){g(this,e)}availableCreateToolsWatcher(e){this.widget&&(this.widget.availableCreateTools=e)}creationModeWatcher(e){this.widget&&(this.widget.creationMode=e)}defaultCreateOptionsWatcher(e){this.widget&&(this.widget.defaultCreateOptions=e)}defaultUpdateOptionsWatcher(e){this.widget&&(this.widget.defaultUpdateOptions=e)}iconWatcher(e){this.widget&&(this.widget.icon=e,this.widget.iconClass=e)}labelOptionsWatcher(e){this.widget&&(this.widget.labelOptions=e)}layerWatcher(e){this.widget&&(this.widget.layer=e)}layoutWatcher(e){this.widget&&(this.widget.layout=e)}pointSymbolWatcher(e){this.widget&&(this.widget.viewModel.pointSymbol=e)}polylineSymbolWatcher(e){this.widget&&(this.widget.viewModel.polylineSymbol=e)}polygonSymbolWatcher(e){this.widget&&(this.widget.viewModel.polygonSymbol=e)}snappingOptionsWatcher(e){this.widget&&(this.widget.snappingOptions=e)}tooltipOptionsWatcher(e){this.widget&&(this.widget.tooltipOptions=e)}visibleElementsCreateToolsPointWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,createTools:{...this.widget.visibleElements.createTools,point:e}})}visibleElementsCreateToolsPolylineWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,createTools:{...this.widget.visibleElements.createTools,polyline:e}})}visibleElementsCreateToolsPolygonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,createTools:{...this.widget.visibleElements.createTools,polygon:e}})}visibleElementsCreateToolsRectangleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,createTools:{...this.widget.visibleElements.createTools,rectangle:e}})}visibleElementsCreateToolsCircleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,createTools:{...this.widget.visibleElements.createTools,circle:e}})}visibleElementsDuplicateButtonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,duplicateButton:e})}visibleElementsSelectionToolsRectangleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,selectionTools:{...this.widget.visibleElements.selectionTools,"rectangle-selection":e}})}visibleElementsSelectionToolsLassoWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,selectionTools:{...this.widget.visibleElements.selectionTools,"lasso-selection":e}})}visibleElementsSettingsMenuWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,settingsMenu:e})}visibleElementsLabelsToggleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,labelsToggle:e})}visibleElementsTooltipsToggleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,tooltipsToggle:e})}visibleElementsSnappingControlsWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControls:e})}visibleElementsSnappingControlsElementsHeaderWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControlsElements:{header:e}})}visibleElementsSnappingControlsElementsEnabledToggleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControlsElements:{enabledToggle:e}})}visibleElementsSnappingControlsElementsSelfEnabledToggleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControlsElements:{selfEnabledToggle:e}})}visibleElementsSnappingControlsElementsFeatureEnabledToggleWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControlsElements:{featureEnabledToggle:e}})}visibleElementsSnappingControlsElementsLayerListWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,snappingControlsElements:{layerList:e}})}visibleElementsUndoRedoMenuWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,undoRedoMenu:e})}positionWatcher(e){e!==void 0&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){var t;e!==void 0&&this.widget&&(this.widget.view=e,(t=this.widget.view.map)==null||t.add(this.layer))}async cancel(){var e;(e=this.widget)==null||e.cancel()}async complete(){var e;(e=this.widget)==null||e.complete()}async create(e,t){var s;(s=this.widget)==null||s.create(e,t)}async delete(){var e;(e=this.widget)==null||e.delete()}async duplicate(){var e;(e=this.widget)==null||e.duplicate()}async redo(){var e;(e=this.widget)==null||e.redo()}async undo(){var e;(e=this.widget)==null||e.undo()}async update(e,t){var s;return void((s=this.widget)==null?void 0:s.update(e,t))}async componentDidLoad(){const e=await this._createParams(),t=await h(e);this.widget=t,this._setViewModelParams(),await this._addWatchers(),this._addContainer(),this.arcgisSketchReady.emit(),c(this)}disconnectedCallback(){p(this)}render(){return o("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await r();l(this,e(()=>this.widget.activeTool,t=>this.activeTool=t,{initial:!0})),l(this,e(()=>this.widget.createGraphic,t=>this.createGraphic=t,{initial:!0})),l(this,e(()=>this.widget.updateGraphics,t=>this.updateGraphics=t,{initial:!0}))}async _createParams(){const e={title:"Sketch Layer",creationMode:"update"};this.layer||(this.layer=await d(e));const t={layer:this.layer};return t.visibleElements={createTools:{point:this.visibleElementsCreateToolsPoint,polyline:this.visibleElementsCreateToolsPolyline,polygon:this.visibleElementsCreateToolsPolygon,rectangle:this.visibleElementsCreateToolsRectangle,circle:this.visibleElementsCreateToolsCircle},duplicateButton:this.visibleElementsDuplicateButton,selectionTools:{"rectangle-selection":this.visibleElementsSelectionToolsRectangle,"lasso-selection":this.visibleElementsSelectionToolsLasso},settingsMenu:this.visibleElementsSettingsMenu,labelsToggle:this.visibleElementsLabelsToggle,tooltipsToggle:this.visibleElementsTooltipsToggle,snappingControls:this.visibleElementsSnappingControls,snappingControlsElements:{header:this.visibleElementsSnappingControlsElementsHeader,enabledToggle:this.visibleElementsSnappingControlsElementsEnabledToggle,selfEnabledToggle:this.visibleElementsSnappingControlsElementsSelfEnabledToggle,featureEnabledToggle:this.visibleElementsSnappingControlsElementsFeatureEnabledToggle,layerList:this.visibleElementsSnappingControlsElementsLayerList},undoRedoMenu:this.visibleElementsUndoRedoMenu},this.view&&(t.view=this.view),this.availableCreateTools&&(t.availableCreateTools=this.availableCreateTools),this.creationMode&&(t.creationMode=this.creationMode),this.defaultCreateOptions&&(t.defaultCreateOptions=this.defaultCreateOptions),this.defaultUpdateOptions&&(t.defaultUpdateOptions=this.defaultUpdateOptions),this.labelOptions&&(t.labelOptions=this.labelOptions),this.layout&&(t.layout=this.layout),this.snappingOptions&&(t.snappingOptions=this.snappingOptions),this.tooltipOptions&&(t.tooltipOptions=this.tooltipOptions),t}_setViewModelParams(){const e={};this.pointSymbol&&(e.pointSymbol=this.pointSymbol),this.polylineSymbol&&(e.polylineSymbol=this.polylineSymbol),this.polygonSymbol&&(e.polygonSymbol=this.polygonSymbol),this.widget.viewModel.set(e)}get el(){return a(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],availableCreateTools:["availableCreateToolsWatcher"],creationMode:["creationModeWatcher"],defaultCreateOptions:["defaultCreateOptionsWatcher"],defaultUpdateOptions:["defaultUpdateOptionsWatcher"],icon:["iconWatcher"],labelOptions:["labelOptionsWatcher"],layer:["layerWatcher"],layout:["layoutWatcher"],pointSymbol:["pointSymbolWatcher"],polylineSymbol:["polylineSymbolWatcher"],polygonSymbol:["polygonSymbolWatcher"],snappingOptions:["snappingOptionsWatcher"],tooltipOptions:["tooltipOptionsWatcher"],visibleElementsCreateToolsPoint:["visibleElementsCreateToolsPointWatcher"],visibleElementsCreateToolsPolyline:["visibleElementsCreateToolsPolylineWatcher"],visibleElementsCreateToolsPolygon:["visibleElementsCreateToolsPolygonWatcher"],visibleElementsCreateToolsRectangle:["visibleElementsCreateToolsRectangleWatcher"],visibleElementsCreateToolsCircle:["visibleElementsCreateToolsCircleWatcher"],visibleElementsDuplicateButton:["visibleElementsDuplicateButtonWatcher"],visibleElementsSelectionToolsRectangle:["visibleElementsSelectionToolsRectangleWatcher"],visibleElementsSelectionToolsLasso:["visibleElementsSelectionToolsLassoWatcher"],visibleElementsSettingsMenu:["visibleElementsSettingsMenuWatcher"],visibleElementsLabelsToggle:["visibleElementsLabelsToggleWatcher"],visibleElementsTooltipsToggle:["visibleElementsTooltipsToggleWatcher"],visibleElementsSnappingControls:["visibleElementsSnappingControlsWatcher"],visibleElementsSnappingControlsElementsHeader:["visibleElementsSnappingControlsElementsHeaderWatcher"],visibleElementsSnappingControlsElementsEnabledToggle:["visibleElementsSnappingControlsElementsEnabledToggleWatcher"],visibleElementsSnappingControlsElementsSelfEnabledToggle:["visibleElementsSnappingControlsElementsSelfEnabledToggleWatcher"],visibleElementsSnappingControlsElementsFeatureEnabledToggle:["visibleElementsSnappingControlsElementsFeatureEnabledToggleWatcher"],visibleElementsSnappingControlsElementsLayerList:["visibleElementsSnappingControlsElementsLayerListWatcher"],visibleElementsUndoRedoMenu:["visibleElementsUndoRedoMenuWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};b.style=m;export{b as arcgis_sketch};
