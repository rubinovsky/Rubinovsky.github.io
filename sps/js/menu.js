$(document).ready(function(){
	var menuMobile = $('.menu_mobile');
	var menuBtn = $('#menu_btn');
	var menuChange = function($status){
		if ($status == 'open') {
			menuBtn.addClass('active');
			menuMobile.addClass('open');
		}
		else if($status == 'close'){
			menuMobile.removeClass('open');
			menuBtn.removeClass('active');
		}
	}
	menuBtn.click(function(){
		if (menuMobile.hasClass('open')) {
			menuChange('close');
		}
		else{
			menuChange('open');
		}
	});
	$(document).scroll(function(){
		menuChange('close');
	})
})