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
});



