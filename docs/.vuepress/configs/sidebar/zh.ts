import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
      ]
    },
  ],
  
  '/document/': [
    {
      text: '秒传脚本安装',
      collapsible: false,
      children: [
        '/document/脚本安装/关于脚本安装.md',
        '/document/脚本安装/电脑版安装脚本.md',
        '/document/脚本安装/手机版安装脚本.md',
      ]
    },
    {
      text: '秒传链接生成',
      collapsible: false,
      children: [
        '/document/秒传链接生成/秒传生成相关.md',
        '/document/秒传链接生成/常见问题及解决方法.md',
        '/document/秒传链接生成/文件和谐.md',
        '/document/秒传链接生成/PCS-Go 客户端.md',
        '/document/秒传链接生成/其他格式支持.md',
      ]
    },
    {
      text: '如何预防和谐',
      collapsible: false,
      children: [
        '/document/预防和谐/度盘防和谐相关.md'
      ]
    },
  ],

};