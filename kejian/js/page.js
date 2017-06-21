
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



$(function(){
    var n = 4;//一行有四个
    var length = Math.floor($('.aptitudeList li').length/n)+1;
    //console.log(length);
    for (var i=0; i<length; i++) {
        $('.aptitudeList li').eq(4*i).css('clear','both');
    };
});



    // banner滚动
      $(function () {
        new Swipe(document.getElementById('banner_box'), {
          speed: 500,
          auto: 2000,
          callback: function () {
            var lis = $(this.element).next("ol").children();
            lis.removeClass("on").eq(this.index + 1).addClass("on");
          }
        });
      });
      $(function () {
        new Swipe(document.getElementById('expanding_box'), {
          speed: 500,
          auto: 2000,
          callback: function () {
            var lis = $(this.element).next("ol").children();
            lis.removeClass("on").eq(this.index + 1).addClass("on");
          }
        });
      });



    //人才招聘展开按钮
    $('.slideButton').click(function(){
        $(this).toggleClass('slideOn');
        $(this).parent().next().slideToggle();
    });


    $(".nn4").click(function() {
        $('body,html').animate({scrollTop: 0},800);
        return false;
    });
    $(".nn2").hover(function() {
        $('.rightCode').addClass('rightCode-animate');
    },function(){
        $('.rightCode').removeClass('rightCode-animate');
    });







function nextScroll(content){
    var vcon = content;
    var offset = (vcon.find('li').outerWidth(true)) * -1;
    vcon.stop().animate({
      left: offset
    }, "normal", function() {
      for(var i=0;i<vcon.find('ul').length;i++){
        var firstItem = vcon.find('ul').eq(i).find('li').first();
        vcon.find("ul").eq(i).append(firstItem);
      }
      $(this).css("left", "0px");
    });
}

function preScroll(content){
    var vcon = content;
    var offset = (vcon.find('li').outerWidth(true)) * -1;
    for(var i=0;i<vcon.find('ul').length;i++){
      var lastItem = vcon.find('ul').eq(i).find('li').last();
      vcon.find("ul").eq(i).prepend(lastItem);
    }
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
}






// 工程业绩点击鼠标左右滚动
$(".information .goNext span").click(function() {
   nextScroll($(".information .viewContent"));
});

$(".information .goPrev span").click(function() {
   preScroll($(".information .viewContent"));
});


// 设备检测点击鼠标左右滚动
$(".equipment .goNext span").click(function() {
   nextScroll($(".equipment .viewContent"));
});

$(".equipment .goPrev span").click(function() {
   preScroll($(".equipment .viewContent"));
});



// 检测项目点击鼠标左右滚动
$(".testProject .goNext span").click(function() {
   nextScroll($(".testProject .viewContent"));
});

$(".testProject .goPrev span").click(function() {
   preScroll($(".testProject .viewContent"));
});




//自动播放

var autoPlay = setInterval(function(){
  nextScroll($(".information .viewContent"));
},3000);

var autoPlay2 = setInterval(function(){
  nextScroll($(".equipment .viewContent"));
},3000);

var autoPlay3 = setInterval(function(){
  nextScroll($(".testProject .viewContent"));
},3000);



$('.information').hover(function(){
　  clearInterval(autoPlay);
   // console.log('清除1');
 },function(){
    autoPlay = setInterval(function(){
      nextScroll($(".information .viewContent"));
    },3000);
 });


$('.equipment').hover(function(){
　  clearInterval(autoPlay2);
   // console.log('清除2');
 },function(){
    autoPlay2 = setInterval(function(){
      nextScroll($(".equipment .viewContent"));
    },3000);
 });

$('.testProject').hover(function(){
　  clearInterval(autoPlay3);
 },function(){
    autoPlay3 = setInterval(function(){
      nextScroll($(".testProject .viewContent"));
    },3000);
 });