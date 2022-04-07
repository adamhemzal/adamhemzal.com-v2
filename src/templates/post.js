import React from "react";
import { graphql } from "gatsby";

export default function PostTemplate({ data }) {
  const post = data.markdownRemark;
  const { html } = data.markdownRemark;
  console.log(post);
  
    return (
      <article
        className="container pt-12 post-container"
        itemScope
        itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </header>
          
          <section dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />
      </article>
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
      language
      category
      title
      tags
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`