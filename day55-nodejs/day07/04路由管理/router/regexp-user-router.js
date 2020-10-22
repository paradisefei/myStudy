const express = require("express");

const router = new express.Router();


router.use((request, response, next) => {
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
	const passReg = /\d{6,8}/g;
	//用户名校验
	const userReg = /^[A-Z]\w{5,9}$/g;
	const {
		user,pass
	} = request.body;
	console.log("userReg.test(user):"+userReg.test(user));
	if (!userReg.test(user)) {
		console.log("hello");
		return	response.send("用户名必须为数字字母下划线，以大写字母开头，5-9位");
	}
	if (isRegister&&!passReg.test(pass)) {
		return response.send("密码必须为6-8位数字");
    }
    next();
})

module.exports = router;