module.exports = function () {
  const burgerAside = document.querySelector('.ham');
  const aside = document.querySelector('.aside');
  const asideCross = document.querySelector('.aside_cross');

  burgerAside.addEventListener('click', function () {
    aside.classList.toggle('aside--active');
    burgerAside.classList.remove('active');
  });

  asideCross.addEventListener('click', function () {
    aside.classList.remove('aside--active');
  });

};