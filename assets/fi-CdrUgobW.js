import{d as _}from"./calcite-input-time-picker-CUZua112.js";import"./index-DPJiPkbh.js";import"./form-B4OwUu51.js";import"./dom-BlTj4jtE.js";import"./interactive-CUuALpv0.js";import"./key-D63ExP77.js";import"./label-C1Y8426B.js";import"./component-6CIDVndn.js";import"./loadable-CXsmssm6.js";import"./locale-CS3btv4w.js";import"./observers-DXQDxHJZ.js";import"./focusTrapComponent-DEcdEJmJ.js";import"./t9n-CeKm3gqL.js";import"./math-CPc4dlb6.js";import"./icon-DwdUDmXD.js";import"./Validation-nOlLLBIC.js";import"./input-j1u1wOBY.js";import"./action-ED8yfrZZ.js";import"./loader-DPaOyEdE.js";import"./input-message-C-NSbwGv.js";import"./input-text-1c2jBPEG.js";import"./progress-BrWM7Ubw.js";import"./popover-hxIdq1Do.js";import"./floating-ui-BH2WIGVi.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-C5H0O9Vb.js";import"./Heading-DKEJi13z.js";import"./FloatingArrow-BZmTlXcv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function t(i,u,e,o){var n={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},r={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},m=o&&!u?r:n,a=m[e];return i<10?a.replace("%d",m.numbers[i]):a.replace("%d",i)}var s={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};_.locale(s,null,!0);export{s as default};
