//这里的index.js被称为入口文件

/* 
    引入模块
    使用require()方法
    该方法得到的是被引用模块对象的引用
*/
// console.log(module.exports);
//模块中是在module.exports对象上扩展了一个方法
//可以对对象进行解构
// const {add} = require("./1.add.js");
// console.log(add(1,2,3,4,5,6));

//模块中直接把方法的引用赋给module.exports对象
const add = require("./1.add.js");
console.log(add(1,2,3,4,5));

/* const {mins} = require("./3.mins.js");
const res = mins(10,5)
console.log(res); */

const mins = require("./3.mins.js");
console.log(mins(10,5));
