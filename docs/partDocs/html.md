---
  sidebarDepth: 3
---

# HTML
HTML作为前端基础三项之力的骨架,虽然好像没那么重要,但在面试中还是会考察的！
## 三栏布局
### 浮动布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:07:03
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 16:04:24
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
    }
    .left {
      width: 33vw;
      height: 100%;
      background-color: red;
      float: left;
    }
    .main {
      height: 100%;
      /* width: 500px; */
      background-color: skyblue;
    }
    .right {
      width: 33vw;
      height: 100%;
      background-color: green;
      float: right;
    }
  </style>
</head>
<!-- 注意:float会影响下面的元素 -->
<body>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
  </div>
</body>
</html>
```
:::
### 绝对布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:11:10
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:26:16
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      position: relative;
    }

    .left {
      width: 300px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: red;
    }

    .main {
      width: 100%;
      height: 200px;
      /* padding-left: 300px;
      padding-right: 300px; */
      margin-left: 300px;
      margin-right: 300px;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: skyblue;
    }

    .right {
      width: 300px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>
```
:::

### 圣杯布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:59:59
 * @LastEditors: 41
 * @LastEditTime: 2022-03-09 22:30:56
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
      padding: 0 200px;
    }

    .main {
      width: 100%;
      height: 300px;
      background-color: skyblue;
      float: left;
    }

    .left {
      width: 200px;
      height: 200px;
      background-color: red;
      float: left;
      margin-left: -100%;
      position: relative;
      left: -200px;
    }

    .right {
      width: 200px;
      height: 200px;
      background-color: green;
      float: right;
      margin-right: -200px;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```

:::

### 双飞翼布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:03:55
 * @LastEditors: 41
 * @LastEditTime: 2022-03-09 22:42:57
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .main-wrap {
      width: 100%;
      padding: 0 200px;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
    }

    .main {
      height: 300px;
      background-color: skyblue;
    }

    .left {
      width: 200px;
      height: 200px;
      background-color: red;
      float: left;
      margin-left: -100%;
    }

    .right {
      width: 200px;
      height: 200px;
      background-color: green;
      float: left;
      margin-left: -200px;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main-wrap">
      <div class="main"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```

:::

### 网格布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:08:15
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:17:27
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      width: 100%;
      display: grid;
      height: 100px;
      /* grid-template-rows: 50px 200px 50px; */
      grid-template-columns: 200px auto 200px;
      /* grid-template-columns: 200px; */
    }

    .main {
      background-color: skyblue;
    }

    .left {
      background-color: red;
    }

    .right {
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>
```

:::

### flex布局
::: details 点击查看代码
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:04:22
 * @LastEditors: 41
 * @LastEditTime: 2022-03-23 15:46:26
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
    }

    .main {
      flex: 1;
      /* height: 300px; */
      background-color: skyblue;
      order: 2;
    }

    .left {
      /* flex: 1; */
      width: 200px;
      height: 200px;
      background-color: red;
      order: 1;
    }

    .right {
      /* flex: 1; */
      width: 200px;
      height: 200px;
      background-color: green;
      order: 3;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

:::

### table布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:06:22
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:23:45
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      width: 100%;
      height: 300px;
      display: table;
    }

    .box>div {
      display: table-cell;
    }

    .main {
      background-color: skyblue;
    }

    .left {
      width: 200px;
      background-color: red;
    }

    .right {
      width: 200px;
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```
:::


## 面试题一
### 1.如何实现浏览器内多个标签页之间的通信

::: details 点击查看答案
- 1.localStorage
- 2.SharedWorker
- 3.WebSocket通讯
- 4.定时器setInterval+cookie
- 5.postMessage
- 6.BroadCast Channel
- 7.Service Worker
- 8.indexedDB(轮询)
- 9.visibilitychange 监听
:::


### 2.说说你对以下几个页面生命周期事件的理解:DOMContentLoaded,load,beforeunload,unload
::: details 点击查看答案
- DOMContentLoaded---浏览器已完全加载HTML，并构建了DOM树，但像img和样式表之类的外部资源可能尚未加载完成
  - DOM已经就绪，因此处理程序可以查找DOM节点，并初始化接口
- load ---浏览器不仅加载完成了HTML，还加载完成了所有外部资源:图片，样式等
  - 外部资源已加载完成，样式已被应用，图片大小也已知道
- beforeunload/unload ---当用户正在离开页面时
  - 用户正在离开，检查用户是否保存
  - 用户几乎已经离开，发送统计数据
***
- DOMContentLoaded和脚本
当浏览器处理一个HTML文档，并在文档中遇到script标签时，就会继续构建DOM之前运行它。这是一种防范措施，因为脚本可能想要修改DOM，甚至对其执行document.write操作，所以DOMContentLoaded必须等待脚本执行结束
因此,DOMContentLoaded肯定在下面的这些脚本执行结束之后发生
- DOMContentLoaded和样式
外部样式表不会影响DOM，因此DOMContentLoaded不会等待它们
。如果在样式后面又一个脚本，那么该脚本必须等待样式表加载完成。原因时，脚本可能想要获取元素的坐标和其他与样式相关的属性。因此，它必须等待样式加载完成i。
:::


### 3.使用input标签上传图片时，怎样触发默认拍照功能？
::: details 点击查看答案
capture 属性用于指定文件上传控件中媒体拍摄的方式。

- user 前置
- environment 后置
- camera 相机
- camcorder 摄像机
- microphone 录音
```HTML
<input type='file' accept='image/*;' capture='camera'>
```
:::

### 4.input上传文件可以同时选择多张吗？怎么设置？
::: details 点击查看答案
可以，通过给input标签设置multiple属性
```HTML
<input type="file" name="files" multiple/>
```
:::


### 5.如何禁止input展示输入的历史记录？
::: details 点击查看答案
在输入input时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在input中加入`autocomplete："off"`
:::


### 6.常用的meta元素有哪些？
::: details 点击查看答案
- charset 指定html文档的编码格式
- name&content 
```HTML
<meta name="author" content="Tony"> 定义了页面的作者
<meta name="keywords" content="HTML, CSS, JavaScript"> 为搜索引擎提供关键字
<meta name="description" content="My tutorials on HTML, CSS and JavaScript"> 对网页整体的描述
<!-- viewport——对页面视图相关进行定义 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">
<meta name="generator" content="Hexo 3.8.0"> 包含生成页面软件的标识符
<meta name="theme-color" content="#222"> 定义主题颜色
```
- http-equiv & content
```HTML
<meta http-equiv="refresh" content="30"> 每30s刷新一次文档
<meta http-equiv="X-UA-Compatible" content="ie=edge"> 告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本
<meta http-equiv="Cache-Control" content="no-transform"> 不得对资源进行转换或转变。
<meta http-equiv="Cache-Control" content="no-siteapp"> 禁止百度进行转码
```
- property & content
可以让网页成为一个富媒体对象，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。
```HTML
<meta property="og:type" content="website">
<meta property="og:url" content="https://zjgyb.github.io/index.html">
<meta property="og:site_name" content="tony's blog">
```
:::


### 7.script标签中，async和defer两个属性有什么用途和区别？
::: details 点击查看代码
```html
<script src='xxx'></script>
<script src='xxx' async></script>
<script src='xxx' defer></script>
```
script标签用于加载脚本与执行脚本，直接使用script脚本时，html会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的DOM渲染。
- defer：此布尔属性被设置为向浏览器指示脚本在文档被解析后执行。
- async：设置此布尔属性，以指示浏览器如果可能的话，应异步执行脚本。
***
- defer
如果script标签设置了defer属性，则浏览器会异步下载该文件并且不会影响后续DOM的渲染。

如果有多个设置了defer属性的script标签存在，则会按照顺序执行所有的script，defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。
- async
async属性会使得script脚本异步的加载并在允许的情况下执行，而async的执行并不会按照script标签在页面中的顺序来执行，而是谁先加载完谁先执行。
:::


### 8.什么是HTML语义化？
::: details 点击查看答案
#### 元素
- header
- nav
- section
- article
- aside
- footer
- main

#### 优点
- 标签语义化有助于构架良好的HTML结构，有利于搜索引擎的建立索引，抓取
- 有利于不同设备的解析
- 有利于构建清晰的结构，有利于团队的开发，维护(组件的语义化)
:::


### 9.label标签有什么用？
::: details 点击查看答案
label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
(自动聚焦绑定的控件上)
:::


### 10.块级元素，行内元素，空元素有哪些？
::: details 点击查看答案
CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
- 块级元素
`<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>`
- 行内元素
`<a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>`
- 行内块元素
`<img>、<input>`
- 空元素
`<br/> <hr/> <img/> <input/> <link/> <meta/> <br />`
:::


## 面试题二

### 1.如何禁用a标签跳转页面或定位链接？

::: details 点击查看答案
- 标签属性href，使其指向空或不返回任何内容。如：
`<a href="javascript:void(0);">点击无反应</a>`
- 从标签事件入手
`onclick="return false"`
- js文件中阻止默认点击事件
`Event.preventDefault()`
- css文件中处理点击
`pointer-events:none`
:::


### 2.canvas在标签上设置宽高，与在style中设置宽高有什么区别？
::: details 点击查看答案
- canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面
- 而style的width和height是canvas在浏览器中被渲染的高度和宽度
- 如果canvas的width和height没指定或不正确，就被设置成默认值
:::


### 3.iframe可以在一个网站里面嵌入另一个网站的内容
::: details 点击查看答案
#### 优点
- 1.iframe能够原封不动的把嵌入的网页展现出来。
- 2.如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
- 3.网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
- 4.如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
#### 缺点
- 1.会产生很多页面，不容易管理。
- 2.iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。 * 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
- 3.很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
- 4.iframe 里面的样式、脚本资源，会增加请求次数，对于大型网站是不可取的。
- 5.iframe 会阻碍页面的 onload 事件，给用户页面加载很慢的感觉。
:::


### 4.HTML标签中的src和href有什么区别？
::: details 点击查看答案
- href 是超文本引用，它是指向资源的位置，建立与目标文件的联系；
- src 目的是把资源下载到页面中；
浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 `link` 引入而不是 @ import 的原因），src 会阻塞对文档的处理。
:::


### 5.script标签为什么建议放在body标签的底部(defer，async)
::: details 点击查看答案
因为浏览器在渲染html的时候是从上到下执行的，当遇到js文件的时候就会停止当前页面的渲染，转而去下载js文件。

如果将script标签放在头部，在文件很大的情况下将导致首屏加载时间延长，影响用户体验。
:::


### 6.DOCTYPE标签有什么用？
::: details 点击查看答案
DOCTYPE声明于文档最前面，告诉浏览器以何种方式来渲染页面。
HTML5中的声明方式如下：
`<!DOCTYPE html>`
:::


### 7.HTML5有哪些新特性？
::: details 点击查看答案
- 新增语义化标签：nav、header、footer、aside、section、article
- 音频、视频标签：audio、video
- 数据存储：localStorage、sessionStorage
- canvas（画布）、Geolocation（地理定位）、websocket（通信协议）
- input标签新增属性：placeholder、autocomplete、autofocus、required
- history API
  - go、forward、back、pushstate
:::


### 8.简述html页面渲染过程？
::: details 点击查看答案
#### 基本概念
- HTML解释器：解释HTML语言的解释器，本质是将HTML文本解释成DOM树（文档对象模型）。
- CSS解释器：解释样式表的解释器，其作用是将DOM中的各个元素对象加上样式信息，从而为计算最后结果的布局提供依据。
- 布局：将DOM和css样式信息结合起来，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型即渲染树。
- JavaScript引擎：JavaScript可以修改网页的内容，也能修改CSS的信息，JavaScript引擎解释JavaScript代码并把代码的逻辑和对DOM和CSS的改动信息应用到布局中去，从而改变渲染的结果。
***
骨架-色彩-灵动
- 1.解析HTML文件，创建DOM树
- 2.解析CSS,形成CSS对象模型
- 3.将CSS与DOM合并，构建渲染树（renderingtree）
- 4.布局和绘制
- Repaint(重绘)
- Reflow（重排）
***
将多次改变样式属性的操作合并成一次操作
将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。
由于display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发2次重排。
:::


### 9.简单描述从输入网址到页面显示的过程
::: details 点击查看答案
#### DNS解析
DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。(负载均衡)

输入www.google.com网址后，首先在本地的域名服务器中查找，没找到去根域名服务器查找，没有再去com顶级域名服务器查找，，如此的类推下去，直到找到IP地址，然后把它记录在本地，供下次使用。大致过程就是.-> .com ->google.com. -> www.google.com.。 (最后这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，为了方便用户，通常都会省略，浏览器在请求DNS的时候会自动加上)
#### 发起TCP连接
三次握手，四次挥手
#### 发送HTTP请求
请求报文由请求行，请求报头，请求正文组成。
#### 服务器处理请求并返回HTTP报文
对TCP连接进行处理，对HTTP协议进行解析，并按照报文格式进一步封装成HTTP Request对象，供上层使用。这一部分工作一般是由Web服务器去进行，比如Tomcat, Nginx和Apache等Web服务器。

HTTP报文也分成三段：状态码，响应报头和响应报文。
#### 浏览器解析渲染页面
解析HTML形成DOM树
解析CSS形成CSSOM 树
合并DOM树和CSSOM树形成渲染树
浏览器开始渲染并绘制页面
#### 连接结束
:::


### 10.页面导入样式时，使用link和@import有什么区别？
::: details 点击查看答案
link属于HTML标签，而@import是css提供的；

页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；

@import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；

link方式的样式的权重高于@import的权重。
:::



## 面试题三

### 1.标签上title属性与alt属性的区别是什么？
::: details 点击查看答案
- alt 是为了在图片未能正常显示时（屏幕阅读器）给予文字说明。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。
- title 属性为设置该属性的元素提供建议性的信息。使用title属性提供非本质的额外信息。
:::


### 2.说说HTML,XML,XHTML的区别？
::: details 点击查看答案
- HTML：超文本标记语言，是语法较为松散的、不严格的Web语言；
- XML：可扩展的标记语言，主要用于存储数据和结构，可扩展；
- XHTML：可扩展的超文本标记语言，基于XML，作用与HTML类似，但语法更严格。
:::


### 3.什么是HTML5，以及和HTML的区别是什么？
::: details 点击查看答案
HTML5是HTML的新标准，其主要目标是无需任何额外的插件如Flash、Silverlight等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。

HTML5是由万维网联盟（W3C）和Web Hypertext Application Technology Working Group 合作创建的HTML新版本。
:::


### 4.websocket如何兼容低浏览器
::: details 点击查看答案
- Adobe Flash Socket；
- ActiveX HTMLFile (IE) ；
- 基于 multipart 编码发送 XHR；
- 基于长轮询的 XHR；

XMLHttpRequest 对象提供了对 HTTP 协议的完全的访问，包括做出 POST 和 HEAD 请求以及普通的 GET
请求的能力。XMLHttpRequest 可以同步或异步地返回 Web 服务器的响应，并且能够以文本或者一个 DOM 文档的形式返回内容。
:::


### 5.浏览器乱码的原因是什么？如何解决？
::: details 点击查看答案
#### 乱码原因
- 网页源代码是gbk的编码，而内容中的中文字是utf-8编码的，这样浏览器打开即会出现html乱码。反之也会出现乱码；
- html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。
#### 解决办法
- 使用软件进行编辑HTML网页内容；
- 如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换；
:::


### 6.什么是渐进增强和优雅降级？
::: details 点击查看答案
- 渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果，交互等方面的改进和追加功能，以达到更好的用户体验。
- 优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。
:::


### 7.style标签写在body后与body前有什么区别？
::: details 点击查看答案
页面加载自上而下 当然是先加载样式。

写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）
:::


### 8.mete标签中的viewport 有什么用？
::: details 点击查看答案
手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- height：和 width 相对应，指定高度。
- initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放。
:::


### 9.什么是DOM和BOM？
::: details 点击查看答案
- DOM 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。
- BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。

:::


### 10.页面统计数据中，常用的 PV、UV 指标分别是什么？
::: details 点击查看答案
- PV(页面访问量)
- UV(独立访客)
:::

## 面试题四

### 1.iconfont是什么？有什么优缺点？
::: details 点击查看答案
顾名思义，IconFont 就是字体图标。严格地说，就是一种字体，但是，它们不包含字母或数字，而是包含符号和字形。您可以使用 CSS 设置样式，就像设置常规文本一样，这使得 IconFont 成为 Web 开发时图标的热门选择。
#### 优点
- 可以方便地将任何 CSS 效果应用于它们。
- 因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。
- 我们只需要发送一个或少量 HTTP 请求来加载它们，而不是像图片，可能需要多个 HTTP 请求。
- 由于尺寸小，它们加载速度快。
- 它们在所有浏览器中都得到支持（甚至支持到 IE6）。
#### 缺点
- 不能用来显示复杂图像
- 通常只限于一种颜色，除非应用一些 CSS 技巧
- 字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48等。如果由于某种原因将网格系统改为25×25，可能不会得到清晰的结果
:::


### 2.能否使用自闭和script标签引入脚本文件？
::: details 点击查看答案
不能。自闭和标签来自于XML语法，而不是HTML语法
根据现在的HTML语法，只有不需要结束标签的void element（如img之类的），或者是外部元素（如svg）可以使用自闭合。script标签显然不在此列。
:::
