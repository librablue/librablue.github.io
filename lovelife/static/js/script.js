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

    var $wrapper = $('div.wrapper');
    var $listButton = $('button.list-view');
    var $gridButton = $('button.grid-view');
    $listButton.on('click', function () {
        $gridButton.removeClass('on');
        $listButton.addClass('on');
        $wrapper.removeClass('grid').addClass('list');
    });

    $gridButton.on('click', function () {
        $listButton.removeClass('on');
        $gridButton.addClass('on');
        $wrapper.removeClass('list').addClass('grid');
    });
});
