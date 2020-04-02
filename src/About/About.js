import React from "react";
import "./About.scss";
import { contactInfo } from "../allInfo/allInfo";

const { name, title, description, image, skills } = contactInfo;

export const About = () => {
    const skillsList = () => {
        return skills.map(skill => {
          return (
            <p className="skill" key={skill}>
              {skill}
            </p>
          );
        });
      };
    
    return (
        <div className="about_container">
            <section className="about_section">
                <h2 className="about_h2">
                    About Me
                </h2>
                <h3 className="about_h3">{name}  ||  {title}</h3>
                <h3 className="about_h3">{description}</h3>
                <h3 className="about_h3">{image}</h3>
            </section>
            <aside className="aside_skills">
                <h3 className="about_skills">Skills:</h3>
                <h4>{skillsList()}</h4>
            </aside>
        </div>
    )
}