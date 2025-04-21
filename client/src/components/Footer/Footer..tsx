
import React from 'react';
import "./Footer.scss"

const Footer:React.FC = ()=>{
    return(
        <footer className="footer">
            <ul className="footer_links">
                <li className="footer_links-item">
                    <a className="footer_link" href="#">
                        Terms of Service
                    </a>
                </li>
                <li className="footer_links-item">
                    <a className="footer_link" href="#">
                        Privacy Policy
                    </a>
                </li>
                <li className="footer_links-item">
                    <a className="footer_link" href="#">
                        Subscription Policy
                    </a>
                </li>
            </ul>
            <div className="footer_rights">
                <span>© Copyright © 2020 PlantIn.</span>
                <span>All rights reserved</span>
            </div>
        </footer>

    )
}

export default Footer;
