import{d as n}from"./calcite-input-time-picker-vAI2ySnd.js";import"./index-B252NKV0.js";import"./form-ChvLHK8c.js";import"./dom-CtEXAB-7.js";import"./interactive-CNwnbIDi.js";import"./key-D63ExP77.js";import"./label-zjh2qsd9.js";import"./component-6CIDVndn.js";import"./loadable-CSj6RaJ-.js";import"./locale-BET6kD7U.js";import"./observers-C2A34Kee.js";import"./focusTrapComponent-BLiS8RBt.js";import"./t9n-lBCEDqGe.js";import"./math-CPc4dlb6.js";import"./icon-DaxhXezS.js";import"./Validation-CPEZsdMf.js";import"./input-j1u1wOBY.js";import"./action-CH3sm1rf.js";import"./loader-p1bx6ime.js";import"./input-message-an8pCEmq.js";import"./input-text-DBWvnaKm.js";import"./progress-CEKxbADc.js";import"./popover-DoZhJKNe.js";import"./floating-ui-CuHTUdZh.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-IZa04dHc.js";import"./Heading-F32cK7JI.js";import"./FloatingArrow-DW-hHtXA.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function a(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function r(t,i,o){var e=t+" ";switch(o){case"m":return i?"minuta":"minutę";case"mm":return e+(a(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return e+(a(t)?"godziny":"godzin");case"MM":return e+(a(t)?"miesiące":"miesięcy");case"yy":return e+(a(t)?"lata":"lat")}}var _="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),p="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),s=/D MMMM/,m=function(i,o){return s.test(o)?_[i.month()]:p[i.month()]};m.s=p;m.f=_;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:m,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};n.locale(l,null,!0);export{l as default};