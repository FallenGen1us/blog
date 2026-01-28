import { defineConfig } from 'vitepress'
import {withSidebar} from 'vitepress-sidebar';

const vitePressOptions = {
  title: "FallenGen1us的技术博客",
  description: "记录学习笔记、技术项目、个人简介。",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '学习笔记', link: '/notes' },
      { text: '技术项目', link: '/projects' },
      { text: '关于我', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FallenGen1us/blog' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-至今 FallenGen1us | <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2026001818号-1</a>'
    }
  }
}


const sidebarOptions = [
  {
    documentRootPath: '/', // 文档根目录
    scanStartPath: 'notes',      // 限制扫描范围
    resolvePath: '/notes/',      // 修正路由前缀
    collapsed: true,           // 默认折叠
    useTitleFromFileHeading: true, // 使用 Markdown 里的第一个 H1 作为标题
    sortMenusByName: true,
  },
  {
    documentRootPath: '/', // 文档根目录
    scanStartPath: 'projects',      // 限制扫描范围
    resolvePath: '/projects/',      // 修正路由前缀
    collapsed: true,           // 默认折叠
    useTitleFromFileHeading: true, // 使用 Markdown 里的第一个 H1 作为标题
    sortMenusByName: true,
  },
  {
    documentRootPath: '/', // 文档根目录
    scanStartPath: 'about',      // 限制扫描范围
    resolvePath: '/about/',      // 修正路由前缀
    collapsed: true,           // 默认折叠
    useTitleFromFileHeading: true, // 使用 Markdown 里的第一个 H1 作为标题
    sortMenusByName: true,
  }]

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, sidebarOptions))