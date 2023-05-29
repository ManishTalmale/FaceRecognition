import React from "react";
import Logo from "../Logo/Logo";


const Navigation = () => {
    return (
        <div>       
        <nav >
       <div style={{display: 'flex',justifyContent:'space-between'}}>
        <Logo/>
        </div>    
        </nav>
        </div>
    )
}
export default Navigation;