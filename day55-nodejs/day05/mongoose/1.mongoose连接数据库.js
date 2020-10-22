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

//创建约束
const peopleSchema = new mongoose.Schema({
	name: String,
	age: Number
});

//创建集合
/* 
    1.创建集合时一定要传入约束，没有约束会报错
    2.Model是一个构造函数，使用时首字母小写
    3.第一个参数表示集合，要写成对应的集合名字的单数形式，mongoose会自动找到集合中该名字复数形式的collection
    4.Model的实例，代表着可以从数据库中保存和读取的documents
    5.从数据库中创建和读取documents都是通过该实例进行的
*/
const People = mongoose.model('people', peopleSchema);

/* 
    创建文档
        1.使用对应集合的构造函数进行实例化，创建文档，传入的参数表示向文档中插入数据
        2.创建的文档实例化对象并不会在运行之后直接保存，需要显式保存

*/

/* const people = new People({
    name:"张三",
    age:100
})
people.save((err) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("保存成功");
}) */

/* 
    增
        People.create()
    删
        People.delete()
    改
        People.update()
    查
        People.find()
*/

//增
//只有一条语句能添加成功
/* const createPeople = People.create({
    name: '李四',
    age:500
}); */
/* const createPeople = People.create({
    name: '张三',
    age:23
});
createPeople
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
    }); */

//删
//只有一条语句删不了
/*  const delPeople = People.deleteOne({name:"张三"});
delPeople.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
}) */

//改
//只有一条语句改不了
/* const updatePeople = People.updateOne({ name: '张三' }, { $set: { age: 20 } });
 updatePeople
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.log(err);
    }); 
 */
//查
const findPeople = People.find({age:100});
/*findPeople.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
}) */
