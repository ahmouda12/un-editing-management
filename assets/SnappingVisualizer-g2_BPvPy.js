import{cA as r,cB as u,cC as a,cD as c,cE as h}from"./index-DPJiPkbh.js";import{n as f}from"./PointSnappingHint-DDE-Yg7Q.js";class q{draw(n,i){const e=this._getUniqueHints(n),o=this.sortUniqueHints(e),t=[];for(const s of o)s instanceof r&&t.push(this.visualizeIntersectionPoint(s,i)),s instanceof u&&t.push(this.visualizeLine(s,i)),s instanceof a&&t.push(this.visualizeParallelSign(s,i)),s instanceof c&&t.push(this.visualizeRightAngleQuad(s,i)),s instanceof f&&t.push(this.visualizePoint(s,i));return h(t)}sortUniqueHints(n){return n}_getUniqueHints(n){const i=[];for(const e of n){let o=!0;for(const t of i)if(e.equals(t)){o=!1;break}o&&i.push(e)}return i}}export{q as r};
