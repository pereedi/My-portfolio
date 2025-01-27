import './FirstPageMain.css'

import React from 'react'

import ibrand_icon from './assets/ibrand logo 1.svg'
import bankable_wisdom from './assets/bankablewisdom1.svg'
import Xrpl_icon from './assets/xrpl1.svg'
import Mac_icon from './assets/macoprahTech.svg'
import FME_icon from './assets/fME1.svg'

function Imageslide() {
    return (
        <div>
            <div className='slider'>
                <div className='slidetrack'>
                    <div className='slide'>
                        <img src={ibrand_icon} alt="" />
                    </div>
                    <div className='slide'><
                        img src={bankable_wisdom} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={Xrpl_icon} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={Mac_icon} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={FME_icon} alt="" />
                    </div>


                    <div className='slide'>
                        <img src={ibrand_icon} alt="" />
                    </div>
                    <div className='slide'><
                        img src={bankable_wisdom} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={Xrpl_icon} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={Mac_icon} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={FME_icon} alt="" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Imageslide