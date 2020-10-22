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

//引入自定义模块-schema
const userInfoSchema = require('./userInfo');
//创建model实例
const UserInfo = mongoose.model('userinfo', userInfoSchema);
//引入express模块
const express = require('express');

// 创建服务
const app = express();
//中间件-处理post请求，挂载在request的body对象上
app.use(express.urlencoded({
	extended:true
}))
//中间件-静态资源中间件
app.use(express.static("./public"));
//中间件-正则校验
app.use((request, response, next) => {
	/* 
        1.注册的时候校验密码
            密码校验:6-8位数字
        2.登录的时候校验用户名
            用户名校验:必须为数字字母下划线，9-16位，以大写字母开头
    */

	console.log("校验");
	//判断是登录请求还是注册请求
	const isRegister = request.url === '/register' ? true : false;
	//密码校验
	const passReg = /[0-9]{6,8}/g;
	//用户名校验
	const userReg = /^[A-Z]\w{9,16}/g;
	const {
		user,pass
	} = request.body
	if (!userReg.test(user)) {
		response.send("用户名必须为数字字母下划线，9-16位，以大写字母开头");
		return;
	}
	if (isRegister&&!passReg.test(pass)) {
		response.send("密码必须为6-8位数字");
		return;
    }
    next();
});
//路由，处理请求
//实现注册
app.post('/register', async (request, response) => {
	//获取请求数据
	const { user, pass } = request.body;
	// console.log(user, pass);
	//查询数据库中是否有相同的用户名
	const isHasUser = await UserInfo.findOne({ user });
	// console.log(isHasUser)
	//如果存在，则返回注册失败
	if (isHasUser) {
		response.send('注册失败');
		return;
	}
	//如果没有进入上面的判断，则说明不存在，此时就要把数据添加到数据库中
	await UserInfo.create({ user, pass });
	response.send('注册成功');
});
//实现登录
app.post('/login', async (request, response) => {
	/* 
        1.获取数据
        2.比较用户名和密码
        3.如果成功，返回登录成功
        4.失败，返回登录失败
    */
	//获取数据
	const { user, pass } = request.body;
	const loginUser = await UserInfo.findOne({ user });
	//比较
	if (!loginUser) {
		response.send('登录失败，用户名错误');
		return;
	}
	//如果用户名相同，则比价密码
	if (loginUser.pass === pass) {
		response.send('登录成功');
	} else {
		response.send('登录失败，密码错误');
	}
});

// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
