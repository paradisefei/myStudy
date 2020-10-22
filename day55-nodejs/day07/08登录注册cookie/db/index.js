/* 
 连接数据库
    1.引入mongoose模块
    2.连接数据库
    3.判断是否连接成功
*/

//引入mongoose模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
//检测数据库是否连接成功
mongoose.connection.once('open', (err) => {
	console.log('数据库连接成功');
});
