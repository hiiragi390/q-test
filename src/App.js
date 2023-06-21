import './App.css';
import { HandleMove } from './Test' 
import ReactDOM from 'react-dom/client';
import { useRef, useEffect } from 'react';
import db from './Firebase';
import Send from './AddData';

const Q_list = ["test1", "kinoko"];

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
        <div className="canvasWrap">
          <div></div>
          <div className="back" id="test1_back"></div>
          <div className="backLayer" id="test1_backLayer"></div>
          <HandleMove body_margin_left={100} body_margin_top={100} classNum={0} Q_id={"test1"}></HandleMove>
        </div>
      </div>
      
      <div className="canvasBody" id="takenoko">
        <div className="test" id="kinoko"></div>
        <img src="./img/kinoko.png" id="only_kinoko"></img>
        <img src="./img/kinoko.png" id="double_kinoko"></img>
        <img src="./img/takenoko.png" id="only_takenoko"></img>
        <img src="./img/takenoko.png" id="double_takenoko"></img>
        <p id="not">×</p>
        <div className="canvasWrap">
          <div></div>
          <div className="back" id="kinoko_takenoko_back"></div>
          <div className="backLayer" id="kinoko_takenoko_backLayer"></div>
          <HandleMove body_margin_left={100} body_margin_top={400} classNum={1} Q_id={"kinoko"}></HandleMove>       
        </div>      
      </div>
      <button onClick={()=>Send(Q_list)}>send</button>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

