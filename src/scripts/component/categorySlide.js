module.exports = function () {

  const scrollTitle = document.querySelector('#categoryName');

  if (scrollTitle) {
    $('body,html').animate({
      scrollTop: $('#categoryName').offset().top - 60
    }, 1200);
  }

}