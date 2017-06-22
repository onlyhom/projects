$(function() {
    $('.Q_right-1 .Q_right-list .Q_right-nav dl dd').hover(function() {
        var index1 = $(this).index();
        $('.Q_right-1 .Q_right-list .Q_right-nav dl dd').eq(index1).addClass('hover').siblings().removeClass('hover');
    });

    $('.Q_right-1 .Q_right-list .Q_right-nav dl dd').mouseleave(function () {
        $('.Q_right-1 .Q_right-list .Q_right-nav dl dd').removeClass('hover');
        $('.Q_right-1 .Q_right-list .Q_right-nav dl  #currentdd').addClass('hover');
    });

    $('.Q_right-content-tuan ul li').hover(function () {
        $(this).find('span').show();
    }, function () {
        $(this).find('span').hide();
    })

    $('.Q_right-content-tuan-1 ul li').hover(function () {
        $(this).find('span').show();
    }, function () {
        $(this).find('span').hide();
    })

    $('.Q_right-content-tuanduihang ul li').hover(function () {
        $(this).find('span').show();
    }, function () {
        $(this).find('span').hide();
    })
    

    /*轮播*/
    var width = $('.win-d ol li').width() + 25;
    $('.win-d ol').css({ 'width': $('.win-d ol li').width() * $('.win-d ol li').length });
    //alert()
    $('span.rightBtn-d').click(function () {

        $('.win-d ol').not(':animated').animate({ 'left': -width }, 1500, function () {
            $('.win-d ol').css('left', 0);
            $('.win-d ol li').eq(0).appendTo($('.win-d ol'));
        });
    })
    $('span.leftBtn-d').click(function () {
        $('.win-d ol').css('left', -width);
        $('.win-d ol li').last().prependTo($('.win-d ol'));
        $('.win-d ol').not(':animated').animate({ 'left': 0 }, 1500);
    })
});
