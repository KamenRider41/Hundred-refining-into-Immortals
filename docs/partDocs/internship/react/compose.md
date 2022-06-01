---
sidebarDepth: 0
---
# 函数式编程学习笔记 :star:
[[TOC]]
## 没有副作用
副作用这个词我们可算听的不少，它的含义是：在完成函数主要功能之外完成的其他副要功能。在我们函数中最主要的功能当然是根据输入返回结果，而在函数中我们最常见的副作用就是随意操纵外部变量。由于 JS 中对象传递的是引用地址，哪怕我们用 const 关键词声明对象，它依旧是可以变的。而正是这个“漏洞”让我们有机会随意修改对象。

而在 JS 中，我们经常可以看到下面这种对 map 的 “错误” 用法，把 map 当作一个循环语句，然后去直接修改数组中的值。
```js
const list = [...];
// 修改 list 中的 type 和 age
list.map(item => {
  item.type = 1;
  item.age++;
})
```
这样函数最主要的输出功能没有了，编程了直接修改外部变量，这就是它的副作用。而正确的写法应该是：
```js
const list = [...];
// 修改 list 中的 type 和 age
const newList = list.map(item => ({...item, type: 1, age:item.age + 1}));
```
**注意：**`()`是`{return }`的缩写
## 纯函数
- 即不依赖外部变量，如果有人调用了 `changeName` 对 `curUser` 进行了修改，然后你在另外的地方调用了 `saySth` ，这样就会产生你预料之外的结果。

```js
const curUser = {
  name: 'Peter'
}

const saySth = str => curUser.name + ': ' + str;   // 引用了全局变量
const changeName = (obj, name) => obj.name = name;  // 修改了输入参数
changeName(curUser, 'Jay');  // { name: 'Jay' }
saySth('hello!'); // Jay: hello!
```
***
- 如果改成纯函数的写法
```js
const curUser = {
  name: 'Peter'
}

const saySth = (user, str) => user.name + ': ' + str;   // 不依赖外部变量
const changeName = (user, name) => ({...user, name });  // 未修改外部变量

const newUser = changeName(curUser, 'Jay');  // { name: 'Jay' }
saySth(curUser, 'hello!'); // Peter: hello!
```

## 通过闭包缓存数据
```js
  function memoize(fn) {
    const cache = {};
    return function() {
      const key = JSON.stringify(arguments);
      var value = cache[key];
      if(!value) {
        value = [fn.apply(null, arguments)];  // 放在一个数组中，方便应对 undefined，null 等异常情况
        cache[key] = value; 
      }
      return value[0];
    }
  }
  const fibonacci = memoize(n => n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2));
  console.log(fibonacci(4))  // 执行后缓存了 fibonacci(2), fibonacci(3),  fibonacci(4)
  console.log(fibonacci(10)) // fibonacci(2), fibonacci(3),  fibonacci(4) 的结果直接从缓存中取出，同时缓存其他的
```

## 加工站---柯里化
- 比如调用接口的时候再封装一层
- 通常我们不会自己去写 curry 函数，现成的库大多都提供了 curry 函数的实现，但是使用过的人肯定有会有疑问，我们使用的 Lodash，Ramda 这些库中实现的 curry 函数的行为好像和柯里化不太一样呢，他们实现的好像是部分函数应用呢？
- *柯里化*强调的是生成单元函数，部分函数应用的强调的固定任意元参数，而我们平时生活中常用的其实是部分函数应用，这样的好处是可以固定参数，降低函数通用性，提高函数的适合用性。

## 流水线---函数组合
- 函数组合的好处显而易见，它让代码变得简单而富有可读性，同时通过不同的组合方式，我们可以轻易组合出其他常用函数，让我们的代码更具表现力
  - 这个过程，就像搭乐高积木一样。
- 其实也和`koa`中 中间件的思想很像

## 总结
优点:
- 代码简洁，开发快速
- 接近自然语言。易于理解
- 易于"并发编程"(不存在锁线程的问题)
- 更少的出错概率(问题细化了)
***
客观地认识函数式编程，它也有缺点：
- 性能
  - 封装肯定多少会降低性能的
- 资源占用
  - JS中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式、这再某些场合会产生十分严重的问题
- 递归陷阱(不是太了解)




