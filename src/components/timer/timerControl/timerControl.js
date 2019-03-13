import React from 'react'

class Time extends React.Component {
    twoDigits(num) {
      return num > 9 ? "" + num : "0" + num;
    }
  
    convertToHhMmSs(seconds) {
      const h = this.twoDigits(Math.floor(seconds / 3600));
      const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
      const s = this.twoDigits(Math.floor(seconds % 3600 % 60));
      return `${h}:${m}:${s}`;
    };
  
    render() {
      var remainingTime = this.convertToHhMmSs(this.props.seconds);
      var activeTimer = this.props.active === 'workTime' ? 'It\'s time to work!' : 'Take a little break';
  
      return (
        <div className="timer">
          <p className="timer__description">{activeTimer}</p>
          <p className="timer__time">{remainingTime}</p>
        </div>
      )
    }
  }
export default Time