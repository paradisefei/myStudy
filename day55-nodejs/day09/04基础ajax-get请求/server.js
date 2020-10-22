//引入express模块
const express = require('express');

// 创建服务
const app = express();

//静态资源中间件
app.use(express.static('./public'));
app.get('/userInfo', (req, res) => {
	/* 
        1.服务器接收请求
        2.返回响应
            先返回固定的数据
    */

	//接收请求
	console.log(req.query.username);
	//要返回的数据
	const data = {
		name: 'xiaowang',
		age: 18
	};
	//返回响应
	res.send(data);
});
// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
