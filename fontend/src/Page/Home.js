import React from 'react'
import Header from '../asset/Header'
import Section from '../asset/Section'
import Aboutus from '../asset/Aboutus'
import Footer from '../asset/Footer'
import Navbar from '../asset/Navbar'

function Home() {
  return ( 
    <div>
      <Navbar />
      <Header />
      <Section />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default Home