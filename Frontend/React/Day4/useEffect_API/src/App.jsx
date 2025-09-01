// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     console.log("App Running..")
//   },[])

//   useEffect(()=>{
//     console.log("Count Changed.......")
//   },[count])

//   return (
//    <>
//    <h1>Count: {count}</h1>
//    <button onClick={()=>setCount(count+1)}>Count++</button>
//    </>
//   )
// }

// export default App



// -----------------------------------------------------------------------------------------------

// Api Fetch code below



import React from 'react'
import Users from './Users'

const App = () => {
  return (
    <div>
      <Users/>
    </div>
  )
}

export default App
