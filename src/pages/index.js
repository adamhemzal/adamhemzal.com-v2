import React from "react";
import { graphql } from "gatsby";
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { ArrowDown } from "../icons/ArrowDown";
import ButtonLink from "../components/ButtonLink";
import PostLink from "../components/PostLink";
import ProjectCard from "../components/ProjectCard";

export default function WebIndexPage({ data }) {
  const { posts, projects } = data;

  const skills = [
    {name: "React"},
    {name: "GatsbyJS"},
    {name: "WhateverJS"}
  ];
  console.log("posts here:", posts);
  console.log("skills", skills);
  return (
    <article className="container pt-12">
      <header className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="font-bold mb-4 mt-0">Hey, I'm Adam</h1>
            <h2 className="font-light mb-6 mt-0 text-h3">Software Developer with the focus on Front-End, UX & Web 3.0</h2>
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
          <div className="lg:col-span-12 my-5">
            <ArrowDown customClass="w-11 mx-auto hover:animate-bounce" />
          </div>
      </header>

      <section>
          <h2 className="font-bold">Latest Articles</h2>
          <ButtonLink path="#allarticles">All Articles</ButtonLink>
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

      <section>
          <h2 className="font-bold">Selected Projects</h2>
          <ButtonLink path="#allProjects">All Projects</ButtonLink>
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
      </section>
      
      <section>
          <h2 className="font-bold">Skills & Tools</h2>
          <ButtonLink path="/about">All Skills</ButtonLink>

          {
            skills.map( (skill) => (
              <p>{skill.name}</p>
            ))
          }

      </section>
      
    </article>
  );
}

export const pageQuery = graphql`
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
        created(formatString: "MMM DD, YYYY")
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
}
`