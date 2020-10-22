### `nodeJS`外层函数

1. 在`nodeJS`中，一个`js`文件就是一个模块，在运行每个模块代码时，会将代码放入一个我们看不见的外层函数中运行，如下

   ```js
   function(exports,require,module,__filename,__dirname){
       
   }
   ```

   因此我们可以在模块代码中直接使用`exports、require`等

2. 其中的形参所代表如下
   1. `exports`:保存的是`module.exports`的引用
   2. `require`是一个方法(模块加载方法)
      1. 功能：引入模块
      
      2. 参数
         1. 以`"/"`开头，表示加载的是一个位于绝对路径的模块文件
            1. `require('/home/marco/foo.js')`
         2. 以`"./"`或`"../"`开头，表示加载的是一个位于相对路径的模块文件
            1. `require('./circle')`
         3. 不是以上面两个开头，而是直接写了一个名字，就表示此时加载的是`node_module`中的模块
         4. 如果既不是以上面的开头，也不是直接写一个名字，而是写了一个路径如`require('example-module/path/to/file')`，则会先通过第三种方式找到`example-module`，然后再去寻找后面的路径
         
      3. 参数
      
         1. 本地模块
      
            1. 相对于`__dirname`或当前工作目录
            2. `const myLocalModule = require('./path/myLocalModule');`
      
         2. 本地`json`文件
      
            1. `const jsonData = require('./path/filename.json');`
      
         3. 从`node_modules`中引入或是`Node.js`的内置模块
      
            1. `const crypto = require('crypto');`
      
         4. 怎么找文件
      
            1. 确定路径
      
            2. 如果是有后缀的，就直接找到这个文件
      
            3. 如果没有后缀的话，如`require(X)`
      
               1. 先把`X`当成文件，依次以`.js .json .node`次序补充扩展名进行查找
      
               2. 如果当成文件时没有找到，就把`X`当成文件夹，依次查找下面文件
      
                  ```js
                  X/package.json（main字段）
                  X/index.js
                  X/index.json
                  X/index.node
                  ```
      
                  
      
      4. 返回值
      
         1. 就是对应文件的`module.exports`的值

#### `require()`源码解读

1. 内置模块
2. 所有模块都是`Module`这个构造函数的实例
3. 比如引入`jQuery`时返回值是什么？
   1. 并不是你之前理解的一整个文件夹，而是会去找到某个具体的文件，然后看文件里面的`module.exports`的值
1. 执行`nodejs`的代码时，Node会把模块代码放入一个外层函数中，并且在外面准备了一个对象`module`，对象中有一些属性
2. 在执行模块代码时把module对象传进去，开始执行模块代码，碰到给`module.exports`赋值时就赋值
3. 执行require方法，源码中是就是去找到目标文件然后最终返回被引用模块的`module.exports`的值



### `Buffer`

1. 功能
   1. 内存方面
   2. 要保存一个东西的话是要先申请内存的
   3. `V8`引擎内存是有限制的
   4. 当需要一个超过限制的内存时，就需要用到这个缓冲区
2. `api`
   1. `Buffer.alloc()`
      1. 参数`Buffer.alloc(size[,fill[,encoding]])`
         1. `size`
            1. 分配内存的大小
         2. `fill`
            1. 用于填充Buffer的值
         3. `encoding`
            1. 字符编码，默认值为`utf-8`
      2. 功能
         1. 申请一个大小为`size`字节的`Buffer`
         2. 如果`fill`为`undefined`，则用`0`填充
   2. `Buffer.allocUnsafe()`
   3. `Buffer.from()`
      1. 参数可以为字符串，即`Buffer.from(string[,encoding])`
      2. 功能：创建一个包含`string`的新`Buffer`

### `process`

1. `process`是什么

   1. 是`Node.js`中的一个全局对象
   2. 与进行方面相关
      1. 获取进程信息
      2. 执行进程操作

2. 相关属性

   1. `process.argv`

      1. 返回值

         1. 一个数组，其中包含当`Node.js`进程被启动时传入的命令行参数	

         ```js
         PS D:\2-learn\atguigu\note\1.my-day\day56-module> node .\08.process.js hello world
         
         下面是输出的结果
         [
           'C:\\Program Files\\nodejs\\node.exe',
           'D:\\2-learn\\atguigu\\note\\1.my-day\\day56-module\\08.process.js',
           'hello',
           'world'
         ]
         ```

         

   2. `process.argv0`

3. 相关方法

   1. `process.cwd()`
   2. `process.exit()`



### `path`

1. 功能
   1. 路径相关的工作
2. `api`
   1. `path.resolve()`
      1. 参数
         1. 路径片段
      2. 功能
         1. 处理路径片段得到绝对路径
         2. 相当于进行了一系列的`cd`操作

### `fs`文件系统

1. 功能
   1. 文件系统，对计算机中的文件进行增删改查等操作
   2. 文件系统是一个服务器的基础
   3. 在`Node`中通过`fs`模块来操作文件系统，`fs`模块是`Node`中的核心模块
2. `api`
   1. 打开文件
      1. `openSync()`
         1. 参数(地址，写入方式)
         2. 返回值：文件标识(类似于计时器句柄)
      2. `open()`
   2. 写入
      1. `writeSync()`
         1. 参数：（文件标识，写入的内容）
      2. `write()`
   3. 关闭文件
      1. `closeSync()`
         1. 参数：（文件标识）
      2. `close`