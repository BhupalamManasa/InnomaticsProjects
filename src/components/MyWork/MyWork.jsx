// src/components/MyWork.jsx
import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_img.svg";
import mywork_data from "../../Data/MyWork";
import { FaGithub } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id="project" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div1 className="work_item" key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={work.w_link}
              className="work_link"
            >
              <img src={work.w_img} alt="" className="work_img" />
            </a>
            <h2 className="work_title">{work.w_title}</h2>
            <p className="work_description">{work.w_description}</p>
            <div className="work-info">
              {/* <h3>{work.w_name}</h3> */}

              {/* GitHub Button */}
              <a
                href={work.github_link} 
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub className="github-icon" />
                GitHub
              </a>
            </div>
          </div1>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
