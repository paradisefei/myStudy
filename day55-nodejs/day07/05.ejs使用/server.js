/* 
    模板引擎
        模板接收服务器的数据然后再返回
    基本逻辑
        1.服务器访问一个接口(.html，看起来像访问一个页面),进行路由处理
        2.页面(对应ejs文件)中的数据直接从服务器中获取到
        3.服务器再返回这个页面(ejs)
    problem
        1.是否要打开服务器
            打开服务器，可以通过地址栏的申请路由来得到对应的页面，该页面中有服务器返回的数据
            没打开服务器，直接打开ejs文件是不会有相应数据的
        2.要从服务器来访问响应接口返回获取到相应数据的ejs文件，而不是直接从ejs文件打开
    1.模板
    2.服务器
    3.服务器数据
    4.服务器数据返回到模板
    5.模板引入数据

*/

//引入path模块
const path = require('path');
//引入自定义模块-数据库连接
const mongoose = require('mongoose');
//引入模板引擎ejs
const ejs = require('ejs');
//引入express模块
const express = require('express');

// 创建服务
const app = express();

/* 
    1.给模板引擎设置格式
    2.确定模板引擎位置
*/
app.set('view engine', 'ejs');
app.set('views', './views');

//定义模板数据
app.get('/single.html', (req, res) => {
	const data = {
		name: '<strong>张三</strong>',
		age: "<strong>23</strong>"
	};
	//将数据返回到模板中
	res.render('./single.ejs', data);
});
app.get('/more.html', (req, res) => {
	/*
        1.页面最终需要的数据
        2.将对应ejs文件返回
    */

	//数据
	const data = {
		user: [
			{
				name: '张三',
				age: 23
			},
			{
				name: '李四',
				age: 24
			}
		]
	};

	//渲染后返回
	res.render('./more.ejs', data);
	return;
});
// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
