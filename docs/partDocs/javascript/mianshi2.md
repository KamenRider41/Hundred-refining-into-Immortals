# 面试题二 :star:

## 1.什么是事件代理，以及它的应用场景
::: details 点击查看答案
事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数
:::


## 2.说说new操作符具体干了什么？
::: details 点击查看答案
- 创建一个新的对象obj
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的this绑定到新建的对象obj上
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
#### 手写new操作符
```JS
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype   // const obj=Object.create(Func.prototype)
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
```
:::


## 3.讲一下事件委托,target与currentTarget分别是什么？
::: details 点击查看答案
- event.target返回触发事件的元素
- event.currentTarget返回绑定事件的元素
***
- addEventListener (type, listener[, useCapture]) 第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段电泳事件处理程序
- 事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。
:::
