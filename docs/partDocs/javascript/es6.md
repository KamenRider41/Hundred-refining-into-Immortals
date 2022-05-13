# ES6 :star:
`ES6`给了`javascript`注入了不一样的活力。以至于，我们将后面的`ES7-ES11`都统称为`ES6`

- 那么为什么要学习ES6新特性？
    - 1.语法简洁，功能丰富
    - 2.框架开发应用
    - 3.前端开发职位要求
    

今天就和大家一起康康ES6-ES11到底都有哪些改变！

学完之后你就会觉得自己很勇，写代码会有飞一样的感觉！

***
有写的不对的欢迎大佬们批评指正！
***

## let变量声明
- 1.变量不能重复声明
- 2.块级作用域，全局，函数，eval
- 3.不存在变量提升
- 4.不影响作用域链

```javascript
let arr=[1,2,3]
for(let i=0;i<arr.length;i++){
	console.log(i)
}// 1,2,3

for(var i=0;i<arr.length;i++){
	console.log(i)
}//4,4,4
```
## const声明常量
- 1.一定要赋初始值
- 2.一般常量使用大写
- 3.常量的值不能修改
- 4.块级作用域
- 5.对于数组和对象的元素修改，不算做对常量的修改，不会报错

## 模板字符串
- 1.内容中可以直接出现换行符

```javascript
let str=`<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>`
```
- 2.变量拼接

```javascript
let day='星期四'
let out=`今天是${day}`
console.log(out)
```
## 对象的简化

```javascript
let name='41'
let change=function(){
	console.log('我们可以改变你！！')
}
const school={
	name,
	change,
	improve(){
  		console.log('提高技能')
	}
}
```
## 箭头函数

```javascript
let fn=(a,b)=>{
	return a+b
}
```
- 1.this是静态的，this始终指向函数声明时所在作用域下的this的值

```javascript
function getName(){
	console.log(this.name)
}
let getName2=()=>{
	console.log(this.name)
}
window.name='41'
const school={
	name:'42'
}
getName.call(school)
getName2.call(school)

// 42 41
```
- 2.不能作为构造实例化对象
- 3.不能使用arguments变量
- 4.箭头函数简写，形参只有一个的时候可以省略小括号

## 函数参数的默认值
- 1.形参初始值，具有默认值的参数，一般位置要靠后(潜规则)
## rest参数

```javascript
function fn(a,b,...args){
	console.log(a)
	console.log(b)
	console.log(args)
}
fn(1,2,3,4,5,6)
```
## 扩展运算符
- `...`扩展运算符能将数组转换为逗号分隔的参数序列
## Symbol
- 创建Symbol`let s=Symbol('41')`
- Symbol.for 创建 `let s2=Symbol.for('41')`

前者无论如何不会===，后者数值相等可以返回true

- 不能与其他数据进行运算
- ES6还提供了11个内置的Symbol值，实际项目很少用到，这里不多介绍了
## 迭代器
迭代器时一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署iterator接口，就可以完成遍历操作。
- 使用`for...of`遍历数组(类似链表)

## 生成器
- 生成器其实就是一个特殊的函数
- 异步编程，纯回调函数，node fs ajax mongodb
- 函数代码的分隔符

```javascript
function *gen(){
	console.log(111)
	yield '一只没有耳朵'
	console.log(222)
	yield '一只没有尾巴'
	console.log(333)
	yield '真奇怪'
	console.log(444)
}
let iterator =gen()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
// 111 222 333 444


// 遍历
for(let v of gen()){
	console.log(v)
}
// 一只没有耳朵 一只没有尾巴 真奇怪
```
## Promise
Promise时ES6引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。


## 集合Set()
ES6提供了新的数据结构Set，它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用`扩展运算符`和`for..of`进行遍历

|属性和方法|作用  |
|--|--|
|size  |返回集合的元素个数  |
|add  | 添加一个新元素，返回当前集合 |
|delete  | 删除元素，返回boolean值 |
|has  |检测集合中是否包含某个元素，返回boolean值  |

## Map()
ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但键的范围不限于字符串，各种类型的值(包括对象)都可以当作键。Map也实现了iterator接口，所以可以使用`扩展运算符`和`for..of`进行遍历
|属性和方法|作用  |
|--|--|
|size  |返回Map集合的元素个数  |
|set |添加一个新元素，返回当前Map  |
| get |返回键名对象的键值  |
|has  |检测Map中是否包含某个元素，返回boolean值  |
| clear |清空Map，返回undefined  |

## class类
ES6提供了更接近传统语言的写法，引入Class(类)这个概念，作为对象的模板，通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰，更像面向对象的语法而已
## 数值扩展
- 最小精度`Number.EPSILON`
- 检测一个数值是否为有限数`Number.isFinite()`
- 是否为NaN`Number.isNaN()`
- 字符串转整数浮点数 `Number.parseInt() Number.paerseFloat()`
## 对象方法扩展
- 判断两个值是否完全相等`Object.is()`
- 对象和合并`Object.assign()`
- 设置原型对象`Object.setPrototypeof`


## 模块化
模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。
- 防止命名冲突
- 代码复用
- 高维护性
- ES6之前的模块化规范有

|规范|  |
|--|--|
|CommonJS  | NodeJS，Browserify |
|AMD  | requireJS |
|CMD  |seaJS  |

简单来说就是`export import`
