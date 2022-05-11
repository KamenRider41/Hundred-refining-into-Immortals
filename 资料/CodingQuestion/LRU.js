/*
 * @Author: 41
 * @Date: 2022-03-10 21:24:48
 * @LastEditors: 41
 * @LastEditTime: 2022-03-10 21:24:49
 * @Description: 
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  const cache = new Map()
  const max = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  let map = this.cache
  if (map.has(key)) {
    let value = map.get(key)
    map.delete(key)
    map.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  const map = this.cache
  if (map.has(key)) {
    map.delete(key)
  }
  map.set(key, value)
  if (map.size > this.max) {
    map.delete(map.keys().next().value)
  }
};
