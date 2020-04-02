import React from "react";
import "./Header.scss";
import { FaChevronDown } from 'react-icons/fa';

export const Header = () => {
    return (
        <header>
            <h1>
                Allison Wagner || Software Engineer 
            </h1>
            <div class="scroll_down">
            <h3>scroll down</h3>
            <FaChevronDown />
            </div>
        </header>
    )
}