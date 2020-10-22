# `NodeJS`

## `NodeJS`概述

### 相关概念

1. 同步和异步
   1. 判断标准：被调用者是否主动返回结果给调用者
   2. 同步
   3. 异步
2. 阻塞和非阻塞
   1. 判断标准：调用方在等待被调用方的返回结果时，是否可以做其他事。
   2. 阻塞
      1. 如果某项任务需要一定的时间来完成，程序会停在这里等待该任务完成再去执行之后的任务
   3. 非阻塞
      1. 如果某项任务需要一定时间来完成，程序并不会等待，而是会使用某种机制来处理，程序会继续执行之后的任务

### `global`

1. `global`的打印结果

   ```js
   {
         global: [Circular],
         clearInterval: [Function: clearInterval],
         clearTimeout: [Function: clearTimeout],
         setInterval: [Function: setInterval],
         setTimeout: [Function: setTimeout] { 				   		[Symbol(util.promisify.custom)]: [Function] },
         queueMicrotask: [Function: queueMicrotask],
         clearImmediate: [Function: clearImmediate],
         setImmediate: [Function: setImmediate] {
           [Symbol(util.promisify.custom)]: [Function]
   	}
   }
   ```

   

### `NodeJS`的事件轮询

1. 基本逻辑

   ​										怎么轮询回调队列

   ​										  微任务、宏任务

   ​							 哪些是微任务 哪些是宏任务

    			微任务中的顺序是怎样的  宏任务中的顺序是怎样的

2. `libuv`是如何处理计时器回调函数的

   1. 比如计时器时间为`1000ms`，那么`libuv`处理计时器就是在时间到了的时候把计时器回调函数放入轮询队列中

3. 当定时器中放了时间

   1. 例入定时器时间给了1000`ms`，第一次去宏任务队列中轮询时时间还没到，所以不会放到宏任务队列中，所以会先执行后面的立即执行宏任务(如果有的话)

### 模块化

#### 什么是模块化

1. 模块化指的就是将一个大的功能拆分为一个一个小的模块，通过不同的模块的组合来实现一个大的功能

#### `CommonJS`

1. `CommonJS`是一套规范，它里面包含模块，`Buffer`，字符集编码等
2. `Node`借鉴了`commonJS`的规范实现了一套模块系统
3. `CommonJS`对模块的定义主要为模块引用，模块定义和模块标识3个部分

#### 模块定义

1. 在`CommonJS`模块规范中，一个文件就是一个模块，模块有三种

   1. 自定义模块
   2. 第三方模块
   3. `nodejs`模块

2. 默认情况下，模块内部的代码对于外部来说是不可见的，写出来的东西要被外面用上才有意义，所以需要通过某种方式实现这种用处。称之为暴露

   1. 可以将变量或函数设置为`module.exports`的属性来暴漏变量和函数

      ```js
      module.exports.add = add;
      ```

   2. 可以把函数直接赋给`module.exports`对象，此时该对象的引用与模块种的函数指向同一地址

      ```js
      module.exports = add;
      ```

      `module.exports`保存的只是对象的引用，你现在把`add`的引用赋给了`module.exports`，`module.exports`的引用指向那个方法，那它现在当然就是一个方法了

   3. 可以将变量或函数设置为`exports`的属性来暴漏变量和函数

      1. 暴露出去的始终是`module.exports`对象，`exports`对象只是设置为指向`module.exports`对象

#### 模块引用

1. `Node`模块类型分为两种
   1. 核心模块：是`Node`种内置的模块
   2. 文件模块：一般是用户自定义的模块

2. 通过`require()`来引入外部模块，该方法得到的结果就是被引入模块种的`module.exports`对象的引用
3. 模块化都有一个入口文件
   1. 模块解析从入口文件开始解析
   2. 负责引入其它模块

面试题1

2 7 1 4 6 3

面试题2

4 3 1 2

面试题3

2 5 3 4 1

面试题4

1 4 8 5 2 6  3 9

1 4  12  8 2  6 3 9

面试题5

4 1 3  6  8 2 7  5

面试题6

1 2 3 5 4

1. 宏任务中嵌微任务
   1. 宏任务在执行下一阶段前会轮询该宏任务去寻找是否有微任务

2. 宏任务中嵌宏任务
   1. 依次放入宏任务队列

3. 微任务中嵌微任务
   1. 如果是`process.nextTick()`就仍然加入到微任务队列中
   2. 如果是其他微任务，则直接执行
4. 微任务中嵌宏任务
   1. 依次放入宏任务队列

面试题7

1  2  9  4 10 13 3 15  16 5  6 8 7



1 2 9 4 10 13 3 15 16 5 6 8 7

面试题8

1 2 19 3 5 4 20 9 10 11 17 6 7 13 12 16 8 15 14

1 2 19 3 5 4 20 9 10 11 17 

 微任务中的微任务中的宏任务