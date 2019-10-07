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

    popupCross.addEventListener('click', function () {
      popupForm.classList.remove('popup-form--active');
    });
  };


  /**Сабмит формы */
  $('#popupForm').on('submit', submitPopupForm);

  function submitPopupForm(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    function closePopupSuccess() {
      popupSuccess.classList.remove('popup-form_wrap-success--active');
    }


    function closePopup() {
      popupForm.classList.remove('popup-form--active');
      document.getElementById('popupForm').reset();
      setTimeout(closePopupSuccess, 500);
    }

    request.done(function (msg) {
      popupSuccess.classList.add('popup-form_wrap-success--active');
      setTimeout(closePopup, 2800);
    });

    request.fail(function (jqXHR, textStatus) {
      popupSuccess.classList.add('popup-form_wrap-success--active');
      setTimeout(closePopup, 2800);
    })
  };
};