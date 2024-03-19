import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const GetTextDimensions = () => {
  const textDisplay = useRef(null); // Define textDisplay using useRef
  const [toggle, setToggle] = useState(false);

  useLayoutEffect(() => {
    if (toggle && textDisplay.current) {
      const textBoxDimensions = textDisplay.current.getBoundingClientRect();
      textDisplay.current.style.paddingTop = `${textBoxDimensions.height}px`;
      console.log(textBoxDimensions);
    }
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && (
        <p ref={textDisplay}>This is Devalentine Learning ReactHooks</p>
      )}
      <p>HELLO</p>
    </div>
  );
};

export default GetTextDimensions;
