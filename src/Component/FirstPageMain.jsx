import React from 'react'
import './FirstPageMain.css'
import { Link } from 'react-router-dom'


import profile_photo from './assets/Maskgroup.png'

export const FirstPageMain = () => {
  return (
    <div>
         <div className='profile-intro'>
            <img src={profile_photo} alt="" />
            <h3>EDI PEREMOBOWEI <br />
            OPUOGIDI
            </h3>
         </div>

         <div className='intro-contents'>
           
         <div>
            <h1>
            I’M A WEB DEVELOPER <br />
             AND FRONT END <br />
             ENGINEER
            </h1>
         </div>

         <div>
            <p>
            Experienced in designing, developing, and optimizing <br />
             innovative platforms, including Quick Filler, and <br />
              contributing to technology-focused projects. Skilled in <br />
              leveraging software development knowledge and <br />
              problem-solving expertise to deliver sustainable and <br />
               impactful solutions.
            </p>
         </div>
         <Link to="/contact"><button>CONNECT WITH ME</button></Link>
      
         </div>
            
    </div>
  )
}

export default FirstPageMain