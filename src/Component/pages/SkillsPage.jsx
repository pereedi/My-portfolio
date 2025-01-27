import React from 'react'
import NavBar from '../NavBar'
import FooterComponent from '../FooterComponent'
import './SkillsPage.css'

export const SkillsPage = () => {
  return (
    <div>
      <NavBar />
      <div className='pagename'>
        Skills
      </div>
      <div className='card'>

        <div className='skill-list'>
          <div className='skillset'>
            <h3>HTML</h3><span className='percent'>90%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={90}/>
          </div>
          
          <div className='skillset'>
            <h3>CSS</h3><span className='percent'>85%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={85}/>
          </div>

          <div className='skillset'>
            <h3>FIGMA</h3><span className='percent'>85%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={85}/>
          </div>

          <div className='skillset'>
            <h3>JAVASCRIPT</h3><span className='percent'>80%</span>
            <input type="range" id='volume' name='volume'min={1} max={100} value={80} />
          </div>

          <div className='skillset'>
            <h3>REACT</h3><span className='percent'>80%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={80}/>
          </div>

          <div className='skillset'>
            <h3>GIT & GITHUB</h3><span className='percent'>85%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={85}/>
          </div>
          
          <div className='skillset'>
            <h3>POSTMAN API</h3><span className='percent'>75%</span>
            <input type="range" id='volume' name='volume' min={1} max={100} value={75}/>
          </div>
        </div>


      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}
export default SkillsPage