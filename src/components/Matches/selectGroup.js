import React from 'react';

import './matches.css';

export function SelectGroup(props) {
  
  const groups = ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className="matches-title-div">
      <h3 className="matches-title">{props.selectedGroup === 'all' ? 'All Matches' : `Group ${props.selectedGroup.toUpperCase()}`}</h3>
      <ul>
      {groups.map((group, idx) => {
        return (
          <li key={idx} className="matches-groups-select"
            style={props.selectedGroup === group ? {color: 'red'} : null}
            onClick={props.onClick.bind(null, group)}
          >
            {group === 'all' ? 'All Matches' : `Group ${group.toUpperCase()}`}
          </li>
        );
      })}
      </ul>
    </div>
  );
}