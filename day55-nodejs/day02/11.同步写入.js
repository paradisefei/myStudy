/* 
    写入文件包括3个步骤
        1.打开文件
        2.写入
        3.关闭文件
*/

// 引入fs
const fs = require("fs");
// 引入地址模块
const path = require("path");

//获取目标文件的路径
const filePath = path.resolve(__dirname,"./1.txt");


// 打开文件
const fd = fs.openSync(filePath,"a");
//写入内容
fs.writeSync(fd,"hello world");
//关闭文件
fs.closeSync(fd);
