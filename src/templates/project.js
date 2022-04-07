import React from "react";
import { graphql } from "gatsby";

export default function ProjectTemplate({ data }) {
    const project = data.markdownRemark;
    
    // Omit H1 tag
    const html = data.markdownRemark.html.split('</h1>')[1]; 
    
    return (
        <article 
          className="container py-12 project-container"
          itemScope
          itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline">{project.frontmatter.title}</h1>
            <h2 className="text-h3 font-light m-0">{project.frontmatter.description}</h2>
            
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 my-6 project__meta-info">

              <div className="project__meta-card">
                <p className="project__meta-title">🖥️ Website</p>
                <a 
                    href={project.frontmatter.website} 
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className="project-card__button text-center block my-2">
                    Website
                </a>
              </div>

              <div className="project__meta-card">
                <p className="project__meta-title">⌛ Timeline</p>
                <p className="my-2 mx-0 text-small">{project.frontmatter.timeline}</p>
              </div>

              <div className="project__meta-card">
                <p className="project__meta-title">⚙️ Tech Stack</p>
                <p className="my-2 mx-0 text-small">
                  {project.frontmatter.tools.map( (item) => (
                    <span className="mx-2">{item}</span>
                  ))
                  }
                </p>
              </div>
              
              <div className="project__meta-card">
                <p className="project__meta-title">🧑 My Role</p>
                <p className="my-2 mx-0 text-small">{project.frontmatter.role}</p>
              </div>


            </div>
          </header>

          <section 
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
        </article>
    );
}

export const query = graphql`
query SingleProjectQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        slug
        title
        description
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
        role
        tools
        timeline
        website
        type
      }
    }
  }
`;
