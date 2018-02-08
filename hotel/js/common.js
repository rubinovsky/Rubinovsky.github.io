$(document).ready(function(){
	var windH = $(window).height();
	var bgVideo = $('.video-background video');
	
	if (windH > bgVideo.height() + 100) {
		bgVideo.addClass('height_100');
	}
	if ($(window).width() > 900) {
		$('.site_wrap').css('min-height', windH + 'px');
	}

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
		if (!$('.header .menu_wrap').is(e.target) && $('.header .menu_wrap').has(e.target).length === 0 && !$('#menu_btn').is(e.target) && $('#menu_btn').has(e.target).length === 0 && $('.header').hasClass('menu-open')) { 
			$('.header').removeClass('menu-open');
			$('#menu_btn').removeClass('open');
		}
	})
	$('#menu_btn').click(function(){
		if (!$(this).hasClass('open')) {
			$('.header').addClass('menu-open');
			$(this).addClass('open');
		}
		else{
			$(this).removeClass('open');
			$('.header').removeClass('menu-open');
		}
	})
	function come(elem) {
		var docViewTop = $(window).scrollTop() + $(window).height(),
		elemTop = $(elem).offset().top + $(elem).height() / 2;
		return (docViewTop >= elemTop);
	}
	if ($("div").is(".statictics")) {
		$(window).scroll(function(){
			if (come($('.statictics')) && !$('.statictics').hasClass('done')) {
				$('.statictics').addClass('done');
				$('.statictics .statictics__item_box h4').eq(0).animateNumber({ number: 21 },4000);
				$('.statictics .statictics__item_box h4').eq(1).animateNumber({ number: 3214 },4000);
				$('.statictics .statictics__item_box h4').eq(2).animateNumber({ number: 28 },4000);
				$('.statictics .statictics__item_box h4').eq(3).animateNumber({ number: 8 },4000);
			}
		})
	}
    $(window).load(function () {
		setTimeout(function(){
			$('#preloader').fadeOut(500);
		},1000);
    });
})