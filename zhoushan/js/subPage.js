     
     $("html,body").animate({ scrollTop:900},1200); 
     // location.hash = 'tag';

      // 动画
      // $(".banner .logo").animate({top:'0',opacity:'1'},1200); 
      // $(".banner .text").delay(300);
      // $(".banner a").delay(300);
      // $(".banner .textBottom").delay(300);
      // $(".banner .text").animate({top:'0',opacity:'1'},2100);
      // $(".banner a").animate({top:'0',opacity:'1'},1400);
      // $(".textBottom").animate({top:'0',opacity:'1'},1600);
 

      $('.nav li a').click(function(){  //导航
       $('.nav li a').each(function(index,element){
          $(this).removeClass('active');
       });
         $(this).addClass('active');
         iFrameHeight();
      });


      $('.like').click(function(){ //点赞
         $(this).toggleClass('on');
      });
 
      $('.likeBig').click(function(){ //点赞
         $(this).toggleClass('active');
      });

        $('.uploadTo').click(function(){ //上传作品滚动
            $("html,body").animate({ scrollTop:1000}, 800); 
        });


      $('.subTitle i').click(function(){  //排序导航
       $('.subTitle i').each(function(index,element){
          $(this).removeClass('on');
       });
         $(this).addClass('on');
      });



          $.fn.imgtransition = function(o){ //淡入淡出banner
            var defaults = {
              speed : 5000,
              animate : 2000
            };
            o = $.extend(defaults, o);

            return this.each(function(){
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
          speed:5000,  //图片切换时间
          animate:2000 //图片切换过渡时间
        });
      });