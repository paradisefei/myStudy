/* 
    流式写入
        1.写入：从内存写入到文件中
        2.原先写入方式：把整个文件先全部读取到内存中，然后再整个写入到文件中
        3.流式写入：每次写入64k大小

    api
        1.fs.createWriteStream(path[,options])
            返回值
                返回一个fs.writeStream实例化对象
            参数
                path
                    目标文件的路径

    为可写流绑定事件
        在node.js中，流也是一个对象，我们只需要响应流的事件
        1.open
            监听可写流的开启
        2.close
            监听可写流的关闭
    关闭流管道
        close()关闭末尾
        end()关闭开头
*/
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname,"01.txt");


//创建一个可写流
const ws = fs.createWriteStream(filePath);

//写入内容
ws.write("11111111111111111111");
ws.write("22222222222222222222");
ws.write("33333333333333333333");

ws.end()

ws.on("open",() => {
    console.log("open");
})
ws.on("close",() => {
    console.log("close");
})
