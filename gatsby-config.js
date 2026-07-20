/** @type {import('gatsby').GatsbyConfig} */
const isGithubPagesBuild = process.env.GATSBY_BUILD_TARGET === 'github-pages';
const githubPagesPathPrefix = '/exact';
const siteUrl = isGithubPagesBuild
  ? `https://artur-wedzicha.github.io${githubPagesPathPrefix}`
  : `https://exact-koparka.pl`;

module.exports = {
  pathPrefix: isGithubPagesBuild ? githubPagesPathPrefix : '',
  assetPrefix: isGithubPagesBuild ? githubPagesPathPrefix : '',
  siteMetadata: {
    title: `Exact - Usługi koparką i prace ziemne`,
    description: `Profesjonalne usługi koparką i kompleksowe prace ziemne: wykopy, niwelacje, fundamenty, drogi, odwodnienia, układanie kostki oraz transport materiałów budowlanych.`,
    author: `@Exact`,
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Exact`,
        short_name: `Exact`,
        start_url: isGithubPagesBuild ? `${githubPagesPathPrefix}/` : `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              variants: ['400', '500', '600', '700', '800', '900'],
              subsets: ['latin-ext'],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
          "@components": "src/components",
          "@images": "src/images",
          "@styles": "src/styles",
          "@utils": "src/utils",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  ],
};
