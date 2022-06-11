import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/document/': [
    {
      text: '简单介绍',
      collapsible: false,
      children: [
        '/document/Info/脚本说明.md',
        '/document/Info/秒传格式.md',
      ]
    },
    {
      text: '脚本安装&使用',
      collapsible: false,
      children: [
        '/document/Install/About.md',
        '/document/Install/Windows.md',
        '/document/Install/Android.md',
        '/document/Install/Web.md',
      ]
    },
    {
      text: '秒传链接生成',
      collapsible: false,
      children: [
        '/document/秒传链接生成/秒传生成相关.md',
        '/document/秒传链接生成/一键秒传.md',
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
        '/document/FAQ/常见问题.md',
        '/document/FAQ/错误代码.md',
      ]
    },
  ],

  '/development/': [
    {
      text: '开发日志',
      collapsible: false,
      children: [
        '/development/脚本更新日志.md',
        '/development/历史版本.md',
        '/development/开发计划.md',
        // '/development/通知.md',
        '/development/网页端更新日志.md',
      ]
    },
    {
      text: '参与开发',
      collapsible: false,
      children: [
        '/development/文档.md',
      ]
    },

  ],
};