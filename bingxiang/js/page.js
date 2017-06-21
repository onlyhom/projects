    $.fn.imgtransition = function(o){
            var defaults = {
              speed : 5000,
              animate : 2000
            };
            o = $.extend(defaults, o);

            return this.each(function(){
              
              setTimeout(function () { 
                $('.banner li').eq(0).addClass('active');
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
        $('.banner').imgtransition({
          speed:6000,  //图片切换时间
          animate:1000 //图片切换过渡时间
        });
      });


      // $('.slider li').eq(0).addClass('on');
      // $('.slider li').click(function() {
      //   $('.slider li').removeClass('on');
      //   $(this).addClass('on');
      // });


      // $('.indexFeature .tag li').eq(0).addClass('on');
      // $('.featureContent ul').eq(0).show();

      // $('.indexFeature .tag li').click(function() {
      //   $(this).siblings().removeClass('on');
      //   $(this).addClass('on');

      //   $('.featureContent ul').hide();
      //   $('.featureContent ul').eq($(this).index()).fadeIn();
      // });





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





//二级导航显示

$('.headerNav li').hover(function(){
   $(this).find('.subNav').slideDown();
},function(){
 $(this).find('.subNav').slideUp();
});


$(function($) { 
    $(document).ready( function() { 
        $('.header').stickUp();
    }); 
});   

//锤子动画效果
$('.indexService li').hover(function(){
   $(this).find('i').addClass('upAndDown')
},function(){
   $(this).find('i').removeClass('upAndDown')
});




// 浏览器窗口的大小
// alert($(window).height()); 


//距离顶部的高度
// alert($(window).scrollTop());


// alert(document.getElementById("minBanner").offsetTop);


//待优化
    // $(window).scroll(function () {
    //     var a = document.getElementById("minBanner").offsetTop;
    //         if (a >= $(window).scrollTop()-$('.minBanner').height() && a < ($(window).scrollTop()+$(window).height())) {
    //                $('.minBanner').find('img').addClass('scaleTo');
    //         }
    //         else{
    //                $('.minBanner').find('img').removeClass('scaleTo');
    //         }

    // });




//检索律师 选定效果
$('.lawyerSearch ul li').click(function(){
    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
    }else{
                // alert('111');
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    }

});





// 招贤纳士


$('.recruitList li').eq(0).find('.abstract').addClass('on');
$('.recruitList li').eq(0).find('.content').show();


$('.recruitList .toggleBtn').click(function(){
    $(this).parent().toggleClass('on');
    $(this).parent().next().slideToggle();
});



// 鼠标左右滚动
  $(".goNext span").click(function() {
      var vcon = $(".viewContent");
      var offset = ($(".viewContent li").outerWidth(true)) * -1;
      vcon.stop().animate({
        left: offset
      }, "normal", function() {
        var firstItem = $(".viewContent ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left", "0px");
      });
  });

  $(".goPrev span").click(function() {
    var vcon = $(".viewContent");
    var offset = ($(".viewContent li").outerWidth(true) * -1);
    var lastItem = $(".viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
  });
