import React from "react";
import Logo from "../../assets/icons/logo.svg?react"
import Union from "../../assets/icons/union.svg?react"

const SiteLogo:React.FC = () =>{
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{marginRight:4}}>
                <Union/>
            </div>
            <Logo/>
        </div>
    )
}

export default SiteLogo;
