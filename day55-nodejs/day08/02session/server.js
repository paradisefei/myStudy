
//引入path模块
const path = require('path');
//引入自定义模块-数据库连接
const mongoose = require('mongoose');
//引入自动打开浏览器
const open = require("./util/open.js");
//引入express-session模块
const session = require("express-session")
//引入session配置中依赖的mongo数据包
const MongoStore = require("connect-mongo")(session);
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
//session配置
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/test',
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    }),
    cookie: {
        maxAge: 14 * 24 * 60 * 60,
        httpOnly: true
    }
}))
//个人中心路由
const centerRouter = require("./router/center-router.js");
app.use(centerRouter);
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
	open("http://127.0.0.1:3000")
});
