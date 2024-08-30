import React from 'react'
import brandLogo from './assets/brand_logo.png'

const Navigation = () => {
  return (
    <div className='navigation'> 
       <img src={brandLogo} alt="brand_logo"/>
       <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About </li>
        <li>Contract</li>
       </ul>
       <button>Login</button>
    </div>
  )
}

export default Navigation
