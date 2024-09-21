import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "七月Fivem",
  lastUpdated: true,
  lang: 'zh-CN',
  description: "幻星团队。",
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon',  href: '/icon.ico' }
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?04cc4dc303a2e7a28804c3a5ec987fe3";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`
    ],
    [
      'meta',
      { name: 'keywords', content: 'fivem开服,fivem,fivem插件,fivem去墙,fivem后门,fivem横幅,fivemAI助手,fivem汉化' }
    ]
  ],
  themeConfig: {
    siteTitle: 'FIVEM文档',
    // logo: './icon.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '七月记不住代码区', link: '/qiyue/index.md' }
    ],

    sidebar: {
      '/qiyue/': [
        {
          text: '七月文档列表',
          items: [
            { text: '私人文档', link: '/qiyue/wendang.md' },
            { text: '车辆不保存', link: '/qiyue/vehicle.md' },
            { text: 'Qy_Core', link: '/qiyue/qy_core.md' },
          ]
        }
      ],
      '/mango/': [
        {
          text: '指南',
          items: [
            { text: '什么是Mango工具包？', link: '/mango/index' },
            { text: '开始使用', link: '/mango/getting-started' }
          ]
        },
        {
          text: '功能介绍',
          items: [
            { text: '代码去墙', link: '/mango/wall' },
            { text: '查后门', link: '/mango/door' },
            { text: 'banner横幅制作', link: '/mango/banner' },
            { text: '莽狗AI助手', link: '/mango/ai' },
            { text: '插件汉化', link: '/mango/locale' }
          ]
        },
        {
          text: '更新日志',
          items: [
            { text: 'ChangeLog', link: '/mango/changelog' },
            // { text: '查后门', link: '/door' },
            // { text: 'banner横幅制作', link: '/banner' },
            // { text: '莽狗AI助手', link: '/ai' },
            // { text: '插件汉化', link: '/locale' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: {
        svg: '<svg role="img" viewBox="0 0 342 390.5" ><g transform="matrix(1,0,0,-1,-124.2,606.4)"><path d="m 125.8,215.9 85.1,0 c 1.9,0 7.4,18.3 16.7,54.9 32.3,112.4 50.9,178.1 55.7,197.2 l -54.9,54.1 -1.6,0 C 219.4,499 185.2,397.2 124.2,216.7 l 1.6,-0.8 z m 163.8,275.2 0.8,0 c 1.1,4.5 1.6,7.2 1.6,8 l 0,1.6 c -15.9,16.7 -33.7,34.5 -53.3,53.3 -2.1,-3.2 -3.2,-5.8 -3.2,-8 l 0,-0.8 c 19.9,-20.5 37.9,-38.5 54.1,-54.1 z M 393,429 l 0.8,0 c -10.9,34.5 -17.5,52.2 -19.9,53.3 L 254.6,600.8 c -1.3,0 -4.2,-8.5 -8.7,-25.4 L 393,429 Z m -22.3,65.3 0.8,0 c -24.4,74 -37.4,111.3 -39,112.1 l -73.2,0 0,-0.8 C 286.4,578 323.5,540.9 370.7,494.3 Z m 43.8,-128.1 0.8,0 c -2.7,13 -9,23.1 -19.1,30.2 -31,31.8 -62,62.8 -93,93 l -0.8,0 c 1.9,-10.9 6.1,-19.1 12.7,-24.7 l 99.4,-98.5 z m 50.1,-150.3 1.6,0.8 c -22.8,67.9 -35,102.9 -36.6,105 l -109.8,108.9 0,-0.8 c 4.2,-16.7 24.7,-88 61.2,-213.9 l 83.6,0 z"></path></g></svg>'
      }, link: 'https://fivem.net/' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present PhantomStarTeam'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
