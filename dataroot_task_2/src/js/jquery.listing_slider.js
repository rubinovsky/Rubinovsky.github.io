(function($){
    $.fn.listingSlider = function(options) {
        var options = $.extend({
            infinite: true,
            index: 0,
            arrows: true,
            swipeAble: true,
            autoplay: false,
            pagination: true,
            autoplaySpeed: 5,  // in seconds
            next: 'js-slider-next',
            prev: 'js-slider-prev',
        }, options);
        var make = function() {
            var $rentInfobox = $(this).children('.rent__infobox');
            var $rentOptions = $(this).children('.rent__options');
            var $slideLength = $rentOptions.length;
            if (options.pagination) {
                for (var i = 0; i < $slideLength; i++) {
                    $(this).find('.rent__pagination').append('<span></span>');
                }
                var $pagination = $(this).find('.rent__pagination span');
                $pagination.eq(0).addClass('slider__pagination_active');
            }

            var $next = $(this).find('.' + options.next);
            var $prev = $(this).find('.' + options.prev);

            // Початкови умови
            var $sliderIndex = options.index;
            $rentInfobox.fadeOut(0);
            $rentOptions.fadeOut(0);
            $rentInfobox.eq(0).fadeIn(0);
            $rentOptions.eq(0).fadeIn(0);
            // Функція для заміни слайдів
            var changeSlide = function(){
                $rentInfobox.fadeOut(0);
                $rentOptions.fadeOut(0);
                $rentOptions.eq($sliderIndex).fadeIn(500);
                $rentInfobox.eq($sliderIndex).fadeIn(500);
                if (options.pagination) {
                    $pagination.removeClass('slider__pagination_active');
                    $pagination.eq($sliderIndex).addClass('slider__pagination_active');
                }
            }
            if (options.index != 0) {
                changeSlide();
            }
            if (!options.infinite) {
                $prev.fadeOut(200);
            }
            // Умова відключення стрілок
            if (!options.arrows) {
                $next.fadeOut(0);
                $prev.fadeOut(0);
                $(this).find('.rent__pagination').css('bottom', '5px');
            }
            // Подія навігації "Вперед"
            $(this).find('.' + options.next).click(function(event){
                event.preventDefault();
                if ($sliderIndex != $slideLength - 1) {
                    $sliderIndex++;
                    // Видалення кнопки "Вперед" коли увімкений останній слайд
                    if (options.infinite == false && $sliderIndex == $slideLength - 1) {
                        $next.fadeOut(200);
                    }
                    // Відновлення кнопки "Назад"
                    else if (options.infinite == false &&  $sliderIndex >= $slideLength - 2) {
                        $prev.fadeIn(200);
                    }
                }
                else{
                    // перестрибуємо на перший слайд коли увімнений останній (опція "infinite")
                    if (options.infinite) {
                        $sliderIndex = 0;           
                    }
                }
                changeSlide();
                return false;
            });
            // Подія навігації "Назад"
            $(this).find('.' + options.prev).click(function(event){
                if ($sliderIndex != 0) {
                    $sliderIndex--;
                    // Видалення кнопки "Назад" коли увімкений перший слайд
                    if (options.infinite == false && $sliderIndex == 0) {
                        $prev.fadeOut(200);
                    }
                    // Відновлення кнопки "Вперед"
                    else if (options.infinite == false && $sliderIndex > 0) {
                        $next.fadeIn(200);
                    }
                }
                else{
                    // перестрибуємо на останній слайд коли увімнений перший (опція "infinite")
                    if (options.infinite){
                        $sliderIndex = $slideLength -1;  
                    }
                }
                changeSlide();
                return false;
            });
            // Подія на пагінацію
            $pagination.click(function(){
                $pagination.removeClass('slider__pagination_active');
                $(this).addClass('slider__pagination_active')
                $sliderIndex = $pagination.index($('.slider__pagination_active'));
                $next.fadeIn(500);
                $prev.fadeIn(500);
                $rentInfobox.fadeOut(0);
                $rentOptions.fadeOut(0);
                $rentOptions.eq($sliderIndex).fadeIn(500);
                $rentInfobox.eq($sliderIndex).fadeIn(500);
                if (!options.infinite) {
                    if($sliderIndex == $slideLength - 1){
                        $next.fadeOut(500);
                    }
                    else if($sliderIndex == 0){
                        $prev.fadeOut(500)
                    }
                }
            })
            // Автопрогравання слайдера опція "autoplay" працює тільки при "infinite = true"
            if (options.infinite) {
                if (options.autoplay) {
                    var timerId = setInterval(function() { 
                        $next.click() 
                    }, options.autoplaySpeed * 1000);
                    // Зупинка автопрогравання при наведені на блок
                   $(this).hover(
                      function() {
                        clearTimeout(timerId)
                      }, function() {
                            timerId = setInterval(function() { 
                                $next.click() 
                            }, options.autoplaySpeed * 1000);
                      }
                    ); 
                }
            }
            if (options.swipeAble) {
                $(this).on( "swiperight", swipeAbleRight);
                $(this).on( "swipeleft", swipeAbleLeft);
                function swipeAbleRight(){
                    $next.click();
                }
                function swipeAbleLeft(){
                    $prev.click();
                }
            }
        };
        return this.each(make);
    };
})(jQuery);