/*
 * @Author: 41
 * @Date: 2022-04-24 17:19:11
 * @LastEditors: 41
 * @LastEditTime: 2022-04-26 17:43:16
 * @Description: 
 */
let fib = function () {
  let memo = [0, 1]
  let dfs = function (n) {
    if (memo[n] == undefined) {
      memo[n] = dfs(n - 2) + dfs(n - 1)
    }
    return memo[n]
  }
  return dfs
}()

let res = fib(10)
console.log(res);