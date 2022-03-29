import React from "react";
import { graphql } from "gatsby";
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { ArrowDown } from "../icons/ArrowDown";
import ButtonLink from "../components/ButtonLink";
import PostLink from "../components/PostLink";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";

export default function WebIndexPage({ data }) {
  const { posts, projects, skills } = data;

  return (
    <article className="container pt-12">
      <header className="grid grid-cols-1 gap-x-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1>Hey, I'm Adam</h1>
            <h2 className="font-light text-h3">Software Developer with the focus on Front-End, UX & Web 3.0</h2>
            <p>
              I help people and brands reach their goals by designing & building user-centric digital products and interactive experiences
            </p>
            <p className="text-justify">
              <strong className="font-bold">I love</strong> building projects and write about what I learn and do. This website is my personal digital garden — a place where you can find my notes, thoughts and tutorials on topics like web, design, technology, privacy, crypto, and more.
            </p>
            <ButtonLink path="/projects" customClass="mr-4 button__dark">View projects</ButtonLink>
            <ButtonLink path="/about">More about me</ButtonLink>
          </div>
          <div className="lg:col-span-6 place-self-center">
            <StaticImage 
              alt="Photo of Adam Hemzal"
              src="../images/adam-hemzal-drawing-optimized.png"
            />
          </div>
          <div className="lg:col-span-12 mt-10">
            <ArrowDown customClass="w-11 mx-auto hover:animate-bounce" />
          </div>
      </header>

      <section className="py-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-bold">Latest Articles</h2>
          <ButtonLink path="#allarticles" customClass="button__small">All Articles</ButtonLink>
        </div>
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
      </section>

      <section className="py-4">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold">Selected Projects</h2>
            <ButtonLink path="#allProjects" customClass="button__small">All Projects</ButtonLink>
          </div>

          <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-12">
            {
              projects.nodes.map( (project) => {
                let image = getImage(project.frontmatter.logo);
                if (!image) {
                  image = project.frontmatter.logo.publicURL;
                }
                return (
                  <ProjectCard 
                    key={project.frontmatter.slug}
                    path={`projects/${project.frontmatter.slug}`}
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
          </div>
      </section>
      
      <section className="py-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-bold">Skills & Tools</h2>
          <ButtonLink path="/about" customClass="button__small">All Skills</ButtonLink>
        </div>
          <div className="grid grid-cols-2 gap-6 my-4 sm:grid-cols-4 lg:grid-cols-8"> 
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
    limit: 3
    sort: {fields: frontmatter___created, order: DESC}
    filter: {frontmatter: {type: {eq: "project"}}}
  ) {
    nodes {
      frontmatter {
        slug
        title
        description
        logo {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        website
        tools
        duration
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