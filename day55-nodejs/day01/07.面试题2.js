process.nextTick(() => {
    console.log('process.nextTick() 333'); //微0
})

setTimeout(() => {
    console.log('setTimeout()  111'); //宏1
}, 0)

setImmediate(() => {
    console.log('setImmediate() 222'); //宏2
})

console.log('全局代码执行完了 444'); //同1