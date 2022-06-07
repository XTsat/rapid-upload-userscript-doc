import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/document/': [
    {
      text: '简单介绍',
      collapsible: false,
      children: [
        '/document/简介/脚本说明.md',
        '/document/简介/相关教程.md',
        '/document/简介/秒传格式.md',
      ]
    },
    {
      text: '脚本安装&使用',
      collapsible: false,
      children: [
        '/document/开始使用/关于脚本安装.md',
        '/document/开始使用/电脑版安装脚本.md',
        '/document/开始使用/手机版安装脚本.md',
        '/document/开始使用/多平台网页端.md',
      ]
    },
    {
      text: '秒传链接生成',
      collapsible: false,
      children: [
        '/document/秒传链接生成/秒传生成相关.md',
        '/document/秒传链接生成/自动秒传.md',
        // '/document/秒传链接生成/PCS-Go 客户端.md',
      ]
    },
    {
      text: '如何预防和谐',
      collapsible: false,
      children: [
        '/document/预防和谐/文件和谐.md',
        '/document/预防和谐/已知和谐原因.md',
        '/document/预防和谐/度盘防和谐.md',
      ]
    },
    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/document/常见问题/常见问题.md',
        '/document/常见问题/错误代码.md',
      ]
    },
  ],

  '/document/changelog/': [
    '/document/changelog/更新日志.md',
    '/document/changelog/待更新功能.md',
    '/document/changelog/通知.md',
  ],
};