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
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "noopener"
            }
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
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    
	]
}
