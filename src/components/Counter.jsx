import React from 'react'

const Counter = ({count,onIncrement,onDecrement}) => {
  return (
    <div>
        <h1 className="">Child Component</h1>
        <div className="flex ">
            <button onClick={onIncrement} className=""> INCREMENT </button>
            <span className="">{count}</span>
            <button onClick={onDecrement} className="">Decrement</button>
        </div>
    </div>
  )
}

export default Counter