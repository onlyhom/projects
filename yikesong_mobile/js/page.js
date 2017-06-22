
     //轮播图
      $(function () {
        new Swipe(document.getElementById('bannerBox'), {
          speed: 500,
          auto: 3000,
          callback: function () {
            var lis = $(this.element).next("ol").children();
            lis.removeClass("on").eq(this.index + 1).addClass("on");
          }
        });
      });




// 窗口弹出

$('.bookNow').click(function(){
  $('.bookWindow').addClass('popShow');
  $('.bottomMenu').hide();
});


$('.weixin').click(function(){
  if($('.bookWindow').hasClass('popShow')){
    $('.bookWindow').removeClass('popShow');
  }
  $('.codeWindow').addClass('popShow');
});

  
$('.closeButton').click(function(){
    $('.pop').removeClass('popShow');
    $('.bottomMenu').show();
});





$('.filterBar li').click(function(){
   if($(this).hasClass('on')){
     $(this).removeClass('on');
   }else{
    $('.filterBar li').removeClass('on');
    $(this).addClass('on');
   }
});


$('.toggleBtn').click(function(){
    $('.toggleBtn').toggleClass('active');
    $('.allservice').slideToggle();
});


$('.serviceTpye li').click(function(){
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
});






// 预约正则检查

function checkName(value){
   var value = value;
   if (!value) {
    $('#name').siblings('i').text('提示：名字不能为空');
    return false;
   }else{
    $('#name').siblings('i').text('');
    return true;
   }
}


function checkPhone(value){
    var phone = value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        $('#phone').siblings('i').text('提示：手机号码格式有误，请检查');
        // alert('提示：手机号码有误，请检查');
        return false; 
    }else{
        $('#phone').siblings('i').text('');
      return true;
    }
}

function checkCode(value){
   var value = value;
   if (!value) {
    $('#codeInput').siblings('i').text('提示：验证码不能为空');
    return false;
   }else{
    $('#codeInput').siblings('i').text('');
    return true;
   }
}

$('#name').blur(function(){
    checkName($(this).val());
});

$('#phone').blur(function(){
    checkPhone($(this).val());
    // alert('phone');
});

$('#codeInput').blur(function(){
   checkCode($(this).val());
});

$('#messageSubmit').click(function(){

   var isName =  checkName($('#name').val());
   var isPhone = checkPhone($('#phone').val());
   var isCodeInput = checkCode($('#codeInput').val());

    if (!isName||!isPhone||!isCodeInput) {
      alert('请把全部信息正确填写完毕哦')
      return false;
    }
  
});



//判断UC浏览器 修改特定样式
if(navigator.userAgent.indexOf('UCBrowser') > -1) {
    // alert('123');
    $('.codeWindow .popUp').css('marginTop','-35%');
    $('.bookWindow .popUp').css('marginTop','-30%');
}
