import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p className="text-center">{'This magic brain will detect the faces from your image'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-60 center input" onChange={onInputChange}></input>
                    <button className="w-20 grow f4 link ph3 pv2   bg-blue"  onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;