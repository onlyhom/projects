

      $('.productTypes li').click(function(){ //产品类别选择
       $('.productTypes li').each(function(index,element){
          $(this).removeClass('active');
       });
         $(this).addClass('active');
      });


     $('.showPop').click(function(){ //弹窗
         $('.pop').show();
      });

     $('.closeBtn').click(function(){
         $('.pop').hide();
      });


      $('.like').click(function(){ //点赞
         $(this).toggleClass('able');
      });

     $('.hotFAQ').height($($('.hotFAQ li .active')).next().height()+100);  //热门回答
     $($('.hotFAQ li .active')).next().show();

      $('.hotFAQ li h2').click(function(){
       $('.hotFAQ li h2').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $('.hotFAQ').height(  $(this).next().height()+100  ); 
         $(this).next().fadeIn();
      });


      $('.nav li').mouseenter(function(){ //主导航分类高度变化
        $('.sortsBG').show();
        $(".sortsBG").animate({height:$(this).children('.sorts').outerHeight()},'1000');
        $('.sortsBG').height(h);
      });

      $('.nav li').mouseleave(function(){
        $('.sortsBG').hide();
      });
 





// ************ 服务详情 子导航 ************* 


// 1是默认展开，0是默认关闭，新开窗口看效果，别在原页面刷新
var default_view = 1; 




//-- stickUp导航 

   // jQuery(function($) { 
   //    $(document).ready( function() { 
   //      $('.subNav').stickUp();
   //    }); 
   //  }); 

      jQuery(function($) {
        $(document).ready( function() {
          $('.subNav').stickUp({
                        parts: {//这里与导航条对应，比较严格，不能少也不能多。
                          0:'section1',//少了导致导航栏不可用，多了不能自动滚动
                          1:'section2',
                          2:'section3'
                        },
                        itemClass: 'menuItem',
                        itemHover: 'active',
                        topMargin: 'auto'
                      });
        });
      });



   // 子导航锚点缓动
    jQuery(function($) {    
        $(".menu1").click(function() { 
            $("html,body").animate({ scrollTop:$('#section1').offset().top-50}, 800); 
            return false;    
        });  

        $(".menu2").click(function() { 
            $("html,body").animate({ scrollTop:$('#section2').offset().top-50}, 800); 
            return false;    
        });  

        $(".menu3").click(function() { 
            $("html,body").animate({ scrollTop:$('#section3').offset().top}, 800); 
            return false;    
        }); 

    });

// ************ 服务详情 子导航  END ************* 





// article切换

     $('.articles').height($($('.articles li .active')).next().height()+50);  //热门回答
     $($('.articles li .active')).next().show();

      $('.articles li h1').click(function(){
       $('.articles li h1').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $('.articles').height(  $(this).next().height()+70  ); 
         $(this).next().fadeIn();
      });