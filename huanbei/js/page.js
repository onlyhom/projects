
 // 移动端导航按钮
 $(function(){
    var toggle= 1;
    $('.navIcon').click(function(){
       if(toggle){

         $(".navIcon .layer1").rotate({animateTo:360});
         $(".navIcon .layer1").animate({opacity:'0'},150);

         $(".navIcon .layer2").rotate({animateTo:360});
         $(".navIcon .layer2").animate({opacity:'1'},320);
         $('.mobile-nav').slideDown('slow');
         toggle= 0;
       }else{
         $(".navIcon .layer2").rotate({animateTo:0});
         $(".navIcon .layer2").animate({opacity:'0'},150);

         $(".navIcon .layer1").rotate({animateTo:0});
         $(".navIcon .layer1").animate({opacity:'1'},320);
         $('.mobile-nav').slideUp('slow');
         toggle= 1;
       };
    });
 });





//定时器动画

var t5=setTimeout(function(){
    $('.indexBanner .flyPhone').addClass('flyPhone-animate');
    $('.indexBanner .topBar').addClass('topBar-animate');
    
    var SearchAnimate = setInterval(function(){
        if($('.searchSection').hasClass('searchSection-animate')){
            clearInterval(SearchAnimate);
            console.log('clear');
            return; 
        }else{
            var offsetValue = $('.indexSearch').offset().top;
            var heightValue = $('.indexSearch').height();
             if (offsetValue >= $(window).scrollTop()-heightValue-20 && offsetValue < ($(window).scrollTop()+heightValue-20)) {
                   $('.indexSearch').find('.searchSection').addClass('searchSection-animate');
                   $('.indexSearch').find('.figurePic').addClass('figurePic-animate');
                   console.log('yes');
            }
            else{
                  console.log('no');
            }
        }
     },300);


    // 快速下单定时动画
    var RepairAnimate = setInterval(function(){
        if($('.rightInterface').hasClass('rightInterface-animate')){
            clearInterval(RepairAnimate);
            console.log('clear2');
            return; 
        }else{
            var offsetValue = $('.indexRepair').offset().top;
            var heightValue = $('.indexRepair').height();
             if (offsetValue >= $(window).scrollTop()-heightValue-30 && offsetValue < ($(window).scrollTop()+heightValue-30)) {
                   $('.indexRepair').find('.leftText').addClass('leftText-animate');
                   $('.indexRepair').find('.indexRepairBG').addClass('indexRepairBG-animate');
                   
                   setTimeout(function(){
                        $('.indexRepair').find('.rightInterface').addClass('rightInterface-animate');
                   },500);
                   console.log('yes2');
            }
            else{
                  console.log('no2');
            }
        }
     },300);
    // 快速下单定时动画


    //精选闲置定时动画
    var ProductAnimate = setInterval(function(){
        if($('.indexProduct .leftText').hasClass('leftText-animate')){
            clearInterval(ProductAnimate);
            console.log('clear3');
            return; 
        }else{
            var offsetValue = $('.indexProduct').offset().top;
            var heightValue = $('.indexProduct').height();
             if (offsetValue >= $(window).scrollTop()-heightValue-20 && offsetValue < ($(window).scrollTop()+heightValue-20)) {
                   $('.indexProduct').find('.leftText').addClass('leftText-animate');
                   $('.indexProduct').find('.phonePicture').addClass('phonePicture-animate');
                   console.log('yes');
            }
            else{
                  console.log('no');
            }
        }
     },300);


},500);




//企业责任定时动画
var DutyAnimate = setInterval(function(){
    if($('.companyDuty li').hasClass('dutyLi-animate')){
        clearInterval(DutyAnimate);
        console.log('clear4');
        return; 
    }else{
        var offsetValue = $('.companyDuty').offset().top;
        var heightValue = $('.companyDuty').height();
         if (offsetValue >= $(window).scrollTop()-heightValue-40 && offsetValue < ($(window).scrollTop()+heightValue-40)) {

                var j =0;
                var DutyLiAnimate = window.setInterval(function(){
                    if (j<3) {
                        // console.log(j);
                        $('.companyDuty li').eq(j).addClass('dutyLi-animate');
                        j=j+1;
                    }else{
                        clearInterval(DutyLiAnimate);
                    }
                }, 300);

               console.log('yes');
        }
        else{
              console.log('no');
        }
    }
 },300);









var t8=setTimeout(function(){
    $('.indexBanner .bannerText').addClass('bannerText-animate');
},800);


var t13=setTimeout(function(){
    if(navigator.userAgent.indexOf('UCBrowser') > -1) {
        // alert('UC浏览器');
        $('.indexBanner .indexMenu li').addClass('bannerMenuLi-animate');
    }else{
        var j =0;
        var bannerMenuAnimate = window.setInterval(function(){
            if (j<3) {
                // console.log(j);
                $('.indexBanner .indexMenu li').eq(j).addClass('bannerMenuLi-animate');
                j=j+1;
            }else{
                clearInterval(bannerMenuAnimate);
            }

        }, 300);  
    }
},1400);



// 11-14增改
//首页快速下单&订单查询切换
$('.repairInput').eq(0).show();

$('.rightInterface .tag li').click(function(){
    $(this).siblings().removeClass('on');
    $(this).addClass('on');

    $('.repairInput').hide();
    $('.repairInput').eq($(this).index()).show();

});




//获取短信验证码定时器
$('#acquireCode').click(function(){
    if($(this).hasClass('disabled')){
        return;
    }else{
        $(this).addClass('disabled');
        var t = 59;
        $('#acquireCode').text(t+'s后重新获取');
        var clock = setInterval(function(){
            if(t <= 1){
                $('#acquireCode').text('获取验证码');
                $('#acquireCode').removeClass('disabled');
                clearInterval(clock);
                // console.log('clearClock');
                return; 
            }else{
                t=t-1;
                $('#acquireCode').text(t+'s后重新获取');
            }

         },1000);  
    }
});






$('.weixin').click(function(){
  $('.codeWindow').addClass('popShow');
});

  
$('.closeButton').click(function(){
    $('.pop').removeClass('popShow');
});



//返回顶部
function myEvent(obj,ev,fn){
  if(obj.attachEvent){
    obj.attachEvent('on'+ev,fn);
  }else{
    obj.addEventListener(ev,fn,false);
  }
}
myEvent(window,'load',function(){
  var oRTT=document.getElementById('returnTop');
  var pH=document.documentElement.clientHeight;
  var timer=null;
  var scrollTop;
  window.onscroll=function(){
    scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>=pH){
      oRTT.style.display='block';
    }else{
      oRTT.style.display='none';
    }
    return scrollTop;
  };
  oRTT.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
      var now=scrollTop;
      var speed=(0-now)/10;
      speed=speed>0?Math.ceil(speed):Math.floor(speed);
      if(scrollTop==0){
        clearInterval(timer);
      }
      document.documentElement.scrollTop=scrollTop+speed;
      document.body.scrollTop=scrollTop+speed;
    }, 30);
  }
});




