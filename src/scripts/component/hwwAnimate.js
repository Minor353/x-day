module.exports = function () {
  const hwwContainer = document.querySelector('.hww_content');

  if (hwwContainer) {
    const hwwFirst = document.querySelector('.hww_content-item-first');
    const hwwSecond = document.querySelector('.hww_content-item-second');
    const hwwThird = document.querySelector('.hww_content-item-third');

    const hwwFirstCord = hwwFirst.getBoundingClientRect().top + window.pageYOffset;
    const hwwSecondCord = hwwSecond.getBoundingClientRect().top + window.pageYOffset;
    const hwwThirdCord = hwwThird.getBoundingClientRect().top + window.pageYOffset;

    $(window).scroll(function () {
      if (window.pageYOffset > (hwwFirstCord - 570)) {
        hwwFirst.classList.add('hww_content-item--active');
      }
      if (window.pageYOffset > (hwwSecondCord - 470)) {
        hwwSecond.classList.add('hww_content-item--active');
      }
      if (window.pageYOffset > (hwwThirdCord - 370)) {
        hwwThird.classList.add('hww_content-item--active');
      }

    });
  }


};