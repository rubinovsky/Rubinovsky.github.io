(function($){
    $.fn.modal = function(options) {
        var make = function() {
        	$(this).click(function(){
				$('body').addClass('body-overflow')
				$('.js-wrap').animate({opacity:0.3}, 500);
				$( ".request" ).animate({opacity:1}, 500); 
				$('.request').addClass('request-open');
				return false;
			})
        	var closeModal = function(){
				if ($('.request').hasClass('request-open')) {
					$('body').removeClass('body-overflow')
					$('.js-wrap').animate({opacity:1}, 500);
					$(".request").animate({opacity:0}, 500);
					setTimeout(function(){
						$('.request').removeClass('request-open');
					}, 500)
				}
			}
			$('.js-wrap').click(function(){
				closeModal();
			})
			$('.request__close').click(function(){
				closeModal();
				return false	
			})
        }
        return this.each(make);
    };
})(jQuery);