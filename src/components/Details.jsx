import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
    const {id} = useParams();
  return (
    <div>
    <h4>Client: {id}</h4>
    </div>
  )
}

export default Details
