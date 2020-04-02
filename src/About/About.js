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
        <section className="about_section">
            <h2 className="about_h2">
                About Me
            </h2>
            <h3 className="about_h3">{name}</h3>
            <h3 className="about_h3">{title}</h3>
            <h3 className="about_h3">{description}</h3>
            <h3 className="about_h3">{image}</h3>
            <aside className="aside_skills">{skillsList()}</aside>
        </section>
    )
}