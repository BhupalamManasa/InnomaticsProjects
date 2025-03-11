import React from "react";
import "./About.css";
 import theme_pattern from "../../assets/theme_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        { <img src={theme_pattern} alt="theme_pattern" /> }
      </div>
      <div className="about-sections">


        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Manasa Bhupalam, a dedicated Full Stack Developer with a
              strong foundation in modern web technologies. Though I'm at the
              start of my career, I've already had the chance to collaborate on
              innovative projects, contributing fresh ideas to build seamless,
              user-centric applications.
            </p>
            <p>
              My passion for full-stack development shines through in the
              creativity and commitment I bring to every project, as I
              continuously strive to transform challenges into impactful digital
              experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>SQL </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
