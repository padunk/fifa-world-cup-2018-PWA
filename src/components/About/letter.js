import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import './styles.css';

const greetings = 'Thank you, For Coming, To This Site, See You In Four Years, Qatar World Cup 2022, Enjoy :)'.split(',');

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
    let id = {};
    
    return letters.join('').split('').map((letter, idx) => {
      id[letter] ? id[letter]++ : id[letter] = 1;
      return <span key={letter + id[letter]} className="letter-span">{letter}</span>;
    });
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