import React from "react";
import {NavLink} from "react-router";
import "./NavBar.scss"

const navLinks = [
    { path: "/discover", label: "Discover" },
    { path: "/my-plants", label: "My Plants" },
    { path: "/diseases", label: "Diseases" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact-us", label: "Contact Us" },
];

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul className="nav_list">
                {navLinks.map((link) => (
                    <li className="nav_item" key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
