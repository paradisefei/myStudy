const EventEmitter = require("events");

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

//注册事件
myEmitter.on("hello",() => {
    console.log("我是hello事件");
})

//触发事件
myEmitter.emit("hello");

setTimeout(() => {
    myEmitter.emit("hello");
},2000)