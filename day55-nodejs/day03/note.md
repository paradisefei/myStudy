### `node`搭建服务器

1. 逻辑
   1. 本质上就是一个`node`程序
   2. `node`的核心模块`http`中有一个`Server`对象，这个对象就是用来处理请求的，相当于就是一个后台服务
   3. 开启一个服务
   4. 让该服务监听某个网址的端口
2. 步骤
   1. 创建一个后台服务
   2. 启动服务
3. `api`
   1. `http.createServer()`
      1. 功能
         1. 创建一个后台服务
      2. 参数
      3. 返回值
         1. 返回一个`http.server`实例
   2. `server.listen([port[,host[,backlog]]][,callback])`
      1. 功能
         1. 启动一个`TCP`服务监听输入的`port`和`host`
         2. 服务器监听输入 的`port`和`host`
      2. 参数
         1. `port`:端口号
         2. `host`:地址
            1. `ip`地址是网络协议地址
   3. 搭建服务器
      1. 逻辑
         1. 引入`http`模块
         2. 创建一个后台服务
            1. 回调函数，处理请求和返回响应
            2. 处理响应
               1. `response.end([data[,encoding[,callback]]])`
                  1. 功能
                     1. 结束响应，告诉服务器所有消息已经传送完毕，当所有要返回的内容传送完毕时，该方法必须被呼叫一次。如果不呼叫该方法，客户端将永远处于等待状态
                  2. 参数
                     1. `data`
                        1. `end()`执行完后输出的内容
                        2. 如果指定了`data`，相当于执行完`response.write(data,encoding)`之后再调用`response.end(callback)`
                     2. `encoding`
                        1. 对应`data`的字符编码
                     3. `callback`
                        1. 如果指定了`callback`，则当响应流完成时将会调用该回调函数
         3. 服务器监听

### 流式读写

#### 流式读取

1. `api`
   1. `fs.createReadStream()`
   2. `on()`
      1. 绑定事件
         1. `data`
         2. `end`

#### 流式写入

1. `api`
   1. `fs.createWriteStream()`
   2. `on()`
      1. 绑定事件
         1. `open`
         2. `close`
   3. `end()`
   4. `close()`

### `EventEmitter`

1. 逻辑
   1. `node`的特点之一就是事件驱动，`EventEmitter`是实现事件驱动的基础
2. `api`
   1. `eventEmitter.on()`
      1. 功能
         1. 注册监听器
   2. `eventEmitter.emit()`
      1. 功能
         1. 触发事件