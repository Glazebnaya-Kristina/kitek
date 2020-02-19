$(document).ready(function () {
  $('.cases__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev cases__arrow-carousel cases__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next cases__arrow-carousel cases__arrow-carousel--next"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });
});
