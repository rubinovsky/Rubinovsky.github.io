// ******** ПОЧАТОК Sticky Header 
$(document).ready(function(){
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;

	var header = $('.header').eq(0);

	// Для Google Chrome, Safari та Firefox застосовуємо css стиль
	if (is_chrome || is_firefox || is_safari) {
		header.addClass('sticky');
	}
	// Для інших браузерів застосовуємо цей скріпт
	else{
		var offesHeader = header.offset().top;
		var windowScroll = $(window);
	    header.after("<div class='pseudo_header pseudo_header-hidden'></div>");
	    var pseudo_header = $('.pseudo_header');
	    pseudo_header.css('height', header.outerHeight());

	    // Функція зміни header
	    function changeHeader(){
			if (windowScroll.scrollTop() >= offesHeader && !header.hasClass('js_sticky')) {
				header.addClass('js_sticky');
				pseudo_header.removeClass('pseudo_header-hidden');
			}
			else if(windowScroll.scrollTop() < offesHeader){
				header.removeClass('js_sticky');
				pseudo_header.addClass('pseudo_header-hidden');
			}
	    }
	    // Зміна при scroll
		windowScroll.scroll(function(){
			changeHeader();
		})
	    // Зміна при swipe
		var timeID;
		windowScroll.bind('touchstart',function(e){
			header.text(windowScroll.scrollTop());
	        timeID = setInterval(changeHeader, 20)
		});
		windowScroll.bind('touchend',function(e){
	        clearTimeout(timeID);
		});
	}
});
// ******** КІНЕЦЬ Sticky Header