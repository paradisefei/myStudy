### 米课

需求

1. 响应式
2. 米课图片有三种状态
3. 菜单栏有两种状态

逻辑

1. header

2. 左边为`div`

   1. 三张图片

   2. 默认情况下隐藏

   3. 在不同的尺寸下不同显示对应的

      1. 先框定好对应宽度

      

3. 中间为`form`

4. 右边为div

   1. ul
   2. span

p

1. less中的媒体查询中的属性是其所在选择器中的属性

2. less中写a的hover

   ```less
   a {
      text-decoration:none;
      color:#333;
      &:hover {
           color:white;
      }
   }
   ```

3. `less`设置某个元素的伪元素

   ```less
   span {
       width: 50px;
       height: 5px;
       background-color: white;
       display: block;
       position:relative;
       &:before {
           content:"";
           width: 50px;
           height: 5px;
           background-color: white;
           position:absolute;
           left:0px;
           top:-10px;
       }
       &:after {
           content:"";
           width: 50px;
           height: 5px;
           background-color: white;
           position:absolute;
           left:0px;
           top:10px;
       }
   }
   ```

   

### 栅格系统

1. 一个column在一个时间只有一个类生效，但不管什么时候这些column都是浮动的，只是这些`div`在不同的时候作用在其上的样式不同就有了不同的效果，所以重点是每一个类

逻辑

1. `container`有左右边距
2. `row`清浮动
3. 让每一个类都有浮动的效果
4. 进行媒体查询
   1. `>=1200`
      1. `lg`生效
      2. 数值为1时，宽度占1/12
   2. `992<=x<1200`
      1. `md`生效
   3. `768<=x<992`
      1. `sm`生效
   4. `x<=768`
      1. `xs`生效