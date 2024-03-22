import React, { useEffect, useState } from "react";

const PrintTable = (props) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("Print Table Runs!");
    setRows(props.calculateTable());
  }, [props.calculateTable]);
  return (
    <div>
      {rows.map((row, i) => (
        <p key={i}>{row}</p>
      ))}
    </div>
  );
}; 

export default PrintTable;
