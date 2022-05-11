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

