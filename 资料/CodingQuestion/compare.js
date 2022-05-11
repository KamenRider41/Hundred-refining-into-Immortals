/*
 * @Author: 41
 * @Date: 2022-03-04 17:36:23
 * @LastEditors: 41
 * @LastEditTime: 2022-03-20 18:41:27
 * @Description:
 */
//评测题目: 2-比较版本号
/*
实现一个方法，用于比较两个版本号（version1、version2）
如果version1 > version2，返回1；
如果version1 < version2，返回-1，其他情况返回0。
版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位

输入：compareVersion('0.1', '1.1.1')
输出：-1

输入：compareVersion('13.37', '1.2 ')
输出：1

输入：compareVersion('1.1', '1.1.0')
输出：0
*/
function compareVersion (version1, version2) {
  let ver1 = version1.split('.');
  let ver2 = version2.split('.');
  let max = ver1.length > ver2.length ? ver1.length : ver2.length
  while (ver1.length < max) {
    ver1.push('0')
  }
  while (ver2.length < max) {
    ver2.push('0')
  }
  // console.log(ver1, ver2);
  for (let i = 0; i < ver1.length; i++) {
    if (ver1[i] > ver2[i]) {
      return 1
    } else if (ver1[i] == ver2[i]) {
      continue
    } else {
      return -1
    }
  }
  return 0
}
let a = [
  { v1: "0.1", v2: "1.1.1" },
  { v1: "13.37", v2: "1.2" },
]
// console.log(compareVersion('0.1', '1.1.1'));
// console.log(compareVersion('13.37', '1.2 '));
// console.log(compareVersion('1.1', '1.1.0'));

for (let i = 0; i < a.length; i++) {
  console.log(compareVersion(a[i].v1, a[i].v2));
}
// console.log('01' > '2');