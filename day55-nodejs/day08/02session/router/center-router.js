const express = require('express');
const path = require('path');
const router = new express.Router();
//数据库
const mongoose = require('mongoose');
//引入自定义模块-schema
const userInfoSchema = require('../userInfo');
//创建model实例
const UserInfo = mongoose.model('userinfo', userInfoSchema);
//cookie
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/center.html', async (req, res) => {
	// console.log(1);
	/* 
        1.获取session
        2.到数据库中匹配_id
        3.如果匹配成功
            直接打开center.html文件
        4.如果匹配不成功
            显示拒绝访问
    */
	if (req.session) {
		// console.log(req.session);
		// const isHasUser = await UserInfo.findOne({ _id :req.session.userId});
		if (isHasUser) {
			res.sendFile(path.resolve(__dirname, '../center/center.html'));
			return;
		}
	} 
		res.send('拒绝访问');
	
});

module.exports = router;
