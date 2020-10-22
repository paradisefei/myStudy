const express = require("express");
//注册一个服务
const app = express();

app.use(express.static("./public"));

//获取post请求体 挂载到req上  只能处理urlencoded编码格式的请求
app.use(express.urlencoded({
    extended: true
}))

app.get("/use",(req,res) => {
    /* 
        1.取到回调函数的名字
            因为就是这个函数带上参数之后的结果返回回去的
        2.定义要返回给前端的数据
    */
   const {callback} = req.query;
   const data = {
       name:"xiaowang",
       age:18
   }
   res.send(`${callback}(${JSON.stringify(data)})`);
})
//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
})