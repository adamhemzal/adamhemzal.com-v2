import React from "react";
import { Link, graphql } from "gatsby";

export default function BlogIndexPage({ data }) {
    const posts = data.allMarkdownRemark.nodes;
    console.log(posts);

    return (
        <article className="container pt-12">
            <h1 className="">Blogs Index Page!!</h1>
            {
                posts.map( (post) => (
                    <article key={post.id}>
                        <h2><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h2>
                    </article>
                ))
            }
        </article>
    );
}

export const pageQuery = graphql`
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
          created(formatString: "MMM DD, YYYY")
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