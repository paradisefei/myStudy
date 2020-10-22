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

//路由，处理请求
//实现注册
app.get('/register', async (request, response) => {
	//获取请求数据
	const { user, pass } = request.query;
	console.log(user, pass);
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
app.get('/login', async (request, response) => {
	/* 
        1.获取数据
        2.比较用户名和密码
        3.如果成功，返回登录成功
        4.失败，返回登录失败
    */
	//获取数据
	const { user, pass } = request.query;
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
app.get('/register.html', (request, response) => {
	response.sendFile(path.resolve(__dirname, './register.html'));
});
app.get('/login.html', (request, response) => {
	response.sendFile(path.resolve(__dirname, './login.html'));
});
// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
