/*
 * @Author: 41
 * @Date: 2022-03-24 10:12:01
 * @LastEditors: 41
 * @LastEditTime: 2022-03-24 11:08:40
 * @Description: 
 */
function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function deepClone (obj, map = new WeakMap()) {
  if (obj === null) return obj
  if (getType(obj) === 'RegExp') return new RegExp(obj)
  if (getType(obj) === 'Date') return new Date(obj)
  if (getType(obj) !== 'Object' && getType(obj) !== 'Array') return obj
  let cloneobj = getType(obj) === 'Array' ? [] : {}
  if (map.has(obj)) return map.get(obj)
  map.set(obj, cloneobj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneobj[key] = deepClone(obj[key], map)
    }
  }
  return cloneobj
}
let obj = {
  name: 41,
  arr: [1, { test: 123 }, 3, 4, 5],
  haha: {
    name: 123
  }
}
let newobj = deepClone(obj)
obj.name = 42
obj.arr[0] = 5
obj.arr[1].test = 5
obj.haha.name = 5
console.log(obj, newobj);
