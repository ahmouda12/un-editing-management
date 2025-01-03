import{d as i}from"./calcite-input-time-picker-vAI2ySnd.js";import"./index-B252NKV0.js";import"./form-ChvLHK8c.js";import"./dom-CtEXAB-7.js";import"./interactive-CNwnbIDi.js";import"./key-D63ExP77.js";import"./label-zjh2qsd9.js";import"./component-6CIDVndn.js";import"./loadable-CSj6RaJ-.js";import"./locale-BET6kD7U.js";import"./observers-C2A34Kee.js";import"./focusTrapComponent-BLiS8RBt.js";import"./t9n-lBCEDqGe.js";import"./math-CPc4dlb6.js";import"./icon-DaxhXezS.js";import"./Validation-CPEZsdMf.js";import"./input-j1u1wOBY.js";import"./action-CH3sm1rf.js";import"./loader-p1bx6ime.js";import"./input-message-an8pCEmq.js";import"./input-text-DBWvnaKm.js";import"./progress-CEKxbADc.js";import"./popover-DoZhJKNe.js";import"./floating-ui-CuHTUdZh.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-IZa04dHc.js";import"./Heading-F32cK7JI.js";import"./FloatingArrow-DW-hHtXA.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),p={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},e={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,meridiem:function(r){return r>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(m){return e[m]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(m){return p[m]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};i.locale(_,null,!0);export{_ as default};