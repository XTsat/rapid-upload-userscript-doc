import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index";
import { zhSidebar } from "./sidebar/index";

export default hopeTheme({
  hostname: "https://xtsat.github.io/rapid-upload-userscript-doc/",

  author: {
    name: "rapid upload userscript doc",
    url: "https://github.com/rapid-upload-userscript-doc",
  },

  iconAssets: "iconfont",

  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4AZTTJRBUURTH4TtDwXuPdPrgbhHXiksf3CPucRNScHd3d3d3uO9bKeu7b79+fun8Q17CNHyMMUqaiPE4fEyYVjjGNKnNwQ4lpgV8lManEfwfosLHEGPU1N3ZnAv4qlT+NiQ56uPWSjKBrztUSnIaB66sY1vgxgxoMXB5NbsCB9rxcB5fN2M5/16nCFxeS6YTezpzsB1Pu/C2O7/78/99eYBYHXh+gqdHObGIK4GHgevjVIt1AgAnhvE4cGe8euoHbizgYuD2RGgx8O0RpwIPRmsmJDGqcrANd3pLo/qVr03hUlcpfSwf0/vD3JwkPdPK5/zhkOz+/f1FIDv/RcnOAEjywH/DhgADAAAAAElFTkSuQmCC',

  repo: "XTsat/rapid-upload-userscript-doc",
  docsRepo: "XTsat/rapid-upload-userscript-doc",
  docsBranch: 'vp-hope',
  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      footer: "度盘秒传脚本的相关文档",

      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://document-waline.vercel.app/",
      emoji: [
        "//unpkg.com/@waline/emojis@1.1.0/weibo",
        "//unpkg.com/@waline/emojis@1.1.0/bilibili",
        "//unpkg.com/@waline/emojis@1.1.0/bmoji",
        "//unpkg.com/@waline/emojis@1.1.0/qq",
        "//unpkg.com/@waline/emojis@1.1.0/tieba",
      ],
      requiredMeta: ["mail"],
      reaction: false,
    },

    components: {
      components: ["Badge", "BiliBili"],
    },

    feed: {
      rss: true,
    },

    sitemap: {
      changefreq: "weekly",
    },

    mdEnhance: {
      gfm: true,
      imgLazyload: true,
      include: true,
      tabs: true,
      card: true,
      footnote: true,
    },
  },

});
