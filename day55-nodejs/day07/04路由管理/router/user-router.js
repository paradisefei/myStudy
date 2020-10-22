const express = require("express");

const router = new express.Router();

const mongoose = require('mongoose');

// 引入连接数据库模块
// require('./db');

//引入自定义模块-schema
const userInfoSchema = require('../userInfo');
//创建model实例
const UserInfo = mongoose.model('userinfo', userInfoSchema);

//路由，处理请求
//实现注册
router.post('/register', async (request, response) => {
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
router.post('/login', async (request, response) => {
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

module.exports = router;