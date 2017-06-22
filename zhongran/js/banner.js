$(function () {
    var index1 = 0, timer, index = 0;
    var num = $('.wind ol li a').length;
    var i_mun = 0;
    /*求出自适应高度*/

    /*左右按钮 鼠标指在 win 上显示*/
    $('.win').hover(function () {
        $('.anniu').show();
    }, function () {
        $('.anniu').hide();
    });
    /*定时器*/
    function bannerMoveks() {
        timer_banner = setInterval(function() {
            move_banner();
        }, 8000);
    };
    bannerMoveks();//开始自动播放
    //鼠标移动到banner上时停止播放
    $('.win').mouseover(function () {
        clearInterval(timer_banner);
    });

    //鼠标离开 banner 开启定时播放
    $('.win').mouseout(function () {
        bannerMoveks();
    });
    /*下面的点点*/
    $('.win dl dd').click(function () {
        var indexd = $(this).index();
        $('.win dl dd').eq(indexd).addClass('hover').siblings().removeClass('hover');
        $('.wind ol li a').eq(indexd).fadeIn(1500).siblings().fadeOut(1500);
        i_mun = index;
    });
    /*左右按钮*/
    $('.leftBto').click(function () {
        if (i_mun == 0) {
            i_mun = num
        }
        $('.wind ol li a').eq(i_mun - 1).fadeIn(1500).siblings().fadeOut(1500);
        $('.win dl dd').eq(i_mun - 1).addClass('hover').siblings().removeClass('hover');
        i_mun--
        //alert(index)
    });
    $('.rightBto').click(function () {
        move_banner();
    });
    /*调用函数*/
    function set(index) {
        $('.win dl dd').eq(index).addClass('hover').siblings().removeClass('hover');
        $('.wind ol li a').eq(index).fadeIn(1500).siblings().fadeOut(1500);
    };
    //banner 右边点击执行函数
    function move_banner() {
        if (i_mun == num - 1) {
            i_mun = -1
        };
        $('.wind ol li a').eq(i_mun + 1).fadeIn(2000).siblings().fadeOut(2000);
        $('.win dl dd').eq(i_mun + 1).addClass('hover').siblings().removeClass('hover');
        i_mun++
    };
});