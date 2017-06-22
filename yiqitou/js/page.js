$(document).ready(function(){
	$('input,textarea').focus(function(){
		$('.bottomMenu').hide();
	});
	$('input,textarea').blur(function(){
		$('.bottomMenu').show();
	});
});