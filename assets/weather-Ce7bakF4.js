import{x as e,gp as a,y as t,z as l,B as c}from"./index-DPJiPkbh.js";var y;let i=y=class extends l{constructor(o){super(o),this.type="cloudy",this.cloudCover=.5}clone(){return new y({cloudCover:this.cloudCover})}};e([a({cloudy:"cloudy"})],i.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],i.prototype,"cloudCover",void 0),i=y=e([c("esri.views.3d.environment.CloudyWeather")],i);const g=i;var u;let s=u=class extends l{constructor(o){super(o),this.type="foggy",this.fogStrength=.5}clone(){return new u({fogStrength:this.fogStrength})}};e([a({foggy:"foggy"})],s.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],s.prototype,"fogStrength",void 0),s=u=e([c("esri.views.3d.environment.FoggyWeather")],s);const b=s;var d;let r=d=class extends l{constructor(o){super(o),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new d({cloudCover:this.cloudCover,precipitation:this.precipitation})}};e([a({rainy:"rainy"})],r.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],r.prototype,"cloudCover",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],r.prototype,"precipitation",void 0),r=d=e([c("esri.views.3d.environment.RainyWeather")],r);const C=r;var v;let n=v=class extends l{constructor(o){super(o),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new v({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};e([a({snowy:"snowy"})],n.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],n.prototype,"cloudCover",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],n.prototype,"precipitation",void 0),e([t({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],n.prototype,"snowCover",void 0),n=v=e([c("esri.views.3d.environment.SnowyWeather")],n);const N=n;var h;let p=h=class extends l{constructor(o){super(o),this.type="sunny",this.cloudCover=.5}clone(){return new h({cloudCover:this.cloudCover})}};e([a({sunny:"sunny"})],p.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],p.prototype,"cloudCover",void 0),p=h=e([c("esri.views.3d.environment.SunnyWeather")],p);const m=p,$={key:"type",base:m,typeMap:{sunny:m,cloudy:g,rainy:C,snowy:N,foggy:b}},x=Object.keys($.typeMap);function j(o,w){return!!x.includes(o)||(w.error(`"${o}" is not a valid weather type`),!1)}const S=1e4,W=1e5;export{N as a,b,C as c,x as d,$ as e,W as i,m as n,S as p,j as s,g as u};
