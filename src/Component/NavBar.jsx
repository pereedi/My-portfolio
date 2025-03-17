import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import button_icon from './assets/Button.png'
import { useState } from 'react';



import mail_icon from './assets/mailcircle.png'
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className='Nav-head'>
                <div className='Nav-left'>
                    <Link to="mailto:pereedi@gmail.com"><img src={mail_icon} alt="email-icon" /></Link>
                    <Link to="/pereedi" ><h3>pereedi</h3></Link>
                </div>
                <div className='Nav-right'>
                    <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
                        <Link to="/project"><h3>Project</h3></Link>
                        <Link to="/skills"><h3>Skills</h3></Link>
                        <Link to="/contact"><h3>Contact</h3></Link>
                    </div>
                    <img src={button_icon} alt="hamburger-button" className="button-icon" onClick={toggleMenu} />
                </div>
            </div>
        </div>
    );
};


export default NavBar