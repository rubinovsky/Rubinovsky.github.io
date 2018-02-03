$(document).ready(function(){

	$('.site_wrap').css('height', $(window).height()+'px');
	
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