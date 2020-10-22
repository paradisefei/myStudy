const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname,"2.txt");

fs.readFile(filePath,(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString())
})