# ES9 :star:
## 扩展运算符与rest参数
Resr参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在ES9中为对象提供了像数组一样的rest参数和扩展运算符
```js
function test ({ name, age, ...other }) {
  console.log(name);
  console.log(age);
  console.log(other);
}
test({
  name: 41,
  age: 24,
  type: 123,
  username: 123,
  password: 123
})
/*
41
24
{ type: 123, username: 123, password: 123 }
*/
```
***
对象的扩展运算符之合并
```js
const skillone = {
  q: 1
}
const skilltwo = {
  w: 2
}
console.log({ ...skillone, ...skilltwo });
```
## 正则扩展：命名捕获分组
`?<>`
```js
let str = '<a href="http://www.baidu.com">bit</a>'
// const reg = /<a href="(.*)">(.*)<\/a>/
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
const res = reg.exec(str)
console.log(res.groups.url);
console.log(res.groups.text);
```
## 正则扩展:  反向断言
```js
let str = 'dasdsada123哈哈哈456零零零零'
// 正向断言
// const reg = /\d+(?=零)/
// const res = reg.exec(str)
// 反向断言
const reg = /(?<=哈)\d+/
const res = reg.exec(str)
console.log(res);
```
## 正则扩展：dotAll模式
正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外。

引入一个`s`修饰符来解决了这个问题
