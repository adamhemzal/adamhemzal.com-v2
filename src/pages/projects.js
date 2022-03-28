import React from "react";
import { Link, graphql } from "gatsby";

export default function ProjectsIndexPage({ data }) {
    const projects = data.allMarkdownRemark.nodes;
    console.log(projects);
    return (
        <article className="container pt-12">
            <header>
                <h1>Projects</h1>
            </header>
            {
                projects.map( (project) => (
                    <p>{project.frontmatter.title}</p>
                ))
            }
        </article>
    );
}

export const query = graphql`
query ProjectQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___created, order: DESC}
      filter: {frontmatter: {type: {eq: "project"}}}
    ) {
      nodes {
        frontmatter {
          type
          tools
          title
          slug
          last_update
          created
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          duration
          description
          website
        }
      }
    }
  }
`;
