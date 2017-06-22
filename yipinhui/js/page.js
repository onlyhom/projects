  $('.nav ul li h1:first').css('border-left','none');

  $('.nav .fixWidth>li').hover(function(){
     $(this).find('.subNav').slideDown();
  },function(){
    $(this).find('.subNav').slideUp('fast');
  });



$('.outerMenu h1').click(function(){
  $(this).next().slideToggle('fast');
});


