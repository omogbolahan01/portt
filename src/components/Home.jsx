import React from "react";
export default function Home() {
  return (
    <div className="home-area">
      <div className="home-first">
        <img src="/images/Ellipse 5.png" alt="" />
        <h2 className="my-header">Asiwaju Ilori-Ojo</h2>
        <h3 className="my-header">
          <span className="span-home">Front-end Developer</span> 🧙‍♂️
        </h3>
        <p className="my-header">
          I specialize in creating clean, responsive, and user-friendly web
          interfaces using modern technologies like HTML5, CSS3, JavaScript, and
          React. Whether it's building dynamic components, optimizing user
          experiences, I’m committed to delivering solutions that are both
          functional and visually appealing.
        </p>
        <a href="mailto:iloriojomodel@gmail.com">
          <button>
            <p>Contact Me</p>
          </button>
        </a>
      </div>
    </div>
  );
}
