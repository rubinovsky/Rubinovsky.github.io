// ******** ПОЧАТОК Sticky Header для UC BROWSER
if (navigator.userAgent.match(/^Mozilla\/5\.0 .+ Gecko\/$/)) {
	$(document).ready(function(){
		var header = $('header');
		var offesHeader = header.offset().top;
		var windowScroll = $(window);
	    header.after("<div class='pseudo_header pseudo_header-hidden'></div>");
	    var pseudo_header = $('.pseudo_header');
	    pseudo_header.css('height', header.outerHeight());
		windowScroll.scroll(function() {
			if (windowScroll.scrollTop() >= offesHeader && !header.hasClass('sticky')) {
				header.addClass('sticky');
				pseudo_header.removeClass('pseudo_header-hidden');
			}
			else if(windowScroll.scrollTop() < offesHeader){
				header.removeClass('sticky');
				pseudo_header.addClass('pseudo_header-hidden');
			}
		})
	});
}
// ******** КІНЕЦЬ Sticky Header для UC BROWSER