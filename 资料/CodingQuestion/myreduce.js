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

