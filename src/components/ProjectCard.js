import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ProjectCard({ path, website, title, thumbnail, timeline, summary, slug, customClass }) {
    return (
        <article className={`project-card ${customClass}`}>
            
            <div className="py-7 px-7 md:basis-1/2">
                <h3 className="title" id={slug}>{title}</h3>
                <p className="duration">{timeline}</p>
                <p className="summary">{summary}</p>
                <div className="flex justify-left">
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

            <div className="md:basis-1/2">
                <div className="image-container">
                    <GatsbyImage 
                        alt={`Image of ${title}`}
                        image={thumbnail}
                        className="object-cover"
                    />
                </div>
            </div>

        </article>
    );
}
