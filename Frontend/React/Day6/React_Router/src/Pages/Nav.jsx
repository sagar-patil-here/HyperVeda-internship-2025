import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}><h1>Home</h1></NavLink>
    <br />
     <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}><h1>About</h1></NavLink>
     <br />
      <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} ><h1>Contact</h1></NavLink>
    
    
    
    </>
    
  );
}




export default Nav