/*
 * @Author: 41
 * @Date: 2022-03-17 17:37:45
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:37:46
 * @Description: 
 */
var addTwoNumbers = function (l1, l2) {
  let jinwei = 0
  let res = new ListNode(0)
  let temp = res
  while (l1 || l2) {
    let a = l1 ? l1.val : 0
    let b = l2 ? l2.val : 0
    let sum = a + b + jinwei
    jinwei = (sum / 10) >> 0
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (jinwei) temp.next = new ListNode(jinwei)
  return res.next
};