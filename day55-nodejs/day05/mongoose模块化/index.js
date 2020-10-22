//入口文件
//引入mongoose
const mongoose = require("mongoose");
//连接数据库文件
require("./db");
//引入schema文件
const peopleSchema = require("./people/schema.js");

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
const createPeople = People.create({
    name: '王五',
    age:500
});
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
