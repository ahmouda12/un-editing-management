import{d as _}from"./calcite-input-time-picker-CUZua112.js";import"./index-DPJiPkbh.js";import"./form-B4OwUu51.js";import"./dom-BlTj4jtE.js";import"./interactive-CUuALpv0.js";import"./key-D63ExP77.js";import"./label-C1Y8426B.js";import"./component-6CIDVndn.js";import"./loadable-CXsmssm6.js";import"./locale-CS3btv4w.js";import"./observers-DXQDxHJZ.js";import"./focusTrapComponent-DEcdEJmJ.js";import"./t9n-CeKm3gqL.js";import"./math-CPc4dlb6.js";import"./icon-DwdUDmXD.js";import"./Validation-nOlLLBIC.js";import"./input-j1u1wOBY.js";import"./action-ED8yfrZZ.js";import"./loader-DPaOyEdE.js";import"./input-message-C-NSbwGv.js";import"./input-text-1c2jBPEG.js";import"./progress-BrWM7Ubw.js";import"./popover-hxIdq1Do.js";import"./floating-ui-BH2WIGVi.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-C5H0O9Vb.js";import"./Heading-DKEJi13z.js";import"./FloatingArrow-BZmTlXcv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function o(e){return e>1&&e<5&&~~(e/10)!==1}function m(e,r,p,t){var n=e+" ";switch(p){case"s":return r||t?"pár sekund":"pár sekundami";case"m":return r?"minuta":t?"minutu":"minutou";case"mm":return r||t?n+(o(e)?"minuty":"minut"):n+"minutami";case"h":return r?"hodina":t?"hodinu":"hodinou";case"hh":return r||t?n+(o(e)?"hodiny":"hodin"):n+"hodinami";case"d":return r||t?"den":"dnem";case"dd":return r||t?n+(o(e)?"dny":"dní"):n+"dny";case"M":return r||t?"měsíc":"měsícem";case"MM":return r||t?n+(o(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return r||t?"rok":"rokem";case"yy":return r||t?n+(o(e)?"roky":"let"):n+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};_.locale(s,null,!0);export{s as default};
