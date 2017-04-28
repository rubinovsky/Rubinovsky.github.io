$(document).ready(function(){
	$('.hamburger__icon').click( function(){
		$('body').toggleClass('body-overflow')
		$('.hamburger').toggleClass('hamburger-open')
		$('.js-blur').toggleClass('wrap-blur')
		$(this).toggleClass('hamburger__icon-active')
	})
	$('.js-slider').listingSlider();
	$('.footer__button').modal();
	$('.js-request-slct').select({value:'holoseevskyy', autocomplete: true, placeholder:'Выберите район'});
});