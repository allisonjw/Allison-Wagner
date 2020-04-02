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
                <a href={email}>Email</a>
                <span className="contact_icons"><AiOutlineMail /></span>
                </h3>
                <h3 className="contact_h3">GitHub: {gitHub}
                <FaGithub />
                </h3>
                <h3 className="contact_h3">Resume: {linkedIn}
                <TiDocumentText />
                </h3>
                <h3 className="contact_h3">LinkedIn: {resume}
                <FaLinkedinIn />
                </h3>
        </section>
    )
}