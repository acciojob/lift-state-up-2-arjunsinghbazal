
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
const [Value,setValue]=useState("");
const Data=(e)=>{
  setValue(e.target.value)
};
  return (
    <div id="parent">
       <h1>Parent Component</h1>
       <p>{Value}</p>
       <Child value={Data}/>
    </div>
  )
}

export default App
