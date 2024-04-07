import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Nerd Stuff Docs',
  tagline: 'Nerds are cool',
  favicon: 'img/animated-logo.gif',

  // Set the production url of your site here
  url: 'https://localhost:3000/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The Nerd Stuff', // Usually your GitHub org/user name.
  projectName: 'nerd-stuff-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path:'classes',
          routeBasePath: 'classes'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'rss',
            title: 'The Nerd Stuff Blog RSS Feed',
          }
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Nerd Stuff',
      logo: {
        alt: 'The Nerd Stuff Logo',
        src: 'img/animated-logo.gif',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'classesSidebar',
          position: 'left',
          label: 'Classes',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/The-Nerd-Stuff',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Classes',
              to: '/classes/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Google Chat',
              href: 'https://chat.google.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/The-Nerd-Stuff',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Nerd Stuff. Built with <a href='https://github.com/facebook/docusaurus'>Docusaurus.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
