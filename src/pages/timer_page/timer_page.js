import React from 'react'
import Timer from '../../components/timer/finalcomposition_timer/timer'
import ShowTask from '../../components/showTask/showTask';
import Title from '../../components/title/title.js'
import { Link } from 'react-router-dom'
import './timer_page.css'


class TimerPage extends React.Component {
    state = {
        tasksList: JSON.parse(localStorage.getItem('tasks')) || []
    }
        
    render () {
    
      
       return (
            <div>
                <Title textContent = 'Let´s get to work!'/> 
                <ShowTask setTitleafterStart = {JSON.parse(localStorage.getItem('title'))} setTextafterStart = {JSON.parse(localStorage.getItem('text'))} />
                <Timer />
                <Link to='/tasklist'>
                    <i class="fas fa-angle-double-left"></i>
                </Link>
                    
                
            </div>
        )
    }
}
export default TimerPage