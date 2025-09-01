import React from 'react'
import Nav from './Nav'
import Intro from './Intro'

const Home = () => {
  return (
    <div>
      <Nav LogoName="Hyperveda"/>
      <Nav LogoName="Sagar"/>
      <Intro/>
    </div>
  )
}

export default Home
