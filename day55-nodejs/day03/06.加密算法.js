/* 
    crypto模块
        crypto.createHmac(algorithm,key)
            功能：对明文进行加密
            参数
                algorithm:加密算法
                key:明文
            返回值：返回一个HMAC对象
        hmac.update(data[,encoding])
            功能
            参数
                data:摘要内容
                encoding:摘要内容所使用的编码格式
            返回值
        hmac.digest([encoding])
            功能
                输出摘要
            参数
                encoding:返回值的字符编码
                    为hex时，表示转成16进制
            返回值
                如果提供了encoding，则返回字符串
                如果没提供encoding，则返回Buffer
*/

//引入crypto
const crypto = require("crypto");

//确定明文
const secret = "18720587332";

//使用crypto.createHmac(algorithm,key)对明文进行加密
const hmac = crypto.createHmac("MD5",secret);

//将hmac转成16进制
const mySecret = hmac.digest("hex");
console.log(mySecret);

//可以对密文再次加密
const hmac2 = crypto.createHmac("sha256",mySecret);
const mySecret2 = hmac2.digest("hex");

console.log(mySecret2);