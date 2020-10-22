//引入path模块
const { resolve } = require('path');
const eTag = require("etag");
const fs = require('fs');
const {
    promisify
} = require("util");
//引入express模块
const express = require('express');

// 创建服务
const app = express();
//中间件-处理post请求，挂载在request的body对象上
app.use(
	express.urlencoded({
		extended: true
	})
);

// 访问根目录
app.get('/', (req, res) => {
	/* 
        需求
            把文件写入到响应中
        逻辑
            1.获取html文件根目录
            2.将文件读入流中
            3.设置响应头文件内容类型
            4.将文件写入
    */
	const file = resolve(__dirname, './public/index.html');
	const rs = fs.createReadStream(file);
    res.set('content-type', 'text/html;charset=utf-8');
    
    rs.pipe(res);
});
// 强制缓存js文件
app.get('/js/index.js', (req, res) => {
    console.log(1);
	/* 
        需求
            把js文件写入到响应中
        逻辑
            1.获取js文件根目录绝对路径
            2.将文件读入流中
            3.设置响应头文件内容类型
            4.设置响应强制缓存
                cache-control
                expires
            5.将文件写入响应中
    */
   const file = resolve(__dirname, './public/js/index.js');
   const rs = fs.createReadStream(file);
   
   res.set("cache-control","max-age=10");
   res.set("expires",new Date(Date.now() + 1000 * 3600).toGMTString());
   res.set('Content-type', 'application/javascript;charset=utf-8');
   rs.pipe(res);
});
// 协商缓存css文件
app.get('/css/index.css', async (req, res) => {
    console.log(1);
	/* 
        需求
            协商缓存js文件
        逻辑
            基本思路
                比较两次的标识和修改时间
            1.
    */
   const filePath = resolve(__dirname, './public/css/index.css');
   //fs.stat方法可以读取文件的所有详细信息
   const stat = promisify(fs.stat);//把fs.stat转换成promise对象
   //读取文件信息
   const fileStat = await stat(filePath);

   //获取请求时所携带文件的唯一标识
   const ifNoneMatch = req.headers["if-none-match"];
   const ifModifiedSince = req.header["if-modified-since"];
   

   //获取文件的最后依次修改时间
   const lastModified = new Date(fileStat.mtime).toGMTString();
   const fileEtag = eTag(fileStat);

   //比较
   if(ifNoneMatch === fileEtag && ifModifiedSince === lastModified){
       res.status(304).end();
       return;
   }
   
   //如果没进入上面的比较，则表示需要重新读取缓存
   res.set("eTag",fileEtag);
   res.set("last-modified",lastModified);

   const rs = fs.createReadStream(filePath)
   res.set("Content-Type", "text/css;charset=utf-8")
   rs.pipe(res);
});
// 开启监听
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功，请输入 http://localhost:3000');
});
