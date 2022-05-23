import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
      ]
    },
    {
      text: '常见问题',
      collapsible: true,
      children: [
        '/document/FAQ/FAQ.md',
      ]
    },
  ],
  
  '/document/Install/': [
    {
      text: '秒传脚本安装教程',
      collapsible: false,
      children: [
        '/document/Install/关于脚本安装.md',
        '/document/Install/电脑版安装脚本.md',
        '/document/Install/手机版安装脚本.md',
      ]
    },
    {
      text: '常见问题',
      collapsible: true,
      children: [
        '/document/FAQ/FAQ.md',
      ]
    },
  ],

};