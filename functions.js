$( window ).on( "load", function() {

    var popup_bg = $('.popup-bg');
    var popup_wrp = $('.popup-wrp');
    var popup_target = $('[data-popup-target]');

    popup_target.click(function(e) {
      e.preventDefault();
      var popup_name = $(this).attr('data-popup-target');
      popup_bg.show();
      $('[data-popup-name='+ popup_name +']').show();
    });

    popup_bg.click(function(e) {
      e.preventDefault();
      popup_bg.hide();
      popup_wrp.hide();
    });


});
