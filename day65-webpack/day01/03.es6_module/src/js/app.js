//导入分别导出
import {foo,a} from "./module1.js";
//导入统一导出
import {bar,b} from "./module2.js";
//导入默认导出
import obj from "./module3.js";

foo();
bar();
console.log(a);
console.log(b);
console.log(obj);