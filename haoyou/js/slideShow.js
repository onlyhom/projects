

$(function() {
  $(".next a").click(function() {
    nextscroll()
  });

  function nextscroll() {
    var vcon = $(".slideContent ");
    var offset = ($(".slideContent li").width()) * -1;
    vcon.stop().animate({
      left: offset
    }, "slow", function() {
      var firstItem = $(".slideContent ul li").first();
      vcon.find("ul").append(firstItem);
      $(this).css("left", "0px");
      circle()
    })
  };

  function circle() {
    var currentItem = $(".slideContent ul li").first();
    var currentIndex = currentItem.attr("index");
    $(".circle li").removeClass("circle-cur");
    $(".circle li").eq(currentIndex).addClass("circle-cur")
  }
  $(".prev a").click(function() {
    var vcon = $(".slideContent ");
    var offset = ($(".slideContent li").width() * -1);
    var lastItem = $(".slideContent ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left", offset);
    vcon.animate({
      left: "0px"
    }, "slow", function() {
      circle()
    })
  });
  var animateEnd = 1;

  $(".circle li").click(function() {
    if (animateEnd == 0) {
      return
    }
    $(this).addClass("circle-cur").siblings().removeClass("circle-cur");
    var nextindex = $(this).index();
    var currentindex = $(".slideContent li").first().attr("index");
    var curr = $(".slideContent li").first().clone();
    if (nextindex > currentindex) {
      for (var i = 0; i < nextindex - currentindex; i++) {
        var firstItem = $(".slideContent li").first();
        $(".slideContent ul").append(firstItem)
      }
      $(".slideContent ul").prepend(curr);
      var offset = ($(".slideContent li").width()) * -1;
      if (animateEnd == 1) {
        animateEnd = 0;
        $(".slideContent").stop().animate({
          left: offset
        }, "slow", function() {
          $(".slideContent ul li").first().remove();
          $(".slideContent").css("left", "0px");
          animateEnd = 1
        })
      }
    } else {
      var curt = $(".slideContent li").last().clone();
      for (var i = 0; i < currentindex - nextindex; i++) {
        var lastItem = $(".slideContent li").last();
        $(".slideContent ul").prepend(lastItem)
      }
      $(".slideContent ul").append(curt);
      var offset = ($(".slideContent li").width()) * -1;
      $(".slideContent").css("left", offset);
      if (animateEnd == 1) {
        animateEnd = 0;
        $(".slideContent").stop().animate({
          left: "0px"
        }, "slow", function() {
          $(".slideContent ul li").last().remove();
          animateEnd = 1
        })
      }
    }
  })
})







