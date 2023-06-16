import React from "react";

const Child=({value})=>{
return(
   <>
    <h1>Child Component</h1>
    <input type="text" onChange={value}/>
   </>
)
}

export default Child;