import React, { useRef } from 'react';
import '../styles/style.css';
import Webcam from 'react-webcam';

function CameraView({ta, handleback}) {
    const webcamRef = useRef(null);

    const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    clickedpicture(imageSrc); 
  };

    return (
    <div className="camera-view main-frame">
        <Webcam  ref={webcamRef}
        className="camera-feed"
        screenshotFormat="image/jpeg"/>
        <div className="controls">
            <button className="capture-btn" onClick={capture}>Capture</button>
            <span></span>
            <button onClick={handleback}>back</button>
        </div>
    </div>
);
}
export default CameraView;