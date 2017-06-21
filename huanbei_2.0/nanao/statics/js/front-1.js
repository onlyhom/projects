//弹窗变量
var boxy = null;

//切换搜索类型选项框
function changeCity(id)
{
    $('.address_name').removeClass('activity');
	$('#city_'+id).addClass('activity');
	
	$('.address_info').addClass('hidden');
	$('#address_'+id).removeClass('hidden');
}

//切换职位需求
function showJobRequirement(job_id)
{
	$('.job_requirement').find('.arrow').addClass('hidden');
	$('.job_requirement').find('.arrow_'+job_id).removeClass('hidden');
	
	$('.job_requirement').find('.job_requirement_content').addClass('hidden');
	$('.job_requirement').find('.job_requirement_content_'+job_id).removeClass('hidden');
}

//切换qq暂时
function footerQQSwitch()
{
	var is_open = $('.icon_footer_qq_1').css('display');
	if ('none' == is_open) {
		$('.icon_footer_qq_list').removeClass('hidden');
	} else {
		$('.icon_footer_qq_list').addClass('hidden');
	}
}

function isMobile() {
    var result = true;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        result = false;
    }
    return result;
}