import React from 'react'
import FaClose from 'react-icons/lib/fa/close'
import Button from '../button/button'
import { Route, Switch, Redirect } from 'react-router-dom'
import Timer from '../../pages/timer/timer.js'
import './tasks.css'


class Tasks extends React.Component {
    constructor (props){
        super (props);
        console.log('props no construtor', this.props)
        this.state = {
        title: this.props.title ||  '',
        text: this.props.text || '',
        id: this.props.id || '',
        editing: this.props.editing || false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
       
       
    
    handleSubmit = e => {
        if (!this.state.id) {
        e.preventDefault()

        const id = `7f80f378-9c93-4b9c-bf54-8fea1f${Math.floor((Math.random() * 100) + 1)}d42`

        const task = {
            title: this.state.title,
            text: this.state.text,
            id: id,
        }

        this.setState ({  id: id })
        console.log('props', this.props)
        this.props.addTask(task)
    } else {
          <Route exact path="/timer" render= {Timer} />
    }

        
    

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
                    <button className='closeButtonStyle'>
                        <FaClose />
                    </button>
                    <input className='inputStyle' name = 'title' value = {this.state.title} placeholder ='Add Title ...' onChange ={this.handleChange}/>
                    <textarea className='textAreaStyle' name='text' value = {this.state.text} placeholder ='Add some extra info, maybe?' onChange = {this.handleChange}/>
                    <Button marginLeft='270px' buttonText = {!this.state.id ?'Add Task' : "Start"}/>
           </form>
        )
    }

}
export default Tasks