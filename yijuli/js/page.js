


$('.outerMenu h1').click(function(){
   $('.outerMenu>li').each(function(index,element){
        $(this).removeClass('on');
   });
  $(this).parents('li').addClass('on');
  $('.subMenu li').removeClass('active');
  $(this).next().slideToggle();
});


$('.subMenu li').click(function(){
   $('.subMenu li').removeClass('active');
   $(this).addClass('active');
});


$(function() {
   $('.content').perfectScrollbar();
});