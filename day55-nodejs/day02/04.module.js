/* 
    module
        1.是一个对象
        2.每个nodejs文件运行时外面都会包一个我们看不见的函数，nodejs代码就是在这个函数中的代码
        3.这个函数有形参exports,require,module,__filename,__dirname
            程序内部也会有一些我们看不见的操作
            module是外面传进来的对象
        4.所以可以在模块中直接使用module和require等
        5.每个模块都有自己的require，module
        6.模块中调用的是自己的require方法，得到的是参数路径中那个模块的module.exports对象
        7.如果require的参数只是一个模块的文件名而没有路径的话，模块就会去到module对象中的path中的路径中一个一个的找
        8.这样的话就分清楚了require是去到哪个module中找了
*/
// console.log(module);
// 文件本身的绝对路径
// console.log(__filename)
//文件所在文件夹的绝对路径
// console.log(__dirname);
// console.log(arguments.callee.toString());
// const h = require("http");
// console.log(h);
// console.log(1 + 3);
console.log(require);