  
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


      $('.recharge .select i').click(function(){  //充值
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


      $('.notice .tagList .active').next().show();

      $('.notice .tagList h1').hover(function(){
       $('.notice .tagList h1').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $(this).next().show();
      });

   
      $('.picDownload .tagList .active').next().show();

      $('.picDownload .tagList h2').hover(function(){
       $('.picDownload .tagList h2').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $(this).next().show();
      });


      $('.profession .tagList .active').next().show();

      $('.profession .tagList h2').hover(function(){
       $('.profession .tagList h2').each(function(index,element){
          $(this).removeClass('active');
          $(this).next().hide();
       });
         $(this).addClass('active');
         $(this).next().show();
      });
