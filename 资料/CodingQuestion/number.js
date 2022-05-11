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
