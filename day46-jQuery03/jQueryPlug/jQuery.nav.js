;
(function($){
    $.fn.extend({
        ani:function(){
            $(this).find("ul li")
                .mouseenter(function(){
                    $(this).siblings().find("div").slideUp().end().end().children("div").slideDown();
                })
                .mouseleave(function(){
                    $(this).children("div").stop(true,false).slideUp();
                })
        }
    })
})(jQuery)