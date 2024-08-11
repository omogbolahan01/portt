import { React } from "react";
export default function About() {
  return (
    <div className="about-area">
      <div className="about-top">
        <h3 className="my-header">About Me</h3>
        <p className="my-header">Get to know me</p>
      </div>
      <div className="about-write">
        <p className="my-header">
          I'm Asiwaju, a Front-End Developer who enjoys creating visually
          appealing and easy-to-use websites. I work with HTML, CSS, JavaScript,
          and React to bring ideas to life on the web.
        </p>
        <p className="my-header">
          I love solving problems, taking on challenges, and collaborating with
          others to create great projects. My focus is on building websites that
          work well and look great, ensuring they provide a smooth experience
          for users.
        </p>
        <p className="my-header">
          I’m always learning new things and keeping up with the latest web
          trends to improve my skills. My goal is to create websites that people
          enjoy using and that leave a positive impression.
        </p>
      </div>
      <div className="about-button">
        <a href="/Asiwaju-cv.pdf" download="Asiwaju-cv.pdf">
          <button>
            <p>Download Resume</p>
          </button>
        </a>
      </div>
    </div>
  );
}
