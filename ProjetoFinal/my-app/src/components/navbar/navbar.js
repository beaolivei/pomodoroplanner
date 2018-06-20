import React from 'react'
import './navbar.css'
import Tomato from './tomatoDoodle.jpg'

function Navbar (props) {
    return (
        <nav className='nav'>
            <img className='logo' src={Tomato}/>
        </nav>
    )
}
export default Navbar