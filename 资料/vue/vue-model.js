/*
 * @Author: 41
 * @Date: 2022-03-04 10:35:00
 * @LastEditors: 41
 * @LastEditTime: 2022-03-14 22:55:36
 * @Description:
 */
// var obj = {}
// Object.defineProperty(obj, 'hello', {
//   get: function () {
//     console.log('get方法被调用了');
//   },
//   set: function (val) {
//     console.log('set方法被调用了，参数是' + val);
//   }
// })
// obj.hello
// obj.hello = 'abc'


// let obj = {
//   name: { name: 'hhh' },
//   arr: ['吃', '喝', '玩']
// }
// let handle = {
//   get (target, key) {
//     console.log('收集依赖');
//     return target[key]
//   },
//   set (target, key, value) {
//     console.log('触发更新');
//     target[key] = '123' + value
//   }
// }

// let proxy = new Proxy(obj, handle)
// console.log(proxy.arr);
// console.log(proxy.name);
// proxy.name = '123'
// console.log(proxy.name);

let obj = {
  name: { name: '456' },
  arr: ['1', '2', '3']
}
let handle = {
  get (target, key) {
    console.log('get');
    return target[key]
  },
  set (target, key, value) {
    console.log('updata');
    target[key] = 'updata:' + value

  }
}
let proxy = new Proxy(obj, handle)
console.log(proxy.arr);
proxy.name = '123'
console.log(proxy.name);