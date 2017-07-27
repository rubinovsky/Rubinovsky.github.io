(function($){
    $.fn.validateQuestions = function(options) {
        var options = $.extend({
            require: false,
            email: false,
            select: false
        }, options);
        var make = function() {
            if (!$(this).next().hasClass('valid_error')) {
                $(this).after('<i class="valid_error"></i>')
            }
            if (options.require) {
                if ($(this).val() == 0) {
                    $(this).next().text('Обязательное поле').addClass('valid_error');
                    $(this).addClass('input-error');

                }
                else{
                    if ($(this).next().hasClass('valid_error')) {
                        $(this).next().text("").removeClass('valid_error');
                        $(this).removeClass('input-error');
                    }   
                }    
            }
            function validateEmail(email) {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            }
            if (options.email) {
                if (!validateEmail($(this).val())) {
                    $(this).next().text('Введите правильный email').addClass('valid_error');
                    $(this).addClass('input-error');
                }
                else{
                    if ($(this).next().hasClass('valid_error')) {
                        $(this).next().text("").removeClass('valid_error');
                        $(this).removeClass('input-error');
                    }   
                } 
            }
            if (options.select) {
                if (typeof $(this).val() !== 'string') {
                    $(this).next().text('Выберете пожалуйста вашу страну').addClass('valid_error');
                }
                else{
                    if ($(this).next().hasClass('valid_error')) {
                        $(this).next().text("").removeClass('valid_error');
                    }   
                }    
            }

        };
        return this.each(make);
    };
})(jQuery);