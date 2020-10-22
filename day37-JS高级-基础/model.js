(function (w){
    //在全局对象上扩展一个属性
    window.module = {}

    //传入的参数个数不确定,对传入的参数求和
    //1 2 3
    function add(){
        //使用内置对象的方法
        return Array.prototype.reduce.call(arguments,function(prev,item){
            
            return prev + item;
        })
    }
    window.module = {
        add:add
    }
})(window)