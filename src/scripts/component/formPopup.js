module.exports = function () {

  const callBtn = document.querySelector('.call-btn');
  const serviceCardBtn = document.querySelector('.service-card_call-btn');
  const productCardBtn = document.querySelector('.product_card-btn-link');


  const popup = document.querySelector('.popup');
  const popupCross = document.querySelector('.popup-cross');

  if (callBtn) {
    callBtn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.add('popup--active');
    });
  };

  if (serviceCardBtn) {
    serviceCardBtn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.add('popup--active');
    });
  }

  if (productCardBtn) {
    productCardBtn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.add('popup--active');
    });
  }

  popupCross.addEventListener('click', function () {
    popup.classList.remove('popup--active');
  });

  /****************Обработка отправки формы************************ */

  $('#form').on('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');

    function closePopup() {
      popupBlock.classList.remove('popup-success--active');
      document.getElementById('form').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopup, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopup, 2500);
    })
  };

  /*****number-mail */

  $('#number-mail').on('submit', submitFormNumber);

  function submitFormNumber(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');

    function closePopupNumber() {
      popupBlock.classList.remove('popup-success--active');
      document.getElementById('number-mail').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupNumber, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupNumber, 2500);
    })
  };

  /*****consultation-mail */

  $('#consultation-mail').on('submit', submitFormConsultation);

  function submitFormConsultation(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');

    function closePopupConsultation() {
      popupBlock.classList.remove('popup-success--active');
      document.getElementById('consultation-mail').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupConsultation, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupConsultation, 2500);
    })
  };

  /*******contact-form */

  $('#contact-form').on('submit', submitFormContact);

  function submitFormContact(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');

    function closePopupContact() {
      popupBlock.classList.remove('popup-success--active');
      document.getElementById('contact-form').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupContact, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      popup.classList.remove('popup--active');
      setTimeout(closePopupContact, 2500);
    })
  };

  /***************************************************************** */

};