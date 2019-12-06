const header = require('./component/header.js');
header();

const nav = require('./component/nav.js');
nav();

const paralax = require('./component/paralax.js');
paralax();

const canvas = require('./component/canvas.js');
canvas();

const slickSlider = require('./component/slickSlider.js');
slickSlider();

const canvasIndex = require('./component/canvasIndex.js');
canvasIndex();

const formPopup = require('./component/formPopup.js');
formPopup();

const parallaxScroll = require('./component/parallaxScroll.js');
parallaxScroll();

const hwwAnimate = require('./component/hwwAnimate.js');
hwwAnimate();

const portfolioTabs = require('./component/portfolioTabs.js');
portfolioTabs();

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1300);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('preloader--hidden');
    preloaderEl.classList.remove('preloader--visible');
  });