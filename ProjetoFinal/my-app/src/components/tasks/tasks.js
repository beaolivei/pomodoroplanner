import React from 'react'
import {ic_close} from 'react-icons-kit/md/ic_close'
import Button from '../button/button'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Timer from '../../pages/timer/timer.js'
import './tasks.css'


class Tasks extends React.Component {
    constructor (props){
        super (props);
        this.state = {
        title: this.props.title ||  '',
        text: this.props.text || '',
        id: this.props.id || '',
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
    render () {
        return (
            <form className='formStyle' onSubmit={this.handleSubmit}>
                    {this.state.id && <button className='closeButtonStyle'
                    type="button"
                    onClick={this.handleRemoveButtonOnClick}>
                        <ic_close />
                    </button>}
                    <input className='inputStyle' name = 'title' value = {this.state.title} placeholder ='Add Title ...' onChange ={this.handleChange}/>
                    <textarea className='textAreaStyle' name='text' value = {this.state.text} placeholder ='Add some extra info, maybe?' onChange = {this.handleChange}/>
                    <div className='buttonS'>
                        {!this.state.id ?
                        <Button type = 'submit'  backgroundColor='rgb(110, 197, 76)' buttonText = 'Add Task' /> :                    
                        <Link to ="/timer" >
                            <Button type = 'submit' backgroundColor='rgb(110, 197, 76)' margin='5px' buttonText = {!this.state.id ?'Add Task' : "Start"} 
                
                        />
                        </Link>}
                        {this.state.id && <Button  type='button' backgroundColor='rgb(122, 118, 110)' buttonText= 'Edit Task' onClick = {this.editButtonClick}/>
                        }
                    </div>

           </form>
        )
    }

}
export default Tasks