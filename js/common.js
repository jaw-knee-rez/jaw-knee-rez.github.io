$(function(){

  $('.switch input').click(function(){

    if ($('body').hasClass('theme-day') ) {
      $('body').removeClass();
      $('body').addClass('theme-night');
      $('.toggle-siteColor span').html('Night mode');
    } else {
      $('body').removeClass();
      $('body').addClass('theme-day');
      $('.toggle-siteColor span').html('Day mode');
    }


  });

});
