$(document).ready(function(){
	var windH = $(window).height();
	var bgVideo = $('.video-background video');
	
	if (windH > bgVideo.height() + 100) {
		bgVideo.addClass('height_100');
	}

	$('.site_wrap').css('height', windH + 'px');

	var choiceLang = $('.lang_active');
	var listLang = $('.all_lang');

	choiceLang.click(function(){
		if (listLang.is(':visible')) {
			listLang.fadeOut(500);
		}
		else{
			listLang.fadeIn(500);
		}
	})
	$(document).click(function(e){
		if (!$('.header__lang').is(e.target) && $('.header__lang').has(e.target).length === 0) { 
			listLang.fadeOut(500);
		}
	})
})