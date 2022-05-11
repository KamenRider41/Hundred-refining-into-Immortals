/*
 * @Author: 41
 * @Date: 2022-03-17 17:24:47
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:31:18
 * @Description: 
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (map.has(another)) {
      return [i, map.get(another)]
    } else {
      map.set(nums[i], i)
    }

  }
};