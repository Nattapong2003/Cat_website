import React from 'react'
import Logo from './img/Logo.png'
import {Link} from 'react-router-dom'
import './reveal'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='container '>
            <div className='logo'>
                <Link to="/">
                    <img src={ Logo } alt=''/>
                </Link>
                
            </div>
            <div className='link'>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/product">Adopt/Product</Link>
                    </li>
                    <li>
                        <Link to="/cat">Cat</Link>
                    </li>
                    <li>
                        <Link to="/community">Community</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
                    
                    
                </ul>
                
            </div>
             <span> Nattapong,</span>
            <div className='icon'>
               <span>logout</span>
            </div>
            <button className='btn'>

                <Link   Link to="/product">adopt,Now</Link>
                
            </button>
        </div>
    </div>
  )
}

export default Navbar