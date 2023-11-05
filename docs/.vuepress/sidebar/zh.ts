import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: '简单介绍',
      collapsible: false,
      children: [
        '/document/Info/脚本说明.html',
        '/document/Info/秒传格式.html',
      ]
    },
    {
      text: '脚本安装&使用',
      collapsible: false,
      children: [
        '/document/Install/About.html',
        '/document/Install/Windows.html',
        '/document/Install/Android.html',
        '/document/Install/MacOS.html',
        '/document/Install/Web.html',
      ]
    },
    {
      text: '秒传链接生成',
      collapsible: false,
      children: [
        '/document/秒传链接生成/秒传生成相关.html',
        '/document/秒传链接生成/一键秒传.html',
        '/document/秒传链接生成/极速生成.html',
        // '/document/秒传链接生成/PCS-Go 客户端.html',
      ]
    },
    {
      text: '如何预防和谐',
      collapsible: false,
      children: [
        '/document/预防和谐/文件和谐.html',
        '/document/预防和谐/已知和谐原因.html',
        '/document/预防和谐/度盘防和谐.html',
      ]
    },
    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/document/FAQ/常见问题.html',
        '/document/FAQ/错误代码.html',
        '/document/FAQ/错误代码(网页工具).html',
      ]
    },
  ],

  '/development/': [
    {
    text: '开发日志',
    collapsible: false,
    children: [
      '/development/脚本更新日志.html',
      '/development/历史版本.html',
      '/development/开发计划.html',
      // '/development/通知.html',
      '/development/网页端更新日志.html',
    ]
  },
  {
    text: '参与开发',
    collapsible: false,
    children: [
      '/development/文档开发.html',
    ]
  },
],
});
