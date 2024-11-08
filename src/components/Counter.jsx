import React, { useReducer } from 'react'
import { reducer } from './Reducer'

const Counter = () => {
    const [state, dispatch]= useReducer(reducer, {count:0})
  return (
    <div className='container'>
      <h4>this is counter</h4>
      <p>count: {state.count}</p>
      <button className='btn btn-primary mx-2' onClick={()=>dispatch({type: "increment"})}>+</button>
      <button className='btn btn-primary mx-2' onClick={()=>dispatch({type: "decrement"})}>-</button>
    </div>
  )
}

export default Counter
