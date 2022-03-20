import React from "react";
import { graphql } from "gatsby";

export default function PostTemplate({ data }) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;

    return (
        <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
}

/*

export const query = graphql`
query SinglePostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        category
        created(formatString: "MMM DD, YYYY")
        language
        last_update(formatString: "MMM DD, YYYY")
        slug
        tags
        title
        type
      }
    }
  }
`
*/