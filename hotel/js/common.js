$(document).ready(function(){
	var windH = $(window).height();
	
	if ($(window).width() > 950) {
		$('.site_wrap').css('min-height', windH + 'px');
		$('.section_wrap').css('min-height', windH + 'px');
		$("#video_wrap").append( "<audio id='bg_audio' src='audio/audio-bg.mp3' loop></audio><video autoplay= 'true' loop='true' muted class='fillWidth fadeIn animated' id='video-background'><source src='video/Mallorca.mp4' type='video/mp4'></video>" )
		var bgVideo = $('#video_wrap video');

		if (windH > bgVideo.height() + 100) {
			bgVideo.addClass('height_100');
		}
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
	$(document).bind('touchstart', function(e){
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
				$('.statictics .statictics__item_box h4').eq(0).animateNumber({ number: 11 },3000);
				$('.statictics .statictics__item_box h4').eq(1).animateNumber({ number: 8 },3000);
				$('.statictics .statictics__item_box h4').eq(2).animateNumber({ number: 12 },3000);
				$('.statictics .statictics__item_box h4').eq(3).animateNumber({ number: 18 },3000);
			}
		})
	}
    $(window).load(function () {
    	var audioFlag = false;
		setTimeout(function(){
			$('#preloader').fadeOut(500);
				if ($('audio').is('#bg_audio')) {
					if (audioFlag ==false) {
						$('#bg_audio')[0].play();
						audioFlag = true;
					}
		    	}
			    window.sr = ScrollReveal({
						reset: true,
						duration: 1000,
						scale: 1,
						easing: "ease",
						distance: "30px",
						mobile: false,
						opacity: 0,
					});

					// INDEX ANIMATION START

					sr.reveal('.header', {distance: 0, scale: .95, delay: 300});
					sr.reveal('.main_board h1', {distance: '50px', origin: 'right', delay: 300});
					sr.reveal('.main_board h2', {distance: '50px', origin: 'left', delay: 300});
					sr.reveal('.main_board__buttons', {distance: '200px', delay: 300});
					sr.reveal('.main_board__buttons', {delay: 300});
					sr.reveal('footer.footer .footer__nav', {distance: 0, scale: .95, delay: 100});

					// INDEX ANIMATION END



					sr.reveal('.about_us_first', {distance: 0, scale: 0.5, delay: 300});
					sr.reveal('.about_us_second', {
						distance: '500px', origin: 'left', delay: 200
					});
					sr.reveal('.statictics', {distance: '50px', origin: 'right', delay: 300});

					sr.reveal('.advantages', {origin: 'bottom', delay: 300});
					sr.reveal('.second_board__content img:first-child', {origin: 'left', delay: 300});
					sr.reveal('.second_board__content img:last-child', {origin: 'right', delay: 300});


					sr.reveal('.gallery-img-wrap', { distance: 0, scale: .95, delay: 300,});

					sr.reveal('.contant_img');
					sr.reveal('.contant-us__info', { distance: 0, scale: .8, delay: 300,});

					sr.reveal('#contact_form', {distance: '30px', origin: 'left'});


					sr.reveal('.footer_default a', {distance: '300px', origin: 'left', delay: 300});

					sr.reveal('.reviews_item img', {distance: '300px', origin: 'left', delay: 300});
					sr.reveal('.reviews_item .reviews_text', {distance: '300px', origin: 'right', delay: 300});
		},400);
		setTimeout(function(){
			$('#preloader').fadeOut(500);
			if ($('audio').is('#bg_audio')) {
				if (audioFlag ==false) {
					$('#bg_audio')[0].play();
					audioFlag = true;
				}
	    	}
		}, 3000)
    });
})