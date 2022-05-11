/*
 * @Author: 41
 * @Date: 2022-03-13 15:19:19
 * @LastEditors: 41
 * @LastEditTime: 2022-03-13 15:32:31
 * @Description: 
 */
function count (article) {
  article = article.trim().toUpperCase()
  let array = article.match(/[A-z]+/g)
  article = " " + array.join(' ') + " "
  let max = 0, maxword
  for (let i = 0; i < array.length; i++) {
    let word = new RegExp(" " + array[i] + " ", 'g')
    let num = article.match(word).length
    if (num > max) {
      max = num
      maxword = array[i]
    }
  }
  console.log(maxword + ' ' + max);
}










// function count (article) {
//   article = article.trim().toUpperCase()
//   let array = article.match(/[A-z]+/g)
//   article = " " + array.join(' ') + " "
//   let max = 0, word, num = 0, maxword = ""
//   for (let i = 0; i < array.length; i++) {
//     word = new RegExp(" " + array[i] + " ", 'g')
//     num = article.match(word).length
//     if (num > max) {
//       max = num
//       maxword = array[i]
//     }
//   }
//   console.log(maxword + " " + max);
// }
count('Age has reached the end of the beginning of a word')
