$(function () {
    var Height = $('.banner-lun ul').height($('.banner-lun ul li img').height() * $('.banner-lun ul li img').length);
    var Height_img = $('.banner-lun ul li').height();
    var geshu = $('.banner-lun ul li img').length;
    //alert(geshu)
    var index = 0;
    var timer;
    $('.lunbo').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            index++;
            if (index > (geshu - 1)) {
                index = 0
            }
            $('.banner-lun ul').stop().animate({ 'top': -Height_img }, 500, function () {
                $('.banner-lun ul li').eq(0).appendTo($('.banner-lun ul'));
                $('.banner-lun ul').css('top', 0);
                $('.dian-lun b').eq(index).addClass('on').siblings().removeClass('on')
            })
        }, 3000)
    }).trigger('mouseleave')

    $('.dian-lun b').click(function () {
        var indexd = $(this).index();
        var num = $('.dian-lun b[class=on]').index();
        if (indexd > num) {
            $('.banner-lun ul').stop().animate({ 'top': -Height_img * (indexd - num) }, 500, function () {
                for (var i = 0; i < indexd - num; i++) {
                    $(".banner-lun ul li").eq(0).appendTo($('.banner-lun ul'));
                    $('.dian-lun b').eq(indexd).addClass('on').siblings().removeClass('on')
                }
                $('.banner-lun ul').css('top', 0);
                index = indexd;
            })
        } else if (indexd < num) {
            for (var i = 0; i < num - indexd; i++) {
                $(".banner-lun ul li").eq(geshu - 1).prependTo($('.banner-lun ul'));
                $('.banner-lun ul').css({ 'top': -Height_img * (num - indexd) });
                $('.dian-lun b').eq(indexd).addClass('on').siblings().removeClass('on')
            }
            $('.banner-lun ul').stop().animate({ 'top': 0 }, 500)
            index = indexd;
        };
    });

});