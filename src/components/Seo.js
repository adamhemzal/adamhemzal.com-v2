/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description, lang, image, pageType, pathName }) {
    const { site } = useStaticQuery(graphql`
          query MetaDataQuery {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
                siteLogo
              }
            }
          }
        `
    );

    const metaImage = (image) ? image : site.siteMetadata.siteLogo;
    const metaTitle = (title) ? title : site.siteMetadata.title;
    const metaDescription = (description) ? description : site.siteMetadata.description;
    const metaCanonical = 
    (pageType) ? `${site.siteMetadata.siteUrl}/${pageType}/${pathName}` : 
    (pathName) ? `${site.siteMetadata.siteUrl}/${pathName}` : `${site.siteMetadata.siteUrl}`;
    
    const ogType = (pageType) ? 
    `<meta property="og:type" content="article" />` :  
    `<meta property="og:type" content="website" />`;

    return (
        <Helmet
            htmlAttributes={{lang}}
            defaultTitle={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content={site.siteMetadata.author} />
            <link rel="canonical" href={metaCanonical}/>

            <meta property="og:url" content={metaCanonical} />
            <meta property="og:title" content={metaTitle}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:image" content={metaImage}/>
            {ogType}

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:creator" content={site.siteMetadata.author} />
            <meta name="twitter:image" content={metaImage}/>

        </Helmet>
    );
}


Seo.defaultProps = {
    title: ``,
    description: ``,
    pageType: ``,
    pathName: ``,
    lang: `en`,
};

//export default Seo;