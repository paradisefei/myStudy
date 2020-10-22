

### 严格模式

1. 严格模式改变了哪些行为

### `let`

![image-20200924144437474](C:\Users\Bradon\Desktop\image-20200924144437474.png)

1. 在全局中打印`i`时报错`not defined`，说明`i`不是全局作用域中的
2. 在for循环的代码块中再`let`一个`i`时，程序能正常运行，说明这里的`i`和for循环的声明语句中的`i`不是同一个作用域中的`i`。(因为不能在同一个作用域中`let`两个同名的变量)
3. 因此声明语句中是一个作用域，代码块中也是一个作用域，并且声明语句的作用域属于代码块的父作用域，这样的话每一次循环声明语句中的i都会驻留在代码块中
4. 在父子嵌套的作用域中的驻留和在同一个作用域中的驻留



3. 变量少了也能成功

   ```js
   {
       let [a] = [1, 2];
       console.log(a) //1
   }
   ```

4. 可以给解构赋值的变量设置默认值

   ```js
   {
       const [a = 2, b = 1] = [9];
       console.log(a, b) //9 1
   }
   ```

5. 可以使用`rest`参数，必须书写在最后一个，是一个数组，包含了剩余没有解构的元素

   ```js
   {
       const [a, b, ...c] = [1, 2, 3, 4, 45, 6, 7, 8, 99];
       console.log(a, b, c) //1 2 [3, 4, 45, 6, 7, 8, 99]
   }
   ```

6. 多维数组也可以进行匹配

   ```js
   {
       const arr = [1, [2, 3, [4, [5]], 6], 7];
       const [a, [b, c, [d, [e]], f], g] = arr;
       console.log(a, b, c, d, e, f, g);
   }
   ```

   2. 可以给默认值

   ```js
   {
       //对象解构也可以给默认值
       const {
           name = "xiaoli",
               age,
               score = 90
       } = obj;
       console.log(name, age, score) //laoli 19 90
   }
   ```

   3. 可以嵌套解构

      ```js
      {
          //可以嵌套解构
          const obj = {
              name: "laoli",
              score: [100, 90, 80]
          }
          const {
              name,
              score: [ch, ma, en]
          } = obj;
          console.log(name, ch, ma, en) //laoli 100 90 80
      }
      ```

      