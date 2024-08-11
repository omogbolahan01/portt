import React from "react";

export default function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-one">
        <div className="foot-one">
          <h3>Let’s Work Together - </h3>
        </div>
        <div className="foot-two">
          <a href="mailto:iloriojomodel@gmail.com">
            <button aria-label="Contact via email">
              <div className="img-foot">
                <img src="/images/skill.png" alt="Skill Icon" />
              </div>
              <div className="img-ftext">
                <p>iloriojomodel@gmail.com</p>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="empty"></div>
      <div className="footer-two">
        <div className="copy">
          <p>©2024 All rights reserved.</p>
        </div>

        <div className="social-media">
          <a href="">
            <img src="/images/Group2.png" alt="" />
          </a>
          <a href="">
            <img src="/images/Group.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
