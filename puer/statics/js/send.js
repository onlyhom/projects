/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.hqyzm').click(function(){
       // alert(document.domain);
       var mobile = $('#phone').val();
      // alert(mobile);
       if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile))){ 
              alert("请输入正确的手机号码");
              return false;
       }
    $.ajax({
    type:"POST",
    url: "http://" +document.domain+"/member/sends.php?act=send",
    data:"tel="+mobile,
    timeout:"10000",
    dataType:"JSON",
    success: function(data){   
     
		    	if(data.error>0)  {              
		            alert(data.content);
		          }else{
		           alert(data.content);
		          }
		    },
		    error:function(){
		       alert("短信发送失败，请稍候再试");
		      return false;
		    }
	 }); 
    
    });

 })