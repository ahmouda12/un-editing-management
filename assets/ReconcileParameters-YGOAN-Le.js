import{C as n,x as e,y as o,z as a,A as c,B as p}from"./index-B252NKV0.js";var r;const s=new n({byObject:"by-object",byAttribute:"by-attribute"});let t=r=class extends a{static from(i){return c(r,i)}constructor(i){super(i),this.sessionId=void 0,this.abortIfConflicts=!1,this.conflictDetection=null,this.withPost=!1}};e([o({type:String,json:{write:!0}})],t.prototype,"sessionId",void 0),e([o({type:Boolean,json:{write:!0}})],t.prototype,"abortIfConflicts",void 0),e([o({type:s.apiValues,json:{type:s.jsonValues,read:s.read,write:s.write}})],t.prototype,"conflictDetection",void 0),e([o({type:Boolean,json:{write:!0}})],t.prototype,"withPost",void 0),t=r=e([p("esri.rest.versionManagement.gdbVersion.support.ReconcileParameters")],t);const y=t;export{y as default};