import{bJ as g,bK as R,bL as $,bM as P,bN as S,bO as T}from"./index-DPJiPkbh.js";function j(e,s){const a=e==null?void 0:e.geometry;if(!e||(a==null?void 0:a.type)!=="mesh"||!s)return;const{renderCoordsHelper:c,elevationProvider:l}=s,{camera:h}=s.state,{extent:t}=a,{center:d,spatialReference:r}=t,x=g(r),n=R(r),z=g(c.spatialReference),v=t.width*x,w=t.height*n,p=(t.zmax??0)*n,u=p-(t.zmin??0)*n,y=Math.max(v,w,u)/z,{x:i,y:m}=d,b=d.z??0;$(o,i,m,b),c.toRenderCoords(o,r,o);const f=y/h.computeScreenPixelSizeAt(o);if(f>h.width*H)return"meshTooClose";if(f<A)return"meshTooFar";const C=P(e),{absoluteZ:M}=S(i,m,p,r,s,C);return M<(l.getElevation(i,m,b,r,"ground")??0)*n+u*L?"meshUnderground":"mesh"}const A=20,H=1,L=.1,o=T();export{j as getDrawMeshHelpMessage};