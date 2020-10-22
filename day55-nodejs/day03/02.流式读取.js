//引入fs模块
const fs = require("fs");

//引入路径模块
const path = require("path");

//确定目标文件路径
const filePath = path.resolve(__dirname,"01.txt");

//创建可读流
const rs = fs.createReadStream(filePath);

/* 监听事件
    data
        监听数据
*/
rs.on("data",(chunk) => {
    console.log(chunk.toString());
})

/* 
    end事件
        读取完毕并关闭时触发
*/
rs.on("end",() => {
    console.log("关闭了");
})
