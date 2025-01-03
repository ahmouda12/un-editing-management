import{aJ as d,bs as g}from"./index-DPJiPkbh.js";var h;(function(n){n[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown"})(h||(h={}));const p=4294967296,u=new TextDecoder("utf-8"),f=d("safari")||d("ios")?6:d("ff")?12:32;class o{constructor(t,i,s=0,e=t?t.byteLength:0){this._tag=0,this._dataType=h.unknown,this._init(t,i,s,e)}_init(t,i,s,e){this._data=t,this._dataView=i,this._pos=s,this._end=e}asUnsafe(){return this}clone(){return new o(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const i=this._decodeVarint();if(this._tag=i>>3,this._dataType=7&i,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128||(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)||(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)||(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)||(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128))return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=this._data[this._pos]!==0;return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,i=this._pos,s=t.getUint32(i,!0)+t.getUint32(i+4,!0)*p;return this._skip(8),s}getSFixed64(){const t=this._dataView,i=this._pos,s=t.getUint32(i,!0)+t.getInt32(i+4,!0)*p;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),i=this._pos,s=this._toString(this._data,i,i+t);return this._skip(t),s}getBytes(){const t=this._getLength(),i=this._pos,s=this._toBytes(this._data,i,i+t);return this._skip(t),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,i,s,e){const r=this.getMessage(),a=t(r,i,s,e);return r.release(),a}processMessage(t){const i=this.getMessage(),s=t(i);return i.release(),s}getMessage(){const t=this._getLength(),i=o.pool.acquire();return i._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),i}release(){o.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case h.varint:this._decodeVarint();break;case h.fixed64:this._skip(8);break;case h.delimited:this._skip(this._getLength());break;case h.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let i=this._pos,s=0,e=0;if(this._end-i>=10)do{if(e=t[i++],s|=127&e,(128&e)==0||(e=t[i++],s|=(127&e)<<7,(128&e)==0)||(e=t[i++],s|=(127&e)<<14,(128&e)==0)||(e=t[i++],s|=(127&e)<<21,(128&e)==0)||(e=t[i++],s+=268435456*(127&e),(128&e)==0)||(e=t[i++],s+=34359738368*(127&e),(128&e)==0)||(e=t[i++],s+=4398046511104*(127&e),(128&e)==0)||(e=t[i++],s+=562949953421312*(127&e),(128&e)==0)||(e=t[i++],s+=72057594037927940*(127&e),(128&e)==0)||(e=t[i++],s+=9223372036854776e3*(127&e),(128&e)==0))break;throw new Error("Varint too long!")}while(!1);else{let r=1;for(;i!==this._end&&(e=t[i],(128&e)!=0);)++i,s+=(127&e)*r,r*=128;if(i===this._end)throw new Error("Varint overrun!");++i,s+=e*r}return this._pos=i,s}_decodeSVarint(){const t=this._data;let i,s=0,e=0;const r=1&t[this._pos];if(e=t[this._pos++],s|=127&e,(128&e)==0||(e=t[this._pos++],s|=(127&e)<<7,(128&e)==0)||(e=t[this._pos++],s|=(127&e)<<14,(128&e)==0)||(e=t[this._pos++],s|=(127&e)<<21,(128&e)==0)||(e=t[this._pos++],s+=268435456*(127&e),(128&e)==0)||(e=t[this._pos++],s+=34359738368*(127&e),(128&e)==0)||(e=t[this._pos++],s+=4398046511104*(127&e),(128&e)==0))return r?-(s+1)/2:s/2;if(i=BigInt(s),e=t[this._pos++],i+=0x2000000000000n*BigInt(127&e),(128&e)==0||(e=t[this._pos++],i+=0x100000000000000n*BigInt(127&e),(128&e)==0)||(e=t[this._pos++],i+=0x8000000000000000n*BigInt(127&e),(128&e)==0))return Number(r?-(i+1n)/2n:i/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==h.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,i,s){if((s=Math.min(this._end,s))-i>f){const a=t.subarray(i,s);return u.decode(a)}let e="",r="";for(let a=i;a<s;++a){const _=t[a];128&_?r+="%"+_.toString(16):(e+=decodeURIComponent(r)+String.fromCharCode(_),r="")}return r.length&&(e+=decodeURIComponent(r)),e}_toBytes(t,i,s){return s=Math.min(this._end,s),new Uint8Array(t.buffer,i,s-i)}}o.pool=new g(o,void 0,n=>{n._data=null,n._dataView=null});export{o as n};
