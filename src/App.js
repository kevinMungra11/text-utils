import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Alert from "./Component/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [btnState, setbtnState] = useState("Enable Darkmode");

  const [btnColor, setbtnColor] = useState("dark");

  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setmode("light");
      showAlert("Dark mode has been disabled","success");
      setbtnColor("dark");
      setbtnState("Enable Darkmode");
      document.body.style.backgroundColor = 'white';
    }else{
      setmode("dark");
      showAlert("Dark mode has been enabled","success");
      setbtnColor("light");
      setbtnState("Disable Darkmode");
      document.body.style.backgroundColor = '#042743';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyzse below" mode={mode} btnColor={btnColor} />
      </div>

       </>
  );
}

export default App;
