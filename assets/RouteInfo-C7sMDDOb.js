import{ef as T,b5 as h,x as t,y as i,a5 as L,hR as v,o1 as f,B as b,z as c,a3 as m,ad as J,a4 as M,cI as _}from"./index-DPJiPkbh.js";import{g as N,N as S,r as y,i as P,A as d,e as F,u as I,T as g,p as O,s as D,v as V,j as W,U as B,n as U}from"./Stop-BAZm37fq.js";var x;let r=x=class extends T(c){constructor(e){super(e),this.directionLineType=null,this.directionPointId=null,this.distance=null,this.duration=null,this.fromLevel=null,this.geometry=null,this.objectId=null,this.popupTemplate=null,this.symbol=null,this.toLevel=null,this.type="direction-line"}static fromGraphic(e){return new x({directionLineType:N.fromJSON(e.attributes.DirectionLineType),directionPointId:e.attributes.DirectionPointID,distance:e.attributes.Meters,duration:e.attributes.Minutes,fromLevel:e.attributes.FromLevel??null,geometry:e.geometry,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,symbol:e.symbol,toLevel:e.attributes.ToLevel??null})}toGraphic(){const e={ObjectID:this.objectId,DirectionLineType:this.directionLineType!=null?N.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return this.fromLevel!=null&&(e.FromLevel=this.fromLevel),this.toLevel!=null&&(e.ToLevel=this.toLevel),new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};r.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionsLineType",codedValues:[{name:"Unknown",code:0},{name:"Segment",code:1},{name:"Maneuver Segment",code:2},{name:"Restriction violation",code:3},{name:"Scale cost barrier crossing",code:4},{name:"Heavy Traffic",code:5},{name:"Slow Traffic",code:6},{name:"Moderate Traffic",code:7}]}},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"FromLevel",alias:"Start from 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"Meters",alias:"Length in Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"Minutes",alias:"Duration in Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"ToLevel",alias:"End at 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1}],r.popupInfo={title:"Direction Lines",fieldInfos:[{fieldName:"DirectionLineType",label:"Line Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Meters",label:"Length in Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Minutes",label:"Duration in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DirectionPointID",label:"Direction Point ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"FromLevel",label:"Start from 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ToLevel",label:"End at 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i({type:N.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:N.read}}})],r.prototype,"directionLineType",void 0),t([i({json:{read:{source:"attributes.DirectionPointID"}}})],r.prototype,"directionPointId",void 0),t([i({json:{read:{source:"attributes.Meters"}}})],r.prototype,"distance",void 0),t([i({json:{read:{source:"attributes.Minutes"}}})],r.prototype,"duration",void 0),t([i({json:{read:{source:"attributes.FromLevel"}}})],r.prototype,"fromLevel",void 0),t([i({type:L})],r.prototype,"geometry",void 0),t([i({json:{read:{source:"attributes.ObjectID"}}})],r.prototype,"objectId",void 0),t([i({type:v})],r.prototype,"popupTemplate",void 0),t([i({types:f})],r.prototype,"symbol",void 0),t([i({json:{read:{source:"attributes.ToLevel"}}})],r.prototype,"toLevel",void 0),t([i({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=x=t([b("esri.rest.support.DirectionLine")],r);const q=r;var j;let o=j=class extends T(c){constructor(e){super(e),this.alternateName=null,this.arrivalTime=null,this.arrivalTimeOffset=null,this.azimuth=null,this.branchName=null,this.directionPointType=null,this.displayText=null,this.exitName=null,this.geometry=null,this.intersectingName=null,this.level=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sequence=null,this.shortVoiceInstruction=null,this.stopId=null,this.symbol=null,this.towardName=null,this.type="direction-point",this.voiceInstruction=null}readArrivalTime(e,l){return l.attributes.ArrivalTime!=null?new Date(l.attributes.ArrivalTime):null}static fromGraphic(e){return new j({alternateName:e.attributes.AlternateName??null,arrivalTime:e.attributes.ArrivalTime!=null?new Date(e.attributes.ArrivalTime):null,arrivalTimeOffset:e.attributes.ArrivalUTCOffset??null,azimuth:e.attributes.Azimuth??null,branchName:e.attributes.BranchName??null,directionPointType:S.fromJSON(e.attributes.DirectionPointType),displayText:e.attributes.DisplayText??null,exitName:e.attributes.ExitName??null,geometry:e.geometry,intersectingName:e.attributes.IntersectingName??null,level:e.attributes.Level??null,name:e.attributes.Name??null,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,sequence:e.attributes.Sequence,shortVoiceInstruction:e.attributes.ShortVoiceInstruction??null,stopId:e.attributes.StopID??null,symbol:e.symbol,towardName:e.attributes.TowardName??null,voiceInstruction:e.attributes.VoiceInstruction??null})}toGraphic(){const e={ObjectID:this.objectId,DirectionPointType:this.directionPointType!=null?S.toJSON(this.directionPointType):null,Sequence:this.sequence,StopID:this.stopId};return this.alternateName!=null&&(e.AlternateName=this.alternateName),this.arrivalTime!=null&&(e.ArrivalTime=this.arrivalTime.getTime()),this.arrivalTimeOffset!=null&&(e.ArrivalUTCOffset=this.arrivalTimeOffset),this.azimuth!=null&&(e.Azimuth=this.azimuth),this.branchName!=null&&(e.BranchName=this.branchName),this.displayText!=null&&(e.DisplayText=this.displayText),this.exitName!=null&&(e.ExitName=this.exitName),this.intersectingName!=null&&(e.IntersectingName=this.intersectingName),this.level!=null&&(e.Level=this.level),this.name!=null&&(e.Name=this.name),this.shortVoiceInstruction!=null&&(e.ShortVoiceInstruction=this.shortVoiceInstruction),this.towardName!=null&&(e.TowardName=this.towardName),this.voiceInstruction!=null&&(e.VoiceInstruction=this.voiceInstruction),new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};o.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AlternateName",alias:"Alternative Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ArrivalTime",alias:"Maneuver Starts at",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"BranchName",alias:"Signpost Branch Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"DirectionPointType",alias:"Directions Item Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionPointType",codedValues:[{name:"Unknown",code:0},{name:"",code:1},{name:"Arrive at stop",code:50},{name:"Depart at stop",code:51},{name:"Go straight",code:52},{name:"Take ferry",code:100},{name:"Take off ferry",code:101},{name:"Keep center at fork",code:102},{name:"Take roundabout",code:103},{name:"Make U-Turn",code:104},{name:"Pass the door",code:150},{name:"Take stairs",code:151},{name:"",code:152},{name:"Take escalator",code:153},{name:"Take pedestrian ramp",code:154},{name:"Keep left at fork",code:200},{name:"Ramp left",code:201},{name:"Take left-handed roundabout",code:202},{name:"Make left-handed U-Turn",code:203},{name:"Bear left",code:204},{name:"Turn left",code:205},{name:"Make sharp left",code:206},{name:"Turn left, followed by turn left",code:207},{name:"Turn left, followed by turn right",code:208},{name:"Keep right at fork",code:300},{name:"Ramp right",code:301},{name:"Take right-handed roundabout",code:302},{name:"Make right-handed U-Turn",code:303},{name:"Bear right",code:304},{name:"Turn right",code:305},{name:"Make sharp right",code:306},{name:"Turn right, followed by turn left",code:307},{name:"Turn right, followed by turn right",code:308},{name:"Indicates up direction of elevator",code:400},{name:"Indicates up direction of escalator",code:401},{name:"Take up-stairs",code:402},{name:"Indicates down direction of elevator",code:500},{name:"Indicates down direction of escalator",code:501},{name:"Take down-stairs",code:502},{name:"General event",code:1e3},{name:"Landmark",code:1001},{name:"Time zone change",code:1002},{name:"Heavy traffic segment",code:1003},{name:"Scale cost barrier crossing",code:1004},{name:"Administrative Border crossing",code:1005},{name:"Restriction violation",code:1006}]}},{name:"DisplayText",alias:"Text to Display",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ExitName",alias:"Highway Exit Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"IntersectingName",alias:"Intersecting Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"Level",alias:"3D Logical Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Name",alias:"Primary Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ShortVoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TowardName",alias:"Signpost Toward Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"VoiceInstruction",alias:"Voice Full Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null}],o.popupInfo={title:"{DisplayText}",fieldInfos:[{fieldName:"DirectionPointType",label:"Directions Item Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"DisplayText",label:"Text to Display",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"StopID",label:"Stop ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Maneuver Starts at",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Azimuth",label:"Azimuth",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Name",label:"Primary Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AlternateName",label:"Alternative Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ExitName",label:"Highway Exit Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"IntersectingName",label:"Intersecting Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BranchName",label:"Signpost Branch Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TowardName",label:"Signpost Toward Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ShortVoiceInstruction",label:"Voice Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"VoiceInstruction",label:"Voice Full Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i({json:{read:{source:"attributes.AlternateName"}}})],o.prototype,"alternateName",void 0),t([i()],o.prototype,"arrivalTime",void 0),t([m("arrivalTime",["attributes.ArrivalTime"])],o.prototype,"readArrivalTime",null),t([i({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],o.prototype,"arrivalTimeOffset",void 0),t([i({json:{read:{source:"attributes.Azimuth"}}})],o.prototype,"azimuth",void 0),t([i({json:{read:{source:"attributes.BranchName"}}})],o.prototype,"branchName",void 0),t([i({type:S.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:S.read}}})],o.prototype,"directionPointType",void 0),t([i({json:{read:{source:"attributes.DisplayText"}}})],o.prototype,"displayText",void 0),t([i({json:{read:{source:"attributes.ExitName"}}})],o.prototype,"exitName",void 0),t([i({type:J})],o.prototype,"geometry",void 0),t([i({json:{read:{source:"attributes.IntersectingName"}}})],o.prototype,"intersectingName",void 0),t([i()],o.prototype,"level",void 0),t([i({json:{read:{source:"attributes.Name"}}})],o.prototype,"name",void 0),t([i({json:{read:{source:"attributes.ObjectID"}}})],o.prototype,"objectId",void 0),t([i({type:v})],o.prototype,"popupTemplate",void 0),t([i({json:{read:{source:"attributes.Sequence"}}})],o.prototype,"sequence",void 0),t([i({json:{read:{source:"attributes.ShortVoiceInstruction"}}})],o.prototype,"shortVoiceInstruction",void 0),t([i({json:{read:{source:"attributes.StopID"}}})],o.prototype,"stopId",void 0),t([i({types:f})],o.prototype,"symbol",void 0),t([i({json:{read:{source:"attributes.TowardName"}}})],o.prototype,"towardName",void 0),t([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),t([i({json:{read:{source:"attributes.VoiceInstruction"}}})],o.prototype,"voiceInstruction",void 0),o=j=t([b("esri.rest.support.DirectionPoint")],o);const H=o;var C;let s=C=class extends T(c){constructor(e){super(e),this.addedCost=null,this.barrierType=null,this.costs=null,this.curbApproach=null,this.fullEdge=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sideOfEdge=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.type="point-barrier"}readCosts(e,l){return y(l.attributes,"Attr_")}writeCosts(e,l){P(e,l,"Attr_")}static fromGraphic(e){return new C({addedCost:e.attributes.AddedCost??null,barrierType:e.attributes.BarrierType!=null?d.fromJSON(e.attributes.BarrierType):null,costs:e.attributes.Costs!=null?F(JSON.parse(e.attributes.Costs)):null,curbApproach:e.attributes.CurbApproach!=null?I.fromJSON(e.attributes.CurbApproach):null,fullEdge:e.attributes.FullEdge!=null?g.fromJSON(e.attributes.FullEdge):null,geometry:e.geometry,name:e.attributes.Name??null,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,status:e.attributes.Status!=null?O.fromJSON(e.attributes.Status):null,symbol:e.symbol})}toGraphic(){const e={ObjectID:this.objectId,AddedCost:this.addedCost,BarrierType:this.barrierType!=null?d.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(D(this.costs)):null,CurbApproach:this.curbApproach!=null?I.toJSON(this.curbApproach):null,FullEdge:this.fullEdge!=null?g.toJSON(this.fullEdge):null,Name:this.name,Status:this.status!=null?O.toJSON(this.status):null};return new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};s.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAIntYesNo",codedValues:[{name:"No",code:0},{name:"Yes",code:1}]}},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}}],s.popupInfo={title:"Point Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AddedCost",label:"Added Cost",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i()],s.prototype,"addedCost",void 0),t([i({type:d.apiValues,json:{name:"attributes.BarrierType",read:{reader:d.read},write:{writer:d.write}}})],s.prototype,"barrierType",void 0),t([i()],s.prototype,"costs",void 0),t([m("costs",["attributes"])],s.prototype,"readCosts",null),t([M("costs")],s.prototype,"writeCosts",null),t([i({constructOnly:!0,type:I.apiValues,json:{read:{source:"attributes.CurbApproach",reader:I.read}}})],s.prototype,"curbApproach",void 0),t([i({type:g.apiValues,json:{name:"attributes.FullEdge",read:{reader:g.read},write:{writer:g.write}}})],s.prototype,"fullEdge",void 0),t([i({type:J,json:{write:!0}})],s.prototype,"geometry",void 0),t([i({json:{name:"attributes.Name"}})],s.prototype,"name",void 0),t([i({json:{name:"attributes.ObjectID"}})],s.prototype,"objectId",void 0),t([i({type:v})],s.prototype,"popupTemplate",void 0),t([i({type:V.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:V.read}}})],s.prototype,"sideOfEdge",void 0),t([i({json:{read:{source:"attributes.SourceID"}}})],s.prototype,"sourceId",void 0),t([i({json:{read:{source:"attributes.SourceOID"}}})],s.prototype,"sourceOid",void 0),t([i({type:O.apiValues,json:{read:{source:"attributes.Status",reader:O.read}}})],s.prototype,"status",void 0),t([i({types:f})],s.prototype,"symbol",void 0),t([i({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),s=C=t([b("esri.rest.support.PointBarrier")],s);const K=s;var E;let n=E=class extends T(c){constructor(e){super(e),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polygon-barrier"}readCosts(e,l){return y(l.attributes,"Attr_")}writeCosts(e,l){P(e,l,"Attr_")}static fromGraphic(e){return new E({barrierType:e.attributes.BarrierType!=null?d.fromJSON(e.attributes.BarrierType):null,costs:e.attributes.Costs!=null?F(JSON.parse(e.attributes.Costs)):null,geometry:e.geometry,name:e.attributes.Name??null,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,scaleFactor:e.attributes.ScaleFactor??null,symbol:e.symbol})}toGraphic(){const e={ObjectID:this.objectId,BarrierType:this.barrierType!=null?d.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(D(this.costs)):null,Name:this.name??null,ScaleFactor:this.scaleFactor??null};return new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};n.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0}],n.popupInfo={title:"Polygon Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ScaleFactor",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Costs",label:"Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i({type:d.apiValues,json:{name:"attributes.BarrierType",read:{reader:d.read},write:{writer:d.write}}})],n.prototype,"barrierType",void 0),t([i()],n.prototype,"costs",void 0),t([m("costs",["attributes"])],n.prototype,"readCosts",null),t([M("costs")],n.prototype,"writeCosts",null),t([i({type:_,json:{write:!0}})],n.prototype,"geometry",void 0),t([i({json:{name:"attributes.Name"}})],n.prototype,"name",void 0),t([i({json:{name:"attributes.ObjectID"}})],n.prototype,"objectId",void 0),t([i({type:v})],n.prototype,"popupTemplate",void 0),t([i()],n.prototype,"scaleFactor",void 0),t([i({types:f})],n.prototype,"symbol",void 0),t([i({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=E=t([b("esri.rest.support.PolygonBarrier")],n);const Y=n;var A;let p=A=class extends T(c){constructor(e){super(e),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polyline-barrier"}readCosts(e,l){return y(l.attributes,"Attr_")}static fromGraphic(e){return new A({barrierType:e.attributes.BarrierType!=null?d.fromJSON(e.attributes.BarrierType):null,costs:e.attributes.Costs!=null?F(JSON.parse(e.attributes.Costs)):null,geometry:e.geometry,name:e.attributes.Name??null,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,scaleFactor:e.attributes.ScaleFactor??null,symbol:e.symbol})}toGraphic(){const e={ObjectID:this.objectId,BarrierType:this.barrierType!=null?d.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(D(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};p.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0}],p.popupInfo={title:"Line Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ScaleFactor",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Costs",label:"Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i({type:d.apiValues,json:{read:{source:"attributes.BarrierType",reader:d.read}}})],p.prototype,"barrierType",void 0),t([i()],p.prototype,"costs",void 0),t([m("costs",["attributes"])],p.prototype,"readCosts",null),t([i({type:L,json:{write:!0}})],p.prototype,"geometry",void 0),t([i({json:{name:"attributes.Name"}})],p.prototype,"name",void 0),t([i({json:{name:"attributes.ObjectID"}})],p.prototype,"objectId",void 0),t([i({type:v})],p.prototype,"popupTemplate",void 0),t([i()],p.prototype,"scaleFactor",void 0),t([i({types:f})],p.prototype,"symbol",void 0),t([i({readOnly:!0,json:{read:!1}})],p.prototype,"type",void 0),p=A=t([b("esri.rest.support.PolylineBarrier")],p);const Q=p;let u=class extends c{constructor(e){super(e),this.accumulateAttributes=null,this.directionsLanguage=null,this.findBestSequence=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.startTimeIsUTC=null,this.timeWindowsAreUTC=null,this.travelMode=null}readAccumulateAttributes(e){return e==null?null:e.map(l=>B.fromJSON(l))}writeAccumulateAttributes(e,l,k){e!=null&&e.length&&(l[k]=e.map($=>B.toJSON($)))}};t([i({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],u.prototype,"accumulateAttributes",void 0),t([m("accumulateAttributes")],u.prototype,"readAccumulateAttributes",null),t([M("accumulateAttributes")],u.prototype,"writeAccumulateAttributes",null),t([i({type:String,json:{write:!0}})],u.prototype,"directionsLanguage",void 0),t([i({type:Boolean,json:{write:!0}})],u.prototype,"findBestSequence",void 0),t([i({type:Boolean,json:{write:!0}})],u.prototype,"preserveFirstStop",void 0),t([i({type:Boolean,json:{write:!0}})],u.prototype,"preserveLastStop",void 0),t([i({type:Boolean,json:{write:!0}})],u.prototype,"startTimeIsUTC",void 0),t([i({type:Boolean,json:{write:!0}})],u.prototype,"timeWindowsAreUTC",void 0),t([i({type:W,json:{write:!0}})],u.prototype,"travelMode",void 0),u=t([b("esri.layers.support.RouteSettings")],u);const R=u;var w;let a=w=class extends T(c){constructor(e){super(e),this.analysisSettings=null,this.endTime=null,this.endTimeOffset=null,this.firstStopId=null,this.geometry=null,this.lastStopId=null,this.messages=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.startTime=null,this.startTimeOffset=null,this.stopCount=null,this.symbol=null,this.totalCosts=null,this.totalDistance=null,this.totalDuration=null,this.totalLateDuration=null,this.totalViolations=null,this.totalWait=null,this.totalWaitDuration=null,this.type="route-info",this.version="1.0.0"}readEndTime(e,l){return l.attributes.EndTimeUTC!=null?new Date(l.attributes.EndTimeUTC):null}readEndTimeOffset(e,l){return U(l.attributes.EndTime,l.attributes.EndTimeUTC)}readStartTime(e,l){return l.attributes.StartTimeUTC!=null?new Date(l.attributes.StartTimeUTC):null}readStartTimeOffset(e,l){return U(l.attributes.StartTime,l.attributes.StartTimeUTC)}readTotalCosts(e,l){return y(l.attributes,"Total_")}readTotalViolations(e,l){return y(l.attributes,"TotalViolation_")}readTotalWait(e,l){return y(l.attributes,"TotalWait_")}static fromGraphic(e){return new w({analysisSettings:e.attributes.AnalysisSettings!=null?R.fromJSON(JSON.parse(e.attributes.AnalysisSettings)):null,endTime:e.attributes.EndTime!=null?new Date(e.attributes.EndTime):null,endTimeOffset:e.attributes.EndUTCOffset??null,geometry:e.geometry,messages:e.attributes.Messages!=null?JSON.parse(e.attributes.Messages):null,name:e.attributes.RouteName,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,startTime:e.attributes.StartTime!=null?new Date(e.attributes.StartTime):null,startTimeOffset:e.attributes.StartUTCOffset??null,symbol:e.symbol,totalCosts:e.attributes.TotalCosts!=null?F(JSON.parse(e.attributes.TotalCosts)):null,totalDistance:e.attributes.TotalMeters??null,totalDuration:e.attributes.TotalMinutes??null,totalLateDuration:e.attributes.TotalLateMinutes??null,totalWaitDuration:e.attributes.TotalWaitMinutes??null,version:e.attributes.Version})}toGraphic(){const e={ObjectID:this.objectId,AnalysisSettings:this.analysisSettings!=null?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:this.endTime!=null?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:this.messages!=null?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:this.startTime!=null?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:this.totalCosts!=null?JSON.stringify(D(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new h({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};a.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"EndUTCOffset",alias:"End Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Messages",alias:"Analysis Messages",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:1024,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"StartUTCOffset",alias:"Start Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Version",alias:"Version",type:"esriFieldTypeString",length:16,editable:!0,nullable:!0,visible:!0,domain:null}],a.popupInfo={title:"Route Details",fieldInfos:[{fieldName:"RouteName",label:"Route Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TotalMinutes",label:"Total Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalMeters",label:"Total Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalLateMinutes",label:"Total Late Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalWaitMinutes",label:"Total Wait Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalCosts",label:"Total Costs",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"StartTime",label:"Start Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"StartUTCOffset",label:"Start Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"EndTime",label:"End Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"EndUTCOffset",label:"End Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Messages",label:"Analysis Messages",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"AnalysisSettings",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"Version",label:"Version",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([i()],a.prototype,"analysisSettings",void 0),t([i()],a.prototype,"endTime",void 0),t([m("endTime",["attributes.EndTimeUTC"])],a.prototype,"readEndTime",null),t([i()],a.prototype,"endTimeOffset",void 0),t([m("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],a.prototype,"readEndTimeOffset",null),t([i({json:{read:{source:"attributes.FirstStopID"}}})],a.prototype,"firstStopId",void 0),t([i({type:L})],a.prototype,"geometry",void 0),t([i({json:{read:{source:"attributes.LastStopID"}}})],a.prototype,"lastStopId",void 0),t([i()],a.prototype,"messages",void 0),t([i({json:{read:{source:"attributes.Name"}}})],a.prototype,"name",void 0),t([i({json:{read:{source:"attributes.ObjectID"}}})],a.prototype,"objectId",void 0),t([i({type:v})],a.prototype,"popupTemplate",void 0),t([i()],a.prototype,"startTime",void 0),t([m("startTime",["attributes.StartTimeUTC"])],a.prototype,"readStartTime",null),t([i()],a.prototype,"startTimeOffset",void 0),t([m("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],a.prototype,"readStartTimeOffset",null),t([i({json:{read:{source:"attributes.StopCount"}}})],a.prototype,"stopCount",void 0),t([i({types:f})],a.prototype,"symbol",void 0),t([i()],a.prototype,"totalCosts",void 0),t([m("totalCosts",["attributes"])],a.prototype,"readTotalCosts",null),t([i()],a.prototype,"totalDistance",void 0),t([i()],a.prototype,"totalDuration",void 0),t([i()],a.prototype,"totalLateDuration",void 0),t([i()],a.prototype,"totalViolations",void 0),t([m("totalViolations",["attributes"])],a.prototype,"readTotalViolations",null),t([i()],a.prototype,"totalWait",void 0),t([m("totalWait",["attributes"])],a.prototype,"readTotalWait",null),t([i()],a.prototype,"totalWaitDuration",void 0),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),t([i()],a.prototype,"version",void 0),a=w=t([b("esri.rest.support.RouteInfo")],a);const X=a;export{K as O,R as a,H as c,Y as f,X as g,Q as j,q as m};
