window.sr = ScrollReveal({
	reset: true,
	duration: 1000,
	scale: 1,
	easing: "ease",
	distance: "30px",
	mobile: false,
	opacity: 0,
});

// INDEX ANIMATION START

sr.reveal('.header', {distance: 0, scale: .95, delay: 300});
sr.reveal('.main_board h1', {distance: '50px', origin: 'right', delay: 300});
sr.reveal('.main_board h2', {distance: '50px', origin: 'left', delay: 300});
sr.reveal('.main_board__buttons', {distance: '200px', delay: 300});
sr.reveal('.main_board__buttons', {delay: 300});
sr.reveal('footer.footer .footer__nav', {distance: 0, scale: .95, delay: 100});

// INDEX ANIMATION END



sr.reveal('.about_us_first', {distance: 0, scale: 0.5, delay: 300});
sr.reveal('.about_us_second', {
	distance: '500px', origin: 'left', delay: 200
});
sr.reveal('.statictics', {distance: '50px', origin: 'right', delay: 300});

sr.reveal('.advantages', {origin: 'bottom', delay: 300});
sr.reveal('.second_board__content img:first-child', {origin: 'left', delay: 300});
sr.reveal('.second_board__content img:last-child', {origin: 'right', delay: 300});


sr.reveal('.gallery-img-wrap', { distance: 0, scale: .95, delay: 300,});

sr.reveal('.contant_img');
sr.reveal('.contant-us__info', { distance: 0, scale: .8, delay: 300,});

sr.reveal('#contact_form', {distance: '30px', origin: 'left'});


sr.reveal('.footer_default a', {distance: '300px', origin: 'left', delay: 300});

sr.reveal('.reviews_item img', {distance: '300px', origin: 'left', delay: 300});
sr.reveal('.reviews_item .reviews_text', {distance: '300px', origin: 'right', delay: 300});