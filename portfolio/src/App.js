import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
