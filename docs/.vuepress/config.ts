import { navbar, sidebar } from './configs'

import { defineUserConfig } from 'vuepress'

import { defaultTheme } from 'vuepress'

import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/rapid-upload-userscript-doc/',

  head: [
    
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4AZTTJRBUURTH4TtDwXuPdPrgbhHXiksf3CPucRNScHd3d3d3uO9bKeu7b79+fun8Q17CNHyMMUqaiPE4fEyYVjjGNKnNwQ4lpgV8lManEfwfosLHEGPU1N3ZnAv4qlT+NiQ56uPWSjKBrztUSnIaB66sY1vgxgxoMXB5NbsCB9rxcB5fN2M5/16nCFxeS6YTezpzsB1Pu/C2O7/78/99eYBYHXh+gqdHObGIK4GHgevjVIt1AgAnhvE4cGe8euoHbizgYuD2RGgx8O0RpwIPRmsmJDGqcrANd3pLo/qVr03hUlcpfSwf0/vD3JwkPdPK5/zhkOz+/f1FIDv/RcnOAEjywH/DhgADAAAAAElFTkSuQmCC`,
      },
    ],
    
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: '简体中文',
      title: '秒传链接提取脚本 - 文档&教程',
      description: '用于提取和生成百度网盘秒传链接的脚本教程',
    },
    // '/en/': {
    //   lang: 'English',
    //   title: 'rapid-upload-userscript-doc',
    //   description: 'Script tutorial for extracting and generating second transmission links of Baidudisk',
    // },
  },

  theme: defaultTheme({
    // 在这里进行配置
    logo: '/logo/logo.png',
    
    repo: 'XTsat/rapid-upload-userscript-doc',

    docsBranch: 'VuePress',
    docsDir: 'docs',
    
    // theme-level locales config
    locales: {
      
      // '/en/': {
      //   // navbar
      //   navbar: navbar.en,
      //   selectLanguageName: 'English',
      //   selectLanguageText: '选择语言',
      //   selectLanguageAriaLabel: '选择语言',
  
      //   // sidebar
      //   sidebar: sidebar.en,
  
      //   // page meta
      //   editLinkText: 'Edit this page on GitHub',
      // },
      
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: 'language',
        selectLanguageAriaLabel: 'language',

        repoLabel: 'GitHub文档',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '最后更新时间',
        contributorsText: '编辑人',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '找不到该页面',
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

  }),

  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        // '/en/': {
        //   placeholder: 'Search',
        //   hotKeys: ['/']
        // },
        '/': {
          placeholder: '搜索文档',
        }
      },
    }),
  ],
  

}
)