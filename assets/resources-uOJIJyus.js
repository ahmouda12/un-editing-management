import{_ as e,E as d}from"./index-DPJiPkbh.js";import{t as o}from"./requestImageUtils-QtRT18sL.js";let c=class{constructor(){this._candidateTiles=[]}schedule(t){this._candidateTiles.includes(t)||this._candidateTiles.push(t)}reshuffle(t){const i=[];for(const s of this._candidateTiles)t>0?(s.reshuffle(),t--):i.push(s);this._candidateTiles=i}};async function f(a){const t=e(()=>import("./mask-svg-cNit2NTT.js"),[]),i=e(()=>import("./overlay-svg-DioSRl-7.js"),[]),s=o((await t).default,{signal:a}),r=o((await i).default,{signal:a}),_={mask:await s,overlay:await r};return d(a),_}export{f as a,c as s};