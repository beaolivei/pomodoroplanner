import React from 'react'
import {ic_close} from 'react-icons-kit/md/ic_close'
import Button from '../button/button'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import TimerPage from '../../pages/timer_page/timer_page'
import './tasks.css'


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
    // createKeyonLocalStorage = e => {
    //     e.stopPropagation() 
    //     const id = this.state.id
    //     localStorage.setItem('key', JSON.stringify(id))


    // }
    addTitleandTexttoLocalStorage = (e) => {
    e.stopPropagation()
    const title = this.state.title
    localStorage.setItem ('title', JSON.stringify(title))
    const text = this.state.text
    localStorage.setItem ('text', JSON.stringify(text))
}
    render () {
        return (
            <form className='formStyle' id='{this.addId}' onSubmit={this.handleSubmit}>
                    {this.state.id && <button className='closeButtonStyle'
                    type="button"
                    onClick={this.handleRemoveButtonOnClick}>
                        <ic_close />
                    </button>}
                    <input className='inputStyle' name = 'title' value = {this.state.title} placeholder ='Add Title ...' onChange ={this.handleChange}/>
                    <textarea className='textAreaStyle' name='text' value = {this.state.text} placeholder ='Add some extra info, maybe?' onChange = {this.handleChange}/>
                    <div className='buttonS'>
                        {!this.state.id ?
                        <Button type = 'submit' marginLeft='5em'  display='block' backgroundColor='rgb(110, 197, 76)' buttonText = 'Add Task' /> :                    
                        <Link to ="/timer" onClick={this.addTitleandTexttoLocalStorage} >
                            <Button type = 'submit' marginLeft='4.7em'display='block' backgroundColor='rgb(110, 197, 76)' buttonText = "Begin" 
                            
                
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