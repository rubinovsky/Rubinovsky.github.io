(function($){
    $.fn.indexSlider = function(options) {
        var options = $.extend({
            infinite: true,
            index: 0,
            arrows: true,
            swipeAble: true,
            autoplay: false,
            pagination: true,
            autoplaySpeed: 5,  // in seconds
            next: 'slider__next',
            prev: 'slider__prev',
        }, options);
        var make = function() {
            var $slide = $(this).children('.social__slide');
            // var rentOptions = $(this).children('.rent__options');
            var $slideLength = $slide.length;
            if (options.pagination) {
                for (var i = 0; i < $slideLength; i++) {
                    $(this).find('.slider__pagination').append('<span></span>');
                }
                var $pagination = $(this).find('.slider__pagination span');
                $pagination.eq(0).addClass('slider__pagination_active');
            }

            var $next = $(this).find('.' + options.next);
            var $prev = $(this).find('.' + options.prev);

            // Початкови умови
            var $slider_index = options.index;
            $slide.fadeOut(0);
            $slide.eq(0).fadeIn(0);
            // Функція для заміни слайдів
            var changeSlide = function(){
                $slide.fadeOut(0);
                $slide.eq($slider_index).fadeIn(500);
                if (options.pagination) {
                    $pagination.removeClass('slider__pagination_active');
                    $pagination.eq($slider_index).addClass('slider__pagination_active');
                }
            }
            // опція 'Index'
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
            }
            // Подія навігації "Вперед"
            $(this).find('.' + options.next).click(function(event){
                event.preventDefault();
                if ($slider_index != $slideLength - 1) {
                    $slider_index++;
                    // Видалення кнопки "Вперед" коли увімкений останній слайд
                    if (options.infinite == false && $slider_index == $slideLength - 1) {
                        $next.fadeOut(200);
                    }
                    // Відновлення кнопки "Назад"
                    else if (options.infinite == false &&  $slider_index >= $slideLength - 2) {
                        $prev.fadeIn(200);
                    }
                }
                else{
                    // перестрибуємо на перший слайд коли увімнений останній (опція "infinite")
                    if (options.infinite) {
                        $slider_index = 0;           
                    }
                }
                changeSlide();
                return false;
            });
            // Подія навігації "Назад"
            $(this).find('.' + options.prev).click(function(event){
                if ($slider_index != 0) {
                    $slider_index--;
                    // Видалення кнопки "Назад" коли увімкений перший слайд
                    if (options.infinite == false && $slider_index == 0) {
                        $prev.fadeOut(200);
                    }
                    // Відновлення кнопки "Вперед"
                    else if (options.infinite == false && $slider_index > 0) {
                        $next.fadeIn(200);
                    }
                }
                else{
                    // перестрибуємо на останній слайд коли увімнений перший (опція "infinite")
                    if (options.infinite){
                        $slider_index = $slideLength -1;  
                    }
                }
                changeSlide();
                return false;
            });
            // Подія на пагінацію
            $pagination.click(function(){
                $pagination.removeClass('slider__pagination_active');
                $(this).addClass('slider__pagination_active')
                $slider_index = $pagination.index($('.slider__pagination_active'));
                $next.fadeIn(500);
                $prev.fadeIn(500);
                $slide.fadeOut(0);
                $slide.eq($slider_index).fadeIn(500);
                if (!options.infinite) {
                    if($slider_index == $slideLength - 1){
                        $next.fadeOut(500);
                    }
                    else if($slider_index == 0){
                        $prev.fadeOut(500)
                    }
                }
            })
            // Автопрогравання слайдера опція "autoplay" працює тільки при "infinite = true"
            if (options.infinite) {
                if (options.autoplay) {
                    var $timerId = setInterval(function() { 
                        $next.click() 
                    }, options.autoplaySpeed * 1000);
                    // Зупинка автопрогравання при наведені на блок
                   $(this).hover(
                      function() {
                        clearTimeout($timerId)
                      }, function() {
                            $timerId = setInterval(function() { 
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