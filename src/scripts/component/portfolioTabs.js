module.exports = function () {
  const tabsBtn = document.querySelectorAll('.about-portfolio_tabs-item');
  const tabsItems = document.querySelectorAll('.portfolio_list');

  if (tabsBtn[0]) {
    tabsBtn[0].classList.add('about-portfolio_tabs-item--active');
    tabsItems[0].classList.add('portfolio_list--active');

    for (let i = 0; i < tabsBtn.length; i++) {

      tabsBtn[i].addEventListener('click', () => {

        for (let i = 0; i < tabsBtn.length; i++) {
          tabsBtn[i].classList.remove('about-portfolio_tabs-item--active');
          tabsItems[i].classList.remove('portfolio_list--active');
        }

        tabsBtn[i].classList.add('about-portfolio_tabs-item--active');
        tabsItems[i].classList.add('portfolio_list--active');

      });

    }

  }
}