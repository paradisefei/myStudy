/* 
    http.createServer()
    request
        自带一些属性和方法来获取客户端的请求信息和读取客户端请求的数据

*/

//引入http模块
const http = require("http");
//处理查询字符串
const qs = require("querystring");

//创建一个后台服务
const server = http.createServer((request,response) => {
    //处理favicon的请求
    /* 
        用户输入的url是先请求的
        /favicon.ico是后请求的
    */
    if(request.url === "/favicon.ico") return response.end();

    console.log(request.url);
    console.log(request.method);

/*     const res = request.url.split("?")[1].split("&").reduce((p,c) => {
        const [key,value] = c.split("=");
        p[key] = value;
        return p;
    },{}) 
*/
/*     const res = qs.parse(request.url.split("?")[1]);

    console.log(res); */

    console.log(request.url.split("?")[1].query);
    response.setHeader("Content-Type","text/html");
    response.end(`<h1>hello world</h1>`);
    // response.end(`你好`,"utf-8");
    // response.end(`<h1>hello world</h1>`,"charset=utf-8");
});

//服务器监听
//端口号
const port = 3001;
//ip地址
const host = "192.168.20.40";
server.listen(port,host,(err) => {
    if(err){
        console.log(err);
        return;
    }
    const ip = `http://${host}:${port}`
    console.log(`服务器启动成功 访问服务器地址：${ip}`);

})


