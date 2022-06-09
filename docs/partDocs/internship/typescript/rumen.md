---
sidebarDepth : 0
---


# 写在前面
由于没有编译和类型检查的束缚，`JavaScirpt`天生就是一门灵活，容易上手的语言，但也难以维护
***
`TypeScript`可以说已经悄悄地走近了程序员(更准确一点是前端程序员)的日常开发之中。

在大型项目中，TS的低成本学习+高回报的代码质量提升是我们希望看到的！

这篇文章主要是介绍TS大概是什么？旨在扫盲，也希望各位大佬能批评指正

然后,说起TS不要再只知道上单TS了，它还是JS的加强盔甲

[[TOC]]

## 为什么要有TypeScript？
- 首先，`TypeScript`是`JavaScript`的超集，它是包含JS的，或者说TS是`javascript`的一件装备
- 为什么要有这件装备呢？
    - JS是一门比较随意的语言，很灵活，但是也会有问题出现.
        - 可以从下面的实例来看看一些奇怪的地方
    - 就类似与一个超能力者没有办法控制好自己的超能力
        - 我们给他穿上一个控制装甲，就能让超能力者随心所欲又安全的控制自己的超能力
```js
console.log([] == [])  // false
console.log([] <= [])  // true
console.log([] >= [])  // true
```
*乱七八糟*
```js
console.log(Math.min());               // Infinity
console.log(Math.max());               // -Infinity
console.log(Math.min() < Math.max());  // false
```
*一塌糊涂*
```js
console.log([1, 2, 3, 11, 22].sort()); // [1,11,2,22,3]
```
*厚礼蟹*
***
- 然后使用`TypeScript`可以解决上面的问题
- 总而言之
    - `TypeScript`让`Javascript` 拥有了`Type`的约束，从根本上杜绝了一些代码错误的产生
## 快速入门
- `TypeScirpt`是不可以直接在浏览器运行的
    - 但可以用`Deno`(node反过来)
### tsc转译器
- 下载`npm install tsc -g`
- 下载`npm install ts-node -g`
***
- 方法一：使用`ts-node test.ts`运行`typescirpt`文件
- 方法二：下载`Code Runner`点击右上角的小三角运行
    - 会先转译成`js`文件再运行
    - 所以这个流程也是可以交给`webpack`来完成的

### 自定义额外配置
- 创建`tsconfig.json`文件
    - `watch`自动编译
    - `removeComments`自动取出注释，减少代码体积
    - `target`编译的目标版本
    - ...
```json
{
  "compilerOptions": {
    "watch": true,
    "removeComments": true,
    "target": "ES5"
  }
}
```
## TypeScript的基本概念
### 给变量指定类型
- 最常见的数据类型包括4种
    - number
    - string
    - boolean
    - any
```ts
// js
function multiply(a, b) {
  return a * b
}
console.log(multiply(1, 2))   // 2
console.log(multiply("1", 2)) // 2
// ts
function multiply(a: number, b: number) {
  return a * b
}
console.log(multiply(1, 2))    // 2
console.log(multiply("1", 2))  // 报错
```
***
- 同样也可以指定参数是否可以省略(`?`)，还有函数的返回类型
    - 如果一个函数没有返回值,我们可以标记为`void`
```ts
function multiply(a: number, b?: number): number {
  return a * b
}
console.log(multiply(1, 2))  // 2
console.log(multiply(1))     // NaN
```
### 元组
- 这是一个和数组很类似的概念
- 数组种元素的个数和类型都是确定的
```ts
let point: [number, number, number?]
point = [1, 2, 3]
point = [1, 2]
console.log(point);
```
### 联合类型
- 有时候，我们希望某个变量可以是多种类型种的任意一种
- 也可以实现类似c++和java中的枚举
```ts
let color: number | string
color = "red"
color = 0xff0000
// color = true // 报错

let gender: "male" | "female"
let dice: 1 | 2 | 3 | 4 | 5 | 6
gender = "male"
// gender="boy" // 报错

dice = 3
// dice=123 // 报错
```
### 接口
- 用来定义个对象的类型
    - 定义对象应该包含哪些属性
    - 属性的类型是什么
- 多写属性会报错，类型不对也会报错
```ts
interface User {
  name: string;
  id: number;
}
const user: User = {
  name: '41',
  id: 1,
  // age: 123 // 多写会报错
}
```
### 函数类型
- 限定某个函数必须具有特性的参数和返回值
- 对于回调函数很好用
```ts
function getUserName(callback: (data: string) => void) {

}
getUserName((data) => {
  alert(data)
})
getUserName((data) => {
  // alert(data * 2)   // 类型报错
})
```

### 类型别名
- 使用`type`关键字给复杂的类型取一个别名
- 可以直接使用别名，减少代码的重复
```ts
type UserID = number | string
function getUserInfo(userId: UserID) {

}
```

## 一些使用小技巧
- 在`tsconfig.js`
### `noImplicitAny`
- `noImplicitAny`参数`true`让编译器有更严格的验证
- 本来是隐式赋值为`any`的，现在需要手动添加`any`
```ts
function multiply(a: any, b: any) {
  return a * b
}
```
### `strictNullChecks`
- `strictNullChecks`参数`true`不能够赋值为`null`或者`undefined`
    - 除非添加`null`，`undefined`类型
```ts
let s: string
// s = null       // 报错
// s = undefined  // 报错
let a: string | null | undefined
a = null
```
### 使用第三方库
- 有些库本身不是`TypeScript`编写的，所以可能无法使用
    - 安装由社区维护的类型定义包`@types/...`


    
