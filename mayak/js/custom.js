
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-1.jpg' },
            { src: 'images/slide-2.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
  function autoHeight($koef, $elem){
    var elem = $($elem)
    var height = elem.width()/$koef;
    elem.css('height', height);
  }
  autoHeight(1.7777, '.js-height');
  // change header color
  // function setSectionColor(){
  //   window.sectionColor = {};
  //   window.sectionColor.color = [];
  //   window.sectionColor.offset = [];
  //   var section = $('.js-section');
  //   console.log(section);
  //   for (var i = 0; i < section.length; i++) {
  //     window.sectionColor.color.push(section.eq(i).data('color'))
  //     window.sectionColor.offset.push(section.eq(i).offset().top)
  //   }
  //   console.log(window.sectionColor);
  // }
  // setTimeout(setSectionColor(), 2000);
  // $(window).scroll(function(e){
  //   for (var i = 0; i < window.sectionColor.offset.length; i++) {
  //     if ($(document).scrollTop() < window.sectionColor.offset[i] && window.sectionColor.offset[i-1] && !$('#header').hasClass(''+window.sectionColor.offset[i-1]+'')) {
  //       $('#header').removeClass('white green black');
  //       $('#header').addClass(window.sectionColor.color[i-1]);
  //       break;
  //     }
  //   }
  //   console.log($(document).scrollTop());
  // })

  // Go to box
  $('[href^=#]').click(function(e){
    e.preventDefault();
    var idBox = $(this).attr('href');
    var boxOffset = $(idBox).offset().top - 100;
    $('html,body').animate({scrollTop: boxOffset}, 500);
  })
  // GALLERY
  $('#js-owl-gallery').owlCarousel({
    'items': 1,
    'nav': true,
    'navText' : ['',''],
    'autoHeight': true
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

