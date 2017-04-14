////////////////
/////SELECT/////
////////////////
$(document).ready(function(){
	$('.header__select').click( function(){
		if($(this).find('#radio_header').prop("checked") == true){
			$(this).find('.option').slideDown(300);
			$(this).addClass('open_slct');
			$(this).find('.option').eq(0).css('border-top', '2px solid #DFE3E6');
			$(this).find('#radio_header').next().css({pointerEvents: "none"})
		}
		else{
			$(this).find('#radio_header').next().css({pointerEvents: "auto"})
			$(this).find('.option').slideUp(300);
			$(this).removeClass('open_slct');
		}
		var town_text = $(this).find('.radio:checked').next().html();
		if (town_text != '') {
			$(this).find('#radio_header').next().html(town_text);
		}
	})
	$('.metro__select').click( function(){
		if($(this).find('#radio_metro').prop("checked") == true){
			$(this).find('.option').slideDown(300);
			$(this).addClass('open_slct');
			$(this).find('.option').eq(0).css('border-top', '2px solid #DFE3E6');
			$(this).find('#radio_metro').next().css({pointerEvents: "none"})
		}
		else{
			$(this).find('#radio_metro').next().css({pointerEvents: "auto"})
			$(this).find('.option').slideUp(300);
			$(this).removeClass('open_slct');
		}
		var town_text = $(this).find('.radio:checked').next().html();
		if (town_text != '') {
			$(this).find('#radio_metro').next().html(town_text);
		}
	})
})