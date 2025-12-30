import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue @mdit-vue/shared @types/node canvas-confetti less medium-zoom sass vitepress-plugin-comment-with-giscus xgplayer

import { devDependencies } from '../../package.json'

import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

export default defineConfig({
  lang: 'zh-CN',
  title: "Fivem文档",
  description: "我的vitpress文档教程",

  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance: 'dark',

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      },


        md.use(groupIconMdPlugin) //代码组图标

    }

  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ts: localIconLoader(import.meta.url, '../public/svg/typescript.svg'), //本地ts图标导入
          md: localIconLoader(import.meta.url, '../public/svg/md.svg'), //markdown图标
          css: localIconLoader(import.meta.url, '../public/svg/css.svg'), //css图标
          js: 'logos:javascript', //js图标
        },
      })
    ],
  },

  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释

  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //编辑本页
    editLink: {
      pattern: 'https://github.com/Yiov/vitepress-doc/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    //上次更新时间
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '私人笔记', link: '/qiyue/index' },
      { text: '付费脚本', link: '/ffcj/index' },
      { text: '资源整合', link: '/resources/index' },
    ],

    //1
    //侧边栏
    sidebar: {
      '/Es_extended/': [
        {
          text: 'Esx框架文档',
          items: [
            {
              text: 'Client(客户端手册)',
              collapsed: true,
              items: [
                {
                  text: 'PlayerData[玩家数据]',
                  collapsed: true,
                  items: [
                    { "text": "Accountts(账户)", "link": "/Es_extended/Client/PlayerData_Accountts.md" },
                    { "text": "Coords(坐标)", "link": "/Es_extended/Client/PlayerData_Coords.md" },
                    { "text": "Date Of Birth(出生日期)", "link": "/Es_extended/Client/PlayerData_DateOfBirth.md" },
                    { "text": "First Name(名字)", "link": "/Es_extended/Client/PlayerData_FirstName.md" },
                    { "text": "Grade(等级)", "link": "/Es_extended/Client/PlayerData_Grade.md" },
                    { "text": "Grade Name(等级名称)", "link": "/Es_extended/Client/PlayerData_GradeName.md" },
                    { "text": "Height(身高)", "link": "/Es_extended/Client/PlayerData_Height.md" },
                    { "text": "Identifier(唯一标识符)", "link": "/Es_extended/Client/PlayerData_Identifier.md" },
                    { "text": "Inventory(库存)", "link": "/Es_extended/Client/PlayerData_Inventory.md" },
                    { "text": "Job(工作)", "link": "/Es_extended/Client/PlayerData_Job.md" },
                    { "text": "Job Label(工作标签)", "link": "/Es_extended/Client/PlayerData_JobLabel.md" },
                    { "text": "Job Name(工作名称)", "link": "/Es_extended/Client/PlayerData_JobName.md" },
                    { "text": "Last Name(姓氏)", "link": "/Es_extended/Client/PlayerData_LastName.md" },
                    { "text": "Loadout(装备)", "link": "/Es_extended/Client/PlayerData_Loadout.md" },
                    { "text": "Money(金钱)", "link": "/Es_extended/Client/PlayerData_Money.md" },
                    { "text": "Name(姓名)", "link": "/Es_extended/Client/PlayerData_Name.md" },
                    { "text": "Sex(性别)", "link": "/Es_extended/Client/PlayerData_Sex.md" }
                  ]
                },
                {
                  text: 'Events[玩家事件]',
                  collapsed: true,
                  items: [
                    { "text": "Esx:addInventoryItem(添加物品提醒)", "link": "/Es_extended/Client/Esx_addInventoryItem.md" }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/qiyue/': [
        {
          text: '七月文档列表',
          items: [
            { text: '私人文档', link: '/qiyue/wendang.md' },
            { text: '车辆不保存', link: '/qiyue/vehicle.md' },
          ]
        }
      ]
    },

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',


    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',


    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },



})
