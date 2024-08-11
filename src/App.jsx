import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import About from "./components/About";
import "./App.css";

const App = () => (
  <div className="App">
    <Navigation />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="footer">{/* <Contact /> */}</section>
    <Footer />
  </div>
);

export default App;
