import React from "react";
import "./Contact.scss";
import { contactInfo } from "../allInfo/allInfo";
import { AiOutlineMail } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const { email, gitHub, linkedIn, resume } = contactInfo;

export const Contact = () => {
    return (
        <section id="contact" className="contact_section">
            <h2 className="contact_h2">
                Contact Me
            </h2>
                <h3 className="contact_h3">Email 
                  <a href={email} 
                    className="contact_link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <AiOutlineMail />
                  </a>
                </h3>
                <h3 className="contact_h3">GitHub 
                  <a href={gitHub}
                    className="contact_link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </h3>
                <h3 className="contact_h3">Resume 
                  <a href={resume}
                    className="contact_link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <TiDocumentText />
                  </a>
                </h3>
                <h3 className="contact_h3">LinkedIn 
                  <a href={linkedIn}
                    className="contact_link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </h3>
        </section>
    )
}