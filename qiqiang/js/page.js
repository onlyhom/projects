  $('.nav ul li h1:first').css('border-left','none');

  $('.nav .fixWidth>li').hover(function(){
     $(this).find('.subNav').slideDown();
  },function(){
    $(this).find('.subNav').slideUp('fast');
  });



$('.outerMenu h1').click(function(){
   // $('.outerMenu>li').each(function(index,element){
   //      $(this).removeClass('on');
   // });
  // $(this).parents('li').addClass('on');
  // $('.subMenu li').removeClass('active');
  $(this).next().slideToggle('fast');
});


// $('.subMenu li').click(function(){
//    $('.subMenu li').removeClass('active');
//    $(this).addClass('active');
// });
