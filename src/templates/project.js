import React from "react";
import { graphql } from "gatsby";

export default function ProjectTemplate({ data }) {
    const result = data.markdownRemark;
    const { html } = data.markdownRemark;
    console.log(result);
    return (
        <div className="container pt-12 project-container"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export const query = graphql`
query SingleProjectQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        slug
        tags
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
        duration
        description
        title
        website
        type
      }
    }
  }
`;
