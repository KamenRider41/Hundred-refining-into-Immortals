---
sidebarDepth : 0
---


# 写在前面
在上次我们粗略地学习了`TypeScript`的基本内容，今天就和大家分享一下`TypeScript`的进阶内容，那就是`TypeScript`的泛型和装饰器。

泛型和装饰器作为`TypeScript`的好装备！它们到底起着什么样神奇的作用呢！这篇文章将会为你解密！

[[TOC]]
## 泛型
泛型是指在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
- 多个类型参数
- 泛型约束
- 泛型接口
- 泛型类
- 泛型参数的默认类型

我们可以看到泛型的应用还是很广的！为了方便大家进一步理解，我们通过`泛型参数`的例子带大家更好地认识一下`TS`的泛型

### 举个例子:初识
- 下面这种情况,你想让函数的仓库一会儿是`number`，一会儿是`string`
    - 这样写会报错，因为`js`或者说`ts`是没有函数重载的！
```ts
function foo(a: number) {
  return a
}
function foo(b: string) {
  return b
}
```
***
- 如何解决？
   - 有同学说，用枚举类型，还不错，
```ts
function foo(a: number | string) {
  return a
}
console.log(foo(1));
console.log(foo('12sad'));
```
*** 
- 这样确实能解决我们的问题！
    - 那如果以后参数变成一个`Object`呢？
    - 再加一个枚举类型？
        - 太麻烦了，这个时候，就有了泛型，我们让类型作为一个参数传入
```ts
function foo<T>(a: T) {
  return a
}
const res1 = foo<number>(1)
const res2 = foo<string>('123')
const res3 = foo(true)
console.log(res1)
console.log(res2);
console.log(true);
```
- 我们可以看到，它同时还支持`类型推导`
    - 类型推导就是没有传入泛型，泛型会自动根据参数得到类型
### 举个例子:传入多个参数
- 当然，我们的泛型可以传入多个！
```ts
function fun<T, E, W>(arg1: T, arg2: E, arg3: W): T {
  return arg1
}

let res = fun<number, string, { name: string }>(1, '123', { name: '41' })
console.log(res);
```
泛型真的方便又简单,下面就让我们一起来康康装饰器！

## 装饰器
- 作为`TS`的初学者阿，一般都觉得装饰器实在是晦涩难懂！
- 没事，今天我们直接看代码，一下就懂了
### 举个例子:初识
```ts
function fn(target) {
  console.log(target);
  target.a = 12;
}

@fn
class User {}

console.log(User.a);
```
***
```js
[Function: User]
12
```
- 我们可以看出装饰器的参数`target`默认就是我们`类`或者是`函数`的构造函数
- 在装饰器内可以通过`target`给类里面的属性赋值
### 举个例子:装饰器传参
- 装饰器的传参是比较特殊的
    - 我们的`target`在这里就是`constructor`会放到return出来的函数
    - 也就是会变成一个高阶函数，`target`放到了内部
    - 外部函数传入的参数可以在内部进行赋值
```ts
function fn(num: number) {
  return function (constructor: Function) {
    constructor.prototype.a = num
  }
}

@fn(41)
class User {
  a: number;
}

let obj = new User();
console.log(obj.a);

```
***
```TS
41
```
- 装饰器有点东西！
