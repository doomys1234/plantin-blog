import React from "react";
import { NavLink, useLocation } from "react-router";
import ArrowSeparator from "../../assets/icons/chevron_left.svg?react"
import "./BreadCrumbs.scss";

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <div aria-label="breadcrumb">
            <ul className="breadcrumbs">
                <li className="breadcrumbs_item">
                    <NavLink to="/">Home</NavLink>
                </li>
                {pathnames.map((pathname, index) => {
                    const fullPath = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <li key={fullPath} className="breadcrumbs_item">
                            <ArrowSeparator/>
                            <NavLink
                                className={`breadcrumbs-name ${isLast ? "disabled" : "enabled"}`}
                                to={fullPath}>{pathname}</NavLink>
                            <ArrowSeparator/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;

