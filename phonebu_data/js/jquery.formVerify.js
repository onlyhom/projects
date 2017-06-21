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

        function checkPhone(dom,index){
            var value = dom.val();
            if(!(/^1[34578]\d{9}$/.test(value))){
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
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
            if(!(/^([a-z]|[A-Z]|[0-9]){4}$/.test(value))){ 
                checkError(dom,index);
            }else{
                checkSuccess(dom,index);
            }
        }

        function checkString(dom,index){
            var value = dom.val();
            //if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value))){  
            var testString = /^\w{8,}$/;
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
            function init(){
                for(var i=0;i<option.data.length;i++){

                    switch(option.data[i].check)
                    {
                        case 'checkNull':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkNull($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkPhone':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkPhone($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkEmail':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkEmail($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkCode':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkCode($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkString':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkString($(this),i);
                                });
                            })(i);
                            break;

                        case 'checkConfirm':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkConfirm($(this),i,$('#'+option.data[i].compareObject));
                                });
                            })(i);
                            break;

                        case 'checkOn':
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkOn($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkbox':
                            (function (i) {
                                $('.'+option.data[i].name).on('blur',function(){
                                    checkbox($('#'+option.data[i].id),i,option.data[i].name); 
                                });
                            })(i);
                            break;

                        default:
                            (function (i) {
                                $('#'+option.data[i].id).on('blur',function(){
                                    checkNull($(this),i); 
                                });
                            })(i);
                            break;
                    }
                }
            }
            init();

            //点击提交时验证
            $(this).find('#submit').click(function(){
                
                //点击提交时检查是否同意
                if($(this).hasClass('disabled')){
                    return false; 
                }

                var state = true;
                for( var k=0; k<result.length; k++){
                    if (!result[k]){ //只要result中有一个为假则不允许通过
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