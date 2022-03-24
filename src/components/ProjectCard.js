import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function ProjectCard({ path, website, title, logo, duration, description, customClass }) {
    return (
        <article className={`projectCard ${customClass}`}>
            <p className="">{title}</p>

            {typeof logo === "object" &&
                <GatsbyImage 
                    alt={`Logo of ${title}`}
                    image={logo}
                />
            }
            {typeof logo === "string" &&
                <img src={logo} alt={`Logo of ${title}`} />
            }
            
            <p className="">{duration}</p>
            <p className="">
                {description}
            </p>
            <Link to={path}>View more</Link>
            <a href={website} rel="noopener noreferrer" target="_blank">Demo</a>
        </article>
    );
}
