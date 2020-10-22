
//引入path模块
const path = require('path');
//引入express模块
const express = require('express');
//引入cookie-parser
const cookieParser = require('cookie-parser');
// 创建服务
const app = express();
//使用
app.use(cookieParser());

//中间件-处理post请求，挂载在request的body对象上
app.use(
	express.urlencoded({
		extended: true
	})
);
//处理login请求
app.get("/login",(req,res) => {
	/* 
		1.设置cookie
		2.返回给客户端
	*/

	//设置cookie
	res.cookie("useId","123456",{
		maxAge:1000 * 60 * 60 * 24 * 7,
		httpOnly:true //禁止客户端使用document.cookie访问cookie数据
	})
	res.send("success~");
})

//处理center请求
app.get("/center",(req,res) => {
	/* 
		1.获取cookie
		2.判断获取到的这个cookie是不是服务器发送的那个cookie
			如果是，则直接跳转到个人中心
			如果不是，则拒绝访问
	*/
	//获取cookie
	// console.log(req.cookies);
	const {
		useId
	} = req.cookies;
	//判断
	// console.log(useId);
	if(useId === "123456"){
		res.send("<h1>个人中心</h1>");
	}else{
		res.send("拒绝访问");
	}
})
//处理quit
app.get("/quit",(req,res) => {
	/* 
		删除cookie
	*/
	res.cookie("useId","ddd",{
		maxAge:0
	})
	res.send("退出成功");

})

// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
