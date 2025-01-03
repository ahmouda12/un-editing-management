import{ad as p,a5 as o,bT as m,bU as a,bV as u,b5 as S,bH as d,bW as l,bX as s,bY as c,bZ as b,b_ as M,b$ as h,bO as C}from"./index-DPJiPkbh.js";import{U as P,w as f}from"./enums-BRqP_wXA.js";import{r as v}from"./SnappingVisualizer-g2_BPvPy.js";class z extends v{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new p({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new p({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new o({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.spatialReference}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new o({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.spatialReference}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=h(),i=h(),y=C();m(r,a(e.centerVertex),a(e.previousVertex)),m(i,a(e.nextVertex),a(e.previousVertex)),u(y,r,i);const g=`rightAngleQuad${y[2]<0?45:225}`;return this._visualizeSnappingIndicator(new o({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:t.spatialReference}),this._getOrCreateSymbol(g,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const r=new S({geometry:e,symbol:t});return this._graphicsLayer.add(r),d(()=>{this._graphicsLayer.remove(r)})}_getOrCreateSymbol(e,t){var i;const r=this._symbolPairingsByType;return((i=r.get(e))==null?void 0:i.color)!==t&&r.set(e,{color:t,symbol:I(e,t)}),r.get(e).symbol}}function I(n,e){const t=[...e.toRgb(),255*e.a];switch(n){case"point":return new b({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new b({outline:new M({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:P.Butt,joinStyle:f.Round,miterLimit:10,width:s(c.lineHintWidthTarget),color:t}]}}});case"parallelSign":return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r=n==="rightAngleQuad45"?45:225;return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:s(c.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:s(c.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{z as f};