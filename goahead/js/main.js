$(function() {
  $('body').on('click', '.gotop', function() {
    $('html,body').animate({ scrollTop: 0 }, 333);
  });
  $(window)
    .scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('.gotop').show();
      } else {
        $('.gotop').hide();
      }
    })
    .scroll();
});
