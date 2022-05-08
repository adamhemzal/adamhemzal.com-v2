import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";

export default function NotFoundPage({ data }) {
    const { site } = data;
    const pageMeta = {
        title: `404`,
        description: `404 - Not Found`,
        pathName: `404`,
        image: `/404/notfound-cat-mikhail-vasilyev.jpg`,
        follow: false,
    };

    return (
        <>
            <Seo 
                title={pageMeta.title}
                description={pageMeta.description}
                pathName={pageMeta.pathName}
                follow={pageMeta.follow}
                image={pageMeta.image}
            />
            <article className="container py-12">
                <section>
                        <h1>404 Not Found</h1>
                        <h2 className="font-light mt-0">This page does not exist.</h2>
                </section>
                <section>
                    <ul>
                        <li>
                            <Link to="/blog">Articles</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/">Go back home</Link>
                        </li>
                    </ul>
                </section>

            </article>

        </>
    );
}

export const query = graphql`
query NotFoundQuery {
    site {
        siteMetadata {
            siteUrl
        }
    }
}
`