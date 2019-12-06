module.exports = function () {
  const btnFormCall = document.querySelectorAll('.btn-form-call-js');
  const popupForm = document.querySelector('.popup-form');
  const popupCross = document.querySelector('.popup-form_wrap-cross');
  const popupSuccess = document.querySelector('.popup-form_wrap-success');

  /**Откртие и закрытие формы */
  if (btnFormCall[0]) {
    for (let i = 0; i < btnFormCall.length; i++) {
      btnFormCall[i].addEventListener('click', function (e) {
        e.preventDefault();
        popupForm.classList.add('popup-form--active');
      });
    };
  }

  popupCross.addEventListener('click', function () {
    popupForm.classList.remove('popup-form--active');
  });

}