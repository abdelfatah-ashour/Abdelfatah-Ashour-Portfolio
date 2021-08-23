import moment from "moment";
import React from "react";
import {FiDownloadCloud} from "react-icons/fi";
import "../assets/css/about.css";
import SEO from "../components/Helmet";
import TopHeading from "../components/TopHeading";

export default function About() {
  return (
    <React.Fragment>
      <SEO title="About me" />
      <main>
        <TopHeading headBack="resume" headFront="about" span="me" />
        <div className="container">
          <div className="about">
            <div className="row h-100">
              <div className="section-personal col-md-6 col-12 mb-2">
                <h3>PERSONAL INFOS</h3>
                <div className="list-personal row d-flex justify-content-evenly align-items-center">
                  <ul className="row list-unstyled">
                    <li className="mb-2" style={{lineHeight: "2.2"}}>
                      First Name : <span>Abdelfatah</span>
                    </li>
                    <li className="mb-2" style={{lineHeight: "2.2"}}>
                      Last Name : <span>Ashour</span>
                    </li>
                    <li className="mb-2" style={{lineHeight: "2.2"}}>
                      Age :{" "}
                      <span>
                        {moment().diff("1994-12-16", "years") + " years"}{" "}
                      </span>
                    </li>
                    <li className="mb-2" style={{lineHeight: "2.2"}}>
                      Nationality : <span>Egyptian</span>
                    </li>
                    <li className="mb-2" style={{lineHeight: "2.2"}}>
                      Freelance : <span>available</span>
                    </li>
                  </ul>
                  <div className="row">
                    <h3 className="text-capitalize">objective</h3>
                    <p>
                      In Jul 2019 I’m started my career shift to web development
                      with HTML-CSS -JavaScript and React.js as a framework for
                      complex projects, I’m looking for an opportunity to get
                      more experience, I have the flexibility to work from
                      anywhere and grow with the team and work together.
                    </p>
                  </div>
                </div>
                <div className="download-cv my-3">
                  <a
                    href="../assets/download/Abdelfatah_Ashour.docx"
                    className="text-uppercase"
                    style={{fontWeight: 700}}
                    download
                  >
                    download CV
                    <strong>
                      <FiDownloadCloud />{" "}
                    </strong>
                  </a>
                </div>
              </div>
              <div className="result-experience col-md-6 col-12 h-100">
                <div className="row d-flex justify-content-evenly align-items-center h-100">
                  <div className="square col-5 mb-2 d-flex flex-column justify-content-center h-50">
                    <div className="num-success">1+</div>
                    <div className="detail-success">YEARS OF EXPERIENCE</div>
                  </div>
                  <div className="square col-5 mb-2 d-flex flex-column justify-content-center h-50">
                    <div className="num-success">6+</div>
                    <div className="detail-success">COMPLETED PROJECTS</div>
                  </div>
                  <div className="square col-5 mb-2 d-flex flex-column justify-content-center h-50">
                    <div className="num-success">♥</div>
                    <div className="detail-success">HAPPY CUSTOMERS</div>
                  </div>
                  <div className="square col-5 mb-2 d-flex flex-column justify-content-center h-50">
                    <div className="num-success">🏆</div>
                    <div className="detail-success">AWARDS WON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
