/*
 * @Author: 41
 * @Date: 2022-04-24 17:09:02
 * @LastEditors: 41
 * @LastEditTime: 2022-04-24 17:17:50
 * @Description: 
 */
function get (object, path, defaultVal = 'undefined') {
  let newPath = []
  if (Array.isArray(path)) {
    newPath = path
  } else {
    // console.log(path);
    newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
    // console.log(newPath);
  }
  return newPath.reduce((o, k) => {
    // console.log(o, k);
    return (o || {})[k]
  }, object) || defaultVal
}
var object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(get(object, 'a[0].b.c'));

