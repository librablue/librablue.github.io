$(function () {
    new WOW().init();
    var $btnGoTop = $('#gotop');
    $btnGoTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $btnGoTop.fadeIn('fast');
        } else {
            $btnGoTop.stop().fadeOut('fast');
        }
    });
    $btnGoTop.on('click', function () {
        $('html,body').animate({ scrollTop: '0px' }, 1000);
    });
});
