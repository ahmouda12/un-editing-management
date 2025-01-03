const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B6QLSJpN.js","assets/button-DXjKuKtV.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/form-B4OwUu51.js","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/label-C1Y8426B.js","assets/component-6CIDVndn.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-tooltip-DuIyCZgx.js","assets/floating-ui-BH2WIGVi.js","assets/debounce-BOqmhDXu.js","assets/openCloseComponent-C5H0O9Vb.js","assets/FloatingArrow-BZmTlXcv.js"])))=>i.map(i=>d[i]);
import{x as i,y as o,B as m,cU as I,aI as M,bF as O,im as P,lO as f,io as S,ip as C,_ as w,iq as d,lK as k,iE as L}from"./index-DPJiPkbh.js";import{b as F}from"./GeolocationPositioning-Cnp9xJez.js";import"./geolocationUtils-Dp5_3yrL.js";import"./GoTo-28s5bp4H.js";const W=15e3,$="esri.widgets.Track.TrackViewModel";let a=class extends F{constructor(t){super(t),this._watchId=void 0,this._trackStartingTimeoutId=void 0,this._settingPosition=null,this._trackController=null,this.error=void 0,this.positionFilterFunction=null}destroy(){this._stopTracking()}get state(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||this._trackStartingTimeoutId!==void 0?"waiting":this.tracking?"tracking":this.error!=null?"error":"ready":"feature-unsupported"}get tracking(){return this._watchId!==void 0}start(){this.state!=="disabled"&&this.state!=="feature-unsupported"&&this._startTracking()}stop(){this.state!=="disabled"&&this.state!=="feature-unsupported"&&this._stopTracking()}_stopWatchingPosition(){this._watchId!==void 0&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=void 0)}_stopTracking(){this._abortTrack(),this._clearWaitingTimer(),this._stopWatchingPosition(),this._clearGraphic()}_startTracking(){this._stopTracking();const t=M(async e=>{this._abortTrack();const s=new AbortController;this._trackController=s;const{timestamp:n,coords:l}=e,h={timestamp:n,coords:{...l}};this.error=void 0;try{if(typeof this.positionFilterFunction=="function"&&!this.positionFilterFunction.call(null,{position:h})||(await this.updatePosition(e,s),this._trackController!==s))return;this._clearWaitingTimer(),this._addGraphic(),this.emit("track",{position:e}),this._trackController=null}catch(c){if(O(c))return;throw this._trackController=null,this._emitError(c),this._clearWaitingTimer(),c}},0);this._watchId=navigator.geolocation.watchPosition(e=>{this._settingPosition=t(e).catch(I)},this._handleWatchPositionError.bind(this),this.geolocationOptions??void 0),this._trackStartingTimeoutId=setTimeout(()=>{this._trackStartingTimeoutId=void 0},W)}_handleWatchPositionError(t){t.code===t.PERMISSION_DENIED&&this._stopTracking(),this._emitError(t)}_abortTrack(){var t;(t=this._trackController)==null||t.abort(),this._trackController=null}_clearWaitingTimer(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=void 0,this._settingPosition=null}_emitError(t){this.error=t,this.emit("track-error",{error:t})}};i([o()],a.prototype,"_watchId",void 0),i([o()],a.prototype,"_trackStartingTimeoutId",void 0),i([o()],a.prototype,"_settingPosition",void 0),i([o()],a.prototype,"error",void 0),i([o()],a.prototype,"positionFilterFunction",void 0),i([o({readOnly:!0})],a.prototype,"state",null),i([o({readOnly:!0})],a.prototype,"tracking",null),i([o()],a.prototype,"start",null),i([o()],a.prototype,"stop",null),a=i([m($)],a);const T=a,g={base:"esri-track",widgetIcon:L.tracking},D="compass-north-circle";let r=class extends S{constructor(t,e){super(t,e),this.iconClass=g.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new T,this._toggleTracking=()=>{const s=this.viewModel;s&&s.state!=="feature-unsupported"&&s.state!=="disabled"&&(s.state!=="tracking"&&s.state!=="waiting"?this.viewModel.start():this.viewModel.stop())}}loadDependencies(){return C({button:()=>w(()=>import("./calcite-button-B6QLSJpN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),tooltip:()=>w(()=>import("./calcite-tooltip-DuIyCZgx.js"),__vite__mapDeps([16,2,3,5,17,18,19,20]))})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(t){this.viewModel.geolocationOptions=t}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(t){this.viewModel.goToLocationEnabled=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get graphic(){return this.viewModel.graphic}set graphic(t){this.viewModel.graphic=t}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get rotationEnabled(){return this.viewModel.rotationEnabled}set rotationEnabled(t){this.viewModel.rotationEnabled=t}get scale(){return this.viewModel.scale}set scale(t){this.viewModel.scale=t}get tracking(){return this.viewModel.tracking}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}start(){this.viewModel.start()}stop(){this.viewModel.stop()}render(){var v;const{viewModel:t,messages:e,icon:s,iconClass:n}=this,l=t==null?void 0:t.state,h=l==="tracking",c=this._localizeError((v=this.viewModel)==null?void 0:v.error),u=(h?e==null?void 0:e.stopTracking:e==null?void 0:e.startTracking)??"",y=l==="feature-unsupported",b=(l==="tracking"?"pause":void 0)??s,p=n===g.widgetIcon?void 0:n,E=p===void 0?D:void 0,_=s==null&&p;return d("div",{class:this.classes(g.base,k.widget)},!y&&d("calcite-button",{class:k.widgetButton,disabled:l==="disabled",iconStart:b??E,kind:"neutral",label:u,loading:l==="waiting",onclick:this._toggleTracking,scale:_?"s":"m",title:u},_?this._renderLegacyIcon(p):null),c?d("calcite-tooltip",{open:!0,overlayPositioning:"fixed",referenceElement:this.container},c):null)}_renderLegacyIcon(t){return d("span",{"aria-hidden":"true",class:t,styles:{display:"flex"}})}_localizeError(t){var e,s,n;return t instanceof GeolocationPositionError?t.code===GeolocationPositionError.PERMISSION_DENIED?(e=this.messages)==null?void 0:e.permissionError:t.code===GeolocationPositionError.TIMEOUT?(s=this.messages)==null?void 0:s.timeoutError:(n=this.messages)==null?void 0:n.positionUnavailable:t instanceof Error?t.message:void 0}};i([o()],r.prototype,"geolocationOptions",null),i([o()],r.prototype,"goToLocationEnabled",null),i([o()],r.prototype,"goToOverride",null),i([o()],r.prototype,"graphic",null),i([o()],r.prototype,"iconClass",void 0),i([o()],r.prototype,"icon",void 0),i([o()],r.prototype,"label",null),i([o(),P("esri/widgets/Track/t9n/Track")],r.prototype,"messages",void 0),i([o()],r.prototype,"rotationEnabled",null),i([o()],r.prototype,"scale",null),i([o({readOnly:!0})],r.prototype,"tracking",null),i([o()],r.prototype,"view",null),i([o({type:T}),f(["track","track-error"])],r.prototype,"viewModel",void 0),r=i([m("esri.widgets.Track")],r);const U=r;export{U as default};
