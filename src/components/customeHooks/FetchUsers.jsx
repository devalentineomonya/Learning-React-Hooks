import React from 'react'
import useFetch from './useFetch'

const FetchUsers = () => {
const data = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      {data.map((res)=>(
        <h4 key={res.id}>{res.id}. {res.name}</h4>
      ))}
    </div>
  )
}

export default FetchUsers
