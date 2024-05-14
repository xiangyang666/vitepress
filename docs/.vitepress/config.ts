import { defineConfig } from 'vitepress'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础路径
  base: '/vitepress/',
  //开启上次更新时间
  lastUpdated: true, 
  // 网页头部信息
  head: [
    ['link', { rel: 'icon', href: '/vitepress/favicon.ico' }]
  ],
  // 语言
  lang: 'en-US',
  // 所有文档的浏览器标签title
  title: '诗仙',
  // 会渲染成<meta>标签，SEO用
  description: '这是一个个人博客网站',

  // 主题配置
  themeConfig: {
    // 网站logo
    logo: '/favicon.ico',
    // 导航栏
    nav: navbar,
    // 侧边栏
    sidebar: sidebar,
    outline: {
      level: 2,
      label: '本页目录'
    },
    // 页脚
    footer: {
      copyright: "Copyright © 2021~2023 诗仙",
    },
    // 如果写入，则会使该icon元素抵押下去
    // socialLinks: [
    //   { icon: "github", link: "https://gitee.com/xiangyang666" },
    //   { icon: "youtube", link: "https://www.douyin.com/user/MS4wLjABAAAAI79tehrRb9-JYi8387gwzgoPluUPp6qpl9aRrj9LFnRfWY--3IAMPgP38QamVGd2?vid=7203727686831738170" },
    // ],
    // 搜索
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
                }
              }
            }
          }
        }
      }
    }
  },
  
})

