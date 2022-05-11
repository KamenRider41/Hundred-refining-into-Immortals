/*
 * @Author: 41
 * @Date: 2022-04-01 15:20:38
 * @LastEditors: 41
 * @LastEditTime: 2022-04-02 18:12:11
 * @Description: 
 */
let strarr = {
  'a-b-c-d': 1,
  'a-b-c-e': 2,
  'a-b-f': 3,
  'a-j': 4,
};
path(strarr)
function path (strarr) {
  let obj = {};
  Object.keys(strarr).forEach((item) => {
    let reg = item.split('-')
    let p = obj;
    for (let i = 0; i < reg.length - 1; i++) {
      let v = reg[i];
      p[v] ?? (p[v] = {});
      p = p[v];
    }
    p[reg.at(-1)] = strarr[item];
  });
}


// let obj = {
//   a: {
//     b: {
//       c: {
//         d: 1,
//         e: 2,
//       },
//       f: 3,
//     },
//     j: 4,
//   },
// };

