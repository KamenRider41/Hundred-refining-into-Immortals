# 面试题一 :star:

## 1.var,let,const三者区别
::: details 点击查看答案
- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用
能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var
:::


## 2.es6
::: details 点击查看答案
- 扩展元素符...，和rest参数的逆运算
- 构造函数 Array.from,Array.of,fill(),flat(),includes(),keys()
- 属性简写
- 解构运算
- assign()这个是浅拷贝
- 箭头函数
- Map Set WeakSet WeakMap
- Promise(pending/fulfilled/rejected) async/await
- generator
- proxy`var proxy = new Proxy(target, handler)`
- module
  - CommonJs (典型代表：node.js早期)
  - AMD (典型代表：require.js)
  - CMD (典型代表：sea.js)
- decorator 装饰器
:::


## 3.类型转换机制
::: details 点击查看答案
- undefined
- null
- boolean
- string
- number
- symbol
- BigInt
:::


## 4.深拷贝浅拷贝有什么区别？怎么实现深拷贝？
::: details 点击查看答案
#### 浅拷贝  指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝（hasOwnProperty）
```JS
function shallowClone(obj) {
    const newObj = {};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}
```
  - Object.assign
  - Array.prototype.slice(), Array.prototype.concat()

#### 深拷贝 深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性
```JS
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.has(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```
:::

## 5.说说你对闭包的理解，以及闭包使用场景
::: details 点击查看答案
闭包让你可以在一个内层函数中访问到其外层函数的作用域
- 创建私有变量
- 延长变量的生命周期
:::


## 6.什么是作用域链？
::: details 点击查看答案
作用域，即变量(变量作用域又称上下文)和函数生效的区域或集合
当前层作用域找不到就向上一层找
:::


## 7.JS中的原型，原型链分别是什么？
::: details 点击查看答案
#### 原型
函数可以有属性。 每个函数都有一个特殊的属性叫作原型prototype
#### 原型链
原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法
:::


## 8.JS如何实现继承？
::: details 点击查看答案
- 原型链继承(内存共享)
- 构造函数继承(只能继承父类的实例属性和方法，不能继承原型属性或者方法)
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承
:::


## 9.谈谈this指针
::: details 点击查看答案
this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调
:::


## 10.JS的事件模型有哪些？
::: details 点击查看答案
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

***

- 原始事件模型
- 标准事件模型
- IE事件模型
:::
