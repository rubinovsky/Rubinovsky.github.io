$(document).ready(function(){
	$('.hamburger__icon').click( function(){
		$('body').toggleClass('body-overflow')
		$('.hamburger').toggleClass('hamburger-open')
		$('.js-blur').toggleClass('wrap-blur')
		$(this).toggleClass('hamburger__icon-active')
	})
	// Прописав дефолтні настройки, для швидкого доступу
	$('.js-slider').listingSlider({infinite: true, index: 0, arrows: true, swipeAble:true, pagination: true, autoplay: true, autoplaySpeed: 5});
	$('.footer__button').modal();
	$('.js-request-slct').select({value:'holoseevskyy', autocomplete: true, placeholder:'Выберите район'});
});