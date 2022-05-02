import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink";

export default function BlogIndexPage({ data }) {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <article className="container py-12">
          <header>
            <h1>Articles</h1>
            <h2 className="font-light text-h3">Latest thoughts, tips and tutorials</h2>
          </header>
          <section>
            
          </section>
          <section className="mt-10 mb-4">
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
          </section>
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
      filter: {frontmatter: {type: {eq: "blog"}}}
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