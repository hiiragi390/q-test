import './App.css';
import { HandleMove } from './Test' 
import ReactDOM from 'react-dom/client';
import { useRef, useEffect } from 'react';
import db from './Firebase';
import Send from './AddData';

const App = () => {
  // target.addEventListener('mousedown', (e) => {
  //   HandleMove(e);
  // });

  // const canvasRef = useRef(null)

  // const getContext = () => {
  //   const canvas = canvasRef.current;

  //   return canvas.getContext('2d');
  // };

  // useEffect(() => {
  //   const ctx = getContext();
  //   ctx.save();
  // })

  return (
    <div className="App">
      <div className="canvasBody">
        <div className="test"></div>
        <img src="./img/kinoko.png" id="only_kinoko"></img>
        <img src="./img/kinoko.png" id="double_kinoko"></img>
        <img src="./img/takenoko.png" id="only_takenoko"></img>
        <img src="./img/takenoko.png" id="double_takenoko"></img>
        <p id="not">×</p>
        <div className="canvasWrap">
          <div></div>
          <div className="back"></div>
          <div className="backLayer"></div>
          <HandleMove></HandleMove>
          <button onClick={Send}>send</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

