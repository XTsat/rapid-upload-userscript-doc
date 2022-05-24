import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: '文档',
    link: '/document/简介/脚本说明.md',
  },
  {
    text: '更新日志',
    children: [
      {
        text: '更新日志',
        link: '/document/changelog/更新日志.md',
      },
      {
        text: '待更新功能',
        link: '/document/changelog/待更新功能.md'
      },
      {
        text: '通知',
        link: '/document/changelog/通知.md'
      },
    ]
  },
  {
    text: '作者',
    children: [
      {
        text: '脚本页面',
        link: 'https://greasyfork.org/zh-CN/scripts/424574-%E7%A7%92%E4%BC%A0%E9%93%BE%E6%8E%A5%E6%8F%90%E5%8F%96',
      },
      {
        text: '官方教程',
        link: 'https://mengzonefire.code.misakanet.cn/rapid-upload-userscript-doc/',
      },
      {
        text: '秒传脚本',
        link: 'https://github.com/mengzonefire/rapid-upload-userscript'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/mengzonefire'
      },
      {
        text: '爱发电',
        link: 'https://afdian.net/@mengzonefire'
      },
    ]
  },
  {
    text: '关于我',
    children: [
      {
        text: '指南',
        children: [
          {
            text: '瓦特工具箱',
            link: 'https://xtsat.github.io/SteamTools-Guide/'
          },
          {
            text: '浏览器',
            link: 'https://xtsat.github.io/Browser-Guide/'
          },
          {
            text: 'Windows',
            link: 'https://xtsat.github.io/Windows-Guide/'
          },
          {
            text: '秒传链接提取脚本',
            link: 'https://xtsat.github.io/rapid-upload-userscript-doc/'
          },
        ]
      },
      {
        text: '其他平台',
        children: [
          {
            text: 'BiliBili 📺',
            link: 'https://space.bilibili.com/53283118'
          },
          {
            text: 'Steam 🎮',
            link: 'https://steamcommunity.com/id/XTxiaotong'
          },
          {
            text: 'Playlist 🎵',
            link: 'https://music.163.com/#/user/home?id=283588276'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/XTsat'
          },
        ]
      },
    ]
  },
]