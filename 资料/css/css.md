<!--
 * @Author: 41
 * @Date: 2022-03-04 14:14:26
 * @LastEditors: 41
 * @LastEditTime: 2022-03-08 17:06:51
 * @Description: 
-->
### BFC如何形成？BFC 与 IFC 的区别
- `块级格式化上下文`如果元素想触发BFC的话，会让元素形成一个独立的区域，不会收到外界的干扰，并且也不会影响到外部的情况就会形成一个BFC
  - 1.使用浮动
  - 2.使用绝对定位和固定定位
  - 3.overflow:hidden
- `内联格式化上下文`当display设置为inline-block的时候会产生一个IFC.
  - 主要影响IFC内布局的CSS属性:
    - 1.font-size
    - 2.line-height
    - 3.height
    - 4.vertical-align
- 区别
  - 在BFC中只会包含块级元素，在IFC中只会包含行内元素。
  - BFC内部的块级元素会在垂直方向，一个接一个地放置；IFC里行内元素是一个接一个从顶部水平放置。

### position有什么属性？fixed和absolute区别
- position属性
  - static
  - relative
  - absolute
  - fixed
  - center(css3)
  - page(css3)
  - sticky(css3)：relative+fixed
- 区别
  - 相对定位的元素不同：absolute是相对于离它最近的有定位的父元素进行定位（如果没有定位的父元素则相对于浏览器窗口）；fixed是相对于浏览器窗口定位
  - 在有滚动条的页面中，absolute会跟随页面滑动，fixed不会滑动，始终固定在同一位置

### 行内元素，块级元素 
- 行内元素 `p,span,a,b,i,u,em`
  - 1.行内元素只能容纳文本或者其他行内元素
  - 2.宽度只与内容有关
  - 3.和其他元素都在一行上
  - 4.高，行高及外边距部分可改变
- 块级元素 `div,h,li,dt,dd`
  - 1.高度，行高以及外边距和内边距都可控制
  - 2.总是在新行上开始，占据一整行
  - 3.它可以容纳内联元素和其他块元素
  - 4.宽度始终和浏览器宽度一样，与内容无关
- 区别
  - 1.行内元素会在一条直线上排列，同一行;2.块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行
  - 1.块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素
- 两者的转换
  - 1.display:inline
  - 2.display:block
- 行内元素的padding,margin是否有效？
  - 1.padding-top,padding-bottom,margin-top,margin-bottom 无效
  - 2.padding-left,padding-right,margin-left,margin-right 有效
  - 3.padding-top,padding-bottom从显示的效果上是增加的，但其实设置的是无效的

### 盒模型
margin+border+padding+content
- 标准盒模型      总宽度=width+margin(左右)+padding(左右)+border(左右)
- 怪异盒模型(IE)  总宽度=width+margin(左右)



### display:none,visibility:hidden,opactiy:0 的区别
- 1.display不占据空间，后者会占据
- 2.子元素继承，前者不继承，后者会继承
- 3.事件绑定，前端无法触发，后面可以触发
- 4.过渡动画，opacity有效

### 其他
- translate(x,y) 括号里填百分比数据的话，会以本身的长宽做参考
- 百分比 padding，margin是相对于父元素的宽度width计算的，margin上下左右都是如此。





