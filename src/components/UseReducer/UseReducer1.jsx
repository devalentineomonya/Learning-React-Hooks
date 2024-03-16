import React, { useReducer } from "react";


const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useReducer(reducer);

  const increaseCount = () => {
    dispatch({ type: ACTION.INCREASE });
  };

 const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE });
  };


  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default UseReducer1;


const ACTION ={
    INCREASE: "increase",
    DECREASE: "decrease",
} 
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};