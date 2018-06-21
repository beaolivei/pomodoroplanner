import React from 'react'
import Navbar from '../../components/navbar/navbar';
import './insertdata.css'
import Button from '../../components/button/button'
import {Link } from 'react-router-dom'


class InsertData extends React.Component {
    state ={
        name: this.props.name|| '',
        bandName: this.props.bandName || '',
    }
    handleChangeName = e => {
        const inputValue = e.target.value
        this.setState({
            name: inputValue
            
        })
    }
    handleChangeBandName = e => {
        e.stopPropagation()
        const bandName = e.target.value
        console.log('bandname', bandName)
        this.setState({
            bandName: bandName
            
        })

    }
    handleSubmit = e => {
        console.log('funciona')
        const name = this.state.name;
        console.log('name', name)
        localStorage.setItem ('name', JSON.stringify(name))
        const bandNameStorage = this.state.bandName;
        console.log('bandName', bandNameStorage)
        localStorage.setItem ('bandName', JSON.stringify(bandNameStorage))
    }

    render(){

        return (
            <section>
            <Navbar/>
            <form className='formData'onSubmit={this.handleSubmit}>
                <label > What is you name? </label>
                    <input name = 'name' value = {this.state.name} onChange ={this.handleChangeName}/>
                <label> What is your favorite band? </label>
                    <input name = 'bandName' value = {this.state.bandName} onChange ={this.handleChangeBandName}/>
                <Link to='/tasklist' onClick={this.handleSubmit}> 
                    <Button type='submit' buttonText='Continue' backgroundColor='#36853d'/>
                </Link>
            </form>

            </section>
        )
    }
}
export default InsertData