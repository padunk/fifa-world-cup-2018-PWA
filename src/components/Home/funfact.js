import React, {Component} from 'react';

import { funFact } from '../utils/funFact';
import { countWords } from '../utils/helpers';

import './home.css';

const NORMAL_WPM = 3; // normal words per minute for average reader.

function AnimatedText (props) {
  let len = countWords(props.fact[props.indexShow]);

    return (
      <div className="fact-body-div">
        <div className="fact-body">
          <p className="fact-body-text" style={ len > 25 ? {fontSize: '1em'} : {fontSize: '1.25em'} }>
            {props.fact[props.indexShow]}
          </p>
        </div>
      </div>
    );
}

export class FunFact extends Component {
  constructor(){
    super();
    
    this.state = {
      indexShow: 0,
      funFact: funFact,
      time: funFact.map(fact => Math.round(countWords(fact) / NORMAL_WPM * 1000)),
    }
    
    this.next = this.next.bind(this);
    this.slideShow = this.slideShow.bind(this);
  }
  
  componentDidMount(){
    this.slideShow();
  }
  
  componentWillUnmount(){
    clearTimeout(this.timeout);
  }
  
  next(){
    if (this.state.indexShow === this.state.funFact.length - 1) {
      this.setState({ indexShow: 0 });
    } else {
      this.setState({ indexShow: this.state.indexShow + 1 });
    }
  }

  slideShow() {
    const { indexShow, time } = this.state;
    this.next();
    this.timeout = setTimeout(() => this.slideShow(), time[indexShow + 1]);
  }
  
  render() {
    return(
      <div className="fact-main">
        <div className="fact-title-div">
          <h2 className="fact-title">World Cup Fun Fact</h2>
        </div>
        <AnimatedText
          indexShow = { this.state.indexShow }
          fact = { this.state.funFact }
        />
      </div>
    );
  }
}
