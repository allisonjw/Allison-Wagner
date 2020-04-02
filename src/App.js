import React from "react";
import "./App.scss";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
// import {  } from "./apiCalls";
import { allProjects } from "./allInfo/allInfo";
import Fade from 'react-reveal/Fade';

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
        <Fade bottom>
          <Projects />
        </Fade>
    </main>
  );
}

export default App;
