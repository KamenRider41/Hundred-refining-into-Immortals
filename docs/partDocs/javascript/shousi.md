# 手撕Javascript :star:

## 大数相加
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
## LRU
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
## 比较版本号
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
## 数字中1的个数
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
## 不用循环输出0到n-1的数
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
## 单词统计
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
## Fib数列
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
## 全排列
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
## 生成树
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
## 快速排序
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
## 千分位分割
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
## 隔一秒输出数字
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
## 柯里化
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
## ObjFlat拍平
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
## lodashGet
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
## DeepClone
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
## 手写reduce
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
## 手写repeat
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
## 手写Promise
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
## 手写Promise.all
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
















