
import './App.css';
import React from "react";
import Home from './Page/Home';
import Product from './Page/Product.jsx';
import Cat from './Page/Cat.jsx';
import Context from './Page/Context.jsx';
import About from './Page/About.jsx';
import Commu from './community/Home.jsx';
import Login from './Login/Login.jsx'
import Register from './Login/Register.jsx';

import Navbar from './asset/Navbar.js';
import { Route, Routes } from 'react-router-dom'
 

function App() {
  return (
    <div >
      

      <div>
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/about" element= {<About />}/>
          <Route path="/product" element= {<Product />}/>
          <Route path="/cat" element= {<Cat />}/>
          <Route path="/community" element= {<Commu />}/>
          <Route path="/context" element= {<Context />}/>
          <Route path="/login" element= {<Login />}/>
          <Route path="/register" element= {<Register />}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
