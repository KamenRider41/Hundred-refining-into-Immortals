/*
 * @Author: 41
 * @Date: 2022-03-17 17:04:08
 * @LastEditors: 41
 * @LastEditTime: 2022-03-17 17:05:56
 * @Description: 
 */
let lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
function deal (lists) {
  let list = []
  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < lists[i].length; j++) {
      list.push(lists[i][j])
    }
  }
  list.sort((a, b) => {
    return a - b
  })
  console.log(list);
}
deal(lists)