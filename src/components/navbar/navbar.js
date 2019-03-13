import React from 'react'
import './navbar.css'
import Logo from './pomodoroPlannerLogo.png'
import {Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <nav className='nav'>
            <img className='logo' src={Logo}/>
            <li>
                <ul> 
                    <Link to='/'>
                    <a href="#LearnMore">Learn More</a> 
                    </Link>       
                    </ul>
                <ul> 
                    <Link to='/insertdata'>
                    Get started 
                    </Link>
                </ul>  
            </li>
        </nav>
    )
}
export default Navbar