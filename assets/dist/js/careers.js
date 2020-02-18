$(document).ready(function () {

  $(".js-more").click(function() {

    var elem = $(".js-more span").text();
    if (elem == "Show more") {
      //Stuff to do when btn is in the read more state
      $(".js-more span").text("Show less");
      $(".careers__content p:not(:first-child)").slideDown();
      $(this).addClass('js-more--active')
    } else {
      //Stuff to do when btn is in the read less state
      $(".js-more span").text("Show more");
      $(".careers__content p:not(:first-child)").slideUp();
      $(this).removeClass('js-more--active');
    }
  });


  $('.careers__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev careers__arrow-carousel careers__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next careers__arrow-carousel careers__arrow-carousel--next"><i class="icon-arrow"></i></button>',
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