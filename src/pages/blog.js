import React from "react";
import { Link, graphql } from "gatsby";
import PostLink from "../components/PostLink";

export default function BlogIndexPage({ data }) {
    const posts = data.allMarkdownRemark.nodes;
    console.log(posts);

    return (
        <article className="container pt-12">
          <header>
            <h1 className="">Articles</h1>
          </header>
          {
              posts.map( (post) => (
                <PostLink 
                  key={post.id}
                  path={post.frontmatter.slug} 
                  title={post.frontmatter.title}
                  category={post.frontmatter.category}
                  created={post.frontmatter.created}
                />
              ))
          }
        </article>
    );
}

export const query = graphql`
query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___created, order: DESC}
      filter: {frontmatter: {type: {eq: "article"}}}
    ) {
      nodes {
        frontmatter {
          slug
          title
          category
          language
          tags
          type
          created(formatString: "MMM DD YYYY")
        }
        id
        headings(depth: h1) {
          value
        }
        excerpt(format: PLAIN)
      }
    }
  }  
`