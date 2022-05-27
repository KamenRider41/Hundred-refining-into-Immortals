# React快速入门 :star:

## 创建一个react工程npx
- 安装命令`npx create-react-app react-app`(react-app是工程名字)
	- `npx`会下载创建后自动删除，所以每次都会是最新的版本
- 如果报错如下
```bash
You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).
```
- 先运行`npm uninstall -g create-react-app`清除缓存再运行安装命令

### 入口文件
我们可以删掉`src`文件夹下的所有文件，然后创建一个`index.js`
```js
import ReactDOM from 'react-dom'
ReactDOM.render(
  <h2>你好</h2>,
  document.getElementById('root') // public里面index.html中的root
)
```
我们页面就会变成一个出现你好了

## class类组件
### 第一个react组件
```js
import React from 'react'

// 类组件
class App extends React.Component {
  render () {
    return (
      <div>
        <h2>hello world!</h2>
        <input type="text" />
      </div>
    )
  }
}
export default App
```
***
- 1.文件名可以是jsx或者js，不影响文件中的代码
- 2.组件名称必须大写
- 3.JS中出现()代表其中想要写html
- 4.HTML中出现{}代码其中想要写js --- 比如赋值
- 5.其实export default也可以写道class前面
- 6.JSX的语法可以在vscode中配置
	- vscode首选项>设置>`include Language`>添加`javascript：		javascriptreact`>搜索trigger启用`Trigger Expansion On Tab`
## 组件中一些html的一些小区别
因为jsx可以写xml和js，所以中间会有一些冲突，然后解决这些冲突，就导致了一些属性有变化---换了个名字
|原html|jsx写法|
|--|--|
|label-for | label-htmlFor|
|class      | className |
|style=""  | style={{}}|

- 注意：style属性要写成驼峰形式
- 组件要有一个根元素，可以是空标签`<>  </>`
### for循环
```js
let arr = ['刘备', '关羽', '张飞']
        <ul>
          {
            // React中的列表循环有且只有map可以使用
            // 只有map才有返回值，forEach没有
            arr.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
```
### 代码简化与扩展安装
- 安装vscode扩展---（ES7+React/Redux/React-Native）
- 快捷指令`rcc` --- (react class component)
- 快捷指令`rfc` --- (react function component)

## 组件进阶之小技巧
### 使用state
- 直接修改变量没有办法更新视图
- 使用state
```js
import React, { Component } from 'react'
// let num = 1
export default class App2 extends Component {
  state = {
    num: 1
  }
  render () {
    return (
      <div>
        <h2>数字位:{this.state.num}</h2>
        <button onClick={
          () => this.setState({ num: this.state.num + 1 })
        }>累加</button>
      </div>
    )
  }
}
```
### setState的三种方式
- 直接匿名函数(简单代码)
- 写一个函数，然后使用bind改变this指向
- 写一个函数，用匿名函数调用
```js
  state = {
    num: 1
  }
  addNum () {
    this.setState({ num: this.state.num + 1 })
    // console.log(this.state.num);
  }
  render () {
    return (
      <div>
        <h2>数字位:{this.state.num}</h2>
        <button onClick={
          () => this.setState({ num: this.state.num + 1 })
        }>按钮1 - 累加</button>
        <button onClick={this.addNum.bind(this)}>按钮2 - 累加</button>
        <button onClick={() => this.addNum()}>按钮3 - 累加</button>
      </div>
    )
  }
```
### 函数的传参
```js
  btnClick (num) {
    console.log(num);
  }
  render () {
    return (
      <div>
        <button onClick={() => this.btnClick(1)}>按钮1</button>
        <button onClick={() => this.btnClick(2)}>按钮2</button>
      </div>
    )
  }
```
## function函数组件
### 特点
- 1.函数式组件没有生命周期
- 2.函数式组件没有this
- 3.函数式组件没有state状态
- Hooks(钩子)
	- React官方提供的hook
	- 开发人员自定义的hook 

### useState
- Hook只能用在组件函数中的最顶层
```js
  const [num, setNum] = useState(1)
  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>累加</button>
    </>
  )
```
### useEffect
数据请求 检测数据更新 垃圾回收
- 检测数据更新，检测哪个数据更新，就把这个变量填写到数组中
- 当要检测的式页面中所有的变量，你有两个选择
	- 1.把所有变量都填写到数组中
	- 2.直接删掉数组
- 当不想检测页面中任何数据的更新,可以直接给个空数组

```js
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)
  useEffect(() => {
    console.log('num1更新了');
    return () => {
      console.log('销毁阶段')
    }
  }, [num1])
  return (
    <>
      <div>{num1}</div>
      <button onClick={() => setNum1(num1 + 1)} >累加</button>
      <div>{num2}</div>
      <button onClick={() => setNum2(num2 + 1)} >累加</button>
    </>
  )
```

## 组件传参
### 父传子
```js
import React from 'react'
// 子组件
function Child (props) {
  return <h2>子组件 - {props.num}</h2>
}
// 父组件
function Father (props) {
  return <Child num={props.num} />
}
// 顶级组件
export default function App7 () {
  return (
    <Father num={123456} />
  )
}
```
### 子传父
- 无论是vue 小程序还是react,所谓的子传父，真实在干活的是父组件
```js
// 子组件
function Child (props) {
  return (
    <>
      <h2>子组件 - {props.num}</h2>
      <button onClick={() => props.setNum(123456)}>修改num</button>
    </>
  )
}
// 父组件
function Father (props) {
  return <Child num={props.num} setNum={props.setNum} />
}

// 顶级组件
export default function App7 () {
  const [num, setNum] = useState(123)
  return (
    <Father num={num} setNum={setNum} />
  )
}
```

### context
传孙子组件，太过繁琐，我们使用上下文空间，这个和vue里面的provide，inject注入很像
```js
import React, { useState, createContext } from 'react'

// 创建上下文空间(provider,consumer)
const NumContext = createContext()

// 子组件
function Child () {
  return (
    <NumContext.Consumer>
      {
        ({ num, setNum }) => (
          <>
            <h2>{num}</h2>
            <button onClick={() => setNum(456)}>修改num</button>
          </>
        )
      }
    </NumContext.Consumer>
  )
}
// 父组件
function Father () {
  return <Child />
}

// 顶级组件
export default function App8 () {
  const [num, setNum] = useState(123)
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  )
}
```
### useContext
简化直接解构
```js
function Child () {
  const { num, setNum } = useContext(NumContext)
  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(456)}>修改num</button>
    </>
  )
}
```

## 受控组件和不受控组件
- React没有v-model这样的命令，我们要拿到值需要用到useState
- 受控组件和不受控组件只存在于表单元素
## 受控组件
- 所谓的受控组件就是表单元素的value需要通过state(或useState)定义
```js
  const [val, setVal] = useState('asd')
  return (
    <div>
      <input type="text" value={val} onChange={(e) => { setVal(e.target.value) }} />
      <button onClick={() => console.log(val)}>获取input的值</button>
    </div>
  )
```
## 不受控组件
我们对比看一下两者的区别！！！
不受控组件意味着表单元素的value无法通过state获取，只能使用ref(或useRef)来获取
```js
  const [val, setVal] = useState('asd')
  const element = useRef(null)
  return (
    <div>
      <h3>受控组件:</h3>
      <input type="text" value={val} onChange={(e) => { setVal(e.target.value) }} />
      <button onClick={() => console.log(val)}>获取input的值</button>
      <hr />
      <h3>不受控组件:</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>获取input的值</button>
    </div>
  )
```
## memo
- 父组件更新会引起子组件挂载
- memo的作用就是缓存组件不受父组件更新的影响
```js
import React, { useState, memo } from 'react'
const Child = memo(() => {
  console.log(123);
  return <div>子组件</div>
})
export default function App11 () {
  const [num, setNum] = useState(1)
  return (
    <div>
      <h3>数字为:{num}</h3>
      <button onClick={() => setNum(num + 1)}>累加</button>
      <hr />
      <Child />
    </div>
  )
}
```
使用memo后，累加不再log123

### 子组件有逻辑处理需要结合useCallback使用
- useCallback加的数组为空，不检测更新，约等于等死
	- 1.setNum(newValue)           使用新值强行覆盖初始值
	- 2.setNum((num)=>num+1)  不断使用新值覆盖旧值
```js
import React, { useState, memo, useCallback } from 'react'
const Child = memo((props) => {
  console.log(123);
  return <button onClick={() => props.doSth()}>累加</button>
})
export default function App11 () {
  const [num, setNum] = useState(1)
  // const doSth = useCallback(() => setNum(num + 1), [])
  const doSth = useCallback(() => {
    setNum(num => num + 1)
  }, [])
  return (
    <div>
      <h3>数字为:{num}</h3>
      <Child doSth={doSth} />
    </div>
  )
}
```

### useMemo
函数中返回函数:高阶函数
```js
  const doSth = useMemo(() => {
    return () => setNum(num => num + 1)
  }, [])
```

## 状态管理React-Redux
听说和vuex差不多，不知道会不会像pinia一样方便
- 安装命令`npm i redux react-redux`
### 仓库与reducer创建
在`src`下新建一个store文件夹
### reducer.js
```js
// 创建初始状态
const defaultState = {
  num: 1
}
// 导出一个函数
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState) => {
  return state
}
```
### index.js
```js
// 引入reducer
import reducer from './reducer'
// 创建仓库
import { createStore } from 'redux'
const store = createStore(reducer)
// 导入仓库
export default store
```

## 提供器与连接器
### 提供器
- provider 和上下文传值很像
- 在顶级组件套一个provider
```js
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
) 
```
### 连接器
- connect(state映射,dispatch映射)(当前组件名称)
```js
import { connect } from 'react-redux'
function App12 (props) {
  return (
    <div>
      <h2>数字为:{props.num}</h2>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
export default connect(mapStateToProps)(App12)
```
#### 状态映射
- 将reducer中的state映射成props，让开发者可以在组件中使用props.num去调用state中的num
#### dispatch映射
- 将reducer中的事件映射成props，让开发者可以在组件中使用props.add（）去实现num的累加
- 注意：可能点了数字变了，但是视图没变，可能返回的时候还没用变，返回的太快了，这个时候我们使用一个newstate来返回
***
- reducer.js
```js
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'addNum') {
    newState.num++
  }
  return newState
}

```
***
- App.jsx
```js
function App12 (props) {
  return (
    <div>
      <h2>数字为:{props.num}</h2>
      <button onClick={() => props.add()}>累加</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add () {
      const action = { type: "addNum" }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App12)
```
***
- action传值
```js
 const action = { type: "addNum", value: 2 } // action多指定参数
 newState.num += action.value                // 使用的时候直接action.访问
```
#### 换成switch写法
```js
  // if (action.type === 'addNum') {
  //   newState.num += action.value
  // }
  switch (action.type) {
    case "addNum":
      newState.num += action.value
      break
    default: break
  }
```
## 路由
- 安装`yarn add react-router-dom@6`或者`npm install react-router-dom`
- 其实yarn还是安全点快点

### 路由配置
在`src`下新建一个`route/index.js`文件
主要是三个函数
- BrowserRouter
- Routes
- Route
```js
import App from '../App13'
import Home from '../pages/Home'
import List from '../pages/List'
import Detail from '../pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/**
 * App>Home+List+Detail
 * react-router-dom 中有两种模式 : BrowserRouter(History模式)  HashRouter(Hash模式)
 */
// 定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
export default BaseRouter
```
## 路由显示
- 1.index.js文件中App的引用变成Route的引用`import Router from './route/index'`
- 2.在主路由中加入`Outlet`组件，并使用，这样可以显示子路由`import { Outlet } from 'react-router-dom'` `<Outlet />`

### 使用link跳转
- `import { Outlet, Link } from 'react-router-dom'`
```js
      <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="/list">列表页</Link></li>
        <li><Link to="/detail">详情页</Link></li>
      </ul>
```
### useLocation
- 得到当前路由的路径
- 是react-router-dom里面封装的一个hook
```js
  const location = useLocation()
  console.log(location.pathname);
```
### useNavigate
- 这个是比如我想用按钮来跳转就会使用这个hook
```js
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
const naviate = useNavigate()
<button onClick={() => naviate('/detail')}>跳转详情页</button>
```
### useParams
- 拿到路由中参数的hook
```js
<Route path='/list/:id' element={<List />}></Route>  // route/index.jsx
import { useParams } from 'react-router-dom'         // List.jsx
const { id } = useParams()                           // List.jsx
```
### useSearchParams
- 路由中参数用?传递
```js
<li><Link to="/home?id=456">首页</Link></li>         // App.jsx
import { useSearchParams } from 'react-router-dom'   // Home.jsx
const [searchParams] = useSearchParams()
console.log(searchParams.getAll('id')[0]);
```

### 通过useNavigate传递参数
- 后面还可以跟一个obj
```js
  const naviate = useNavigate()
  const goDetail = () => {
    naviate("/detail", {
      state: { username: '张三' }
    })
  }
```
- 获取
```js
 let location = useLocation()
 console.log(location.state ? location.state.username : "");
```


