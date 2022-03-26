import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ProjectCard({ path, website, title, logo, duration, description, customClass }) {
    return (
        <article className={`project-card ${customClass}`}>
            <div>
                <h3 className="title">{title}</h3>
                <div className="image-container">
                    
                    {typeof logo === "object" &&
                        <GatsbyImage 
                            alt={`Logo of ${title}`}
                            image={logo}
                        />
                    }

                    {typeof logo === "string" &&
                        <img src={logo} alt={`Logo of ${title}`} className="image-svg"/>
                    }
                </div>
                <p className="duration">{duration}</p>
            </div>

            <div>
                <p className="description">{description}</p>
                <div className="flex justify-center">
                    <Link 
                        to={path} 
                        className="project-card__button project-card__button-dark mr-4">
                        View more
                    </Link>
                    <a 
                        href={website} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        className="project-card__button">
                        Website
                    </a>
                </div>
            </div>

        </article>
    );
}
