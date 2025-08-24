import React from "react";
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function PolaroidFrame({onStartCamera}) {
    return (
    <div className="main-frame">
        <div className="header">
            
        </div>
        <div className="main-content">
            <h2>Take a selfie with your <br></br> emoji expression!</h2>
            <p>Get ready to match your best emoji face!</p>
        </div>
        <button className="camera-btn" onClick={onStartCamera}><FontAwesomeIcon icon={faCamera} /> start camera</button>
    </div>
);
}
export default PolaroidFrame;