/* 
    1.引入模块
        http
        fs
        path
            流式读取图片文件
    2.创建一个后台服务
        1.设置响应类型
        2.将读入的图片文件写入响应中
    3.开启监听
        1.主机，端口
        2.回调函数
            1.错误优先
            2.输出服务器地址
*/
const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname,"1.jpg");
const rs = fs.createReadStream(filePath);

const server = http.createServer((request,response) => {

    response.setHeader("Content-Type","image/png");
    rs.pipe(response);

})

const port = 3000;
const host = "192.168.20.40";

server.listen(port,host,(err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(`服务器启动成功，请输入网址 http://${host}:${port}`);
})