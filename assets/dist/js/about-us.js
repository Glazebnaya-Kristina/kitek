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

  $('.team__carousel').slick({
    mobileFirst: true,
    prevArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--prev team__arrow-carousel team__arrow-carousel--prev"><i class="icon-arrow"></i></button>',
    nextArrow: '<button type="button" class="arrow-carousel arrow-carousel--oval arrow-carousel--next team__arrow-carousel team__arrow-carousel--next"><i class="icon-arrow"></i></button>',
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


  // $(".js-more").click(function() {
  //
  //   var elem = $(".js-more span").text();
  //   if (elem == "Show more") {
  //     //Stuff to do when btn is in the read more state
  //     $(".js-more span").text("Show less");
  //     $(".description__content p:not(:first-child)").slideDown();
  //     $(this).addClass('js-more--active')
  //   } else {
  //     //Stuff to do when btn is in the read less state
  //     $(".js-more span").text("Show more");
  //     $(".description__content p:not(:first-child)").slideUp();
  //     $(this).removeClass('js-more--active');
  //   }
  // });


  var defaultHeight;
  var width = $(window).width();
  if (width < 479) {
    defaultHeight = 480;
  } else if (width > 479 && width < 768){
    defaultHeight = 180;
  } else if (width > 768 && width < 1024){
    defaultHeight = 210;
  }

  var text = $(".description__content");
  var textHeight = text[0].scrollHeight;
  var button = $(".js-more");
  text.css({"max-height": defaultHeight, "overflow": "hidden"});


  button.on("click", function(){
    var newHeight = 0;
    if (text.hasClass("active")) {
      newHeight = defaultHeight;
      text.removeClass("active");

      $(".js-more span").text("Show more");
      $(this).removeClass('js-more--active');
    } else {
      newHeight = textHeight;
      text.addClass("active");
      // $(".js-more").text("Read Less");
      $(".js-more span").text("Show less");
      $(this).addClass('js-more--active')
    }

    text.animate({
      "max-height": newHeight
    }, 500);
  });



  jcf.replaceAll();


  $("#file-1").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $('.btn-file .hidden-xs').text('Attach Files');


});



