
$(window).load(function(){

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


    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:5000
    });



    //获取短信验证码定时器
    // $('.acquireCode').click(function(){
    //     if($(this).hasClass('disabled')){
    //         return;
    //     }else{
    //         $(this).addClass('disabled');
    //         var t = 59;
    //         $('.acquireCode').text(t+'s后重新获取');
    //         var clock = setInterval(function(){
    //             if(t <= 1){
    //                 $('.acquireCode').text('获取验证码');
    //                 $('.acquireCode').removeClass('disabled');
    //                 clearInterval(clock);
    //                 // console.log('clearClock');
    //                 return; 
    //             }else{
    //                 t=t-1;
    //                 $('.acquireCode').text(t+'s后重新获取');
    //             }

    //          },1000);  
    //     }
    // });





    //微信弹出窗口
    $('.weixin').click(function(){
      $('.codeWindow').addClass('popShow');
    });

    $('.setBtn').click(function(){
      $('.passwordWindow').addClass('popShow');
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
        if(oRTT){
            var windowHeight=document.documentElement.clientHeight;
            var timer=null;
            var scrollTop;
            var offset = 0;//用来记录上一次的滚动值
            window.onscroll=function(){ //判断高度决定是否显示
                scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                if(scrollTop>=windowHeight){
                    if((scrollTop-offset)<0){ //向上滚
                        oRTT.style.display='block';
                    }else{ //向下滚
                        oRTT.style.display='none';
                    }
                }else{
                    oRTT.style.display='none';
                }
                offset = scrollTop;
                return scrollTop;
            };
            oRTT.onclick=function(){ //绑定单击事件
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
        }

    });



    //回收详情页的 苹果手机安全展开按钮
    $('.doYouKnow .toggleBtn').click(function(){
        $(this).toggleClass('on');
        $(this).parent().next().slideToggle();
    });



    //回收评估页的 上门回收&到店回收 选择
    $('.messageInput').eq(0).show();
    $('.selectRecycleType .imgLabel img').eq(0).hide();
    $('.selectRecycleType li').click(function(){
        if($(this).index()==0){ //控制仅限北京上海 橙色小标签的样式
            $('.selectRecycleType .layerActive').show();
            $('.selectRecycleType .imgLabel img').eq(0).hide();
        }else{
            $('.selectRecycleType .layerActive').hide(); 
            $('.selectRecycleType .imgLabel img').eq(0).show();
        }
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $('.messageInput').hide();
        $('.messageInput').eq($(this).index()).fadeIn();
    });


    //selectUI 获得焦点时边框变色

    $('.selectUI select').focus(function(){
        $(this).parent().addClass('selectUI-on');
    });

    $('.selectUI select').blur(function(){
        $(this).parent().removeClass('selectUI-on');
    });


    $(function(){
        for(var i=0; i<$('.selectUI').length; i++ ){
            var defaultVal=$('.selectUI').eq(i).find('option:selected').text();
            $('.selectUI').eq(i).find('span').text(defaultVal);
        }
    });

    $('.selectUI select').change(function(){
        var selectVal = $(this).find('option:selected').text();
        $(this).siblings('span').text(selectVal);
    });



    // ul选中样式(右下角有个蓝色小勾)
    $('.selectStyle li').click(function(){
        if($(this).hasClass('disabled')){
          return;
        }else{
          $(this).siblings().removeClass('selected');
          $(this).addClass('selected'); 
        }
    });


    //新旧程度选择样式
    $('.degreeOfNew li').hover(function(){
      $('.describe').text($(this).attr('describe'));
    },function(){
      $('.describe').text($('.degreeOfNew .selected').attr('describe'));
    });


    //到店回收中的选择地址
    $('.selectRadio .disabled input[type="radio"]').click(function(){
      return false;
    });


    //真机实拍&商品详情 显示隐藏
    $('.xianzhiText .content').eq(0).show();
    $('.tagNav li').click(function(){
      $(this).siblings().removeClass('on');
      $(this).addClass('on'); 
      $('.xianzhiText .content').hide();
      $('.xianzhiText .content').eq($(this).index()).show();
    });



    //手机快修步骤页面中 点击维修方案 顶部导航调转到 02选择维修方案
    $('.repairPlan li').click(function(){
      if($('.stepNav li').eq(1).hasClass('on')){return;}
      $('.stepNav li').removeClass('on');
      $('.stepNav li').eq(1).addClass('on');
    });


});