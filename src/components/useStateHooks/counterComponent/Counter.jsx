import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      
      <h1>Count:{counter}</h1>
      <button onClick={incrementCounter}>Increase</button>
    </div>
  );
};

export default Counter;
