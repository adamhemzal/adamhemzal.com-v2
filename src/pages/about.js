import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutPage() {
    return (
        <article className="container pt-12">
            <header className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-7 text-justify">
                    <h1 className="">About me</h1>
                    <p>
                        Hi, my name is Adam and I'm a Czech currently living in Vancouver, Canada. I love being creative and express myself through design, code and writing. I enjoy software engineering because it allows me to blend engineering with design and build beautiful & useful things for people.
                    </p>
                    <p>
                        For a long time I didn't know who I want to become. Luckily, I found my passion in 2015 when I was in the second year of my studies at Prague University of Business and Economics. In that year I was introduced to HTML, CSS & JavaScript and I immediately fell in love.
                    </p>
                    <p>
                        Since than I've been helping various clients in the online world. Designing, building websites and small applications as well as communication were parts of my routine alongside with studying at university.
                    </p>
                    <p>
                        Year 2020 was really tough for everyone because of a virus pandemic. While I was being stuck in Czech Republic, working non-stop from home, I become eager to see the world outside of the Europe and I wanted to fully dive deep into software engineering. 
                    </p>
                    <p>
                        In 2021 I was accepted to British Columbia Institute of Technology (BCIT), Software Systems Developer program. So I packed my necessary stuff and flew to Vancouver, Canada where I currently live.
                    </p>
                    <p>
                        My story is to be continued.
                    </p>

                </div>
                <div className="md:col-span-5">
                    <img className="rounded" src="https://picsum.photos/600/900" alt="whatever" />
                </div>
            </header>
            <section>
                
            </section>
        </article>
    );
}
