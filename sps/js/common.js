$(document).ready(function(){

	$('section').css('height', $(window).height() + 'px'); 

	var a = $('section');
	for (var i = 0; i < a.length; i++) {
		a.eq(i).data('scrollTo', i *$(window).height())	
	}
	window.dirItemHover = false;
	window.changeSlide = false;
	$('#about_us').scrollTop(0);
	$('nav a').click(function(e){
		e.preventDefault();
		$('nav a').removeClass('active');
		$(this).addClass('active');
		var sectionId = $(this).attr('href');
		var offsetSection = $(sectionId).data('scrollTo');
		$('body').animate({'top': '-' + offsetSection + 'px' }, 500);
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
})