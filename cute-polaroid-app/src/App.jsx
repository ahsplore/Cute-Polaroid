import { useState } from 'react'
import './App.css'
import PolaroidFrame from './components/PolaroidFrame'
import CameraView from './components/CameraView'
import EmojiDisplay from './components/EmojiDisplay'

function App() {
  const [targetEmoji, setTargetEmoji] = useState('😊');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const emojis = ['😊', '😁', '😏', '😑', '🤔', '😮', '😘', '😎', '🤨', '😋'];

  const handleCamera = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setTargetEmoji(emojis[randomIndex]);
    setIsCameraActive(true);
  };

  const handleBack = () => {
    setIsCameraActive(false);
    setCapturedImage(null);
  };

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
    setIsCameraActive(false); // go back to Polaroid frame after capture
  };

  return (
    <div>
      {!isCameraActive ? (
        capturedImage ? (
          <PolaroidFrame image={capturedImage} />
        ) : (
          <PolaroidFrame onStartCamera={handleCamera} />
        )
      ) : (
        <div>
          <EmojiDisplay emoji={targetEmoji} />
          <br />
          <CameraView clickedpicture={handleCapture} handleback={handleBack} />
        </div>
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import PolaroidFrame from './components/PolaroidFrame'
// import CameraView from './components/CameraView'
// import EmojiDisplay from './components/EmojiDisplay'

// function App() {
//   const [targetEmoji, setTargetEmoji] = useState('😊');
//   const [isCameraActive, setIsCameraActive] = useState(false);

//   const emojis = ['😊', '😁', '😏', '😑', '🤔', '😮', '😘', '😎', '🤨', '😋'];

//   const handleCamera = () => {
//     const randomIndex = Math.floor(Math.random() * emojis.length);
//     setTargetEmoji(emojis[randomIndex]);
//     setIsCameraActive(true);
//   }
//   const handleback = () => {
//     setIsCameraActive(false);
//   }

//   return (
//     <div>
//       {!isCameraActive ? (<PolaroidFrame onStartCamera={handleCamera}></PolaroidFrame>) : (
//         <><div><EmojiDisplay emoji={targetEmoji}></EmojiDisplay>
//           <br></br>
//           <CameraView handleback={handleback}></CameraView></div></>
//       )}
//     </div>
//   )
// }

// export default App
