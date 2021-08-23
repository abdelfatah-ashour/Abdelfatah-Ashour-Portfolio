import React from "react";
import {AiOutlineGithub} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";

export default function PreviewProjects({project}) {
  return (
    <div className="project" key={project.name}>
      <div className="project-img">
        <img src={project.image} alt={project.name} loading="lazy" />
      </div>
      <div className="project-details">
        <h2 className="text-capitalize">{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <div className="project-links">
        <a href={project.live} target="_blank" rel="noreferrer">
          <BiLinkExternal />
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <AiOutlineGithub /> GitHub
        </a>
      </div>
    </div>
  );
}
