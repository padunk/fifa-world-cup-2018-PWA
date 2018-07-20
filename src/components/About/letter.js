import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import './styles.css';

const greetings = 'Thank you, For Coming, To This, World Cup Site, Enjoy :)'.split(',');

class LetterDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: ['Thank you'],
      index: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.nextSlide();
      this.setState({
        letters: [greetings[this.state.index]]
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  nextSlide() {
    if (this.state.index === greetings.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState((prevState) => ({ index: prevState.index + 1 }));
    }
  }

  onStart({ entering, leaving }, node) {
    if (entering) {
      node.classList.add('enter');
    } else if (leaving) {
      node.classList.add('leave');
    } else {
      node.classList.remove('enter', 'leave');
    }
  }

  renderLetters() {
    const { letters } = this.state;
    
    return letters.join('').split('').map((letter, idx) => (
      <span key={idx} className="letter-span">{letter}</span>
    ));
  }

  render() {
    const animations = {
      enterAnimation: {
        from: {
          transform: 'translateY(-30px)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
      leaveAnimation: {
        from: {
          transform: 'translateY(0)',
          opacity: 1,
        },
        to: {
          transform: 'translateY(30px)',
          opacity: 0,
        },
      },
    };

    return (
      <div className="letter-demo">
        <FlipMove
          duration={750}
          easing='ease'
          onStart={this.onStart}
          {...animations}
          {...this.props}
        >
          {this.renderLetters()}
        </FlipMove>
      </div>
    );
  }
}

export default LetterDemo;