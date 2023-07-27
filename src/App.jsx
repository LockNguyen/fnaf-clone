import { useEffect, useState } from 'react'
import './styles/App.css';

function Office() {
  const path = "src\\assets\\";
  const _office = "office\\office.png";
  const _leftBtn = "left-door-close\\l-default.png";
  const _rightBtn = "right-door-close\\r-default.png";

  return (
    <>
      <div className="Screen">  
        <div className="Turn Turn-Left" />
        <div className="Turn Turn-Right" />
        <div className="Office-Div">
          <img className="Office" src={path + _office} />
          <img className="Toggle-Left " src={path + _leftBtn} />
          <img className="Toggle-Right" src={path + _rightBtn} />
        </div>
      </div>
    </>
  )
}

function Camera() {
  const path = "src\\assets\\";
  const _camToggle = "office\\cam-toggle.png";

  return (
    <>
      <h1>It's me!</h1>;
    </>
  )
}

function App() {
  const path = "src\\assets\\";
  const _camToggle = "office\\cam-toggle.png";
  const _camOpen = "camera-opening\\opening-cam.gif";
  const _camClose = "camera-opening\\closing-cam.gif";

  // Player's state:
  // 0 - Office
  // 1 - Camera
  const [onCam, setOnCam] = useState(false);
  const [camOpening, setCamOpening] = useState(false);
  const [camClosing, setCamClosing] = useState(false);


  // useEffect(() => {
  //   //
  // }, [onCam, setOnCam]);

  // function switchState() {
  //   if (!onCam) {
  //     setCamOpening(true);
  //     setTimeout(() => {
  //       setCamOpening(false);
  //     }, 400);
  //     setOnCam(true);
  //   } else {
  //     setCamClosing(true);
  //     setTimeout(() => {
  //       setCamClosing(false);
  //     }, 400);
  //     setOnCam(false);
  //   }
  // }

  useEffect((onCam) => {
    if (!onCam) {
      setCamOpening(true);
      setTimeout(() => {
        setCamOpening(false);
      }, 400);
    } else {
      setCamClosing(true);
      setTimeout(() => {
        setCamClosing(false);
      }, 400);
    }
  }, [onCam, setOnCam]);

  return (
    <>
      <div className="Cam-Toggle-Div">
        <img className="Cam-Toggle" src={path + _camToggle} onMouseEnter={() => setOnCam(!onCam)} />
      </div>
      {camOpening && <img src={path + _camOpen} alt="enter camera" className="Cam-Change" /> }
      {camClosing && <img src={path + _camClose} alt="close camera" className="Cam-Change" /> }
      { onCam ? <Camera /> : <Office /> }
    </>
  )
}

export default App
