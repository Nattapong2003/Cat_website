import React from 'react'
import './log.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='username'/>
            <button>Login</button>
            <p>This is an Error!</p>
            <span>
                Don't have an account?
                <Link to="/register">Register</Link>
            </span>
        </form>
    </div>
  )
}

export default Login