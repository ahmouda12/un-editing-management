import{x as n,y as a,B as w,cR as h,eS as _,eT as u,cS as l,ac as c,w as p,E as V,bF as d,is as v}from"./index-B252NKV0.js";import{p as O}from"./MeasurementWidgetContent-BRwX2Kt4.js";var r;(function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"})(r||(r={}));let t=class extends O{constructor(s={}){super(s),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const i=s==null?void 0:s.analysis;i!=null?this.analysis=i:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(s){const{analysis:i,...e}=s;return e}initialize(){this.addHandles([h(()=>{var s;return(s=this.analysis)==null?void 0:s.parent},s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const i=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,i&&this._scheduleViewReconnect()},_),h(()=>({view:this.view,ready:this.view!=null&&this.view.ready,supported:this.supported}),({view:s},i)=>{const e=i==null?void 0:i.view;s!==e&&(this._startUserOperation=l(this._startUserOperation),this._disconnectFromView(e)),this._scheduleViewReconnect()},u),h(()=>this.analysis.isEditable,(s,i)=>{this.analysisView!=null&&(s&&!i&&this.tool==null?this.createTool():s||!i||this.tool==null||this.tool.active||this.removeTool())})])}destroy(){this._reconnectViewTask=l(this._reconnectViewTask),this._startUserOperation=l(this._startUserOperation),this.analysisView!=null&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),this.analysis!=null&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=l(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return this.analysisView!=null&&!this.connectingToView}get connectingToView(){return this._reconnectViewTask!=null}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(s){this._set("visible",s),this.analysisView!=null&&(this.analysisView.visible=s)}async start(){this.clear();const s={task:null,abort:null,state:r.PENDING},i=c(async e=>{s.state=r.WAIT_FOR_VIEW_READY,await p(()=>this.ready,e),s.state=r.RUNNING,this.createTool({interactive:!0})});return s.task=i,s.abort=()=>i.abort(),this._startUserOperation=s,i.promise}clear(){this._startUserOperation=l(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=l(this._reconnectViewTask);const s=c(async i=>{try{await this._reconnectView(i)}catch(e){if(V(i),!d(e))return void this.logger.warn("Failed to use analysis in view model",e);throw e}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=s}async _reconnectView(s){const{view:i}=this,e=i!=null&&i.ready&&this.supported,o=this.analysis;if(this._startUserOperation=y(this._startUserOperation),this._disconnectFromView(i),e&&i!=null&&o!=null){if(this.isAnalysisOwner){if(o.parent!=null)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,i.analyses.add(o)}this.analysisView=await i.whenAnalysisView(o),v(s)?this._startUserOperation=y(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(s){this.removeTool(),s!=null&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,s.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(s){this.analysisView==null||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function y(s){return s!=null&&s.state>=r.RUNNING?(s.abort(),null):s}n([a({nonNullable:!0})],t.prototype,"analysis",null),n([a()],t.prototype,"analysisView",void 0),n([a()],t.prototype,"ready",null),n([a()],t.prototype,"connectingToView",null),n([a({readOnly:!0})],t.prototype,"isAnalysisOwner",null),n([a({type:Boolean,value:!0})],t.prototype,"visible",null),n([a()],t.prototype,"_reconnectViewTask",void 0),t=n([w("esri.widgets.support.InteractiveAnalysisViewModel")],t);export{t as _};