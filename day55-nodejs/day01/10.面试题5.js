async function async1() {
    console.log('1'); //同2
    await async2();	//微1  
    console.log('2')
}
async function async2() {
    console.log('3')	//同3
}
console.log('4'); //同1
setTimeout(() => {
    console.log('5') //宏1
}, 0);
async1(); 
new Promise((resolve) => {
    console.log('6'); //同4
    resolve()
}).then(() => {		
    console.log('7')	//微2
});
console.log('8')	//同5