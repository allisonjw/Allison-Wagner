import React from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

export const Projects = ({ project }) => {
    const { title, description, gitHub, live, image } = project;

    return (
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
                     target="_blank">
                    <FaGithub className="icon_link"/>
                    </a>
                )}
                {live && (
                    <a href={live} 
                      target="_blank">
                    <MdLaunch className="icon_link"/>
                    </a>
                )}
                </aside>
            </article>
            <article className="image_container">
                <img 
                className="image" 
                src={require("../images/rancid.png")} 
                alt="Project" />
            </article>
        </section>
    )
}