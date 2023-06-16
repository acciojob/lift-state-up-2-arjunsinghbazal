import React from "react";

const Child=({value})=>{
return(
   <div id="child"><h1>Child Component</h1>
   <input type="text" onChange={value}/></div>
)
}

export default Child;