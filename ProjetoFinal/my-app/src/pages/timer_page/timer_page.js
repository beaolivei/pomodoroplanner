import React from 'react'
import Timer from '../../components/timer/finalcomposition_timer/timer'
import ShowTask from '../../components/showTask/showTask';

class TimerPage extends React.Component {
    state = {
        tasksList: JSON.parse(localStorage.getItem('tasks')) || []
    }
    render () {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const key = JSON.parse(localStorage.getItem('key')) || []
        console.log (JSON.parse(localStorage.getItem('tasks')))
        console.log (tasks[1].title)
        console.log (key)
        let newTasks = tasks.filter( (value) => {
            return value !== key
        }

        )
        console.log ('newTask', newTasks)
        // }
        return (
            <div>
                <ShowTask setTitleafterStart = {this.setTitleafterStart} setTextafterStart = {this.setText}/>
                <Timer />
            </div>
        )
    }
}
export default TimerPage