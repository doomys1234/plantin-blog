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
type NavBarProps = {
    onNavBarClick: () => void;
}
const NavBar: React.FC<NavBarProps> = ({onNavBarClick}) => {
    return (
        <nav>
            <ul className="nav_list">
                {navLinks.map((link) => (
                    <li className="nav_item" key={link.path}>
                        <NavLink to={link.path} onClick={onNavBarClick}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
