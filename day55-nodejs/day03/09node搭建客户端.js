/* 
    http.request(url,callback)
        1.所请求的服务器地址
        2.回调函数
            参数是服务器的响应
        3.返回值：返回一个http.ClientRequest实例化对象
*/
//引入http模块
const http = require("http");

//确定服务器地址
const url = "http://192.168.20.40:3001";

//创建一个客户端
const req = http.request(url,(req) => {
    console.log(req.statusCode);

    let str = "";
    req.on("data",(chunk) => {
        str += chunk.toString();
        console.log(str);
    })
})

req.end();