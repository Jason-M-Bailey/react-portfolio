import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Homepage() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Homepage;
