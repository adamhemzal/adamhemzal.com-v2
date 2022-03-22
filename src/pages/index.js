import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import LinkButton from "../components/LinkButton";

export default function WebIndexPage({ data }) {
  const result = data;
  console.log(result);
  return (
    <article className="container pt-10">
      <header className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="font-bold mb-4">Hey, I'm Adam</h1>
            <h2 className="font-light mb-6 text-h3">Software Engineer with the focus on Front-End, UX & Web 3.0</h2>
            <p className="text-justify">
              <strong className="font-bold">I love</strong> building projects and write about what I learn and do. This website is my personal digital garden. A place where you can find my notes, thoughts and tutorials on topics like web, design, technology, privacy, crypto, and more.
            </p>
            <Link to="/projects" className="button dark">View projects</Link>
            <Link to="/about" className="button">More about me</Link>
          </div>
          <div className="lg:col-span-6 place-self-center">
            <StaticImage 
              alt="Photo of Adam Hemzal"
              src="../images/adam-hemzal-drawing-optimized.png"
            />
          </div>
          <p className="lg:col-span-12">Arrow here</p>
      </header>
      <section>
          <h2 className="font-bold"><span>Latest Articles</span> <a href="#allarticles">All Articles</a></h2>
          
      </section>
      <section>
          <h2 className="font-bold">Selected Projects</h2>
          <a href="#allProjects" className="">All Projects</a>
      </section>
      <section>
          <h2 className="font-bold">Skills & Tools</h2>
          <LinkButton path="/about">All Skills</LinkButton>
      </section>
      <button className="btn">Test BTN</button>
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
        category
        created(formatString: "MMM DD, YYYY")
        slug
        title
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
        category
        created(formatString: "MMM DD, YYYY")
        slug
        title
      }
    }
  }
}
`