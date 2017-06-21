 
     //关闭 & 取消按钮
      $('.closeButton').click(function(){
          $('.pop').hide();
      });

      $('.cancel').click(function(){
          $('.pop').hide();
      });

     //确认按钮 
      $('.checkInSuccess').click(function(){
          alert('操作成功！');
      });





// ************ 交易所 ***************


     //确认购买弹窗
      $('.deal .buy').click(function(){
        $('.confirmBuy').show();
      });

     //确认求购交易
      $('.deal .tradeOperate').click(function(){
        $('.confirmTrade').show();
      });


     //添加出售登记
      $('.checkIn .addSale').click(function(){
        $('.checkSalePop').show();
      });

     //添加求购登记
      $('.checkIn .addAskBuy').click(function(){
        $('.checkBuyPop').show();
      });


     //确认回收登记弹窗
      $('.recycle').click(function(){
        $('.confirmRecycle').show();
      });

      //确认删除求购信息弹窗
      $('.delete').click(function(){
        $('.confirmDelete').show();
      });


    //登记弹窗中的米币分类选中效果
    $('.classify li').click(function(){
      $(this).siblings().each(function(index,element){
          $(this).removeClass('on');
      });
      $(this).addClass('on');
    });






    //左侧导航(出售&求购)
    $('.deal .leftNav li').click(function(){
      $(this).siblings().each(function(index,element){
          $(this).removeClass('on');
      });
      $(this).addClass('on');
    });





// ************我的账户***************

     //拆分确认窗口
      $('.addSplit').click(function(){
        $('.addSplitPop').show();
      });



       $('.rechargeWay ul li').click(function(){
         $(this).siblings().each(function(index,element){
          $(this).removeClass('on');
         });
         $(this).addClass('on');
       });





// *************** 安全中心 ***************



        //安全指数颜色条
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


      //默认地址
       $('.defaultAddress').click(function(){
         $('.defaultAddress').each(function(index,element){
          $(this).removeClass('active');
          $(this).html('设为默认地址');
         });
         $(this).addClass('active');
          $(this).html('取消默认地址');
       });



     //添加银行卡窗口
      $('.addBankCard').click(function(){
        $('.addBankCardPop').show();
      });


     //添加地址窗口
      $('.addNewAddress').click(function(){
        $('.addAddressPop').show();
      });








