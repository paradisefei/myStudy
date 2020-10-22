// 引入fs
const fs = require('fs');
// 引入地址模块
const path = require('path');

//获取目标文件的路径
const filePath = path.resolve(__dirname, './1.txt');

//打开
fs.open(filePath, 'a', (err, fd) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log('打开成功');
	//写入内容
	fs.write(fd, '你好世界', (err) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log('写入成功');

		fs.close(fd, (err) => {
			if (err) {
				console.log(err);
				process.exit(1);
			}
			console.log('关闭成功');
		});
	});
});
