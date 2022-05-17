
# 面试题一 :star:
## 1.如何实现浏览器内多个标签页之间的通信

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


## 2.说说你对以下几个页面生命周期事件的理解:DOMContentLoaded,load,beforeunload,unload
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


## 3.使用input标签上传图片时，怎样触发默认拍照功能？
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

## 4.input上传文件可以同时选择多张吗？怎么设置？
::: details 点击查看答案
可以，通过给input标签设置multiple属性
```HTML
<input type="file" name="files" multiple/>
```
:::


## 5.如何禁止input展示输入的历史记录？
::: details 点击查看答案
在输入input时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在input中加入`autocomplete："off"`
:::


## 6.常用的meta元素有哪些？
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


## 7.script标签中，async和defer两个属性有什么用途和区别？
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


## 8.什么是HTML语义化？
::: details 点击查看答案
### 元素
- header
- nav
- section
- article
- aside
- footer
- main

### 优点
- 标签语义化有助于构架良好的HTML结构，有利于搜索引擎的建立索引，抓取
- 有利于不同设备的解析
- 有利于构建清晰的结构，有利于团队的开发，维护(组件的语义化)
:::


## 9.label标签有什么用？
::: details 点击查看答案
label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
(自动聚焦绑定的控件上)
:::


## 10.块级元素，行内元素，空元素有哪些？
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

