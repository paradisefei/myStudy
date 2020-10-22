/* 
    express是一个搭建nodejs服务器的框架

    1.引入express
    2.创建一个后台服务
    3.开启监听
*/
//引入express模块
const express = require('express');

/* 
    1.如何处理请求和返回响应
    2.什么叫设置好了主机地址
    3.什么叫路由
        根据请求地址的不同来进行相应的处理
*/

//开启一个服务
const app = express();

//处理请求和返回响应
/* app.get("/",(request,response) => {
    response.send("<h1>我是使用express这个框架搭建出来的服务器</h1>");
}) */

app.get('/', (request, response) => {
	// response.end("我是end");
	// response.send("我是end");
/* 	response.json({
        name:"张三",
        age:23
    }); */
	// response.download("./package.json");
	response.redirect("http://www.baidu.com");
});
/*app.get("/:id",(request,response) => {
    console.log(request.params);
    response.send("在请求目录后面加上数字得到不同的结果");
})
app.get("/user",(request,response) => {
    response.send("<h1>我是user这个目录</h1>");
}) */
//开启监听
app.listen(3030, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请访问http://127.0.0.1:3030');
});
