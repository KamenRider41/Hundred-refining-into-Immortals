/*
 * @Author: 41
 * @Date: 2022-06-05 16:38:13
 * @LastEditors: 41
 * @LastEditTime: 2023-04-02 19:53:52
 * @Description: 
 */
const beforeWork = [
  {
    text: '科研成果记录', link: '/partDocs/worklog/before/research/research'
  },
  {
    text: 'css权威指南读书笔记', link: '/partDocs/worklog/before/css'
  },
]
const threeFore = [
  { text: 'HTML', link: '/partDocs/html/html' },
  { text: 'CSS', link: '/partDocs/css/css' },
  { text: 'Javascript', link: '/partDocs/javascript/javascript' },
]
const twoFrame = [
  { text: 'Vue', link: '/partDocs/vue/vue' },
  { text: 'React', link: '/partDocs/react/react' },
]
const practiceStudy = [
  { text: 'Charles学习', link: '/partDocs/internship/study/charles' },
  { text: 'Git学习', link: '/partDocs/internship/study/git/peizhi' },
  { text: 'TypeScript学习', link: '/partDocs/internship/study/typescript/type' },
  { text: 'React学习', link: '/partDocs/internship/study/react/react' },
  { text: 'Flutter学习', link: '/partDocs/internship/study/flutter/flutter' },
  { text: 'ProseMirror学习', link: '/partDocs/internship/study/prosemirror/prosemirror' },
]
const praticeWrite = [
  { text: 'Bootcamp学习笔记', link: '/partDocs/internship/write/bootcamp' },
  { text: 'vscode好用插件', link: '/partDocs/internship/write/vscode' },
  { text: '实习提问', link: '/partDocs/internship/write/question' },
  { text: 'Bug回忆录', link: '/partDocs/internship/write/bug/bug' },
]
module.exports = [
  {
    text: 'Home', link: '/'
  },
  {
    text: 'LeetCode', link: '/partDocs/leetcode'
  }, {
    text: '前端知识点',
    items: [
      { text: '前端三项之力', items: threeFore },
      { text: '前端两大框架', items: twoFrame },
    ]
  }, {
    text: '实习笔记',
    items: [
      { text: '写在前面', link: '/partDocs/internship/internship' },
      { text: '乱七八糟的学习', items: practiceStudy },
      { text: '乱七八糟的笔记', items: praticeWrite },
    ]
  },
  {
    text: '工作日志',
    items: [
      { text: '写在前面', link: '/partDocs/worklog/worklog' },
      { text: '正式工作前', items: beforeWork },
    ]
  },
  {
    text: '关于我',
    items: [
      { text: '关于我', link: '/partDocs/aboutme' },
      { text: 'Github', link: 'https://github.com/KamenRider41' },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_42136832' },
      { text: '掘金', link: 'https://juejin.cn/user/1108753576635751/posts' },
      { text: 'B站', link: 'https://space.bilibili.com/27424293' }
    ]
  }
]