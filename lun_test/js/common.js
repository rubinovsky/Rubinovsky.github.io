var countries = {
    "1": "Ukraine",
    "2": "Germany",
    "3": "France",
    "4": "Spain",
    "5": "Sweden",
    "6": "USA",
    "7": "Canada",
    "8": "Moldova",
    "9": "Belarus",
    "10": "Poland"
}
var cities = {
    "1": {"country": 1, "name": "Kiyv"},
    "2": {"country": 3, "name": "Paris"},
    "3": {"country": 4, "name": "Madrid"},
    "4": {"country": 6, "name": "Houston"},
    "5": {"country": 7, "name": "Montreal"},
    "6": {"country": 8, "name": "Кишинев"},
    "7": {"country": 9, "name": "Minsk"},
    "8": {"country": 10, "name": "Warsaw"},
    "100": {"country": 1, "name": "Львов"},
    "101": {"country": 1, "name": "Николаев"},
    "103": {"country": 1, "name": "Переяслав-Хмельницкий"},
    "104": {"country": 1, "name": "Каменец-Подольский"},
    "105": {"country": 1, "name": "Donetsk"},
    "106": {"country": 1, "name": "Kharkov"},
    "107": {"country": 1, "name": "Луцк"},
    "108": {"country": 1, "name": "Poltava"},
    "109": {"country": 1, "name": "Черновцы"},
    "299": {"country": 1, "name": "Чернигов"},
    "333": {"country": 1, "name": "Чернигов"}
}

$( document ).ready(function() {
    var $questions = $('.questions');
    var $question = $('.questions').find('.question');
    var $questLength = $question.length;
    // Створення пагінації
    for (var i = 1; i <= $questLength; i++) {
        $questions.find('.pagination').append('<span>'+ i +'</span>');
    }

    var $pagination = $questions.find('.pagination span');
        $pagination.eq(0).addClass('pagination_active');
    $('.portfolio').fadeOut(0);
    var $socialInput = $('.social-network input[type = "text"]');
    var $prev = $('.nav__prev');
    var $next = $('.nav__next');
    // Початкові умови
    var $questIndex = 0;
    $question.fadeOut(0);
    $question.eq($questIndex).fadeIn(300);
    $prev.addClass('nav_disabled');
    $(".country-info").fadeOut(0);
    // Функція заміни запитань
    var changeQuest = function(){
        $question.fadeOut(0);
        $question.eq($questIndex).fadeIn(300);
        $pagination.removeClass('pagination_active');
        if ($questIndex != 0) {
            $pagination.eq($questIndex - 1).addClass('pagination_succes');
        }
        $pagination.eq($questIndex).addClass('pagination_active');
        switch($questIndex) {
          case 0: 
            $prev.addClass('nav_disabled');
            $next.text('Следующий');
            break;
          case $questLength - 1:
            $next.addClass('lastQuestion').text("Завершить");
            $prev.removeClass('nav_disabled');
            break;
          default:
            $prev.removeClass('nav_disabled');
            $next.removeClass('lastQuestion').text('Следующий');
            break;
        }
    }
    var $inputName = $( ".question__name" );
    var $inputEmail = $( ".question__email" );
    var checkFirst = function(){
        if ($questIndex == 0) {
                $inputName.validateQuestions({require:true});
                $inputEmail.validateQuestions({require:true, email: true});
            if ($inputName.next().hasClass('valid_error') || $inputEmail.next().hasClass('valid_error')) {
                $inputName.parents('.question').removeClass('norm');
               return false; 
            }
            else{
                $inputName.parents('.question').addClass('norm');
            }
        }
    }
    var $portfolio = $('.portfolio');
    $next.click(function(event){
        if ($next.hasClass('lastQuestion')) {
            $('.animal_error').remove();
            if ($('.active-animal').hasClass('cat')) {
                $question.fadeOut(0);
                $prev.fadeOut(0);
                $pagination.fadeOut(0)
                $portfolio.fadeIn(300);
                $portfolio.append('<div class="portfolio-info"></div>');
                var $portfolioInfo = $portfolio.find('.portfolio-info'); 
                $portfolioInfo.append('<h3>'+ $( ".question__name" ).val()+'</h3>')
                              .append('<a href="mailto:'+ $( ".question__email" ).val() +'">'+ $( ".question__email" ).val()+'</a>')
                              .append('<span>' + $("#country option:selected").text() +'  '+ $("#cities option:selected").text() +'</span>');
                for (var i = 0; i < $socialInput.length; i++) {
                    if ($socialInput.eq(i).val() != ''){
                        $portfolioInfo.append('<p > <i>' + $socialInput.eq(i).prev().text() +':   </i>'+ $socialInput.eq(i).val() +'</p>');
                    }
                }
                $portfolio.append('<img src ="'+ $('.active-animal').attr('src') +'" alt = "'+ $('.active-animal').attr('alt') +'"/>');
                $next.removeClass('lastQuestion').addClass('repeat').text('Пройти заново');
                return false;
            }
            else if($('.active-animal').hasClass('dog')){
                $('.animals').append('<p class ="animal_error">Вы выбрали собачку. А надо котика</p>')
                return false;
            }
            else{
                $('.animals').append('<p class ="animal_error">Вы ничего не выбрали.</p>')
                return false;
            }
            // Итоговий результат
        }
        else if($next.hasClass('repeat')){
            $('#portfolio_form')[0].reset();
            var portfolioChild = $('.portfolio').children();
            for (var i = 0; i < portfolioChild.length; i++) {
                portfolioChild.eq(i).remove();
            }
            $('.animals img').removeClass('active-animal');
            $questIndex = 0;
            changeQuest();
            $prev.fadeIn(0);
            $pagination.fadeIn(300);
            $next.removeClass('repeat');
            $('.pagination span').removeClass('pagination_succes');
            $portfolio.fadeOut(0);
            return false;
        }
        checkFirst();
        if ($questIndex == 0) {
                $inputName.validateQuestions({require:true});
                $inputEmail.validateQuestions({require:true, email: true});
            if ($inputName.next().hasClass('valid_error') || $inputEmail.next().hasClass('valid_error')) {
                $inputName.parents('.question').removeClass('norm');
               return false; 
            }
            else{
                $inputName.parents('.question').addClass('norm');
            }
        }
        var $countryInput = $('#country').next().find('input');
        if ($questIndex == 1) {
            if (!$countryInput.next().hasClass('valid_error')) {
                $countryInput.after('<i class="valid_error"></i>')
            }
            if ($countryInput.val() == 0) {
                $countryInput.next().text('Обязательное поле').addClass('valid_error');
                $countryInput.addClass('input-error');

            }
            else{
                if ($countryInput.next().hasClass('valid_error')) {
                    $countryInput.next().text('').removeClass('valid_error');
                    $countryInput.removeClass('input-error');
                }   
            }
            if ($countryInput.next().hasClass('valid_error')) {
                $countryInput.parents('.question').removeClass('norm');
               return false; 
            }
            else{
                $countryInput.parents('.question').addClass('norm');
            }
        }
        else if ($questIndex == 2) {
            for (var i = 0; i < $socialInput.length; i++) {
                if ($socialInput.eq(i).is(':visible')) {
                    $socialInput.eq(i).validateQuestions({require:true})
                }
                else{
                    if ($socialInput.eq(i).next().hasClass('valid_error')) {
                        $socialInput.eq(i).next().remove();
                    }   
                }
            }
            if ($( ".social-network .valid_error").length == 0 ) {
                $( ".social-network" ).addClass('norm');
            }
            else{
                $( ".social-network" ).removeClass('norm');
            }
        }
        else{
            $('country-info').fadeIn();
            $('#country').parents('.question').removeClass('norm');   
        }
        if ( $question.eq($questIndex).hasClass('norm')) {
            $questIndex++;
        }
        changeQuest();
    });
    $prev.click(function(event){
        if ($questIndex == 0) {
            return false;
        }
        $questIndex--;
        changeQuest();
    });
    $pagination.click(function(){
        
        if ( $question.eq($questIndex).hasClass('norm') && $question.eq($pagination.index($(this)) - 1).hasClass('norm')) {
            $questIndex = $pagination.index($(this));
        }
        else if($questIndex > $pagination.index($(this))){
            $questIndex = $pagination.index($(this));   
        }
        changeQuest();
    })
    $inputName.keyup(function(){
        $inputName.validateQuestions({require:true});
    })
    $inputEmail.keyup(function(){
         $inputEmail.validateQuestions({require:true, email: true});
    })
    for (var key in countries) {
        $('#country').append('<option value='+ key +'>'+ countries[key] +'</option>')
    }
    for (var key in cities) {
        $('#cities').append('<option value='+ key +'>'+ cities[key].name + '</option>')
    }
    $('#country').select({autocomplete: true, value: false, placeholder:'Cтрана'});
    $('#cities').select({autocomplete: true, value: false, placeholder:'Город'});

    $('.animals img').click(function(){
        $('.animals img').removeClass('active-animal');
        $(this).addClass('active-animal')
    })

})