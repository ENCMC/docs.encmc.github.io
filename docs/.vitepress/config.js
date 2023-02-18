import { defineConfig } from 'vitepress'

export default{
    title: '夕夜Craft',
    lastUpdated: true,
     ignoreDeadLinks: true,
  themeConfig: {
    logo: 'https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/xiye/docs/imag/docs/token.png',
    lastUpdatedText: '上次修改时间',
    editLink: {
      pattern: 'https://github.com/ENCMC/docs.encmc.github.io',
      text: '在Github上编辑'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '新手教程', link: '/course/base.md' },
      { text: '权限组', link: '/group/default.md' },
      { text: '加入游戏', link: '/join-game/info.md' },
      { text: '更新日志', link: '/update-logs/server.md' },
      { text: '玩家须知', link: '/rules/agreement.md'},
      { text: '支持', link: '/support/index.md'}
    ],
    sidebar: {
      '/course/': [
        {
          text: '新手教程',
          items: [
            // This shows `/guide/index.md` page.
            { text: '小技巧', link: '/course/base.md' }, 
            { text: '酿酒', link: '/course/brewery.md' },
            { text: 'mcMMO', link: '/course/mcmmo.md' },
            { text: '圈地用法', link: '/course/residence.md' },
            { text: '关于顶贴', link: '/course/mcbbs.md' }
          ]
        }
      ],
      '/group/': [
        {
          text: '权限组',
          items: [
            // This shows `/guide/index.md` page.
            { text: '冒险家', link: '/group/default.md' }, // /guide/index.md
            { text: '伐木工', link: '/group/lv1.md' },
            { text: '采石匠', link: '/group/lv2.md' }, // /guide/index.md
            { text: '蓑笠翁', link: '/group/lv3.md' },
            { text: '药水师', link: '/group/lv4.md' },
            { text: '艺术家', link: '/group/lv5.md' },
          ]
        }
      ],
      '/join-game/': [
        {
          text: '加入游戏',
          items: [
            // This shows `/guide/index.md` page.
            { text: '信息', link: '/join-game/info.md' }, // /guide/index.md
            { text: '客户端', link: '/join-game/client.md' },
            { text: '进服帮助', link: '/join-game/help.md' }
          ]
        }
      ],
      '/update-logs/': [
        {
          text: '更新日志',
          items: [
            // This shows `/guide/index.md` page.
            { text: '服务器', link: '/update-logs/server.md' }, // /guide/index.md
            { text: '客户端', link: '/update-logs/client-C.md' }
          ]
        }
      ],
      '/rules/': [
        {
          text: '更新日志',
          items: [
            // This shows `/guide/index.md` page.
            { text: '玩家守则', link: '/rules/agreement.md' }
          ]
        }
      ]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    algolia: {
      appId: 'KK0D8LN65A',
      apiKey: '2698e86a3376f9cc712c97f38edb7fe0',
      indexName: 'ENCMC_Docs',
      searchParameters: {
        faeFilters: ['']
      }
    }
  }
}
