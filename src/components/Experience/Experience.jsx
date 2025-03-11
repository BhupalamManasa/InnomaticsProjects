import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_img.svg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="experience-container">
        <div className="experience-format">
          <h3>Full Stack Developer Intern</h3>
          <h2>Innomatics Research Labs</h2>
          <p>Jan (2025) - Present</p>
          <div className="experience-batches">
            <span className="experience-batch">HTML</span>
            <span className="experience-batch">CSS</span>
            <span className="experience-batch">JavaScript</span>
            <span className="experience-batch">Bootsrap</span>
            <span className="experience-batch">React</span>
            <span className="experience-batch">Node.js</span>
            <span className="experience-batch">Expres.js</span>
            <span className="experience-batch">Mongo DB</span>
          </div>
        </div>
        
        </div>
      </div>
  );
};

export default Experience;
