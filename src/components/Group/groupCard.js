import React from 'react';

import { Team } from './groupStanding';

export function GroupCard(props) {

  var groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return (
      <div className="all-group content">
        {groups.map(group => {
          return (
            <div key = {group} className="group-card">
              <h3 className="group-card-title">Group: {group}</h3>
              <TeamTable groupName={group} teams={props.teams} groups={props.groups} />
            </div>
          )
        })}
      </div>
    );
}

function TeamTable(props) {
  
  const teams = props.teams.map(tim => new Team(tim, props.groups))
  .filter(team => team.group === props.groupName.toLowerCase())
  .sort(sortGroupStanding);

  return (
    <table className="team-table-list" style = {{ width: "100%" }}>
      <thead>
        <tr>
          <th>No</th>
          <th className="th-hide flag">Flag</th>
          <th className="nation">Nation</th>
          <th className="played">Played</th>
          <th className="th-hide win">Win</th>
          <th className="th-hide lose">Lose</th>
          <th className="th-hide draw">Draw</th>
          <th className="th-hide goal-for">Goal For</th>
          <th className="th-hide goal-against">Goal Against</th>
          <th className="th-hide">Goal Difference</th>
          <th className="points">Points</th>
        </tr>
      </thead>
      <tbody>
      {teams.map((team, idx) => {
        return (
          <tr key = {team.id} className="team-detail">
            <td>{idx + 1}</td>
            <td className="th-hide flag"><img src={team.flag} alt={team.name} title={team.name} style={{ width: '2em', borderRadius: '0.3125em'}} /></td>
            <td className="nation">{team.name}</td>
            <td className="played">{team.played}</td>
            <td className="th-hide win">{team.win}</td>
            <td className="th-hide lose">{team.lose}</td>
            <td className="th-hide draw">{team.draw}</td>
            <td className="th-hide goal-for">{team.goal_for}</td>
            <td className="th-hide goal-against">{team.goal_against}</td>
            <td className="th-hide goal-difference">{team.goal_diff}</td>
            <td className="points">{team.points}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

function sortGroupStanding(a, b) {
  if (a.points == b.points) {
    if (a.goal_diff == b.goal_diff) {
      if (a.goal_for == b.goal_for) {
        // check groups.winner
        // meanwhile harcode this one for senegal and japan
        return a.name > b.name;
      } else {
        return a.goal_for < b.goal_for;
      }
    } else {
      return a.goal_diff < b.goal_diff;
    }
  } else {
    return a.points < b.points;
  }
}