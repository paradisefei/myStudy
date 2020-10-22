// (function(w){
//     //在全局对象上扩张一个对象
//     w.my = {}
// })(window)
(function(w){
    function jQuery(){

    }

    //在构造函数的原型对象上扩展方法
    jQuery.prototype.show = function(){
        
    }
    jQuery.prototype.hide = function(){

    }
    jQuery.prototype.fadeIn = function(){

    }
    jQuery.prototype.fadeOut = function(){

    }

    //在全局对象上扩展一个构造函数,这样的话就只要引入了jQuery之后,全局对象上就有了这样一个属性,就可以在程序中直接使用了
    w.jQuery = w.$ = jQuery;
})(window)

//这样的话就可以拿到jQuery直接使用了
//因为是构造函数的原型对象上的方法,所以需要实例对象才可以用
//传入标签选择器自动实例化对象
jQuery("div")
