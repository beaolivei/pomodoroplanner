import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TimerPage from '../../pages/timer_page/timer_page'


const TaskForm = styled.form `
    display: block;
    border-style: solid;
    border: 5px solid #030056;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    padding: 5% 0 0 5%;
    margin: 0 0 3% 0;
    @media (max-width: 600px) {
        height: 100%;
        width: auto;
    }
`
const TaskInput = styled.input `
    padding: 3% 26%;
    border-radius: 10px;
    border-style: none;
    display: block;
    margin: 0 0 5%;
    font-family: montserrat;
    font-size: 20px;
    color: #030056;
    @media (max-width: 600px) {
        margin: 0;
        padding: 3% 2%;
    }
`
const TaskTextarea = styled.textarea `
    padding: 9% 27%;
    border-radius: 10px;
    border-style: none;
    display: block;
    font-family: montserrat;
    font-size: 20px;
    color: #030056;
    @media (max-width: 600px) {
        padding: 9% 4%
        margin: 2% 0;
`
const Button = styled.button `
    display: button; 
    background-color: #00f9ff;
    border-radius: 15px;
    border-style: none;
    font-family: montserrat;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;  
    color: #030056;
    padding: 2% 10%;
    margin: 2% 0 0 30%;
    @media (max-width: 600px) {

    }
`
const ClosingButton = styled.button `
    background: none;
    border: none;
    width: auto;
    margin: -3% 0 0 0;
`
const DivForButtons = styled.div `
    display: flex;
    @media (max-width: 600px) {
        display: block;
    }
`
const StyledLink = styled(Link) `
    width: 100%;

`

class Tasks extends React.Component {
    constructor (props){
        super (props);
        this.state = {
        title: this.props.title ||  '',
        text: this.props.text || '',
        id: this.props.id || '',
        key:this.props.key || '',
        editing: this.props.editing || false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleSubmit = e => {
        console.log ('estou funcionando')
        e.preventDefault()
        const id = `7f80f378-9c93-4b9c-bf54-8fea1f${Math.floor((Math.random() * 100) + 1)}d42`

        const task = {
            title: this.state.title,
            text: this.state.text,
            id: id,
        }

        this.setState ({  id: id })
    

        this.props.addTask(task)
    
        this.setState ({
            title:'', 
            text: '',
            id: '',
            editing: false
        })
    

    }

    handleRemoveButtonOnClick = e =>{
        e.stopPropagation()

        const id = this.state.id

        this.props.removeButton(id)

        this.setState({
            editing: false
        })
}
    editButtonClick = e => {
        e.stopPropagation()
        this.setState({
         title: '',
         text: '',
       });

    }
    handleChange = e => {
        const inputName = e.target.name
        const inputValue = e.target.value

        this.setState({
            [inputName]: inputValue
            
        })
    }
    addTitleandTexttoLocalStorage = (e) => {
    e.stopPropagation()
    const title = this.state.title
    localStorage.setItem ('title', JSON.stringify(title))
    const text = this.state.text
    localStorage.setItem ('text', JSON.stringify(text))
}
    render () {
        return (
            <TaskForm className='formStyle' id='{this.addId}' onSubmit={this.handleSubmit}>
                    {this.state.id && <ClosingButton className='closeButtonStyle'
                    type="button"
                    onClick={this.handleRemoveButtonOnClick}>
                        <img src={require('./close.png')}/>
                    </ClosingButton>}
                    <TaskInput className='inputStyle' name = 'title' value = {this.state.title} placeholder ='Add Title ...' onChange ={this.handleChange}/>
                    <TaskTextarea className='textAreaStyle' name='text' value = {this.state.text} placeholder ='Add some extra info, maybe?' onChange = {this.handleChange}/>
                        {!this.state.id ? 
                            <Button type = 'submit'onClick = {this.addTask}>Add Task</Button>  :    
                            <DivForButtons>  
                                {this.state.id && 
                                    <Button type='button' onClick = {this.editButtonClick}> Edit Task </Button>
                                }            
                                <StyledLink to ="/mytimer" onClick={this.addTitleandTexttoLocalStorage}>
                                    <Button type ='submit'> START </Button>
                                </StyledLink>
                            </DivForButtons>  }


           </TaskForm>
        )
    }

}

export default Tasks