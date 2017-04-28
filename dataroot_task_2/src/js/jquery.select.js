(function($){
    $.fn.select = function(options) {
        var options = $.extend({
            autocomplete: true,
            placeholder: 'Виберіть варіант'
        }, options);
        var make = function() {
			var $select = $(this);
			// Створюємо псевдо SELECT
			$select.after('<div class="js-pseudo-select"></div>');
			var $pseudoSelect = $select.next();

			// Створюємо текстову форму для selecta
			$pseudoSelect.append('<input type="text" required autocomplete = "off" name = "'+ $select.attr('name') +'" placeholder="'+ options.placeholder +'" />')
			// Створюємо псевдо options
			for (var i = 0; i < $select.find('option').length; i++) {
				$pseudoSelect.append('<span>'+ $select.find('option').eq(i).text() + '</span>');
			}
			// Видаляємо оригінальний select
			$select.remove();
			// Створюємо змінні для текстового поля та псевдо options
			var $selectInput = $pseudoSelect.find('input'); 
			var $pseudoOptions = $pseudoSelect.find('span');
			$pseudoOptions.css({
				'display':'none',
				'cursor': 'pointer'
			})
			// Коли увімкнутий input відкривається наш псевдо select
			$selectInput.focus(function(){
				$pseudoOptions.css('display', 'block').fadeIn(300);
				$pseudoSelect.css('border', '2px solid #30AE63');
			})
			// при кліку на option select закривається та змінюється value текстового поля
			$pseudoOptions.click(function(){
				$pseudoOptions.removeClass('active_slct')
							   .fadeOut(0);
				$(this).addClass('active_slct')
				var $option_text = $(this).text();
				$pseudoSelect.find('input').val($option_text);
			})
			$pseudoOptions.hover(function(){
					$pseudoOptions.removeClass('active_slct');
					$(this).addClass('active_slct')})
			$selectInput.next().addClass('active_slct');
			$selectInput.keyup(function(){
				// Видаляємо підказки
				$pseudoSelect.find('p').remove();
				// функція для зміни value текстового поля
				var changeInput = function(){
					$activeSlct = $pseudoSelect.find('.active_slct');
					$selectInput.val($activeSlct.text())
				}
				// Натискання кнопки вниз або вправо
				if (event.keyCode == 40 || event.keyCode == 39) {
					var $activeSlct = $pseudoSelect.find('.active_slct');
					$activeSlct.removeClass('active_slct');
					// Умова якщо закінчаться псевдо option
					if ($activeSlct.next().length == 1) {
						$activeSlct.next().addClass('active_slct')
						changeInput();
					}
					else{
						$pseudoSelect.find('span:visible').first().addClass('active_slct');
						changeInput();
					}
				}
				// Натискання кнопки вверх або влівл
				else if (event.keyCode == 38 || event.keyCode == 37) {
					$activeSlct = $pseudoSelect.find('.active_slct');
					$activeSlct.removeClass('active_slct');
					// Умова якщо закінчаться псевдо option
					if ($activeSlct.prev().is('input')) {
						$pseudoSelect.find('span:visible').last().addClass('active_slct');
					}
					else{
						$activeSlct.prev().addClass('active_slct');
						changeInput();
					}
				}
				// Натискання кнопки ESC
				else if (event.keyCode == 27) {
					$pseudoOptions.removeClass('active_slct');
					$pseudoOptions.fadeOut(200);	
				}
				// Натискання кнопки Enter
				else if (event.keyCode == 13) {
					changeInput();
					$pseudoOptions.fadeOut(200);
				}
				else{
					// функція autocomplete
					if (options.autocomplete) {
						$pseudoOptions.removeClass('active_slct');
						setTimeout(function(){
							$pseudoSelect.find('span:visible').first().addClass('active_slct');			
						}, 500)
						var $valInput = $(this).val();
						for (var i = 0; i < $select.find('option').length; i++) {
							if ($pseudoOptions.eq(i).text().toUpperCase().search($valInput.toUpperCase()) != -1 ) {
								$pseudoOptions.eq(i).fadeIn(300);
							}
							else{
								$pseudoOptions.eq(i).fadeOut(0);	
							}
						}
						if ($pseudoSelect.find('span:visible').length == 0) {
							$pseudoSelect.append('<p>Нет результатов</p>');
						}
					}
				}
			})
        };
        return this.each(make);
    };
})(jQuery);