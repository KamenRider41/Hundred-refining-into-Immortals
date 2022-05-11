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



