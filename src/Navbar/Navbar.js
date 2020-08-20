import React from 'react';
import "./Navbar.scss";

export const Navbar = () => {
    return (
        <nav className="navbar_list">
                <a href="#about"  
                  className="navbar_list-item">
                      About
                </a>
                <a href="#contact"
                  className="navbar_list-item">
                      Contact
                </a>
                <a href="#projects"
                  className="navbar_list-item">
                      Projects
                </a>
        </nav>
    )
}