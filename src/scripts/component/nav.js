module.exports = function () {
  const burger = document.querySelector(`.ham`);
  const nav = document.querySelector(`.nav--header`);

  burger.addEventListener(`click`, () => {
    nav.classList.toggle(`nav--header-active`);
  });
}