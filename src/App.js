import React from "react";
import "./App.scss";
import { Navbar } from "./Navbar/Navbar";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
import { Footer } from "./Footer/Footer";
// import {  } from "./apiCalls";
import { allProjects } from "./allInfo/allInfo";
import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';

function App() {
  return (
    <main className="App">
        <Header />
        <Navbar />
        <Fade bottom>
          <About />
        </Fade>
        <Fade bottom>
          <Contact />
        </Fade>
        <h2 className="projects_heading">My Work</h2>
        <Fade bottom>
          <Projects project={allProjects[0]}/>
          <Projects project={allProjects[1]}/>
          <Projects project={allProjects[2]}/>
          <Projects project={allProjects[3]}/>
          <Projects project={allProjects[4]}/>
        </Fade>
        <Footer />
    </main>
  );
}

export default App;
