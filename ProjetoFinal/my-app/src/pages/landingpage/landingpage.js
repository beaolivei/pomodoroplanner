import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Button from '../../components/button/button'
import {Link } from 'react-router-dom'

import './landingpage.css'
class LandingPage extends React.Component {
    render() {
        return (
            <body className='is-touch'>
                <Navbar />
                <section id='intro' className='main style1 dark fullscreen'>
                    <div className='content'>
                        <header>
                            <h2> Pomodoro Planner </h2>
                        </header>
                        <p className='headerParagraph'> Helping you to manage your time in a more wise and effective way </p>
                        <a><i href='#one'className="far fa-arrow-alt-circle-down" > </i> </a>

                    </div>
                </section>
                <section id='one'>
                    <div className='main style2'>
                        <div className='aboutPomodoro'>
                            <h3 className='textAboutPomodoro'> About Pomodoro </h3>
                            <p className='textAboutPomodoro'>
                                For many people, time is an enemy. We race against the clock to finish assignments 
                                and meet deadlines. The Pomodoro Technique teaches you to work with time, 
                                instead of struggling against it. A revolutionary time management system, it is at once 
                                deceptively simple to learn and life-changing to use.
                            </p>
                        </div>
                    </div>
                </section>
                <section id='two'>
                <div className='main style3'>    
                        <div className='howCanWeHelp'>
                            <h3 className='texthowCanWeHelp'> And ... What can we do for you? </h3>
                            <p className='texthowCanWeHelp'>
                                In our app you can create a list with your tasks for the day. When you 
                                are ready to start them just press the "begin" button and we will set your 25 minutes timer up! </p>
                        </div>
                        <Link to='/tasklist'>
                            <button className='buttonLandingPage'> Let´s do it! </button>
                        </Link>
                </div>
                </section>
            </body>
        )
    }
}
export default LandingPage