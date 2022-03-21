import React from "react";
import { Link, graphql } from "gatsby";
import LinkButton from "../components/LinkButton";

export default function WebIndexPage({ data }) {
  const result = data;
  console.log(result);
  return (
    <article className="container pt-10">
      <header className="">
          <h1 className="font-bold">Hey, I'm Adam</h1>
          <h2 className="font-light">Software Engineer with the focus on Front-End, UX & Web 3.0</h2>
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