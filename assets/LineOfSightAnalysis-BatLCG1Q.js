import{bh as d,x as s,y as i,hT as f,B as v,cR as x,eT as m,hS as b,hU as $,hV as z,hW as E,hX as _,hY as R}from"./index-B252NKV0.js";import{c as w}from"./Analysis-ups128H7.js";import{f as O,u as A}from"./LineOfSightAnalysisTarget-BDc7qRyR.js";const a=d.ofType(O);let t=class extends w{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(x(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},m))}get targets(){return this._get("targets")||new a}set targets(e){this._set("targets",b(e,this.targets,a))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var h;const e=this.spatialReference;if(((h=this.observer)==null?void 0:h.position)==null||e==null)return null;const p=r=>R(r.position,r.elevationInfo)==="absolute-height",n=this.observer.position,u=$(n.x,n.y,n.z,n.x,n.y,n.z);for(const r of this.targets)if(r.position!=null){const o=z(r.position,e);if(o.pending!=null)return{pending:o.pending,extent:null};if(o.geometry!=null){const{x:g,y,z:c}=o.geometry;E(u,[g,y,c])}}const l=_(u,e);return p(this.observer)&&this.targets.every(p)||(l.zmin=void 0,l.zmax=void 0),{pending:null,extent:l}}clear(){this.observer=null,this.targets.removeAll()}};s([i({type:["line-of-sight"]})],t.prototype,"type",void 0),s([i({type:A,json:{read:!0,write:!0}})],t.prototype,"observer",void 0),s([i({cast:f,type:a,nonNullable:!0,json:{read:!0,write:!0}})],t.prototype,"targets",null),s([i({value:null,readOnly:!0})],t.prototype,"extent",void 0),s([i({readOnly:!0})],t.prototype,"spatialReference",null),s([i({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",null),t=s([v("esri.analysis.LineOfSightAnalysis")],t);const q=t;export{q as v};