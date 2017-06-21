
    //banner
    var bannerSwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:5000
    });

    //分类横滑动
    var moveSwiper = new Swiper('.swiper-container-move', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
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








