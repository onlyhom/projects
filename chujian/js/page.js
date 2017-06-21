

//头部轮播图
$(document).ready(function(){
    $('.bannerSlide').flicker({
        arrows: true,
        arrows_constraint: false,
        auto_flick: true,
        auto_flick_delay: 7,
        block_text: true,
        dot_alignment: 'center',
        dot_navigation: true,
        flick_animation: 'transform-slide',
        flick_position: 1,
        theme: 'light'
    });
});




    $(".right-fdd2 li.nn4 a").click(function() {
      $('body,html').animate({scrollTop: 0},1000);
      return false;
    });





//手机端导航
  $('.navbar-toggle').click(function(){
     $('#navBG').fadeToggle(); 
  });







// 婚礼作品点击鼠标左右滚动
  $(".worksText .goNext span").click(function() {
      var vcon = $(".worksText .viewContent");
      var offset = ($(".worksText .viewContent li").outerWidth()) * -1;
      vcon.stop().animate({
        left: offset
      }, "normal", function() {
        var firstItem = $(".worksText .viewContent ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left", "0px");
      });
  });

  $(".worksText .goPrev span").click(function() {
    var vcon = $(".worksText .viewContent");
    var offset = ($(".worksText .viewContent li").outerWidth() * -1);
    var lastItem = $(".worksText .viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
  });





// 婚礼视频点击鼠标左右滚动
  $(".weddingVideo .goNext span").click(function() {
      var vcon = $(".weddingVideo .viewContent");
      var offset = ($(".weddingVideo .viewContent li").outerWidth()) * -1;
      vcon.stop().animate({
        left: offset
      }, "normal", function() {
        var firstItem = $(".weddingVideo .viewContent ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left", "0px");
      });
  });

  $(".weddingVideo .goPrev span").click(function() {
    var vcon = $(".weddingVideo .viewContent");
    var offset = ($(".weddingVideo .viewContent li").outerWidth() * -1);
    var lastItem = $(".weddingVideo .viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
  });



// 婚礼资讯点击鼠标左右滚动
  $(".information .goNext span").click(function() {
      var vcon = $(".information .viewContent");
      var offset = ($(".information .viewContent li").outerWidth()) * -1;
      vcon.stop().animate({
        left: offset
      }, "normal", function() {
        var firstItem = $(".information .viewContent ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left", "0px");
      });
  });

  $(".information .goPrev span").click(function() {
    var vcon = $(".information .viewContent");
    var offset = ($(".information .viewContent li").outerWidth() * -1);
    var lastItem = $(".information .viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
  });



//弹出视频窗口
  $('.weddingVideo i').click(function(){
      $('.pop').show();
  });

//窗口关闭按钮
  $('.closeButton').click(function(){
      $('.pop').hide();
  });









// 婚礼作品ABCD等标签 点击特效切换
$('.worksText li').click(function(){
  $(this).siblings().each(function(index,element){
      $(this).removeClass('on');
  });
  $(this).addClass('on');
});

// 默认显示婚礼作品大图中第一张图片
$('.fullPic li').eq(0).show();





// 首页的婚礼作品 ABCDEF 对应作品图片切换


$(function(){

    for (var i=0; i < $('.fullPic li').length; i++) {
      $('.fullPic li').eq(i).addClass('mapPic-'+i);
    };
    
    for (var j=0; j < $('.worksText li').length; j++) {
      $('.worksText li').eq(j).addClass('mapIndex-'+j);
    };

    $('.worksText li').click(function(){
        for (var k = 0; k < $('.worksText li').length; k++) {
           if($(this).hasClass('mapIndex-'+k)){
             $('.fullPic li').hide();
             $('.mapPic-'+k).fadeIn();
             break;
           };
        };
    });

});









//手机端时 最新动态的特效会改变
$(function(){  

  if($(window).width()<=768){
   // $('.newsEvent .thumbnail').each(function(index,element){
   //    $(this).removeClass('imghvr-cube-right');
   //    $(this).addClass('imghvr-strip-shutter-right');
   // });
  }  
});



$(function() {
  $(".indexLatest .goNext span").click(function() {
    var vcon = $(".indexLatest .viewContent");
    var offset = ($(".indexLatest .viewContent li").outerWidth()) * -1;
    vcon.stop().animate({
      left: offset
    }, "slow", function() {
      var firstItem = $(".indexLatest .viewContent ul li").first();
      vcon.find("ul").append(firstItem);
      $(this).css("left", "0px");
      latest()
    })
  });

  function latest() {
    var currentItem = $(".indexLatest .viewContent ul li").first();
    var currentIndex = currentItem.attr("index");
    $(".indexLatest .latest li").removeClass("latest-on");
    $(".indexLatest .latest li").eq(currentIndex).addClass("latest-on")
  }

  $(".indexLatest .goPrev span").click(function() {
    var vcon = $(".indexLatest .viewContent");
    var offset = ($(".indexLatest .viewContent li").outerWidth() * -1);
    var lastItem = $(".indexLatest .viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "slow", function() {
      latest()
    })
  });
  var animateEnd = 1;
  $(".indexLatest .latest li").click(function() {
    if (animateEnd == 0) {
      return
    }
    $(this).addClass("latest-on").siblings().removeClass("latest-on");
    var goNextindex = $(this).index();
    var currentindex = $(".indexLatest .viewContent li").first().attr("index");
    var curr = $(".indexLatest .viewContent li").first().clone();
    if (goNextindex > currentindex) {
      for (var i = 0; i < goNextindex - currentindex; i++) {
        var firstItem = $(".indexLatest .viewContent li").first();
        $(".indexLatest .viewContent ul").append(firstItem)
      }
      $(".viewContent ul").prepend(curr);
      var offset = ($(".indexLatest .viewContent li").outerWidth()) * -1;
      if (animateEnd == 1) {
        animateEnd = 0;
        $(".indexLatest .viewContent").stop().animate({
          left: offset
        }, "slow", function() {
          $(".indexLatest .viewContent ul li").first().remove();
          $(".indexLatest .viewContent").css("left", "0px");
          animateEnd = 1
        })
      }
    } else {
      var curt = $(".indexLatest .viewContent li").last().clone();
      for (var i = 0; i < currentindex - goNextindex; i++) {
        var lastItem = $(".indexLatest .viewContent li").last();
        $(".indexLatest .viewContent ul").prepend(lastItem)
      }
      $(".indexLatest .viewContent ul").append(curt);
      var offset = ($(".indexLatest .viewContent li").outerWidth()) * -1;
      $(".indexLatest .viewContent").css("left", offset);
      if (animateEnd == 1) {
        animateEnd = 0;
        $(".indexLatest .viewContent").stop().animate({
          left: "0px"
        }, "slow", function() {
          $(".indexLatest .viewContent ul li").last().remove();
          animateEnd = 1
        })
      }
    }
  })
});