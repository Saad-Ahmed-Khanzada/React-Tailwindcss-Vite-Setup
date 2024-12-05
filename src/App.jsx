import  { useState } from 'react'
import Counter from './components/Counter'
import ReduxCounter from './components/CounterRedux'
const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = ()=>setCount(count+1)
  const decrement = ()=>setCount(count-1)
  
  return (
    <div>

      {/* Parent Child Relation Code */}
      {/* <h1 className="">Parent component</h1>
      <p className="">Current count: {count}</p>

      <h1 className="">
        <Counter count={count} onIncrement={increment} onDecrement={decrement} />
      </h1> */}

      <h1 className="">
          Redux Counter
      </h1>
      <h1>
        <ReduxCounter/>
      </h1>
    </div>
  
  
  )
}

export default App

