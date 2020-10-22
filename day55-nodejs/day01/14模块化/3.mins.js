function mins(a,b){
    return a - b;
}

/* 使用exports进行暴露 */

//直接在exports上扩展是可行的
// exports.mins = mins;

//把exports的引用指向mins不可行，因为require方法得到的始终是module.exports对象，而exports只是其引用指向了module.exports而已，像下面这样直接改引用最后是的module.exports上并没有东西
exports = mins;