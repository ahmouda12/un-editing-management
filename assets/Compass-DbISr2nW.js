const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B6QLSJpN.js","assets/button-DXjKuKtV.js","assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/form-B4OwUu51.js","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/label-C1Y8426B.js","assets/component-6CIDVndn.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-icon-7wB1xzh2.js"])))=>i.map(i=>d[i]);
import{cR as h,fs as c,x as i,y as o,B as _,ab as g,iE as y,im as b,io as $,ip as C,_ as u,iq as d,lK as v}from"./index-DPJiPkbh.js";import{e as R}from"./utils-DsJqvptN.js";import{t as f}from"./GoTo-28s5bp4H.js";const M="esri.widgets.CompassViewModel";let a=class extends f(g){constructor(e){super(e),this.orientation={x:0,y:0,z:0},this.view=null,this._updateForCamera=this._updateForCamera.bind(this),this._updateForRotation=this._updateForRotation.bind(this),this._updateRotationWatcher=this._updateRotationWatcher.bind(this)}initialize(){this.addHandles(h(()=>this.view,this._updateRotationWatcher,c))}destroy(){this.view=null}get canShowNorth(){return R(this.view)}get state(){var e;return!((e=this.view)!=null&&e.ready)||this.view.type==="2d"&&!this.view.constraints.rotationEnabled?"disabled":this.canShowNorth?"compass":"rotation"}reset(){var r,n;if(!((r=this.view)!=null&&r.ready))return;const e={};((n=this.view)==null?void 0:n.type)==="2d"?e.rotation=0:e.heading=0,this.callGoTo({target:e})}_updateForRotation(e){e!=null&&(this.orientation={z:e})}_updateForCamera(e){if(!e)return;const r=-e.heading;this.orientation={x:0,y:0,z:r}}_updateRotationWatcher(e){this.removeAllHandles(),e&&this.addHandles(e.type==="2d"?h(()=>e==null?void 0:e.rotation,this._updateForRotation,c):h(()=>e==null?void 0:e.camera,this._updateForCamera,c))}};i([o({readOnly:!0})],a.prototype,"canShowNorth",null),i([o()],a.prototype,"orientation",void 0),i([o({readOnly:!0})],a.prototype,"state",null),i([o()],a.prototype,"view",void 0),a=i([_(M)],a);const m=a,w="esri-compass",p={base:w,widgetIcon:y.locateCircled,iconContainer:`${w}__icon-container`};let s=class extends ${constructor(t,e){super(t,e),this.iconClass=p.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new m,this._reset=()=>{this.viewModel.reset()},this._toRotationTransform=r=>({transform:`rotateZ(${r.z}deg)`})}loadDependencies(){return C({button:()=>u(()=>import("./calcite-button-B6QLSJpN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>u(()=>import("./calcite-icon-7wB1xzh2.js"),__vite__mapDeps([16,14,2,3,5,12]))})}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}reset(){return this.viewModel.reset()}render(){const{orientation:t,state:e}=this.viewModel,r=e==="rotation"?"arrow-up":"compass-needle",n=this.icon??r,{messages:l}=this;return d("div",{class:this.classes(p.base,v.widget)},d("calcite-button",{class:v.widgetButton,disabled:e==="disabled",kind:"neutral",label:l.reset,onclick:this._reset,round:!0,scale:"s",title:l.reset},d("div",{"aria-hidden":"true",class:p.iconContainer,title:l.reset},d("calcite-icon",{icon:n,scale:"m",styles:this._toRotationTransform(t)}))))}};i([o()],s.prototype,"goToOverride",null),i([o()],s.prototype,"iconClass",void 0),i([o()],s.prototype,"icon",void 0),i([o()],s.prototype,"label",null),i([o(),b("esri/widgets/Compass/t9n/Compass")],s.prototype,"messages",void 0),i([o()],s.prototype,"view",null),i([o({type:m})],s.prototype,"viewModel",void 0),s=i([_("esri.widgets.Compass")],s);const E=s;export{E as default};