/*
 * @Author: 41
 * @Date: 2022-03-04 17:31:45
 * @LastEditors: 41
 * @LastEditTime: 2022-03-04 17:36:03
 * @Description:
 */
//评测题目: 1-随机字符串生成
/*
实现一个随机符串生成函数 randomStr()，要求如下：
1. 生成的随机的字符串应该以字母开头，并包含 [a-z][0-9] 这些字符。
2. 生成的字符串长度为 8。
3. 生成的字符串不能够在程序运行的生命周期中存在重复的情形。

可以用函数外部的变量
*/
function randomStr () {
  let newstr;
  let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let firstNum = Math.floor((Math.random() * 100) % 26);
  let firstChar = str[firstNum];
  newstr = firstChar
  for (let i = 0; i < 7; i++) {
    let tempnum = Math.floor((Math.random() * 100) % 36);
    newstr += str[tempnum];
  }
  console.log(newstr);
}

randomStr(); randomStr();