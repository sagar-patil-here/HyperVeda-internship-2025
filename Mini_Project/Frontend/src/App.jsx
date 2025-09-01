import React from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()  //it will erase all the data from the form after submitting the form
    axios.post('http://localhost:8000/data', { name, branch, mobile, email })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
        
        <label htmlFor="branch">Branch:</label>
        <input type="text" name="branch" id="branch" placeholder="Enter your branch" onChange={e => setBranch(e.target.value)}/>
        
        <label htmlFor="mobile">Mobile:</label>
        <input type="text" name="mobile" id="mobile" placeholder="Enter your mobile number" onChange={e => setMobile(e.target.value)}/>
        
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App