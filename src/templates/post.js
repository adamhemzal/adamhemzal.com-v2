import React from "react";
import { graphql } from "gatsby";

export default function PostTemplate({ data }) {
  const result = data.markdownRemark;
  const { html } = data.markdownRemark;
console.log(result);
    return (
        <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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