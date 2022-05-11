/*
 * @Author: 41
 * @Date: 2022-03-18 11:28:35
 * @LastEditors: 41
 * @LastEditTime: 2022-05-06 17:56:32
 * @Description: 
 */
Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = []
    let index = 0
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then(res => {
          ans[i] = res
          index++
          if (index === promiseArr.length) {
            this.resolve(ans)
          }
        })
        .catch(err => reject(err))
    }
  })
}