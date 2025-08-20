import { useState } from 'react';
import List from './Components/List';
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
        <><h1>You are Logged out !!</h1>
        <button onClick={()=>setIsLogged(true)}>Login..</button></>
        
      )}

      <List/>
    </div>
  );
}

export default App;
