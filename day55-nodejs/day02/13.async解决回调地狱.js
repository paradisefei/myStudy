// 引入fs
const fs = require('fs');
// 引入地址模块
const path = require('path');

//获取目标文件的路径
const filePath = path.resolve(__dirname, './1.txt');

// 封装一个打开文件的函数
function openFile() {
	return new Promise((resolve, reject) => {
		fs.open(filePath, 'a', (err, fd) => {
			if (err) {
				reject(err)
			}
			console.log('打开成功');
			resolve(fd);
		});
	});
}
// 封装一个写入内容的函数
function writeFile(fd) {
	return new Promise((resolve, reject) => {
		fs.write(fd, '这是使用asynchronous写入的', (err) => {
			if (err) {
				reject(err);
			}
			console.log('写入成功');
			resolve();
		});
	});
}
// 封装一个关闭文件的函数
function closeFile(fd) {
	return new Promise((resolve, reject) => {
		fs.close(fd, (err) => {
			if (err) {
				reject(err);
			}
			console.log('关闭成功');
			resolve();
		});
	});
}

(async () => {
	//打开文件
	const fd = await openFile();
	await writeFile(fd);
	await closeFile(fd);
})();
