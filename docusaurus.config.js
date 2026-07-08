const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Wings',
    tagline:
      'Progressive campaign websites-as-a-service. Your domain, your visual identity, your content, your data.',
    url: 'https://wings.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Wings', // Usually your GitHub org/user name.
    projectName: 'bolsterdigital', // Usually your repo name.
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'nl', 'de', 'fr'],
    },
    plugins: ['docusaurus-plugin-matomo'],

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: false,

          theme: {
            customCss: require.resolve(
              './src/css/custom.css'
            ),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // algolia: {
        //   apiKey: '761cab4809847a1fae3df1e2011d4eda',
        //   indexName: 'wingscms',

        //   // Optional: see doc section below
        //   contextualSearch: false,

        //   // Optional: see doc section below
        //   appId: 'MM3FME5B2G',

        //   // Optional: Algolia search parameters
        //   searchParameters: {},

        //   //... other Algolia params
        // },
        matomo: {
          matomoUrl: 'https://stats.bureaubolster.nl/',
          siteId: '7',
        },
        image: 'img/wings-meta-image.png',
        navbar: {
          title: 'Wings',
          logo: {
            alt: 'Wings',
            src: 'img/wings_logo_blue.svg',
          },
          items: [
            {
              to: 'features',
              label: 'Features',
              position: 'left',
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
