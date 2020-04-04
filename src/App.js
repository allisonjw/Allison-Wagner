import React from "react";
import "./App.scss";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
// import {  } from "./apiCalls";
import { allProjects } from "./allInfo/allInfo";
import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';

function App() {
  return (
    <main className="App">
        <Header />
        <Fade bottom>
          <About />
        </Fade>
        <Fade bottom>
          <Contact />
        </Fade>
        <Fade right>
          <Projects project={allProjects[0]}/>
        </Fade>
        <Fade left>
          <Projects project={allProjects[1]}/>
        </Fade>
        <Fade right>
          <Projects project={allProjects[2]}/>
        </Fade>
        <Fade left>
          <Projects project={allProjects[3]}/>
        </Fade>
        <Fade right>
          <Projects project={allProjects[4]}/>
        </Fade>
        <Fade left>
          <Projects project={allProjects[5]}/>
        </Fade>

    </main>
  );
}

export default App;
