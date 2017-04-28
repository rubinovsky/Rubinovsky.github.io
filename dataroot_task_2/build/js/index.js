$(document).ready(function(){
	$('.hamburger__icon').click( function(){
		$('body').toggleClass('body-overflow')
		$('.hamburger').toggleClass('hamburger-open')
		$('.js-wrap').toggleClass('wrap-blur')
		$(this).toggleClass('hamburger__icon-active')
	})
	$('.footer__button ').modal();
	$(".js-header-slct").select({value:'Kiev', autocomplete: true, placeholder:'Выберите город'});
	$('.js-metro-slct').select({value:'polytechnical', autocomplete: true, placeholder:'Выберите метро'});
	$('.js-request-slct').select({value:'holoseevskyy', autocomplete: true, placeholder:'Выберите район'});
})