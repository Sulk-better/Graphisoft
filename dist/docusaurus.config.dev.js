"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
var config = {
  title: '图软语言图书库',
  tagline: 'Language Library',
  url: '/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook',
  // Usually your GitHub org/user name.
  projectName: 'docusaurus',
  // Usually your repo name.
  presets: [['classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      // Please change this to your repo.
      // Remove this to remove the "edit this page" links.
      // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      // path: 'docs/info',
      routeBasePath: '/'
    },
    blog: {
      showReadingTime: true,
      // Please change this to your repo.
      // Remove this to remove the "edit this page" links.
      editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css')
    }
  }]],
  // 多语言配置
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    path: 'i18n',
    localeConfigs: {
      zh: {
        label: 'Chinese',
        // 默认语言
        direction: 'ltr',
        htmlLang: 'UTF-8',
        calendar: 'gregory',
        path: 'zh'
      },
      // fa: {
      //   label: 'فارسی',
      //   direction: 'rtl',
      //   htmlLang: 'fa-IR',
      //   calendar: 'persian',
      //   path: 'fa',
      // },
      en: {
        label: 'English',
        direction: 'rtl',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en'
      }
    }
  },
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    navbar: {
      title: '图软语言图书库',
      logo: {
        alt: 'Language Library',
        src: 'img/logo.svg'
      },
      items: [{
        // 语言设置
        type: 'localeDropdown',
        position: 'right'
      }, {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: '语言入门'
      }, {
        to: 'blog',
        label: '分享',
        position: 'left'
      } // Please keep GitHub link to the right for consistency.
      // {
      //   href: 'https://github.com/facebook/docusaurus',
      //   label: 'GitHub',
      //   position: 'right',
      // },
      ]
    },
    footer: {
      style: 'dark',
      // links: [{
      //       title: 'Learn',
      //       items: [{
      //           label: 'Style Guide',
      //           to: 'docs/',
      //         },
      //         {
      //           label: 'Second Doc',
      //           to: 'docs/doc2',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [{
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [{
      //           label: 'Blog',
      //           to: 'blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Legal',
      //       // Please do not remove the privacy and terms, it's a legal requirement.
      //       items: [{
      //           label: 'Privacy',
      //           href: 'https://opensource.fb.com/legal/privacy/',
      //         },
      //         {
      //           label: 'Terms',
      //           href: 'https://opensource.fb.com/legal/terms/',
      //         },
      //         {
      //           label: 'Data Policy',
      //           href: 'https://opensource.fb.com/legal/data-policy/',
      //         },
      //         {
      //           label: 'Cookie Policy',
      //           href: 'https://opensource.fb.com/legal/cookie-policy/',
      //         },
      //       ],
      //     },
      //   ],
      //   logo: {
      //     alt: 'Meta Open Source Logo',
      //     // This default includes a positive & negative version, allowing for
      //     // appropriate use depending on your site's style.
      //     src: '/img/meta_opensource_logo_negative.svg',
      //     href: 'https://opensource.fb.com',
      //   },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " Meta Platforms, Inc. Built with Docusaurus.")
    }
  }
};
module.exports = config;