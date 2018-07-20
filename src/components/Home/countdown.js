import React, { Component } from 'react';

export class Countdown extends Component {
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: false,
      anouncement: '',
    };
  }

  componentDidMount() {
    this.auto = setInterval(() => this.countdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.auto);
  }

  // countdown method
  countdown() {
    // kick off between russia and saudi arabia
    var start = new Date('2018-06-14T18:00:00+03:00');
    var now = new Date();
    var interval = start - now;
    
    var days = (interval / 1000 / 3600 / 24);
    var hours = (days % 1 * 24);
    var minutes = (hours % 1 * 60);
    var seconds = (minutes % 1 * 60);

    // if countdown reach 0, change the ticker anouncement
    if (interval < 0 && now < new Date('2018-07-16')) {
      clearInterval(this.auto);
      this.setState ({ 
        status: true,
        anouncement: '2018 FIFA World Cup Has Begin!'
      });
    } else if (now > new Date('2018-07-16')) {
      this.setState ({ 
        status: true,
        anouncement: '2018 FIFA World Cup Champion is France'
      });
    } else {
      this.setState({
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds)
      });
    }
  }

  render() {
    var { days, hours, minutes, seconds, status, anouncement } = this.state;

    return (
      <React.Fragment>
        {status
          ? <div className="countdown-anouncement"><span style={{ fontSize: '2em', marginBottom: '1em' }}>{anouncement}</span></div>
          : <div className="countdown-container">
              <span className="countdown-time-title">Tournament Starts In: </span>
              <span className="countdown-time days"><strong>{days}</strong> {days === 1 ? ' Day ' : ' Days '} </span>
              <span className="countdown-time hours"><strong> {hours}</strong> Hours </span>
              <span className="countdown-time mins"><strong> {minutes < 10 ? `0${minutes}` : minutes}</strong> Minutes </span>
              <span className="countdown-time secs"><strong> {seconds < 10 ? `0${seconds}` : seconds}</strong> Seconds</span>
            </div>
        }
      </React.Fragment>
    );
  }
}
