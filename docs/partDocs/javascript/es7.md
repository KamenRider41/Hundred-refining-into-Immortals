# ES7 :star:

## Array.prototype.includes
`includes`方法用来检测数组中是否包含某个元素，返回布尔类型值

```js
console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, 3].includes(3, 3));  // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true
```
***
`includes() `方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的 `arguments` 对象上调用的 `includes()` 方法。
```js
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

## 幂运算**
```js
console.log(2**10)
```
