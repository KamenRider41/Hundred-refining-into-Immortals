# 面试题三 :star:

## 1.vue项目中如何解决跨域问题？
::: details 点击查看答案
#### CORS
CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的HTTP头组成，这些HTTP头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应
- 直接设置Access-Control-Allow-Origin
```JS
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
})
```

#### Proxy
- 框架内配置代理(target,changeOrigin,pathRewrite,baseURL)
- 服务端代理请求转发(target,changeOrigin)
- nginx反向代理
```
server {
    listen    80;
    # server_name www.josephxia.com;
    location / {
        root  /var/www/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    location /api {
        proxy_pass  http://127.0.0.1:3000;
        proxy_redirect   off;
        proxy_set_header  Host       $host;
        proxy_set_header  X-Real-IP     $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
}
```
:::


## 2.你是怎么处理vue项目中的错误的？
::: details 点击查看答案
错误来源包括：
- 后端接口错误(接口拦截器，apifox，mock)
- 代码中本身逻辑错误(errorHandler可获取错误信息和 Vue 实例)
:::


## 3.Vue3了解过吗？能说说跟Vue2的区别吗？
::: details 点击查看答案
#### 性能优化
proxy代理，数据响应方式更好了
#### 速度更快
- 重写了虚拟dom
- 编译模板的优化
- 更高效的组件初始化
- update性能提高
- ssr速度提高
#### 体积减少
- 引入tree-shaking
#### 更易维护
- setup
#### 更接近原生
- 函数式编程
#### 更易使用
:::


## 4.Vue3.0为什么要用Proxy 替代defineProperty API？
::: details 点击查看答案
- 检测不到对象属性的添加和删除
- 数组API方法无法监听到
- 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题
Proxy(ES6)
:::


## 5.Vue3.0所采用的Composition Api与Vue2.x使用的Options Api有什么不同?
::: details 点击查看答案
百变小樱,奥特徽章
- vue2
  - 代码的可读性随着组件变大而变差
  - 每一种代码复用的方式，都存在缺点
  - typescript支持有限

- 在逻辑组织和逻辑复用方面，Composition API是优于Options API(hook)
- 因为Composition API几乎是函数，会有更好的类型推断。
- Composition API 对 tree-shaking 友好，代码也更容易压缩
- Composition API中见不到this的使用，减少了this指向不明的情况
- 如果是小型组件，可以继续使用Options API，也是十分友好的
:::


## 6.Vue3.0中Treeshaking特性式什么，并举例进行说明？
::: details 点击查看答案
树欲静而风不止，直到树叶摇曳的飘落，我才意识到，落叶归根的奉献伟大
无非就是做了两件事：
- 编译阶段利用ES6 Module判断哪些模块已经加载
- 判断那些模块和变量未被使用或者引用，进而删除对应代码
:::


## 7.SSR是什么？Vue中怎么实现？
::: details 点击查看答案
`Server-Side Rendering`称其为 `SSR`，意为服务端渲染
先来看看web3个阶段的发展史：
- 传统服务端渲染SSR
- 单页面应用SPA
- 服务端渲染SSR
:::


## 8.虚拟DOM一定更快吗？
::: details 点击查看答案
干前端的都知道DOM操作是性能杀手，因为操作DOM会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少DOM的操作要划算的多。
“使用虚拟DOM会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作DOM更快。
:::


## 9.你对Vue中keep-alive的理解？
::: details 点击查看答案
keepalive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染，也就是所谓的组件缓存(保存输入等)
- include和exclude指定是否缓存某些组件
:::


## 10.vuex是什么？
::: details 点击查看答案
Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
:::
