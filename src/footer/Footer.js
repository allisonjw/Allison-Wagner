import React from "react";
import "./Footer.scss";
import { contactInfo } from "../allInfo/allInfo";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";

const { email, gitHub, linkedIn, resume } = contactInfo;

export const Footer = () => {
    return (
        <footer>
            <section className="footer_socialMedia-links">
                  <a href={email} 
                    className="footer_socialMedia-img"  
                    aria-label="link to email"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <AiOutlineMail />
                  </a>
                  <a href={gitHub}
                    className="footer_socialMedia-img"  
                    aria-label="link to GitHub"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={resume}
                    className="footer_socialMedia-img"  
                    aria-label="link to resume"                  
                    target="_blank" 
                    rel="noopener noreferrer">
                    <TiDocumentText />
                  </a>
                  <a href={linkedIn}
                    className="footer_socialMedia-img"  
                    aria-label="link to linkedIn"                  
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
            </section>
            <p className="footer_copyright">copyright <AiOutlineCopyright className="copyright_icon" /> Allison Wagner 2020</p>
        </footer>
    )
}