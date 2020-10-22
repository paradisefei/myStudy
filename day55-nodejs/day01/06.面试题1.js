process.nextTick(() => {
    console.log(111); //微1
});

const promise = new Promise(resolve => {
    console.log(222); //同1
    resolve();
});

setTimeout(() => {
    console.log(333); //宏1
}, 1000);

promise.then(() => {
    console.log(444); //微2
});

setImmediate(() => {
    console.log(666); //宏2
});

console.log(7777) //同2