$(document).ready(function () {
  //бергр меню
  $('.menu-burger').on('click', function (e) {
    e.preventDefault();

    $('.menu-burger').toggleClass('menu-burger--open');
    $('.navigation').toggleClass('navigation--opened');
    $('body').toggleClass('hidden')
  });

  //якорные ссылки
  var $anchor = $('.js-anchor');

  if ($anchor.length) {
    $anchor.on('click', function (event) {

      event.preventDefault();
      var $that = $(this), hb = $('body, html');

      if ($that.is('button')) {
        hb.stop().animate({scrollTop: $('.' + $that.data('id')).offset().top}, 1000, 'swing');
      } else if ($that.is('a')) {
        hb.stop().animate({scrollTop: $('.' + $that.attr('href').replace('#', '')).offset().top}, 1000, 'swing');
      }

    });
  }

  $('.swish').on('click', function () {
    $('body').removeClass('theme-white').addClass('theme-black');
    $('body').find('.white-theme').removeClass('white-theme--active').fadeOut().parents().find('.black-theme').addClass('black-theme--active').fadeIn()
  });


  $('.swish-back').on('click', function () {
    $('body').removeClass('theme-black').addClass('theme-white');
    $('body').find('.black-theme').removeClass('black-theme--active').fadeOut().parents().find('.white-theme').addClass('white-theme--active').fadeIn()
  });



  // $('.swish').on('click', function () {
  //   $('body').fadeOut('300', function () {
  //     $(this).removeClass('theme-white').addClass('theme-black');
  //   });
  //   $('body').fadeIn('300', function () {
  //     $(this).find('.white-theme').removeClass('white-theme--active').fadeOut().parents().find('.black-theme').addClass('black-theme--active').fadeIn()
  //   });
  // });
  //
  //
  // $('.swish-back').on('click', function () {
  //   $('body').fadeOut('300', function () {
  //     $(this).removeClass('theme-black').addClass('theme-white');
  //   });
  //   $('body').fadeIn('300', function () {
  //     $(this).find('.black-theme').removeClass('black-theme--active').fadeOut().parents().find('.white-theme').addClass('white-theme--active').fadeIn()
  //   });
  // });





  // if ($('body').hasClass('theme-white')) {
  //   $(this).find('.white-theme').addClass('white-theme--active')
  // } else if ($('body').hasClass('theme-black')){
  //   $(this).find('.white-theme').removeClass('white-theme--active').parents().find('.black-theme').addClass('black-theme--active')
  // }


});

// модальные окна
document.addEventListener('DOMContentLoaded', function () {

  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.close');
  modalWrapp = document.querySelector('.modal');

  modalButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {

      e.preventDefault();


      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');


      modalElem.classList.add('popup--opened');
      overlay.classList.add('modal__overlay--opened');
      modalWrapp.classList.add('modal--opened');
      document.querySelector('body').classList.add('hidden');
    });

  });

  closeButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.popup');

      parentModal.classList.remove('popup--opened');
      overlay.classList.remove('modal__overlay--opened');
      modalWrapp.classList.remove('modal--opened');
      document.querySelector('.hidden').classList.remove('hidden');
    });

  });


  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {

      document.querySelector('.modal--opened').classList.remove('modal--opened');
      document.querySelector('.modal__overlay--opened').classList.remove('modal__overlay--opened');
      document.querySelector('.popup--opened').classList.remove('popup--opened');
      document.querySelector('.hidden').classList.remove('hidden');
    }
    ;
  }, false);


  overlay.addEventListener('click', function () {
    document.querySelector('.modal--opened').classList.remove('modal--opened');
    document.querySelector('.popup--opened').classList.remove('popup--opened');
    document.querySelector('.hidden').classList.remove('hidden');
    this.classList.remove('.modal__overlay--opened');
  });
});
