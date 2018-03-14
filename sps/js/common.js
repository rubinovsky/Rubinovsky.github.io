$(document).ready(function(){

	$('section').css('height', $(window).height() - 70 + 'px'); 

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
		}
		else if(i == a.length - 1){
			a.eq(i).data('order', 'last');
		}
	}
	window.dirItemHover = false;
	window.changeSlide = false;
	$('nav a').click(function(e){
		e.preventDefault();
		$('nav a').removeClass('active');
		$(this).addClass('active');
		var sectionId = $(this).attr('href');
		var offsetSection = $(sectionId).data('scrollTo');
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
	});
	$('#next_slide').click(function(){
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
	})
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
})