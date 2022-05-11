---
  sidebarDepth: 3
---

# CSS
::: tip
`CSS`作为前端基础三项之力的颜值担当,是必须要掌握的！:star:
:::


## 面试题一 :star:
### 1.css垂直居中有哪些实现方式？
::: details 点击查看答案
- 1.relative+absolute+left+top+translate
- 2.relative+absolute+0000+margin:auto
- 3.relative+absolute+left+top+margin:width/2
- 4.转行内元素，text-align+inline-block+vertical-align
- 5.table-cell+text-align+vertical-align+inline-block
- 6.flex+justify-content+align-items(align-self)
- 7.grid+justify-items+align-items(align-self)
:::


### 2.怎么让CSS flex布局最后一行列表左对齐？
::: details 点击查看答案
- 1.模拟space-between和间隙
```css
.container {
    display: flex;
    flex-wrap: wrap;
}
.list {
    width: 24%; height: 100px;
    background-color: skyblue;
    margin-top: 15px;
}
.list:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
}
```
- 2.根据个数最后一个元素动态margin
```css
.container {
    display: flex;
    /* 两端对齐 */
    justify-content: space-between;
    flex-wrap: wrap;
}
.list {
    width: 24%; height: 100px;
    background-color: skyblue;
    margin-top: 15px;
}
/* 如果最后一行是3个元素 */
.list:last-child:nth-child(4n - 1) {
    margin-right: calc(24% + 4% / 3);
}
/* 如果最后一行是2个元素 */
.list:last-child:nth-child(4n - 2) {
    margin-right: calc(48% + 8% / 3);
}
```
- 3.最后一项margin-right:auto
- 4.伪元素flex:auto或flex:1
```CSS
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list {
    background-color: skyblue;
    margin: 10px;
}
/* 使用伪元素辅助左对齐 */
.container::after {
    content: '';
    flex: auto;    /* 或者flex: 1 */
}
```
- 5.grid布局
```CSS
.container {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-gap: 10px;
}
.list {
    width: 100px; height:100px;
    background-color: skyblue;
    margin-top: 5px;
}
```
:::


### 3.相邻的两个inline-block节点为什么会出现间隔，该如何解决？
::: details 点击查看答案
同样地 我们使用CSS更改非inline-block水平元素为inline-block水平，也会有该问题：

元素被当成行内元素排版的时候，`元素之间的空白符`（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以`inline-block`的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素`font-size:16px`时，间距为`8px`。

- 1.移除空格
元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就木有了。考虑到代码可读性，显然连成一行的写法是不可取的，我们可以：
```HTML
<div class="space">
    <a href="##">
    惆怅</a><a href="##">
    淡定</a><a href="##">
    热血</a>
</div>
***
<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
</div>
***
<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
</div>
```
- 2.使用margin负值
```CSS
.space a {
    display: inline-block;
    margin-right: -3px;
}
```
- 3.HTML闭门羹
```HTML
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血
</div>
```
- 4.使用font-size:0
```CSS
.space {
    font-size: 0;
}
.space a {
    font-size: 12px;
}
```
- 5.使用letter-spacing或者word-spacing
```CSS
.space {
    letter-spacing: -3px;
}
.space a {
    letter-spacing: 0;
}
```
:::


### 4.display有哪些取值？
::: details 点击查看答案
display属性可以设置元素的内部和外部显示类型。
- 元素的外部显示类型将决定该元素在流式布局中的表现(块级或内联元素)
- 元素的内部显示类型可以控制其子元素的布局(例如：flow layout，grid或flex)

|值|描述|
|--|--|
|none         |元素不会显示|
|block        |此元素将显示为块级元素,此元素前后会带有换行符|
|inline       |默认。此元素会被显示为内联元素，元素前后没有换行符|
|inline-block |行内块元素(css2)|
|inline-table |此元素作为内联表格来显示(类似table),表格前后 没有换行符|
|table        |此元素会作为块级表格来显示(类似table),表格前后带有换行符|
|inherit      |规定应该从父元素继承display属性的值|
|grid         |网格布局(Grid)是最强打的CSS布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局|
|flex         |弹性布局，用来为盒状模型提供最大的灵活性|
***
一些不常用的display
- flow/flow-root  // 解决BFC浮动塌陷！
- ruby //亚洲人福音
- table-cell

***

grid真的太优雅了！

:::


### 5.如何从html元素继承box-sizing？
::: details 点击查看答案
在大多数情况下我们在设置元素的border和padding并不希望改变元素的width,height值，这个时候我们就可以为该元素设置`box-sizing:border-box;`
```CSS
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
:::


### 6.说说你对盒子模型的理解？
::: details 点击查看答案
一个盒子由四个部分组成:content，padding，border，margin
`box-sizing: content-box|border-box|inherit;`
标准盒模型(width+margin+padding+border)和怪异盒模型(width+margin)
:::


### 7.css选择器有哪些？优先级分别是什么？哪些属性可以继承？
::: details 点击查看答案
- 常用选择器有：
```
- id选择器（#box），选择id为box的元素
- 类选择器（.one），选择类名为one的所有元素
- 标签选择器（div），选择标签为div的所有元素
- 后代选择器（#box div），选择id为box元素内部所有的div元素
- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
- 群组选择器（div,p），选择div、p的所有元素
```
- 伪类选择器
```
:link ：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素
```
- 伪元素选择器
```
:first-letter ：用于选取指定选择器的首字母
:first-line ：选取指定选择器的首行
:before : 选择器在被选元素的内容前面插入内容
:after : 选择器在被选元素的内容后面插入内容
```
- 属性选择器（懒加载！）
```
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```

***
- css3新增
  - 层次选择器(p~ul)
  - 属性选择器
  - 伪类选择器
```
:first-of-type 父元素的首个元素
:last-of-type 父元素的最后一个元素
:only-of-type 父元素的特定类型的唯一子元素
:only-child 父元素中唯一子元素
:nth-child(n) 选择父元素中第N个子元素
:nth-last-of-type(n) 选择父元素中第N个子元素，从后往前
:last-child 父元素的最后一个元素
:root 设置HTML文档
:empty 指定空的元素
:enabled 选择被禁用元素
:disabled 选择被禁用元素
:checked 选择选中的元素
:not(selector) 选择非 <selector> 元素的所有元素
```
***
- 优先级 `内联 > ID选择器 > 类选择器 > 标签选择器`
:::


### 8.em/px/rem/vh/vw这些单位有什么区别？
::: details 点击查看答案
传统的项目开发中，我们只会用到px、%、em这几个单位，它可以适用于大部分的项目开发，且拥有比较良好的兼容性

从CSS3开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了rem、vh、vw、vm等一些新的计量单位

利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等

- px 像素
- em 相对长度，1em=16px,font-size=62.5%=> 1em=10px
- rem 相对根元素font-size值
- vh，vw，根据窗口的宽度，分成100等份，%泛指相对于父元素
:::


### 9.设备像素，css像素，设备独立像素，dpr，ppi之间有什么区别？
::: details 点击查看答案
#### 背景
在css中我们通常使用px作为单位，在PC浏览器中css的1个像素都是对应着电脑屏幕的1个物理像素

这会造成一种错觉，我们会认为css中的像素就是设备的物理像素

但实际情况却并非如此，css中的像素只是一个抽象的单位，在不同的设备或不同的环境中，css中的1px所代表的设备物理像素是不同的

当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异
#### 介绍

##### css像素
一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素
- 每英寸像素（PPI）
- 设备像素比（DPR）

##### 设备像素
设备像素（device pixels），又称为物理像素

指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已

可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩

##### 设备独立像素
在javaScript中可以通过`window.screen.width`/ `window.screen.height `查看

#### dpr=设备像素/设备独立像素
#### ppi，每英寸像素，表示每英寸所包含的像素点数目
ppi=sqrt(pow(x,2)+pow(y,2))/屏幕尺寸
:::


### 10.css隐藏页面元素
::: details 点击查看答案
- display:none
- visibility:hidden
- opacity:0
- 设置height，width为0
- position:absolute
- clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
:::


## 面试题二 :star:
### 1.使用css3实现动画？
::: details 点击查看答案
- transition 实现渐变动画
- transform 转变动画
- animation 实现自定义动画
:::


### 2.怎么理解回流和重绘？什么场景下触发？
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


### 3.css性能优化？
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


### 4.css3新增特性？
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


### 5.css预编语言，区别？
::: details 点击查看答案
- sass less stylus
:::


### 6.display:none,visibility:hidden,opactiy:0 的区别
::: details 点击查看答案
- 1.display不占据空间，后者会占据
- 2.子元素继承，前者不继承，后者会继承
- 3.事件绑定，前端无法触发，后面可以触发
- 4.过渡动画，opacity有效
:::


### 7.position有什么属性？fixed和absolute区别
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


### 8.BFC如何形成？BFC 与 IFC 的区别
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
