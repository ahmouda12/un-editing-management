import{n as o}from"./WGLContainer-Dv5NxOAK.js";import{n as f}from"./programUtils-CwiKxPbA.js";const i=e=>{let t="";t+=e[0].toUpperCase();for(let r=1;r<e.length;r++){const s=e[r];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},u=e=>{const t={};for(const r in e)t[i(r)]=e[r];return f(t)},g=(e,t,r,s)=>{const a=e+e.substring(e.lastIndexOf("/")),p=t+t.substring(t.lastIndexOf("/")),n=u(s);return{attributes:r,shaders:{vertexShader:n+o(`${a}.vert`),fragmentShader:n+o(`${p}.frag`)}}};export{g as o};
