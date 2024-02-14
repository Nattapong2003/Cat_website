import React from 'react'
import './aboutus.css'
import Bg from './img/Bgg.jpg'
import {Link} from 'react-router-dom'
import Kittys from './img/Kittys.png'
import Men from './img/men.jpg'
import Him from './img/him.jpg'

function Aboutus() {
  return (
    <div className='A-container' style={{ backgroundImage: `url(${Bg})` }}>
         <div className='content reveal'>
            <h1>Welcome to Cat Hub: </h1>
            <p>  Welcome to Purrfect Pals, your ultimate destination for all things cat! Whether 
                <br/>you're a seasoned cat parent or a cat enthusiast, you've found your purrfect 
                <br/>online home. Dive into a world of expert tips, <br/>heartwarming stories, and adorable cat content. Join our community and let's 
                celebrate the joy of cats together!</p>


    <div className='Card-body'>
   
    <div className='Cardcontainer'>
      
        <div className='Car reveal'>
            <img src={Him}alt=''/>
            <div className='cardconTent'>
                <h3> การรับเลี้ยงแมวจรดีอย่างไร? </h3>
                <p>การรับเลี้ยงแมวเป็นโอกาสที่ดีที่จะสร้างบรรยากาศสุของครอบครัวนอกจากนี้ การรับเลี้ยงแมวยังสามารถเสริมสร้างความสุขและสมดุลในชีวิตประจำวันของเจ้าของด้วยการเสพติดความรู้สึกของความพอใจและการผ่อนคลายที่มาพร้อมกับการอยู่ร่วมกับแมวที่น่ารักอย่างสิ้นเชิง ดังนั้น การรับเลี้ยงแมวจรเป็นการตัดสินใจที่ดีที่จะเพิ่มคุณค่า
                  และความสุขในชีวิตประจำวันของเราได้อย่างแท้จริง</p>

                <button className='Btn2'>
                  <Link to="/cat"  style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link>
                </button>
                
            </div>
        </div>

        <div className='Car up'>
            <img src={Men} alt=''/>
            <div className='cardconTent'>
                <h3>เหตุผลที่คุณควรมีแมว</h3>
                <p>การมีแมวเป็นสัตว์เลี้ยงช่วยเพิ่มความสุขในชีวิตประจำวันของคุณ ด้วยความน่ารักและความฮาที่มักจะทำให้คุณยิ้มได้ทุกวัน.
                  <br/>การดูแลแมวส่งผลให้คุณเรียนรู้การรับผิดชอบและการให้รักและการดูแลสิ่งมีชีวิตอื่น.
                  <br/>การมีสัตว์เลี้ยงมักจะลดความเหงาและเครียด แมวสามารถเป็นเพื่อนที่ดีในเวลาที่คุณต้องการคนที่จะพูดคุยหรือรักษาต่อสมดุลทางจิตใจ.
                </p>

                <button className='Btn2'>
                  <Link to="/product"  style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link>
                </button>
            </div>
        </div>

        
    </div>

    </div>
         </div>
        
        <div className='about'>
            <img src={ Kittys } alt='' className='kitty-img'/>
        </div>
       
    </div>
  )
}

export default Aboutus