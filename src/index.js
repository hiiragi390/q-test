import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test1 from "./Test1";
import Test2 from "./Test2";
import { HashRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
if(container){
  const root = ReactDOM.createRoot(container);
  root.render(
    <div>
    <React.StrictMode >
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Test1 />}></Route>
          <Route path="/even" element={<Test2 />}></Route>
        </Routes>
        </HashRouter>
    </React.StrictMode>
    </div>
  );
}
else{
  console.log("tst");
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
