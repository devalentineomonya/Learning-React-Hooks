import React, { useContext } from 'react'
import { LoginContext } from '../useContext/UseContext'

const SinglePost = () => {
    
    const login = useContext(LoginContext);
    console.log(login)
    
  return (
    <div>
      <h2>Single POST component</h2>
    </div>
  )
}

export default SinglePost
