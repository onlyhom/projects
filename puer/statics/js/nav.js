 $(function () {
     var st = 180;
    $('#nav_all>li').mouseenter(function () {
        $(this).find('ul').stop(false, true).slideDown(st);
        
        $(this).addClass("cur_display");
    }).mouseleave(function () {
        $(this).find('ul').stop(false, true).slideUp(st);
        $(this).removeClass("cur_display");
    });
 });

// 表单认证
$(function(){
			$("#phone").focus(function(){
				var x = $(this).val();
				if(x == "输入手机号"){
					$(this).val("")
				}
			});
			$("#phone").blur(function(){
				var x = $(this).val();
				if (x == "") {
					$(this).val("输入手机号")
				}
			});

			$("#yzm").focus(function(){
				var x = $(this).val();
				if(x == "输入验证码"){
					$(this).val("")
				}
			});
			$("#yzm").blur(function(){
				var x = $(this).val();
				if (x == "") {
					$(this).val("输入验证码")
				}
			});

			$("#name").focus(function(){
				var x = $(this).val();
				if(x == "输入姓名"){
					$(this).val("")
				}
			});
			$("#name").blur(function(){
				var x = $(this).val();
				if (x == "") {
					$(this).val("输入姓名")
				}
			});

$('.fw_wrap ul li').mouseenter(function(event) {
				/* Act on the event */
				$(this).children('.fw_wrap_l').addClass('fw_wcur');
				$(this).children('.fw_wrap_l').show();
				$(this).siblings().children('.fw_wrap_l').removeClass('fw_wcur');
				// alert("dasd");
			});
			$('.fw_wrap ul li').mouseleave(function(event) {
				/* Act on the event */
				$(this).children('.fw_wrap_l').hide();
				$(this).children('.fw_wrap_l').removeClass('fw_wcur');

			});

		});


/*
// 五大优势
$(function(){
	$(".qxwfbox").mouseenter(function(){
				$(".qxwfbox").eq($(this).index()).children(".tubox").hide().siblings(".box").show().parent(".qxwfbox").siblings(".qxwfbox").children(".tubox").show().siblings(".box").hide();
			});
	$(".qxwfbox").mouseleave(function(){
				$(".qxwfbox").eq($(this).index()).children(".tubox").show().siblings(".box").hide();
			});
})
*/
// 底部
 $(function(){
 	$(".t3").mouseenter(function(){
 		$(".t4").css({"display":"block"})
 	});
 	$(".t3").mouseleave(function(){
 		$(".t4").css({"display":"none"})
 	});
 })