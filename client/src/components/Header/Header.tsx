import React, {useState} from "react";
import NavBar from "../NavBar/NavBar.tsx";
import SiteLogo from "../SiteLogo/SiteLogo.tsx";
import Search from "../../assets/icons/search.svg?react"
import Menu from "../../assets/icons/menu.svg?react"
import Profile from "../../assets/icons/profile.svg?react"
import Button from "../Button/Button.tsx";
import useIsMobile from "../../hooks/useIsMobile.tsx"
import "./Header.scss"
const Header: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div className="header">
            {isMobile && <SiteLogo/>}
            {(!isMobile || showPopup) && <NavBar/>}
            {isMobile ?
                <div className="button_actions">
                <Button className={"search_button"} onClick={() => console.log('SEARCH me')}><Search/></Button>
                <Button className={"menu_button"} onClick={(): void => setShowPopup(!showPopup)}><Menu/></Button>
                </div> : (
                    <div className="button_actions">
                        <Button className={"search_button"} onClick={() => console.log('SEARCH me')}><Search/></Button>
                        <Button className={"search_button"} onClick={() => console.log('SEARCH me')}><Profile/></Button>
                    </div>
                )
            }

        </div>
    )
}

export default Header;
