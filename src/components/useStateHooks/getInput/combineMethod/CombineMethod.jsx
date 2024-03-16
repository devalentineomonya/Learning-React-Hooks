import React, { useState } from "react";

const CombineMethod = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });
  const increaseCount = () => {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };
  const changeText = (name)=>{
    setDetails((prev) => ({
        ...prev,
        name: prev.name = name
    }))
  }
  return <div>
    <input onChange={(e)=>changeText(e.target.value)} type="text" name="" id="" />
    <button onClick={increaseCount}>INCREMENT</button>
  <h1>You have entered: {details.name} and Clicked the button {details.counter} times</h1>
  </div>;
};

export default CombineMethod;
