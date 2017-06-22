

// 解决方案点击鼠标左右滚动
  $(".solution .goNext span").click(function() {
      var vcon = $(".solution .viewContent");
      var offset = ($(".solution .viewContent li").outerWidth()) * -1;
      vcon.stop().animate({
        left: offset
      }, "normal", function() {
        var firstItem = $(".solution .viewContent ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left", "0px");
      });
  });

  $(".solution .goPrev span").click(function() {
    var vcon = $(".solution .viewContent");
    var offset = ($(".solution .viewContent li").outerWidth() * -1);
    var lastItem = $(".solution .viewContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "normal", function() {
    })
  });






//弹出视频窗口
  $('.videoPic li').click(function(){
      $('.pop').show();
  });

//窗口关闭按钮
  $('.closeButton').click(function(){
      $('.pop').hide();
  });