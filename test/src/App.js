import './App.css';
import { HandleMove } from './Test' 
import ReactDOM from 'react-dom/client';
import { useRef, useEffect } from 'react';

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
      <div className="canvasWrap">
        <div className="back"></div>
        <div className="backLayer"></div>
        <HandleMove></HandleMove>
      </div>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

