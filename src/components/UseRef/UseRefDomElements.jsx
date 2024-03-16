import React, { useRef } from 'react'

const UseRefDomElements = () => {
    const inputElement = useRef();
    const clickHandler = ()=>{
        inputElement.current.style.width = '200px';
    };
  return (
    <div>
      <input type="text" ref={inputElement}/>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default UseRefDomElements
