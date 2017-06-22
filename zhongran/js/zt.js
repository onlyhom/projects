
/*淋巴瘤tab*/
$(function () {
    $(".lbltabbox .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.lbltabbox .content li').hide();
        $('.lbltabbox .content li:eq(' + index + ')').show();
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.lbltabbox .tab a').length;
        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.lbltabbox .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('.lbltabbox .content ul li:eq(' + number + ')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.lbltabbox').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.lbltabbox').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }
});
/*淋巴瘤成功案例*/
$(function () {
    //直接显示遮罩效果开始
    $(".lb_con").hover(function () {
        $(this).find(".lb_txt").css("display", "block");
    }, function () {
        $(this).find(".lb_txt").css("display", "none");
    });
    $(".lb_con2").hover(function () {
        $(this).find(".lb_txt2").css("display", "block");
    }, function () {
        $(this).find(".lb_txt2").css("display", "none");
    });
    //直接显示遮罩效果结束

});
/*视网膜母细胞瘤查看更多*/
$( function(){
$(document).ready(function () {
    $(".sw_more_ct").hide();
    $("#silong").click(function () {
        if ($(".sw_more_ct").is(":hidden")) {
            $('.sw_content7').height('1200px');
        } else {
            $('.sw_content7').height('910px');
        }
        $(".sw_more_ct").slideToggle();
        $(".sw_content7_jj").slideToggle();
    });
});
$(document).ready(function () {
    $(".sw_more_ct01").hide();
    $("#dnfb").click(function () {
        if ($(".sw_more_ct01").is(":hidden")) {
            $('.sw_content7').height('1200px');
        } else {
            $('.sw_content7').height('910px');
        }
        $(".sw_more_ct01").slideToggle();
        $(".sw_content7_j2").slideToggle();

        //var display = $('sw_more_ct01').css('display');
        
    });
});
});
/*黑色毒瘤疾病简介*/
$(function () {
    //从底部上升的遮罩效果开始
    $(".con").hover(function () {
        $(this).find(".txt").stop().animate({ height: "290px" }, 200);
        $(this).find(".txt h3").stop().animate({ paddingTop: "30px" }, 200);
    }, function () {
        $(this).find(".txt").stop().animate({ height: "40px" }, 200);
        $(this).find(".txt h3").stop().animate({ paddingTop: "0px" }, 200);
    })
    $(".con2").hover(function () {
        $(this).find(".txt").stop().animate({ height: "290px" }, 200);
        $(this).find(".txt h3").stop().animate({ paddingTop: "30px" }, 200);
    }, function () {
        $(this).find(".txt").stop().animate({ height: "40px" }, 200);
        $(this).find(".txt h3").stop().animate({ paddingTop: "0px" }, 200);
    });
    //从底部上升的遮罩效果结束
    //直接显示遮罩效果开始
    $(".con-two").hover(function () {
        $(this).find(".txt-two").css("display", "block");
    }, function () {
        $(this).find(".txt-two").css("display", "none");
    });
    $(".con-two1").hover(function () {
        $(this).find(".txt-two").css("display", "block");
    }, function () {
        $(this).find(".txt-two").css("display", "none");
    });
    //直接显示遮罩效果结束

});
/*tab选项卡*/
$(function () {
    $(".tab1 .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.tab1 .content li').hide();
        $('.tab1 .content li:eq(' + index + ')').show();
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.tab1 .tab a').length;
        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.tab1 .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('.tab1 .content ul li:eq(' + number + ')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.tab1').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.tab1').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }
});
$(function () {
    $(".one").hover(function () {
        $(this).find(".txt-one").show();
        $(this).find(".txt-one1").hide();
    }, function () {
        $(this).find(".txt-one").hide();
        $(this).find(".txt-one1").show();
    });
    $(".two").hover(function () {
        $(this).find("#pp").show();
        $(this).find("#pp1").hide();
    }, function () {
        $(this).find("#pp").hide();
        $(this).find("#pp1").show();
    });
    $(".three").hover(function () {
        $(this).find("#v").show();
        $(this).find("#v2").hide();
    }, function () {
        $(this).find("#v").hide();
        $(this).find("#v2").show();
    });
    $(".four").hover(function () {
        $(this).find("#i").show();
        $(this).find("#i2").hide();
    }, function () {
        $(this).find("#i").hide();
        $(this).find("#i2").show();
    });
    $(".five").hover(function () {
        $(this).find("#d").show();
        $(this).find("#d2").hide();
    }, function () {
        $(this).find("#d").hide();
        $(this).find("#d2").show();
    });
    $(".six").hover(function () {
        $(this).find("#t").show();
        $(this).find("#t2").hide();
    }, function () {
        $(this).find("#t").hide();
        $(this).find("#t2").show();
    });
});