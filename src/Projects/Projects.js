import React from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

export const Projects = ({ project }) => {
    const { title, description, gitHub, live, image } = project;

    return (
        <section className="projects_section">
      <article className="description_container">
        <h3 className="title">
          {title}
        </h3>
        <p className="description">
          {description}
        </p>
        <aside className="icon_container">
          {gitHub && (
            <a href={gitHub} target="_blank">
              <FaGithub />
            </a>
          )}
          {live && (
            <a href={live} target="_blank">
              <MdLaunch />
            </a>
          )}
        </aside>
      </article>
      <article className="image_container">
        <img className="image" src={image} alt="Project" />
      </article>
    </section>
    )
}