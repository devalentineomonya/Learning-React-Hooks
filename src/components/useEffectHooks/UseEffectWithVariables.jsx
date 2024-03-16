import React, { useEffect, useState } from "react";
import UseEffectWithoutDependancy from "./UseEffectWithoutDependancy";
const UseEffectWithVariables = () => {
  const [otherCount, setOtherCount] = useState(5);
  
  useEffect(() => {
    document.title = `${otherCount} New messages!`;
  }, [otherCount]); //Change the state only when OtherCount is changed
  return (
    <div>
      <>
        <UseEffectWithoutDependancy />
        <h3>Other Count:{otherCount}</h3>
        <button
          onClick={() => {
            setOtherCount(otherCount + 1);
          }}
        >
          Increase
        </button>
      </>
    </div>
  );
};

export default UseEffectWithVariables;
