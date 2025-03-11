import React from "react";
import "./Hero.css";
import profile from "../../assets/pic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "My_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img className="hero-profile" src={profile} alt="profile" />
      <h1>
        Hello !<span> I'm Manasa Bhupalam,</span> Full Stack Developer{" "}
      </h1>
      <p>
        I'm a creative Full Stack Developer passionate about intuitive UIs and
        seamless digital experiences. As a fresher, I excel in modern frontend
        technologies while growing my backend skills to transform ideas into
        impactful applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <div className="hero-resume" onClick={handleDownload}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
