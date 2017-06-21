(function($){
    $.fn.formVerify = function(opts){

        var result = []; //用来记录检验结果
        function initResult(){
            for(var j=0; j<opts.length; j++){
                result.push(false);
            }
        }
        initResult();

        var currenIndex = 0;

        function showErrorMsg(dom,index){
            var value = dom.val();
            //console.log('第'+index+'个输入框有误');
            if(!(dom.next('.tips').length>0)){
                var newObj = $('<i class="tips"></i>')
                dom.after(newObj);
            }
            dom.next('.tips').text(dom.attr("msgError"));
            result[index] = false;
            return false;
        }

        function clearErrorMsg(dom,index){
            dom.next('.tips').text('');
            result[index] = true;
            return true;
        }

        function checkNull(dom,index){
            //console.log(index);
            var value = dom.val();
            if (!value) {
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }


        function checkPhone(dom,index){
            var value = dom.val();
            if(!(/^1[34578]\d{9}$/.test(value))){
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }


        function checkEmail(dom,index){
            var value = dom.val();
            if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value))){ 
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }

        function checkCode(dom,index){
            var value = dom.val();
            if(!(/^([a-z]|[A-Z]|[0-9]){4}$/.test(value))){ 
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }


        function checkString(dom,index){
            var value = dom.val();
            //if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value))){  
            // /^\w{8,}$/
            var testString =/^[\w]{6,12}$/;
            if(!(testString.test(value))){ 
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }

        function checkConfirm(dom,index,object){
            var value = dom.val();
            var objectValue = object.val();
            if(value == objectValue){ 
                clearErrorMsg(dom,index);
                //console.log('相同');
            }else{
                showErrorMsg(dom,index);
                //console.log('不相同');
            }
        }


        function checkOn(dom,index){
            var value = dom.val();
            if(!dom.is(':checked')){ 
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }


        function checkID(dom,index){
            var value = dom.val();
            if(!(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(value))){
                showErrorMsg(dom,index);
            }else{
                clearErrorMsg(dom,index);
            }
        }


        return this.each(function(){
            function init(){
                for(var i=0;i<opts.length;i++){

                    switch(opts[i].check)
                    {
                        case 'checkNull':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkNull($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkPhone':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkPhone($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkEmail':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkEmail($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkCode':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkCode($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkString':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkString($(this),i);
                                });
                            })(i);
                            break;

                        case 'checkConfirm':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkConfirm($(this),i,$('#'+opts[i].compareObject));
                                });
                            })(i);
                            break;

                        case 'checkOn':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkOn($(this),i); 
                                });
                            })(i);
                            break;

                        case 'checkID':
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkID($(this),i); 
                                });
                            })(i);
                            break;

                        default:
                            (function (i) {
                                $('#'+opts[i].id).on('blur',function(){
                                    checkNull($(this),i); 
                                });
                            })(i);
                            break;
                    }
                }
            }
            init();

            //获取焦点时 隐藏错误提示
            $(this).find('input').on('focus',function(){
                $(this).next('.tips').text('');
            });

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
                        showErrorMsg($('#'+opts[k].id),k);
                    }
                }

                if(!state){
                    //console.log(result);
                    //console.log('请把全部信息正确填写完毕哦');
                    return false;
                }
            });
        });


    };

})(jQuery);