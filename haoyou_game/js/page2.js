  
      // $('.picList li').click(function(){
      //   $('.pop').show();
      // });

      $('.openPop').click(function(){
        $('.pop').show();
      });

      $('.closeBtn').click(function(){
          $('.pop').hide();
      });

      $('.closeButton').click(function(){
          $('.pop').hide();
      });


      $('.leftSide .subNav li').click(function(){  //左侧导航
       $(this).siblings().each(function(index,element){
          $(this).removeClass('active');
       });
         $(this).addClass('active');
      });



      $('.profession .tagList h2').hover(function(){
       $('.profession .tagList h2').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $(this).next().show();
      });



     // $('safetyIndex li')

        $(function(){ 

         var num=$('.safetyIndex .on').length;

         if(num==2){
           $('.safetyIndex li').eq(0).css('background-color','#fec346');
           $('.safetyIndex li').eq(1).css('background-color','#fec346');
           $('#safetyText').text('中');
         }else if(num==3){
           $('.safetyIndex li').css('background-color','#77b527');
           $('#safetyText').text('高');
         }else{
           $('.safetyIndex li').eq(0).css('background-color','#e00101');
           $('#safetyText').text('低');
         }

        });
