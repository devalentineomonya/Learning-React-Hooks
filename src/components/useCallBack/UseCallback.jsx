import React, { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

const calculateTable = useCallback(()=>{
    return [number * 1, number * 2, number * 3, number * 4, number * 5];

},[number])

  const cssStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };


//   const calculateTable = () => {
//     return [number * 1, number * 2, number * 3, number * 4, number * 5];
//   };

  return (
    <div style={cssStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
    </div>
  );
};

export default UseCallback;
