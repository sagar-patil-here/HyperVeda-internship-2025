import { useState } from 'react';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
       <div>
        <h1>Hi</h1>
        <button onClick={()=>setIsLogged(false)}>Logout..</button></div>
        
      ) : (
        <button onClick={()=>setIsLogged(true)}>Login..</button>
      )}
    </div>
  );
}

export default App;
