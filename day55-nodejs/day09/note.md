1. 刷新页面会重新请求
2. 提交时，不走页面请求，走`ajax`请求
3. 服务器如何获取`ajax`请求的数据

### `Ajax`请求

1. 请求

   1. 页面请求
   2. `ajax`请求

2. `ajax`请求

   1. 无需进行页面请求，通过事件驱动`ajax`请求

3. 使用

   1. 核心对象

      1. `XMLHttpRequest`
         1. 作构造函数使用
         2. 构造调用，创建一个`ajax`请求

   2. 步骤

      1. 创建`ajax`请求

         `const xhr = new XMLHttpRequest()`

      2. 进行连接

         `xhr.open()`

      3. 发送请求

         `xhr.send()`

   3. 事件驱动

4. `jQuery`中的`Ajax`







#### 三级联动

需求

1. 选择某个省份，下拉市时出现对应的市，选择某个市，下拉区县出现对应的区县
2. 每一次重新选择省份时，市和区县的选择重置

T

1. 前端页面

   T

   1. `select`下拉列表
   2. `js`代码后端请求数据生成数据

   L

   1. 3个select下拉列表

      1. 每个下拉列表先写3个option标签

      

2. 服务器

   T

   1. 成功开启服务器
   2. 连接数据库
   3. 路由处理`ajax`请求

   L

   1. 引入express模块
   2. 创建服务
   3. 监听
   4. 连接数据库
      1. 引入mongoose
      2. 连接数据库
      3. 检测数据库连接是否成功
      4. 创建schema实例化对象
      5. 创建model对象
      6. 实现对数据库的操作
      7. 模块化

   查询字符串请求不同的数据

   1. `province`请求
      1. 页面加载进来时，就会把所有省份信息加载进来
   2. 原生`ajax`请求
      1. 创建`ajax`对象
      2. 建立连接
      3. 发送请求
      4. 获取响应

3. 数据库

   1. 导入数据





P

思想

1. 所有东西我都要自己写出来
2. 不可能所有东西都能完全自己写出来的，我需要什么就去网上找到我需要的
3. 人家设计好的，你只需要厘清如何去实现就好了
4. 而你的思想是相当于你来设计，你要让它怎么实现它就应该怎么实现
5. 实现需求是一个，在实现这个需求的过程中学习使用这些东西也是很重要的一点
6. 一个是你的需求，你要做的事，一个是要实现这样一个需求程序中是用什么样的逻辑去实现的，在实现过程中用到了哪些东西
7. 在做东西的过程中并不就是完全用你之前所学去实现，在做的过程中也是需要学习新的东西的，你完全把学和做分开了





























