$(document).ready(function(){
	$('.hamburger__icon').click( function(){
		$('body').toggleClass('body-overflow')
		$('.hamburger').toggleClass('hamburger-open')
		$('.js-blur').toggleClass('wrap-blur')
		$(this).toggleClass('hamburger__icon-active')
	})
	$(".js-header-slct").select();
	$('.js-metro-slct').select();
})