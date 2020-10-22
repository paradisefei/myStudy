//引入express模块
const express = require('express');

// 创建服务
const app = express();

//静态资源中间件
app.use(express.static('./public'));
//post请求 将urlencoded挂载在body上，并且只是处理urlencoded编码格式，所在在Ajax发送请求时需要指明请求头
app.use(express.urlencoded({
	extended:true
}))
app.use(express.json())
app.get('/userInfo', (req, res) => {
	/* 
        1.服务器接收请求
        2.返回响应
            先返回固定的数据
    */

	//接收请求
	console.log(req.query);
	//要返回的数据
	const data = {
		name: 'xiaoMing',
		age: 18
	};
	//返回响应
	res.send(data);
});
app.post('/userInfo', (req, res) => {
	/* 
        1.服务器接收请求
        2.返回响应
            先返回固定的数据
    */

	//接收请求
	console.log(req.body);
	//返回响应
	res.json({
		name: 'xiaoWang',
		age: 18
	});
});
// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
