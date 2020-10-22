//引入mongoose模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/atguigu', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//检测是否连接成功
mongoose.connection.once('open', (err) => {
	if (err) {
		console.log(err);
	}
	console.log('数据库连接成功');
});
