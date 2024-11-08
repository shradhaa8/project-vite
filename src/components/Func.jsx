import React, { useEffect, useState } from 'react'

const Func = () => {
    const [count, setCount]= useState(0)
    // const [message, setMessage]= useState(null)
    // const [notification, setNotification]= useState([])
    console.log("this is bhadra class //rendered");
    
    useEffect(()=>{
      console.log("component mounted");
      return()=>{
        console.log("component will unmount");
        
      }
    },[])
    useEffect(()=>{
      console.log("count updated",count);
    },[count])
    const increment=()=>{
      setCount(count+1)
    }
    

  return (
    <div className='container'>
      <h2>count:{count}</h2>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  )
}

export default Func
