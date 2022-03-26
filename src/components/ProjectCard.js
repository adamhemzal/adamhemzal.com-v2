import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ProjectCard({ path, website, title, logo, duration, description, customClass }) {
    return (
        <article className={`shadow-md rounded ${customClass}`}>
            <h3 className="font-medium">{title}</h3>

            <div className="w-1/2">
                {typeof logo === "object" &&
                    <GatsbyImage 
                        alt={`Logo of ${title}`}
                        image={logo}
                    />
                }

                {typeof logo === "string" &&
                    <img src={logo} alt={`Logo of ${title}`} />
                }
            </div>
            
            <p className="">{duration}</p>
            <p className="">{description}</p>

            <Link to={path} className="project-card__button project-card__button-dark mr-4">View more</Link>
            <a href={website} rel="noopener noreferrer" target="_blank" className="project-card__button">Website</a>
        </article>
    );
}
