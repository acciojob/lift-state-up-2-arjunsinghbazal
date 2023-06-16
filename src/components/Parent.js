import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            {inputValue && <p>{inputValue}</p>}
            <ChildComponent inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

export default Parent;