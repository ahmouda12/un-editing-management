const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-action-BHaqNzsV.js","assets/action-ED8yfrZZ.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/component-6CIDVndn.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-action-group-BdWJXujb.js","assets/action-group-BH9aWKDL.js","assets/conditionalSlot-CaMpRMew.js","assets/action-menu-9mv6r4cU.js","assets/array-BMcQdnYi.js","assets/popover-hxIdq1Do.js","assets/floating-ui-BH2WIGVi.js","assets/debounce-BOqmhDXu.js","assets/focusTrapComponent-DEcdEJmJ.js","assets/openCloseComponent-C5H0O9Vb.js","assets/Heading-DKEJi13z.js","assets/FloatingArrow-BZmTlXcv.js","assets/calcite-action-menu-DgMUJ9-v.js","assets/calcite-button-B6QLSJpN.js","assets/button-DXjKuKtV.js","assets/form-B4OwUu51.js","assets/label-C1Y8426B.js","assets/calcite-flow-DLf86d73.js","assets/calcite-flow-item-CZKeix53.js","assets/panel-w7h1DCn9.js","assets/scrim-C6--6irQ.js","assets/calcite-icon-7wB1xzh2.js","assets/calcite-list-E2bqcYXp.js","assets/resources4-DXHY1U7R.js","assets/utils3-exWydRL4.js","assets/filter-yN6-jZOU.js","assets/input2-DvrCRwl9.js","assets/Validation-nOlLLBIC.js","assets/input-j1u1wOBY.js","assets/input-message-C-NSbwGv.js","assets/progress-BrWM7Ubw.js","assets/calcite-list-item-BfYt6AQV.js","assets/handle-jADsp4A6.js","assets/calcite-notice-B4prE6yM.js","assets/calcite-tooltip-DuIyCZgx.js"])))=>i.map(i=>d[i]);
import{iE as B,x as l,y as s,B as R,ab as O,bh as V,nd as U,im as T,lO as q,ne as x,io as j,nf as G,ng as H,nh as b,ni as P,ip as K,_ as v,jn as C,aU as M,iq as c,lK as F,nj as k,nk as z,nl as J,nm as Q,nn as W,no as X,np as Y,nq as Z}from"./index-DPJiPkbh.js";import{s as ee}from"./ReactiveMap-sicXFvKD.js";import{t as D,n as te}from"./actionUtils-Dq9KBtWC.js";const f="esri-layer-list",E=`${f}__item`,m={base:f,widgetIcon:B.layers,filterNoResults:`${f}__filter-no-results`,item:E,itemActive:`${E}--active`,itemContent:`${E}-content`,itemContentBottom:`${E}-content-bottom`,itemMessage:`${E}-message`,itemInvisibleAtScale:`${E}--invisible-at-scale`,itemActionIcon:`${E}-action-icon`,itemActionImage:`${E}-action-image`,itemTemporaryIcon:`${E}-temporary-icon`,statusIndicator:`${f}__status-indicator`,publishing:`${f}__publishing`,updating:`${f}__updating`,connectionStatus:`${f}__connection-status`,connectionStatusConnected:`${f}__connection-status--connected`,visibleToggle:`${f}__visible-toggle`,visibleIcon:`${f}__visible-icon`};let y=class extends O{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};l([s({type:Boolean,nonNullable:!0})],y.prototype,"closeButton",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"collapseButton",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"errors",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"filter",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"flow",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"heading",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"statusIndicators",void 0),l([s({type:Boolean,nonNullable:!0})],y.prototype,"temporaryLayerIndicators",void 0),y=l([R("esri.widgets.LayerList.LayerListVisibleElements")],y);const N=y,ie=V.ofType(U),S="operational";let a=class extends j{constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new ee,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.icon=null,this.iconClass=m.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=G,this.minFilterItems=H,this.selectedItems=new ie,this.selectionMode="none",this.viewModel=new x,this.visibilityAppearance="default",this.visibleElements=new N,this._canMove=({dragEl:i,fromEl:o,toEl:n},d)=>{var u,L,$;const p=d==="pull"?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,r=b(i);if(!(r!=null&&r.sortable))return!1;const h=b(o),_=P(o),I=b(n),w=P(n),g=!!_&&!!w&&_===w,A={selected:r,from:h,to:I};return o.group&&n.group&&typeof p=="function"?p.call(null,A):g&&((u=r==null?void 0:r.layer)==null?void 0:u.type)!=="sublayer"&&((L=h==null?void 0:h.layer)==null?void 0:L.type)!=="map-image"&&(($=I==null?void 0:I.layer)==null?void 0:$.type)!=="map-image"},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=i=>{if(this.visibilityAppearance!=="default")return;const o=Array.from(i.composedPath()).find(n=>{var d;return(d=n.classList)==null?void 0:d.contains(m.item)});this._activeItem=b(o)},this._onCalciteListOrderChange=i=>{const{_lastDragDetail:o}=this,{toEl:n,fromEl:d,dragEl:p,newIndex:r}=i;if(d&&n&&!((o==null?void 0:o.newIndex)===r&&(o==null?void 0:o.dragEl)===p&&(o==null?void 0:o.toEl)===n&&(o==null?void 0:o.fromEl)===d))if(this._lastDragDetail=i,d!==n)this._moveLayerFromChildList({toEl:n,fromEl:d,dragEl:p,newIndex:r});else{const h=Array.from(d.children).filter(_=>_==null?void 0:_.matches("calcite-list-item")).map(_=>_.value);this._sortLayers(d,h)}}}loadDependencies(){return K({action:()=>v(()=>import("./calcite-action-BHaqNzsV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])),"action-group":()=>v(()=>import("./calcite-action-group-BdWJXujb.js"),__vite__mapDeps([14,15,2,3,16,9,6,7,4,8,11,17,18,1,5,10,12,13,19,20,21,22,23,24,25])),"action-menu":()=>v(()=>import("./calcite-action-menu-DgMUJ9-v.js"),__vite__mapDeps([26,17,2,3,18,4,8,6,1,5,7,9,10,11,12,13,19,20,21,22,23,24,25])),button:()=>v(()=>import("./calcite-button-B6QLSJpN.js"),__vite__mapDeps([27,28,2,3,29,4,5,30,10,6,7,8,9,11,12,13])),flow:()=>v(()=>import("./calcite-flow-DLf86d73.js"),__vite__mapDeps([31,2,3,9,6])),"flow-item":()=>v(()=>import("./calcite-flow-item-CZKeix53.js"),__vite__mapDeps([32,2,3,4,5,6,7,8,9,11,33,17,18,1,10,12,13,19,20,21,22,23,24,25,34])),icon:()=>v(()=>import("./calcite-icon-7wB1xzh2.js"),__vite__mapDeps([35,12,2,3,4,9])),list:()=>v(()=>import("./calcite-list-E2bqcYXp.js"),__vite__mapDeps([36,2,3,4,5,9,37,38,6,11,7,8,39,21,12,40,29,30,10,41,42,43,44,13,34])),"list-item":()=>v(()=>import("./calcite-list-item-BfYt6AQV.js"),__vite__mapDeps([45,2,3,4,5,7,8,9,11,6,38,37,1,10,12,13,46])),notice:()=>v(()=>import("./calcite-notice-B4prE6yM.js"),__vite__mapDeps([47,2,3,16,9,4,6,7,8,11,23,10,12])),tooltip:()=>v(()=>import("./calcite-tooltip-DuIyCZgx.js"),__vite__mapDeps([48,2,3,4,20,21,23,25]))})}destroy(){this._tooltipReferenceMap.clear()}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get multipleSelectionEnabled(){return C(M.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode==="multiple"}set multipleSelectionEnabled(e){C(M.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get selectionEnabled(){return C(M.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.selectionMode!=="none"&&this.dragEnabled}set selectionEnabled(e){C(M.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var o,n;const e=(o=this.viewModel)==null?void 0:o.state,t={[F.hidden]:e==="loading",[F.disabled]:e==="disabled"},i=(n=this.operationalItems)==null?void 0:n.filter(d=>!d.hidden&&(this.visibleElements.errors||!d.error));return c("div",{class:this.classes(m.base,F.widget,F.panel,t)},i!=null&&i.length?[this._renderItemTooltips(i),this._renderItems(i)]:this._renderNoItems())}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?c("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:t.get(e.layer.uid)},i.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){var t;return e.incompatible?this._renderItemTooltip(e):(t=e.children)==null?void 0:t.filter(i=>!i.hidden).toArray().map(i=>this._renderItemTooltipNodes(i))}_renderItemTooltips(e){return e==null?void 0:e.toArray().map(t=>this._renderItemTooltipNodes(t))}_renderNoItemsMessage(){return c("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return c("div",{class:m.itemMessage,key:"esri-layer-list__no-items"},c("calcite-notice",{icon:"information",kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten(t=>t.children).filter(t=>!t.hidden).toArray().filter(({panel:t})=>(t==null?void 0:t.open)&&!t.disabled&&t.flowEnabled).map(({title:t,panel:i})=>{const o=()=>this._handlePanelFlowItemBack(i);return c("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:n=>{n.preventDefault(),o()}},i.render(),c("calcite-button",{appearance:"transparent",onclick:o,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_renderItems(e){const{visible:t,collapsed:i,_filterEnabled:o,visibleElements:{closeButton:n,collapseButton:d,heading:p,flow:r},_dragEnabled:h,selectionMode:_,filterText:I,filterPlaceholder:w,messages:g}=this,A=[c("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:n,closed:!t,collapsed:i,collapsible:d,heading:p?g.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},c("calcite-list",{afterCreate:u=>{u.addEventListener("focusin",this._setActiveItem),u.addEventListener("focusout",this._clearActiveItem)},afterRemoved:u=>{u.removeEventListener("focusin",this._setActiveItem),u.removeEventListener("focusout",this._clearActiveItem)},canPull:u=>this._canMove(u,"pull"),canPut:u=>this._canMove(u,"put"),"data-layer-type":S,dragEnabled:h,filterEnabled:o,filterPlaceholder:w,filterText:o?I:"",group:k,key:"root-list",label:g.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:_,onCalciteListChange:u=>this._handleCalciteListChange(u),onCalciteListDragEnd:u=>this._handleCalciteListDragEnd(u.detail),onCalciteListFilter:u=>{var L;return this.filterText=((L=u.target)==null?void 0:L.filterText)??""},onCalciteListOrderChange:u=>this._onCalciteListOrderChange(u.detail)},e==null?void 0:e.toArray().map(u=>this._renderItem(u)),e!=null&&e.length&&o?c("div",{class:m.filterNoResults,slot:"filter-no-results"},c("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?r?c("calcite-flow",{key:"root-flow"},A):A:null}_renderChildList(e,t=[]){var p;const{_dragEnabled:i}=this,{children:o}=e,n=z(e),d=!J(e.layer)&&!n&&i&&((p=e.layer)==null?void 0:p.type)==="group";return n||d?c("calcite-list",{canPull:r=>this._canMove(r,"pull"),canPut:r=>this._canMove(r,"put"),"data-item":e,"data-layer-type":S,dragEnabled:!!i&&e.childrenSortable&&Q(e),group:e.layer.uid},o==null?void 0:o.filter(r=>!r.hidden).toArray().map(r=>this._renderItem(r,e,[...t,e.title]))):null}_renderItemMessage(e){return e.error?c("div",{class:m.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},c("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},c("div",{slot:"message"},this.messages.layerError))):e.incompatible?c("div",{class:m.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},c("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),bind:this,icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},c("div",{slot:"message"},this.messages.layerIncompatible))):null}_renderItem(e,t,i){const{_activeItem:o,_selectedDragItemLayerUid:n,selectionMode:d,selectedItems:p,messages:r}=this,h=e.title||r.untitledLayer,_=e.visibleAtCurrentScale?h:`${h} (${r.layerInvisibleAtScale})`,I=this._filterActions(e.actionsSections),w=this._countActions(I);return c("calcite-list-item",{afterCreate:g=>this._focusSelectedDragEl(g,e),afterUpdate:g=>this._focusSelectedDragEl(g,e),class:this.classes(m.item,{[m.itemActive]:o===e}),"data-item":e,dragDisabled:!e.sortable,dragSelected:e.layer.uid===n,id:e.layer.uid,key:`list-item-${e.layer.uid}`,label:h,metadata:{parentTitles:i,title:h},open:e.open,selected:d!=="none"&&p.includes(e),title:_,value:e.layer.uid,onCalciteListItemDragHandleChange:g=>this._handleCalciteListItemDragHandleChange(g,e),onCalciteListItemSelect:g=>this._handleCalciteListItemSelect(g,e,t),onCalciteListItemToggle:g=>this._handleCalciteListItemToggle(g,e)},c("div",{class:this.classes({[m.itemContent]:!0,[m.itemInvisibleAtScale]:!e.visibleAtCurrentScale}),slot:"content"},h),this._renderItemStatus(e,t),this._renderItemToggle(e,t),this._renderItemTemporaryIcon(e),this._renderChildList(e,i),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),w>1?this._renderActionsSections(e,I):w===1?this._renderAction({item:e,action:this._getSingleActionButton(I),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:o,publishing:n,updating:d}=e,p=d&&!t,r=!!o;return c("calcite-icon",{class:this.classes({[m.statusIndicator]:!0,[m.publishing]:n,[m.updating]:p,[m.connectionStatus]:r,[m.connectionStatusConnected]:r&&o==="connected"}),icon:W({connectionStatus:o,publishing:n}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryLayerIndicators&&"persistenceEnabled"in e.layer&&!e.layer.persistenceEnabled?c("calcite-icon",{class:m.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemToggle(e,t){const{messages:i,visibilityAppearance:o}=this,{visible:n}=e,d=t==null?void 0:t.visibilityMode;if(d==="inherited")return null;const p=Z({visible:n,exclusive:d==="exclusive",visibilityAppearance:o}),r=o==="checkbox";return c("calcite-action",{appearance:"transparent",class:m.visibleToggle,icon:r?p:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:r?"actions-start":"actions-end",text:i.layerVisibility,title:i.layerVisibility},r?null:c("calcite-icon",{class:this.classes({[m.visibleIcon]:d!=="exclusive"&&n}),icon:p,scale:"s"}))}_renderPanel(e){return!(e!=null&&e.open)||e.disabled||e.flowEnabled?null:c("div",{class:m.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!(e!=null&&e.visible))return null;const{open:t,title:i,disabled:o}=e;return c("calcite-action",{active:t,appearance:"transparent",disabled:o,icon:D(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return c("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:i=>e.actionsOpen=i.target.open},c("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:this.messagesCommon.options,title:this.messagesCommon.options}),t.toArray().map((i,o)=>this._renderActionSection(e,i,o)))}_renderActionSection(e,t,i){return c("calcite-action-group",{key:`action-section-${i}`},t.toArray().map(o=>this._renderAction({item:e,action:o,textEnabled:!0})))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const o="image"in e?e.image:void 0,n={[m.itemActionIcon]:!!t,[m.itemActionImage]:!!o};return t&&(n[t]=!0),o||t?c("span",{"aria-hidden":"true",class:this.classes(m.itemActionIcon,n),key:"icon",styles:te(o)}):null}_renderAction(e){const{item:t,action:i,textEnabled:o}=e,{active:n,disabled:d,title:p,type:r,indicator:h}=i;return c("calcite-action",{active:r==="toggle"&&i.value,appearance:"transparent",disabled:d,icon:D(i),indicator:h,key:`action-${i.uid}`,loading:n,onclick:()=>this._triggerAction(t,i),scale:"s",slot:o?void 0:"actions-end",text:p??"",textEnabled:o,title:p??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_moveLayerFromChildList({toEl:e,fromEl:t,dragEl:i,newIndex:o}){const n=b(i),d=b(e),p=b(t);this.viewModel.moveListItem(n,p,d,o)}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:o}=e;t.insertBefore(i,t.children[o])}_sortLayers(e,t){var i,o;if(e)if(e.group===k)X((o=(i=this.view)==null?void 0:i.map)==null?void 0:o.layers,t);else{const n=b(e);if(!n)return;Y(n,t)}}_getSingleActionButton(e){return e.reduce(t=>t).filter(t=>t&&t.type==="button").at(0)}_filterActions(e){return e.map(t=>t.filter(i=>i.visible))}_countActions(e){return e.reduce((t,i)=>t+i.length,0)}_triggerAction(e,t){t&&e&&(t.type==="toggle"&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if(t==="none")return;const o=e.target.selectedItems.map(n=>b(n)).filter(Boolean);i.removeAll(),i.addMany(o)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame(()=>e==null?void 0:e.setFocus())}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListItemSelect(e,t,i){b(e.target)===t&&this.selectionMode==="none"&&(i==null?void 0:i.visibilityMode)!=="inherited"&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;(t==null?void 0:t.visibilityMode)==="exclusive"&&e.visible||(e.visible=!e.visible)}};l([s()],a.prototype,"_activeItem",void 0),l([s()],a.prototype,"_tooltipReferenceMap",void 0),l([s()],a.prototype,"_focusRootFlowItem",void 0),l([s()],a.prototype,"_focusPanelFlowItem",void 0),l([s()],a.prototype,"_dragEnabled",null),l([s()],a.prototype,"_filterEnabled",null),l([s()],a.prototype,"collapsed",void 0),l([s()],a.prototype,"dragEnabled",void 0),l([s()],a.prototype,"filterPlaceholder",void 0),l([s()],a.prototype,"filterText",void 0),l([s()],a.prototype,"headingLevel",void 0),l([s()],a.prototype,"icon",void 0),l([s()],a.prototype,"iconClass",void 0),l([s()],a.prototype,"label",null),l([s()],a.prototype,"listItemCanGiveFunction",void 0),l([s()],a.prototype,"listItemCanReceiveFunction",void 0),l([s()],a.prototype,"listItemCreatedFunction",null),l([s(),T("esri/widgets/LayerList/t9n/LayerList")],a.prototype,"messages",void 0),l([s(),T("esri/t9n/common")],a.prototype,"messagesCommon",void 0),l([s()],a.prototype,"minDragEnabledItems",void 0),l([s()],a.prototype,"minFilterItems",void 0),l([s()],a.prototype,"multipleSelectionEnabled",null),l([s()],a.prototype,"operationalItems",null),l([s()],a.prototype,"selectionEnabled",null),l([s()],a.prototype,"selectedItems",void 0),l([s()],a.prototype,"selectionMode",void 0),l([s()],a.prototype,"view",null),l([q("trigger-action"),s({type:x})],a.prototype,"viewModel",void 0),l([s()],a.prototype,"visibilityAppearance",void 0),l([s({type:N,nonNullable:!0})],a.prototype,"visibleElements",void 0),a=l([R("esri.widgets.LayerList")],a);const se=a;export{se as default};
