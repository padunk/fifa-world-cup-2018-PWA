import React, { Component } from 'react';

import { Countdown } from './countdown';
import { FunFact } from './funfact';
import './home.css';

export class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <Countdown />
        <FunFact />
        <div className="image-footer">
          <em style={{ fontFamily: 'Exo'}}>Image courtesy of 
            <a href="https://footballcitymediacenter.com/multimedia/20171116/760046.html" 
              target="_blank" rel="noopener noreferrer"> Alexey Filippov</a>
          </em>
        </div>
      </div>
    );
  }
}