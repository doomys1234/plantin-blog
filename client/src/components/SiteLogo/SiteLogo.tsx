import React from "react";
import Logo from "../../assets/logo.svg?react"
import Union from "../../assets/union.svg?react"

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
