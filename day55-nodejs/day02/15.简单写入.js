const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname,"2.txt");

fs.writeFile(filePath,"简单写入",{
    flag:"a"
},(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("文件快速写入");
})