import React from 'react'
import Tasks from '../../components/tasks/tasks.js'
import Title from '../../components/title/title.js'
import './taskList.css'


class TaskList extends React.Component {
        state = {
        tasksList: JSON.parse(localStorage.getItem('tasks')) || [],
        carregando: true
    }
    addNewTask = (task) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.setState ({
            tasksList: tasks
        })
    
    }

    editTaskList = (alteredTask) => {
       this.setState(prevState => {
            return {
                tasksList: prevState.tasksList.map(
                    recentTask => {
                        if (recentTask.id === alteredTask.id) {
                            return alteredTask
                        } else {
                            return recentTask
                        }
                    }
                )
            }
        })
    .catch(error => {
        if (error.response) {
            alert(error.response.data.erro)
        }
    })
    }

    removeTask = (idRemovedTask) => {
       const tasks = JSON.parse(localStorage.getItem('tasks'))
       const filteredTask = tasks.filter (
           task => task.id !== idRemovedTask
       )
       localStorage.setItem('tasks',JSON.stringify(filteredTask))
       this.setState(prevState => {
            return {
                tasksList: prevState.tasksList.filter(
                    task => task.id !== idRemovedTask
                )
                    }
                })
     }
    render() {
        return (
            <div className = 'home'>
                <Title textContent = "Hello, user"/>
                <p> Here you can add your daily tasks, when you click on start button your timer will start </p>
                <Tasks addTask={this.addNewTask}/>
                <h2 className='subtitle'> Task list </h2>
                {this.state.tasksList.map(task => (
                            <Tasks
                                key={task.id}
                                title={task.title}
                                text={task.text}
                                id={task.id}
                                addTask={this.addNewTask}
                                removeButton={this.removeTask}

                            />)
                )}
            </div>
        )
    }
}
export default TaskList