import React from 'react'
import styled from 'styled-components'
import Tasks from '../../components/tasks/tasks.js'
import { Link } from 'react-router-dom'
import Title from '../../components/title/title.js'
import './taskList.css'
import BackgroundImage from './backgroundImage.gif'

const TaskListSection = styled.section `
    height: 1000px;
    background-image: url(${BackgroundImage});
    background-position-x: -104%;
    @media (max-width: 600px) {
        height: 100%
    }
`
const ButtonForIcons = styled.button `
    background: none;
    border: none;
    width: auto;
    margin: 0 0 0 -60%;
`
const WelcomeBox = styled.div `
        background-color: #8ffcffb8;
        padding: 5% 30% 3% 29%;
        @media (max-width: 600px){
            padding: 0 0 0 0;
        }

`
const ReturnArrowImage = styled.img `
    margin: -6% 0 0 -55%;
    @media (max-width: 600px) {
        margin: 0 0 0 2%;
    }
    
`
const PageTitle = styled.h1 `
    font-family: montserrat;
    font-size: 30px;
    color: #030056;
    text-align: center;
    margin: 0 0 3% 0;
    @media (max-width: 600px) {
        text-align: center;
        padding: 0 0 0 0;
    }
`
const Paragraph = styled.p `
    font-family: montserrat;
    color: #030056;
    text-align: center;
    font-size: 20px;
    line-height: 250%;
    margin: 0 0 3% 0;
    @media (max-width: 600px){
        width: auto;
        padding: 4% 10% 0 10%;
        line-height: 150%;
        }
`
const TaskListBox = styled.div `
    display: block; 
    padding: 5% 30% 0 30%;
    background-color: #8ffcff;
`
const TaskListTitle = styled.h2 `
    font-family: montserrat;
    text-align: center;
    color: #030056;
    font-size: 30px;
    padding: 5% 0;

`


class TaskList extends React.Component {
        state = {
        tasksList: JSON.parse(localStorage.getItem('tasks')) || [],
        carregando: true,
        name: JSON.parse(localStorage.getItem('name')),
        didUserStartAddingTaskAlready: false
    }

    addNewTask = (task) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.setState ({
            tasksList: tasks,
            didUserStartAddingTaskAlready: true
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
    }

    removeTask = (idRemovedTask) => {
       const tasks = JSON.parse(localStorage.getItem('tasks'))
       const filteredTask = tasks.filter (
           task => task.id !== idRemovedTask
       )
       console.log (tasks)
       localStorage.setItem('tasks',JSON.stringify(filteredTask))
       this.setState(prevState => {
            return {
                tasksList: prevState.tasksList.filter(
                    task => task.id !== idRemovedTask
                )
                    }
                })
     }
     filterTaskforTimer = (idSelectedTask) => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        const selectedTask = tasks.filterIndex (
            (id) => {
                return (
                    id === idSelectedTask
                )
            }
        )
        localStorage.setItem('tasks',JSON.stringify(selectedTask))

     }
     goBackToWelcomeBox = () => {
         this.setState ({
             didUserStartAddingTaskAlready: false,
         })
     }
    render() {
        let namefromLocalStorage = localStorage.getItem('name')
        return (
            <TaskListSection>
                {!this.state.didUserStartAddingTaskAlready ?
                    <WelcomeBox>
                        <Link to='/insertdata'>
                            <ReturnArrowImage src ={require ('./leftArrow.png')}/>
                        </Link>
                        <PageTitle>Hello, {this.state.name != "" ? this.state.name : "lovely stranger"}!</PageTitle>                
                        <Paragraph> Here you can add all the taks you want to do during the day. You add a title and more information if you want. Once you are ready to start, click in the button and your 15 minutes time will start running. Once your time is up, your favorite artist will start playing and you get 5 minutes. If your done with that task you let us know and get back to your other tasks or you have more 15 minutes in that one. Good work and let's be super productive! </Paragraph>
                        <Tasks addTask={this.addNewTask}/>
                    </WelcomeBox> :
                    <div>
                        <TaskListBox> 
                            <ButtonForIcons onClick = {this.goBackToWelcomeBox}>
                                <ReturnArrowImage src ={require ('./leftArrow.png')}/>
                            </ButtonForIcons>
                            <Tasks addTask={this.addNewTask}/>
                            <TaskListTitle className='subtitle'> Task list </TaskListTitle>
                            {this.state.tasksList.map(task => (
                                    <Tasks
                                        key={task.id}
                                        title={task.title}
                                        text={task.text}
                                        id={task.id}
                                        addTask={this.addNewTask}
                                        removeButton={this.removeTask}
                                        editLocalStorage = {this.filterTaskforTimer}
                                        didUserStartAddingTaskAlready = {this.state.didUserStartAddingTaskAlready}
                                    />)
                        )}
                        </TaskListBox>
                    </div>
                }
        
        </TaskListSection>  
        )
}
}
export default TaskList                        