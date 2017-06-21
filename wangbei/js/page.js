
$('.indexMiddle .left .textList').eq(0).show();

$('.indexMiddle .left .tag li').click(function(){
	$('.indexMiddle .left .tag li').removeClass('on');
	$('.indexMiddle .left .textList').hide();
	$(this).addClass('on');
    $('.indexMiddle .left .textList').eq($(this).index()).fadeIn();
});


$('.indexMiddle .left .textList li').hover(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});




// 明星分析师点击鼠标左右滚动
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



$('.leftMapRight .rightTable').eq(0).show();

$('.leftMapRight .leftTag li').click(function(){
  $('.leftMapRight .leftTag li').removeClass('on');
  $(this).addClass('on');

  $('.leftMapRight .rightTable').hide();
  $('.leftMapRight .rightTable').eq($(this).index()).fadeIn();
});



$('.tagContent').eq(0).show();

$('.yellowTag li').click(function(){
  $('.yellowTag li').removeClass('on');
  $(this).addClass('on');

  $('.tagContent').hide();
  $('.tagContent').eq($(this).index()).fadeIn();
});