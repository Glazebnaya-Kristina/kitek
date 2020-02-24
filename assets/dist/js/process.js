$(document).ready(function () {




  // $(".process__tabs .process__link:first").addClass("process__tabs__link--active");
  //
  // $('.process__tabs .process__link').click(function (e) {
  //   e.preventDefault();
  //   var hrefTab = $(this).attr("href");
  //   $(".process__tabs .process__link").removeClass("process__tabs__link--active");
  //   $(this).addClass("process__tabs__link--active");
  //   $(".process__tabs-content > div").hide();
  //   $(hrefTab).fadeIn();
  // });

  var $boxOne = $('.box:nth-child(1)'),
    $boxTwo = $('.box:nth-child(2)'),
    $boxThree = $('.box:nth-child(3)'),
    $boxFour = $('.box:nth-child(4)');

  var boxOne = new TimelineMax(),
    boxTwo = new TimelineMax(),
    boxThree = new TimelineMax(),
    boxFour = new TimelineMax();

  boxOne.to($boxOne, 1, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }).to($boxOne, 1, {
    ease: Back.easeOut
  }, 2);

  boxTwo.to($boxTwo, 1, {
    opacity:1,
    scale: 1,
    ease: Back.easeOut
  }, 1).to($boxTwo, 1, {
    ease: Back.easeOut
  }, 1.8);

  boxThree.to($boxThree, 1, {
    opacity:1,
    scale: 1,
    ease: Back.easeOut
  }, 1).to($boxThree, 1, {
    ease: Back.easeOut
  }, 1.4);

  boxFour.to($boxFour, 1, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, 1.2);


  $('.process__tab-content').hide();
  $('.process__tab-content:first').show();
  $('.process__tabs .process__tabs-item:first').addClass('process__tabs-item--active');


  $('.point').on('click', function(e) {

    e.preventDefault();
    $('.process__tabs .process__tabs-item').removeClass('process__tabs-item--active');
    $(this).addClass('process__tabs-item--active');
    $('.process__tab-content').hide();
    var selectTab = $(this).find('a').attr("href");
    $(selectTab).fadeIn();

    var getTotalPoints = $('.point').length,
      getIndex = $(this).index(),
      getCompleteIndex = $('.point--active').index();

    TweenMax.to($('.bar__fill'), 1, {
      width: getIndex / (getTotalPoints - 1) * 100 + '%'
    });

    if (function(getIndex){getCompleteIndex} ) {
      $('.point--active').addClass('point--complete').removeClass('point--active');

      $(this).addClass('point--active');
      $(this).prevAll().addClass('point--complete');
      $(this).nextAll().removeClass('point--complete');
    }
  });
});


