---
  sidebarDepth: 3
---

# Vue
::: tip
`Vue`是一款很容易上手的框架,可以让前端小白也很有成就感的一款前端框架！

面试的时候也可能会问起`Vue`,就让我们一起来康康`Vue`相关的面试题吧！ :star:
:::
## 面试题一

### 1.vue使用双向绑定
::: details 点击查看答案
```js
v-model   ===> :value='content' @input="content=$event"
```
:::


### 2.说说对vue的理解？
::: details 点击查看答案
一套用于构建用户界面的渐进式MVVM框架。

virtual DOM

优雅永不过时

若非群玉山头见
:::


### 3.v-if，v-show
::: details 点击查看答案
v-show：display:none

v-if:visibility：hidden
:::


### 4.v-if和v-for不建议一起用？
::: details 点击查看答案
性能方面的浪费（每次渲染都会先循环再进行条件判断）
:::



### 5.首屏加载慢
::: details 点击查看答案
- 1.压缩文件
- 2.cdn
- 3.按需加载
- 4.懒加载
- 5.SSR
:::


### 6.为什么data属性是一个函数而不是一个对象？
::: details 点击查看答案
根实例对象无所谓，不会产生数据污染情况

- 防止产生数据污染情况(组件实例对象data必须为函数)
:::


### 7.Vue中给对象添加新属性时，界面不刷新怎么办？
::: details 点击查看答案
- Vue.set()
- Object.assign()
- $forceUpdated()  --- 不建议
PS：vue3是用过proxy实现数据响应式的，直接动态添加新属性仍可以实现数据响应式
:::


### 8.Vue中组件和插件有什么区别？
::: details 点击查看答案
组件目标APP.vue
插件目标Vue
:::


### 9.Vue组件间通信方式都有哪些？
::: details 点击查看答案
- props传递
- $emit触发自定义事件
- 使用ref
- eventbus
- $parent或$root
- attrs与listeners
- Provide与inject
- vuex
- pinia
:::


### 10.Vue中$nextTick有什么作用？
::: details 点击查看答案
我们可以理解成，Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新
如果没有 nextTick 更新机制，那么 num 每次更新值都会触发视图更新(上面这段代码也就是会更新10万次视图)，有了nextTick机制，只需要更新一次，所以nextTick本质是一种优化策略
:::

## 面试题二

### 1.slot插槽
::: details 点击查看答案
可以传组件到组件里面
:::


### 2.vue3中使用attrs，slots，emit
::: details 点击查看答案
setup(props,context){
  context.attrs
  context.slots
  context.emit
  context.refs
}
:::

### 3.说说vue中，key的原理
::: details 点击查看答案
谋定而后动！vitural tree
给唯一key，思考起来方便。
:::


### 4.说说你对Vue中keep-alive的理解
::: details 点击查看答案
在keep-alive缓存的组件被激活的时候，都会执行actived钩子
- 路由配置缓存
  - 添加meta属性
  ```js
  {
   path: "/keepAliveTest",
   name: "keepAliveTest",
   meta: {
       keepAlive: true //设置页面是否需要使用缓存
   },
   component: () => import("@/views/keepAliveTest/index.vue")
  },
  ```
  - activated()生命周期
  ```js
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    // 先包裹
    activated() {
      // 页面每次进入将手机动态验证码置为空
      this.$refs.mobPwdCode.inputValue = '';
    },
  ```
:::

### 5.Vue常用的修饰符有哪些？分别有什么应用场景？
::: details 点击查看答案
  - 表单修饰符 lazy trim number
  - 事件修饰符
    - stop
    - prevent
    - self
    - capture 顶层往下触发
    - once
    - passive
    - native
  - 鼠标按钮修饰符
    - left
    - right
    - middle
  - 键盘修饰符
    - enter
    - space
    - tab
    - ctrl
    - shift
  - v-bind修饰符
    - sync 快速监听
    - prop
:::



### 6.如何实现自定义指令
::: details 点击查看答案
- 全局注册
```JS
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
  }
})
```
- 局部注册
```JS
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
    }
  }
}
```
:::

### 7.什么是虚拟DOM
::: details 点击查看答案
敌军千万重！我自岿然不动！
通过VNode，vue可以对这颗抽象树进行创建节点,删除节点以及修改节点的操作， 经过diff算法得出一些需要修改的最小单位,再更新视图，减少了dom操作，提高了性能
:::


### 8.说说vue中的diff算法
::: details 点击查看答案
diff 算法是一种通过同层的树节点进行比较的高效算法
其有两个特点：
- 比较只会在同层级进行, 不会跨层级比较
- 在diff比较的过程中，循环从两边向中间比较
diff 算法的在很多场景下都有应用，在 vue 中，作用于虚拟 dom 渲染成真实 dom 的新旧 VNode 节点比较
:::


### 9.Vue项目中有封装过axios吗？怎么封装的？
::: details 点击查看答案
axios 是一个轻量的 HTTP客户端

基于 XMLHttpRequest 服务来执行 HTTP 请求，支持丰富的配置，支持 Promise，支持浏览器端和 Node.js 端。自Vue2.0起，尤大宣布取消对 vue-resource 的官方推荐，转而推荐 axios。现在 axios 已经成为大部分 Vue 开发者的首选

- 安装
```JS
// 项目中安装
npm install axios --S
// cdn 引入
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
 - 导入
 ```JS
 import axios from 'axios'
 ```
 - 发送请求
 ```JS
axios({        
  url:'xxx',    // 设置请求的地址
  method:"GET", // 设置请求方法
  params:{      // get请求使用params进行参数凭借,如果是post请求用data
    type: '',
    page: 1
  }
}).then(res => {  
  // res为后端返回的数据
  console.log(res);   
})
 ```
 - 并发请求`axios.all([])`
 ```JS
 function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (res1, res2) { 
    // res1第一个请求的返回的内容，res2第二个请求返回的内容
    // 两个请求都执行完成才会执行
}));
 ```
***
- 利用node环境变量来区分开发，测试，生产环境
- vue.config.js文件中配置代理，实现跨域(target,changeOrigin,pathRewrite)
- 请求拦截器 和响应拦截器
:::


### 10.大型项目中，Vue项目怎么划分结构和划分组件比较合理呢？
::: details 点击查看答案
- 文件夹和文件夹内部文件的语义一致性
- 单一入口/出口
- 就近原则，紧耦合的文件应该放到一起，且应以相对路径引用
- 公共的文件应该以绝对路径的方式从根目录引用
- /src外的文件不应该被引入
:::

## 面试题三

### 1.vue项目中如何解决跨域问题？
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


### 2.你是怎么处理vue项目中的错误的？
::: details 点击查看答案
错误来源包括：
- 后端接口错误(接口拦截器，apifox，mock)
- 代码中本身逻辑错误(errorHandler可获取错误信息和 Vue 实例)
:::


### 3.Vue3了解过吗？能说说跟Vue2的区别吗？
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


### 4.Vue3.0为什么要用Proxy 替代defineProperty API？
::: details 点击查看答案
- 检测不到对象属性的添加和删除
- 数组API方法无法监听到
- 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题
Proxy(ES6)
:::


### 5.Vue3.0所采用的Composition Api与Vue2.x使用的Options Api有什么不同?
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


### 6.Vue3.0中Treeshaking特性式什么，并举例进行说明？
::: details 点击查看答案
树欲静而风不止，直到树叶摇曳的飘落，我才意识到，落叶归根的奉献伟大
无非就是做了两件事：
- 编译阶段利用ES6 Module判断哪些模块已经加载
- 判断那些模块和变量未被使用或者引用，进而删除对应代码
:::


### 7.SSR是什么？Vue中怎么实现？
::: details 点击查看答案
`Server-Side Rendering`称其为 `SSR`，意为服务端渲染
先来看看web3个阶段的发展史：
- 传统服务端渲染SSR
- 单页面应用SPA
- 服务端渲染SSR
:::


### 8.虚拟DOM一定更快吗？
::: details 点击查看答案
干前端的都知道DOM操作是性能杀手，因为操作DOM会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少DOM的操作要划算的多。
“使用虚拟DOM会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作DOM更快。
:::


### 9.你对Vue中keep-alive的理解？
::: details 点击查看答案
keepalive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染，也就是所谓的组件缓存(保存输入等)
- include和exclude指定是否缓存某些组件
:::


### 10.vuex是什么？
::: details 点击查看答案
Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
:::

## 面试题四

### 1.vuex有几种属性，它们存在的意义分别是什么？
::: details 点击查看答案
- state
- getter
- mutation
- action
- module
:::


### 2.vuex中的辅助函数怎么使用？
::: details 点击查看答案
- mapState
- mapGetters
- mapMutations
- mapActions
:::
