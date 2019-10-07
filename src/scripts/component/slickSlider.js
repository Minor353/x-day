module.exports = function () {
  /**Слайдер отзывов */
  $('.reviews_slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /**Слайдер в странице портфолио */

  $('.big-gallery_gallery-screen').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.big-gallery_gallery-nav'
  });
  $('.big-gallery_gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.big-gallery_gallery-screen',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });



  /**Слайдер в форме */

  $('.main-form_form').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  });
};