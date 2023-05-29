import React from "react";
import Tilt from 'react-tilt'
import icon from './icon.png'
import './logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt4">
            <Tilt className="Tilt br-5 shadow-5 abc" options={{ max: 35 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <img style={{paddingTop: '15px',marginLeft:"15px"}} alt="" src={icon}></img> </div>
            </Tilt>
        </div>
    )
}
export default Logo;