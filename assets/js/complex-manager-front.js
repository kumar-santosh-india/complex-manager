function getCXMscrollOffset(){return 157}function cxmCallContactFormClickHandler(){jQuery(".complex-call-contact-form").click(function(e){e.preventDefault();var t=jQuery(this).data("unit-id"),o=jQuery(this).closest("[data-recipients]");o&&""!=o.data("recipients")?jQuery('#complexContactForm form [name="complex-unit-inquiry[direct_recipient_email]"]').val(o.data("recipients")):jQuery('#complexContactForm form [name="complex-unit-inquiry[direct_recipient_email]"]').val(""),jQuery('#complexContactForm form [name="complex-unit-inquiry[unit_id]"]').val(t).prop("disabled","disabled"),jQuery("#complexContactForm").appendTo(jQuery(this).parent()),jQuery("#complexContactForm").slideUp(0),jQuery("#complexContactForm").slideDown("slow"),jQuery(".complex-sendback-contact-form").show(),jQuery("html, body").animate({scrollTop:jQuery("#complexContactForm").offset().top-getCXMscrollOffset()},500),jQuery(this).hide()})}function getCXMFadeSpeed(){return 0}function scrolltoheaderRow(e,t){jQuery(".complex-tooltip").hide(),t="undefined"!=typeof t?t:0;var o=e;jQuery(".complex-unit-detail-row.active").length&&jQuery(".complex-unit-detail-row.active").offset().top<o.offset().top?jQuery("html, body").animate({scrollTop:o.offset().top-jQuery(".complex-unit-detail-row.active").outerHeight()-t},500):jQuery("html, body").animate({scrollTop:o.offset().top-t},500)}var CXMscrollOffset=157;jQuery(function(){"use strict";!function(e){function t(e,t){return e.substring(e.length-t.length,e.length)===t}function o(e){var t,o,r,a,s,n,c,i={},l=function(e){return decodeURIComponent(e).replace(/\+/g," ")},p=window.location.search.substring(1),m=/([^&;=]+)=?([^&;]*)/g;for(e&&(p=e),s=function(e){return"object"!=typeof e&&(o=e,e={},e.length=0,o&&Array.prototype.push.call(e,o)),e};r=m.exec(p);)t=r[1].indexOf("["),c=l(r[2]),t<0?(a=l(r[1]),i[a]?(i[a]=s(i[a]),Array.prototype.push.call(i[a],c)):i[a]=c):(a=l(r[1].slice(0,t)),n=l(r[1].slice(t+1,r[1].indexOf("]",t))),i[a]=s(i[a]),n?i[a][n]=c:Array.prototype.push.call(i[a],c));return i}function r(e){var t={};return e.rooms?"string"==typeof e.rooms?t.rooms=[e.rooms]:t.rooms=e.rooms:t.rooms=null,e.custom_1s?"string"==typeof e.custom_1s?t.custom_1s=[e.custom_1s]:t.custom_1s=e.custom_1s:t.custom_1s=null,e.custom_2s?"string"==typeof e.custom_2s?t.custom_2s=[e.custom_2s]:t.custom_2s=e.custom_2s:t.custom_2s=null,e.custom_3s?"string"==typeof e.custom_3s?t.custom_3s=[e.custom_3s]:t.custom_3s=e.custom_3s:t.custom_3s=null,e.stories?"string"==typeof e.stories?t.stories=[e.stories]:t.stories=e.stories:t.stories=null,e.types?"string"==typeof e.types?t.types=[e.types]:t.types=e.types:t.types=null,e.status?"string"==typeof e.status?t.status=[e.status]:t.status=e.status:t.status=null,t.livingspace_from=e.livingspace_from?e.livingspace_from:0,t.livingspace_to=e.livingspace_to?e.livingspace_to:99999999999,t.usablespace_from=e.usablespace_from?e.usablespace_from:0,t.usablespace_to=e.usablespace_to?e.usablespace_to:99999999999,t.rentnet_from=e.rentnet_from?e.rentnet_from:0,t.rentnet_to=e.rentnet_to?e.rentnet_to:99999999999,t.rentgross_from=e.rentgross_from?e.rentgross_from:0,t.rentgross_to=e.rentgross_to?e.rentgross_to:99999999999,t.income=parseFloat(e.income)>0?e.income:null,t.persons=parseFloat(e.persons)>0?e.persons:null,t}function a(t,o){t=r(t),o.find("tr.complex-unit-header-row").each(function(o,r){var a=e(r).data("json"),s="";if(e(r).data("types")&&""!==e(r).data("types"))var s=e(r).data("types");var n=!0;a&&a.number_of_rooms&&t.rooms&&(n=!1,e.each(t.rooms,function(e,t){t==a.number_of_rooms&&(n=!0)}));var c=!0;a&&a.min_income&&!a.max_income&&t.income?(c=!1,parseFloat(t.income)>=parseFloat(a.min_income)&&(c=!0)):a&&!a.min_income&&a.max_income&&t.income?(c=!1,parseFloat(t.income)<=parseFloat(a.max_income)&&(c=!0)):a&&a.min_income&&a.max_income&&t.income&&(c=!1,parseFloat(t.income)>=parseFloat(a.min_income)&&parseFloat(t.income)<=parseFloat(a.max_income)&&(c=!0));var i=!0;a&&a.min_persons&&!a.max_persons&&t.persons?(i=!1,parseFloat(t.persons)>=parseFloat(a.min_persons)&&(i=!0)):a&&!a.min_persons&&a.max_persons&&t.persons?(i=!1,parseFloat(t.persons)<=parseFloat(a.max_persons)&&(i=!0)):a&&a.min_persons&&a.max_persons&&t.persons&&(i=!1,parseFloat(t.persons)>=parseFloat(a.min_persons)&&parseFloat(t.persons)<=parseFloat(a.max_persons)&&(i=!0));var l=!0;a&&a.custom_1&&t.custom_1s&&(l=!1,e.each(t.custom_1s,function(e,t){t==a.custom_1&&(l=!0)}));var p=!0;a&&a.custom_2&&t.custom_2s&&(p=!1,e.each(t.custom_2s,function(e,t){t==a.custom_2&&(p=!0)}));var m=!0;a&&a.custom_3&&t.custom_3s&&(m=!1,e.each(t.custom_3s,function(e,t){t==a.custom_3&&(m=!0)}));var u=!0;if("undefined"!==s&&t.types){var u=!1;console.log(s),e.each(t.types,function(e,t){s.search(t)!==-1&&(u=!0)})}var f=!0;a&&a.story&&t.stories&&(f=!1,e.each(t.stories,function(e,t){t==a.story&&(f=!0)}));var d=!0;if(a&&a.status&&t.statuss&&(d=!1,e.each(t.statuss,function(e,t){t==a.status&&(d=!0)})),d=!0,a.status&&t.status){var h=e.grep(t.status,function(e){return e==a.status});d=0!==h.length}var _=!0;if(a.r_living_space&&t.livingspace_from){var g=parseFloat(a.r_living_space.replace("&amp;nbsp;m&lt;sup&gt;2&lt;/sup&gt;","").replace(/[^\d\.]/g,""));_=!1,0!==t.livingspace_from?g>=t.livingspace_from&&g<=t.livingspace_to&&(_=!0):g<=t.livingspace_to&&(_=!0)}var v=!0;if(a.r_usable_space&&t.usablespace_from){var x=parseFloat(a.r_usable_space.replace("&amp;nbsp;m&lt;sup&gt;2&lt;/sup&gt;","").replace(/[^\d\.]/g,""));v=!1,0!==t.usablespace_from?x>=t.usablespace_from&&x<=t.usablespace_to&&(v=!0):x<=t.usablespace_to&&(v=!0)}var y=!0;if(a.r_rent_net&&t.rentnet_from&&(t.rentnet_from!=parseInt(e("#filteroption-miete-netto").data("minrentnet"))||t.rentnet_to!=parseInt(e("#filteroption-miete-netto").data("maxrentnet")))){var w=parseFloat(a.r_rent_net.replace(/[^\d\.]/g,""));y=!1,0!==t.rentnet_from?w>=t.rentnet_from&&w<=t.rentnet_to&&(y=!0):w<=t.rentnet_to&&(y=!0)}var C=!0;if(a.r_rent_gross&&t.rentgross_from&&(t.rentgross_from!=parseInt(e("#filteroption-miete-grossto").data("minrentgross"))||t.rentgross_to!=parseInt(e("#filteroption-miete-grossto").data("maxrentgross")))){var F=parseFloat(a.r_rent_gross.replace(/[^\d\.]/g,""));C=!1,0!==t.rentgross_from?F>=t.rentgross_from&&F<=t.rentgross_to&&(C=!0):F<=t.rentgross_to&&(C=!0)}i&&c&&n&&d&&_&&v&&y&&C&&l&&p&&m&&u&&f?(e(r).removeClass("filtered"),e(r).next().removeClass("filtered")):(e(r).addClass("filtered"),e(r).next().addClass("filtered"))})}function s(o,r){r="undefined"!=typeof r?r:0;var a="#"+o.prop("id");e(".complex-project-graphic-interaction a").each(function(o,r){t(e(r).attr("xlink:href"),a)&&e(r).attr("class",function(e,t){var o=/active/gi;return t=t.replace(o,""),t+" active"})}),e(".complex-custom-overlays img").not(".active").fadeOut(r);var s=e('.complex-custom-overlays img[data-show-on-active-unit="'+a+'"]');s.addClass("active").fadeIn(r),s.data("src")&&(s.prop("src",s.data("src")),s.data("src",null)),e(".complex-tooltip-unit-item").hide(),0!==e(".complex-project-graphic:hover").length&&e(".complex-tooltip").show(),e('.complex-tooltip-unit-item[data-unit="'+a+'"]').show()}function n(o,r){if(r="undefined"!=typeof r?r:0,o.hasClass("active"));else{var a="#"+o.prop("id");e(".complex-project-graphic-interaction a").each(function(o,r){t(e(r).attr("xlink:href"),a)&&e(r).attr("class",function(e,t){var o=/active/gi;return t=t.replace(o,"")})});var s=e('.complex-custom-overlays img[data-show-on-active-unit="'+a+'"]');s.addClass("active").fadeOut(r)}e(".complex-tooltip-unit-item").hide(),e(".complex-tooltip").hide()}function c(t){e(".complex-tooltip").hide(),e(".complex-project-graphic-interaction a").each(function(t,o){e(o).attr("class",function(e,t){var o=/active/gi;return t=t.replace(o,"")})}),t.hasClass("active")?(t.next().find(".detail-row-wrapper").slideUp("slow"),t.removeClass("active"),t.next().removeClass("active")):(t.next().find(".detail-row-wrapper img").each(function(t,o){e(o).data("src")&&(e(o).prop("src",e(o).data("src")),e(o).prop("srcset",e(o).data("src")),e(o).data("src",null))}),scrolltoheaderRow(t,getCXMscrollOffset()),e(".complex-unit-header-row.active").each(function(t,o){e(o).next().find(".detail-row-wrapper").slideUp("slow"),e(o).removeClass("active"),e(o).next().removeClass("active")}),t.next().find(".detail-row-wrapper").delay(300).slideDown("slow"),t.addClass("active"),t.next().addClass("active"),s(t))}function i(t){t.on("submit",function(o){if(o.preventDefault(),e(".g-recaptcha").length){var r=grecaptcha.getResponse();if(0==r.length)o.preventDefault(),e("#recaptchaerror").show();else{e("#recaptchaerror").hide(),t.find(":input").prop("disabled",!1),e("#complexContactFormLoader").length||t.append('<div id="complexContactFormLoader"><i class="fa fa-circle-o-notch fa-spin"></i></div>'),e("#complexContactFormLoader").fadeIn("slow");var a=t.serialize();e.post(t.prop("action"),a,function(o){var r=e(o).find(".complex-contact-form-wrapper");e(".complex-contact-form-wrapper").html(r.html()),e(".complex-contact-form-wrapper .alert").length&&e("html, body").animate({scrollTop:e(".complex-contact-form-wrapper .alert").offset().top-200},500),i(e("#complexContactFormAnchor")),t.trigger("cxm-form-ajax-replaced",["Custom","Event"])})}}else{t.find(":input").prop("disabled",!1),e("#complexContactFormLoader").length||t.append('<div id="complexContactFormLoader"><i class="fa fa-circle-o-notch fa-spin"></i></div>'),e("#complexContactFormLoader").fadeIn("slow");var a=t.serialize();e.post(t.prop("action"),a,function(o){var r=e(o).find(".complex-contact-form-wrapper");e(".complex-contact-form-wrapper").html(r.html()),e(".complex-contact-form-wrapper .alert").length&&e("html, body").animate({scrollTop:e(".complex-contact-form-wrapper .alert").offset().top-200},500),i(e("#complexContactFormAnchor")),t.trigger("cxm-form-ajax-replaced",["Custom","Event"])})}})}e(".complex-list-wrapper #complexContactForm").hide(),e(".complex-project-graphic img").load(function(){e(".complex-project-graphic-interaction").height(e(".complex-project-graphic img").height())}),e(".complex-unit-detail-row .detail-row-wrapper").slideUp(0);var l=e("#complexContactFormAnchor").data("events");l&&l.submit?console.log("theme has already set a submit event on #complexContactFormAnchor. The plugin yields."):i(e("#complexContactFormAnchor"));var p=!1;e("body").on("touchmove",function(){p=!0}),e("body").on("touchstart",function(){p=!1}),e(".complex-unit-header-row").on("click touchend",function(t){var o=this,r=e(t.target).is("a");if(!r&&(t.preventDefault(),!p))if(e(".complex-list-wrapper").hasClass("complex-list-wrapper-collapsible"))e(".complex-custom-overlays img").removeClass("active").hide(),c(e(this));else if(e(".complex-contact-form-wrapper").length){e("html, body").animate({scrollTop:e(".complex-contact-form-wrapper").offset().top},500),e(".complex-contact-form-wrapper input:text, .complex-contact-form-wrapper textarea").first().focus();var a=e(o).data("unit-id");e('.complex-contact-form-wrapper form [name="complex-unit-inquiry[unit_id]"]').val(a)}else e(o).find(".col-quick-download a").length?e(o).find(".col-quick-download a").first()[0].click():e(o).find(".col-quick-download").length||alert('form not found add it with [contactform-complex] or enable collapsible="1" property on [CXM-list] and make sure there is only one form available.')}),e(".complex-unit-header-row").hover(function(){s(e(this),getCXMFadeSpeed())},function(){n(e(this),getCXMFadeSpeed())});var m=e(location).attr("href").replace(/^.*?(#|$)/,"");m&&e("#"+m).length&&e("#"+m).click(),e(".complex-project-graphic-interaction a").on("click touchend",function(t){t.preventDefault();var o=e(this).attr("xlink:href"),r=o.indexOf("#"),a=r!==-1?o.substring(r+1):"";e("#"+a).length&&e("#"+a).click()}).hover(function(){var t=e(this).attr("xlink:href"),o=t.indexOf("#"),r=o!==-1?t.substring(o+1):"";e("#"+r).length&&s(e("#"+r),getCXMFadeSpeed())},function(){var t=e(this).attr("xlink:href"),o=t.indexOf("#"),r=o!==-1?t.substring(o+1):"";e("#"+r).length&&n(e("#"+r),getCXMFadeSpeed())}),cxmCallContactFormClickHandler(),e(".complex-sendback-contact-form").click(function(t){t.preventDefault(),e("#complexContactForm").slideUp("slow"),e(".complex-call-contact-form").show()});var u=o();e("#complexFilterForm").change(function(t){var r=e("#complexFilterForm").serialize();r=r.replace(/%5B/g,"["),r=r.replace(/%5D/g,"]"),u=o(r),a(u,e(".complex-list-wrapper"))}),e(document).on("mousemove",function(t){if(0!==e(".complex-project-graphic:hover").length){var o=e(".complex-project-graphic:hover").closest(".complex-project-graphic-wrapper").offset();e(".complex-project-graphic:hover").siblings(".complex-tooltip").css({left:t.pageX-15-o.left,top:t.pageY+25-o.top})}else e(".complex-tooltip").hide()})}(jQuery)});