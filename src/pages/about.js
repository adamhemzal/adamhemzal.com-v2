import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import SkillCard from "../components/SkillCard";
import Seo from "../components/Seo";

export default function AboutPage({ data }) {
    const skills = data.allSkillsJson.nodes;
    const pageMeta = {
        title: `About Me`,
        description: `Software developer with the focus on Front-End, UX and Web 3.0. An occasional blogger`,
        pathName: `about`,
    }

    return (
        <>
            <Seo 
                title={pageMeta.title}
                description={pageMeta.description}
                pathName={pageMeta.pathName}
            />
            <article className="container py-12">
                <header className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7 text-justify">
                        <h1>About me</h1>
                        <p>
                            Hi, I'm Adam and I'm a Czech currently living in Vancouver, Canada. I love being creative and I like to express myself through design, code and writing. I enjoy software engineering because it allows me to blend engineering with design and build beautiful and useful things for people.
                        </p>
                        <p>
                            I found my passion in 2015 when I was in the second year of my studies at <a href="https://www.vse.cz/english/" rel="noopener noreferrer" target="_blank">Prague University of Business and Economics</a>. That year I was introduced to HTML, CSS & JavaScript and I immediately fell in love.
                        </p>
                        <p>
                            Since than I've been helping various clients in the online world. Designing and building websites and small applications as well as communication were parts of my routine alongside with studying at university.
                        </p>
                        <p>
                            While I was stuck in the Czech Republic during the global pandemic in 2020 working nonstop from home, I become eager to fully dive deep into software engineering. 
                        </p>
                        <p>
                            In 2021 I was accepted to <a href="https://www.bcit.ca/programs/software-systems-developer-web-programmer-option-certificate-full-time-699ccertt/" rel="noopener noreferrer" target="_blank">British Columbia Institute of Technology (BCIT), Software Systems Developer program</a>. So I moved to Vancouver, Canada where I currently live.
                        </p>
                        <p>
                            My story is to be continued.
                        </p>

                    </div>
                    <div className="lg:col-span-5 lg:mt-20">
                        <StaticImage 
                            alt="Photo of Adam Hemzal in a Corporate Building"
                            src="../images/adam-hemzal-about.jpg"
                            className="rounded"
                            loading="eager"
                        />
                    </div>
                </header>

                <section>
                    <h2>Skills</h2>
                    <p>Tools I've used and learned while working on projects throughout the years.</p>
                    <div className="grid gap-6 pt-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"> 
                        {
                            skills.map( (skill) => (
                            <SkillCard
                                key={skill.name} 
                                name={skill.name}
                                icon={skill.icon}
                                link={skill.link}
                            />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2>Personal</h2>
                    <p>Here is my minimal list of things I currently use.<sup>updated Apr 7th, 2022</sup></p>

                    <h3>Software</h3>
                    <ul>
                        <li><strong>OS: </strong>Windows 10</li>
                        <li><strong>Coding: </strong><a href="https://code.visualstudio.com/">VS Code</a></li>
                        <li><strong>Notes: </strong><a href="https://obsidian.md/">Obsidian</a></li>
                        <li><strong>Music: </strong><a href="https://soundcloud.com/adamhemi">SoundCloud</a></li>
                        <li><strong>Misc: </strong><a href="https://www.ghisler.com/">Total Commander</a></li>
                    </ul>

                    <h3>Hardware</h3>
                    <ul>
                        <li><strong>Coding PC: </strong>ThinkPad T460, 16GB RAM, 1TB SSD</li>
                        <li><strong>Keyboard: </strong><a href="https://www.logitech.com/en-ca/products/keyboards/k380-multi-device.920-009599.html">Logitech K380 (great for travelling)</a></li>
                        <li><strong>Laptop stand: </strong><a href="https://nexstand.ca/products/nexstand-k2-laptop-stand-1?shpxid=4bc9296e-6ead-433e-a534-7bc3da098565">Nexstand K2 Portable</a></li>
                    </ul>


                </section>
            </article>
        
        </>
    );
}


export const query = graphql`
query AboutPage {
    allSkillsJson(
      limit: 8
    ) {
      nodes {
        name
        icon
        link
      }
    }
  }
`


