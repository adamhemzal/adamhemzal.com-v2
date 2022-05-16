import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

export default function PostTemplate({ data }) {
  const post = data.markdownRemark;
  const html = data.markdownRemark.html.split('</h1>')[1]; 
  //const { html } = data.markdownRemark;
  
    return (
      <>
        <Seo 
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          lang={post.frontmatter.language}
          image={post.frontmatter.thumbnail.publicURL}
          pageType={post.frontmatter.type}
          pathName={post.frontmatter.slug}
        />
        <article
          className="container py-12 post-container"
          itemScope
          itemType="http://schema.org/Article">
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
            </header>
            
            <section dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />
        </article>      
      </>

    )
}

export const pageQuery = graphql`
query BlogPostById($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      last_update(formatString: "MMM DD, YYYY")
      slug
      title
      description
      thumbnail {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
      category
      tags
      language
      type
    }
  }
}
`