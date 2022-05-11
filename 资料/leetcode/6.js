/*
 * @Author: 41
 * @Date: 2022-03-17 17:42:59
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:43:00
 * @Description: 
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let left = 0, right = 0
  let max = 0
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
    } else {
      set.delete(s[left])
      left++
    }
    if (set.size > max) {
      max = set.size
    }
  }
  return max
};