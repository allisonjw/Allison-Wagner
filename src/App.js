import React from "react";
import "./App.scss";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
// import {  } from "./apiCalls";
import { allProjects, contactInfo } from "./allInfo/allInfo";

function App() {
  return (
    <main className="App">
        <Header />
        <About />
        <Contact />
        <Projects />
    </main>
  );
}

export default App;
