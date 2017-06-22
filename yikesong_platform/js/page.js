
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:5000
    });


    //弹出窗口
    $('.pop-menu-trigger').click(function(){
      $('.pop-menu').addClass('pop-show');
    });
      
    $('.cancel, .close-button, .pop-bg').click(function(){
        $('.pop-menu').removeClass('pop-show');
    });

    //阻止事件冒泡
    $(".pop-up").click(function(event){
         event.stopPropagation();        
    });








