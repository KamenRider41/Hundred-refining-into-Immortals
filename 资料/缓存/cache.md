<!--
 * @Author: 41
 * @Date: 2022-03-04 11:15:33
 * @LastEditors: 41
 * @LastEditTime: 2022-03-19 17:13:30
 * @Description: 
-->
# 304状态码
客户端有缓存情况下服务端的一种响应
# 强缓存和协商缓存
## 强缓存
- respone header 的`cache-control`，常见的设置是max-age public private no-cache no-store等
- 设置了`no-cache`就不会走强缓存了，每次请求都回询问服务端。
- `no-store`  
## 协商缓存
- 怎么设置协商缓存？
```
etag: '5c20abbd-e2e8'
last-modified: Mon, 24 Dec 2018 09:49:49 GMT
```
- etag：每个文件有一个，改动文件了就变了，就是个文件hash，每个文件唯一，就像用webpack打包的时候，每个资源都会有这个东西，如： app.js打包后变为 app.c20abbde.js，加个唯一hash，也是为了解决缓存问题。

- last-modified：文件的修改时间，精确到秒
  - 请求资源时，把用户本地该资源的 etag 同时带到服务端，服务端和最新资源做对比。
  - 如果资源没更改，返回304，浏览器读取本地缓存。
  - 如果资源有更改，返回200，返回最新的资源。
### 为什么要有etag？
HTTP1.1中etag的出现（也就是说，etag是新增的，为了解决之前只有If-Modified的缺点）主要是为了解决几个last-modified比较难解决的问题：
- 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被需改了，而重新get
- 某些文件修改非常频繁,比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，if-modified-since能检查到的是秒级
- 某些服务器不能静的得到文件的最后修改时间

怎么设置强缓存与协商缓存

# 状态码
- 1xx 接收到的请求正在处理
- 2xx 请求正常处理完毕
- 3xx 重定向，浏览器需要执行某些特殊的处理以正确的处理请求
- 301 Moved Permanently 永久性重定向
- 302 Found 临时性重定向
- 4xx 客户端错误
- 400 Bad Request 请求报文中存在语法错误，请求未发送出去
- 401 Unauthorized 未认证，需要认证
- 403 Forbidden 请求被拒绝，需要授权
- 404 Not Found 服务器无法找到请求的资源
- 500 服务器错误，服务器本身发生错误
- 503 Service Unaviailable 服务器超负荷，无法处理请求

# 跨域如何解决
- JSONP,CORS,Nginx反向代理，proxy，postMessage，websocket
- cors跨域后台设置
  - 'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
  - 'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）
  - 'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie

## option请求
- 例子如下
HTTP/1.1 200 OK
Server: nginx/1.13.3
Date: Mon, 30 Jul 2018 12:50:08 GMT
Content-Length: 0
Connection: keep-alive
Allow: GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH
X-Frame-Options: SAMEORIGIN
Access-Control-Allow-Origin: 0
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: X-Requested-With

# cookie session localstorage
- cookie Cookie 的工作机制是用户识别及状态管理
调用 Cookie 时，由于可校验 Cookie 的有效期，以及发送方的域、路径、协议等信息
所以正规发布的 Cookie 内的数据不会因来自其他Web站点和攻击者的攻击而泄露

- 为cookie服务的首部字段
  - Set-Cookie  开始状态管理所使用的Cookie信息   响应首部字段
  - Cookie      服务器接收到的Cookie信息         请求首部字段

|属性|说明|
|--|--|
|NAME=VALUE    |赋予Cookie的名称和值(必需)|
|expires=DATE  |Cookie的有效期(若不明确指定则默认为浏览器关闭前为止)|
|path=PATH     |将服务器上的文件目录作为Cookie的使用对象(若不指定则默认为文档所在的文件目录)|
|domain=域名   |作为哦Cookie使用对象的域名|
|Secure        |仅在HTTPS安全通信时才会发送Cookie|
|HttpOnly      |加以限制，使Cookie不能被JavaScript脚本访问|

另外，一旦 Cookie 从服务器端发送至客户端，服务器端就不存在可以显式删除 Cookie 的方法。
但可通过覆盖已过期的 Cookie，实现对客户端 Cookie 的实质性删除操作。

## http 是无状态为什么还能识别客户端？
- cookie
Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的首部字段信息，通知客户端保存 Cookie，当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出去。

也就是 Cookie 是服务器生成的，但是发送给客户端，并且由客户端来保存。每次请求加上 Cookie就行了。服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。
***
- session
虽然 Session 保存在服务器，对客户端是透明的，它的正常运行仍然需要客户端浏览器的支持。这是因为 Session 需要使用Cookie 作为识别标志。HTTP协议是无状态的，Session 不能依据HTTP连接来判断是否为同一客户，因此服务器向客户端浏览器发送一个名为 JSESSIONID 的 Cookie，它的值为该 Session 的 id（即放在HTTP响应报文头部信息里的Set-Cookie）。Session依据该 Cookie 来识别是否为同一用户。
***
- 应用场景：
  - 登录网站，今输入用户名密码登录了，第二天再打开很多情况下就直接打开了。这个时候用到的一个机制就是cookie。
  - session一个场景是购物车，添加了商品之后客户端处可以知道添加了哪些商品，而服务器端如何判别呢，所以也需要存储一些信息就用到了session。
## cookie,localStorage和sessionStorage的区别
4KB/5MB
## 登陆过程(https://zhuanlan.zhihu.com/p/62336927)

# tcp,udp区别

