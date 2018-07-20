import React from 'react';

export function RadioTabs (props) {
    return (
      <React.Fragment>
        <input id={props.id} type="radio" name="tab-for-group"  />
        <label htmlFor={props.id} className='tabs-label'>{props.labelName}</label>
      </React.Fragment>
    );
}