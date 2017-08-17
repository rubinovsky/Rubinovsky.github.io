$(document).ready(function(){
	$('.news__carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 1000
	})

	$('.header__search').click(function(){
		$('.header__search__form').addClass('header__search__form-active');
		$('.header__nav').removeClass('header__nav-opened');
		$('.header__menu-mobile').removeClass('menu-mobile-close');
		$('.header__search-overlay').fadeIn();
		$('body').addClass('lock');
		$('.header__search__inputbox').focus();
	})
	$('.header__search__btn-close').click(function(){
		$('.header__search__form').removeClass('header__search__form-active');
		$('.header__search-overlay').fadeOut();
		$('body').removeClass('lock');
	})
	$('.header__search-overlay').click(function(){
		$('.header__search__form').removeClass('header__search__form-active');
		$('.header__search-overlay').fadeOut();
		$('body').removeClass('lock');
	})
	$('.header__menu-mobile').click(function(){
		$('.header__nav').toggleClass('header__nav-opened');
		$(this).toggleClass('menu-mobile-close');
	})

	var PBSlider = $('.pb__slider');
	var PBTrumbs = $('.pb-thumbnail-slider');	
	PBSlider.owlCarousel({
		autoHeight:true,
		items: 1,
		smartSpeed: 300
	}).on('changed.owl.carousel', function (e) {
	//On change of main item to trigger thumbnail item
		PBTrumbs.trigger('to.owl.carousel', [e.item.index, 500, true]);
		PBTrumbs.find('.owl-item').removeClass('synced')
		PBTrumbs.find('.owl-item').eq(e.item.index).addClass('synced')
	});
	PBTrumbs.owlCarousel({
		items: 2,
		smartSpeed: 500
	}).on('click', '.owl-item', function () {
		// On click of thumbnail items to trigger same main item
		PBSlider.trigger('to.owl.carousel', [$(this).index(), 500, true]);

	}).on('changed.owl.carousel', function (e) {
		// On change of thumbnail item to trigger main item
		PBSlider.trigger('to.owl.carousel', [e.item.index, 500, true]);
	});
	PBTrumbs.find('.owl-item').eq(0).addClass('synced');
	$('.pb__slider-right').click(function() {
		PBSlider.trigger('next.owl.carousel');
	});
	$('.pb__slider-left').click(function() {
		PBSlider.trigger('prev.owl.carousel');
	});

	var SBSlider = $('.sb__slider');
	var SBTrumbs = $('.sb_thumbnail-slider');	
	SBSlider.owlCarousel({
		items: 1,
		smartSpeed: 500
	}).on('changed.owl.carousel', function (e) {
	//On change of main item to trigger thumbnail item
		SBTrumbs.trigger('to.owl.carousel', [e.item.index, 500, true]);
		SBTrumbs.find('.owl-item').removeClass('synced')
		SBTrumbs.find('.owl-item').eq(e.item.index).addClass('synced')
	});

	var mobileWidth;
	if ($(window).width() < 768) {
		mobileWidth	= false
	}
	else{
		mobileWidth	= true	
	}
	SBTrumbs.owlCarousel({
		items: !mobileWidth,
		autoWidth: mobileWidth,
		dots: false
	}).on('click', '.owl-item', function () {
		// On click of thumbnail items to trigger same main item
		SBSlider.trigger('to.owl.carousel', [$(this).index(), 500, true]);

	}).on('changed.owl.carousel', function (e) {
		// On change of thumbnail item to trigger main item
		SBSlider.trigger('to.owl.carousel', [e.item.index, 500, true]);
	});
	SBTrumbs.find('.owl-item').eq(0).addClass('synced');
	$('.sb__slider-right').click(function() {
		SBSlider.trigger('next.owl.carousel');
	});
	$('.sb__slider-left').click(function() {
		SBSlider.trigger('prev.owl.carousel');
	});


	var slideUp = $('.slide_up');
	var currentScrollTop = 0;
	var tempScrollTop = 0;
	 $(window).scroll(function(){
	 	currentScrollTop = $(window).scrollTop();
	 	if (tempScrollTop > currentScrollTop) {
	 		$('.header').removeClass('header_hide');
	 		if (currentScrollTop < $('.header').outerHeight()) {
	 			slideUp.removeClass('slide_up-visible');
	 		}
	 		tempScrollTop = 0;
	 	}
	 	else if(tempScrollTop < currentScrollTop){
			$('.header__nav').removeClass('header__nav-opened');
			$('.header__menu-mobile').removeClass('menu-mobile-close');
	 		$('.header').addClass('header_hide');	
	 		tempScrollTop = currentScrollTop;
	 		slideUp.addClass('slide_up-visible');

	 	}
	 });
	slideUp.click(function(){
		 $('html, body').animate({ scrollTop: 0}, 500);
		 return false;
	})
	$('.material_item__title').hover(function(){
		$(this).parents('.material_item').find('.material_item__photo').addClass('hover')
	},function(){
		$(this).parents('.material_item').find('.material_item__photo').removeClass('hover')
	})
	$('.material_item__photo').hover(function(){
		$(this).parents('.material_item').find('.material_item__title').addClass('hover')
	},function(){
		$(this).parents('.material_item').find('.material_item__title').removeClass('hover')
	})

});