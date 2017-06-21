    $.fn.imgtransition = function(o){
            var defaults = {
              speed : 5000,
              animate : 2000
            };
            o = $.extend(defaults, o);

            return this.each(function(){
              
              setTimeout(function () { 
                $('.headerIMG li').eq(0).addClass('active');
               }, 100);

              var arr_e = $("li", this);
              arr_e.css({position: "absolute"});
              arr_e.parent().css({margin: "0", padding: "0", "list-style": "none", overflow: "hidden"});
              
              function shownext(){
                var active = arr_e.filter(".active").length ? arr_e.filter(".active") : arr_e.first();
                var next =  active.next().length ? active.next() : arr_e.first();
                active.css({"z-index": 9});
                next.css({opacity: 0.0, "z-index": 10}).addClass('active').animate({opacity: 1.0}, o.animate, function(){
                  active.removeClass('active').css({"z-index": 8});
                });
              }

              arr_e.first().css({"z-index": 9});
              setInterval(function(){
                shownext();
              },o.speed);
              
            });
      };



      $(document).ready(function(){
        $('.headerIMG').imgtransition({
          speed:6000,  //图片切换时间
          animate:1000 //图片切换过渡时间
        });
      });


      $('.slider li').eq(0).addClass('on');
      $('.slider li').click(function() {
        $('.slider li').removeClass('on');
        $(this).addClass('on');
      });


      $('.indexFeature .tag li').eq(0).addClass('on');
      $('.featureContent ul').eq(0).show();

      $('.indexFeature .tag li').click(function() {
        $(this).siblings().removeClass('on');
        $(this).addClass('on');

        $('.featureContent ul').hide();
        $('.featureContent ul').eq($(this).index()).fadeIn();
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






$('.tagContent').eq(0).show();

$('.yellowTag li').click(function(){
  $('.yellowTag li').removeClass('on');
  $(this).addClass('on');

  $('.tagContent').hide();
  $('.tagContent').eq($(this).index()).fadeIn();
});





// 留言正则检查



function checkName(value){
   var value = value;
   if (!value) {
    alert('名字不能为空');
    return false;
   }else{
    return true;
   }
}


function checkMessage(value){
   var value = value;
   if (!value) {
    alert('留言不能为空');
    return false;
   }else{
    return true;
   }
}


function checkPhone(value){
    var phone = value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请检查");  
        return false; 
    }else{
      return true;
    }
}


function checkCode(value){
    var codeInput = value;
    if(!(/^\d{4}$/.test(codeInput))){ 
        alert("验证码格式有误，请检查");  
        return false; 
    }else{
        return true;
    }
}




$('#name').blur(function(){
    checkName($(this).val());
});

$('#phone').blur(function(){
    checkPhone($(this).val());
});

$('#messageContent').blur(function(){
    checkMessage($(this).val());
});

$('#codeInput').blur(function(){
   checkCode($(this).val());
});


$('.messageSubmit').click(function(){

   var isName=  checkName($('#name').val());
   var isPhone= checkPhone($('#phone').val());
   var isMessageContent= checkMessage($('#messageContent').val());
   var isCodeInput= checkCode($('#codeInput').val());

    if (!isName||!isPhone||!isMessageContent||!isCodeInput) {
      return false;
    }
  
});