import React from 'react'
import Time from '../timerControl/timerControl'
import Button from '../button/button'

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakTime: 250,
      workTime: 1500,
      seconds: 1500,
      timerId: false,
      active: 'workTime'
    }

    this.playStop = this.playStop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  // 
  updateTime() {
    this.setState(function(prevState, props) {
      const currentState = Object.assign(prevState);
      const stillActive = (prevState.seconds - 1) > 0;
      const nextTimer = prevState.active === 'workTime' ? 'breakTime' : 'workTime'

      currentState.seconds = stillActive ? currentState.seconds - 1 : currentState[nextTimer];
      currentState.active = stillActive ? currentState.active : nextTimer;
      if (this.timerID) {
        currentState.timerId = this.timerID;
      }
      return currentState;
    });
  }

  // 
  playStop() {
      if (this.state.timerId) {
        clearInterval(this.state.timerId);
        return this.setState({
          seconds: this.state.workTime,
          timerId: false,
          active: 'workTime'
        });
      }

      this.timerID = setInterval(() => this.updateTime(), 1000)
    }
    // 
  updateLength(timer, e) {
    if (this.state.timerId) {
      return false;
    }
    
    const state = Object.assign({}, this.state);
    state[timer] = e.target.value * 60;
    state.seconds = timer === 'workTime' ? e.target.value * 60 : state.seconds
    this.setState(state);
  }
  render() {
    const buttonString = this.state.timerId ? 'Stop' : 'Start';
    return (
      <div className="app">
        <Time active={this.state.active} seconds={this.state.seconds} />
        <Button action={this.playStop}>{buttonString}</Button>
         </div>
    )
  }
}

class Option extends React.Component {
  onChange (e) {
    e.preventDefault();
    this.props.updateLength(this.props.timer, e)
  }
  
  convertToMinutes (seconds) {
    return Math.floor(seconds / 60);
  }
  
  render() {
    return (
      <label className="input-group">
      {this.props.children}
      <input className="input-group__input" type="number" min="1" step="1" placeholder="Insert minutes" onChange={this.onChange.bind(this)} value={this.convertToMinutes(this.props.value)} />
      </label>
    )
  }
}
export default Timer