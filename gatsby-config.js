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
    siteUrl: `https://www.adamhemzal.com`,
    description: `Software engineer with the focus on Front-End, UX and Web 3.0. An occasional blogger`,
    feedUrl: `url here`,
    logo: `url here`
  },
	plugins: [
    /*********************************************** 
     * PostCSS + TailwindCSS + Images
    ************************************************/
    `gatsby-plugin-postcss`,
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
            // handling images in markdown 
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              withWebp: true,
              quality: 80,
              maxWidth: 900,
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
    //`gatsby-transformer-json`,
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
