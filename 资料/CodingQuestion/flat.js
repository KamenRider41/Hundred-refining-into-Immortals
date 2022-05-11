/*
 * @Author: 41
 * @Date: 2022-03-31 14:24:11
 * @LastEditors: 41
 * @LastEditTime: 2022-04-22 14:56:44
 * @Description: 
 */
/***********************测试区域 */
let obj = {
  name: {
    value: 41,
    a: 1,
    b: 2
  },
  age: {
    value: 20
  },
  other: {
    hobby: {
      music1: 'guita',
      music2: 'sing'
    }
  }
}
let res = myFlat(obj)
console.log(res);
/***********************题解区域 */
function myFlat (obj) {
  let newobj = {}
  function dfs (obj, path) {
    if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') {
      newobj[path] = obj
    } else {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (path) dfs(obj[key], path + '-' + key)
          else dfs(obj[key], key)
        }
      }
    }
  }
  dfs(obj, '')
  return newobj
}


