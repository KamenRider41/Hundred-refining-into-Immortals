/*
 * @Author: 41
 * @Date: 2022-05-11 11:21:23
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 16:13:28
 * @Description: 
 */
module.exports = {
  title: '前端基础百炼成仙',
  base: '/Hundred-refining-into-Immortals/',

  themeConfig: {
    logo: '/logo.jpg',
    nav: [{
      text: 'Home', link: '/'
    }, {
      text: 'Github', link: 'https://github.com/KamenRider41/Hundred-refining-into-Immortals'
    }, {
      text: 'CSDN', link: 'https://blog.csdn.net/qq_42136832'
    }, {
      text: 'JueJin', link: 'https://juejin.cn/user/1108753576635751/posts'
    }, {
      text: 'Bilibili', link: 'https://space.bilibili.com/27424293'
    }],
    sidebar: [
      '/',
      '/partDocs/html',
      '/partDocs/css',
      '/partDocs/javascript',
      '/partDocs/computerNetwork',
      '/partDocs/networkSafe',
      '/partDocs/vue',
      '/partDocs/react',
    ]
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ]
}