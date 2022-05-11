/*
 * @Author: 41
 * @Date: 2022-03-18 11:20:31
 * @LastEditors: 41
 * @LastEditTime: 2022-03-18 11:27:15
 * @Description: 
 */
const oneToThree = () => {
  const arr = [1, 2, 3];
  arr.reduce((prev, next) => {
    return prev.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(next);
          resolve();
        }, 1000);
      })
    });
  }, Promise.resolve())
};

// oneToThree();

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i + 1);
  }, (i + 1) * 1000)
}
