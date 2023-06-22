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
        <h3 id="test_title">赤羽台キャンパスの食堂について<br></br>パフォーマンス(味、コスパ、営業時間など)に満足していますか</h3>
        
        <div className="test"></div>
        <div className="canvasWrap">
          <p id="test_good">満足している</p>
          <p id="test_bad">不満がある</p>
          <p id="test_none">あまり利用していない</p>
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
          <HandleMove body_margin_left={100} body_margin_top={300} classNum={1} Q_id={"kinoko"}></HandleMove>       
        </div>      
      </div>
      <button onClick={()=>Send(Q_list)}>send</button>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

