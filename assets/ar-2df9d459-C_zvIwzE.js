import{d as o}from"./calcite-input-time-picker_2.entry-CN9nx3DL.js";import"./index-DPJiPkbh.js";import"./locale-60f8ca58-Bt-8aMvj.js";import"./form-8ec29459-C3tNFZhI.js";import"./dom-b6dedd88-C48zjkiq.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-0Y4Kjss8.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-C0Qz_2lB.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-DYoR06Hq.js";import"./focusTrapComponent-7cfd1d69-YPGscCcX.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-C_Y1iVpi.js";import"./Validation-c59cb4eb-B1BW533o.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-D75amXSF.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var e="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),i={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},p={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:e,monthsShort:e,weekStart:6,meridiem:function(r){return r>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(m){return p[m]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(m){return i[m]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};o.locale(_,null,!0);export{_ as default};
