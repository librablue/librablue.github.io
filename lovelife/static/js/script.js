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

    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop:true,
        slideMargin: 0,
        thumbItem: 4,
        prevHtml: '<img src="static/image/prev.png">',
        nextHtml: '<img src="static/image/next.png">'
    });
});
