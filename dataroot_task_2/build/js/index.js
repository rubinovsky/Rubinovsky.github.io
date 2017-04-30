$(document).ready(function(){
	$('.hamburger__icon').click( function(){
		$('body').toggleClass('body-overflow')
		$('.hamburger').toggleClass('hamburger-open')
		$('.js-wrap').toggleClass('wrap-blur')
		$(this).toggleClass('hamburger__icon-active')
	})
	// Прописав дефолтні настройки, для швидкого доступу
	$('.js-slider').indexSlider({infinite: true, index: 0, arrows: true, swipeAble:true, pagination: true, autoplay: true, autoplaySpeed: 5});
	$('.footer__button ').modal();
	$(".js-header-slct").select({value:'Kiev', autocomplete: true, placeholder:'Выберите город'});
	$('.js-metro-slct').select({value:'polytechnical', autocomplete: true, placeholder:'Выберите метро'});
	$('.js-request-slct').select({value:'holoseevskyy', autocomplete: true, placeholder:'Выберите район'});
})