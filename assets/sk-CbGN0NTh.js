import{d as p}from"./calcite-input-time-picker-vAI2ySnd.js";import"./index-B252NKV0.js";import"./form-ChvLHK8c.js";import"./dom-CtEXAB-7.js";import"./interactive-CNwnbIDi.js";import"./key-D63ExP77.js";import"./label-zjh2qsd9.js";import"./component-6CIDVndn.js";import"./loadable-CSj6RaJ-.js";import"./locale-BET6kD7U.js";import"./observers-C2A34Kee.js";import"./focusTrapComponent-BLiS8RBt.js";import"./t9n-lBCEDqGe.js";import"./math-CPc4dlb6.js";import"./icon-DaxhXezS.js";import"./Validation-CPEZsdMf.js";import"./input-j1u1wOBY.js";import"./action-CH3sm1rf.js";import"./loader-p1bx6ime.js";import"./input-message-an8pCEmq.js";import"./input-text-DBWvnaKm.js";import"./progress-CEKxbADc.js";import"./popover-DoZhJKNe.js";import"./floating-ui-CuHTUdZh.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-IZa04dHc.js";import"./Heading-F32cK7JI.js";import"./FloatingArrow-DW-hHtXA.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function a(m){return m>1&&m<5&&~~(m/10)!==1}function e(m,r,n,o){var t=m+" ";switch(n){case"s":return r||o?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":o?"minútu":"minútou";case"mm":return r||o?t+(a(m)?"minúty":"minút"):t+"minútami";case"h":return r?"hodina":o?"hodinu":"hodinou";case"hh":return r||o?t+(a(m)?"hodiny":"hodín"):t+"hodinami";case"d":return r||o?"deň":"dňom";case"dd":return r||o?t+(a(m)?"dni":"dní"):t+"dňami";case"M":return r||o?"mesiac":"mesiacom";case"MM":return r||o?t+(a(m)?"mesiace":"mesiacov"):t+"mesiacmi";case"y":return r||o?"rok":"rokom";case"yy":return r||o?t+(a(m)?"roky":"rokov"):t+"rokmi"}}var _={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};p.locale(_,null,!0);export{_ as default};