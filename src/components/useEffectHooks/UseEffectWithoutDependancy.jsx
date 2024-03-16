import React, { useEffect, useState } from 'react'

const useEffectWithoutDependancy = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `${count} Clickes`
    })
  return (
    <div>
      <h1>You have clicked the button {count} times</h1>
   <button onClick={()=>{setCount(count + 1)}} type="button">Increment</button>
    </div>
  )
}

export default useEffectWithoutDependancy
