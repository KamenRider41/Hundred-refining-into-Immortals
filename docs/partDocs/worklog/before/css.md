<!--
 * @Author: 41
 * @Date: 2023-03-20 19:38:05
 * @LastEditors: 41
 * @LastEditTime: 2023-04-10 17:19:09
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