/*
 * @Author: 41
 * @Date: 2022-03-17 18:06:52
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 20:17:36
 * @Description: 
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length
  let p1 = 0, p2 = 0
  let pre, now = 0
  for (let i = 0; i <= (len / 2) >> 0; i++) {
    if (p1 < nums1.length && (p2 >= nums2.length) || nums1[p1] < nums2[p2]) {
      pre = now
      now = nums1[p1]
      p1++
    } else {
      pre = now
      now = nums2[p2]
      p2++
    }
  }
  if (len % 2 == 0) {
    return (pre + now) / 2
  } else {
    return now
  }
};
/*********************************** */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => {
    return a - b
  })
  if (arr.length % 2 == 0) {
    return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
  } else {
    return arr[(arr.length / 2) >> 0]
  }
};

