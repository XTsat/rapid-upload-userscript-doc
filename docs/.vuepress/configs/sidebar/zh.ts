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
  
  '/document/': [
    {
      text: '秒传脚本安装',
      collapsible: false,
      children: [
        '/document/Install/关于脚本安装.md',
        '/document/Install/电脑版安装脚本.md',
        '/document/Install/手机版安装脚本.md',
      ]
    },
    {
      text: '秒传链接生成',
      collapsible: false,
      children: [
        '/document/link generation/秒传生成相关.md',
        '/document/link generation/常见问题及解决方法.md',
        '/document/link generation/文件和谐.md',
        '/document/link generation/PCS-Go 客户端.md',
      ]
    },
  ],

};