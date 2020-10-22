// console.log(process);
/* console.log(process.argv);

if(process.argv.includes("hello")){
    console.log(1);
}else if(process.argv.includes("world")){
    console.log(2);
} */

// console.log(process.argv0);

//返回当前node工作时所在文件夹的绝对路径
// console.log(process.cwd())
//返回当前文件所在文件夹的绝对路径
// console.log(__dirname);
let  a = 1;
setInterval(() => {
    a++;
    if(a > 6){
        process.exit(0)
    }
    console.log(a);
})
