import React from 'react'


import './Nav.css'
import FooterComponent from './FooterComponent'
import Imageslide from './Imageslide'
import FirstPageMain from './FirstPageMain'
import NavBar from './NavBar'



export const LandingPage = () => {
  return (
    <div>
        <div>
         <NavBar/>
        </div>
         <div>
         <FirstPageMain/>
         </div>

          <div>
          <Imageslide/>
          </div>
         
         <div>
            <FooterComponent/>
         </div>
    </div>
  )
}

export default LandingPage