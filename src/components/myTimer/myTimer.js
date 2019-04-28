import React from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import BackgroundImage from './backgroundImage.jpg'

const TimerSection = styled.section `
    background-image: url(${BackgroundImage});
    height: 1000px;
    background-size: cover;
    background-position: 850px 37%;
    padding: 5% 12%;
    @media (max-width: 600px) {
        height: 1200px;
        width: 200%;
        padding: 28% 0;
        }
    }
`
const ReturnArrowImage = styled.img `
    margin: 3% 0 0 0%;
    @media (max-width: 600px) {
        margin: 0 0 0 2%;
    }
    
`
const TimerBox = styled.div `
    border-radius: 56%;
    padding: 15% 34%;
    background-color: #0900ff7a;
    @media (max-width: 600px) {
    border-radius: 0;
    padding: 10%;
    }
`
const PageTitle = styled.h1 `
    font-family: montserrat;
    font-size: 30px;
    text-align: center;
    color: #030056;
`
const TimerGif = styled.img `
`
const Paragraph = styled.p `
    font-family: montserrat;
    color: #030056;
    text-align: center;
    font-size: 20px;
    line-height: 250%;
    @media (max-width: 600px){
        color: #8ffcff;
    }
`
const TimerWrapper = styled.div `
    width: 500px;
    background-color: black;
    border-radius: 20%;
`
const TimeBar = styled.div `
    width: ${props => props.width};
    background-color: blue;
    height: 100%;

`
const TextTimer = styled.p `
    font-family: montserrat;
    font-size: 30px;
    color: #8ffcff;
    padding: 4% 40%;
`
const Button = styled.button `
    background-color: #00f9ff;
    border-radius: 15px;
    border-style: none;
    font-family: montserrat;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    color: #030056;
    padding: 2% 5%;
`
class MyTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 24,
            seconds: 59,
            widthValue: 100,
            stopTimer: false,
        };
      }

      componentDidMount() {
            setInterval(
            () => this.tickminutes(),
            60000),
            setInterval( 
            () => this.tickseconds(), 1000);
             }
    
    
     componentWillUnmount() {}

    
      tickminutes() {
        var myminutes = this.state.minutes;
        {myminutes > 0 ?
        this.setState({
          minutes: myminutes - 1,
        }) : 
        this.setState({
            minutes: 0,
          }) 
      };
    }
      tickseconds() {
          var myseconds = this.state.seconds
           { myseconds > 0 ? 
          this.setState({
              seconds : myseconds - 1,
              widthValue: this.state.widthValue - 0.07,
          }): 
          this.setState ({
              seconds : 59,
          })
        }
    }
      redirectToVideo = () => {
          this.state.minutes === 0 && 
          <Redirect to='/congrats'/>
      }

      putTimerOnPause = () => {
        this.setState ({
            stopTimer: !this.state.stopTimer,
        })
    }
      render() {
        var widthValue = this.state.widthValue;

        return (
          <TimerSection>
            <Link to='/tasklist'>
                <ReturnArrowImage src ={require ('./leftArrow.png')}/>
            </Link>            
            <TimerBox>
                <PageTitle>GAME ON!</PageTitle>
                <TimerGif src={require('./rocket.gif')}/>
                <Paragraph>You have {this.state.minutes + 1} minutes to fully concentrate! </Paragraph>
                <TimerWrapper>
                    <TimeBar width = {widthValue + '%'}> 
                    <TextTimer>{this.state.minutes >= 10 ? this.state.minutes : "0" + this.state.minutes}: {this.state.seconds >= 10 ? this.state.seconds : "0" + this.state.seconds} </TextTimer>
                </TimeBar>
                </TimerWrapper>
                <Button onClick={this.putTimerOnPause}> PAUSE </Button>
            </TimerBox>
          </TimerSection>
        );
      }
    }
export default MyTimer