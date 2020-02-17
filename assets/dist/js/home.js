$(document).ready(function () {
  $('.about-us__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev about-us__arrow-carousel about-us__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next about-us__arrow-carousel about-us__arrow-carousel--next"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });

  $('.advantages__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev advantages__arrow-carousel advantages__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next advantages__arrow-carousel advantages__arrow-carousel--next"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 1023,
        settings: "unslick"
      },
    ]
  });

  $('.our-process__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev our-process__arrow-carousel our-process__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next our-process__arrow-carousel our-process__arrow-carousel--next"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 1023,
        settings: "unslick"
      },
    ]
  });

  $('.case-studies__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev case-studies__arrow-carousel case-studies__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next case-studies__arrow-carousel case-studies__arrow-carousel--next"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });

  var navSection = '.nav-section';

  function onScroll(){
    $(navSection + ' a').each(function(){
      var anchor      = $(this).attr('href');
      var scrollTop   = $(document).scrollTop();
      var positionTop = $(anchor).offset().top;
      var outerHeight = $(anchor).outerHeight();

      if ((positionTop <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
        $(navSection + ' a.nav-section__link--active').removeClass('nav-section__link--active');
        $(this).addClass('nav-section__link--active');
      } else {
        $(this).removeClass('nav-section__link--active');
      }
    });
  }

  $(document).on('scroll', onScroll);

  //якорные ссылки
  var $anchor = $('.js-anchor');

  if ($anchor.length) {
    $anchor.on('click', function (event) {

      event.preventDefault();
      var $that = $(this), hb = $('body, html');

      if ($that.is('button')) {
        hb.stop().animate({scrollTop: $('.' + $that.data('id')).offset().top}, 1000, 'swing');
      } else if ($that.is('a')) {
        hb.stop().animate({scrollTop: $('.' + $that.attr('href').replace('#', '')).offset().top + 2 + 'px'}, 1000, 'swing');
      }
    });
  }

  if ( $('.header').length) {
    var cardsSectionOffset = $('.header').offset().top;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll == cardsSectionOffset) {
        $('.nav-section li:first-child').children().addClass('nav-section__link--active')
      }
    });
  }

  if ( $('.case-studies').length) {
    var caseStudies = $('.case-studies').offset().top;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll >= caseStudies) {
        $('.nav-section').css({"position": "absolute"});
        console.log(1)
      } else {
        $('.nav-section').attr('style', '');
        console.log(2)
      }
    });
  }

});



