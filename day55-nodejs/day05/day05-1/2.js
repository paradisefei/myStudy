const url = "http://192.168.20.40:3001/?username=zhangsan&pass=123456"
const res = url.split("?")[1].split("&").reduce((p,c) => {
	const [key,value] = c.split("=");
	p[key] = value;
	return p;
},{}) 
console.log(res);