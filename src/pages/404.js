import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
    return (
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
    );
}
