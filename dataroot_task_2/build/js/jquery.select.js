(function($){
    $.fn.select = function(options) {
        var options = $.extend({
            autocomplete: true,
            value: '#',
            placeholder: 'Виберіть варіант'
        }, options);
        var make = function() {
        	// функція для вибору option в select
        	var optionSelected = function() {
				for (var i = 0; i < $select.find('option').length; i++) {
					if ($pseudoSelect.find('.active_slct').text().toUpperCase() == $select.find('option').eq(i).text().toUpperCase()) {
						$select.find('option').removeAttr('selected');
						$select.find('option').eq(i).attr("selected", "selected");
					}
				}
			}
			// функція для зміни value текстового поля
			var changeInput = function(){
				$activeSlct = $pseudoSelect.find('.active_slct');
				$selectInput.val($activeSlct.text())
			}

			var $select = $(this);
			$select.hide();
			// Створюємо псевдо SELECT
			$select.after('<div class="js-pseudo-select"></div>');
			var $pseudoSelect = $select.next();
			// Створюємо текстову форму для select
			$pseudoSelect.append('<input type="text" autocomplete = "off" placeholder="'+ options.placeholder +'" />')
			var $selectInput = $pseudoSelect.find('input'); 
			// Створюємо кнопку clear
			$pseudoSelect.append('<i></i>');
			var $clear = $pseudoSelect.find('i');
			// Створюємо псевдо options
			for (var i = 0; i < $select.find('option').length; i++) {
				$pseudoSelect.append('<span>'+ $select.find('option').eq(i).text() + '</span>');
			}
			// Створюємо змінну для псевдо options
			var $pseudoOptions = $pseudoSelect.find('span');
			if (options.value) {
				for (var i = 0; i < $select.find('option').length; i++) {
					// установка початкогово значення по атрибуту "value"
					if ($select.find('option').eq(i).val() == options.value) {
						$selectInput.val($select.find('option').eq(i).text());
						for (var j = 0; j < $pseudoOptions.length; j++) {
							if ($select.find('option').eq(i).text().toUpperCase() == $pseudoOptions.eq(j).text().toUpperCase()) {
								$pseudoOptions.eq(j).addClass('active_slct')
								optionSelected();
								if ($pseudoSelect.find('.active_slct').text().toUpperCase() == $select.find('option').eq(j).text().toUpperCase()) {
									$select.find('option').removeAttr('selected');
									$select.find('option').eq(j).attr("selected", "selected");
								}
							}
							
						}

					}
				}
			}
			// Коли увімкнутий input відкривається наш псевдо select
			$selectInput.focus(function(){
				$pseudoOptions.css('display', 'block').fadeIn(300);
				$pseudoSelect.addClass('select-open');
				// Відключення Enter при відправці форми
				$select.parents('form').keypress(function(e) {
				  if (e.which == 13) {
				    return false;
				  }
				});
				// натиснення кнопки "clean"
				$clear.click(function(){
					$selectInput.val('');
					$(this).hide();
					$selectInput.focus();
					$pseudoSelect.find('p').remove();
				})
				$selectInput.keyup(function(){
					$pseudoSelect.addClass('select-open');
					// Видаляємо підказки
					$pseudoSelect.find('p').remove();
					// Очистити текстове поле
					if ($selectInput.val() != '') {
						$clear.show();
					}
					else{
						$clear.hide();
					}

					// Натискання кнопки вниз або вправо
					if (event.keyCode == 40 || event.keyCode == 39) {
						var $activeSlct = $pseudoSelect.find('.active_slct');
						$activeSlct.removeClass('active_slct');
						// Умова якщо закінчаться псевдо option
						if ($activeSlct.nextAll('span:visible').eq(0).length == 1) {
							$activeSlct.nextAll('span:visible').eq(0).addClass('active_slct')
							changeInput();
							optionSelected();
						}
						else{
							$pseudoSelect.find('span:visible').first().addClass('active_slct');
							changeInput();
							optionSelected();
						}
					}
					// Натискання кнопки вверх або вліво
					else if (event.keyCode == 38 || event.keyCode == 37) {
						$activeSlct = $pseudoSelect.find('.active_slct');
						$activeSlct.removeClass('active_slct');
						// Умова якщо закінчаться псевдо option
						console.log($activeSlct.prevAll('span:visible').eq(0));
						if ($activeSlct.prev().is('input')) {
							$pseudoSelect.find('span:visible').last().addClass('active_slct');
							optionSelected();
						}
						else if($activeSlct.prevAll('span:visible').eq(0).length == 1){
							$activeSlct.prevAll('span:visible').eq(0).addClass('active_slct');
						}
						else{
							$activeSlct.prev().addClass('active_slct');
							changeInput();
							optionSelected();
						}
					}
					// Натискання кнопки ESC
					else if (event.keyCode == 27) {
						$pseudoOptions.removeClass('active_slct');
						$pseudoOptions.fadeOut(200);
						$pseudoSelect.removeClass('select-open');
					}
					// Натискання кнопки Enter
					else if (event.keyCode == 13) {
						changeInput();
						optionSelected();
						$pseudoSelect.removeClass('select-open');
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
						optionSelected();
					}
				})
			})
			// при кліку на option select закривається та змінюється value текстового поля
			$pseudoOptions.click(function(){
				$pseudoOptions.removeClass('active_slct')
							  .fadeOut(0);
				$(this).addClass('active_slct');
				$pseudoSelect.removeClass('select-open');
				var $option_text = $(this).text();
				$pseudoSelect.find('input').val($option_text);
				optionSelected();
				$clear.show()
			})
			$pseudoOptions.hover(function(){
				$pseudoOptions.removeClass('active_slct');
				$(this).addClass('active_slct')})
        };
        return this.each(make);
    };
})(jQuery);