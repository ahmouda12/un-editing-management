import{x as s,B,y as r,ab as V,im as R,lO as S,io as I,iC as z,cR as u,fs as g,g1 as H,jn as E,aU as w,iq as P,lK as U,w as j,mf as L}from"./index-B252NKV0.js";import{z as q,E as K}from"./Features-CjJVbXmG.js";import"./throttle-jjSnxk80.js";import"./geometryUtils-DNjSQ04c.js";import"./scaleUtils-BKVOuLFd.js";import"./actionUtils-C4SJq4BY.js";import"./Feature-CijmPQtm.js";import"./uriUtils-qU8jRZ8W.js";import"./a11yUtils-BChjGAWF.js";import"./utils-Co-S1tNt.js";import"./executeQueryJSON-D-cH_-Xg.js";import"./query-BpTWe5Tk.js";import"./normalizeUtils-PvjooRb6.js";import"./normalizeUtilsCommon-ByXMGwNF.js";import"./pbfQueryUtils-DrPEsJ0j.js";import"./pbf-dp1_jIdk.js";import"./OptimizedGeometry-DLPswkPy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./themeUtils-C3zvZbsE.js";import"./ReactiveSet-BcKqDl-e.js";import"./LayerConstants-B33OP6sh.js";import"./actions-l5SZVc8j.js";import"./GoTo-B08Csiw_.js";const v="esri-popup",_=`${v}--is-docked`,h={base:v,main:`${v}__main-container`,shadow:`${v}--shadow`,isDocked:_,isDockedTopLeft:`${_}-top-left`,isDockedTopCenter:`${_}-top-center`,isDockedTopRight:`${_}-top-right`,isDockedBottomLeft:`${_}-bottom-left`,isDockedBottomCenter:`${_}-bottom-center`,isDockedBottomRight:`${_}-bottom-right`,alignTopCenter:`${v}--aligned-top-center`,alignBottomCenter:`${v}--aligned-bottom-center`,alignTopLeft:`${v}--aligned-top-left`,alignBottomLeft:`${v}--aligned-bottom-left`,alignTopRight:`${v}--aligned-top-right`,alignBottomRight:`${v}--aligned-bottom-right`,pointer:`${v}__pointer`,pointerDirection:`${v}__pointer-direction`};let D=class extends q{constructor(e){super(e)}};D=s([B("esri.widgets.Popup.PopupViewModel")],D);const N=D;let m=class extends V{constructor(){super(...arguments),this.actionBar=!0,this.closeButton=!0,this.collapseButton=!0,this.featureNavigation=!0,this.heading=!0,this.spinner=!0}};s([r({type:Boolean,nonNullable:!0})],m.prototype,"actionBar",void 0),s([r({type:Boolean,nonNullable:!0})],m.prototype,"closeButton",void 0),s([r({type:Boolean,nonNullable:!0})],m.prototype,"collapseButton",void 0),s([r({type:Boolean,nonNullable:!0})],m.prototype,"featureNavigation",void 0),s([r({type:Boolean,nonNullable:!0})],m.prototype,"heading",void 0),s([r({type:Boolean,nonNullable:!0})],m.prototype,"spinner",void 0),m=s([B("esri.widgets.Features.PopupVisibleElements")],m);const A=m,$={buttonEnabled:!0,position:"auto",breakpoint:{width:544}};let d=class extends I{constructor(e,t){super(e,t),this._dockAction=new z({id:"popup-dock-action"}),this._featuresWidget=new K({responsiveActionsEnabled:!0}),this._containerNode=null,this._mainContainerNode=null,this._pointerOffsetInPx=16,this.alignment="auto",this.collapsed=!1,this.dockEnabled=!1,this.headingLevel=2,this.messages=null,this.viewModel=new N,this.visibleElements=new A}initialize(){this.addHandles([u(()=>{var e,t;return[(t=(e=this.viewModel)==null?void 0:e.view)==null?void 0:t.widthBreakpoint,this.dockEnabled]},()=>this._handleDockIcon(),g),u(()=>{var e,t;return[this.dockEnabled,(e=this.messages)==null?void 0:e.undock,(t=this.messages)==null?void 0:t.dock]},()=>this._handleDockEnabled(),g),u(()=>this.dockOptions,e=>{const{_dockAction:t}=this,i=this._featuresWidget.headerActions;i.remove(t),e.buttonEnabled&&i.add(t)},g),u(()=>{var e;return(e=this.viewModel)==null?void 0:e.screenLocation},()=>this._positionContainer()),u(()=>{var e;return[(e=this.viewModel)==null?void 0:e.active,this.dockEnabled]},()=>this._toggleScreenLocationEnabled()),u(()=>{var e,t,i,l,a,o,n;return[(e=this.viewModel)==null?void 0:e.screenLocation,(i=(t=this.viewModel)==null?void 0:t.view)==null?void 0:i.padding,(a=(l=this.viewModel)==null?void 0:l.view)==null?void 0:a.size,(o=this.viewModel)==null?void 0:o.active,(n=this.viewModel)==null?void 0:n.location,this.alignment]},()=>this.reposition()),u(()=>{var e,t;return(t=(e=this.viewModel)==null?void 0:e.view)==null?void 0:t.size},(e,t)=>this._updateDockEnabledForViewSize(e,t)),u(()=>{var e;return(e=this.viewModel)==null?void 0:e.view},(e,t)=>this._viewChange(e,t)),u(()=>{var e,t;return(t=(e=this.viewModel)==null?void 0:e.view)==null?void 0:t.ready},(e,t)=>this._viewReadyChange(e??!1,t??!1)),u(()=>this.viewModel,()=>this._featuresWidget.viewModel=this.viewModel,g),u(()=>this._featureNavigationTop,e=>this._featuresWidget.featureNavigationTop=e,g),u(()=>this.headingLevel,e=>this._featuresWidget.headingLevel=e,g),u(()=>this.collapsed,e=>this._featuresWidget.collapsed=e,g),u(()=>this.visibleElements.actionBar,e=>this._featuresWidget.visibleElements.actionBar=!!e,g),u(()=>this.visibleElements.closeButton,e=>this._featuresWidget.visibleElements.closeButton=!!e,g),u(()=>this.visibleElements.collapseButton,e=>this._featuresWidget.visibleElements.collapseButton=!!e,g),u(()=>this.visibleElements.heading,e=>this._featuresWidget.visibleElements.heading=!!e,g),u(()=>this.visibleElements.spinner,e=>this._featuresWidget.visibleElements.spinner=!!e,g),u(()=>this.visibleElements.featureNavigation,e=>this._featuresWidget.visibleElements.featureNavigation=!!e,g),H(()=>this._featuresWidget,"trigger-header-action",e=>{e.action===this._dockAction&&(this.dockEnabled=!this.dockEnabled)})])}normalizeCtorArgs(e){const t={...e};return(e==null?void 0:e.visibleElements)!=null&&(t.visibleElements=new A(e.visibleElements),e.collapseEnabled!=null&&(t.visibleElements.collapseButton=e.collapseEnabled),e.spinnerEnabled!=null&&(t.visibleElements.spinner=e.spinnerEnabled)),t}destroy(){var e;this._dockAction.destroy(),(e=this._featuresWidget)==null||e.destroy()}get _featureNavigationTop(){const{currentAlignment:e,currentDockPosition:t}=this;return e==="bottom-left"||e==="bottom-center"||e==="bottom-right"||t==="top-left"||t==="top-center"||t==="top-right"}get actions(){return this.viewModel.actions}set actions(e){this.viewModel.actions=e}get autoCloseEnabled(){return this.viewModel.autoCloseEnabled}set autoCloseEnabled(e){this.viewModel.autoCloseEnabled=e}get autoOpenEnabled(){return E(w.getLogger(this),"autoOpenEnabled",{replacement:"MapView/SceneView.popupEnabled",version:"4.27"}),this.viewModel.autoOpenEnabled}set autoOpenEnabled(e){E(w.getLogger(this),"autoOpenEnabled",{replacement:"MapView/SceneView.popupEnabled",version:"4.27"}),this.viewModel.autoOpenEnabled=e}get defaultPopupTemplateEnabled(){return this.viewModel.defaultPopupTemplateEnabled}set defaultPopupTemplateEnabled(e){this.viewModel.defaultPopupTemplateEnabled=e}get content(){return this.viewModel.content}set content(e){this.viewModel.content=e}get collapseEnabled(){return E(w.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton}set collapseEnabled(e){E(w.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton=e}get currentAlignment(){return this._getCurrentAlignment()}get currentDockPosition(){return this._getCurrentDockPosition()}get dockOptions(){return this._get("dockOptions")||$}set dockOptions(e){var c,p;const t={...$},i=(p=(c=this.viewModel)==null?void 0:c.view)==null?void 0:p.breakpoints,l={};i&&(l.width=i.xsmall,l.height=i.xsmall);const a={...t,...e},o={...t.breakpoint,...l},{breakpoint:n}=a;typeof n=="object"?a.breakpoint={...o,...n}:n&&(a.breakpoint=o),this._set("dockOptions",a),this._setCurrentDockPosition(),this.reposition()}get featureCount(){return this.viewModel.featureCount}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(e){this.viewModel.featureMenuOpen=e}get features(){return this.viewModel.features}set features(e){this.viewModel.features=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get highlightEnabled(){return this.viewModel.highlightEnabled}set highlightEnabled(e){this.viewModel.highlightEnabled=e}get location(){return this.viewModel.location}set location(e){this.viewModel.location=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get promises(){return this.viewModel.promises}set promises(e){this.viewModel.promises=e}get selectedFeature(){return this.viewModel.selectedFeature}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(e){this.viewModel.selectedFeatureIndex=e}get selectedFeatureWidget(){return this._featuresWidget.selectedFeatureWidget}get spinnerEnabled(){return E(w.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner}set spinnerEnabled(e){E(w.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner=e}get title(){return this.viewModel.title}set title(e){this.viewModel.title=e}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(e){this.viewModel.updateLocationEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}blur(){const{active:e}=this.viewModel;e||w.getLogger(this).warn("Popup can only be blurred when currently active."),this._featuresWidget.blur()}clear(){return this.viewModel.clear()}close(){this.visible=!1}fetchFeatures(e,t){return this.viewModel.fetchFeatures(e,t)}focus(){const{active:e}=this.viewModel;e||w.getLogger(this).warn("Popup can only be focused when currently active."),this.reposition(),requestAnimationFrame(()=>{this._featuresWidget.focus()})}next(){return this.viewModel.next()}open(e){const t=!!e&&!!e.featureMenuOpen,i={collapsed:!!e&&!!e.collapsed,featureMenuOpen:t};this.set(i),this.viewModel.open(e),this._shouldFocus(e)}previous(){return this.viewModel.previous()}reposition(){this.renderNow(),this._positionContainer(),this._setCurrentAlignment()}triggerAction(e){return this.viewModel.triggerAction(e)}render(){var b,f,k,M;const{dockEnabled:e,currentAlignment:t,currentDockPosition:i}=this,{active:l}=this.viewModel,a=l&&e,o=l&&!e,n=(f=(b=this.selectedFeature)==null?void 0:b.layer)==null?void 0:f.title,c=(M=(k=this.selectedFeature)==null?void 0:k.layer)==null?void 0:M.id,p={[h.alignTopCenter]:t==="top-center",[h.alignBottomCenter]:t==="bottom-center",[h.alignTopLeft]:t==="top-left",[h.alignBottomLeft]:t==="bottom-left",[h.alignTopRight]:t==="top-right",[h.alignBottomRight]:t==="bottom-right",[h.isDocked]:a,[h.shadow]:o,[h.isDockedTopLeft]:i==="top-left",[h.isDockedTopCenter]:i==="top-center",[h.isDockedTopRight]:i==="top-right",[h.isDockedBottomLeft]:i==="bottom-left",[h.isDockedBottomCenter]:i==="bottom-center",[h.isDockedBottomRight]:i==="bottom-right"};return P("div",{afterCreate:this._positionContainer,afterUpdate:this._positionContainer,bind:this,class:this.classes(h.base,p),"data-layer-id":c,"data-layer-title":n,role:"presentation"},l?[this._renderMainContainer(),this._renderPointer()]:null)}_renderPointer(){return this.dockEnabled?null:P("div",{class:h.pointer,key:"popup-pointer",role:"presentation"},P("div",{class:this.classes(h.pointerDirection,h.shadow)}))}_renderMainContainer(){const{dockEnabled:e}=this,t={[h.shadow]:e};return P("div",{afterCreate:this._setMainContainerNode,afterUpdate:this._setMainContainerNode,bind:this,class:this.classes(h.main,U.widget,t)},this._featuresWidget.render())}async _shouldFocus(e){e!=null&&e.shouldFocus&&(await j(()=>{var t;return((t=this.viewModel)==null?void 0:t.active)===!0}),this.focus())}_isOutsideView(e){const{popupHeight:t,popupWidth:i,screenLocation:l,side:a,view:o}=e;if(isNaN(i)||isNaN(t)||!o||!l)return!1;const n=o.padding;return a==="right"&&l.x+i/2>o.width-n.right||a==="left"&&l.x-i/2<n.left||a==="top"&&l.y-t<n.top||a==="bottom"&&l.y+t>o.height-n.bottom}_calculateAutoAlignment(e){if(e!=="auto")return e;const{_pointerOffsetInPx:t,_containerNode:i,_mainContainerNode:l,viewModel:a}=this,{screenLocation:o,view:n}=a;if(o==null||!n||!i)return"top-center";function c(F){return parseInt(F.replaceAll(/[^-\d\.]/g,""),10)}const p=l?window.getComputedStyle(l,null):null,b=p?c(p.getPropertyValue("max-height")):0,f=p?c(p.getPropertyValue("height")):0,{height:k,width:M}=i.getBoundingClientRect(),y=M+t,C=Math.max(k,b,f)+t,x=this._isOutsideView({popupHeight:C,popupWidth:y,screenLocation:o,side:"right",view:n}),T=this._isOutsideView({popupHeight:C,popupWidth:y,screenLocation:o,side:"left",view:n}),O=this._isOutsideView({popupHeight:C,popupWidth:y,screenLocation:o,side:"top",view:n}),W=this._isOutsideView({popupHeight:C,popupWidth:y,screenLocation:o,side:"bottom",view:n});return T?O?"bottom-right":"top-right":x?O?"bottom-left":"top-left":O?W?"top-center":"bottom-center":"top-center"}_callCurrentAlignment(e){return typeof e=="function"?e.call(this):e}_getCurrentAlignment(){const{alignment:e,dockEnabled:t}=this;return t||!this.viewModel.active?null:this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(e)))}_setCurrentAlignment(){this._set("currentAlignment",this._getCurrentAlignment())}_setCurrentDockPosition(){this._set("currentDockPosition",this._getCurrentDockPosition())}_calculatePositionResult(e){const t=["left","right"];return L(this.container)&&t.reverse(),e==null?void 0:e.replace(/leading/gi,t[0]).replaceAll(/trailing/gi,t[1])}_callDockPosition(e){return typeof e=="function"?e.call(this):e}_getDockPosition(){var e;return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition((e=this.dockOptions)==null?void 0:e.position)))}_getCurrentDockPosition(){return this.dockEnabled&&this.viewModel.active?this._getDockPosition():null}_calculateAutoDockPosition(e){var n;if(e!=="auto")return e;const t=(n=this.viewModel)==null?void 0:n.view,i=L(this.container)?"top-left":"top-right";if(!t)return i;const l=t.padding||{left:0,right:0,top:0,bottom:0},a=t.width-l.left-l.right,{breakpoints:o}=t;return o&&a<=o.xsmall?"bottom-center":i}_getDockIcon(){const e=this._getDockPosition();if(this.dockEnabled)return"minimize";switch(e){case"top-left":case"bottom-left":return"dock-left";case"top-center":return"maximize";case"bottom-center":return"dock-bottom";default:return"dock-right"}}_handleDockIcon(){this._dockAction.icon=this._getDockIcon()}_handleDockEnabled(){var e,t;this._dockAction.title=this.dockEnabled?(e=this.messages)==null?void 0:e.undock:(t=this.messages)==null?void 0:t.dock}_setMainContainerNode(e){this._mainContainerNode=e}_positionContainer(e=this._containerNode){if(e&&(this._containerNode=e),!this._containerNode)return;const{screenLocation:t}=this.viewModel,{width:i}=this._containerNode.getBoundingClientRect(),l=this._calculatePositionStyle(t,i);l&&Object.assign(this._containerNode.style,l)}_calculateFullWidth(e){const{currentAlignment:t,_pointerOffsetInPx:i}=this;return t==="top-left"||t==="bottom-left"||t==="top-right"||t==="bottom-right"?e+i:e}_calculateAlignmentPosition(e,t,i,l){const{currentAlignment:a,_pointerOffsetInPx:o}=this;if(!i)return;const{padding:n}=i,c=l/2,p=i.height-t,b=i.width-e;return a==="bottom-center"?{top:t+o-n.top,left:e-c-n.left}:a==="top-left"?{bottom:p+o-n.bottom,right:b+o-n.right}:a==="bottom-left"?{top:t+o-n.top,right:b+o-n.right}:a==="top-right"?{bottom:p+o-n.bottom,left:e+o-n.left}:a==="bottom-right"?{top:t+o-n.top,left:e+o-n.left}:a==="top-center"?{bottom:p+o-n.bottom,left:e-c-n.left}:void 0}_calculatePositionStyle(e,t){const{dockEnabled:i,view:l}=this;if(!l)return;if(i)return{left:"",top:"",right:"",bottom:""};if(e==null||!t)return;const a=this._calculateFullWidth(t),o=this._calculateAlignmentPosition(e.x,e.y,l,a);return o?{top:o.top!==void 0?`${o.top}px`:"auto",left:o.left!==void 0?`${o.left}px`:"auto",bottom:o.bottom!==void 0?`${o.bottom}px`:"auto",right:o.right!==void 0?`${o.right}px`:"auto"}:void 0}_viewChange(e,t){e&&t&&(this.close(),this.clear())}_viewReadyChange(e,t){e?this._wireUpView():t&&(this.close(),this.clear())}_wireUpView(){this._setDockEnabledForViewSize(this.dockOptions)}_dockingThresholdCrossed(e,t,i){const[l,a]=e,[o,n]=t,{width:c=0,height:p=0}=i??{};return l<=c&&o>c||l>c&&o<=c||a<=p&&n>p||a>p&&n<=p}_updateDockEnabledForViewSize(e,t){var b,f;if(!e||!t)return;const i=((f=(b=this.viewModel)==null?void 0:b.view)==null?void 0:f.padding)||{left:0,right:0,top:0,bottom:0},l=i.left+i.right,a=i.top+i.bottom,o=[],n=[];o[0]=e[0]-l,o[1]=e[1]-a,n[0]=t[0]-l,n[1]=t[1]-a;const{dockOptions:c}=this,p=c.breakpoint;this._dockingThresholdCrossed(o,n,p)&&this._setDockEnabledForViewSize(c),this._setCurrentDockPosition()}_toggleScreenLocationEnabled(){const{dockEnabled:e,viewModel:t}=this;if(!t)return;const i=t.active&&!e;t.screenLocationEnabled=i}_shouldDockAtCurrentViewSize(e){var c,p;const t=e.breakpoint,i=(p=(c=this.viewModel)==null?void 0:c.view)==null?void 0:p.ui;if(!i)return!1;const{width:l,height:a}=i;if(isNaN(l)||isNaN(a)||!t)return!1;const o=t.hasOwnProperty("width")&&l<=(t.width??0),n=t.hasOwnProperty("height")&&a<=(t.height??0);return o||n}_setDockEnabledForViewSize(e){e.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(e))}};s([r({readOnly:!0})],d.prototype,"_featureNavigationTop",null),s([r()],d.prototype,"actions",null),s([r()],d.prototype,"alignment",void 0),s([r()],d.prototype,"autoCloseEnabled",null),s([r()],d.prototype,"autoOpenEnabled",null),s([r()],d.prototype,"defaultPopupTemplateEnabled",null),s([r()],d.prototype,"content",null),s([r()],d.prototype,"collapsed",void 0),s([r()],d.prototype,"collapseEnabled",null),s([r({readOnly:!0})],d.prototype,"currentAlignment",null),s([r({readOnly:!0})],d.prototype,"currentDockPosition",null),s([r()],d.prototype,"dockOptions",null),s([r()],d.prototype,"dockEnabled",void 0),s([r({readOnly:!0})],d.prototype,"featureCount",null),s([r()],d.prototype,"featureMenuOpen",null),s([r()],d.prototype,"features",null),s([r()],d.prototype,"goToOverride",null),s([r()],d.prototype,"headingLevel",void 0),s([r()],d.prototype,"highlightEnabled",null),s([r()],d.prototype,"location",null),s([r()],d.prototype,"label",null),s([r(),R("esri/widgets/Popup/t9n/Popup")],d.prototype,"messages",void 0),s([r()],d.prototype,"promises",null),s([r({readOnly:!0})],d.prototype,"selectedFeature",null),s([r()],d.prototype,"selectedFeatureIndex",null),s([r({readOnly:!0})],d.prototype,"selectedFeatureWidget",null),s([r()],d.prototype,"spinnerEnabled",null),s([r()],d.prototype,"title",null),s([r()],d.prototype,"updateLocationEnabled",null),s([r()],d.prototype,"view",null),s([r({type:N}),S(["triggerAction","trigger-action"])],d.prototype,"viewModel",void 0),s([r()],d.prototype,"visible",null),s([r({type:A,nonNullable:!0})],d.prototype,"visibleElements",void 0),d=s([B("esri.widgets.Popup")],d);const we=d;export{we as default};