import{d as m}from"./calcite-input-time-picker-vAI2ySnd.js";import"./index-B252NKV0.js";import"./form-ChvLHK8c.js";import"./dom-CtEXAB-7.js";import"./interactive-CNwnbIDi.js";import"./key-D63ExP77.js";import"./label-zjh2qsd9.js";import"./component-6CIDVndn.js";import"./loadable-CSj6RaJ-.js";import"./locale-BET6kD7U.js";import"./observers-C2A34Kee.js";import"./focusTrapComponent-BLiS8RBt.js";import"./t9n-lBCEDqGe.js";import"./math-CPc4dlb6.js";import"./icon-DaxhXezS.js";import"./Validation-CPEZsdMf.js";import"./input-j1u1wOBY.js";import"./action-CH3sm1rf.js";import"./loader-p1bx6ime.js";import"./input-message-an8pCEmq.js";import"./input-text-DBWvnaKm.js";import"./progress-CEKxbADc.js";import"./popover-DoZhJKNe.js";import"./floating-ui-CuHTUdZh.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-IZa04dHc.js";import"./Heading-F32cK7JI.js";import"./FloatingArrow-DW-hHtXA.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function t(i,e,o){var r=a[o];return Array.isArray(r)&&(r=r[e?0:1]),r.replace("%d",i)}var n={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};m.locale(n,null,!0);export{n as default};