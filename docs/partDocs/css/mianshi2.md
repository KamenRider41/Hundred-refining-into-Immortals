# 面试题二 :star:
## 1.使用css3实现动画？
::: details 点击查看答案
- transition 实现渐变动画
- transform 转变动画
- animation 实现自定义动画
:::


## 2.怎么理解回流和重绘？什么场景下触发？
::: details 点击查看答案
- 回流:布局引擎会根据各种样式计算每个盒子在页面上的大小与位置
- 重绘:当计算好盒模型的位置，大小及其他属性后，浏览器根据每个盒子特性进行绘制
***
- 解析HTML，生成DOM树，解析CSS，胜场CSSOM树
- 将DOM树和CSSOM树结合，生成渲染树(render tree)
- layout(回流):根据生成的渲染树，进行回流layout，得到节点的几何信息(位置，大小)
- painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display:将像素发送给GPU，展示在页面上
:::


## 3.css性能优化？
::: details 点击查看答案
- 内联首屏关键css
- 异步加载css
  - 使用javascript将link标签插到head标签最后
  - 设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型,会在不阻塞页面情况下下载，加载完成后，将media的值设为screen或all，从而让历览器开始解析css
  - 通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet
- 资源压缩
  - webpack等，将css代码进行压缩
- 合理使用选择器
- 减少使用昂贵的属性(box-shadow,border-radius,filter,:nth-child)
- 不要使用@import

- 减少重排重绘
- 避免重复编写
- 小icon图转成base64编码
- 过渡尽量使用transform和opacity来完成
:::


## 4.css3新增特性？
::: details 点击查看答案
- 新增伪类选择器
- box-shadow，border-radius，border-image
- background-clip,background-origin，background-size
- word-wrap，text-shadow，text-decoration
- rgba，hala
- transition
- transform
- animation
- linear-gradient
- flex，grid
:::


## 5.css预编语言，区别？
::: details 点击查看答案
- sass less stylus
:::


## 6.display:none,visibility:hidden,opactiy:0 的区别
::: details 点击查看答案
- 1.display不占据空间，后者会占据
- 2.子元素继承，前者不继承，后者会继承
- 3.事件绑定，前端无法触发，后面可以触发
- 4.过渡动画，opacity有效
:::


## 7.position有什么属性？fixed和absolute区别
::: details 点击查看答案
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
:::


## 8.BFC如何形成？BFC 与 IFC 的区别
::: details 点击查看答案
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
:::
