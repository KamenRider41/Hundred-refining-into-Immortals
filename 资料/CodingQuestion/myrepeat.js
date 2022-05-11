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
