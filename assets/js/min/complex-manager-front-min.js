jQuery(function(){"use strict";!function($){function t(t,e){return t.substring(t.length-e.length,t.length)===e}function e(e){if($(".complex-project-graphic-interaction a").each(function(t,e){$(e).attr("class","")}),e.hasClass("active"))e.next().find(".detail-row-wrapper").slideUp("slow"),e.removeClass("active"),e.next().removeClass("active");else{$(".complex-unit-header-row.active").each(function(t,e){$(e).next().find(".detail-row-wrapper").slideUp("slow"),$(e).removeClass("active"),$(e).next().removeClass("active")}),e.next().find(".detail-row-wrapper").slideDown("slow"),e.addClass("active"),e.next().addClass("active"),$("html, body").animate({scrollTop:e.next().find(".detail-row-wrapper").offset().top-100},500);var o="#"+e.prop("id");$(".complex-project-graphic-interaction a").each(function(e,c){t($(c).attr("xlink:href"),o)&&$(c).attr("class","active")})}}function o(t){t.on("submit",function(e){e.preventDefault(),$("#complexContactFormLoader").length||t.append('<div id="complexContactFormLoader"><i class="fa fa-circle-o-notch fa-spin">&#9883;</i></div>'),$("#complexContactFormLoader").fadeIn("slow");var c=t.serialize();$.post(t.prop("action"),c,function(t){var e=$(t).find(".complex-contact-form-wrapper");$(".complex-contact-form-wrapper").html(e.html()),o($("#complexContactFormAnchor"))})})}$("#complexContactForm").hide(),$(".complex-project-graphic img").load(function(){$(".complex-project-graphic-interaction").height($(".complex-project-graphic img").height())}),$(".complex-unit-detail-row .detail-row-wrapper").slideUp(0),o($("#complexContactFormAnchor")),$(".complex-unit-header-row").click(function(){e($(this))});var c=$(location).attr("href").replace(/^.*?(#|$)/,"");c&&$("#"+c).length&&$("#"+c).click(),$(".complex-project-graphic-interaction a").click(function(t){t.preventDefault();var e=$(this).attr("xlink:href"),o=e.indexOf("#"),c=-1!==o?e.substring(o+1):"";$("#"+c).length&&$("#"+c).click()}),$(".complex-call-contact-form").click(function(t){t.preventDefault();var e=$(this).data("unit-id");$('#complexContactForm form [name="complex-unit-inquiry[unit_id]"]').val(e),$("#complexContactForm").appendTo($(this).parent()),$("#complexContactForm").slideUp(0),$("#complexContactForm").slideDown("slow"),$(".complex-sendback-contact-form").show(),$(this).hide()}),$(".complex-sendback-contact-form").click(function(t){t.preventDefault(),$("#complexContactForm").slideUp("slow"),$(".complex-call-contact-form").show()})}(jQuery)});