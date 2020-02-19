$(document).ready(function () {
  $('.case-study__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev case-study__arrow-carousel case-study__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next case-study__arrow-carousel case-study__arrow-carousel--next"><i class="icon-arrow"></i></button>',
  });

  $(".js-more").click(function() {

    var elem = $(".js-more span").text();
    if (elem == "Show more") {
      //Stuff to do when btn is in the read more state
      $(".js-more span").text("Show less");
      $(".case-study__content p:not(:first-child)").slideDown();
      $(this).addClass('js-more--active')
    } else {
      //Stuff to do when btn is in the read less state
      $(".js-more span").text("Show more");
      $(".case-study__content p:not(:first-child)").slideUp();
      $(this).removeClass('js-more--active');
    }
  });
});
