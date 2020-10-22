//引入fs模块
const fs = require("fs");

//引入path模块
const path = require("path");

//确定目标文件路径
const filePathRead = "D:\\1-life\\music\\Adele\\19\\Adele - chasing pavements.wav";
const filePathWrite = path.resolve(__dirname,"a.mp3");

//创建一个可读流读取文件
const rs = fs.createReadStream(filePathRead);

//创建一个可写流将文件写入
const ws = fs.createWriteStream(filePathWrite);

rs.pipe(ws);

