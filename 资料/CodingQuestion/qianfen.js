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