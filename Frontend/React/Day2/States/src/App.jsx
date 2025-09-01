import React from 'react'
import { useState } from 'react'
const App = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
      <input type="text" onChange={(e) => console.log(e.target.value)} />

    </div>
  )
}

export default App
