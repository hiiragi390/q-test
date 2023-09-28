import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test1 from "./Test1";
import Test2 from "./Test2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
if(container){
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/q-test/" element={<Test1 />}></Route>
          <Route path="/q-test/even" element={<Test2 />}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );
}
else{
  console.log("tst");
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
