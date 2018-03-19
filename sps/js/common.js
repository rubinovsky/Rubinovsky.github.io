$(document).ready(function(){
	var goToBox = function(){
		window.scrollEvent = false;
		var menuMobile = $('.menu_mobile');
		var menuBtn = $('#menu_btn');

		var menuChange = function($status){
			if ($status == 'open') {
				menuBtn.addClass('active');
				menuMobile.addClass('open');
			}
			else if($status == 'close'){
				menuMobile.removeClass('open');
				menuBtn.removeClass('active');
			}
		}

	    $(".menu_mobile a[href*='#']").on("click", function (event) {
	    	window.scrollEvent = true;
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            boxTop = $(id).offset().top;
	        $('html, body').animate({scrollTop: boxTop - $('.header').height()}, 1500);
			menuChange('close');
	    });
		menuBtn.click(function(){
			if (menuMobile.hasClass('open')) {
				menuChange('close');
			}
			else{
				menuChange('open');
			}
		});
		$(document).scroll(function(){
			menuChange('close');
		})
	}
	if ($(window).width() > 850) {
		$('body').addClass('blue first');
		$('.slide').css('height', $(window).height() - 70 + 'px'); 
		$('.slide').addClass('slide-available');
		var a = $('section');
		for (var i = 0; i < a.length; i++) {
			a.eq(i).data('scrollTo', i *$(window).height());
			if ( i%2 == 0 && i != 0) {
				a.eq(i).data('bg', 'white');
			}
			else{
				a.eq(i).data('bg', 'blue');
			}
			if (i == 0) {
				a.eq(i).data('order', 'first');
				a.eq(i).addClass('slide-open');
			}
			else if(i == a.length - 1){
				a.eq(i).data('order', 'last');
			}
		}
		window.changeSlide = false;
		$('nav a').click(function(e){
			e.preventDefault();
			if (window.changeSlide == false) {
				window.changeSlide = true;
				$('nav a').removeClass('active');
				$(this).addClass('active');
				var sectionId = $(this).attr('href');
				var offsetSection = $(sectionId).data('scrollTo');
				$('.slide').removeClass('slide-open');
				$(sectionId).addClass('slide-open');
				if ($(sectionId).data('bg') == 'blue') {
					$('body').addClass('blue');
				}
				else{
					$('body').removeClass('blue');
				}
				switch ($(sectionId).data('order')) {
					case 'first':
						$('body').addClass('first');
						$('body').removeClass('last');
						break;
					case 'last':
						$('body').addClass('last');
						$('body').removeClass('first');
						break;
					default:
						$('body').removeClass('last first');
				}
				$('body').animate({'top': '-' + offsetSection + 'px' }, 500);
		        setTimeout(function(){
		        	window.changeSlide = false;
		        }, 500)
			}
		});
		function nextSlide(){
	        for (var i = 0; i < $('nav a').length; i++) {
		        if ($('nav a').eq(i).hasClass('active') && i + 1 != $('nav a').length) {
		            $('nav a').eq(i+1).click();
		            break;
		        }
	        }
		}
		function prewSlide(){
	        for (var i = 0; i < $('nav a').length; i++) {
	            if ($('nav a').eq(i).hasClass('active') && i != 0) {
	                $('nav a').eq(i-1).click();
	                break;
	            }
	        }
		}
		$('#next_slide').click(nextSlide);
		$('body').on('mousewheel', function(event) {
			if (window.changeSlide == false) {
				if (event.deltaY > 0) {
					prewSlide()
				}
				else{
					nextSlide()
				}
			}
		});
		$(document).keydown(function(e){
			if (e.keyCode == 40 || e.keyCode == 32 || e.keyCode == 39) {
				nextSlide()
			}
			if (e.keyCode == 38 || e.keyCode == 37) {
				prewSlide()
			}
		});
	}
	else{
		$('body').addClass('mobile');
		goToBox();
		$('.slide').css('min-height', $(window).height() + 'px'); 
	}
})