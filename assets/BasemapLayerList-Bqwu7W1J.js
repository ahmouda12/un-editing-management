const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-action-BHaqNzsV.js","assets/action-ED8yfrZZ.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/component-6CIDVndn.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-action-group-BdWJXujb.js","assets/action-group-BH9aWKDL.js","assets/conditionalSlot-CaMpRMew.js","assets/action-menu-9mv6r4cU.js","assets/array-BMcQdnYi.js","assets/popover-hxIdq1Do.js","assets/floating-ui-BH2WIGVi.js","assets/debounce-BOqmhDXu.js","assets/focusTrapComponent-DEcdEJmJ.js","assets/openCloseComponent-C5H0O9Vb.js","assets/Heading-DKEJi13z.js","assets/FloatingArrow-BZmTlXcv.js","assets/calcite-action-menu-DgMUJ9-v.js","assets/calcite-block-CFXYiB6J.js","assets/handle-jADsp4A6.js","assets/scrim-C6--6irQ.js","assets/calcite-label-BbWWgb6e.js","assets/label-C1Y8426B.js","assets/calcite-input-z_TBNg6d.js","assets/input2-DvrCRwl9.js","assets/form-B4OwUu51.js","assets/Validation-nOlLLBIC.js","assets/input-j1u1wOBY.js","assets/input-message-C-NSbwGv.js","assets/progress-BrWM7Ubw.js","assets/calcite-button-B6QLSJpN.js","assets/button-DXjKuKtV.js","assets/calcite-flow-DLf86d73.js","assets/calcite-flow-item-CZKeix53.js","assets/panel-w7h1DCn9.js","assets/calcite-icon-7wB1xzh2.js","assets/calcite-list-E2bqcYXp.js","assets/resources4-DXHY1U7R.js","assets/utils3-exWydRL4.js","assets/filter-yN6-jZOU.js","assets/calcite-list-item-BfYt6AQV.js","assets/calcite-notice-B4prE6yM.js","assets/calcite-tooltip-DuIyCZgx.js"])))=>i.map(i=>d[i]);
import{bh as J,nd as D,eX as W,cR as T,fs as A,o6 as q,x as l,y as a,B as N,ab as Y,iE as Z,im as j,lO as ee,io as te,ng as ie,nh as C,ni as G,ip as se,_ as I,jn as M,aU as $,iq as r,lK as P,nn as ne,nj as z,no as le,np as ae,nk as oe,nl as re,nm as ce,nc as de,nq as me}from"./index-DPJiPkbh.js";import{t as K,n as pe}from"./actionUtils-Dq9KBtWC.js";const v={view:"view",basemap:"basemap",baseLayers:"base-layers",referenceLayers:"reference-layers",baseLayersListMode:"reference-layers-list-mode",referenceLayersListMode:"base-layers-list-mode",baseLayerViews:"base-layer-views",referenceLayerViews:"reference-layer-views",children:"children"},R=J.ofType(D);let w=class extends W.EventedAccessor{constructor(e){super(e),this.baseItems=new R,this.baseListItemCreatedFunction=null,this.checkPublishStatusEnabled=!1,this.referenceListItemCreatedFunction=null,this.referenceItems=new R,this.view=null,this._compileBaseList=this._compileBaseList.bind(this),this._compileReferenceList=this._compileReferenceList.bind(this)}initialize(){this.addHandles([T(()=>{var e,t,i,s;return[(t=(e=this.view)==null?void 0:e.map)==null?void 0:t.basemap,((i=this.view)==null?void 0:i.ready)===!0,(s=this.view)==null?void 0:s.basemapView]},()=>this._watchBasemapLayers(),A),T(()=>[this.baseListItemCreatedFunction,this.checkPublishStatusEnabled],()=>this._baseListItemCreatedFunctionChanged()),T(()=>[this.referenceListItemCreatedFunction,this.checkPublishStatusEnabled],()=>this._referenceListItemCreatedFunctionChanged())],v.view)}destroy(){this.view=null,this.baseItems.removeAll(),this.referenceItems.removeAll()}get basemapTitle(){var e,t,i;return((i=(t=(e=this.view)==null?void 0:e.map)==null?void 0:t.basemap)==null?void 0:i.title)??null}set basemapTitle(e){this._override("basemapTitle",e)}get state(){var e;return(e=this.view)!=null&&e.ready?"ready":this.view?"loading":"disabled"}get totalBaseItems(){return this.baseItems.flatten(e=>e.children).length}get totalReferenceItems(){return this.referenceItems.flatten(e=>e.children).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem({targetItem:e,fromParentItem:t,toParentItem:i,from:s,to:n,newIndex:c}){var H,U;const p=e==null?void 0:e.layer;if(!p||p.type==="subtype-sublayer")return;const o=(U=(H=this.view)==null?void 0:H.map)==null?void 0:U.basemap,m=o==null?void 0:o.baseLayers,g=o==null?void 0:o.referenceLayers,b=t?q(t):s==="base"?m:g,u=i?q(i):n==="base"?m:g;if(!b||!u)return;const{baseItems:f,referenceItems:h}=this,y=s==="base"?f:h,k=n==="base"?f:h,B=(t==null?void 0:t.children)||y,O=(i==null?void 0:i.children)||k,V=u.length-c;e.parent=i||null,B.remove(e),b.remove(p),O.includes(e)||O.add(e,V),u.includes(p)||u.add(p,V),this._compileLists()}_createItemChangeHandles({items:e,key:t,callback:i}){this.removeHandles(t),i(),e&&this.addHandles(e.on("change",()=>i()),t)}_createListItem({layer:e,type:t}){const{view:i,baseListItemCreatedFunction:s,referenceListItemCreatedFunction:n,checkPublishStatusEnabled:c}=this;return new D({layer:e,checkPublishStatusEnabled:c,listItemCreatedFunction:t==="base"?s:n,view:i})}_watchLayersListMode({layers:e,key:t,callback:i}){this.removeHandles(t),e&&e.forEach(s=>{this.addHandles(T(()=>s.listMode,()=>i()),t)})}_compileListItems({layers:e,items:t,key:i,type:s,callback:n}){this._watchLayersListMode({layers:e,key:i,callback:n}),this._createNewItems({type:s,items:t,layers:e}),this._removeItems({items:t,layers:e}),this._sortItems(t,e)}_compileReferenceList(){var i,s,n;const{referenceItems:e}=this,t=(n=(s=(i=this.view)==null?void 0:i.map)==null?void 0:s.basemap)==null?void 0:n.referenceLayers;this._compileListItems({type:"reference",layers:t,items:e,key:v.referenceLayersListMode,callback:this._compileReferenceList})}_compileBaseList(){var i,s,n;const{baseItems:e}=this,t=(n=(s=(i=this.view)==null?void 0:i.map)==null?void 0:s.basemap)==null?void 0:n.baseLayers;this._compileListItems({type:"base",layers:t,items:e,key:v.baseLayersListMode,callback:this._compileBaseList})}_compileLists(){this._compileReferenceList(),this._compileBaseList()}_createNewItems({items:e,layers:t,type:i}){t==null||t.forEach(s=>{e.some(n=>n.layer===s)||e.add(this._createListItem({type:i,layer:s}))})}_removeItems({items:e,layers:t}){e&&e.forEach(i=>{if(!i)return;(t==null?void 0:t.some(n=>i.layer===n))||(this.removeHandles(`${v.children}-${i.uid}`),e.remove(i))})}_sortItems(e,t){e&&t&&e.sort((i,s)=>{const n=t.indexOf(i.layer),c=t.indexOf(s.layer);return n>c?-1:n<c?1:0})}_removeAllBaseItems(){const{baseItems:e}=this;e.forEach(t=>{this.removeHandles(`${v.children}-${t.uid}`)}),e.removeAll()}_removeAllReferenceItems(){const{referenceItems:e}=this;e.forEach(t=>{this.removeHandles(`${v.children}-${t.uid}`)}),e.removeAll()}_baseListItemCreatedFunctionChanged(){this._removeAllBaseItems(),this._compileLists()}_referenceListItemCreatedFunctionChanged(){this._removeAllReferenceItems(),this._compileLists()}_watchBasemapLayers(){const{view:e}=this;if(this.removeHandles([v.baseLayers,v.referenceLayers,v.basemap,v.baseLayerViews,v.referenceLayerViews]),!(e!=null&&e.ready))return this._removeAllBaseItems(),void this._removeAllReferenceItems();this._compileLists(),this.addHandles([T(()=>{var t,i,s;return(s=(i=(t=this.view)==null?void 0:t.map)==null?void 0:i.basemap)==null?void 0:s.baseLayers},t=>this._createItemChangeHandles({items:t,key:v.baseLayers,callback:this._compileBaseList}),A),T(()=>{var t,i,s;return(s=(i=(t=this.view)==null?void 0:t.map)==null?void 0:i.basemap)==null?void 0:s.referenceLayers},t=>this._createItemChangeHandles({items:t,key:v.referenceLayers,callback:this._compileReferenceList}),A),T(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.basemapView)==null?void 0:i.baseLayerViews},t=>this._createItemChangeHandles({items:t,key:v.baseLayerViews,callback:this._compileBaseList}),A),T(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.basemapView)==null?void 0:i.referenceLayerViews},t=>this._createItemChangeHandles({items:t,key:v.referenceLayerViews,callback:this._compileReferenceList}),A)],v.basemap)}};l([a({type:R,readOnly:!0})],w.prototype,"baseItems",void 0),l([a()],w.prototype,"basemapTitle",null),l([a()],w.prototype,"baseListItemCreatedFunction",void 0),l([a()],w.prototype,"checkPublishStatusEnabled",void 0),l([a()],w.prototype,"referenceListItemCreatedFunction",void 0),l([a({type:R,readOnly:!0})],w.prototype,"referenceItems",void 0),l([a({readOnly:!0})],w.prototype,"state",null),l([a()],w.prototype,"totalBaseItems",null),l([a()],w.prototype,"totalReferenceItems",null),l([a()],w.prototype,"view",void 0),w=l([N("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],w);const Q=w;let L=class extends Y{constructor(){super(...arguments),this.baseLayers=!0,this.closeButton=!1,this.collapseButton=!1,this.editTitleButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!0,this.referenceLayers=!0,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};l([a({type:Boolean,nonNullable:!0})],L.prototype,"baseLayers",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"closeButton",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"collapseButton",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"editTitleButton",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"errors",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"filter",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"flow",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"heading",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"referenceLayers",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"statusIndicators",void 0),l([a({type:Boolean,nonNullable:!0})],L.prototype,"temporaryLayerIndicators",void 0),L=l([N("esri.widgets.BasemapLayerList.BasemapLayerListVisibleElements")],L);const x=L,E="esri-basemap-layer-list",F=`${E}__item`,_={base:E,widgetIcon:Z.layers,filterNoResults:`${E}__filter-no-results`,item:F,itemActive:`${F}--active`,itemContent:`${F}-content`,itemContentBottom:`${F}-content-bottom`,itemMessage:`${F}-message`,itemInvisibleAtScale:`${F}--invisible-at-scale`,itemActionIcon:`${F}-action-icon`,itemActionImage:`${F}-action-image`,itemTemporaryIcon:`${F}-temporary-icon`,statusIndicator:`${E}__status-indicator`,publishing:`${E}__publishing`,updating:`${E}__updating`,editing:`${E}__editing`,connectionStatus:`${E}__connection-status`,connectionStatusConnected:`${E}__connection-status--connected`,visibleToggle:`${E}__visible-toggle`,visibleIcon:`${E}__visible-icon`,section:`${E}__section`},he=J.ofType(D),X="basemap",ue=".*\\S+.*";let d=class extends te{constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new Map,this._editTitleInput=null,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._focusEditingFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.editingTitle=!1,this.filterPlaceholder="",this.baseFilterText="",this.referenceFilterText="",this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.headingLevel=2,this.iconClass=_.widgetIcon,this.messages=null,this.messagesCommon=null,this.minFilterItems=ie,this.selectedItems=new he,this.selectionMode="none",this.viewModel=new Q,this.visibilityAppearance="default",this.visibleElements=new x,this._canMove=({dragEl:i,fromEl:s,toEl:n},c)=>{var y,k,B;const p=c==="pull"?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,o=C(i);if(!(o!=null&&o.sortable))return!1;const m=C(s),g=G(s),b=C(n),u=G(n),f=!!g&&!!u&&g===u,h={selected:o,from:m,to:b};return s.group&&n.group&&typeof p=="function"?p.call(null,h):f&&((y=o==null?void 0:o.layer)==null?void 0:y.type)!=="sublayer"&&((k=m==null?void 0:m.layer)==null?void 0:k.type)!=="map-image"&&((B=b==null?void 0:b.layer)==null?void 0:B.type)!=="map-image"},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=i=>{if(this.visibilityAppearance!=="default")return;const s=Array.from(i.composedPath()).find(n=>{var c;return(c=n.classList)==null?void 0:c.contains(_.item)});this._activeItem=C(s)},this._onCalciteListOrderChange=i=>{const{_lastDragDetail:s}=this,{toEl:n,fromEl:c,dragEl:p,newIndex:o}=i;if(!c||!n||(s==null?void 0:s.newIndex)===o&&(s==null?void 0:s.dragEl)===p&&(s==null?void 0:s.toEl)===n&&(s==null?void 0:s.fromEl)===c)return;this._lastDragDetail=i;const m=c,g=n;if(m!==g)this._moveLayerFromChildList({toEl:g,fromEl:m,dragEl:p,newIndex:o});else{const b=Array.from(c.children).filter(u=>u==null?void 0:u.matches("calcite-list-item")).map(u=>u.value);this._sortLayers(m,b)}}}normalizeCtorArgs(e){return(e==null?void 0:e.editingEnabled)!=null&&e.visibleElements!=null?{...e,visibleElements:new x({...e.visibleElements,editTitleButton:e.editingEnabled})}:e}loadDependencies(){return se({action:()=>I(()=>import("./calcite-action-BHaqNzsV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])),"action-group":()=>I(()=>import("./calcite-action-group-BdWJXujb.js"),__vite__mapDeps([14,15,2,3,16,9,6,7,4,8,11,17,18,1,5,10,12,13,19,20,21,22,23,24,25])),"action-menu":()=>I(()=>import("./calcite-action-menu-DgMUJ9-v.js"),__vite__mapDeps([26,17,2,3,18,4,8,6,1,5,7,9,10,11,12,13,19,20,21,22,23,24,25])),block:()=>I(()=>import("./calcite-block-CFXYiB6J.js"),__vite__mapDeps([27,2,3,16,9,4,5,7,8,11,24,6,23,20,21,1,10,12,13,17,18,19,22,25,28,29])),label:()=>I(()=>import("./calcite-label-BbWWgb6e.js"),__vite__mapDeps([30,2,3,31,4,10])),input:()=>I(()=>import("./calcite-input-z_TBNg6d.js"),__vite__mapDeps([32,33,2,3,4,34,5,8,31,10,6,7,9,11,35,36,12,37,38])),button:()=>I(()=>import("./calcite-button-B6QLSJpN.js"),__vite__mapDeps([39,40,2,3,34,4,5,31,10,6,7,8,9,11,12,13])),flow:()=>I(()=>import("./calcite-flow-DLf86d73.js"),__vite__mapDeps([41,2,3,9,6])),"flow-item":()=>I(()=>import("./calcite-flow-item-CZKeix53.js"),__vite__mapDeps([42,2,3,4,5,6,7,8,9,11,43,17,18,1,10,12,13,19,20,21,22,23,24,25,29])),icon:()=>I(()=>import("./calcite-icon-7wB1xzh2.js"),__vite__mapDeps([44,12,2,3,4,9])),list:()=>I(()=>import("./calcite-list-E2bqcYXp.js"),__vite__mapDeps([45,2,3,4,5,9,46,47,6,11,7,8,48,21,12,33,34,31,10,35,36,37,38,13,29])),"list-item":()=>I(()=>import("./calcite-list-item-BfYt6AQV.js"),__vite__mapDeps([49,2,3,4,5,7,8,9,11,6,47,46,1,10,12,13,28])),notice:()=>I(()=>import("./calcite-notice-B4prE6yM.js"),__vite__mapDeps([50,2,3,16,9,4,6,7,8,11,23,10,12])),tooltip:()=>I(()=>import("./calcite-tooltip-DuIyCZgx.js"),__vite__mapDeps([51,2,3,4,20,21,23,25]))})}destroy(){this._tooltipReferenceMap.clear()}get _baseFilterEnabled(){return this.viewModel.totalBaseItems>=this.minFilterItems&&this.visibleElements.filter}get _referenceFilterEnabled(){return this.viewModel.totalReferenceItems>=this.minFilterItems&&this.visibleElements.filter}get basemapTitle(){return this.viewModel.basemapTitle}set basemapTitle(e){this.viewModel.basemapTitle=e}get baseListItemCreatedFunction(){return this.viewModel.baseListItemCreatedFunction}set baseListItemCreatedFunction(e){this.viewModel.baseListItemCreatedFunction=e}get editingEnabled(){return M($.getLogger(this),"editingEnabled",{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0}),this.selectionMode!=="none"&&this.dragEnabled&&this.visibleElements.editTitleButton}set editingEnabled(e){M($.getLogger(this),"editingEnabled",{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.visibleElements.editTitleButton=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get multipleSelectionEnabled(){return M($.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode==="multiple"}set multipleSelectionEnabled(e){M($.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.editingEnabled?"single":"none"}get referenceListItemCreatedFunction(){return this.viewModel.referenceListItemCreatedFunction}set referenceListItemCreatedFunction(e){this.viewModel.referenceListItemCreatedFunction=e}get baseItems(){return this.viewModel.baseItems}get referenceItems(){return this.viewModel.referenceItems}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{state:e}=this.viewModel,t={[P.hidden]:e==="loading",[P.disabled]:e==="disabled"};return r("div",{class:this.classes(_.base,P.widget,P.panel,t)},this._renderItems())}_renderItemTooltip(e){return e?r("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:this._tooltipReferenceMap.get(e.layer.uid)},this.messages.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){var t;return e.incompatible?this._renderItemTooltip(e):(t=e.children)==null?void 0:t.filter(i=>!i.hidden).toArray().map(i=>this._renderItemTooltipNodes(i))}_renderItemTooltips(e){return e==null?void 0:e.toArray().map(t=>this._renderItemTooltipNodes(t))}_renderPanelFlowItems(e){return e?e.flatten(t=>t.children).filter(t=>!t.hidden).toArray().filter(({panel:t})=>(t==null?void 0:t.open)&&!t.disabled&&t.flowEnabled).map(({title:t,panel:i})=>{const s=()=>this._handlePanelFlowItemBack(i);return r("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:n=>{n.preventDefault(),s()}},i.render(),r("calcite-button",{appearance:"transparent",onclick:s,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusEditingFlowItemNode(e){this._focusEditingFlowItem&&(this._focusEditingFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_renderItemMessage(e){return e.error?r("div",{class:_.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},r("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},r("div",{slot:"message"},this.messages.layerError))):e.incompatible?r("div",{class:_.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},r("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},r("div",{slot:"message"},this.messages.layerIncompatible))):null}_renderItem(e,t,i,s,n){const{_activeItem:c,_selectedDragItemLayerUid:p,selectionMode:o,selectedItems:m,messages:g}=this,b=e.title||g.untitledLayer,u=e.visibleAtCurrentScale?b:`${b} (${g.layerInvisibleAtScale})`,f=this._filterActions(e.actionsSections),h=this._countActions(f);return r("calcite-list-item",{afterCreate:y=>this._focusSelectedDragEl(y,e),afterUpdate:y=>this._focusSelectedDragEl(y,e),class:this.classes(_.item,{[_.itemActive]:c===e}),"data-item":e,dragDisabled:!e.sortable||i,dragSelected:e.layer.uid===p,id:e.layer.uid,key:`list-item-${e.layer.uid}`,label:b,metadata:{parentTitles:n,title:b},open:e.open,selected:o!=="none"&&m.includes(e),title:u,value:e.layer.uid,onCalciteListItemDragHandleChange:y=>this._handleCalciteListItemDragHandleChange(y,e),onCalciteListItemSelect:y=>this._handleCalciteListItemSelect(y,e,s),onCalciteListItemToggle:y=>this._handleCalciteListItemToggle(y,e)},r("div",{class:this.classes({[_.itemContent]:!0,[_.itemInvisibleAtScale]:!e.visibleAtCurrentScale}),slot:"content"},b),this._renderItemStatus(e,s),this._renderItemToggle(e,s),this._renderItemTemporaryIcon(e),this._renderChildList(e,t,n),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),h>1?this._renderActionsSections(e,f):h===1?this._renderAction({item:e,action:this._getSingleActionButton(f),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:n,updating:c}=e,p=c&&!t,o=!!s;return r("calcite-icon",{class:this.classes({[_.statusIndicator]:!0,[_.publishing]:n,[_.updating]:p,[_.connectionStatus]:o,[_.connectionStatusConnected]:o&&s==="connected"}),icon:ne({connectionStatus:s,publishing:n}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryLayerIndicators&&"persistenceEnabled"in e.layer&&!e.layer.persistenceEnabled?r("calcite-icon",{class:_.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemToggle(e,t){const{messages:i,visibilityAppearance:s}=this,{visible:n}=e,c=t==null?void 0:t.visibilityMode;if(c==="inherited")return null;const p=me({visible:n,exclusive:c==="exclusive",visibilityAppearance:s}),o=s==="checkbox";return r("calcite-action",{appearance:"transparent",class:_.visibleToggle,icon:o?p:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:o?"actions-start":"actions-end",text:i.layerVisibility,title:i.layerVisibility},o?null:r("calcite-icon",{class:this.classes({[_.visibleIcon]:c!=="exclusive"&&n}),icon:p,scale:"s"}))}_renderPanel(e){return!(e!=null&&e.open)||e.disabled||e.flowEnabled?null:r("div",{class:_.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!(e!=null&&e.visible))return null;const{open:t,title:i,disabled:s}=e;return r("calcite-action",{active:t,appearance:"transparent",disabled:s,icon:K(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return r("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:i=>e.actionsOpen=i.target.open},r("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:this.messagesCommon.options,title:this.messagesCommon.options}),t.toArray().map((i,s)=>this._renderActionSection(e,i,s)))}_renderActionSection(e,t,i){return r("calcite-action-group",{key:`action-section-${i}`},t.toArray().map(s=>this._renderAction({item:e,action:s,textEnabled:!0})))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const s="image"in e?e.image:void 0,n={[_.itemActionIcon]:!!t,[_.itemActionImage]:!!s};return t&&(n[t]=!0),s||t?r("span",{"aria-hidden":"true",class:this.classes(_.itemActionIcon,n),key:"icon",styles:pe(s)}):null}_renderAction(e){const{item:t,action:i,textEnabled:s}=e,{active:n,disabled:c,title:p,type:o,indicator:m}=i;return r("calcite-action",{active:o==="toggle"&&i.value,appearance:"transparent",disabled:c,icon:K(i),indicator:m,key:`action-${i.uid}`,loading:n,onclick:()=>this._triggerAction(t,i),scale:"s",slot:s?void 0:"actions-end",text:p??"",textEnabled:s,title:p??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_moveLayerFromChildList({toEl:e,fromEl:t,dragEl:i,newIndex:s}){const n=C(i),c=C(e),p=C(t),o=S(t),m=S(e);o&&m&&this.viewModel.moveListItem({targetItem:n,fromParentItem:p,toParentItem:c,newIndex:s,from:o,to:m})}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:s}=e;t.insertBefore(i,t.children[s])}_sortLayers(e,t){var i,s,n,c,p,o;if(e)if(e.group===z){const m=S(e),g=m==="base"?(n=(s=(i=this.view)==null?void 0:i.map)==null?void 0:s.basemap)==null?void 0:n.baseLayers:m==="reference"?(o=(p=(c=this.view)==null?void 0:c.map)==null?void 0:p.basemap)==null?void 0:o.referenceLayers:null;le(g,t)}else{const m=C(e);if(!m)return;ae(m,t)}}_getSingleActionButton(e){return e.reduce(t=>t).filter(t=>t&&t.type==="button").at(0)}_filterActions(e){return e.map(t=>t.filter(i=>i.visible))}_countActions(e){return e.reduce((t,i)=>t+i.length,0)}_triggerAction(e,t){t&&e&&(t.type==="toggle"&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if(t==="none")return;const s=e.target.selectedItems.map(n=>C(n)).filter(Boolean);i.removeAll(),i.addMany(s)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame(()=>e==null?void 0:e.setFocus())}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListItemSelect(e,t,i){C(e.target)===t&&this.selectionMode==="none"&&(i==null?void 0:i.visibilityMode)!=="inherited"&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;(t==null?void 0:t.visibilityMode)==="exclusive"&&e.visible||(e.visible=!e.visible)}_renderEditingInput(){const{messages:e}=this,{basemapTitle:t}=this.viewModel;return r("div",{class:_.editing},r("calcite-label",null,e.basemapTitle,r("calcite-input",{afterCreate:i=>this._editTitleInput=i,label:e.basemapTitle,name:"basemaptitle",pattern:ue,placeholder:e.basemapTitle,required:!0,title:e.basemapTitle,type:"text",value:t??void 0})))}_renderCancelButton(){const{messagesCommon:{cancel:e}}=this;return r("calcite-button",{appearance:"outline",bind:this,label:e,onclick:this._toggleEditingTitle,slot:"footer",title:e,width:"half"},e)}_renderSubmitButton(){const{messagesCommon:e}=this;return r("calcite-button",{label:e.form.submit,slot:"footer",title:e.form.submit,type:"submit",width:"half"},e.form.ok)}_renderEditingForm(){return this.editingTitle?r("form",{bind:this,onsubmit:this._formSubmit},r("calcite-flow-item",{afterCreate:this._focusEditingFlowItemNode,afterUpdate:this._focusEditingFlowItemNode,bind:this,heading:this.visibleElements.heading?this.messages.basemapTitle:void 0,headingLevel:this.headingLevel,onCalciteFlowItemBack:e=>{e.preventDefault(),this._toggleEditingTitle()}},this._renderEditingInput(),this._renderCancelButton(),this._renderSubmitButton())):null}_renderEditTitleButton(){const{editingTitle:e,visibleElements:{editTitleButton:t},messagesCommon:{edit:i}}=this;return t&&!e?r("calcite-action",{bind:this,icon:"pencil",label:i,onclick:this._toggleEditingTitle,slot:"header-actions-end",text:i,title:i}):null}_renderNoLayersInfoMessage(e){return r("div",{slot:"message"},e)}_renderNoLayersInfo(e,t){return r("div",{class:_.itemMessage},r("calcite-notice",{icon:"information",key:t,kind:"info",open:!0,scale:"m",width:"full"},this._renderNoLayersInfoMessage(e)))}_getFilteredItems(e){return e==null?void 0:e.filter(t=>!t.hidden&&(this.visibleElements.errors||!t.error))}_renderItems(){const{collapsed:e,visible:t,visibleElements:{closeButton:i,collapseButton:s,heading:n,flow:c},messages:p,viewModel:o,referenceItems:m,baseItems:g}=this,b=this.visibleElements.referenceLayers?this._getFilteredItems(m):null,u=this.visibleElements.baseLayers?this._getFilteredItems(g):null,f=[r("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:i,closed:!t,collapsed:e,collapsible:s,heading:n?o.basemapTitle??p.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},this._renderEditTitleButton(),this._renderReferenceSection(b),this._renderBaseSection(u,(u==null?void 0:u.length)===1)),this._renderEditingForm(),this._renderPanelFlowItems(u),this._renderPanelFlowItems(b)];return t?[c?r("calcite-flow",{key:"root-flow"},f):f,this._renderItemTooltips(b),this._renderItemTooltips(u)]:null}_renderChildList(e,t,i=[]){var o;const{dragEnabled:s}=this,{children:n}=e,c=oe(e),p=!re(e.layer)&&!c&&s&&((o=e.layer)==null?void 0:o.type)==="group";return c||p?r("calcite-list",{canPull:m=>this._canMove(m,"pull"),canPut:m=>this._canMove(m,"put"),"data-basemap-layer-type":t,"data-item":e,"data-layer-type":X,dragEnabled:!!s&&e.childrenSortable&&ce(e),group:e.layer.uid},n==null?void 0:n.filter(m=>!m.hidden).toArray().map(m=>this._renderItem(m,t,!1,e,[...i,e.title]))):null}_renderList(e,t,i){const{messages:s,dragEnabled:n,selectionMode:c,filterPlaceholder:p,baseFilterText:o,referenceFilterText:m,_baseFilterEnabled:g,_referenceFilterEnabled:b}=this,u=t==="reference"?s.noReferenceLayers:s.noBaseLayers,f=t==="reference"?b:g;return r("calcite-block",{class:_.section,collapsible:!0,heading:t==="reference"?s.referenceHeading:s.baseHeading,headingLevel:de(this.headingLevel),key:`block-${t}`,open:!0},(e==null?void 0:e.length)===0?this._renderNoLayersInfo(u,t):null,r("calcite-list",{afterCreate:h=>{h.addEventListener("focusin",this._setActiveItem),h.addEventListener("focusout",this._clearActiveItem)},afterRemoved:h=>{h.removeEventListener("focusin",this._setActiveItem),h.removeEventListener("focusout",this._clearActiveItem)},canPull:h=>this._canMove(h,"pull"),canPut:h=>this._canMove(h,"put"),"data-basemap-layer-type":t,"data-layer-type":X,dragEnabled:n,filterEnabled:f,filterPlaceholder:p,filterText:f?t==="reference"?m:o:"",group:z,key:`list-${t}`,label:s.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:c,onCalciteListChange:h=>this._handleCalciteListChange(h),onCalciteListDragEnd:h=>this._handleCalciteListDragEnd(h.detail),onCalciteListFilter:h=>{var y;return this[t==="reference"?"referenceFilterText":"baseFilterText"]=((y=h.target)==null?void 0:y.filterText)??""},onCalciteListOrderChange:h=>this._onCalciteListOrderChange(h.detail)},e==null?void 0:e.toArray().map(h=>this._renderItem(h,t,i)),e!=null&&e.length&&f?r("div",{class:_.filterNoResults,slot:"filter-no-results"},r("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoLayersInfoMessage(u))):null))}_renderBaseSection(e,t){return this.visibleElements.baseLayers?this._renderList(e,"base",t):null}_renderReferenceSection(e){return this.visibleElements.referenceLayers?this._renderList(e,"reference",!1):null}_toggleEditingTitle(){const{editingTitle:e}=this,t=!e;this.editingTitle=t,t?this._focusEditingFlowItem=!0:this._focusRootFlowItem=!0}_formSubmit(e){var i;e.preventDefault();const t=(i=this._editTitleInput)==null?void 0:i.value;t!=null&&t.trim()&&(this.basemapTitle=t),this._toggleEditingTitle()}};function S(e){return e==null?void 0:e.getAttribute("data-basemap-layer-type")}l([a()],d.prototype,"_activeItem",void 0),l([a()],d.prototype,"_tooltipReferenceMap",void 0),l([a()],d.prototype,"_focusRootFlowItem",void 0),l([a()],d.prototype,"_focusPanelFlowItem",void 0),l([a()],d.prototype,"_focusEditingFlowItem",void 0),l([a()],d.prototype,"_baseFilterEnabled",null),l([a()],d.prototype,"_referenceFilterEnabled",null),l([a()],d.prototype,"basemapTitle",null),l([a()],d.prototype,"collapsed",void 0),l([a()],d.prototype,"dragEnabled",void 0),l([a()],d.prototype,"editingTitle",void 0),l([a()],d.prototype,"filterPlaceholder",void 0),l([a()],d.prototype,"baseFilterText",void 0),l([a()],d.prototype,"referenceFilterText",void 0),l([a()],d.prototype,"listItemCanGiveFunction",void 0),l([a()],d.prototype,"listItemCanReceiveFunction",void 0),l([a()],d.prototype,"baseListItemCreatedFunction",null),l([a()],d.prototype,"editingEnabled",null),l([a()],d.prototype,"headingLevel",void 0),l([a()],d.prototype,"iconClass",void 0),l([a()],d.prototype,"label",null),l([a(),j("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")],d.prototype,"messages",void 0),l([a(),j("esri/t9n/common")],d.prototype,"messagesCommon",void 0),l([a()],d.prototype,"minFilterItems",void 0),l([a()],d.prototype,"multipleSelectionEnabled",null),l([a()],d.prototype,"referenceListItemCreatedFunction",null),l([a({readOnly:!0})],d.prototype,"baseItems",null),l([a({readOnly:!0})],d.prototype,"referenceItems",null),l([a()],d.prototype,"selectedItems",void 0),l([a()],d.prototype,"selectionMode",void 0),l([a()],d.prototype,"view",null),l([ee("trigger-action"),a({type:Q})],d.prototype,"viewModel",void 0),l([a()],d.prototype,"visibilityAppearance",void 0),l([a({type:x,nonNullable:!0})],d.prototype,"visibleElements",void 0),d=l([N("esri.widgets.BasemapLayerList")],d);const ge=d;export{ge as default};
