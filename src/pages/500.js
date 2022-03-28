import React from "react";
import { Link } from "gatsby";

export default function ServerErrorPage() {
    return (
        <article className="container pt-12">
            <h1>500</h1>
            <h2>The page you're looking for does not exist.</h2>
            <p>Please try to go back home or try different page</p>
        </article>
    );
}
