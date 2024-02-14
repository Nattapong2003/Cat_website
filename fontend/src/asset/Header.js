import React from 'react'
import wallpaper from './img/wallpaper.jpg'
import './Header.css'
import './reveal'
import './up'
import {Link} from 'react-router-dom'

function Header() {
  return (

    <div className='homepage' style={{ backgroundImage: `url(${wallpaper})` }}>
    <div className='screen reveal'>
      <h1>Welcome to Cat Hub: </h1>
      <h2>Your Resource for Cat Care and Companionship</h2>
      <p> your one-stop destination for all things cat! From  
        <br/>expert advice to adorable cat content, 
        <br/>we're here to help you and your kiity.</p>
      <button className='Btn1 up'>

        <Link to="/product"  style={{ textDecoration: 'none', color: 'inherit' }}>Adopt now</Link>
        
      </button>
    </div>
    </div>

    
  )
}

export default Header