const { lazy } = require("react");

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `Adam Hemzal`,
    author: `Adam Hemzal`,
    description: 
    `Software developer with the focus on Front-End, UX and Web 3.0. An occasional blogger`,
    siteUrl: `https://www.adamhemzal.com`,
    feedUrl: `url here`,
    siteLogo: `url here`,
    favicon: `url here`
  },
	plugins: [
    /*********************************************** 
     * Analyzer
    ************************************************/
   `gatsby-plugin-webpack-bundle-analyzer`,

    /*********************************************** 
     * Meta
    ************************************************/
   `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Hemzal`,
        short_name: `Adam Hemzal`,
        description: 
        `Software developer with the focus on Front-End, UX and Web 3.0. An occasional blogger`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#FB9300`,
        lang: `en`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/articles/*`], // pre cache some pages
      },
    },

    /*********************************************** 
     * PostCSS + TailwindCSS
    ************************************************/
   `gatsby-plugin-postcss`,

    /*********************************************** 
     * Images
    ************************************************/
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    /*********************************************** 
     * Markdown 
    ************************************************/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // add anchor links to headers
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              elements: [`h1`, `h2`, `h3`],
            },
          },
          {
            // handling images in markdown 
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              withWebp: true,
              quality: 80,
              maxWidth: 990,
            },
          },
          {
            // handling external links in markdown
            // https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_self`,
              rel: `noopener`
            },
          },
          {
            // theme for code in markdown
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null, // string separator for inline code
              aliases: {},
              showLineNumbers: false, // {numberLines: true} for certain code
              noInlineHighlight: false,
              prompt: {
                user: `root`,
                host: `localhost`,
                global: true,
              }
            },
          }
        ],
      },
    },
    /*********************************************** 
     * Static Sources + JSON
    ************************************************/
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    
	]
}
