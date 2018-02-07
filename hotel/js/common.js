(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);

$(document).ready(function(){
	var windH = $(window).height();
	var bgVideo = $('.video-background video');
	
	if (windH > bgVideo.height() + 100) {
		bgVideo.addClass('height_100');
	}
	if ($(window).width() > 900) {
		$('.site_wrap').css('min-height', windH + 'px');
	}

	var choiceLang = $('.lang_active');
	var listLang = $('.all_lang');

	choiceLang.click(function(){
		if (listLang.is(':visible')) {
			listLang.fadeOut(500);
		}
		else{
			listLang.fadeIn(500);
		}
	})
	$(document).click(function(e){
		if (!$('.header__lang').is(e.target) && $('.header__lang').has(e.target).length === 0) { 
			listLang.fadeOut(500);
		}
		if (!$('.header .menu_wrap').is(e.target) && $('.header .menu_wrap').has(e.target).length === 0 && !$('#menu_btn').is(e.target) && $('#menu_btn').has(e.target).length === 0 && $('.header').hasClass('menu-open')) { 
			$('.header').removeClass('menu-open');
			$('#menu_btn').removeClass('open');
		}
	})
	$('#menu_btn').click(function(){
		if (!$(this).hasClass('open')) {
			$('.header').addClass('menu-open');
			$(this).addClass('open');
		}
		else{
			$(this).removeClass('open');
			$('.header').removeClass('menu-open');
		}
	})
	function come(elem) {
		var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elemTop = $(elem).offset().top,
		elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	$(window).scroll(function(){
		if (come($('.statictics')) && !$('.statictics').hasClass('done')) {
			$('.statictics').addClass('done');
			$('.statictics .statictics__item_box h4').eq(0).animateNumber({ number: 21 },4000);
			$('.statictics .statictics__item_box h4').eq(1).animateNumber({ number: 3214 },4000);
			$('.statictics .statictics__item_box h4').eq(2).animateNumber({ number: 28 },4000);
			$('.statictics .statictics__item_box h4').eq(3).animateNumber({ number: 8 },4000);
		}
	})
})