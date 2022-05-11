/*
 * @Author: 41
 * @Date: 2022-03-17 17:23:50
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:23:50
 * @Description: 
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
};
var reverseList = function (head) {
  let p1 = head, p2 = null
  while (p1) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
};