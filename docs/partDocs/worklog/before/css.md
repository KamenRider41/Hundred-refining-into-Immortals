<!--
 * @Author: 41
 * @Date: 2023-03-20 19:38:05
 * @LastEditors: 41
 * @LastEditTime: 2023-04-13 21:18:18
 * @Description: 
-->
# CSS权威指南 :star:
::: tip 读书笔记
css一直都是一个前端工程师的灵魂！

今天就记录一下读书过程中总结的知识点吧！
:::
[[TOC]]
## 第一章：CSS和文档
### 置换元素和非置换元素
- 可能大家都对块级元素和行内元素有印象，但是置换元素我们就很少提到
- 常见的置换元素:`img,input`,就是会被指定的图像替换，或者根据input的类型来决定最终的元素，其他都是非置换元素
### display属性
- 非常比较常用的可能是flex,grid。但其实它是切换块级元素和行内元素的开关。
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
### 引用css的几种方法
- 1.link标签(使用rel可以有候选样式表)
- 2.style元素(可以配合`@import`使用)
- 3.HTTP链接，使用HTTP首部来引入，平时开发其实没有用到过，这里只科普，不自己介绍拉
- 4.行内样式
### 厂商前缀
|前缀|厂商|
|--|--|
|-epub-         |国际数字出版论坛定制的ePub格式|
|-moz-          |基于Mozilla的浏览器(如Firefox)|
|-ms-           |微软Internet Explore|
|-o-            |基于Opera的浏览器|
|-webkit-       |基于Webkit的浏览器(如Safari和Chrome)|
如今，完全可以不适用厂商前缀了，但是偶尔会看到别人使用
### 媒体查询和特性查询
- `@media` 这里不放查询值了，可能比较常用min-width和max-width用来做屏幕的自适应css,实际开发一般会用js等技术来代替，这样的适应变化会更丝滑一点
- `@supports`根据用户是否支持特定的css

## 第二章：选择符
### 群组选择符
- 逗号隔开，表示使用一组css
- `*`通用选择符
### 类选择符和ID选择符
- 这是开发中最常见的选择符了
- class`.`，ID`#`
- 当然，我们可以有组合比如`p.warning`
- 也可以多个类`.warning.urgent`
### 属性选择器
- `h1[class] {color:silver;}`有class属性的h1会生效css
- `planet[moons="1"]`还可以根据属性的准确值来选择
- 部分值选择
  - `[foo|="bar"]`bar开头或者本身
  - `[foo~="bar"]`包含bar这个词的一组词
  - `[foo*="bar"]`包含子串bar
  - `[foo^="bar"]`bar开头
  - `[foo$="bar"]`bar结尾
### 根据文档结构选择:
#### 后代选择器
- `h1 em {color:gray;}` 选择h1中的em
#### 选择子元素
- `h1 > strong {color}` 选择h1直接子代中的strong
#### 选择紧邻同胞元素
- `h1 + p{margi-top: 0;}` 选择的p元素紧跟在h1元素后面，而且二者属于一个父元素
#### 选择后续同胞
- `h2 ~ol {font-style: italic;}`选择h2后面属于同一个父元素的ol
### 伪类选择符
- 拼接伪类 `a:link:hover{},a:visited:hover{}`
- 根元素`:root`
- 唯一的子代`:only-child`选择的元素是另一个元素的唯一子元素
- 第一个和最后一个子代`:first-child last-child`
- 第一个和最后一个某种元素`:first-of-type :last-of-type`
- 选择每第n个子元素`:nth-child(n)`
- 选择每第n种元素`:nth-of-type(n)`还可以使用even等奇偶
- 动态伪类`:link :visited :focus :hover :active`
- UI状态伪类
|伪类|说明|
|--|--|
|:enabled         |接受输入的元素|
|:disabled        |不接受输入的元素|
|:checked         |选中|
|:indeterminate   |不由用户设置|
|:default         |默认状态|
|:valid           |满足输入条件|
|:invalid         |不满足输入条件|
|:in-range        |在最小值和最大值之间的输入框|
|:out-of-range    |不在取值范围|
|:required        |必须输入值|
|:optional        |不需要一定输入|
|:read-write      |可编辑|
|:read-only       |只读，不可编辑|
### :target伪类
- `https://.../#target-pseudo`target-pseudo就是片段标识符
- 可以理解为TOC，markdown文档标题的跳转就是靠这个实现的
### :lang伪类
- 根据本文使用的语言选择元素`*:lang(fr){ font-style: italic;}`
### 否定伪类
- `li:not(.moreinfo){ font-style: italic;}` li中class不是.moreinfo的元素
### 伪元素选择符
- 装饰首字母`:first-letter`
- 装饰首行`:first-line`
- 前两者只能应用到块级元素上，不能对行内元素使用
- 前置和后置内容元素`::before`，`::after`
  - 这个在后面的章节会有更详细的讨论

## 第三章：特制度和层叠
- 就是在有多个css的时候，我们要通过它的优先级来判断那个是主导css
- 简单来说就是有一个等级(这就是特制度)
- ID 0.1.0.0
- 类，属性选择，伪类 0.0.1.0
- 元素，为元素 0.0.0.1
- 通用选择符 0.0.0.0
- 行内样式 1.0.0.0
- !important表示重要声明，会比不重要要先生效
- 如果两个重要性和特制度都相同，靠后的会生效(层叠)

## 第四章：值和单位
- 三个全局关键字`inherit`继承,`initial`初始化,`unset`不变
- url地址一盘用`url(pathname)`
- 数字
  - 百分数`%`
  - 弹性值`fr`在后面的13章节会再次详细介绍
- 距离
  - `in,cm,mm,q,pt,pc,px`开发中一般都是使用`px`(绝对单位长度)
  - 分辨率单位(dpi,dpcm,dppx),个人觉得了解就行了
  - `1em=font-size`相对于父元素的字体 `ex`指小写字母的高度(相对单位长度)
  - `rem`相对于根元素的字体`font-size`
  - `ch`所用字体中一个零的进宽，这个实际开发中没有碰到过
  - 视区相关单位 `vw`,`vh`百分比
- 计算值
  - `calc()`函数用来计算注意，运算符号两变要空格隔开
- 颜色
  - 具名颜色
  - RGB
  - RGBa
  - HSL和HSLa (参数为色相角度0-360，饱和度0-100，明度0-100)
  - 颜色关键字`transparent`,`currentColor`这个实际开发中很少用到，就是当前元素计算得到的值
- 角度
  - `deg`0-360,`grad`0-400,`rad`0-6.283,`turn`0-1

## 第五章：字体
- 简单地说一些基础知识，然后之后我们以介绍关键字为主
  - css五种通用字体
  - 字体可以组合描述
- 关键字
  - `@font-size`可以定义字体
  - `unicode-range`限制字符
  - `font-weight`字重
    - 100最细，900最粗
    - 400-normal 
    - 700-bold
    - bolder下一个字型，比如normal：bolder就是bold700，如果没有更大的字型就加100，700->800
  - `font-size`字号
    - 绝对值xx-small,x-small,small,medium,large,x-large,xx-large
    - 相对大小larger，smaller
    - 百分数和em 100%=1em
  - `font-size-adjust`自动调整字号
  - `font-style`字型
    - italic，oblique，normal
  - `font-stretch`字体拉伸
  - `font-kerning`字距调整
    - auto,normal,none
  - `font-variant`字体变形
- 感觉很多属性是平时没有用到过的，先扫盲了，以后有了深刻体会再来更新
## 第六章：文本属性
- css中还是有不少操作涉及文本属性的，这一章还是从关键字出来，来记录一下阅读笔记
- 关键字
  - 缩进和行内对齐
    - `text-indent`块级元素文本缩进
      - 知道为什么h是块级元素了吧？
    - `text-align`控制文本的对齐方式
      - start,end,left,right,center,justify(两端对齐),match-parent,start end
      - 左上，右下。横纵的转换口诀
    - `text-align-last`最后一行的对齐方式
  - 块级对齐
    - `line-height`可以数字，长度，百分比
    - `vertical-align`纵向对齐文本
    - `word-spacing`单词间距，注意和上面字距的区别
    - `letter-spacing`字符间距，可以用来强调
    - `text-transform`文本转换
      - uppercase,lowercase,capitalize,none
    - `text-decoration`这个属性就比较有意思了
      - 上划线，下划线，删除线等underline,wavy,dotted,over等
    - `text-rendering`一个svg属性，没太看明白
    - `text-shadow`文本阴影
    - `white-space`处理空白
      - 设置pre会小心处理空白
      - pre-line,normal,nowrap,pre,pre-wrap
    - `tab-size`制表符对应空格数，优先级低于`white-space`
    - `hyphens`是否连字符
    - `word-break`控制换行
      - normal,break-all,keep-all
    - `line-break`
      - auto,loose,normal,strict,anywhere
    - `overflow-wrap`超出容器换行
      - normal,break-word,anywhere
    - `writing-mode`书写模式
      - horizontal-tb,vertical-rl,vertical-lr
    - `text-orientation`改变文本方向
      - mixed,upright,sideways
## 第7章：视觉格式化基础
- 补充知识
  - 非置换元素和置换元素，前面提到了
  - 块级框 display:block
  - 行内框 display:inline
  - 行内块级框 
    - 内部块级外部行内，比如img
- 行内元素和块级元素是可以转换的！这个在前面也提到过
- `box-sizing`
  - `content-box`标准盒模型，宽度不包括边距和边框
  - `padding-box`这个不太理解
  - `border=box` 怪异和模型，宽度包括内边距和边框
- 横向格式化属性
  - 一共7个：margin-left,border-left,padding-left,width,padding-right,border-right,margin-right
  - 就是外边距，边框，内边距
  - 使用`auto`可以控制居中
  - 负边距，这个经常用到就不多说了
- 纵向格式化属性
  - 类似的，边距边框从上到下
  - 一共7个：margin-top,border-top,padding-top,height,padding-bottom,border-bottom,margin-bottom
  - `height:auto`可以自动调整框体高度
  - 注意内外边距折叠的情况
    - 就是上边距10px,下边距15px,最后就是15px,取最大值
- 行内格式化
  - 主要是看`height`和`font-size`
  - 行内据是两者之差除以二
- 纵向对齐
  - `line-height`和`font-size`相等
  - 控制行高，避免与另一行重叠，可以用1em
- `box-decoration-break`改变断行行为
- 行内置换元素 img
  - 对置换元素可能增加行框的高度，但对line-height没有影响
- 行内块级元素 inline-block
  - 行内块级元素是当作置换元素进行格式化的
  - 我的理解是前换后不换
- 流动显示方式
  - 看上去是由新旧值改变的
- `contents`显示方式
  - 魔法值，让元素不再参与页面的格式化
- `display`的其他值在后面的章节会详细介绍的
## 第8章：内边距、边框、轮廓和外边距
这一章是详细地介绍盒模型，所以这章读书笔记可能不会很多
- 复值
  - padding，margin按照上右下左的循序赋值
  - 同样可以用padding-top这样的属性去单独赋值
- 内边距的百分数值
  - 这个百分数值是相对于父元素内容去的宽度计算的
- 行内元素的内边距
  - 会影响行内元素的边框
- 置换元素的内边距
  - 可以为图像设定内边距
- `border-style`边框的样式
  - none,hidden,solid,dotted.dashed,double,groove,ridge,inset,outset
  - 同样适用上面的复值，可以定义四个边框
  - 单个就是border-top-style等等
- `border-width`边框宽度
  - 单个就是border-top-width等等
- `border-color`边框颜色
  - 单个就是border-top-color等等
- `border-top`可以简写
  - border-top：width/style/color
  - 相当于包含三个属性
  - 整体就是border也是包含三个属性
- `border-radius`圆角边框
  - 计算方式是左上角高除以长
  - 单独属性
    - border-top-left-radius
    - border-top-right-radius
    - border-bottom-right-radius
    - border-bottom-left-radius
- `border-image-sourse`图像边框
  - 加载和裁剪边框图像
- `border-image-slice`裁剪方式，这个属性感觉很难去描述
- `border-image-width`裁剪的边框大小
  - 这两者配合可以产生一些很有趣的反应
- `border-image-outset`图片可以超出边框的大小 
- `border-image-repeat`图片如何填充边框
- `border-image`简写属性
  - boreder-image-source，border-image-slice，image-width,border-image-outside,border-image-repeat
- `outline-style`轮廓样式
- `outline-width`轮廓宽度
- `outline-color`轮廓颜色
- `outline`简写属性
  - color、style、width
  - 区别：轮廓不会影响布局
- 外边距同内边距
