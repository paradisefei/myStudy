/* 
    1.引入mongoose模块
    2.连接数据库
        调用方法mongoose.connect()
            第一个参数：mongodb://域名:端口号/连接的数据库名称
    3.检测是否连接成功
        mongoose.connection.once
        给mongoose的connection绑定事件，当数据库连接时就会触发open事件

*/

//引入mongoose模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/newdatabase', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//检测是否连接成功，连接成功就会触发open事件
mongoose.connection.once('open', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('数据库连接成功，请访问http://localhost:27017');
});
/* 
    锁定到具体的哪个集合的哪个文档
    schema
    model
    documents

*/
//确定约束
const peopleSchema = new mongoose.Schema({
	name: String,
	age: Number,
	sex: String
});
//创建model实例
const People = new mongoose.model('people', peopleSchema);

//对实例进行初始化,并且要保存
/* new People({
	name: '张三',
	age: 23,
	sex: '男'
}).save((err) => {
	if (err) {
		console.log(err);
		return;
	}
}); */
/*
    开始对数据库进行操作
    增
        create
    删
        delete
    改
        update
    查
        find
*/

//增加数据
/* People.create({
	name: '李四',
	age: 24,
	sex: '男'
})
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
	}); */
//删除数据
/* People.deleteOne({ name: '李四' })
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
	});
 */

//修改数据
/* People.updateOne(
	{
		name: '李四'
	},
	{ $set: { age: 48 } }
)
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
    }); */
//修改数据
People.find({
	name: '李四'
})
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
	});
