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
    siteSocialImage: `/orange-mae-mu-unsplash.jpg`,
    feedUrl: `https://www.adamhemzal.com/rssfeed`,
  },
	plugins: [
    /*********************************************** 
     * Preact
    ************************************************/
   `gatsby-plugin-preact`,
   
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
        crossOrigin: `use-credentials`,
        background_color: `white`,
        theme_color: `#FB9300`,
        lang: `en`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/articles/*`], // pre-cache some pages
      },
    },

    /*********************************************** 
     * GoatCounter
    ************************************************/
     {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // Either `code` or `selfHostUrl` is required.
        // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
        code: 'ah-per-web',
        exclude: ['/404'],  // Avoids sending pageview hits from custom paths
        pageTransitionDelay: 30, // Delays sending pageview hits on route update (in milliseconds)
        head: false, // boolean `true` in the head and `false` in the body
        pixel: false, // Set to true to include a gif to count non-JS users
        // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
        // for testing the integration locally.
        // TIP: set up a `Additional Site` in your GoatCounter settings
        // and use its code conditionally when you `allowLocal`, example below
        allowLocal: false,
        // Override the default localStorage key more below
        localStorageKey: 'skipgc',
        referrer: false,
        // Setting it to boolean true will clean the URL from
        // `?ref` & `?utm_` parameters before sending it to GoatCounter
        // It uses `window.history.replaceState` to clean the URL in the
        // browser address bar as well.
        // This is to prevent ref tracking ending up in your users bookmarks.
        // All parameters other than `ref` and all `utm_` will stay intact
        urlCleanup: false,
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
