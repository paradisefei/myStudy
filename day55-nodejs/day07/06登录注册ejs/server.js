/* 
    搭建服务器
    1.引入express模块
    2.创建服务
    3.开启监听
    4.路由，处理请求


*/
//引入path模块
const path = require('path');
//引入自定义模块-数据库连接
const mongoose = require('mongoose');

// 引入连接数据库模块
require('./db');

//引入express模块
const express = require('express');

// 创建服务
const app = express();
//中间件-处理post请求，挂载在request的body对象上
app.use(express.urlencoded({
	extended:true
}))
//设置模板引擎格式
app.set("view engine","ejs");
app.set("views","./views");
//中间件-静态资源中间件
app.use(express.static("./public"));
/* 中间件-正则校验
	引入正则校验router管理模块 */
const userRegRouter = require("./router/regexp-user-router.js");
app.use(userRegRouter);

/* 中间件-登陆注册功能
	引入登录注册router管理模块 */
const userRouter = require("./router/user-router.js")
app.use(userRouter);


// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
