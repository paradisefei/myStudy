### `class`

1. `super()`

   1. 功能:调用父对象的构造函数

      ```js
      super
      1.调用父类的构造函数,新建父类的this对象
      2.实例化子类时,用子类的构造函数修改this
      ```

      

2. 继承机制

   1. `ES5` 的继承，实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面（`Parent.apply(this)`）。
   2. `ES6` 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到`this`上面（所以必须先调用`super`方法，如果不调用`super`方法，子类就得不到`this`对象。），然后再用子类的构造函数修改`this`。

## `Promise`

### `promise`对象

1. `promise`对象有两个值

   1. `PromiseState`

      1. 表示状态，有三种

         1. `pending`

         2. `fulfilled/resolved`

         3. `rejected`

   2. `PromiseResult`

      1. `Promise`构造器种的参数函数中的`resolve(),reject()`两个函数的参数会被保存创建出来的那个`promise`对象的这个位置
      2. 调用`then()`方法时传入到`executor`函数中的参数就是`promise`对象的这个值

### 构造创建`promise`对象

1. 如果没有给`Promise()`构造器传入参数，则会报错

   ```js
   const pro2 = new Promise();
   console.log(pro2);
   ```

2. 需要给`Promise()`构造器传入一个参数，这个参数是一个函数，这个函数本身是一个双参函数，要在这个函数中要执行异步代码

   ```js
   const pro1 = new Promise((resolve,reject) => {
       console.log("准备请求a数据");
       setTimeout(()=>{
           console.log("已经请求完成");
           /*
            1.是一个函数,异步代码执行成功后执行
   	    2.将promise的状态改为fulfilled
           3.传入的参数保存到promise的PromiseResult中
           	如果没有参数,则保存的时undefined
           */
           resolve();
           /*
            1.是一个函数,异步代码执行失败后执行
   	    2.将promise的状态改为rejected
           3.传入的参数保存到promise的PromiseResult中
           	如果没有参数,则保存的时undefined
           */
           // reject();
           
           /*
           如果没有调用这两个函数,则promise的状态一直都是pending
           */
       },1000)
   })
   
   console.log(pro1);
   ```

   

### `new Promise()`的返回值

就是最终保存在`promise`对象的`PromiseResult`的值

1. `Promise`构造函数的返回值

2. `executor`函数的返回值
   1. `executor`函数的返回值会被忽略,不管有没有`return`

3. `resolve(),reject()`的返回值
   1. 如果调用了这两个的任意一个
      1. 给了参数,返回值为这个参数
      2. 没给参数,返回值为`undefined
   2. 都没调用，返回值为`undefined`

4. `executor`函数有异常，根据执行`resolve()/reject()`情况而定

### `then()`

1. 功能
   1. 返回一个`promise`对象

2. 参数`pro.then(onFulfilled[, onRejected])`

   1. `onFulfilled`
      1. 功能
         1. 是一个函数
         2. 当pro为`fulfilled`状态时调用的函数
      2. 参数`onFulfilled(success)`
         1. 可选
         2. 为此时`pro`对象的`PromiseResult`的值
   2. `onRejected`
      1. 功能
         1. 是一个函数
         2. 当pro为`rejected`状态时调用的函数
      2. 参数`onRejected`(err)`
         1. 可选
         2. 为此时`pro`对象的`PromiseResult`的值

3. 返回值

   `then`本身是一个方法,本身会返回一个`Promise`

   `then`的参数也是一个方法

   `then`的返回值根据`then`中的回调函数的返回值来确定

   1. 返回一个值(基本类型/引用类型)
      1. `then`返回的`Promise`中`[[PromiseState]]`为`fulfilled`,`[[PromiseResult]]`为返回的这个值

   2. 没有返回值
      1. `then`返回的`Promise`中`[[PromiseState]]`为`fulfilled`,`[[PromiseResult]]`为`undefined`

   3. 返回`Promise`

   ​	`then`返回的`Promise`中`[[PromiseState]]`,`[[PromiseResult]]`和回调函数返回的一致

   4. 抛出异常

     `then`返回的`Promise`中`[[PromiseState]]`为`rejected`,`[[PromiseResult]]`为抛出的错误的字符串

### `catch()`

### `finally()`