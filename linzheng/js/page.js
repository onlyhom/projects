  $('.indexMenu li:even .text').addClass('text-right');
  $('.indexMenu li:odd .figure').addClass('text-right');

  $('.navIcon').click(function(){
     $('.nav ul').slideToggle();
  });
  
   $('.scroll').perfectScrollbar();

 $(function(){
    var toggle= 1;
    $('.navIcon').click(function(){
       if(toggle){

         $(".navIcon .layer1").rotate({animateTo:360});
         $(".navIcon .layer1").animate({opacity:'0'},150);

         $(".navIcon .layer2").rotate({animateTo:360});
         $(".navIcon .layer2").animate({opacity:'1'},320);
         toggle= 0;
       }else{
         $(".navIcon .layer2").rotate({animateTo:0});
         $(".navIcon .layer2").animate({opacity:'0'},150);

         $(".navIcon .layer1").rotate({animateTo:0});
         $(".navIcon .layer1").animate({opacity:'1'},320);
         toggle= 1;
       };
    });
 });




//弹出视频窗口
  $('.video .grayLayer').click(function(){
      $('.pop').show();
  });

//窗口关闭按钮
  $('.closeButton').click(function(){
      $('.pop').hide();
  });
