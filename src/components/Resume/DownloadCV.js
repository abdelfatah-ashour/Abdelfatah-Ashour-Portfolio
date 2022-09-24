import React from "react";
import { Link } from "react-router-dom";

const DownloadCV = () => (
  <div className="references">
    <div className="link-to" id="download cv" />
    <div className="title">
      <h3>Resume</h3>
    </div>
    <div className="jobs-container">
      <h4>
        This resume include brief about me:
        <a
          href="/download/Abdelfatah-Ashour-Frontend-Developer-resume.pdf"
          download
          style={{
            marginLeft: "10px",
            color: "blue",
          }}>
          Download CV
        </a>
      </h4>
    </div>
  </div>
);

export default DownloadCV;
