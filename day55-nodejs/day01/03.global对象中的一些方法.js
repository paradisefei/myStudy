//setTimeout
setTimeout(() => {
    console.log("setTimeout");
},1000)
//setInterval
/* setInterval(() => {
    console.log("setInterval");
},1000) */
//setImmediate()
setImmediate(() => {
    console.log("setImmediate");
})
//queueMicrotask()
queueMicrotask(() => {
    console.log("queueMicrotask");
})
console.log("global");

process.nextTick(() => {
    console.log("process.nextTick");
})