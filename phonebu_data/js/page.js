$(document).ready(function(){
    $('.addBtn').hover(function(){
        $(this).find('.select').show();
    },function(){
        $(this).find('.select').hide();
    });

});