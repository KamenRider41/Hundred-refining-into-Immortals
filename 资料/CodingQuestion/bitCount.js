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
