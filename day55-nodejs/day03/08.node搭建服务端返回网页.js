//引入http模块
const http = require("http");
//引入路径
const path = require("path");
//引入fs模块
const fs = require("fs");

//获取目标文件路径
const filePath = path.resolve(__dirname,"index.html");
console.log(filePath);
//将文件流式读取
const rs = fs.createReadStream(filePath);

//创建一个后台服务
const server = http.createServer((request,response) => {

    //
    response.setHeader("Content-Type","text/html");
    //将文件写入响应中
    rs.pipe(response);
    // response.end(`你好`,"utf-8");
    // response.end(`<h1>hello world</h1>`,"charset=utf-8");
});

//服务器监听
//端口号
const port = 3001;
//ip地址
const host = "192.168.20.40";
server.listen(port,host,(err) => {
    if(err){
        console.log(err);
        return;
    }
    const ip = `http://${host}:${port}`
    console.log(`服务器启动成功 访问服务器地址：${ip}`);

})
