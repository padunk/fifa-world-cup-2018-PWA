import React from 'react';

export const NotFound = () => {
  return (
    <div className = 'notfound' style={notfoundStyles} >
      <h2>...four_o_four...</h2>
    </div>
  );
}

const notfoundStyles = {
  fontFamily: 'sans-serif',
  fontSize: '3em',
  margin: '3em auto',
  padding: '0.5em auto',
  width: '100%'
}