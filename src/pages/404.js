import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
    return (
        <article className="container pt-12">
            <h1>404 Page not found</h1>
            <h2>Oops! The page you're looking for does not exist.</h2>
            <p>Please try to go back home or try different page</p>
            <Link to="/">Go back</Link>
        </article>
    );
}
