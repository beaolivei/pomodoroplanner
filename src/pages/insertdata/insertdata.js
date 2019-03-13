import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import BackgroundImage from './backgroundImage.jpg'


const InsertDataSection = styled.section `
    height: 1000px;
    background-image: url(${BackgroundImage});
    background-size: cover;
    padding: 6% 38% 0 32%;
    @media (max-width: 600px) {
        padding: 6% 0 0 0;
        height: 700px;
    }
`
const ReturnArrowImage = styled.img `
    margin: -28% 0 0 -80%;
    @media (max-width: 600px) {
        margin: 0 0 0 2%;
    }
    
`
const PageTitle = styled.h1 `
    font-family: montserrat;
    text-align: center;
    color: #8ffcff;
    font-size: 30px;
    padding: 15% 10% 8%;
`
const FormBox = styled.div `
    background-color: rgba(9,0,255,0.77);
    height: 650px;
    border-radius: 60px;
    @media (max-width: 600px){
        border-radius: 0;
    }
`
const Form = styled.form `
    padding: 10% 0 0 20%;
    @media (max-width: 600px){
        padding: 10% 0 0 15%;
    }
`
const FormLabel = styled.label `
    font-family: montserrat;
    font-size: 20px;
    color: #8ffcff;
    display: block;
    padding: 5% 10%;
`
const FormInput = styled.input `
    padding: 2% 13%;
    border-radius: 10px;
    border-style: none;

`
const Button = styled.button `
    display: flex; 
    background-color: #00f9ff;
    border-radius: 15px;
    border-style: none;
    font-family: montserrat;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    color: #030056;
    padding: 2% 5%;
    margin: 15% 0 0 19%;
`
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
        const name = this.state.name;
        localStorage.setItem ('name', JSON.stringify(name))
        const bandNameStorage = this.state.bandName;
        localStorage.setItem ('bandName', JSON.stringify(bandNameStorage))
    }

    render(){

        return (
            <InsertDataSection>
                <Link to='/'>
                    <ReturnArrowImage src ={require ('./leftArrow.png')}/>
                </Link>
                <FormBox>
                    <PageTitle> Ok, let's break the ice first! </PageTitle>
                    <Form onSubmit={this.handleSubmit}>
                        <FormLabel > What is you name? </FormLabel>
                        <FormInput name = 'name' value = {this.state.name} onChange ={this.handleChangeName}/>
                        <FormLabel> What is your favorite band? </FormLabel>
                        <FormInput name = 'bandName' value = {this.state.bandName} onChange ={this.handleChangeBandName}/>
                        <Link to='/tasklist' onClick={this.handleSubmit}> 
                            <Button type='submit'> Continue </Button>
                        </Link>
                    </Form>
                </FormBox>
            </InsertDataSection>
        )
    }
}
export default InsertData