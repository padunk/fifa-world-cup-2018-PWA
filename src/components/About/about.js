import React, { Component } from 'react';

import LetterDemo from './letter';

export class About extends Component {
  render() {
    return (
      <div style={aboutStyles.div}>
        <div>
          <h4 style={aboutStyles.title} >Made with &hearts; &hearts; &hearts; by &Lambda;braham &lambda;. &lambda;.</h4>
        </div>
        <a href="https://github.com/padunk" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" 
            alt="github-mark" className="github-logo"
            style={{ width: '3em'}}
          />
        </a>
        <p style={aboutStyles.source} >Source of data from this awesome 
          <a href="https://github.com/lsv/fifa-worldcup-2018" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none'}} > Repo </a>
        on GitHub
        </p>
        <LetterDemo />
      </div>
    );
  }
}

const aboutStyles = {
  div: {
    display: 'flex',
    flexFlow: 'column',
    paddingBottom: '1.25em',
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  title: {
    fontWeigth: '100',
    fontSize: '2em'
  },
  source: {
    fontFamily: 'Exo, cursive',
    fontSize: '1em',
  }
}