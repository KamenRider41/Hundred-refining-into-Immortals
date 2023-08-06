
const practiceStudy =
{
  title: '乱七八糟的学习',
  collapsable: true,
  sidebarDepth: 1,
  children: [
    ['study/charles', 'Charles学习'],
    {
      title: 'Git学习',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['study/git/peizhi', 'Git配置'],
        ['study/git/ziliao', 'Git资料'],
        {
          title: 'Git主要',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['study/git/main/jichu', '基础篇'],
            ['study/git/main/gaoji', '高级篇'],
            ['study/git/main/yidong', '移动提交记录'],
            ['study/git/main/zaxiang', '杂项'],
            ['study/git/main/huati', '高级话题'],
          ]
        },
        {
          title: 'Git远程',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['study/git/long/1', 'PUSH&Pull'],
            ['study/git/long/2', 'origin与它的周边'],
          ]
        },
      ]
    },
    {
      title: 'TypeScript学习',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['study/typescript/type', '写在前面'],
        ['study/typescript/rumen', '快速入门'],
        ['study/typescript/jinjie', '进阶之泛型和装饰器'],
      ]
    },
    {
      title: 'React学习',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['study/react/react', '写在前面'],
        ['study/react/rumen', '快速入门'],
        ['study/react/compose', '函数式编程学习笔记'],
      ]
    },
    {
      title: 'Flutter学习',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['study/flutter/flutter', '写在前面'],
        ['study/flutter/doctor', 'Flutter环境配置'],
        ['study/flutter/hello', '小荷才露尖尖角'],
        ['study/flutter/widget', 'widget是一切'],
      ]
    },
    {
      title: 'ProseMirror学习',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['study/prosemirror/prosemirror', '写在前面'],
        ['study/prosemirror/rumen', '编辑器从伤感到破局'],
      ]
    },
  ]
}

const practiceWrite =
{
  title: '乱七八糟的笔记',
  collapsable: true,
  sidebarDepth: 1,
  children: [
    ['write/bootcamp', 'Bootcamp学习笔记'],
    ['write/vscode', 'vscode好用插件'],
    ['write/question', '实习提问'],
    {
      title: 'Bug回忆录',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['write/bug/bug', '写在前面'],
        ['write/bug/work', '研发'],
        ['write/bug/git', 'Git'],
        ['write/bug/flutter', 'Flutter'],
        ['write/bug/other', '其他'],
      ]
    },
  ]
}

module.exports = {
  '/partDocs/worklog/': [
    {
      title: '工作日志',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['worklog', '写在前面'],
        {
          title: '正式工作前',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['before/before', '写在前面'],
            {
              title: '科研成果记录',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ['before/research/research', '写在前面'],
                ['before/research/chua', '基于双信号源的蔡氏电路'],
                ['before/research/3dqam', '新型三维星座图和OFDM-ROF系统设计'],
                ['before/research/ml', '基于机器学习的三维星座解调'],
              ]
            },
            ['before/css', 'css权威指南读书笔记'],
          ]
        },
      ]
    }
  ],
  '/partDocs/internship/': [
    {
      title: '实习笔记',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['internship', '写在前面'],
        practiceStudy,
        practiceWrite
      ]
    }
  ],
  '/partDocs/html/': [
    {
      title: 'HTML',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['html', '写在前面'],
        ['sanlan', '三栏布局'],
        ['mianshi1', 'HTML面试题1'],
        ['mianshi2', 'HTML面试题2'],
        ['mianshi3', 'HTML面试题3'],
        ['mianshi4', 'HTML面试题4'],
      ]
    }
  ],
  '/partDocs/css/': [
    {
      title: 'CSS',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['css', '写在前面'],
        ['mianshi1', 'CSS面试题1'],
        ['mianshi2', 'CSS面试题2'],
      ]
    }
  ],
  '/partDocs/javascript/': [
    {
      title: 'Javascript',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['javascript', '写在前面'],
        ['shousi', '手撕javascript'],
        ['es6', 'ES6'],
        ['es7', 'ES7'],
        ['es8', 'ES8'],
        ['es9', 'ES9'],
        ['es10', 'ES10'],
        ['es11', 'ES11'],
        ['mianshi1', 'Javascript面试题1'],
        ['mianshi2', 'Javascript面试题2'],
      ]
    }
  ],
  '/partDocs/vue/': [
    {
      title: 'Vue',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['vue', '写在前面'],
        ['mianshi1', 'Vue面试题1'],
        ['mianshi2', 'Vue面试题2'],
        ['mianshi3', 'Vue面试题3'],
        ['mianshi4', 'Vue面试题4'],
      ]
    }
  ],
  '/partDocs/react/': [
    {
      title: 'React',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        ['react', '写在前面'],
        ['rumen', '快速入门'],
        ['compose', '函数式编程学习笔记'],
      ]
    }
  ],
}