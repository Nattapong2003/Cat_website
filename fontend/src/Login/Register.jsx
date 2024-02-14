import React, { useState } from 'react'
import './log.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
const [inputs, setInputs] = useState({
  name: '',
  email: '',
  password: '',
})  

const handleChange = e => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/auth/register", inputs);
    console.log(res)
  } catch (err) {
    console.log(err)
  }
};


  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type='text' placeholder='email' name='email' onChange={handleChange}/>
            <input type='text' placeholder='username' name='name' onChange={handleChange}/>
            <input type='password' placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Register</button>
            <p>This is an Error!</p>
            <span>
                Don have an account?
                <Link to="/login">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register