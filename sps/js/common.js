$(document).ready(function(){

	$('section').css('height', $(window).height() + 'px'); 

	var a = $('section');
	for (var i = 0; i < a.length; i++) {
		a.eq(i).data('scrollTo', i *$(window).height())	
	}
	window.dirItemHover = false;
	window.changeSlide = false;
	$('nav a').click(function(e){
		e.preventDefault();
		$('nav a').removeClass('active');
		$(this).addClass('active');
		var sectionId = $(this).attr('href');
		var offsetSection = $(sectionId).data('scrollTo');
		var sectionBG = $(sectionId).data('bg');
		$('body').animate({'top': '-' + offsetSection + 'px' }, 500);
		switch (sectionBG) {
		case 'yellow':
			$('body').removeClass('yellow gray blue');
			$('body').addClass('yellow');
			break;
		case 'gray':
			$('body').removeClass('yellow gray blue');
			$('body').addClass('gray');
			break;
		case 'blue':
			$('body').removeClass('yellow gray blue');
			$('body').addClass('blue');
			break;
		default:
			$('body').removeClass('yellow gray blue');
		}
	});
	$('body').on('mousewheel', function(event) {
		if (window.changeSlide == false) {
			if (event.deltaY > 0) {
	            for (var i = 0; i < $('nav a').length; i++) {
	                if ($('nav a').eq(i).hasClass('active') && i != 0) {
	                    $('nav a').eq(i-1).click();
						window.changeSlide = true;
	                    setTimeout(function(){
	                    	window.changeSlide = false;
	                    }, 1000)
	                    break;
	                }
	            }
			}
			else{
	            for (var i = 0; i < $('nav a').length; i++) {
	                if ($('nav a').eq(i).hasClass('active') && i + 1 != $('nav a').length) {
	                    $('nav a').eq(i+1).click();
						window.changeSlide = true;
	                    setTimeout(function(){
	                    	window.changeSlide = false;
	                    }, 1000)
	                    break;
	                }
	            }
			}
		}
	});
	$('.direction__item').hover(function(){
		window.dirItemHover = true;
			$('.direction__item').removeClass('hover');
			$(this).addClass('hover');
	}, function(){
		window.dirItemHover = false;
			$(this).removeClass('hover');
	})
	function blink(){
		if (!window.dirItemHover) {
			var dir = $('.direction__item');
			dir.removeClass('hover');
			dir.eq(getRandomInt(0, dir.length)).addClass('hover');		
		}
	}

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var blinktimer = setInterval(blink, 3000);
})