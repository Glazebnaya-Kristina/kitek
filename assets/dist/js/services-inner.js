$(document).ready(function () {
  // табы
  $('ul.tabs__caption').each(function (i) {
    var storage = localStorage.getItem('tab' + i);
    if (storage) {
      $(this).find('li').removeClass('tabs-active').eq(storage).addClass('tabs-active')
        .closest('div.tabs').find('li.tabs__content').removeClass('tabs-active').eq(storage).addClass('tabs-active');
    }
  });

  $('ul.tabs__caption').on('click', 'li:not(.tabs-active)', function () {
    $(this)
      .addClass('tabs-active').siblings().removeClass('tabs-active')
      .closest('div.tabs').find('li.tabs__content').removeClass('tabs-active').eq($(this).index()).addClass('tabs-active')
      .parents().find('.services-inner__case-list').removeClass('services-inner__case-list--active').eq($(this).index()).addClass('services-inner__case-list--active');
    var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
    localStorage.removeItem('tab' + ulIndex);
    localStorage.setItem('tab' + ulIndex, $(this).index());
  });
});
