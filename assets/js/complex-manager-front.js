jQuery(function(){"use strict";!function(t){function e(t,e){return t.substring(t.length-e.length,t.length)===e}function o(o){var c="#"+o.prop("id");t(".complex-project-graphic-interaction a").each(function(o,a){e(t(a).attr("xlink:href"),c)&&t(a).attr("class",function(t,e){return e+" active"})}),t(".complex-custom-overlays img").not(".active").fadeOut("fast"),t('.complex-custom-overlays img[data-show-on-active-unit="'+c+'"]').addClass("active").fadeIn("fast")}function c(o){if(o.hasClass("active"));else{var c="#"+o.prop("id");t(".complex-project-graphic-interaction a").each(function(o,a){e(t(a).attr("xlink:href"),c)&&t(a).attr("class",function(t,e){return e.replace("active","")})}),t('.complex-custom-overlays img[data-show-on-active-unit="'+c+'"]').fadeOut("fast")}}function a(e){t(".complex-project-graphic-interaction a").each(function(e,o){t(o).attr("class",function(t,e){return e.replace("active","")})}),e.hasClass("active")?(e.next().find(".detail-row-wrapper").slideUp("slow"),e.removeClass("active"),e.next().removeClass("active")):(i(e),t(".complex-unit-header-row.active").each(function(e,o){t(o).next().find(".detail-row-wrapper").slideUp("slow"),t(o).removeClass("active"),t(o).next().removeClass("active")}),e.next().find(".detail-row-wrapper").slideDown("slow"),e.addClass("active"),e.next().addClass("active"),o(e))}function i(e){var o=e;t(".complex-unit-detail-row.active").length&&t(".complex-unit-detail-row.active").offset().top<o.offset().top?t("html, body").animate({scrollTop:o.offset().top-t(".complex-unit-detail-row.active").outerHeight()},500):t("html, body").animate({scrollTop:o.offset().top},500)}function n(e){e.on("submit",function(o){o.preventDefault(),t("#complexContactFormLoader").length||e.append('<div id="complexContactFormLoader"><i class="fa fa-circle-o-notch fa-spin"></i></div>'),t("#complexContactFormLoader").fadeIn("slow");var c=e.serialize();t.post(e.prop("action"),c,function(e){var o=t(e).find(".complex-contact-form-wrapper");t(".complex-contact-form-wrapper").html(o.html()),n(t("#complexContactFormAnchor"))})})}t("#complexContactForm").hide(),t(".complex-project-graphic img").load(function(){t(".complex-project-graphic-interaction").height(t(".complex-project-graphic img").height())}),t(".complex-unit-detail-row .detail-row-wrapper").slideUp(0),n(t("#complexContactFormAnchor")),t(".complex-unit-header-row").click(function(){t(".complex-custom-overlays img").removeClass("active").hide(),a(t(this))}),t(".complex-unit-header-row").hover(function(){o(t(this))},function(){c(t(this))});var r=t(location).attr("href").replace(/^.*?(#|$)/,"");r&&t("#"+r).length&&t("#"+r).click(),t(".complex-project-graphic-interaction a").click(function(e){e.preventDefault();var o=t(this).attr("xlink:href"),c=o.indexOf("#"),a=-1!==c?o.substring(c+1):"";t("#"+a).length&&t("#"+a).click()}).hover(function(){var e=t(this).attr("xlink:href"),c=e.indexOf("#"),a=-1!==c?e.substring(c+1):"";t("#"+a).length&&o(t("#"+a))},function(){var e=t(this).attr("xlink:href"),o=e.indexOf("#"),a=-1!==o?e.substring(o+1):"";t("#"+a).length&&c(t("#"+a))}),t(".complex-call-contact-form").click(function(e){e.preventDefault();var o=t(this).data("unit-id");t('#complexContactForm form [name="complex-unit-inquiry[unit_id]"]').val(o),t("#complexContactForm").appendTo(t(this).parent()),t("#complexContactForm").slideUp(0),t("#complexContactForm").slideDown("slow"),t(".complex-sendback-contact-form").show(),t(this).hide()}),t(".complex-sendback-contact-form").click(function(e){e.preventDefault(),t("#complexContactForm").slideUp("slow"),t(".complex-call-contact-form").show()})}(jQuery)});