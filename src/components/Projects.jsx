import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "DesignMaxx",
      url: "https://designmaxx.netlify.app",
      technologies: ["CSS3", "React.js"],
    },
    {
      name: "Radiant Glow",
      url: "https://radiant-glow.netlify.app",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      name: "Stratedgee",
      url: "https://stratedgee.netlify.app/",
      technologies: ["CSS3", "React.js"],
    },
    {
      name: "ESSSA",
      url: "https://esssa.netlify.app/",
      technologies: ["CSS3", "React.js"],
    },
    {
      name: "Gbdafri",
      url: "https://gbdafri.netlify.app/",
      technologies: ["CSS3", "React.js"],
    },
    {
      name: "Uwego",
      url: "https://uwego.netlify.app",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
  ];

  return (
    <div className="project-area">
      <div className="about-top">
        <h3 className="my-header">About Me</h3>
        <p className="my-header">Get to know me</p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <iframe
              src={project.url}
              title={project.name}
              className="project-iframe"
            />
            <div className="project--1 my-header">
              <h3>{project.name}</h3>
              <a href={project.url} className="send-image">
                <img src="/images/send.png" alt="" />
              </a>
            </div>
            <div className="projectp">
              <p className="my-header">{project.technologies.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
