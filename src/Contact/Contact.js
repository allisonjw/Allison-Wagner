import React from "react";
import "./Contact.scss";
import { contactInfo } from "../allInfo/allInfo";
import { AiOutlineMail } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const { email, gitHub, linkedIn, resume } = contactInfo;

export const Contact = () => {
    return (
        <section className="contact_section">
            <h2 className="contact_h2">
                Contact Me
            </h2>
                <h3 className="contact_h3">Email: 
                <a href={email}>allisonjw01@gmail.com</a>
                <span className="contact_icons"><AiOutlineMail /></span>
                </h3>
                <h3 className="contact_h3">GitHub: 
                <a href={gitHub}>github.com/allisonjw</a>
                <FaGithub />
                </h3>
                <h3 className="contact_h3">Resume: 
                <a href={resume}>Allison_wagner_resume.pdf</a>
                <TiDocumentText />
                </h3>
                <h3 className="contact_h3">LinkedIn: 
                <a href={linkedIn}>github.com/allisonjw</a>
                <FaLinkedinIn />
                </h3>
        </section>
    )
}