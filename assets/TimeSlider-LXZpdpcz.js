const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DPJiPkbh.js","assets/index-HngaTkmj.css","assets/calcite-action-BHaqNzsV.js","assets/action-ED8yfrZZ.js","assets/dom-BlTj4jtE.js","assets/interactive-CUuALpv0.js","assets/loadable-CXsmssm6.js","assets/locale-CS3btv4w.js","assets/key-D63ExP77.js","assets/observers-DXQDxHJZ.js","assets/component-6CIDVndn.js","assets/t9n-CeKm3gqL.js","assets/icon-DwdUDmXD.js","assets/loader-DPaOyEdE.js","assets/calcite-action-menu-DgMUJ9-v.js","assets/action-menu-9mv6r4cU.js","assets/array-BMcQdnYi.js","assets/popover-hxIdq1Do.js","assets/floating-ui-BH2WIGVi.js","assets/debounce-BOqmhDXu.js","assets/focusTrapComponent-DEcdEJmJ.js","assets/openCloseComponent-C5H0O9Vb.js","assets/Heading-DKEJi13z.js","assets/FloatingArrow-BZmTlXcv.js"])))=>i.map(i=>d[i]);
import{iE as E,eX as _t,bh as ut,cR as F,fs as V,eT as xt,nu as mt,aU as B,_ as U,n7 as wt,nv as Tt,n9 as bt,aQ as g,aS as Et,w as kt,bF as St,nw as dt,x as i,y as a,l2 as at,kN as P,B as ct,im as lt,lO as Mt,io as $t,ip as Ct,nx as Ft,ny as jt,gP as I,aC as Dt,iq as o,lK as _,lM as At,gQ as Rt,nz as Ot,kz as Wt}from"./index-DPJiPkbh.js";import{A as It}from"./Slider-DDDRUocg.js";import{t as L}from"./accessibleHandler-XhnTPGUg.js";import{c as Lt}from"./themeUtils-C3zvZbsE.js";const d="esri-time-slider",s={widgetIcon:E.timeClock,timeSlider:`${d}`,timeSliderOutOfBounds:`${d}--out-of-bounds`,timeSliderMode:`${d}__mode--`,timeSliderLayout:`${d}__layout--`,timeSliderRow:`${d}__row`,animation:`${d}__animation`,animationButton:`${d}__animation-button`,timeExtent:`${d}__time-extent`,timeExtentGroup:`${d}__time-extent-group`,timeExtentDate:`${d}__time-extent-date`,timeExtentTime:`${d}__time-extent-time`,timeExtentSeparator:`${d}__time-extent-separator`,playbackControls:`${d}__playback-controls`,min:`${d}__min`,minDate:`${d}__min-date`,minTime:`${d}__min-time`,slider:`${d}__slider`,sliderMajorTick:"majorTick",sliderMinorTick:"minorTick",max:`${d}__max`,maxDate:`${d}__max-date`,maxTime:`${d}__max-time`,previous:`${d}__previous`,previousButton:`${d}__previous-button`,next:`${d}__next`,nextButton:`${d}__next-button`,warning:`${d}__warning`,warningText:`${d}__warning-text`,hasActions:`${d}--has-actions`,actions:`${d}__actions`,actionsButton:`${d}__actions-button`},ot=1e4;function Z(t){return t!=null&&t.count!==void 0}function D(t){return t!=null&&t.interval!==void 0}function rt(t){return t!=null&&t.dates!==void 0}let h=class extends _t.EventedAccessor{constructor(t){super(t),this._animationController=null,this._isViewTimeExtentInitialized=!1,this._timerId=null,this.actions=new ut,this.fullTimeExtent=null,this.loop=!1,this.mode="time-window",this.stops={count:10},this.timeExtent=null,this.view=null}initialize(){this.addHandles([F(()=>this.effectiveStops,()=>{this.timeExtent==null&&(this.timeExtent=this._getDefaultTimeExtent())},V),F(()=>this.view,(t,e)=>{this._unregisterWidget(e),this._registerWidget(t)},xt),F(()=>this.timeExtent,t=>{if(this.view==null)return;const e=this.view.timeExtent;(t!=null&&!t.isAllTime||e!=null&&!e.isAllTime)&&(t!=null&&e!=null&&t.equals(e)||(this.view.timeExtent=t))},V),F(()=>{var t;return(t=this.view)==null?void 0:t.timeExtent},t=>{this._isViewTimeExtentInitialized?(t!=null&&!t.isAllTime||this.timeExtent!=null&&!this.timeExtent.isAllTime)&&(t!=null&&this.timeExtent!=null&&t.equals(this.timeExtent)||(this.timeExtent=t)):this._isViewTimeExtentInitialized=!0})])}destroy(){this._timerId!=null&&(clearInterval(this._timerId),this._timerId=null),this._unregisterWidget(this.view),this.view=null,this._animationController!=null&&(this._animationController.abort(),this._animationController=null)}get effectiveStops(){const{fullTimeExtent:t,stops:e}=this;if(rt(e)){const{dates:r}=e;if(r==null||r.length===0)return null;const u=r.sort((v,c)=>v.getTime()-c.getTime());if(t==null)return u;const{start:n,end:p}=t;return n==null||p==null?u:u.filter(v=>!(v.getTime()<n.getTime()||v.getTime()>p.getTime()))}if(Z(e)){const r=e.timeExtent??t;return this._divideTimeExtentByCount(r,e.count)}if(D(e)){const r=e.timeExtent??t;return this._divideTimeExtentByInterval(r,e.interval)}return[]}set playRate(t){t<=0||t>36e5||(this.state==="playing"&&this._startAnimation(),this._set("playRate",t))}get state(){return this.fullTimeExtent==null?"disabled":this._animationController!=null?"playing":"ready"}get timeExtentValues(){const{mode:t,timeExtent:e}=this;if(e==null||e.isAllTime||e.isEmpty)return null;const{start:r,end:u}=e;switch(t){case"cumulative-from-end":case"instant":return r!=null?[r.getTime()]:null;case"cumulative-from-start":return u!=null?[u.getTime()]:null;case"time-window":return r!=null&&u!=null?[r.getTime(),u.getTime()]:null}}static async getPropertiesFromWebMap(t,e){mt(B.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel"),"`TimeSliderViewModel.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebMap'",{replacement:"timeUtils.getTimeSliderSettingsFromWebMap",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebMap",warnOnce:!0});const{getTimeSliderSettingsFromWebMap:r}=await U(()=>import("./index-DPJiPkbh.js").then(u=>u.y2),__vite__mapDeps([0,1]));return r(t,e)}next(){this._step({forward:!0,allowRestart:!1})}play(){this._startAnimation()}previous(){this._step({forward:!1,allowRestart:!1})}stop(){this._stopAnimation()}triggerAction(t){this.emit("trigger-action",{action:t})}updateWebDocument(t){if(wt(t)){const e=new Tt({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:Z(this.stops)?this.stops.count:null,numThumbs:this.mode==="time-window"?2:1,stopDelay:this.playRate,stopInterval:D(this.stops)?this.stops.interval:null,stops:rt(this.stops)?this.stops.dates:null});t.widgets?t.widgets.timeSlider=e:t.widgets=new bt({timeSlider:e})}}valuesToTimeExtent(t){if(t==null)return null;const e=t.sort((n,p)=>n-p).map(n=>new Date(n)),r=e.length>0?e[0]:null,u=e.length>1?e[1]:null;switch(this.mode){case"time-window":return new g({start:r,end:u});case"instant":return new g({start:r,end:r});case"cumulative-from-start":return new g({start:null,end:r});case"cumulative-from-end":return new g({start:r,end:null});default:return g.allTime}}async _animate(){var t;try{const e=this.view,r=(t=this._animationController)==null?void 0:t.signal;await Promise.all([Et(this.playRate,null,r),e!=null&&kt(()=>e.updating===!1,r)])}catch(e){return St(e)||B.getLogger(this).error(e),void(this._animationController=null)}this._step({forward:!0,allowRestart:!1}),this._animationController!=null&&this._animate()}_divideTimeExtentByCount(t,e=10){if(!t||!e)return[];const{start:r,end:u}=t;if(r==null||u==null)return[];if(e>ot)return this._divideTimeExtentByCount(t);const n=[],p=r.getTime(),v=u.getTime()-p;for(let c=0;c<=e;c++)n.push(new Date(p+c/e*v));return n}_divideTimeExtentByInterval(t,e,r=ot){if(!t||!e)return[];const{start:u,end:n}=t;if(u==null||n==null)return[];const p=n.getTime()-u.getTime(),v=e.toMilliseconds();if(v<=0||p/v>r)return this._divideTimeExtentByCount(t);const c=[],{value:k,unit:T}=e;let l=u;for(;l.getTime()<=n.getTime();)c.push(new Date(l.getTime())),l=dt(l,k,T);return c}_getDefaultTimeExtent(){const{effectiveStops:t,mode:e}=this;if(t==null||!e)return null;switch(e){case"time-window":return t.length>1?new g({start:t[0],end:t[1]}):null;case"cumulative-from-start":return t.length>0?new g({start:null,end:t[0]}):null;case"cumulative-from-end":return t.length>0?new g({start:t[0],end:null}):null;case"instant":return t.length>0?new g({start:t[0],end:t[0]}):null;default:return null}}_registerWidget(t){t!=null&&(t.persistableViewModels.includes(this)||t.persistableViewModels.add(this))}_startAnimation(){this._stopAnimation(),this._animationController=new AbortController,this._step({forward:!0,allowRestart:!0}),this._animate()}_step(t){const{forward:e,allowRestart:r}=t,{effectiveStops:u}=this;if(this.timeExtentValues==null||u==null)return;const n=u.map(l=>l.getTime()),p=this.timeExtentValues.map(l=>{const y=n.indexOf(l);if(y!==-1)return y;const S=n.reduce((f,M)=>Math.abs(M-l)<Math.abs(f-l)?M:f);return n.indexOf(S)}),v=p.map(l=>l+(e?1:-1)),c=v.some(l=>l<0||l>n.length-1),{loop:k,state:T}=this;if(c)if(k||r){const l=Math.min(...p),y=Math.max(...p),S=(e?p.map(f=>f-l):p.map(f=>f+(n.length-1-y))).map(f=>n[f]);this.timeExtent=this.valuesToTimeExtent(S)}else T==="playing"&&this.stop();else{const l=v.map(y=>n[y]);this.timeExtent=this.valuesToTimeExtent(l)}}_stopAnimation(){this._animationController!=null&&(this._animationController.abort(),this._animationController=null)}_unregisterWidget(t){t!=null&&t.persistableViewModels.remove(this)}};i([a()],h.prototype,"_animationController",void 0),i([a({type:ut})],h.prototype,"actions",void 0),i([a({readOnly:!0})],h.prototype,"effectiveStops",null),i([a({type:g})],h.prototype,"fullTimeExtent",void 0),i([a({nonNullable:!0})],h.prototype,"loop",void 0),i([a({nonNullable:!0})],h.prototype,"mode",void 0),i([a({nonNullable:!0,value:1e3})],h.prototype,"playRate",null),i([a({readOnly:!0})],h.prototype,"state",null),i([a({cast:t=>t==null?null:(D(t)&&(t.interval=at(P,t.interval)),(D(t)||Z(t))&&(t.timeExtent=at(g,t.timeExtent)),t)})],h.prototype,"stops",void 0),i([a({type:g})],h.prototype,"timeExtent",void 0),i([a({readOnly:!0})],h.prototype,"timeExtentValues",null),i([a()],h.prototype,"view",void 0),i([a()],h.prototype,"next",null),i([a()],h.prototype,"play",null),i([a()],h.prototype,"previous",null),i([a()],h.prototype,"stop",null),i([a()],h.prototype,"updateWebDocument",null),h=i([ct("esri.widgets.TimeSlider.TimeSliderViewModel")],h);const N=h,Vt=3,Bt=858,Ut=[{minor:{value:100,unit:"milliseconds"},major:{value:1,unit:"seconds"},format:{second:"numeric"}},{minor:{value:500,unit:"milliseconds"},major:{value:5,unit:"seconds"},format:{second:"numeric"}},{minor:{value:1,unit:"seconds"},major:{value:20,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:2,unit:"seconds"},major:{value:30,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:10,unit:"seconds"},major:{value:1,unit:"minutes"},format:{minute:"numeric"}},{minor:{value:15,unit:"seconds"},major:{value:5,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"minutes"},major:{value:20,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:5,unit:"minutes"},major:{value:2,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:15,unit:"minutes"},major:{value:6,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"hours"},major:{value:1,unit:"days"},format:{day:"numeric",month:"short"}},{minor:{value:6,unit:"hours"},major:{value:1,unit:"weeks"},format:{day:"numeric",month:"short"}},{minor:{value:1,unit:"days"},major:{value:1,unit:"months"},format:{month:"long"}},{minor:{value:2,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:3,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:4,unit:"days"},major:{value:3,unit:"months"},format:{month:"short",year:"numeric"}},{minor:{value:1,unit:"weeks"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"months"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:2,unit:"months"},major:{value:2,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"years"},major:{value:1,unit:"decades"},format:{year:"numeric"}},{minor:{value:2,unit:"years"},major:{value:5,unit:"decades"},format:{year:"numeric"}},{minor:{value:5,unit:"decades"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1,unit:"centuries"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:2,unit:"centuries"},major:{value:20,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:5,unit:"centuries"},major:{value:50,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:10,unit:"centuries"},major:{value:100,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:20,unit:"centuries"},major:{value:200,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:50,unit:"centuries"},major:{value:500,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:100,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:200,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:500,unit:"centuries"},major:{value:5e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1e3,unit:"centuries"},major:{value:1e4,unit:"centuries"},format:{era:"short",year:"numeric"}}];let m=class extends $t{constructor(t,e){super(t,e),this._ignoreNextSliderUpdate=!1,this._slider=new It({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1}),this._tickFormat=null,this.disabled=!1,this.iconClass=s.widgetIcon,this.icon=null,this.labelFormatFunction=null,this.messages=null,this.messagesCommon=null,this.tickConfigs=null,this.timeVisible=!1,this.viewModel=new N}initialize(){this.addHandles([F(()=>this._slider.values,t=>{if(this._ignoreNextSliderUpdate)return void(this._ignoreNextSliderUpdate=!1);const e=this.viewModel.valuesToTimeExtent(t);this.timeExtent!=null?e!=null?this.timeExtent.equals(e)||(this.timeExtent=e):this.timeExtent=null:e!=null&&(this.timeExtent=e)}),F(()=>this.effectiveStops,()=>this._updateSliderSteps(),V)])}loadDependencies(){return Ct({action:()=>U(()=>import("./calcite-action-BHaqNzsV.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13])),"action-menu":()=>U(()=>import("./calcite-action-menu-DgMUJ9-v.js"),__vite__mapDeps([14,15,0,1,16,4,8,6,3,5,7,9,10,11,12,13,17,18,19,20,21,22,23]))})}destroy(){this._slider.destroy(),this._tickFormat=null}get _dateFormat(){return this._getIntlOptions("short-date")}get _timeFormat(){return this._getIntlOptions("long-time")}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get effectiveStops(){return this.viewModel.effectiveStops}get fullTimeExtent(){return this.viewModel.fullTimeExtent}set fullTimeExtent(t){this.viewModel.fullTimeExtent=t}get interactive(){return!(this.disabled||this.viewModel.state==="disabled"||this.timeZone===Ft)}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}set layout(t){["auto","compact","wide"].includes(t)||(t="auto"),this._set("layout",t)}get loop(){return this.viewModel.loop}set loop(t){this.viewModel.loop=t}get mode(){return this.viewModel.mode}set mode(t){this.viewModel.mode=t}get playRate(){return this.viewModel.playRate}set playRate(t){this.viewModel.playRate=t}get stops(){return this.viewModel.stops}set stops(t){this.viewModel.stops=t}get tickFormats(){const{timeZone:t}=this;return Ut.map(({minor:e,major:r,format:u})=>({minor:new P(e),major:new P(r),format:{...u,timeZone:t}}))}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(t){this.viewModel.timeExtent=t}get timeZone(){var t;return((t=this.viewModel.view)==null?void 0:t.timeZone)??jt}set timeZone(t){this._overrideIfSome("timeZone",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}static async getPropertiesFromWebMap(t,e){return mt(B.getLogger("esri.widgets.TimeSlider"),"`TimeSlider.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebMap'",{replacement:"timeUtils.getTimeSliderSettingsFromWebMap",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebMap",warnOnce:!0}),N.getPropertiesFromWebMap(t,e)}next(){return this.viewModel.next()}play(){return this.viewModel.play()}previous(){return this.viewModel.previous()}stop(){return this.viewModel.stop()}render(){var tt,et;const{_slider:t,actions:e,domNode:r,effectiveStops:u,fullTimeExtent:n,interactive:p,messages:v,messagesCommon:c,mode:k,tickConfigs:T,timeExtent:l,timeVisible:y,viewModel:{state:S,timeExtentValues:f}}=this;if(n!=null){const{start:w,end:it}=n;if(w!=null&&it!=null){const A=w.getTime(),R=it.getTime(),nt=t.min!==A||t.max!==R;if(nt&&(t.min=A,t.max=R),T!=null)t.tickConfigs!==T&&(t.tickConfigs=T);else{const gt=(R-A)/(((tt=t.trackElement)==null?void 0:tt.offsetWidth)||400),C=this.tickFormats.find(O=>O.minor.toMilliseconds()>Vt*gt)??this.tickFormats.at(-1),st=this._tickFormat!==C&&C!=null;if(st&&(this._tickFormat=C),nt||st){const O={mode:"position",values:this._getTickPositions(C.minor),labelsVisible:!1,tickCreatedFunction:(W,b)=>{b==null||b.classList.add(s.sliderMinorTick)}},yt={mode:"position",values:this._getTickPositions(C.major),labelsVisible:!0,tickCreatedFunction:(W,b)=>{b==null||b.classList.add(s.sliderMajorTick)},labelFormatFunction:W=>I(W,C.format)};t.tickConfigs=[O,yt]}}}}const M=((et=this.fullTimeExtent)==null?void 0:et.start)==null||this.fullTimeExtent.end==null||this.timeExtent==null||this.timeExtent.isAllTime||this.timeExtent.isEmpty||this.timeExtent.start!=null&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||this.timeExtent.end!=null&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start);if(M)switch(this._ignoreNextSliderUpdate=!0,k){case"time-window":t.values=[t.min,t.max];break;case"instant":case"cumulative-from-end":t.values=[t.min];break;case"cumulative-from-start":t.values=[t.max]}else f!=null?Dt(t.values,f)||(t.values=f):t.values=null;t.disabled=!p;const pt=S==="ready",j=S==="playing",x=M||!p||u==null||u.length===0,$=this.layout==="auto"?r.clientWidth<Bt?"compact":"wide":this.layout,z=o("div",{class:s.animation},o("button",{"aria-disabled":x?"true":"false","aria-label":j?c.control.stop:c.control.play,bind:this,class:this.classes(_.widgetButton,s.animationButton,x&&_.buttonDisabled),disabled:x,onclick:this._playOrStopClick,title:j?c.control.stop:c.control.play,type:"button"},o("div",{class:this.classes((pt||x)&&E.play,j&&E.pause)}))),ht=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.timeExtentDate,"data-date":l?[l.start,l.end]:null,"data-layout":$,"data-type":"extent",key:"extent"}):l==null||l!=null&&l.isAllTime?[o("div",{class:this.classes(s.warning,E.noticeTriangle)}),o("div",{class:s.warningText,key:"warning-text"},v.noTimeExtent)]:l.isEmpty?[o("div",{class:this.classes(s.warning,E.noticeTriangle)}),o("div",{class:s.warningText,key:"warning-text"},v.emptyTimeExtent)]:[l.start!=null&&o("div",{class:s.timeExtentGroup,key:"start-date-group"},o("div",{class:s.timeExtentDate,key:"start-date"},this._formatDate(l.start)),y?o("div",{class:s.timeExtentTime,key:"start-time"},this._formatTime(l.start)):null),l.start!=null&&l.end!=null&&l.start.getTime()!==l.end.getTime()&&o("div",{class:s.timeExtentSeparator,key:"separator"},"–"),l.end!=null&&(l.start==null||l.start.getTime()!==l.end.getTime())&&o("div",{class:s.timeExtentGroup,key:"end-date-group"},o("div",{class:s.timeExtentDate,key:"end-date"},this._formatDate(l.end)),y?o("div",{class:s.timeExtentTime,key:"end-time"},this._formatTime(l.end)):null)],q=o("div",{class:this.classes(s.timeExtent,!p&&_.buttonDisabled)},[ht]),vt=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.minDate,"data-date":n==null?void 0:n.start,"data-layout":$,"data-type":"min",key:"min-date"}):(n==null?void 0:n.start)!=null&&[o("div",{class:s.minDate,key:"min-date"},this._formatDate(n.start)),y&&o("div",{class:s.minTime,key:"min-time"},this._formatTime(n.start))],G=o("div",{class:this.classes(s.min,!p&&_.buttonDisabled)},[vt]),H=o("div",{class:s.slider},t.render()),ft=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.maxDate,"data-date":n==null?void 0:n.end,"data-layout":$,"data-type":"max",key:"max-date"}):(n==null?void 0:n.end)!=null&&[o("div",{class:s.maxDate,key:"max-date"},this._formatDate(n.end)),y&&o("div",{class:s.maxTime,key:"max-time"},this._formatTime(n.end))],Q=o("div",{class:this.classes(s.max,!p&&_.buttonDisabled)},[ft]),K=o("div",{class:s.previous},o("button",{"aria-disabled":x?"true":"false","aria-label":c.pagination.previous,bind:this,class:this.classes(_.widgetButton,s.previousButton,(j||x)&&_.buttonDisabled),disabled:x,onclick:this._previousClick,title:c.pagination.previous,type:"button"},o("div",{class:E.reverse}))),X=o("div",{class:s.next},o("button",{"aria-disabled":x?"true":"false","aria-label":c.pagination.next,bind:this,class:this.classes(_.widgetButton,s.nextButton,(j||x)&&_.buttonDisabled),disabled:x,onclick:this._nextClick,title:c.pagination.next,type:"button"},o("div",{class:E.forward}))),J=(e==null?void 0:e.length)>0,Y=J&&o("div",{class:s.actions,title:c.options},o("calcite-action-menu",{class:s.actionsButton,label:c.options},e.toArray().map(w=>o("calcite-action",{bind:this,icon:w.icon,id:w.id,onclick:()=>this.viewModel.triggerAction(w),text:w.title,textEnabled:!0}))));return o("div",{afterCreate:w=>{this.addHandles(At(w,()=>this.scheduleRender()))},"aria-label":v.widgetLabel,class:this.classes(s.timeSlider,_.widget,`${s.timeSliderMode}${k}`,`${s.timeSliderLayout}${$}`,!p&&_.disabled,M&&s.timeSliderOutOfBounds,J&&s.hasActions,Lt())},$==="wide"&&o("div",{class:s.timeSliderRow},o("div",{class:s.playbackControls},[z,q,G,H,Q,K,X]),Y),$==="compact"&&[o("div",{class:s.timeSliderRow,key:"time-slider-row-1"},[q,Y]),o("div",{class:s.timeSliderRow,key:"time-slider-row-2"},[H]),o("div",{class:s.timeSliderRow,key:"time-slider-row-3"},[G,K,z,X,Q])])}updateWebDocument(t){var e;(e=this.viewModel)==null||e.updateWebDocument(t)}_createLabel(t){if(this.labelFormatFunction==null)return;const e=t.getAttribute("data-type"),r=t.getAttribute("data-layout"),u=t["data-date"];this.labelFormatFunction(u,e,t,r)}_formatDate(t){return I(t,this._dateFormat)}_formatTime(t){return I(t,this._timeFormat)}_getIntlOptions(t){const{timeZone:e}=this;return{...Rt(t),timeZone:e}}_getTickPositions(t){const{fullTimeExtent:e}=this;if((e==null?void 0:e.start)==null||e.end==null)return[];const{start:r,end:u}=e,n=[],{value:p,unit:v}=t;let c=Ot(r,v,this.timeZone);for(;c.getTime()<=u.getTime();)c.getTime()>=r.getTime()&&n.push(c.getTime()),c=dt(c,p,v,this.timeZone);return n}_updateSliderSteps(){this._slider.steps=this.effectiveStops!=null&&this.effectiveStops.length>0?this.effectiveStops.map(t=>t.getTime()):null}_playOrStopClick(){switch(this.viewModel.state){case"ready":this.viewModel.play();break;case"playing":this.viewModel.stop();break;case"disabled":break;default:Wt(this.viewModel.state)}}_previousClick(){this.viewModel.previous()}_nextClick(){this.viewModel.next()}};i([a()],m.prototype,"_dateFormat",null),i([a()],m.prototype,"_timeFormat",null),i([a()],m.prototype,"actions",null),i([a()],m.prototype,"disabled",void 0),i([a()],m.prototype,"effectiveStops",null),i([a()],m.prototype,"fullTimeExtent",null),i([a()],m.prototype,"iconClass",void 0),i([a()],m.prototype,"icon",void 0),i([a({readOnly:!0})],m.prototype,"interactive",null),i([a()],m.prototype,"label",null),i([a()],m.prototype,"labelFormatFunction",void 0),i([a({value:"auto"})],m.prototype,"layout",null),i([a()],m.prototype,"loop",null),i([a(),lt("esri/widgets/TimeSlider/t9n/TimeSlider")],m.prototype,"messages",void 0),i([a(),lt("esri/t9n/common")],m.prototype,"messagesCommon",void 0),i([a()],m.prototype,"mode",null),i([a()],m.prototype,"playRate",null),i([a()],m.prototype,"stops",null),i([a()],m.prototype,"tickConfigs",void 0),i([a()],m.prototype,"tickFormats",null),i([a()],m.prototype,"timeExtent",null),i([a({nonNullable:!0})],m.prototype,"timeVisible",void 0),i([a()],m.prototype,"timeZone",null),i([a()],m.prototype,"view",null),i([a({type:N}),Mt("trigger-action")],m.prototype,"viewModel",void 0),i([L()],m.prototype,"_playOrStopClick",null),i([L()],m.prototype,"_previousClick",null),i([L()],m.prototype,"_nextClick",null),m=i([ct("esri.widgets.TimeSlider")],m);const qt=m;export{qt as default};
