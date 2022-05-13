/*
 * @Author: 41
 * @Date: 2022-05-11 11:21:23
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 16:13:28
 * @Description: 
 */

const sidebar = require('./sidebar')
const nav = require('./nav')
module.exports = {
  title: '前端基础百炼成仙',
  base: '/Hundred-refining-into-Immortals/',
  themeConfig: {
    logo: '/logo.jpg',
    nav,
    sidebar
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ]
}