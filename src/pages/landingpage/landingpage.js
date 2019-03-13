import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import BackgroundImage from './background1.jpg'

const HomeSection = styled.div `
    height: 1000px;
    background-color: #d4e5f3;
    background-size: cover;
    display: flex;
    @media (max-width: 600px) {
        display: block;
    }
`
const LandingPageBox = styled.div `
    padding: 10% 10% 0 10%;
`
const LandingPageImage = styled.img `
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const PageTitle = styled.h1 `
    font-family: montserrat;
    color: #030056;
    text-align: center;
    @media (max-width: 600px) {
        text-align: center;
    }
`
const Paragraph = styled.p `
    font-family: montserrat;
    color: #030056;
    text-align: center;
    font-size: 20px;
    line-height: 250%;
    padding: 14% 0;
    @media (max-width: 600px){
        width: auto;
        line-height: 150%;
        }
`
const DivForButtons = styled.div `
    display: flex;
    @media (max-width: 600px) {
        display: block;
    }
`
const StyledA = styled.a`
    width: 100%;

`
const StyledLink = styled(Link) `
    width: 100%;

`
const Button = styled.button `
    background-color: #0900ff;
    border-radius: 15px;
    border-style: none;
    font-family: montserrat;
    font-size: 20px;
    color: #8ffcff;
    padding: 5% 20%;
    margin: 15% 0 0 12%;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 600px) {
        display: block;
        width: 100%;
        margin: 10% 0 0 0%;
    }
`
class LandingPage extends React.Component {
    render() {
        return (
            <HomeSection>
                <LandingPageBox>
                    <PageTitle>Welcome to pomodoro planner!</PageTitle>
                    <Paragraph> Pomodoro will help you organize your daily life! This is a daily planner to help you get A LOT of things done. You add all you have to do in the day and once your are ready click start and your 15 minutes will start counting. After it you get 5 minutes to relax.</Paragraph>
                    <DivForButtons>
                        <StyledA href='https://francescocirillo.com/pages/pomodoro-technique'>
                            <Button > Learn More </Button>
                        </StyledA>
                        <StyledLink to='/insertdata'>
                            <Button> START</Button>     
                        </StyledLink>
                    </DivForButtons>
                </LandingPageBox>
                <LandingPageImage src ={require ('./backgroundImage.jpg')}/>
            </HomeSection>
            
        )
    }
}
export default LandingPage