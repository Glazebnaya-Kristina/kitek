$(document).ready(function () {

  jQuery(function(){
    var key = 'clicked-tab' ;
    jQuery('.about-us__item-link').on('click', function(){
      localStorage.setItem(key, jQuery(this).data('tab'));
    });
  });

});


