import Test1 from "./Test1";
import Test2 from "./Test2";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route, Router, Routes } from "react-router-dom";


const Q_list = ["test_dim", "kinoko"];
const Radio_List = [["満足している","どちらとも言えない","不満がある","利用していない"],["両方好き","きのこの山が好き","たけのこの里が好き","両方好きではない"]];
const Radio_Q_List = ["test_dim","kinokotakenoko"];
const test1_list = [1,2,3,4];
const kinotake_list = [5,6,7,8];
const test1_timer = 0;
const kinotake_timer = 0;

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
    <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Test1 />}></Route>
        <Route path="/even" element={<Test2 />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

