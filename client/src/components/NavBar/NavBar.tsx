import React from "react";
import {NavLink} from "react-router";
import "./NavBar.scss"

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li className="nav_item">
                    <NavLink to="/discover">Discover</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/my-plants">My Plants</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/diseases">Diseases</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;
