/**************全局调用*******************/
$(function () {
    /*全部导航触发效果*/
    $('.header-bar .trigger').on('click',function (e) {
        openSide();
        e.stopPropagation();
         $('body').on('click.sidenav',function () {
          closeSide();
          $('body').off('click.sidenav');
        });
    });

    $('.nav').on('click',function (e) {
      e.stopPropagation();
    })
    
  
    function openSide () {
      // var win=window.innerWidth;
    	// var win=640;
      var win= $(".container").width();
      $('.nav').addClass('on');
      $('html,body').addClass('holding');
      // $('body').addClass('slide-left holding-right');
      $('.container').addClass('slide-left holding-right');
;
      $('.header-ctent').width(win);
    }

    // function closeSide () {
    //  $('body').removeClass('slide-left');
    //  setTimeout(function () {
    //    $('.nav').removeClass('on');
    //    $('body').removeClass('holding-right');
    //    $('html,body').removeClass('holding');
    //    $('.header-ctent').removeAttr('style')
    //  },300);

    function closeSide () {
     $('.container').removeClass('slide-left');
     setTimeout(function () {
       $('.nav').removeClass('on');
       $('.container').removeClass('holding-right');
       $('html,body').removeClass('holding');
       $('.header-ctent').removeAttr('style')
     },300);


   }

/*图片触摸弹出缩放层*/
if ($('.zoompic').length>0) {
$('<section class="imgzoom_pack">'+
            '<div class="imgzoom_x">X</div>'+
            '<div class="imgzoom_img"><img src="" /></div>'+
    '</section>').appendTo('body');
  ImagesZoom.init({
    "elem": ".zoompic"
  });
};

});