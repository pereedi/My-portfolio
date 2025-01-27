import React from 'react'
import './FooterComponent.css'
import { Link } from 'react-router-dom'

export const FooterComponent = () => {
  return (
    <div>
        <footer className='footer-card'>
 
        <div className='foot-pairs'>
        <Link to="/contact"><h3>Connect</h3></Link>
          
           <Link to="/skills"><h3>skills</h3></Link>
         
        
           <Link to="/project"><h3>projects</h3></Link>
          </div>

         
          <div className='foot-pairs'>
           <Link to="/contact"><h3>Contact</h3></Link>
          
           <Link to="https://github.com/pereedi"><h3>GitHub</h3></Link>
          
           <a href="#"><h3>Telegram</h3></a>
          </div>

          <div className='foot-pairs'>
           <Link to="https://www.facebook.com/login/"><h3>Facebook</h3></Link>
        
           <Link to="https://www.instagram.com/"><h3>Instagram</h3></Link>
          
           <Link to="https://x.com/Pere6IX"><h3>Twitter X</h3></Link>
          </div>
          
        </footer>
        
      </div>
  )
}


export default FooterComponent