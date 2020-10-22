/* 
    数据库中创建用户数据约束
    1.引入mongoose模块
    2.创建schema实例
*/
// 引入mongoose
const mongoose = require("mongoose");

//创建schema实例
const userInfo = new mongoose.Schema({
    user:String,
    pass:String
})

//返回userInfo
module.exports = userInfo;