import React from "react";
import LinkButton from "../components/LinkButton";

export default function HomePage() {
  return (
    <article className="container pt-10">
      <header className="">
          <h1 className="font-bold">Hey, I'm Adam</h1>
          <h2 className="font-light">Software Engineer with the focus on Front-End, UX & Web 3.0</h2>
      </header>
      <section>
          <h2 className="font-bold"><span>Latest Articles</span> <a href="#allarticles">All Articles</a></h2>
          
      </section>
      <section>
          <h2 className="font-bold">Selected Projects</h2>
          <a href="#allProjects" className="">All Projects</a>
      </section>
      <section>
          <h2 className="font-bold">Skills & Tools</h2>
          <LinkButton path="/about">All Skills</LinkButton>
      </section>
      <button className="btn">Test BTN</button>
    </article>
  );
}
