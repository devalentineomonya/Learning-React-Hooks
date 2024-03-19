import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayout = () => {
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    console.log("UseEffect");
  }, [toggle]);


  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
  }, [toggle]);


  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>This is Devalentine Learning ReactHookc</p>}
    </div>
  );
};

export default UseLayout;
