import React from 'react'

const Nav = (props) => {
  return (
    <>
        <div style={
            {
                height : '50px',
                width : '100%',
                alignItems : 'center',
                padding : '20px',
                margin:'30px',
                display : "flex",
                backgroundColor : 'red',
                color : 'black',
                justifyContent : 'space-between'
            }
        }>
        <div>{props.LogoName}</div>
        
        <div>About  Contact  Login</div>
        
        </div>
      
    </>
  )
}

export default Nav
