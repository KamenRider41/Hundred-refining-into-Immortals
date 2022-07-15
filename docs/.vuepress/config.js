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
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  themeConfig: {
    logo: '/logo.jpg',
    nav,
    sidebar,
    lastUpdated: 'lastUpdate',
    smoothScroll: true
  },
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/nprogress': {},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
  }


  // plugins: [
  //   '@vuepress/back-to-top',
  //   '@vuepress/nprogress',
  //   '@vuepress/pwa', {
  //     serviceWorker: true,
  //     updatePopup: true
  //   },
  //   '@vssue/vuepress-plugin-vssue', {
  //     platform: 'github', //v3的platform是github，v4的是github-v4
  //     // locale: 'zh', //语言
  //     // 其他的 Vssue 配置
  //     owner: 'KamenRider41', //github账户名
  //     repo: 'Hundred-refining-into-Immortals', //github一个项目的名称
  //     clientId: 'befbdd6ed3164088afdb',//注册的Client ID
  //     clientSecret: '38361035b5e7d1897f49a294bcf9ab12ffec3933',//注册的Client Secret
  //     autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
  //   },
  // ]
}
