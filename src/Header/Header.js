import React from "react";
import "./Header.scss";
import { Navbar } from "../Navbar/Navbar";
import { FaChevronDown } from 'react-icons/fa';

export const Header = () => {
    return (
        <header>
            <h1>
                Allison Wagner || Software Engineer 
            </h1>
            <Navbar />
            <div className="scroll_down">
            <h3>scroll down</h3>
            <FaChevronDown className="header_arrow"/>
            </div>
        </header>
    )
}