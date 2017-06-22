/*判断document body width*/
var screenW = 0,screenH = 0;
function screenSize(){
	if(window.innerHeight){
		screenH = window.innerHeight;
	}else if((document.body) && (document.body.clientHeight)){
		screenH = document.body.clienHeight;
	}
	if(window.innerWidth){
		screenW = window.innerWidth;
	}else if((document.body) && (document.body.clientWidth)){
		screenW = document.body.clienWidth;
	}
	if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		screenW = document.documentElement.clientWidth;
		screenH = document.documentElement.clientHeight;
	}
}

/*首页案例展示赞 数据交互*/
function anlidigone() {
    $(".list-2 a.dig").click(function() {
        var vthis = $(this);
        var id = vthis.data('id');
        $.ajax({
            type: "post",
            url: "/php/case_count.php", //计数+1
            data: { id: id },
            dataType: "json",
            success: function(returndata) {
                // var returndata = eval("("+returndata+")");
                if (returndata.status == 1) {
                    qfnum = parseInt(returndata.num);
                    $dignum = vthis.parent().find("span.number").html(qfnum);
                    setTimeout(function() { vthis.parent().find("span.digone").removeAttr("style") }, 550);
                    vthis.parent().find("span.digone").show().animate({ top: "10%", opacity: "0" }, 500);
                };

            }
        });
    });
}

/*内案例展示赞 数据交互*/
function anlidigone1(){
	$(".list-12 a.dig").click(function(){
		var vthis = $(this);
		var id = vthis.data('id');
		$.ajax({
		type:"post",
		url:"/php/case_count.php",		//计数+1
		data: {id: id},
		dataType:"json",
		success:function(returndata){
			// var returndata = eval("("+returndata+")");
			if (returndata.status == 1) {
				qfnum = parseInt(returndata.num);
				$dignum = vthis.parent().find("span.number").html(qfnum);
				setTimeout(function(){vthis.parent().find("span.digone").removeAttr("style")},550);
				vthis.parent().find("span.digone").show().animate({top:"10%",opacity:"0"},500);
			};
		}
    });
	})
}

//用户好评滚动
function usercommentscroll(){
	var scrtime;
	$(".comments-scroll").hover(function(){
		clearInterval(scrtime);
	},function(){
	scrtime = setInterval(function(){
		var $ul = $(".comments-scroll ul");
		var liHeight = $ul.find("li:last").height();
		$ul.animate({marginTop : liHeight + 0 + "px"},1000,function() {
		    $ul.find("li:last").prependTo($ul);
		$ul.find("li:first").hide();
		$ul.css({marginTop:0});
		$ul.find("li:first").fadeIn(1000);
		});
	},6000);
	}).trigger("mouseleave");
}

//荣誉滚动
function rongyuscroll(){
	var scrtime;
	$(".rongyu-scroll").hover(function(){
		clearInterval(scrtime);
	},function(){
	scrtime = setInterval(function(){
		var $ul = $(".rongyu-scroll ul");
		var liHeight = $ul.find("li:last").height();
		$ul.animate({marginTop : -liHeight + 0 + "px"},500,function() {
		    $ul.find("li:first").appendTo($ul);
		$ul.css({marginTop:0});
		});
	},2000);
	}).trigger("mouseleave");
}

/*sevice tel*/
function sevicepopwindow() {
    $(".sevicetools-list li.tel div.t").click(function() {
        if ($(this).parent().hasClass("telon")) {
            $(this).parent().removeClass("telon");
            $(".sevicetools-list li.tel .tel-pop").removeClass("tel-popshow");
        } else {
            $(this).parent().addClass("telon");
            $(".sevicetools-list li.tel .tel-pop").addClass("tel-popshow");
        }
    });

    $(".sevicetools-list li.tel .btn-tel").click(function() {
        var tel = $(".sevicetools-list input[name=sevice-tel]").val();
        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        var isPhone = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
        if (!isMobile.test(tel) && !isPhone.test(tel)) {
            alert("请正确填写电话号码，例如:18511111111或0411-11111111");
        } else {
            $.ajax({
                type: "post",
                url: "/php/jietongkefu.php",
                data: { telephone: tel },
                success: function(data) {
                    if (data == "success") {
                        $(".sevicetools-list li.tel .tel-pop .success").fadeIn();
                    } else {
                        $(".sevicetools-list li.tel .tel-pop .wrong").fadeIn();
                        setTimeout(function() { $(".sevicetools-list li.tel .tel-pop .wrong").fadeOut(); }, 3000);
                    }
                }
            });
        }
    });
}

/*sevice tel submit*/
function sevicetelsubmit() {
    $(".telblock a.telsubmit").click(function() {
        var tel = $(".telblock input[name=sevice-tel]").val();
        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        var isPhone = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
        if (!isMobile.test(tel) && !isPhone.test(tel)) {
            alert("请正确填写电话号码，例如:18511111111或0411-11111111");
        } else {
            $.ajax({
                type: "post",
                data: { telephone: tel },
                url: "/php/jietongkefu.php",
                success: function(data) {
                    if (data == "success") {
                        $(".telblock .top").hide();
                        $(".telblock .bottom").hide();
                        $(".telblock .success").fadeIn();
                    } else {
                        $(".telblock .top").hide();
                        $(".telblock .bottom").hide();
                        $(".telblock .wrong").fadeIn();
                        setTimeout(function() {
                            $(".telblock .top").fadeIn();
                            $(".telblock .bottom").fadeIn();
                            $(".telblock .wrong").hide();
                        }, 3000);
                    }
                }
            });
        }
        //alert(tel);
    });
}

/*question1000*/
function question1000() {
    $(".question-submit").click(function() {
        var question = $("input[name=question1000]").val();
        if (question == '') {
            $(".txt-1").fadeIn().html("请输入问题");
            setTimeout(function() {
                $(".txt-1").fadeOut();
                $(".txt-1").html()
            }, 3000);
            return false;
        } else {
            $.ajax({
                type: "post",
                url: "/php/question.php",
                data: { question: question },
                success: function(data) {
                    if (data == "ok") {
                        $(".txt-1").fadeIn().html("提交成功，我们的技术人员会尽快帮您解答。");
                        setTimeout(function() {
                            $(".txt-1").fadeOut();
                            $(".txt-1").html();
                            $("input[name=question1000]").val('');
                        }, 3000);
                    } else {
                        $(".txt-1").fadeIn().html("提交失败，请重新提交。");
                        setTimeout(function() {
                            $(".txt-1").fadeOut();
                            $(".txt-1").html()
                        }, 3000);
                    }
                }
            });
        }
    });
}

/*order*/
function orderform() {
    $("#order").click(function() {
        var productcate = $(".form-order select option:selected").text();
        var name = $(".form-order input[name=name]").val();
        var tel = $(".form-order input[name=tel]").val();
        var qq = $(".form-order input[name=qq]").val();
        if (name == '') {
            $(".form-order input[name=name]").addClass("wrongtop");
        } else {
            $(".form-order input[name=name]").removeClass("wrongtop");
        }
        if (tel == '') {
            $(".form-order input[name=tel]").addClass("wrongtop");
        } else {
            $(".form-order input[name=tel]").removeClass("wrongtop");
        }
        if ($(".form-order input[name=name]").hasClass("wrongtop") || $(".form-order input[name=tel]").hasClass("wrongtop")) {
            return false;
        } else {

            $.ajax({
                url: "/php/websiteorder.php",
                type: "post",
                //dataType:"json",
                beforeSend: function() {
                    $(".orderloading").show();
                },
                data: { pdt_name: productcate, name: name, telephone: tel, qq: qq },
                success: function(data) {
                    if (data == "success") {
                        $(".orderloading").hide();
                        $(".form-order").hide();
                        $(".ordersuccess").fadeIn();
                        $(".ordersuccess .txt1 span").html(productcate);
                    } else {
                        $(".orderloading").hide();
                        $(".form-order").hide();
                        $(".orderwrong").fadeIn();
                        setTimeout(function() {
                            $(".orderwrong").hide();
                            $(".form-order").fadeIn();
                        }, 3000);
                    }
                }
            });


        }
    });
}

/*editblock clear style*/
function editclearstyle(){
	var editbc = $(".edit-block ");
    editbc.find("p").each(function() {
        $(this).removeAttr('style');
    });
    editbc.find("table").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
        $(this).attr('width', '100%');
        $(this).css("font-size", 14);
    });
    editbc.find("table td").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
    });
    editbc.find("table tr").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
    });
    editbc.find("img").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
        $(this).wrap("<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center'></td></tr></table>");
    });
    editbc.find("iframe").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
    });
    editbc.find("embed").each(function() {
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        $(this).removeAttr('style');
    });
}

/*submit data*/
function datasubmit(){
	var uname = $(".form_online-message1 input[name='uname']").val();
	var jiguan = $(".form_online-message1 input[name='jiguan']").val();
	var company = $(".form_online-message1 input[name='company']").val();
	var address = $(".form_online-message1 input[name='address']").val();
	var zhiwu = $(".form_online-message1 input[name='zhiwu']").val();
	var hangye = $(".form_online-message1 input[name='hangye']").val();
	var phone = $(".form_online-message1 input[name='phone']").val();
	var fax = $(".form_online-message1 input[name='fax']").val();
	var qq = $(".form_online-message1 input[name='qq']").val();
	var email = $(".form_online-message1 input[name='email']").val();
	var website = $(".form_online-message1 input[name='website']").val();
	var sex = $(".form_online-message1 select[name='sex']").find("option:selected").text();
	var zhiwu1 = $(".form_online-message1 select[name='zhiwu']").find("option:selected").text();

    $.ajax({
        url: "submit.php",
        type: "POST",
        data: { uname: uname, jiguan: jiguan, company: company, address: address, zhiwu: zhiwu, hangye: hangye, phone: phone, fax: fax, qq: qq, email: email, website: website, sex: sex, zhiwu1: zhiwu1 },
        success: function(data) {
            if (data == "pass") {
                $(".online-blockmessage1 .success-show").show();
            } else {
                $(".online-blockmessage1 .wrong-show").show();
            }
        },
        error: function() {
            $(".online-blockmessage1 .wrong-show .txt").html("验证码或者网络错误，预约失败。");
            $(".online-blockmessage1 .wrong-show").show();
        }
    });

}

/*onlinemessage*/
function onlinemessage() {
    $(".zoompopwindow").click(function() {
        /*
		var uname = $(".initial-show input[name='uname']").val();
		var uphone = $(".initial-show input[name='sfz']").val();
		var ucommend = $(".initial-show input[name='ucommend']").val();
		var ucode = $(".initial-show input[name='ucode']").val();
		if(uname ==""){
			$(".initial-show input[name='uname']").addClass("input_textip");
		}else{
			$(".initial-show input[name='uname']").removeClass("input_textip");
		}
		if(uphone == ""){
			$(".initial-show input[name='sfz']").addClass("input_textip");
		}else{
			$(".initial-show input[name='sfz']").removeClass("input_textip");
		}
		if(ucode == ""){
			$(".initial-show input[name='ucode']").addClass("input_textip");
		}else{
			$(".initial-show input[name='ucode']").removeClass("input_textip");
		}
		*/

        $("#zoomscroll").addClass("loaded").animate({ opacity: 1 }, 300);;
        $(document.body).addClass("noscroll");
        datasubmit();
    });
    $(".zoomscrollblockclose").click(function() {
        $("#zoomscroll").animate({ opacity: 0 }, 100);
        setTimeout(function() { $('#zoomscroll').removeClass('loaded') }, 200);
        $(document.body).removeClass("noscroll");
        $(".initial-show input").val("");
        $(".online-blockmessage1 .success-show").hide();
        $(".online-blockmessage1 .wrong-show").hide();
    });
}

/*列均分*/
function thumbnailist(thumbblcok,thumbul){
	var listwidth = $(thumbblcok).width();
	var listliamargin = $(thumbul+" li div").css("marginRight");
	$(thumbul).css("width",listwidth+parseInt(listliamargin));
	$(window).resize(function(){thumbnailist(thumbblcok,thumbul);});
}

//幻灯片缩略图
function hs() {
    $(".sliderbanner2 .owl-page").each(function(i) {
        if ($(this).hasClass("active")) {
            var inum = $(this).find("span").html();
            inum = parseInt(inum);
            $(".list-2 li:nth-child(" + inum + ")").addClass("on");
            $(".list-2 li:nth-child(" + inum + ")").siblings().removeClass("on");
            return false;
        }
    });
}


$(document).ready(function() {

    $(".nav1 li").hover(function() {
        $(this).find("div.pop").addClass("popshow");
    }, function() {
        $(this).find("div.pop").removeClass("popshow");
    });

    $(".nav_toggle").click(function() {
        if ($(".nav1").height() == 0) {
            $(".nav1").animate({ "height": 296 }, 300);
        } else {
            $(".nav1").animate({ "height": 0 }, 300);
        }
    });
    $(window).resize(function() {
        screenSize();
        if (300 < screenW && screenW < 549) {
            $(".header2 .nav").css({ "height": 36 });
        } else {
            $(".header2 .nav").css({ "height": 40 });
        }
    });

    /*returntop1*/
    var returntop_btn = $(".returntop");
    returntop_btn.click(function() {
        $("body,html").animate({ scrollTop: 0 }, 500);
        return false;
    });
    sevicepopwindow();
    try {
        $("input").placeholder();
        $("textarea").placeholder();
    } catch (e) {

    }
});

$(document).ready(function () {

    $(".nav_rolls li,.nav1 li").hover(function () {
        $(this).find("div.pop").addClass("popshow");
    }, function () {
        $(this).find("div.pop").removeClass("popshow");
    });

    $(".nav_toggle").click(function () {
        if ($(".nav1").height() == 0) {
            $(".nav1").animate({ "height": 296 }, 300);
        } else {
            $(".nav1").animate({ "height": 0 }, 300);
        }
    });
    $(window).resize(function () {
        screenSize();
        if (300 < screenW && screenW < 549) {
            $(".header2 .nav").css({ "height": 36 });
        } else {
            $(".header2 .nav").css({ "height": 40 });
        }
    });
});

$(document).ready(function () {
    //导航距离屏幕顶部距离
//    var _defautlTop = $(".nav_rolls").offset().top;//避免出现下面16楼所说的情况
    var _defautlTop = $(".outside").offset().top;
    //导航距离屏幕左侧距离
    var _defautlLeft = $(".nav_rolls").offset().left;
    //导航默认样式记录，还原初始样式时候需要
    var _position = $(".nav_rolls").css('position');
    var _top = $(".nav_rolls").css('top');
    var _left = $(".nav_rolls").css('left');
    var _zIndex = $(".nav_rolls").css('z-index');
    //鼠标滚动事件
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $(".nav_rolls").hide();
        } else {
            if ($(this).scrollTop() > _defautlTop) {
                $(".nav_rolls").show();
                //IE6不认识position:fixed，单独用position:absolute模拟
                //if($.browser.msie && $.browser.version=="6.0"){
                if ('undefined' == typeof (document.body.style.maxHeight)) {
                    $("#top").css({ 'position': 'absolute', 'top': eval(document.documentElement.scrollTop), 'left': _defautlLeft, 'z-index': 99999 });
                    //防止出现抖动
                    $("html,body").css({ 'background-image': 'url(about:blank)', 'background-attachment': 'fixed' });
                } else {
                    $(".nav_rolls").css({ 'position': 'fixed', 'top': -2, 'left': _defautlLeft, 'z-index': 99999 });
                }
            } else {
                $(".nav_rolls").hide();
                $(".nav_rolls").css({ 'position': _position, 'top': _top, 'left': _left, 'z-index': _zIndex });
            }
        }
    });
});

//侧导航
$(function () {
    $(window).scroll(function (event) {
        var T = $(document).scrollTop();  /*获取滚动条距离顶部的距离*/
        if (T > 0)   /*当大于0 就显示*/ {
            $(".sideNav").fadeIn();
        }
        else  /*等于0 就隐藏*/ {
            $(".sideNav").fadeOut();
        }
    });
    $(".sideNav .back").click(function (event) {
        $("body,html").stop().animate({ "scrollTop": 0 }, 100);
    });

    /*电话*/
    $('.sideNav .phoneNumber').hover(function () {
        $('.sideNav .dianhua').show(300);
    }, function () {
        $('.sideNav .dianhua').hide(300);
    });

    /*二维码*/
    $('.sideNav .erweima').hover(function () {
        $('.sideNav .weixin').show(300);
    }, function () {
        $('.sideNav .weixin').hide(300);
    });

});