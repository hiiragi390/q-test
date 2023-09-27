import './App.css';
import { HandleMove } from './Circle_copy' 
import { useRef, useEffect, useState } from 'react';
import db from './Firebase';
import Send from './AddData';
import RadioButton from './Radio';
import AddKey from './AddKey';
import TwoDimMove from './TwoDim';

const Q_list = ["test_dim", "kinoko"];
const Radio_List = [["満足している","どちらとも言えない","不満がある","利用していない"],["両方好き","きのこの山が好き","たけのこの里が好き","両方好きではない"]];
const Radio_Q_List = ["test_dim","kinokotakenoko"];
const test1_list = [1,2,3,4];
const kinotake_list = [5,6,7,8];
const test1_timer = 0;
const kinotake_timer = 0;

const Test2 = () => {

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
      <div className="canvasBody" id="test3">
        <h3 id="test1_title">「きのこの山」と「たけのこの里」は」<br></br>好きですか？</h3>
        
        <div className="test"></div>
        <div className="canvasWrap">
          <p className="f_kinoko">きのこの山</p>
          <p className="f_take">たけのこの里</p>

          <p className="good_h">好き</p>
          <p className="bad_h">好きではない</p>
          <p className="good_w">好き</p>
          <div></div>
          <div className="backLayer" id="test1_backLayer"></div>
          <div className="back" id="test1_back"></div>
          <div className="back2" id="test1_back2"></div>
          <div className="X_high"></div>
          <div className="Y_high"></div>
          {/*<HandleMove classNum={0} Q_id={"test1"}></HandleMove>*/}
          <TwoDimMove classNum={0} Q_id={"Test2_dim"}></TwoDimMove>
        </div>
      </div>

      
      <div className="canvasBody" id="test2">
        <h3 id="test2_title">Python, java script<br></br>それぞれの基本的なプログラムが書けますか？</h3>
        
        <div className="test"></div>
        <div className="canvasWrap">

          <p className="both">両方書ける</p>
          <p className="py">Pythonが<br></br>書ける</p>
          <p className="js">java scriptが<br></br>書ける</p>
          <p className="ot">どちらも書けない</p>
          <div></div>

          <div className="handleBack"></div>
          <div className="handle_backLayer" id="test2_back"></div>
          <div className='handle_b1'></div>
          <div className='handle_b2'></div>
          <div className='handle_b3'></div>
          <div className='handle_b4'></div>
          {/*<HandleMove classNum={0} Q_id={"test1"}></HandleMove>*/}
          <HandleMove classNum={1} Q_id={"Test1_hand"}></HandleMove>
        </div>
      </div>

      {/*<TwoDimMove classNum={0} Q_id={"test1"}></TwoDimMove> */}
      
{/*
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
        <button onClick={()=>[Send(Q_list)]}>回答を確定</button>
      </div>
  */}
  </div>
  );
}

export default Test2;

