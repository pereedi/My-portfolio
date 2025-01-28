import React from 'react'
import './ProjectPage.css'
import FooterComponent from '../FooterComponent'
import NavBar from '../NavBar'
import quickfiller_photo from '../assets/quickfil-mock.png'
import download_icon from '../assets/icon-download.png'
import { Link } from 'react-router-dom'
import Travelgoo_mock from '../assets/Travel-goo-mock.png'

export const ProjectPage = () => {
  return (
    <div>
      <NavBar />
      <div className='pagename'>
        Projects
      </div>
      <div className='card'>
      <div>

      <div>
       <img src={quickfiller_photo} alt="quick-filler-project" />
       <div className='button-div'>
        <h2>Quick Filler Application</h2>
        <Link to='https://quick-filler.vercel.app/'><button>Click here to view 
          <img src={download_icon} alt="download-icon" />
        </button></Link> 
       </div>
      </div>

      <div>
        <img src={Travelgoo_mock} alt="trevelgoo-image" />
      </div>
      
      </div>
      


      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
   
  )
}

export default ProjectPage