import React, { useState } from 'react'

const GetInput = () => {
    const [name, setName] = useState("");
    
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
      /> <h1>You have Entered "{name}"</h1>
    </div>
  )
}

export default GetInput
