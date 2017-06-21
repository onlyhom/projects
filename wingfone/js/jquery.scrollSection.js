(function($){
    $.fn.scrollSection = function(init){
        var option = {
            "autoPlay" : true,
            "autoPlayTime":3000,
            "eventType":"click"
        }
        $.extend(option,init);

        function nextScroll(vcon){
            var offset = (vcon.find('li').outerWidth(true)) * -1;
            vcon.stop().animate({
              left: offset
            }, "normal", function() {
              for(var i=0;i<vcon.find('ul').length;i++){
                var firstItem = vcon.find('ul').eq(i).find('li').first();
                vcon.find("ul").eq(i).append(firstItem);
              }
              $(this).css("left", "0px");
            });
        }

        function preScroll(vcon){
            var offset = (vcon.find('li').outerWidth(true)) * -1;
            for(var i=0;i<vcon.find('ul').length;i++){
              var lastItem = vcon.find('ul').eq(i).find('li').last();
              vcon.find("ul").eq(i).prepend(lastItem);
            }
            vcon.css("left", offset);
            vcon.animate({
              left: "0px"
            }, "normal", function() {
            })
        }

        function autoPlay(me){
            var timer = setInterval(function(){
                nextScroll(me.find('.viewContent'));
            },option.autoPlayTime);

            me.find('.viewContent').hover(function(){
            　  clearInterval(timer);
             },function(){
                timer = setInterval(function(){
                  nextScroll(me.find('.viewContent'));
                },option.autoPlayTime);
            });
        }


        return this.each(function(){
            var me = $(this);
            me.find('.goNext span').on(option.eventType,function(){
                nextScroll(me.find('.viewContent'));
            });
            me.find('.goPrev span').on(option.eventType,function(){
                preScroll(me.find('.viewContent'));
            });

            if(option.autoPlay){
                autoPlay(me);
            }

        });
    };
})(jQuery);





