// JavaScript Document
$(function() {
    var bnumber = 1;
    $("#btn" + bnumber).addClass("on").siblings().removeClass("on");
    function bannerHide() {
        $("#" + bnumber + "").show();
        var nextB = bnumber + 1;
        if (nextB > 3)
            nextB = 1;
        var prevB = bnumber - 1;
        if (prevB < 1)
            prevB = 3;

        $("#" + nextB + "").hide();
        $("#" + prevB + "").hide();
        $("#btn" + bnumber).addClass("on").siblings().removeClass("on");
    }

    function autoBanner() {
        //number == maxNumber ? number = 0 : number;
        if (bnumber > 3)
            bnumber = 1;
        bannerHide();
        bnumber++;
    }

    //autoBanner();
    var tabChange = setInterval(autoBanner, 3000);
    $(".outsideIndexBanner").mouseover(function() {
        clearInterval(tabChange);
    });
    $(".outsideIndexBanner").mouseout(function() {
        tabChange = setInterval(autoBanner, 3000);
    });
    $(".next").click(function() {
        bnumber++;
        if (bnumber > 3)
            bnumber = 1;
        bannerHide();
    });
    $(".prev").click(function() {
        bnumber--;
        if (bnumber < 1)
            bnumber = 3;
        bannerHide();
    });
    $("#btn1").click(function() {
        bnumber = 1;
        autoBanner();
    });
    $("#btn2").click(function() {
        bnumber = 2;
        autoBanner();
    });
    $("#btn3").click(function() {
        bnumber = 3;
        autoBanner();
    });
});

//head搜素
$(function () {
    $(".input1").focus(function (event) {
        if ($(this).val() == "请输入搜索内容")  /*判断*/ {
            $(this).val("").addClass('font1');  /*输入文字后颜色变黑 */
        }
    }).blur(function (event) {
        if ($(this).val() == "")   /*判断是不是为空*/ {
            $(this).val("请输入搜索内容").removeClass('font1');
        }
    });
});

// part3图片阴影

$(document).ready(function () {
    $(".indexPart3 .bd li a").hover(function () {
        $(this).siblings(".mas,.op").stop().animate({
            bottom: -80
        }, 200);
    }, function () {
        $(this).siblings(".mas,.op").stop().animate({
            bottom: -0
        }, 200);

    });
});


//--part6 咨询和体检 切换
$(document).ready(function () {
    $(".hd li").click(function (event) {
        $(".part6Right .part6RightDIV").eq($(this).index()).show().siblings().hide();
    });
});

//--part6右边 专家咨询 切换
$(document).ready(function () {
    $(".tab li").click(function (event) {
        $(this).addClass('current').siblings().removeClass('current');
        $(".tabDiv ul").eq($(this).index()).show().siblings().hide();
    });
});

//indexpart8

$(document).ready(function () {
    $(".op").fadeTo(0, 0.5);
    $(".show-list a").hover(function () {
        $(this).siblings(".mas,.op").stop().animate({ bottom: -80 }, 200)
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "0.5" })
    }, function () {
        $(this).siblings(".mas,.op").stop().animate({ bottom: -0 }, 200);
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "1" })
    });
    $(".sh a").hover(function () {
        $(this).siblings(".mas,.op").stop().animate({ top: -80 }, 200)
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "0.5" })
    }, function () {
        $(this).siblings(".mas,.op").stop().animate({ top: -0 }, 200);
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "1" })
    });
    $(".hz a").hover(function () {
        $(this).siblings(".mas,.op").stop().animate({ top: -80 }, 200)
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "0.5" })
    }, function () {
        $(this).siblings(".mas,.op").stop().animate({ top: -0 }, 200);
        $(this).parent().siblings(".show-list").stop().animate({ opacity: "1" })
    });

});

//indexpart9
$(document).ready(function () {
    $(".part9Right li").hover(function () {
        $(this).siblings().stop().fadeTo(500, 0.4);
    }, function () {
        $(".part9Right li").stop().fadeTo(500, 1);
    });
});

//组织机构
$(function () {
    $(".list1").hover(function () {
        $(this).siblings(".dongshi").show();
    }, function () {
        $(this).siblings(".dongshi").hide();
    });
    $(".list2").hover(function () {
        $(this).siblings(".zongcai").show();
    }, function () {
        $(this).siblings(".zongcai").hide();
    });
    $(".list3 .li_01").hover(function () {
        $(this).parents().siblings(".fzcLeft").show();
    }, function () {
        $(this).parents().siblings(".fzcLeft").hide();
    });
    $(".list3 .li_02").hover(function () {
        $(this).parents().siblings(".fzcRight").show();
    }, function () {
        $(this).parents().siblings(".fzcRight").hide();
    });
    //左5
    $(".list4 .li_01").hover(function () {
        $(this).parents().siblings(".yxb").show();
    }, function () {
        $(this).parents().siblings(".yxb").hide();
    });
    $(".list4 .li_02").hover(function () {
        $(this).parents().siblings(".fyb").show();
    }, function () {
        $(this).parents().siblings(".fyb").hide();
    });
    $(".list4 .li_03").hover(function () {
        $(this).parents().siblings(".yfb").show();
    }, function () {
        $(this).parents().siblings(".yfb").hide();
    });
    $(".list4 .li_04").hover(function () {
        $(this).parents().siblings(".hwb").show();
    }, function () {
        $(this).parents().siblings(".hwb").hide();
    });
    $(".list4 .li_05").hover(function () {
        $(this).parents().siblings(".mg").show();
    }, function () {
        $(this).parents().siblings(".mg").hide();
    });
    //右5
    $(".list5 .li_06").hover(function () {
        $(this).parents().siblings(".hr").show();
    }, function () {
        $(this).parents().siblings(".hr").hide();
    });
    $(".list5 .li_07").hover(function () {
        $(this).parents().siblings(".cwb").show();
    }, function () {
        $(this).parents().siblings(".cwb").hide();
    });
    $(".list5 .li_08").hover(function () {
        $(this).parents().siblings(".scb").show();
    }, function () {
        $(this).parents().siblings(".scb").hide();
    });
    $(".list5 .li_09").hover(function () {
        $(this).parents().siblings(".sjb").show();
    }, function () {
        $(this).parents().siblings(".sjb").hide();
    });
    $(".list5 .li_10").hover(function () {
        $(this).parents().siblings(".wlb").show();
    }, function () {
        $(this).parents().siblings(".wlb").hide();
    });
});

//核心团队
$(document).ready(function () {
    $(".teamTab1 li").mouseenter(function (event) {
        $(this).addClass('aNow').siblings().removeClass('aNow');
        $(".teamCont1 ul").eq($(this).index()).show().siblings().hide();
    });
    $(".teamTab2 li").mouseenter(function (event) {
        $(this).addClass('aNow').siblings().removeClass('aNow');
        $(".teamCont2 ul").eq($(this).index()).show().siblings().hide();
    });
    $(".teamTab3 li").mouseenter(function (event) {
        $(this).addClass('aNow').siblings().removeClass('aNow');
        $(".teamCont3 ul").eq($(this).index()).show().siblings().hide();
    });
    $(".teamTab4 li").mouseenter(function (event) {
        $(this).addClass('aNow').siblings().removeClass('aNow');
        $(".teamCont4 ul").eq($(this).index()).show().siblings().hide();
    });
});

//国外专家远程咨询与服务
$(document).ready(function () {
    $(".tab li").mouseenter(function (event) {
        $(this).addClass('liNow').siblings().removeClass('liNow');
        $(".cont ul").eq($(this).index()).show().siblings().hide();
    });
});

$(document).ready(function () {
    $(".contDiv h4").click(function (event) {
        $(this).parent().addClass('list-now').siblings().removeClass('list-now');
        $(this).siblings('.txt').slideDown().parent().siblings().children('.txt').slideUp();
    });
});

//国外医院 搜索
$(function () {
    $(".search2").focus(function (event) {
        if ($(this).val() == "查找疾病或医院")  /*判断*/ {
            $(this).val("").addClass('font1');  /*输入文字后颜色变黑 */
        }
    }).blur(function (event) {
        if ($(this).val() == "")   /*判断是不是为空*/ {
            $(this).val("查找疾病或医院").removeClass('font1');
        }
    });
});

//国外医院 展开
$(document).ready(function () {
    $(".hospitalCon .more").click(function (event) {
        $(this).siblings().height(1980);
        $(this).hide();
    });
});

//各个医院展开
$(document).ready(function () {
    $(".hospitalCon4 .more").click(function (event) {
        $(this).siblings().height(520);
        $(this).hide();
    });
});

//问答
$(document).ready(function () {
    $(".askCon .more").click(function (event) {
        $(this).siblings("p").height(180);
        $(this).hide();
    });
});

//问答2
$(document).ready(function () {
    $(".open a").click(function (event) {
        $(this).siblings().slideDown().height(auto);
        $(this).parent().siblings().children(".answer_wrap").hide();
    });
    $(".answer_wrap").mouseleave(function (event) {
        $(this).slideUp();
    });
});

//医院详细科室显示
function departmentTab() {
    $('a[id^="department_"] :eq(0)').addClass("kesi_one");
    $('p[id^="departmentdescript_"] :eq(0)').show();
    $('p[id^="departmentdescript_"] :gt(0)').hide();
    //选项卡滑动
    $('a[id^="department_"]').mouseover(function () {
        var currentId = $(this).attr("id");
        var id = currentId.replace("department_", "departmentdescript_");

        $('p[id^="departmentdescript_"]').hide();
        $("#" + id).show();
        $('a[id^="department_"]').removeClass("kesi_one");
        $("#" + currentId).addClass("kesi_one");
    });
}

$(document).ready(function () {
    departmentTab();
    //上一页
    $("#keshi_pageup").click(function () {
        var hospitalId = $("#hospitalId").val();
        var pageindex = $("#departmentPageindex").val();
        $.get("/api/AjaxPost/Department",
            { hospitalId: hospitalId, pageindex: pageindex, hasUp: true, json: true },
            function(data) {
                if (data.length > 0) {
                    $("#departmentPageindex").val(parseInt(pageindex) - 1);

                    $("#departmenttitle").empty();
                    $("#departmentdescript").empty();

                    var titlepop = [];
                    var decriptpop = [];
                    for (var i = 0; i < data.length; i++) {
                        titlepop.push("<li>");
                        titlepop.push("<a id='department_" + data[i]["id"] + "' href='javascript:void(0)'>");
                        titlepop.push(data[i]["title"]);
                        titlepop.push("</a>");
                        titlepop.push("</li>");

                        decriptpop.push("<p id='departmentdescript_" + data[i]["id"] + "' href='javascript:void(0)'>");
                        decriptpop.push(data[i]["body"]);
                        decriptpop.push("<a href='javascript:void(0)' class='dep-more' data-departmentId='" + data[i]["id"] + "'>查看详细 +</a>");
                        decriptpop.push("</p>");
                    }

                    $("#departmenttitle").html(titlepop.join(''));
                    $("#departmentdescript").html(decriptpop.join(''));

                    departmentTab();
                    moreDepartment();
                }
            });

    });
    //下一页
    $("#keshi_pagedown").click(function () {
        var hospitalId = $("#hospitalId").val();
        var pageindex = $("#departmentPageindex").val();
        $.get("/api/AjaxPost/Department",
            { hospitalId: hospitalId, pageindex: pageindex, hasUp: false, json: true },
            function (data) {
                if (data.length > 0) {
                    $("#departmentPageindex").val(parseInt(pageindex) + 1);

                    $("#departmenttitle").empty();
                    $("#departmentdescript").empty();

                    var titlepop = [];
                    var decriptpop = [];
                    for (var i = 0; i < data.length; i++) {
                        titlepop.push("<li>");
                        titlepop.push("<a id='department_" + data[i]["id"] + "' href='javascript:void(0)'>");
                        titlepop.push(data[i]["title"]);
                        titlepop.push("</a>");
                        titlepop.push("</li>");

                        decriptpop.push("<p id='departmentdescript_" + data[i]["id"] + "' href='javascript:void(0)'>");
                        decriptpop.push(data[i]["body"]);
                        decriptpop.push("<a href='javascript:void(0)' class='dep-more' data-departmentId='" + data[i]["id"] + "'>查看详细 +</a>");
                        decriptpop.push("</p>");
                    }

                    $("#departmenttitle").html(titlepop.join(''));
                    $("#departmentdescript").html(decriptpop.join(''));

                    departmentTab();
                    moreDepartment();
                }
            });
    });
});

function moreDepartment() {
    $(".dep-more").on('click', function () {
        var depid = $(this).attr("data-departmentId");
        var url = (depid === "") ?
            '/departmentDetail' :
            "/departmentDetail?departmentId=" + depid;
        layer.open({
            type: 2,
            skin: 'layui-layer-blue',
            title: '优势专科',
            fix: false,
            shadeClose: true,
            closeBtn: 2,
            area: ['600px', '750px;'],
            content: url
        });
    });
}

