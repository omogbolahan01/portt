import React from "react";

const Navigation = () => (
  <nav className="navigation">
    <div className="nav-title">
      <h3>Asiwaju</h3>
    </div>
    <div className="nav-list">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">Resume</a>
        </li>
      </ul>
    </div>
    <div className="nav-button">
      <a href="mailto:iloriojomodel@gmail.com">
        <button>
          <p>Contact Me</p>
        </button>
      </a>
    </div>
  </nav>
);

export default Navigation;
