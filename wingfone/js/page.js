$(document).ready(function(){



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



    //窗口弹出
    $('.wechat').click(function(){
      $('.codeWindow').addClass('popShow');
    });

    $('.playerVideo').click(function(){
      $('.videoPop').addClass('popShow');
    });

    $('.closeButton').click(function(){
        $('.pop').removeClass('popShow');
        try{
            player;
            player.pause();
        }catch (e){

        }

    });


    $('.headerNav li').hover(function(){
        $(this).find('.productNav').addClass('productNav-show');
    },function(){
        $(this).find('.productNav').removeClass('productNav-show');
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


});


