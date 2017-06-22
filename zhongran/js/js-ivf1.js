$(document).ready(function () {

    $(".main_visual").hover(function () {
        $("#btn_prev,#btn_next").fadeIn()
    }, function () {
        $("#btn_prev,#btn_next").fadeOut()
    });

    $dragBln = false;

    $(".main_image").touchSlider({
        flexible: true,
        speed: 200,
        btn_prev: $("#btn_prev"),
        btn_next: $("#btn_next"),
        paging: $(".flicking_con ul li"),
        counter: function (e) {
            $(".flicking_con ul li").removeClass("on").eq(e.current - 1).addClass("on");
        }
    });

    $(".main_image").bind("mousedown", function () {
        $dragBln = false;
    });

    $(".main_image").bind("dragstart", function () {
        $dragBln = true;
    });

    $(".main_image a").click(function () {
        if ($dragBln) {
            return false;
        }
    });

    timer = setInterval(function () {
        $("#btn_next").click();
    }, 5000);

    $(".main_visual").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            $("#btn_next").click();
        }, 5000);
    });

    $(".main_image").bind("touchstart", function () {
        clearInterval(timer);
    }).bind("touchend", function () {
        timer = setInterval(function () {
            $("#btn_next").click();
        }, 5000);
    });

});
/*侧导航*/
$(function () {
    //banner跳转
    $('.main_image ul li a').click(function () {
        var a = $(this).attr('data-anchor');
        if (a !== '')
            $('html,body').animate({ scrollTop: $('#' + a).offset().top - 88 }, 500);
    });

    //侧导航
    $('.catalog-list li').click(function () {
        var a = $(this).attr('data-anchor');
        $('html,body').animate({ scrollTop: $('#' + a).offset().top - 88 }, 500);
        $(this).addClass('hover').siblings().removeClass('hover');
    });
    $(window).scroll(function () { 
        if($(document).scrollTop()>=510){
            $(".dingwei-dai").show();
        }else{
            $(".dingwei-dai").hide();
        }
    });
    /*NCI导航楼层*/
    var goTo = $('.dai-d')
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop() + 88;
        var indextemp = -1;
        var childlen = 0;
        var childNum = 0;
        goTo.each(function () {
            childNum = $(this).offset().top;
            childNum = Math.floor(childNum);

            if (scrolls >= childNum) {
                ++indextemp;
                childlen = $(this).offset().top;

            } else {
                return false;
            };
        });
        if (indextemp < 0) {
            indextemp = 0;
            
        }
        //console.log("index=" + index + ",indextemp=" + indextemp + ",scrollsH=" + scrolls + ",offsetTopH=" + childlen);
        var selectObj = $('.catalog-list li').removeClass("hover").eq(indextemp);
        //alert(indextemp)
        selectObj.addClass("hover");
        leftView(selectObj);
        return;
    });
    var slen = 0;
    function leftView(objId) {
        var ele = objId.get(0);
        var div = $(".catalog-list");
        var domObj = div.get(0);   //DOM对象
        var scrollHeight = domObj.scrollHeight;
        var height = domObj.clientHeight;//当前窗口的高度
        var scrolltopNum = scrollHeight - height;
        var eleTop = ele.offsetTop;
        if (eleTop / 2 >= height) {
            slen = scrolltopNum;
        } else {
            slen = eleTop <= 88 ? 0 : eleTop - 88;
        }
        div.stop().animate({ scrollTop: slen }, 300, "swing");
    };
});