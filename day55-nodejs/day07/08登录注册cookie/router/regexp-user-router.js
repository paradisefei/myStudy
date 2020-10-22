/* 
	引入模块
		1.express
		2.ejs
		

*/
const express = require('express');
const ejs = require('ejs');
const router = new express.Router();

router.use((request, response, next) => {
	/* 
        1.注册的时候校验密码
            密码校验:6-8位数字
        2.登录的时候校验用户名
            用户名校验:必须为数字字母下划线，9-16位，以大写字母开头
    */
	/* 

	
	*/
	//判断是登录请求还是注册请求
	const isRegister = request.url === '/register';
	const { user, pass } = request.body;
	//密码校验：只能是数字，并且长度为6-8
	// const passReg = /\d{6,8}/;
	const passReg = new RegExp('\d{6,8}','g');
	//用户名校验：以大写字母开头，后面可以跟数字字母下划线，所跟的长度为5-9
	// const userReg = /^[A-Z]\w{5,9}$/g;
	const userReg = new RegExp('^[A-Z]\w{5,9}$','g');
	// const userReg = /[a-z]{5,9}/;

	const flagUser = /^[A-Z]\w{5,9}$/g.test(user);
	const flagPass = /\d{6,8}/g.test(pass);
/* 	console.log('typeofuser:' + user);
	console.log('typeofpass:' + typeof pass);
	console.log('pass:' + pass);
	console.log('user:' + user);
	console.log('userReg.test(user):' + userReg.test(user));
	console.log("flagUser:"+flagUser);
	console.log('passReg.test(pass):' + passReg.test(pass));
	console.log("flagPass:"+flagPass); */
	//确定要返回模板的数据
	//返回到注册页面
	const data1 = { err: '用户名必须以大写字母开头，后面所跟5-9位' };
	//返回到登录页面
	const data2 = { err: '密码必须为6-8位数字' };
	// console.log(flag);


	//校验用户名
	if (!flagUser) {
		//判断是登录还是注册
		if (isRegister) {
			response.render('../views/register.ejs', data1);
			return;
		} else {
			response.render('../views/login.ejs', data1);
			return;
		}
	}
	//校验密码
	if (isRegister && !flagPass) {
		response.render('../views/register.ejs', data2);
		return;
	}
	console.log(1);
	next();
});

module.exports = router;
