import{n as _}from"./interfaces-CGza0uBR.js";class u extends _{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const s of t)e[s]=this[s];return e}}function f(o={}){return(t,e)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(e),o.constValue!=null)Object.defineProperty(t,e,{get:()=>o.constValue});else{const s=t._parameterNames.length-1,p=o.count||2,n=Math.ceil(Math.log2(p)),a=t._parameterBits??[0];let r=0;for(;a[r]+n>16;)r++,r>=a.length&&a.push(0);t._parameterBits=a;const h=a[r],m=(1<<n)-1<<h;a[r]+=n,Object.defineProperty(t,e,{get(){return this[s]},set(i){if(this[s]!==i&&(this[s]=i,this._keyDirty=!0,this._parameterBits[r]=this._parameterBits[r]&~m|+i<<h&m,typeof i!="number"&&typeof i!="boolean"))throw new Error("Configuration value for "+e+" must be boolean or number, got "+typeof i)}})}}}export{f as r,u as t};