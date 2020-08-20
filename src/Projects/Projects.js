import React from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

export const Projects = ({ project }) => {
    const { title, description, gitHub, live, image } = project;
    
    return (
      <div id="projects" className="project_container">
        <section className="projects_section">
          <article className="description_container">
            <h3 className="project_title">
              {title}
            </h3>
              <p className="project_description">
                {description}
              </p>
            <aside className="icon_container">
            {gitHub && (
              <a href={gitHub}
              className="icon_link">
                <FaGithub />
              </a>
            )}
            {live && (
              <a href={live}
              className="icon_link"> 
                <MdLaunch />
              </a>
            )}
            </aside>
          </article>
          <article className="image_container">
            <img 
              className="image"
              src={image}
              alt="Project Information" />
          </article>
        </section>
      </div>
    )
}