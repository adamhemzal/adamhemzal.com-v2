/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description, lang, image, follow, pageType, pathName }) {
    const { site } = useStaticQuery(graphql`
          query MetaDataQuery {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
                siteSocialImage
              }
            }
          }
        `
    );

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: site.siteMetadata.siteUrl,
        name: site.siteMetadata.title,
        alternateName: site.siteMetadata.title,
      },
    ];

    if (pageType === 'blog') {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: `${site.siteMetadata.siteUrl}/${pageType}/${pathName}`,
          name: title,
          alternateName: title,
          headline: title,
          description,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          author: {
            '@type': 'Person',
            name: site.siteMetadata.author,
          },
        },
      );
    }

    const metaImage = (image) ? `${site.siteMetadata.siteUrl}${image}` : `${site.siteMetadata.siteUrl}${site.siteMetadata.siteSocialImage}`;    
    const metaTitle = (title) ? title : site.siteMetadata.title;
    const metaRobots = (follow === false) ? `noindex, nofollow` : `index, follow`;
    const metaDescription = (description) ? description : site.siteMetadata.description;
    const metaCanonical = 
    (pageType) ? `${site.siteMetadata.siteUrl}/${pageType}/${pathName}` : 
    (pathName) ? `${site.siteMetadata.siteUrl}/${pathName}` : `${site.siteMetadata.siteUrl}`;
    const ogType = (pageType) ? `article` : `website`;
    console.log(metaImage);
    return (
        <Helmet
            htmlAttributes={{lang}}
            defaultTitle={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="author" content={site.siteMetadata.author} />
            <meta name="robots" content={metaRobots} />
            <link rel="canonical" href={metaCanonical}/>
            <link rel="author" type="text/plain" href="humans.txt" />

            <script type="application/ld+json">
              { JSON.stringify(schemaOrgJSONLD) }
            </script>

            <meta property="og:url" content={metaCanonical} />
            <meta property="og:title" content={metaTitle}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:image" content={metaImage}/>
            <meta property="og:type" content={ogType} />

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
    image: ``,
    follow: true,
    pageType: ``,
    pathName: ``,
    lang: `en`,
};

//export default Seo;