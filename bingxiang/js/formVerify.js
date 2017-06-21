// 留言正则检查



function checkNull(dom){
   var value = dom.val();
   if (!value) {
      if(!(dom.next('i').length>0)){
          var newObj = $('<i></i>')
          dom.after(newObj);
      }
      dom.next('i').text(dom.attr("msgError"));
      return false;
   }else{
      dom.next('i').text('');
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
        return false; 
    }else{
        dom.next('i').text('');
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
        return false; 
    }else{
        dom.next('i').text('');
      return true;
    }
}



$('#name').blur(function(){
    checkNull($(this));
});

$('#companyName').blur(function(){
    checkNull($(this));
});

$('#messageContent').blur(function(){
    checkNull($(this));
});


$('#phone').blur(function(){
    checkPhone($(this));
});

$('#email').blur(function(){
   checkEmail($(this));
});






$('.infoSubmit').click(function(){
   var isName=  checkNull($('#name'));
   var isCName=  checkNull($('#companyName'));
   var isMessageContent= checkNull($('#messageContent'));

   var isPhone= checkPhone($('#phone'));
   var isEmail= checkEmail($('#email'));

    if (!isName||!isPhone||!isMessageContent||!isEmail||!isCName) {
      // alert('请把全部信息正确填写完毕哦');
      return false;
    }
  
});



// function checkCode(dom){
//     var value = dom.val();
//     if(!(/^([a-z]|[A-Z]|[0-9]){4}$/.test(value))){ 
//         if(!(dom.next('i').length>0)){
//             var newObj = $('<i></i>')
//             dom.after(newObj);
//         }
//         dom.next('i').text('提示：'+dom.attr("msgError"));
//         return false; 
//     }else{
//         dom.next('i').text('');
//       return true;
//     }
// }




// $('#codeInput').blur(function(){
//    checkCode($(this));
// });