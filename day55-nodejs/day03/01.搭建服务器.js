/* 
    服务器
        1.处理请求
        2.返回请求
    搭建服务器
        1.创建服务
        2.启动服务
*/

// 引入http模块
const http = require('http');

// 创建服务
const server = http.createServer((req, res) => {
	/*
    request 请求对象：客户端发送给服务器的数据
    response 响应对象：服务器发送给客户端的数据
  */
	// 处理请求
	// 返回响应
	// res.setHeader("Content-Type", "text/plain;charset=utf8");
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	// res.end("hello server~");
	// res.end("你好，旅客~");
	res.end('<h1>你好，旅客~</h1>');
});

// 端口号
const port = 3000;
// 主机名 / 域名
// const host = "localhost"; // 域名
const host = '127.0.0.1'; // ip地址
// 启动服务
server.listen(port, host, (err) => {
	if (err) {
		console.log('服务器启动失败了', err);
		return;
	}
	// 访问服务器地址： http://localhost:3000
	const address = `http://${host}:${port}`;
	console.log(`服务器启动成功了~ 访问服务器地址：${address}`);
});
