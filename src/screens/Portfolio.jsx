import React from "react";
import "../assets/css/portfolio.css";
import Helmet from "../components/Helmet";
import PreviewProjects from "../components/PreviewProjects";
import TopHeading from "../components/TopHeading";
import {projects} from "../utilities/previewProjectsData.js";

export default function Portfolio() {
  return (
    <React.Fragment>
      <Helmet title="Portfolio" />
      <TopHeading headBack="works" headFront="my" span="portfolio" />
      <div className="container">
        {projects.map(project => {
          return <PreviewProjects project={project} key={project._id} />;
        })}
      </div>
    </React.Fragment>
  );
}
