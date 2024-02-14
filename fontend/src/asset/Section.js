import React from 'react'
import './sestion.css'
import cat1 from './img/cat1.jpg'
import cat2 from './img/cat2.jpg'
import cat3 from './img/cat3.jpg'
import cat4 from './img/cat4.jpg'
import './reveal.js'
import './up.js'
import {Link} from 'react-router-dom'

function Section() {
  return (
    <div className='Cardbody'>
   
    <div className='card-container'>
      
        <div className='Card reveal'>
            <img src={cat1} alt=''/>
            <div className='card-content '>
                <h3> Cat knowledge </h3>
                <p>Explore insightful articles, fun facts, 
                  and helpful tips curated to deepen your understanding of these enchanting creatures.  </p>

                <button className='Btn2'>
                  <Link to="/cat"  style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link>
                </button>
                
            </div>
        </div>

        <div className='Card up'>
            <img src={cat4} alt=''/>
            <div className='card-content'>
                <h3>Adopt and  Find products</h3>
                <p>we have everything your furry friend needs to live their best nine lives. Browse our collection now and treat your cat to something special!</p>

                <button className='Btn2'>
                  <Link to="/product"  style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link>
                </button>
            </div>
        </div>

        <div className='Card reveal'>
            <img src={cat3} alt=''/>
            <div className='card-content'>
                <h3>Cat community</h3>
                <p> functions as we explore communication cues, instinctual habits, and more. Let's deepen our bond with our furry friends together!</p>
                <button className='Btn2'>
                  <Link to="/cat"  style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link>
                </button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Section