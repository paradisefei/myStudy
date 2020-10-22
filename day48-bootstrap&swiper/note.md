### 全局`css`样式

1. `scaffolding.less`设置了基本的全局样式

### `table`

1. 基本实例，直接加`table`类名
2. 条纹状表格

想要什么样的，自己写

已经有写好了样式的，直接拿来用

1. 所以先要找有什么样的
2. 然后是怎么用







#### `offset`

1. 列偏移
2. 如`col-md-offset-5`表示元素向左偏移`5`份
3. 通过`margin-left`实现向左偏移，超过了的话就会换行，右边的也会跟着动

#### `pull`

1. 向左拉
2. 如`col-md-pull-4`表示向左拉`4`份
3. 通过`right`实现，所以超过12份也不会换行
4. 元素本身的长度不变

#### `push`

1. 向右推
2. 如`col-md-push-4`表示向右推4份
3. 通过`left`实现，所以超过12份也不会换行
4. 元素本身的长度不变



call有哪些应用

1. 将伪数组转为数组

   ```js
   var arrLike = {
       0:'a',
       1:'b',
       2:'c',
       3:'d',
       length:4
   }
   /*
   slice如果不给参数的话,返回的是当前数组
   */
   var res = Array.prototype.slice.call(arrLike);
   console.log(res);
   ```

2. 检测数据类型

   ```js
   console.log(Object.prototype.toString.call(null));
   ```

   

