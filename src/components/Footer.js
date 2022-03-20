import React from "react";
import { Link } from "gatsby";

export default function Footer() {
    return (
        <footer>
            <h2 className="sr-only">Footer</h2>
            <section className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Test</Link></li>
                    </ul>
                </nav>
            </section>
            <section className="container">

            </section>  
        </footer>
    );
}
