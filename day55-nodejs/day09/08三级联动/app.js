/* 
    引入模块
        express
        mongoose
        fs
        path
*/
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const { resolve } = require('path');

/* 数据库 */
require('./db');
const schemaOfSan = mongoose.Schema({
	province: String,
	city: String
});
const ModelOfSan = new mongoose.model('cities', schemaOfSan);

/* ModelOfSan.findOne({name:"江西省"},{name:1,level:1}).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
}) */

const app = express();
app.use(express.static('./public'));
app.use(express.json());
//province请求
app.get('/province', async (req, res) => {
	/* 
        1.数据库中获取所有省份
        2.打印
    */
	const searchProvince = await ModelOfSan.find({ level: 1 }, { name: 1, _id: 0 });
	res.json({
		status: 0,
		data: searchProvince
	});
});
//city请求
app.get('/city', async (req, res) => {
	/* 
        1.获取省份名称
        2.在数据库中查找该省份的province值
        3.查找该省份代码并且level为2的所有项
        4.将数据返回
    */
    // console.log(req);
    console.log(req.query);
    const { provinceName } = req.query;
    console.log(provinceName);
    //得到省份代码
    const province = await ModelOfSan.find({name:provinceName});
    console.log(province[0].province);
    const searchCity = await ModelOfSan.find({province:province[0].province,level:2},{name:1,_id:0});
    //返回市的对象
    console.log(searchCity);
	res.json({
		status: 0,
		data: searchCity
	});
});
//county请求
app.get('/county', async (req, res) => {
	/* 
        1.获取省份名称和市铭
        2.在数据库中查找该省份的province值和city值
        3.查找该省份代码并且level为3的所有项
        4.将数据返回
    */
    // console.log(req);
    console.log(req.query);
    const { provinceName,cityName } = req.query;
    console.log(provinceName,cityName);
    //得到省份代码
    const province = await ModelOfSan.find({name:provinceName});
    console.log(province[0].province);
    //得到市代码
    const city = await ModelOfSan.find({name:cityName});
    console.log(city);
    // console.log(city[0].city);
    const searchCounty = await ModelOfSan.find({province:province[0].province,city:city[0].city,level:3},{name:1,_id:0});
    //返回市的对象
    console.log(searchCounty);
	res.json({
		status: 0,
		data: searchCounty
	});
});
app.listen(3300, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务器开启成功,地址为 http://127.0.0.1:3300');
});
