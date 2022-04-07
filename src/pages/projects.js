import React from "react";
import { graphql } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import ProjectCard from "../components/ProjectCard";

export default function ProjectsIndexPage({ data }) {
    const projects = data.allMarkdownRemark.nodes;
    return (
        <article className="container py-12">
            <header>
                <h1>Projects</h1>
                <h2 className="text-h3 font-light mb-8">Websites, web apps and prototypes</h2>
            </header>
            <section className="grid grid-cols-1 gap-6 my-4 md:grid-cols-12">
              {
                projects.map( (project) => {
                  let image = getImage(project.frontmatter.logo);
                  return(
                    <ProjectCard 
                      key={project.frontmatter.slug}
                      path={project.frontmatter.slug}
                      title={project.frontmatter.title}
                      description={project.frontmatter.description}
                      website={project.frontmatter.website}
                      logo={image}
                      duration={project.frontmatter.duration}
                      customClass=""
                    />
                  )
                })
              }
            </section>
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
          slug
          title
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          timeline
          description
          website
        }
      }
    }
  }
`;
