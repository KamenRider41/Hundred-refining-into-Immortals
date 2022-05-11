/*
 * @Author: 41
 * @Date: 2022-03-13 14:19:02
 * @LastEditors: 41
 * @LastEditTime: 2022-03-24 16:03:09
 * @Description: 
 */
// let permute = function (nums) {
//   let len = nums.length, visited = new Array(len).fill(false), res = []
//   const dfs = (nums, len, depth, path, visited) => {
//     if (len === depth) {
//       res.push([...path])
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (!visited[i]) {
//         path.push(nums[i])
//         visited[i] = true
//         dfs(nums, len, depth + 1, path, visited)
//         visited[i] = false
//         path.pop(nums[i])
//       }
//     }
//   }
//   dfs(nums, len, 0, [], visited)
//   return res
// }
let permute = function (nums) {
  let len = nums.length, visited = new Array(len).fill(false), res = []
  const dfs = (nums, len, depth, path, visited) => {
    if (len == depth) {
      res.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        path.push(nums[i])
        visited[i] = true
        dfs(nums, len, depth + 1, path, visited)
        visited[i] = false
        path.pop()
      }
    }
  }
  dfs(nums, len, 0, [], visited)
  return res
}
let nums = [1, 2, 3]
console.log(permute(nums));


