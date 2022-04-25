import React from "react";
import { graphql } from "gatsby";
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { ArrowDown } from "../icons/ArrowDown";
import ButtonLink from "../components/ButtonLink";
import IndexLink from "../components/IndexLink";
import PostLink from "../components/PostLink";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";

export default function WebIndexPage({ data }) {
  const { posts, projects, skills } = data;

  return (
    <article className="container py-12">
      <header className="grid grid-cols-1 gap-x-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1>Hey, I'm Adam</h1>
            <h2 className="font-light text-h3">Software Developer with the focus on Front-End, UX & Web 3.0</h2>
            <p className="text-justify">
              <strong>I love</strong> building projects and write about what I learn and do. This website is my personal digital garden — a place where you can find my notes, thoughts and tutorials on topics like web, design, technology, privacy, crypto, and more.
            </p>
            <div className="flex flex-col sm:flex-row text-center">
              <ButtonLink path="/projects" customClass="button__dark mb-3 sm:mr-4 sm:mb-0">View projects</ButtonLink>
              <ButtonLink path="/about">More about me</ButtonLink>
            </div>
          </div>
          <div className="py-4 mt-5 lg:py-0 lg:mt-0 lg:col-start-8 lg:col-end-13 place-self-center">
            <StaticImage 
              alt="Photo of Adam Hemzal"
              src="../images/adam-hemzal-draw-2022.png"
              className="rounded"
            />
          </div>
          <div className="lg:col-span-12 mt-10">
            <ArrowDown customClass="w-11 mx-auto" />
          </div>
      </header>

      <section className="py-4">
        <h2>Latest Articles</h2>
        {
          posts.nodes.map( (post) => (
            <PostLink 
              key={post.frontmatter.slug}
              path={`blog/${post.frontmatter.slug}`} 
              title={post.frontmatter.title}
              category={post.frontmatter.category}
              created={post.frontmatter.created}
            /> 
          ))
        }
        <IndexLink path="/blog" customClass="mt-10 mb-5">All Articles</IndexLink>
      </section>
    

      <section className="py-4">
          <div className="flex flex-row justify-between items-center">
            <h2 id="projects">Projects</h2>
          </div>

          <div className="grid gap-6 pt-2 grid-cols-1">
            {
              projects.nodes.map( (project) => {
                let image = getImage(project.frontmatter.thumbnail);
                return (
                  <ProjectCard 
                    key={project.frontmatter.slug}
                    slug={project.frontmatter.slug}
                    path={`projects/${project.frontmatter.slug}`}
                    title={project.frontmatter.title}
                    summary={project.frontmatter.summary}
                    website={project.frontmatter.website}
                    thumbnail={image}
                    timeline={project.frontmatter.timeline}
                    customClass=""
                  />
                )
              })
            }
          </div>
      </section>   

      <section className="py-4">
        <h2>Skills & Tools</h2>
        <div className="grid gap-6 pt-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"> 
          {
            skills.nodes.map( (skill) => (
              <SkillCard
                key={skill.name} 
                name={skill.name}
                icon={skill.icon}
                link={skill.link}
              />
            ))
          }
        </div>
        
      </section>
      
    </article>
  );
}

export const query = graphql`
query IndexQuery {
  posts: allMarkdownRemark(
    limit: 7
    sort: {fields: frontmatter___created, order: DESC}
    filter: {frontmatter: {type: {eq: "article"}}}
  ) {
    nodes {
      frontmatter {
        slug
        title
        category
        created(formatString: "MMM DD YYYY")
      }
    }
  }
  projects: allMarkdownRemark(
    limit: 4
    sort: {fields: frontmatter___created, order: DESC}
    filter: {frontmatter: {type: {eq: "project"}}}
  ) {
    nodes {
      frontmatter {
        slug
        title
        summary
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        website
        tools
        timeline
      }
    }
  }
  skills: allSkillsJson(
    limit: 8
  ) {
    nodes {
      name
      icon
      link
    }
  }

}
`