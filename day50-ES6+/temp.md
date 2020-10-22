## `iterator`

### 什么是`iterator`

1. `JavaScript` 原有的表示“集合”的数据结构，主要是数组（`Array`）和对象（`Object`），`ES6` 又添加了`Map`和`Set`。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是`Map`，`Map`的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。
2. 遍历器（`Iterator`）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署` Iterator` 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
3. Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 `ES6` 创造了一种新的遍历命令`for...of`循环，`Iterator` 接口主要供`for...of`消费。

### `for...of...`

1. 凡是拥有`iterator`接口的对象，都有一个`Symbol(Symbol.iterator)`方法，调用这个方法即可得到遍历当前对象的迭代器对象
2. 每个迭代器对象都一个`next()`方法，调用这个方法得到一个对象`{value,done}`，`value`表示原本键值对中的值，`done`表示是否遍历完
3. `for...of...`循环就是每次拿出调用`next()`方法后得到的对象中的`value`赋给定义的用于循环的变量的

### 手撕`iterator`

```js
        const arr = ["a", "b", "c", "d"];

        Array.prototype.myIterator = function () {
            //声明一个累加器，用来判断遍历是否完成
            let index = 0;
            //原型对象的方法this指向实例化对象
            //返回一个对象，对象中有next方法，可以依次拿到值
            // console.log(this)
            const _this = this; //保存当前的this指向，用来在其他地方使用
            return {
                // 调用next方法后返回一个对象：{value:XXX,done:false}
                next: function () {
                    // console.log(this) //指向的是当前next所在的对象，不是当前的数组
                    if (index < _this.length) {
                        return {
                            value: _this[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }

        const re = arr.myIterator();
```

## `Generator`

### `Generator`

1. 状态机，里面保存了很多的状态，是异步编程的一种解决方案

```js
	/* 
        Generator:状态机  里边保存很多的状态
        是异步编程的一种解决方法

     */

    function* gen() {
        console.log(0); //随着第一次next的调用
        yield console.log(1);
        yield console.log(2);
        yield console.log(3);
        yield console.log(4);
        yield console.log(5);
    }
    const re = gen(); //gen调用以后，返回一个迭代器对象
    console.log(re);
    re.next(); //每次调用1次 next方法 就会一次调用yield后边的语句
    re.next();
    re.next();
    re.next();
```

2. 练习

```js
    <script>
        /* 
            先请求a数据 再请求b属性 再请求c数据
            计时器模拟替代请求数据
         */
        function* getData() {
            yield setTimeout(() => {
                console.log("a数据请求成功");
                re.next(); //当a请求完之后，自动调用next方法
            }, 1000);
            yield setTimeout(() => {
                console.log("b数据请求成功")
                re.next();
            }, 1000);
            yield setTimeout(() => {
                console.log("c数据请求成功 全部完成~")
            }, 1000);
        }
        const re = getData(); //只是返回一个迭代器对象
        // console.log(re);
        re.next("开启请求a了"); //当调用next方法的时候，就开始请求了


        // function* getData() {
        //     yield setTimeout(() => {
        //         console.log("a数据请求成功");
        //     }, 1000);
        //     yield setTimeout(() => {
        //         console.log("b数据请求成功")
        //     }, 1000);
        //     yield setTimeout(() => {
        //         console.log("c数据请求成功 全部完成~")
        //     }, 1000);
        // }
        // const re = getData(); //只是返回一个迭代器对象 
        // for (let value of re) {
        //     console.log(value)
        // }
    </script>
```

### `async`

1. `async`是一个关键字

2. `async`放在`function`前面,这样就定义了一个`async`函数,调用之后会返回一个`promise`对象

3. 返回值
   1. 没有`return`时,默认返回成功状态的`promise`对象,值为`undefined`
   2. 如果`return`了一个值,则返回一个成功的`promise`对象,值为`return`的内容
   3. 如果`return`了一个`promise`,则`async`函数的返回值就是这个`promise`对象

```js
        async function fn() {
            console.log("hello 我是async函数");
            await new Promise((resolve, reject) => {
                resolve(1);
                // reject(1);
            })
        }

        const re = fn();
        console.log(re);
```

### `await`

1. 是一个关键字

2. 表示等待,`await `表达式,等待后面的表达式处理
   1. 如果后面是`Promise`对象,就返回该`Promise`对象的处理结果
      1. 如果后面的`Promise`对象返回成功状态,则继续向下运行,`await`的返回值是`resolve`参数,最后`async`函数返回一个成功的`Promise`对象
      2. 如果后面的`Promise`对象返回的是失败状态,则停止运行,`async`函数返回这个失败的`Promise`对象
   2. 如果等待的不是`Promise`对象,则返回后面本身

3. 只能在异步函数`async function`中使用

```js
        async function fn() {
            console.log("我是用async定义的函数");

            // const res1 = await new Promise((resolve, reject) => {
            //     console.log("我要成功");
            //     resolve("成功");
            // })
            const res1 = await new Promise((resolve, reject) => {
                throw new Error()
                console.log("失败了");
                reject("err")
            })
            console.log(res1)
        }
        const res = fn();
        console.log(res);
```



## `class`

#### `class`

1. `js`中没有类的概念，所谓的类只是封装了一个函数当作构造函数

   ```js
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   Person.prototype.eat = function () {
       console.log("吃饭");
   }
   ```

2. `ES6`中引入了`class`语法糖来实现类的创建

   1. `constructor`：必须存在，当`new`的时候会自动调用这个方法，如果没有显式定义，会默认添加一个空的`constructor`方法

   2. 直接添加在类中的属性或方法相当于之前的扩展在原型对象上的属性和方法

   3. 如果使用了`static`关键字，相当于之前的直接扩展在构造函数对象上的属性或方法

   4. 同样也还可以在原型对象上扩展

      ```js
              class Person {
                  //constructor:当new的时候，会自动调用这个方法，必须存在（书写公有属性）
                  constructor(name, age) {
                      //其实写在构造函数中的属性 都放在了constructor中
                      this.name = name;
                      this.age = age;
                  }
                  //直接书写在class中的方法 其实就是原型对象上的公有方法
                  eat() {
                      console.log("吃饭");
                  }
      
                  //如果直接在class中书写属性，则还是实例化对象所有的（这样写无法传参）
                  sex = "男";
      
                  // static定义的属性和方法 其实都是静态属性和方法  是构造函数对象上的
                  static hi = "hello";
              }
              //也可以通过原型对象扩展原型方法
              Person.prototype.drink = function () {
                  console.log("大乌苏");
              }
      ```

      

#### `extends`

1. 原理：原型对象+构造函数继承

   1. `extends`实现原型对象的继承

   2. `super()`方法实现构造函数的继承

      ```js
      super():调用父对象的构造函数
      1.调用父类的构造函数,新建父类的this对象
      2.实例化子类时,用子类的构造函数修改this
      ```

      

   ```js
           //定义一个Student类 继承 Person类
           class Student extends Person {//extends实现原型对象的继承
               constructor(project, name, age) {
                   // ES6中继承的子类中，如果使用构造函数constructor()那么就必须使用super()方法初始化，这样下面才可以调用this关键字。super()只能用在子类的构造函数之中，用在其他地方就会报错,这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。
                   super(name, age);//super实现构造函数的继承
                   this.project = project;
               }
               study() {
                   console.log("我最喜欢ES6了")
               }
           }
   ```

   

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

### `Promise`原型对象上的方法

#### `then()`

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

#### `catch()`

#### `finally()`

### `Promise`对象上的方法

#### `Promise.all()`

1. `Promise.all(iterable)`
   1. 功能
      1. 返回一个`Promise`实例
         1. 如果`iterable`中所有的`promise`都是`resolve`
   2. 参数
      1. 一个可迭代对象,如`Array`或`String`
   3. 返回值
      1. 如果都是`fulfilled`的`promise`,则返回一个成功状态的`promise`,`PromiseResult`中保存的是一个数组,数组中的每一项是每个`resolve()`的参数
      2. 如果返回的是一个`rejected`的`promise,`则这个`promise`中`PromiseResult`的值是遍历到的第一次为`rejected`的`promise`的`rejected()`的参数

#### `Promise.race()`

1. 需求： 同时请求三个数据，要拿到最先请求到的数据
2. `race`方法返回`promise`对象，`promise`对象的状态是`race`中第一个执行完成的那个`promise`的状态（无论成功还是失败）

#### `Promise.allSettled()`

1. 需求:同时请求三个数据,当全部请求完以后,接受所有请求的状态
2. 结果
   1. 返回一个`promise`对象
   2. 只要里面的`promise`对象没有执行完成,则该方法返回的就是`pending`状态的`promise`对象
   3. 只要里边的`promise`对象全部完成了,则该方法返回`fulfilled`状态的`promise`对象(无论里边的是成功还是失败),此时`[[PromiseResult]]`中保存的是数组,数组中保存包含每个promise`对象两个值的普通对象

#### `Promise.resolve()`

1. 直接返回一个成功状态的`promise`对象

#### `Promise.reject()`

1. 直接返回一个成功状态的`promise`对象