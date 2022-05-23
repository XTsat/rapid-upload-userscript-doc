import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: '浏览器指南',
    link: '/document/',
  },
  {
    text: '扩展程序',
    children: [
      {
        text: '介绍',
        children: [
          {
            text: '什么是浏览器扩展',
            link: '/Extensions/Guide/What is.md'
          },
          {
            text: '如何安装浏览器扩展',
            link: '/Extensions/Guide/How to install extensions.md'
          },
          {
            text: '恶意浏览器扩展',
            link: '/Extensions/Guide/Malicious browser extensions.md'
          },
        ]
      },
      {
        text: '推荐',
        children: [
          {
            text: 'Dark Reader',
            link: '/Extensions/recommend/Dark Reader.md'
          },
          {
            text: 'Augmented Steam',
            link: '/Extensions/recommend/Game/Augmented Steam.md'
          },
          {
            text: 'SteamDB',
            link: '/Extensions/recommend/Game/SteamDB.md'
          },
        ]
      },
      {
        text: '脚本管理器',
        children: [
          {
            text: '什么是脚本管理器',
            link: '/Extensions/recommend/Script Manager/What is.md'
          },
          {
            text: '安装脚本管理器',
            link: '/Extensions/recommend/Script Manager/Install Manager.md'
          },
          {
            text: '小心恶意脚本',
            link: '/Extensions/recommend/Script Manager/Beware of malicious scripts.md'
          },
          {
            text: '如何安装脚本',
            link: '/Extensions/recommend/Script Manager/Install Script.md'
          },
        ]
      },
      {
        text: '广告屏蔽扩展',
        children: [
          {
            text: '有什么用？',
            link: '/Extensions/recommend/Ad block/What is.md'
          },
          {
            text: '安装什么好?',
            link: '/Extensions/recommend/Ad block/What is best.md'
          },
          {
            text: 'uBlock Origin',
            link: '/Extensions/recommend/Ad block/uBlock Origin.md'
          },
          {
            text: 'AdGuard',
            link: '/Extensions/recommend/Ad block/AdGuard.md'
          },
        ]
      },
    ],
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