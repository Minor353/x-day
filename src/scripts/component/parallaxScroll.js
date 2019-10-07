module.exports = function () {
  let sectionFirst = $('.parallax-scroll_first');
  let sectionSecond = $('.parallax-scroll_second');
  let sectionThird = $('.parallax-scroll_third');

  $(window).scroll(function () {
    let scrollTop = -($(window).scrollTop()),
      speed = sectionFirst.data('speed'),
      speedSecond = sectionSecond.data('speed'),
      speedThird = sectionThird.data('speed'),
      coords = "110%" + (scrollTop + 2500) / speed + "px",
      coordsSecond = "-10%" + (scrollTop + 5500) / speedSecond + "px",
      coordsThird = "110%" + (scrollTop + 7300) / speedThird + "px";

    sectionFirst.css('background-position', coords);
    sectionSecond.css('background-position', coordsSecond);
    sectionThird.css('background-position', coordsThird);
  });
};