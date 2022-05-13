# ES8 :star:

## async和await
async和await了两种语法结合可以让异步代码像同步代码一样
#### async函数
- `async`函数的返回值为`promise`对象
- `promise`对象的结果由`async`函数执行的返回值决定
#### await表达式
- `await`必须写在`async`函数中
- `await`右侧的表达式一般为`promise`对象
- `await`返回的是`promise`成功的值
- `await`的`promise`失败了，就会抛出异常，需要通过`try...catch`捕获处理
## Object.values,keys和Object.entries
- 1.`Object.values()`方法返回一个给定对象的所有可枚举属性值的数组
(`keys`同理，返回的是键名)
```js
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
```
比如找到map中值为1的下标
```js
let map = new Map()
map.set(1, 1)
map.set(2, 3)
let arr = [...map.values()]
arr.forEach((item, index) => {
  if (item == 1) {
    console.log(index)  // 0
  }
})
```
***
- 2.`Object.entries()`方法返回一个给定对象自身可遍历属性[key,value]的数组
让obj的遍历变得更加丝滑...
```js
const object1 = {
  a: 'somestring',
  b: 42
};
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```
## Object.getOwnPropertyDescriptors
该方法返回指定对象所有自身属性的描述对象
```js
const obj = Object.create(null, {
  name: {
    value: '41',
    writable: true,
    configurable: true,
    enumerable: true
  }
})
console.log(Object.getOwnPropertyDescriptors(obj));
```
