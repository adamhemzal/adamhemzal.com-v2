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
     * PostCSS + TailwindCSS
    ************************************************/
    `gatsby-plugin-postcss`,
    /*********************************************** 
     * Files, images and static assets 
    ************************************************/
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
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
        name: `assets`,
        path: `${__dirname}/static/`,
      },
    },
    /*********************************************** 
     * Markdown 
    ************************************************/
     {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
		    {
          resolve: `gatsby-remark-images`,
          options: {
            backgroundColor: `transparent`,
            withWebp: true,
            maxWidth: 900,
          }
	      },
        ]
      }
    },
    
	],
}
