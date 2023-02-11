import React, { useState } from "react";
import {Routes, Route} from "react-router-dom"
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

function App() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  });
  const [infoArray, setInfoArray] = useState([]);

  const setterInfo = (obj) => {
    setInfo(obj);
    setInfoArray((infoArray)=>{
      return (
        [...infoArray, {...obj, id:Math.random()*10000}]
      )
    })
  }
  console.log(info);
  console.log(infoArray);


  return (
    <Routes>
      <Route path="/" element={<HomePage nameHandler={setterInfo}/>}></Route>
      <Route path="/list" element={<ListPage listInfo={infoArray}/>}></Route>
    </Routes>
  );
}

export default App;
