
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
            ['before/css', 'css权威指南读书笔记'],
            {
              title: '科研成果记录',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ['before/research/research', '写在前面'],
                ['before/research/ml', '基于机器学习的三维星座解调'],
                ['before/research/chua', '基于双信号源的蔡氏电路'],
                // ['git/main/yidong', '移动提交记录'],
              ]
            },
            // ['before/research', '科研成果记录'],
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
        ['question', '实习提问'],
        ['bootcamp', 'Bootcamp学习笔记'],
        ['vscode', 'vscode好用插件'],
        ['charles', 'Charles学习'],
        {
          title: 'Git学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['git/peizhi', 'Git配置'],
            ['git/ziliao', 'Git资料'],
            {
              title: 'Git主要',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ['git/main/jichu', '基础篇'],
                ['git/main/gaoji', '高级篇'],
                ['git/main/yidong', '移动提交记录'],
                ['git/main/zaxiang', '杂项'],
                ['git/main/huati', '高级话题'],
              ]
            },
            {
              title: 'Git远程',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ['git/long/1', 'PUSH&Pull'],
                ['git/long/2', 'origin与它的周边'],
              ]
            },
          ]
        },
        {
          title: 'TypeScript学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['typescript/type', '写在前面'],
            ['typescript/rumen', '快速入门'],
            ['typescript/jinjie', '进阶之泛型和装饰器'],
          ]
        },
        {
          title: 'React学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['react/react', '写在前面'],
            ['react/rumen', '快速入门'],
            ['react/compose', '函数式编程学习笔记'],
          ]
        },
        {
          title: 'Flutter学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['flutter/flutter', '写在前面'],
            ['flutter/doctor', 'Flutter环境配置'],
            ['flutter/hello', '小荷才露尖尖角'],
            ['flutter/widget', 'widget是一切'],
          ]
        },
        {
          title: 'ProseMirror学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['prosemirror/prosemirror', '写在前面'],
            ['prosemirror/rumen', '编辑器从伤感到破局'],
          ]
        },
        {
          title: 'Bug回忆录',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['bug/bug', '写在前面'],
            ['bug/work', '研发'],
            ['bug/git', 'Git'],
            ['bug/flutter', 'Flutter'],
            ['bug/other', '其他'],
          ]
        },
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