const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Wings',
    tagline:
      'Progressive campaign websites-as-a-service. Your domain, your visual identity, your content, your data.',
    url: 'https://docs.wings.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Wings', // Usually your GitHub org/user name.
    projectName: 'bolsterdigital', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/bolsterdigital/wingsdocs/edit/main/',
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: '761cab4809847a1fae3df1e2011d4eda',
          indexName: 'wingscms',

          // Optional: see doc section below
          contextualSearch: false,

          // Optional: see doc section below
          appId: 'MM3FME5B2G',

          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
        },
        image: 'img/wingsdocs-meta.png',
        navbar: {
          title: 'Wings',
          logo: {
            alt: 'Wings',
            src: 'img/wings_logo_blue.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            // { to: 'blog', label: 'Blog', position: 'left' },
            {
              type: 'dropdown',
              label: 'About',
              position: 'left',
              items: [
                {
                  label: 'Background',
                  href: 'https://wings.dev/about',
                },
                {
                  label: 'Features',
                  href: 'https://wings.dev/features',
                },
                {
                  label: 'Cases',
                  href: 'https://wings.dev/cases',
                },
                {
                  label: 'Pricing',
                  href: 'https://wings.dev/pricing',
                },
              ],
            },
            {
              href: 'https://admin.wings.dev',
              position: 'right',
              label: 'Wings Admin',
            },
          ],
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'More',
              items: [
                {
                  label: 'wings.dev',
                  to: 'https://wings.dev',
                },
                {
                  label: 'Wings admin',
                  to: 'https://admin.wings.dev',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'YouTube',
                  href: 'https://www.youtube.com/channel/UC0Oo_OMGOrNwpC_zUCc7h5Q',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/wingscms',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Wings`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
