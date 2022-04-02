import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import ButtonLink from "./ButtonLink";

export default function Footer() {
    const data = useStaticQuery(graphql`
        query FooterQuery {
           nav: allNavigationJson {
                nodes {
                    label
                    url
                    id
                }
            }
            social: allSocialJson {
                nodes {
                    url
                    label
                    id
                }
            }
            resource: allResourceJson {
                nodes {
                    label
                    url
                    id
                }
            }
        }
    `);

    const nav = data.nav.nodes;
    const social = data.social.nodes;
    const resource = data.resource.nodes;

    return (
        <footer className="footer-container">
            <h2 className="sr-only">Footer</h2>
            <section className="footer__bgImage" id="contact">
                <div className="container grid gap-6 grid-cols-1 items-center lg:grid-cols-2">
                    <div className="footer__work">
                        <h2>In need of a developer?</h2>
                        <p>
                            Do you like my work? I enjoy discussing new ideas and challenges. If you are interested in my work you can contact me via <strong>email</strong> or reach me at <strong>LinkedIn</strong>. I'm looking forward to hearing from you!
                        </p>
                        <p className="current-status">
                            <span className="pulsing-circle"></span>
                            I'm currently available for work.
                        </p>
                        <a href="mailto:adam.hemzal@gmail.com" className="button button__dark">Send a message</a>
                    </div>
                    <div className="footer__testimonial">
                        <p className="text-h4 text-colorGrayDark mt-0 mb-0 text-center lg:text-right">@adamhemzal</p>
                        <p className="text-h4 text-colorGrayDark mt-0 mb-0 text-center lg:text-right">adam.hemzal (at) gmail.com</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-colorBlack">
                <div className="container">
                    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-3 lg:place-items-center">
                        <div className="footer__nav">
                            <p className="nav-title">Navigation</p>
                            {
                                nav.map( (item) => (
                                    <Link key={item.id} to={item.url}>{item.label}</Link>
                                ))
                            }
                        </div>
                        <div className="footer__nav">
                            <p className="nav-title">Resources</p>
                            {
                                resource.map( (item) => (
                                    <a key={item.id} href={item.url} rel="noopener noreferrer">{item.label}</a>
                                ))
                            }
                        </div>
                        <div className="footer__nav">
                            <p className="nav-title">Social & Contact</p>
                            {
                                social.map( (item) => (
                                    <a key={item.id} href={item.url} rel="noopener noreferrer">{item.label}</a>
                                ))
                            }
                        </div>
                    </div>

                    <div className="footer__copyright">
                        <p>
                            @ 2022 Made by <span className="font-medium">Adam Hemzal</span> | Powered by 
                            <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer" target="_blank">Gatsby</a> 
                            & 
                            <a href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank">TailwindCSS</a>
                        </p>
                    </div>

                </div>
            </section>  
        </footer>
    );
}
