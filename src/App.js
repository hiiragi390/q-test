import './App.css';
import { HandleMove } from './Test' 
import ReactDOM from 'react-dom/client';
import { useRef, useEffect, useState } from 'react';
import db from './Firebase';
import Send from './AddData';
import RadioButton from './Radio';
import AddKey from './AddKey';

const Q_list = ["test1", "kinoko"];
const Radio_List = [["満足している","どちらとも言えない","不満がある","利用していない"],["両方好き","きのこの山が好き","たけのこの里が好き","両方好きではない"]];
const Radio_Q_List = ["test1","kinokotakenoko"];
const test1_list = [1,2,3,4];
const kinotake_list = [5,6,7,8];

const App = () => {
  const [selected, setSelected] = useState("");
  const RadiohandleChange = (e) =>{
  setSelected(e.target.value);
}

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
    <div className="App" onLoad={AddKey}>
      <div className="canvasBody">
        <h3 id="test_title">赤羽台キャンパスの食堂について<br></br>パフォーマンス(味、コスパ、営業時間など)に満足していますか</h3>
        
        <div className="test"></div>
        <div className="canvasWrap">
          <p id="test_both">どちらとも言えない</p>
          <p id="test_good">満足している</p>
          <p id="test_bad">不満がある</p>
          <p id="test_none">利用していない</p>
          <div></div>
          <div className="back" id="test1_back"></div>
          <div className="backLayer" id="test1_backLayer"></div>
          <HandleMove classNum={0} Q_id={"test1"}></HandleMove>
        </div>
      </div>


      <div className='radio_test'>
        <h3>赤羽台キャンパスの食堂について<br></br>パフォーマンス(味、コスパ、営業時間など)に満足していますか</h3>
        <RadioButton Q_id={"test1"} option={Radio_List[0]} selected={selected} onChange={RadiohandleChange}></RadioButton>
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
          <HandleMove classNum={1} Q_id={"kinoko"}></HandleMove>       
        </div>
        <h3 className='kinotake_h'>きのこの山/たけのこの里について当てはまるものを<br></br>選んでください</h3>      
      </div>


      <div className='radio_kinoko'>
        <h3>きのこの山/たけのこの里について当てはまるものを<br></br>選んでください</h3>
        <RadioButton Q_id={"kinotake"} option={Radio_List[1]} selected={selected} onChange={RadiohandleChange}></RadioButton>
      </div>

      <div className='button_area'>
        <button onClick={()=>Send(Q_list)}>回答を確定</button>
      </div>

    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

