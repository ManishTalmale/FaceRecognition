import React from "react";
import './FaceRecognition.css';


const FaceRecognition = ({ searchImg, box }) => {
    return (
        <div className=" ma">
            <div className="absolute mt2" >
                <img id="inputimage" alt="" src={searchImg} width='500px' height='auto' style={{marginLeft:"400px"}} />
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>   
        )
}
export default FaceRecognition;