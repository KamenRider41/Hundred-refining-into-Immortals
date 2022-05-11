---
  sidebarDepth: 3
---

# Javascript
::: tip
`Javascript`作为前端基础三项之力的灵魂,肯定是面试考察的重点:star:
:::

## 手撕Javascript :star:

### 大数相加
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-18 11:52:17
 * @LastEditors: 41
 * @LastEditTime: 2022-04-18 09:28:36
 * @Description: 
 */

/************************测试区域 ***************************/
let num1 = ['1002', '45646', '456465465']
let num2 = ['46', '456456', '798416132132']
let cnt = 0
for (let i = 0; i < num1.length; i++) {
  if (myadd(num1[i], num2[i]) == test(num1[i], num2[i])) {
    console.log(`示例${i}:TRUE`);
    cnt++
  } else {
    console.log(`示例${i}:FALSE`);
  }
}
console.log(`正确率${(cnt / num1.length) * 100}%`);
console.log(2 ** 53);
console.log(2 ** 53 + 10 - 2 ** 53);
/************************解答区域 ***************************/
/**
 * @description: 大数加法BigInt
 * @param1 {*}
 * @return {*}
 * @detail: 
 * @param {*} num1
 * @param {*} num2
 */
function test (num1, num2) {
  num1 = BigInt(num1)
  num2 = BigInt(num2)
  return (num1 + num2).toString()
}
/**
 * @description: 手写大数加法
 * @param1 {*}
 * @return {*}
 * @detail: 
 * @param {*} num1 
 * @param {*} num2
 */
function myadd (num1, num2) {
  /*************判断输入 */
  if (Object.prototype.toString.call(num1).slice(8, -1) != 'String') {
    throw Error('num1 must be a string!')
  }
  if (Object.prototype.toString.call(num2).slice(8, -1) != 'String') {
    throw Error('num2 must be a string!')
  }
  /**************输入处理 */
  let len1 = num1.length, len2 = num2.length
  if (len1 > len2) {
    num2 = num2.padStart(len1, '0')
  } else {
    num1 = num1.padStart(len2, '0')
  }
  let arr1 = num1.split('').map((item) => {
    return item = +item
  })
  let arr2 = num2.split('').map((item) => {
    return item = +item
  })
  /***************运算处理 */
  let res = [], jinwei = 0
  for (let i = arr1.length - 1; i >= 0; i--) {
    let temp = arr1[i] + arr2[i] + jinwei
    if ((temp / 10) >> 0) {
      jinwei = 1
    } else {
      jinwei = 0
    }
    res.unshift(temp % 10)
  }
  return res.join('');
}


```
:::
### LRU
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-10 21:24:48
 * @LastEditors: 41
 * @LastEditTime: 2022-03-10 21:24:49
 * @Description: 
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  const cache = new Map()
  const max = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  let map = this.cache
  if (map.has(key)) {
    let value = map.get(key)
    map.delete(key)
    map.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  const map = this.cache
  if (map.has(key)) {
    map.delete(key)
  }
  map.set(key, value)
  if (map.size > this.max) {
    map.delete(map.keys().next().value)
  }
};

```
:::
### 比较版本号
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-04 17:36:23
 * @LastEditors: 41
 * @LastEditTime: 2022-03-20 18:41:27
 * @Description:
 */
/*
实现一个方法，用于比较两个版本号（version1、version2）
如果version1 > version2，返回1；
如果version1 < version2，返回-1，其他情况返回0。
版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位

输入：compareVersion('0.1', '1.1.1')
输出：-1

输入：compareVersion('13.37', '1.2 ')
输出：1

输入：compareVersion('1.1', '1.1.0')
输出：0
*/
function compareVersion (version1, version2) {
  let ver1 = version1.split('.');
  let ver2 = version2.split('.');
  let max = ver1.length > ver2.length ? ver1.length : ver2.length
  while (ver1.length < max) {
    ver1.push('0')
  }
  while (ver2.length < max) {
    ver2.push('0')
  }
  // console.log(ver1, ver2);
  for (let i = 0; i < ver1.length; i++) {
    if (ver1[i] > ver2[i]) {
      return 1
    } else if (ver1[i] == ver2[i]) {
      continue
    } else {
      return -1
    }
  }
  return 0
}
let a = [
  { v1: "0.1", v2: "1.1.1" },
  { v1: "13.37", v2: "1.2" },
]
for (let i = 0; i < a.length; i++) {
  console.log(compareVersion(a[i].v1, a[i].v2));
}
```
:::
### 数字中1的个数
::: details 点击查看代码
```js
/*
 * @Author: 自迩
 * @Date: 2022-03-06 22:36:00
 * @LastEditTime: 2022-03-07 21:03:13
 * @LastEditors: 41
 * @Description:
 * @FilePath: \面试之路\front-end-interview\javascript\bitCount.js
 */

/*************** 测试区域 *******************/
let num = 0B1100
let cnt = 0
weiyi(num, cnt)       // 位移
indexdeal(num, cnt)   // indexOf
splicedeal(num, cnt)  // indexOf+splice
foreachdeal(num, cnt) // forEach
filterdeal(num)       // filter
reducedeal(num)       // reduce
/*************** 题解区域 *******************/
/**
 * @description: bit移位解法
 */
function weiyi (num, cnt) {
  while (num) {
    if (num % 2 === 1) cnt++
    num >>= 1
  }
  console.log(cnt);
}
/**
 * @description: indexOf解法
 */
function indexdeal (num, cnt) {
  let arr = num.toString(2).split('')
  let index = 0
  while (arr.indexOf('1', index) != -1) {
    cnt++
    index = arr.indexOf('1', index) + 1
  }
  console.log(cnt);
}
/**
 * @description: indexOf+splice解法
 */
function splicedeal (num, cnt) {
  let arr = num.toString(2).split('')
  while (arr.indexOf('1') != -1) {
    arr.splice(arr.indexOf('1'), 1)
    cnt++
  }
  console.log(cnt);
}
/**
 * @description: forEach解法
 */
function foreachdeal (num, cnt) {
  let arr = num.toString(2).split('')
  arr.forEach(item => {
    if (item === '1') cnt++
  })
  console.log(cnt);
}
/**
 * @description: filter解法
 */
function filterdeal (num) {
  let arr = num.toString(2).split('')
  let newarr = arr.filter(item => {
    return item === '1'
  })
  console.log(newarr.length);
}
/**
 * @description: reduce解法
 */
function reducedeal (num) {
  let arr = num.toString(2).split('')
  let res = arr.reduce((pre, cur) => {
    return pre + (+cur)
  }, 0)
  console.log(res);
}

```
:::
### 不用循环输出0到n-1的数
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-04 17:59:10
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 20:58:37
 * @Description: 
 */

/***************测试区域 *******************/
// dfs(10)
// deal(10)
// deal2(10)
// deal3(10)
let a = Array.from(new Array(10).keys())
console.log(a);
let b = Array.from({ length: 10 }, (node, i) => i)
console.log(b);
/***************题解区域 *******************/
/**
 * @description: 递归解法
 */
function dfs (x) {
  let arr = []
  function deal (x) {
    if (x < 0) return
    arr.unshift(x)
    // console.log(x);
    deal(x - 1)
  }
  deal(x - 1)
  console.log(arr);
}
/**
 * @description: padEnd解法
 */
function deal (x) {
  let str = ''.padEnd(x, '0')
  let arr = str.split('')
  let cnt = 0
  let res = arr.map(item => {
    cnt += 1
    return +item + cnt - 1
  })
  console.log(res);
}
/**
 * @description: Array.from解法
 */
function deal2 (x) {
  let arr = (new Array(x + 1)).join('0').split('')
  let cnt = -1
  let newarr = arr.map(item => {
    cnt++
    return +item + cnt
  })
  console.log(newarr);

}
/**
 * @description: Array.fill解法
 */
function deal3 (x) {
  let arr = (new Array(x)).fill('0')
  let cnt = -1
  let newarr = arr.map(item => {
    cnt++
    return +item + cnt
  })
  console.log(newarr);
}

```
:::
### 单词统计
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-13 15:19:19
 * @LastEditors: 41
 * @LastEditTime: 2022-03-13 15:32:31
 * @Description: 
 */
function count (article) {
  article = article.trim().toUpperCase()
  let array = article.match(/[A-z]+/g)
  article = " " + array.join(' ') + " "
  let max = 0, maxword
  for (let i = 0; i < array.length; i++) {
    let word = new RegExp(" " + array[i] + " ", 'g')
    let num = article.match(word).length
    if (num > max) {
      max = num
      maxword = array[i]
    }
  }
  console.log(maxword + ' ' + max);
}
count('Age has reached the end of the beginning of a word')

```
:::
### Fib数列
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-04-24 17:19:11
 * @LastEditors: 41
 * @LastEditTime: 2022-04-26 17:43:16
 * @Description: 
 */
let fib = function () {
  let memo = [0, 1]
  let dfs = function (n) {
    if (memo[n] == undefined) {
      memo[n] = dfs(n - 2) + dfs(n - 1)
    }
    return memo[n]
  }
  return dfs
}()

let res = fib(10)
console.log(res);
```
:::
### 全排列
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-13 14:19:02
 * @LastEditors: 41
 * @LastEditTime: 2022-03-24 16:03:09
 * @Description: 
 */
let permute = function (nums) {
  let len = nums.length, visited = new Array(len).fill(false), res = []
  const dfs = (nums, len, depth, path, visited) => {
    if (len == depth) {
      res.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        path.push(nums[i])
        visited[i] = true
        dfs(nums, len, depth + 1, path, visited)
        visited[i] = false
        path.pop()
      }
    }
  }
  dfs(nums, len, 0, [], visited)
  return res
}
let nums = [1, 2, 3]
console.log(permute(nums));
```
:::
### 生成树
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-04-01 15:20:38
 * @LastEditors: 41
 * @LastEditTime: 2022-04-02 18:12:11
 * @Description: 
 */
let strarr = {
  'a-b-c-d': 1,
  'a-b-c-e': 2,
  'a-b-f': 3,
  'a-j': 4,
};
path(strarr)
function path (strarr) {
  let obj = {};
  Object.keys(strarr).forEach((item) => {
    let reg = item.split('-')
    let p = obj;
    for (let i = 0; i < reg.length - 1; i++) {
      let v = reg[i];
      p[v] ?? (p[v] = {});
      p = p[v];
    }
    p[reg.at(-1)] = strarr[item];
  });
}
// let obj = {
//   a: {
//     b: {
//       c: {
//         d: 1,
//         e: 2,
//       },
//       f: 3,
//     },
//     j: 4,
//   },
// };
```
:::
### 快速排序
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-10 21:25:19
 * @LastEditors: 41
 * @LastEditTime: 2022-05-06 17:59:06
 * @Description: 
 */
/************************测试区域 */
let arr2 = [1231, 45546, 788, 12313, 1, 5, 4]
console.log(mysort2(arr2));
/************************题解区域 */
function mysort2 (arr) {
  if (arr.length < 2) return arr
  let target = arr.splice((arr.length / 2) >> 0, 1), left = [], right = []
  arr.forEach(item => {
    (item < target ? left : right).push(item)
  });
  return mysort2(left).concat(target, mysort2(right))
}
/***********************测试区域 */
let arr = [1231, 45546, 788, 12313, 1, 5, 4]
console.log(mysort(arr));
/************************题解区域 */
function mysort (arr) {
  return quick(arr, 0, arr.length - 1)
}
function quick (arr, left, right) {
  let index
  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
  return arr
}

function partition (arr, left, right) {
  const target = arr[left]
  let i = left, j = right
  while (i <= j) {
    while (arr[i] < target) {
      i++
    }
    while (arr[j] > target) {
      j--
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}
```
:::
### 千分位分割
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-18 11:37:10
 * @LastEditors: 41
 * @LastEditTime: 2022-04-27 19:13:10
 * @Description: 实现数字的千分位逗号分割
 */


function deal (num) {
  let inputArray = num.toString().split('.')
  let zhengshu = inputArray[0].split('')
  let xiaoshu = (inputArray.length > 1 ? inputArray[1] : '').split('')
  let res1 = [], res2 = []
  while (zhengshu.length) {
    let temp = zhengshu.splice(-3).join('')
    res1.unshift(temp)
  }
  while (xiaoshu.length) {
    let temp = xiaoshu.splice(0, 3).join('')
    res2.unshift(temp)
  }
  if (res2.length)
    return res1.join(',') + '.' + res2.join(',')
  else
    return res1.join(',')
}
/***********测试区域************* */
let num = [123154.465165, 132154, 213456, 12.123456, 123145.1231]
for (let i = 0; i < num.length; i++) {
  console.log(deal(num[i]))
}
```
:::
### 隔一秒输出数字
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-18 11:20:31
 * @LastEditors: 41
 * @LastEditTime: 2022-03-18 11:27:15
 * @Description: 
 */
const oneToThree = () => {
  const arr = [1, 2, 3];
  arr.reduce((prev, next) => {
    return prev.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(next);
          resolve();
        }, 1000);
      })
    });
  }, Promise.resolve())
};

// oneToThree();

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i + 1);
  }, (i + 1) * 1000)
}

```
:::
### 柯里化
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-13 15:39:04
 * @LastEditors: 41
 * @LastEditTime: 2022-04-18 20:15:54
 * @Description: 
 */
/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
function curry (fn, len = fn.length) {
  return _curry.call(this, fn, len)
}

/**
* 中转函数
* @param fn    待柯里化的原函数
* @param len   所需的参数个数
* @param args  已接收的参数列表
*/
function _curry (fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args)
    }
  }
}

function fn (a, b, c, d) {
  console.log(a, b, c, d);
}
// let _fn = curry(fn)
// _fn(1, 2, 3, 4)
// _fn(1)(2, 3)(4)

/************************************* */
function add () {
  let args = [...arguments]
  let inner = function () {
    args.push(...arguments)
    return inner
  }
  inner.toString = function () {
    return args.reduce((pre, cur) => {
      return pre * cur
    })
  }
  return inner
}
const res = add(1)(2)(3)(4)(5).toString()
console.log(res);
```
:::
### ObjFlat拍平
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-31 14:24:11
 * @LastEditors: 41
 * @LastEditTime: 2022-04-22 14:56:44
 * @Description: 
 */
/***********************测试区域 */
let obj = {
  name: {
    value: 41,
    a: 1,
    b: 2
  },
  age: {
    value: 20
  },
  other: {
    hobby: {
      music1: 'guita',
      music2: 'sing'
    }
  }
}
let res = myFlat(obj)
console.log(res);
/***********************题解区域 */
function myFlat (obj) {
  let newobj = {}
  function dfs (obj, path) {
    if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') {
      newobj[path] = obj
    } else {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (path) dfs(obj[key], path + '-' + key)
          else dfs(obj[key], key)
        }
      }
    }
  }
  dfs(obj, '')
  return newobj
}

```
:::
### lodashGet
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-04-24 17:09:02
 * @LastEditors: 41
 * @LastEditTime: 2022-04-24 17:17:50
 * @Description: 
 */
function get (object, path, defaultVal = 'undefined') {
  let newPath = []
  if (Array.isArray(path)) {
    newPath = path
  } else {
    // console.log(path);
    newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
    // console.log(newPath);
  }
  return newPath.reduce((o, k) => {
    // console.log(o, k);
    return (o || {})[k]
  }, object) || defaultVal
}
var object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(get(object, 'a[0].b.c'));
```
:::
### DeepClone
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-16 11:24:48
 * @LastEditors: 41
 * @LastEditTime: 2022-03-24 11:19:47
 * @Description: 
 */
function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function deepClone (obj, map = new WeakMap()) {
  if (obj === null) return obj
  if (getType(obj) === 'RegExp') return new RegExp(obj)
  if (getType(obj) === 'Date') return new Date(obj)
  if (getType(obj) !== 'Object' && getType(obj) !== 'Array') return obj
  if (map.has(obj)) return map.get(obj)
  let cloneobj = getType(obj) === 'Array' ? [] : {}
  map.set(obj, cloneobj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneobj[key] = deepClone(obj[key], map)
    }
  }
  return cloneobj
}
let obj = {
  name: 41,
  arr: [1, { test: 123 }, 3, 4, 5],
  haha: {
    name: 123
  }
}
let newobj = deepClone(obj)
obj.name = 42
obj.arr[0] = 5
obj.arr[1].test = 5
obj.haha.name = 5
console.log(obj, newobj);
```
:::
### 手写reduce
::: details 点击查看代码
```js
/*
 * @Author: 自迩
 * @Date: 2022-03-06 22:22:51
 * @LastEditTime: 2022-03-24 16:45:33
 * @LastEditors: 41
 * @Description:
 * @FilePath: \面试之路\front-end-interview\javascript\myreduce.js
 */
/*************题解区域 *********************/
Array.prototype.myReduce = function (fn, init) {
  if (Object.prototype.toString.call(fn).slice(8, -1) !== 'Function') {
    throw error('first parameter must be Function')
  }
  let arr = this
  let pre = init
  let index = 0
  if (!init) {
    pre = arr[index]
    index++
  }
  for (let i = index; i < arr.length; i++) {
    pre = fn(pre, arr[i], i, arr)
  }
  return pre
}
/*************测试区域 *********************/
let arr = [1, 2, 3]
let result = arr.myReduce((pre, cur) => {
  return pre + cur
}, 0)
console.log(result);


```
:::
### 手写repeat
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-07 21:41:51
 * @LastEditors: 41
 * @LastEditTime: 2022-03-07 21:51:27
 * @Description: 
 */

console.log(repeat('123', 2));
console.log(repeat2('123', 2));
console.log(repeat3('123', 2));


/**
 * @description: 1.空数组join
 */
function repeat (target, n) {
  return (new Array(n + 1)).join(target)
}
/**
 * @description: 2.省去创建数组
 */
function repeat2 (target, n) {
  return Array.prototype.join.call({
    length: n + 1
  }, target)
}
/**
 * @description: 
 */
function repeat3 (target, n) {
  let res = ''
  while (n--) {
    res += target
  }
  return res
}

```
:::
### 手写Promise
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-04-06 11:31:29
 * @LastEditors: 41
 * @LastEditTime: 2022-04-06 17:40:19
 * @Description: 
 */
class Commitment {
  static PENDING = '待定'
  static FULFILED = '成功'
  static REJECTED = '拒绝'
  constructor(func) {
    this.status = Commitment.PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    // func(this.resolve.bind(this), this.reject.bind(this))
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve (result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILED
        this.result = result
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  reject (result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }
  then (onFULFILED, onREJECTED) {
    return new Commitment((resolve, reject) => {
      onFULFILED = typeof onFULFILED === 'function' ? onFULFILED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFULFILED)
        this.rejectCallbacks.push(onREJECTED)
      }
      if (this.status === Commitment.FULFILED) {
        setTimeout(() => {
          onFULFILED(this.result)
        })
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      }
    })
  }
}


let commitment = new Commitment((res, rej) => {
  res('这次一定')
})
commitment.then(
  result => { console.log(result); },
  result => { console.log(result.message); }
).then(
  result => { console.log(result); },
  result => { console.log(result.message); }
)

```
:::
### 手写Promise.all
::: details 点击查看代码
```js
/*
 * @Author: 41
 * @Date: 2022-03-18 11:28:35
 * @LastEditors: 41
 * @LastEditTime: 2022-05-06 17:56:32
 * @Description: 
 */
Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = []
    let index = 0
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then(res => {
          ans[i] = res
          index++
          if (index === promiseArr.length) {
            this.resolve(ans)
          }
        })
        .catch(err => reject(err))
    }
  })
}
```
:::

















## ES6 :star:
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

### let变量声明
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
### const声明常量
- 1.一定要赋初始值
- 2.一般常量使用大写
- 3.常量的值不能修改
- 4.块级作用域
- 5.对于数组和对象的元素修改，不算做对常量的修改，不会报错

### 模板字符串
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
### 对象的简化

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
### 箭头函数

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

### 函数参数的默认值
- 1.形参初始值，具有默认值的参数，一般位置要靠后(潜规则)
### rest参数

```javascript
function fn(a,b,...args){
	console.log(a)
	console.log(b)
	console.log(args)
}
fn(1,2,3,4,5,6)
```
### 扩展运算符
- `...`扩展运算符能将数组转换为逗号分隔的参数序列
### Symbol
- 创建Symbol`let s=Symbol('41')`
- Symbol.for 创建 `let s2=Symbol.for('41')`

前者无论如何不会===，后者数值相等可以返回true

- 不能与其他数据进行运算
- ES6还提供了11个内置的Symbol值，实际项目很少用到，这里不多介绍了
### 迭代器
迭代器时一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署iterator接口，就可以完成遍历操作。
- 使用`for...of`遍历数组(类似链表)

### 生成器
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
### Promise
Promise时ES6引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。


### 集合Set()
ES6提供了新的数据结构Set，它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用`扩展运算符`和`for..of`进行遍历

|属性和方法|作用  |
|--|--|
|size  |返回集合的元素个数  |
|add  | 添加一个新元素，返回当前集合 |
|delete  | 删除元素，返回boolean值 |
|has  |检测集合中是否包含某个元素，返回boolean值  |

### Map()
ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但键的范围不限于字符串，各种类型的值(包括对象)都可以当作键。Map也实现了iterator接口，所以可以使用`扩展运算符`和`for..of`进行遍历
|属性和方法|作用  |
|--|--|
|size  |返回Map集合的元素个数  |
|set |添加一个新元素，返回当前Map  |
| get |返回键名对象的键值  |
|has  |检测Map中是否包含某个元素，返回boolean值  |
| clear |清空Map，返回undefined  |

### class类
ES6提供了更接近传统语言的写法，引入Class(类)这个概念，作为对象的模板，通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰，更像面向对象的语法而已
### 数值扩展
- 最小精度`Number.EPSILON`
- 检测一个数值是否为有限数`Number.isFinite()`
- 是否为NaN`Number.isNaN()`
- 字符串转整数浮点数 `Number.parseInt() Number.paerseFloat()`
### 对象方法扩展
- 判断两个值是否完全相等`Object.is()`
- 对象和合并`Object.assign()`
- 设置原型对象`Object.setPrototypeof`


### 模块化
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

## ES7 :star:
### Array.prototype.includes
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
### 幂运算**
```js
console.log(2**10)
```
## ES8 :star:
### async和await
async和await了两种语法结合可以让异步代码像同步代码一样
#### async函数
- `async`函数的返回值为`promise`对象
- `promise`对象的结果由`async`函数执行的返回值决定
#### await表达式
- `await`必须写在`async`函数中
- `await`右侧的表达式一般为`promise`对象
- `await`返回的是`promise`成功的值
- `await`的`promise`失败了，就会抛出异常，需要通过`try...catch`捕获处理

### Object.values,keys和Object.entries
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
### Object.getOwnPropertyDescriptors
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
## ES9 :star:
### 扩展运算符与rest参数
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
### 正则扩展：命名捕获分组
`?<>`
```js
let str = '<a href="http://www.baidu.com">bit</a>'
// const reg = /<a href="(.*)">(.*)<\/a>/
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
const res = reg.exec(str)
console.log(res.groups.url);
console.log(res.groups.text);
```
### 正则扩展:  反向断言
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
### 正则扩展：dotAll模式
正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外。

引入一个`s`修饰符来解决了这个问题
## ES10 :star:
### Object.fromEntries
可以说是`entries`的逆运算，把键值对转换成对象
```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj = Object.fromEntries(entries);
console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```
### trimStart与trimEnd
- `trimStart()`清除字符串前面的空白字符
- `trimEnd()`清除字符串后面的空白字符
### flat与flatMap
- `flat`数组扁平化
```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
***
-  flatMap 方法与 map 方法和深度depth为1的 flat 几乎相同.
```js
let arr = [1, 2, 3, 4]
let res1 = arr.map(x => [x * 2])
let res2 = arr.flatMap(x => [x * 2])
console.log(res1);//[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]
console.log(res2);//[ 2, 4, 6, 8 ]
```
### Symbol.prototype.description
```js
console.log(Symbol('desc').description);
// expected output: "desc"
```
## ES11 :star:
### 私有属性
简单来说就是在`class`里面的属性前面加一个`#`
就和c++里面的`private`一样
不过多阐述了！

### Promise.allSettled
解决了Promise.all，有一个坏了就全坏了的情况！
```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// { status: 'fulfilled', value: 3 }
// { status: 'rejected', reason: 'foo' }
```
### String.prototype.matchAll
`matchAll()` 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器，这样就可以使用`of`迭代了
```js
let str = `<ul>
  <li>
    <a>123</a>
    <p>456</p>
  </li>
  <li>
    <a>789</a>
    <p>987</p>
  </li>
</ul>`
const reg = /<li>.*?<a>(?<texta>.*?)<\/a>.*?<p>(?<textp>.*?)<\/p>/sg
const result = str.matchAll(reg)
for (let v of result) {
  console.log(v.groups.texta);
  console.log(v.groups.textp);
}
```
### 可选链操作符`？.`
`?.`让我们不用去判断是否存在了
方便我们的链式调用
```js
//  ES2019的写法
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  }
  catch (err) {
    if (onError) { // 校验onError是否真的存在
      onError(err.message);
    }
  }
}
/******************************************/
// 使用可选链进行函数调用
function doSomething(onContent, onError) {
  try {
   // ... do something with the data
  }
  catch (err) {
    onError?.(err.message); // 如果onError是undefined也不会有异常
  }
}
```
### 空值合并运算符`？？`
空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
```js
let res1 = 0 ?? 42
let res2 = 0 || 42
console.log(res1);
console.log(res2);
```
### BigInt类型
BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。
```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```
### globalThis
全局属性 globalThis 包含全局的 this 值，类似于全局对象（global object）。


## 面试题一 :star:

### 1.var,let,const三者区别
::: details 点击查看答案
- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用
能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var
:::


### 2.es6
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


### 3.类型转换机制
::: details 点击查看答案
- undefined
- null
- boolean
- string
- number
- symbol
- BigInt
:::


### 4.深拷贝浅拷贝有什么区别？怎么实现深拷贝？
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

### 5.说说你对闭包的理解，以及闭包使用场景
::: details 点击查看答案
闭包让你可以在一个内层函数中访问到其外层函数的作用域
- 创建私有变量
- 延长变量的生命周期
:::


### 6.什么是作用域链？
::: details 点击查看答案
作用域，即变量(变量作用域又称上下文)和函数生效的区域或集合
当前层作用域找不到就向上一层找
:::


### 7.JS中的原型，原型链分别是什么？
::: details 点击查看答案
#### 原型
函数可以有属性。 每个函数都有一个特殊的属性叫作原型prototype
#### 原型链
原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法
:::


### 8.JS如何实现继承？
::: details 点击查看答案
- 原型链继承(内存共享)
- 构造函数继承(只能继承父类的实例属性和方法，不能继承原型属性或者方法)
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承
:::


### 9.谈谈this指针
::: details 点击查看答案
this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调
:::


### 10.JS的事件模型有哪些？
::: details 点击查看答案
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

***

- 原始事件模型
- 标准事件模型
- IE事件模型
:::

## 面试题二 :star:

### 1.什么是事件代理，以及它的应用场景
::: details 点击查看答案
事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数
:::


### 2.说说new操作符具体干了什么？
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


### 3.讲一下事件委托,target与currentTarget分别是什么？
::: details 点击查看答案
- event.target返回触发事件的元素
- event.currentTarget返回绑定事件的元素
***
- addEventListener (type, listener[, useCapture]) 第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段电泳事件处理程序
- 事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。
:::
