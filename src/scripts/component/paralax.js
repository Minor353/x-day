module.exports = function () {
  const parent = document.querySelector('body');
  const item1 = document.querySelector('.present_text-left');
  const item2 = document.querySelector('.present_text--right');
  const item3 = document.querySelector('.present_block-left');
  const item4 = document.querySelector('.present_block--right');

  if (item1) {
    let center = {
      x: parent.offsetWidth / 2,
      y: parent.offsetHeight / 12
    };

    parent.onmousemove = function (event) {
      item1.setAttribute('style', 'transform: translate3d(' +
        Math.round((center.x - event.pageX) / 40) + 'px, ' +
        Math.round((center.y - event.pageY) / 40) + 'px, 0);');

      item2.setAttribute('style', 'transform: translate3d(' +
        Math.round((center.x - event.pageX) / 40) + 'px, ' +
        Math.round((center.y - event.pageY) / 40) + 'px, 0);');

      item3.setAttribute('style', 'transform: translate3d(' +
        Math.round((center.x - event.pageX) / 20) + 'px, ' +
        Math.round((center.y - event.pageY) / 20) + 'px, 0);');

      item4.setAttribute('style', 'transform: translate3d(' +
        Math.round((center.x - event.pageX) / 20) + 'px, ' +
        Math.round((center.y - event.pageY) / 20) + 'px, 0);');

    };
  };
};