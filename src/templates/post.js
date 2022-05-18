import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

export default function PostTemplate({ data }) {
  const post = data.markdownRemark;
  const html = data.markdownRemark.html.split('</h1>')[1]; 
  
    return (
      <>
        <Seo 
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          lang={post.frontmatter.language}
          image={post.frontmatter.thumbnail.publicURL}
          pageType={post.frontmatter.type}
          pathName={post.frontmatter.slug}
        />
        <article
          className="post-container"
          itemScope
          itemType="http://schema.org/Article">
            <header className="pb-16">
              <h1 itemProp="headline">{post.frontmatter.title}</h1>

              <div className="flex text-colorGrayDark flex-col text-small md:flex-row" itemprop="author" itemtype="http://schema.org/Person">
                <p className="my-1 md:m-0 md:border-r md:pr-3">Written by <span className="font-medium" itemprop="name">Adam Hemzal</span> </p>
                <p className="m-0 md:pl-3">Published or updated on <time className="font-medium">{post.frontmatter.last_update}</time> in <span className="font-medium">{post.frontmatter.category}</span>
                </p>
              </div>

            </header>

            <section dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />
        </article>      
      </>

    )
}

export const pageQuery = graphql`
query BlogPostById($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      last_update(formatString: "MMM DD, YYYY")
      slug
      title
      description
      thumbnail {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
      category
      tags
      language
      type
    }
  }
}
`