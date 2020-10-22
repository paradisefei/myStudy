//引入express模块
const express = require("express");

//创建服务器
const app = express();


//根据请求的地址做相应的事，做出相应的响应
//访问根目录
app.get("/",(request,response) => {
    console.log(request);
    response.send("<h1>hello world</h1>")
})
//访问user
app.get("/user",(request,response) => {
    response.send("<h1>你好，我是user</h1>")
})

//开启监听
app.listen(3001,(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("服务器开启成功，请访问http://localhost:3001");
})