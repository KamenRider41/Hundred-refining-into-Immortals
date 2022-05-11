/*
 * @Author: 41
 * @Date: 2022-03-17 17:08:18
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:19:36
 * @Description: 
 */

const isPalindrome = (head) => {
  const vals = [];
  while (head) {        // 丢进数组里
    vals.push(head.val);
    head = head.next;
  }
  let start = 0, end = vals.length - 1; // 双指针
  while (start < end) {
    if (vals[start] != vals[end]) {     // 理应相同，如果不同，不是回文
      return false;
    }
    start++;
    end--;      // 双指针移动
  }
  return true;  // 循环结束也没有返回false，说明是回文
};