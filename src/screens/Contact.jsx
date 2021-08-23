import React from "react";
import {FaFacebookF, FaGithub, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import {SiGmail, SiUpwork} from "react-icons/si";
import "../assets/css/contact.css";
import SEO from "../components/Helmet";
import TopHeading from "../components/TopHeading";

export default function Contact() {
  return (
    <React.Fragment>
      <SEO title="Contact me" />
      <TopHeading headBack="contact" headFront="get in" span="touch" />
      <main className="contact">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6 col-8 d-flex flex-column flex-wrap justify-content-start  align-items-center">
              <div>
                <span>
                  <FaPhoneAlt />
                </span>
                (+20) 11-209-74272
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <SiUpwork />
                </span>
                hire me in
                <a
                  href="https://www.upwork.com/freelancers/~0146ebe1c16dd6c829"
                  target="_blank"
                  rel="noreferrer"
                >
                  UPWORK
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <FaLinkedin />
                </span>
                <a
                  href="https://www.linkedin.com/in/abdelfatah-ashour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abdelfatah Ashour
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <SiGmail />
                </span>
                abdelfatahashour4@gmail.com
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <FaFacebookF />
                </span>
                <a
                  href="https://www.facebook.com/abdelfatahashour7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abdelfatah Ashour
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <FaGithub />
                </span>
                <a
                  href="https://github.com/abdelfatahashour4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abdelfatah Ashour
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
