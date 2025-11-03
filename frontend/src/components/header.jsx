import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const header = ({ theme, setTheme }) =>{
    
    const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
        };

    return(
        <div className="navbar">
            <div className="navbar-left">
                My List
            </div>
            <div className="navbar-center">
                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/contactus">Contact Us</NavLink>
                </nav>
            </div>
            <div className="navbar-right">
                <button>
                    Let's Start
                </button>
                <i 
                    onClick={toggle_mode} 
                    className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}
                />
            </div>
        </div>

    );
};


export default header