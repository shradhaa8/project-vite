import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
    const {id} = useParams();
  return (
    <div>
    <h2>User Details</h2>
    <h4>User: {id}</h4>
    </div>
  )
}

export default Details
