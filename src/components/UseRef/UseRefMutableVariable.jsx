import React, { useEffect, useRef, useState } from "react";

const UseRefMutableVariable = () => {
    const [name, setName] = useState("");
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setCount((prev)=>(prev+ 1));
  // })


  // Creating a mutable variable without causing rerender

  
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  console.log(count);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
      <h1>{count.current}</h1>
    </div>
  );
};

export default UseRefMutableVariable;
