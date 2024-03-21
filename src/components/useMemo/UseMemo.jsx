import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const useMemoValue = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  
  const cssStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={cssStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <h2>Calculation: {useMemoValue}</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};
function expensiveFunction(num) {
  console.log("Loop started");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num;
}

export default UseMemo;
