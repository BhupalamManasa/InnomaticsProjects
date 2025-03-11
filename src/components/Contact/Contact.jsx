import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_img.svg";
import email_logo from "../../assets/email-logo.png";
import lindin_logo from "../../assets/linkdin-logo.png";
import github_logo from "../../assets/github-logo.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents page refresh on submit
    // Does nothing for now
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm available for new opportunities, projects, or collaborations!
            Feel free to reach out if you have any work or ideas you'd like to
            discuss. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_logo} alt="email" />
              maanasabhupalam@gmail.com
            </div>
            <div className="contact-detail">
              <img src={lindin_logo} alt="" />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/manasa-bhupalam-127118270"
                rel="noopener noreferrer"
              >
                Bhupalam Manasa
              </a>
            </div>
            <div className="contact-detail">
              <img src={github_logo} alt="" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/BhupalamManasa/"
              >
                ManasaBhupalam
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact_right">
          <label htmlFor="name">Your Name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            required
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            required
            name="message"
            rows="4"
            placeholder="Enter your message"
            id="message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
