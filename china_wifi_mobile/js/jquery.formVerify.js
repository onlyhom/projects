(function($){
    $.fn.formVerify = function(init){

        var option = {
            data:[],
            callback: function(){}
        }
        $.extend(option, init);

        var result = []; //用来记录检验结果
        function initResult(){
            for(var j=0; j<option.data.length; j++){
                result.push(false);
            }
        }
        initResult();

        function checkError(dom,index){
            var value = dom.val();
            //console.log('第'+index+'个输入框有误');
            layer.msg(dom.attr("msgError"));
            result[index] = false;
            return false;
        }

        function checkSuccess(dom,index){
            result[index] = true;
            return true;
        }

        function checkNull(dom,index){
            var value = dom.val();
            if (!value) {
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkURL(dom,index){
            if(dom.length>0){ //存在
                var value = dom.val();
                if (!value) {
                    checkError(dom,index);
                }else{
                    checkSuccess(dom,index);
                }
            }else{ //不存在
                 checkSuccess(dom,index);
            }
        }


        function checkID(dom,index){
            var value = dom.val();
            if(!(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(value))){
				checkError(dom,index);
            }else{
				checkSuccess(dom,index);
            }
        }

        function checkPhone(dom,index){
            var value = dom.val();
            if(!(/^1[34578]\d{9}$/.test(value))){
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkNamePhone(dom,index){
            var value = dom.val();
            var testString = /^\w{6,}$/;
            if((testString.test(value))||(/^1[34578]\d{9}$/.test(value))){ 
                checkSuccess(dom,index); 
            }else{ //判断通过
                checkError(dom,index);
            }
        }

        function checkEmail(dom,index){
            var value = dom.val();
            if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value))){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkCode(dom,index){
            var value = dom.val();
            if(!(/^([a-z]|[A-Z]|[0-9]){6}$/.test(value))){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkPostcode(dom,index){
            var value = dom.val();
            if(!(/^[1-9][0-9]{5}$/.test(value))){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkString(dom,index){
            var value = dom.val();
            //if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value))){  
            var testString = /^\w{6,20}$/;
            if(!(testString.test(value))){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkConfirm(dom,index,object){
            var value = dom.val();
            var objectValue = object.val();
            if(value == objectValue){ 
                checkSuccess(dom,index);
            }else{
                checkError(dom,index);
            }
        }

        function checkOn(dom,index){
            var value = dom.val();
            if(!dom.is(':checked')){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkbox(dom,index,name){
            var isCheck = false;
            var chkArray= document.getElementsByClassName(name); 
            for(var i=0;i<chkArray.length;i++){
                if(chkArray[i].checked){ 
                    isCheck = true;
                    break;
                }
            }
            isCheck ? checkSuccess(dom,index) : checkError(dom,index);
        }




        return this.each(function(){

            //点击提交时验证
            $(this).find(":submit").on('click',function(){              
                //点击提交时检查是否同意
                if($(this).hasClass('disabled')){
                    return false; 
                }
                for(var i=0;i<option.data.length;i++){

                    switch(option.data[i].check)
                    {
                        case 'checkNull':
                            (function (i) {
                            	checkNull($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkURL':
                            (function (i) {
                                checkURL($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkPhone':
                            (function (i) {
                            	checkPhone($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkNamePhone':
                            (function (i) {
                            	checkNamePhone($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkEmail':
                            (function (i) {
                            	checkEmail($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkCode':
                            (function (i) {
                            	checkCode($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkPostcode':
                            (function (i) {
                                checkPostcode($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkString':
                            (function (i) {
                            	checkString($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkConfirm':
                            (function (i) {
                                checkConfirm($('#'+option.data[i].id),i,$('#'+option.data[i].compareObject));
                            })(i);
                            break;

                        case 'checkOn':
                            (function (i) {
                            	checkOn($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkbox':
                            (function (i) {
                            	checkbox($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        case 'checkID':
                            (function (i) {
                            	checkID($('#'+option.data[i].id),i); 
                            })(i);
                            break;

                        // default:
                        //     (function (i) {
                        //     	checkNull($('#'+option.data[i].id),i); 
                        //     })(i);
                        //     break;
                    }
                }

                var state = true;
                for( var k=0; k<result.length; k++){
                    if (!result[k]){ //只要result中有一个为false则不允许通过
                        state = false;
                        checkError($('#'+option.data[k].id),k);
                        break;
                    }
                }

                if(!state){
                    console.log(result);
                    return false;
                }else{
                    return option.callback();
                }
            });
        });


    };

})(jQuery);