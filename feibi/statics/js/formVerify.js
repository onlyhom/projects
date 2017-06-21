
function checkNull(dom){
   var value = dom.val();
   if (!value) {
      if(!(dom.next('i').length>0)){
          var newObj = $('<i></i>')
          dom.after(newObj);
      }
        dom.next('i').text('提示：'+dom.attr("msgError"));
        dom.next('i').show();
        return false;
   }else{
        dom.next('i').text('');
        dom.next('i').hide();
        return true;
   }
}


function checkPhone(dom){
    var value = dom.val();
    if(!(/^1[34578]\d{9}$/.test(value))){ 
        if(!(dom.next('i').length>0)){
            var newObj = $('<i></i>')
            dom.after(newObj);
        }
        dom.next('i').text('提示：'+dom.attr("msgError"));
        dom.next('i').show();
        return false;
   }else{
        dom.next('i').text('');
        dom.next('i').hide();
        return true;
   }
}



function checkEmail(dom){
    var value = dom.val();
    if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value))){ 
        if(!(dom.next('i').length>0)){
            var newObj = $('<i></i>')
            dom.after(newObj);
        }
        dom.next('i').text('提示：'+dom.attr("msgError"));
        dom.next('i').show();
        return false;
   }else{
        dom.next('i').text('');
        dom.next('i').hide();
        return true;
   }
}


function checkCode(dom){
    var value = dom.val();
    if(!(/^([a-z]|[A-Z]|[0-9]){4}$/.test(value))){ 
        if(!(dom.next('i').length>0)){
            var newObj = $('<i></i>')
            dom.after(newObj);
        }
        dom.next('i').text('提示：'+dom.attr("msgError"));
        dom.next('i').show();
        return false;
   }else{
        dom.next('i').text('');
        dom.next('i').hide();
        return true;
   }
}




$('#name').blur(function(){
    checkNull($(this));
});


$('#phone').blur(function(){
    checkPhone($(this));
});

$('#code').blur(function(){
   checkCode($(this));
});



$('#organName').blur(function(){
    checkNull($(this));
});

$('#address').blur(function(){
    checkNull($(this));
});


$('#course').blur(function(){
    checkNull($(this));
});


// $('#email').blur(function(){
//    checkEmail($(this));
// });






$('.form-submit').click(function(){
   var bool1=  checkNull($('#name'));
   var bool2=  checkPhone($('#phone'));
   var bool3=  checkCode($('#code'));
   var bool4=  checkNull($('#organName'));
   var bool5=  checkNull($('#address'));
   var bool6=  checkNull($('#course'));

    if (!bool1||!bool2||!bool3||!bool4||!bool5||!bool6) {
      // alert('请把全部信息正确填写完毕哦');
      return false;
    }
  
});







