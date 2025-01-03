import{aw as s,ax as e,ay as n,az as o}from"./index-DPJiPkbh.js";import{$ as c}from"./index-f6afcedb-0aRnChr4.js";import{r as a,c as l}from"./component-utils-858627d8-DRqmNtSu.js";import{o as r}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const h="arcgis-utility-network-associations{}",A=class{constructor(t){s(this,t),this.arcgisUtilityNetworkAssociationsReady=e(this,"arcgisUtilityNetworkAssociationsReady",7),this._watchHandles=[],this.referenceElement=void 0,this.autoRefreshAssociations=!0,this.connectivityAssociationsLineSymbol=void 0,this.includeConnectivityAssociations=!0,this.includeStructuralAttachmentAssociations=!0,this.maxAllowableAssociations=250,this.maxAllowableAssociationsSliderMax=void 0,this.maxAllowableAssociationsSliderMin=void 0,this.maxAllowableAssociationsSliderStep=void 0,this.showArrowsConnectivity=!1,this.showArrowsStructuralAttachment=!1,this.showAssociationsEnabled=!1,this.structuralAttachmentAssociationsLineSymbol=void 0,this.utilityNetwork=void 0,this.visibleElementsConnectivityAssociationsSettingsArrowsToggle=!0,this.visibleElementsConnectivityAssociationsSettingsCapSelect=!0,this.visibleElementsConnectivityAssociationsSettingsColorPicker=!0,this.visibleElementsConnectivityAssociationsSettingsStylePicker=!0,this.visibleElementsConnectivityAssociationsSettingsWidthInput=!0,this.visibleElementsMaxAllowableAssociationsSlider=!0,this.visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle=!0,this.visibleElementsStructuralAttachmentAssociationsSettingsCapSelect=!0,this.visibleElementsStructuralAttachmentAssociationsSettingsStylePicker=!0,this.visibleElementsStructuralAttachmentAssociationsSettingsWidthInput=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(t){a(this,t)}autoRefreshAssociationsWatcher(t){t!==void 0&&this.widget&&(this.widget.autoRefreshAssociations=t)}connectivityAssociationsLineSymbolWatcher(t){this.widget&&(this.widget.connectivityAssociationsLineSymbol=t)}includeConnectivityAssociationsWatcher(t){t!==void 0&&this.widget&&(this.widget.includeConnectivityAssociations=t)}includeStructuralAttachmentAssociationsWatcher(t){t!==void 0&&this.widget&&(this.widget.includeStructuralAttachmentAssociations=t)}maxAllowableAssociationsWatcher(t){t!==void 0&&this.widget&&(this.widget.maxAllowableAssociations=t)}maxAllowableAssociationsSliderMaxWatcher(t){t!==void 0&&this.widget&&(this.widget.maxAllowableAssociationsSliderMax=t)}maxAllowableAssociationsSliderMinWatcher(t){t!==void 0&&this.widget&&(this.widget.maxAllowableAssociationsSliderMin=t)}maxAllowableAssociationsSliderStepWatcher(t){t!==void 0&&this.widget&&(this.widget.maxAllowableAssociationsSliderStep=t)}showArrowsConnectivityWatcher(t){t!==void 0&&this.widget&&(this.widget.showArrowsConnectivity=t)}showArrowsStructuralAttachmentWatcher(t){t!==void 0&&this.widget&&(this.widget.showArrowsStructuralAttachment=t)}showAssociationsEnabledWatcher(t){t!==void 0&&this.widget&&(this.widget.showAssociationsEnabled=t)}structuralAttachmentAssociationsLineSymbolWatcher(t){this.widget&&(this.widget.structuralAttachmentAssociationsLineSymbol=t)}utilityNetworkWatcher(t){this.widget&&(this.widget.utilityNetwork=t)}visibleElementsConnectivityAssociationsSettingsArrowsToggleWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,connectivityAssociationsSettings:{...this.widget.visibleElements.connectivityAssociationsSettings,arrowsToggle:t}})}visibleElementsConnectivityAssociationsSettingsCapSelectWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,connectivityAssociationsSettings:{...this.widget.visibleElements.connectivityAssociationsSettings,capSelect:t}})}visibleElementsConnectivityAssociationsSettingsColorPickerWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,connectivityAssociationsSettings:{...this.widget.visibleElements.connectivityAssociationsSettings,colorPicker:t}})}visibleElementsConnectivityAssociationsSettingsStylePickerWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,connectivityAssociationsSettings:{...this.widget.visibleElements.connectivityAssociationsSettings,stylePicker:t}})}visibleElementsConnectivityAssociationsSettingsWidthInputWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,connectivityAssociationsSettings:{...this.widget.visibleElements.connectivityAssociationsSettings,widthInput:t}})}visibleElementsMaxAllowableAssociationsSliderWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,maxAllowableAssociationsSlider:t})}visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggleWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,structuralAttachmentAssociationsSettings:{...this.widget.visibleElements.structuralAttachmentAssociationsSettings,arrowsToggle:t}})}visibleElementsStructuralAttachmentAssociationsSettingsCapSelectWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,structuralAttachmentAssociationsSettings:{...this.widget.visibleElements.structuralAttachmentAssociationsSettings,capSelect:t}})}visibleElementsStructuralAttachmentAssociationsSettingsStylePickerWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,structuralAttachmentAssociationsSettings:{...this.widget.visibleElements.structuralAttachmentAssociationsSettings,stylePicker:t}})}visibleElementsStructuralAttachmentAssociationsSettingsWidthInputWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,structuralAttachmentAssociationsSettings:{...this.widget.visibleElements.structuralAttachmentAssociationsSettings,widthInput:t}})}positionWatcher(t){t!==void 0&&this.widget&&this.view.ui.move(this.childElem,t)}viewWatcher(t){t!==void 0&&this.widget&&(this.widget.view=t)}async componentDidLoad(){const t=this._createParams(),i=await c(t);this.widget=i,this._addContainer(),this.arcgisUtilityNetworkAssociationsReady.emit(),l(this)}disconnectedCallback(){r(this)}render(){return n("div",{ref:t=>this.childElem=t})}_addContainer(){this.widget.container=this.childElem}_createParams(){const t={};return t.visibleElements={connectivityAssociationsSettings:{arrowsToggle:this.visibleElementsConnectivityAssociationsSettingsArrowsToggle,capSelect:this.visibleElementsConnectivityAssociationsSettingsCapSelect,colorPicker:this.visibleElementsConnectivityAssociationsSettingsColorPicker,stylePicker:this.visibleElementsConnectivityAssociationsSettingsStylePicker,widthInput:this.visibleElementsConnectivityAssociationsSettingsWidthInput},maxAllowableAssociationsSlider:this.visibleElementsMaxAllowableAssociationsSlider,structuralAttachmentAssociationsSettings:{arrowsToggle:this.visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle,capSelect:this.visibleElementsStructuralAttachmentAssociationsSettingsCapSelect,stylePicker:this.visibleElementsStructuralAttachmentAssociationsSettingsStylePicker,widthInput:this.visibleElementsStructuralAttachmentAssociationsSettingsWidthInput}},this.autoRefreshAssociations!==void 0&&(t.autoRefreshAssociations=this.autoRefreshAssociations),this.connectivityAssociationsLineSymbol!==void 0&&(t.connectivityAssociationsLineSymbol=this.connectivityAssociationsLineSymbol),this.includeConnectivityAssociations!==void 0&&(t.includeConnectivityAssociations=this.includeConnectivityAssociations),this.includeStructuralAttachmentAssociations!==void 0&&(t.includeStructuralAttachmentAssociations=this.includeStructuralAttachmentAssociations),this.maxAllowableAssociations!==void 0&&(t.maxAllowableAssociations=this.maxAllowableAssociations),this.maxAllowableAssociationsSliderMax!==void 0&&(t.maxAllowableAssociationsSliderMax=this.maxAllowableAssociationsSliderMax),this.maxAllowableAssociationsSliderMin!==void 0&&(t.maxAllowableAssociationsSliderMin=this.maxAllowableAssociationsSliderMin),this.maxAllowableAssociationsSliderStep!==void 0&&(t.maxAllowableAssociationsSliderStep=this.maxAllowableAssociationsSliderStep),this.showArrowsConnectivity!==void 0&&(t.showArrowsConnectivity=this.showArrowsConnectivity),this.showArrowsStructuralAttachment!==void 0&&(t.showArrowsStructuralAttachment=this.showArrowsStructuralAttachment),this.showAssociationsEnabled!==void 0&&(t.showAssociationsEnabled=this.showAssociationsEnabled),this.structuralAttachmentAssociationsLineSymbol!==void 0&&(t.structuralAttachmentAssociationsLineSymbol=this.structuralAttachmentAssociationsLineSymbol),this.utilityNetwork!==void 0&&(t.utilityNetwork=this.utilityNetwork),t}get el(){return o(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],autoRefreshAssociations:["autoRefreshAssociationsWatcher"],connectivityAssociationsLineSymbol:["connectivityAssociationsLineSymbolWatcher"],includeConnectivityAssociations:["includeConnectivityAssociationsWatcher"],includeStructuralAttachmentAssociations:["includeStructuralAttachmentAssociationsWatcher"],maxAllowableAssociations:["maxAllowableAssociationsWatcher"],maxAllowableAssociationsSliderMax:["maxAllowableAssociationsSliderMaxWatcher"],maxAllowableAssociationsSliderMin:["maxAllowableAssociationsSliderMinWatcher"],maxAllowableAssociationsSliderStep:["maxAllowableAssociationsSliderStepWatcher"],showArrowsConnectivity:["showArrowsConnectivityWatcher"],showArrowsStructuralAttachment:["showArrowsStructuralAttachmentWatcher"],showAssociationsEnabled:["showAssociationsEnabledWatcher"],structuralAttachmentAssociationsLineSymbol:["structuralAttachmentAssociationsLineSymbolWatcher"],utilityNetwork:["utilityNetworkWatcher"],visibleElementsConnectivityAssociationsSettingsArrowsToggle:["visibleElementsConnectivityAssociationsSettingsArrowsToggleWatcher"],visibleElementsConnectivityAssociationsSettingsCapSelect:["visibleElementsConnectivityAssociationsSettingsCapSelectWatcher"],visibleElementsConnectivityAssociationsSettingsColorPicker:["visibleElementsConnectivityAssociationsSettingsColorPickerWatcher"],visibleElementsConnectivityAssociationsSettingsStylePicker:["visibleElementsConnectivityAssociationsSettingsStylePickerWatcher"],visibleElementsConnectivityAssociationsSettingsWidthInput:["visibleElementsConnectivityAssociationsSettingsWidthInputWatcher"],visibleElementsMaxAllowableAssociationsSlider:["visibleElementsMaxAllowableAssociationsSliderWatcher"],visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle:["visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggleWatcher"],visibleElementsStructuralAttachmentAssociationsSettingsCapSelect:["visibleElementsStructuralAttachmentAssociationsSettingsCapSelectWatcher"],visibleElementsStructuralAttachmentAssociationsSettingsStylePicker:["visibleElementsStructuralAttachmentAssociationsSettingsStylePickerWatcher"],visibleElementsStructuralAttachmentAssociationsSettingsWidthInput:["visibleElementsStructuralAttachmentAssociationsSettingsWidthInputWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};A.style=h;export{A as arcgis_utility_network_associations};
